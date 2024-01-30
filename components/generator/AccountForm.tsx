"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

const extractGithubUsername = (input: string) => {
  if (input.startsWith("http://") || input.startsWith("https://")) {
    const regex = /https?:\/\/(www\.)?github\.com\/([^\/\s]+)\/?/;
    const match = input.match(regex);
    return match ? match[2] : null;
  } else {
    return input;
  }
};

interface IProps {
  getGithubUsername: (username: string) => void;
  setStatsMarkdown: (value: string) => void;
}

const AccountForm: React.FC<IProps> = ({
  getGithubUsername,
  setStatsMarkdown,
}) => {
  const [githubUsername, setGithubUsername] = useState<string>("");
  const [hasStats, setHasStats] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const username = extractGithubUsername(e.target.value) as string;
      setGithubUsername(username);
    } else {
      setGithubUsername("");
    }
  };
  const onCheckedHasStats = (checked: boolean) => {
    setHasStats(checked);
  };

  useEffect(() => {
    getGithubUsername(githubUsername);
  }, [githubUsername, getGithubUsername]);

  useEffect(() => {
    if (githubUsername && hasStats) {
      const markdown = `
        <a href="https://github.com/${githubUsername}" target="_blank">
          <img height="200" align="center" src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&count_private=true&theme=radical" />
        </a>
        `;
      setStatsMarkdown(markdown);
    }
  }, [hasStats, githubUsername, setStatsMarkdown]);

  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <Label
          htmlFor="Github URL"
          className="block text-sm font-medium text-gray-700"
        >
          Github URL
        </Label>
        <Input
          type="text"
          name="github"
          id="github"
          value={githubUsername}
          placeholder={`Enter your GitHub homepage URL or username. eg: ${process.env.NEXT_PUBLIC_EXAMPLE_ACCOUNT}`}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <Label
          htmlFor="Github URL"
          className="block text-sm font-medium text-gray-700"
        >
          Show Stats?
        </Label>
        <div className="flex items-center space-x-2 my-2">
          <Checkbox
            id="stats"
            checked={hasStats}
            onCheckedChange={onCheckedHasStats}
          />
          <label
            htmlFor="stats"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show the stats?
          </label>
        </div>

        {hasStats ? (
          <div>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME}`}
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="200"
                alt={`https://github.com/${
                  githubUsername ||
                  process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME
                }`}
                src={`https://github-readme-stats.vercel.app/api?username=${
                  githubUsername ||
                  process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME
                }&count_private=true&theme=radical`}
              />
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default AccountForm;
