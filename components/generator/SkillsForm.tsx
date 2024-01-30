/* eslint-disable @next/next/no-img-element */
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  categorizedSkills,
  icons,
  skillWebsites,
} from "@/lib/constants/skills";
import React, { useEffect, useState } from "react";

interface IProps {
  githubUsername: string;
  setMarkdown: (markdown: string) => void;
  setLanguageStatsMarkdown: (value: string) => void;
}

const SkillsForm: React.FC<IProps> = ({
  githubUsername,
  setMarkdown,
  setLanguageStatsMarkdown,
}) => {
  // const [search, setSearch] = useState<string>(""); // 可做搜索
  const [skillsData, setSkillsData] = useState<string[]>([]);
  const [hasLanguageStats, setHasLanguageStats] = useState<boolean>(true);

  const handleSkillChange = (skill: string, checked: boolean) => {
    if (checked) {
      setSkillsData([...skillsData, skill]);
    } else {
      setSkillsData(skillsData.filter((s) => s !== skill));
    }
  };

  const filteredCategories = Object.keys(categorizedSkills).filter((key) => {
    // const filtered = categorizedSkills[key].skills.filter(
    //   (skill: string) =>
    //     skill.toLowerCase().includes(search.toLowerCase())
    // );
    // return filtered.length !== 0;
    return categorizedSkills[key].skills;
  });

  const onCheckedHasLanguageStats = (checked: boolean) => {
    setHasLanguageStats(checked);
  };

  useEffect(() => {
    const markdown = skillsData
      .map((key) => {
        return `
          <a target="_blank" href="${skillWebsites[key]}" target="_blank" style="display: inline-block;">
            <img src="${icons[key]}" alt="${key}" width="42" height="42" />
          </a>
          `;
      })
      .join("\n");

    setMarkdown(markdown);
  }, [skillsData, setMarkdown]);

  useEffect(() => {
    if (githubUsername && hasLanguageStats) {
      const markdown = `
        <a href="https://github.com/${githubUsername}" target="_blank">
          <img height="200" align="center" src="https://github-readme-stats-one-mu-82.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&langs_count=8&bg_color=ffffff#gh-light-mode-only" />
        </a>
        `;
      setLanguageStatsMarkdown(markdown);
    }
  }, [hasLanguageStats, githubUsername, setLanguageStatsMarkdown]);

  return (
    <>
      {filteredCategories.map((key) => (
        <div key={key} className="">
          <div className="mb-1 text-sm font-medium text-gray-700">
            {categorizedSkills[key].title}
          </div>
          <div className="flex flex-row flex-wrap text-gray-700">
            {
              // categorizedSkills[key].skills
              // .filter((skill: string) =>
              //   skill.toLowerCase().includes(search.toLowerCase())
              // )
              categorizedSkills[key].skills.map((skill: string) => (
                <div key={skill} className={skill}>
                  <input
                    type="checkbox"
                    id={skill}
                    className="peer hidden"
                    checked={skillsData.includes(skill)}
                    onChange={(e) => handleSkillChange(skill, e.target.checked)}
                  />
                  <label
                    htmlFor={skill}
                    className="cursor-pointer text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 transition-colors duration-200 ease-in-out peer-checked:bg-amber-200 peer-checked:text-amber-900 peer-checked:border-amber-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="mr-2.5 w-5 h-5"
                      src={icons[skill]}
                      alt={skill}
                    />
                    {skill}
                  </label>
                </div>
              ))
            }
          </div>
        </div>
      ))}

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
            checked={hasLanguageStats}
            onCheckedChange={onCheckedHasLanguageStats}
          />
          <label
            htmlFor="stats"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show the stats?
          </label>
        </div>
        {hasLanguageStats ? (
          <div>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener norefferer nofollow"
            >
              <img
                height="200"
                alt={`https://github.com/${
                  githubUsername ||
                  process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME
                }`}
                src={`https://github-readme-stats-one-mu-82.vercel.app/api/top-langs/?username=${
                  githubUsername ||
                  process.env.NEXT_PUBLIC_EXAMPLE_GITHUB_USERNAME
                }&layout=compact&langs_count=8&bg_color=ffffff#gh-light-mode-only`}
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

export default SkillsForm;
