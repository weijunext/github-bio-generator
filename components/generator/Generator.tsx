"use client";
import AccountForm from "@/components/generator/AccountForm";
import { PreviewSheet } from "@/components/generator/PreviewSheet";
import ProfileForm from "@/components/generator/ProfileForm";
import SkillsForm from "@/components/generator/SkillsForm";
import SocialForm from "@/components/generator/SocialForm";
import SupportForm from "@/components/generator/Support";
import { generators } from "@/lib/constants/generators";
import React, { useState } from "react";

function removeLeadingSpaces(str: string) {
  return str
    .split("\n")
    .map((line) => line.trimStart())
    .join("\n");
}

const Generator: React.FC = () => {
  const [githubUsername, setGithubUsername] = useState("");

  const [statsMarkdown, setStatsMarkdown] = useState("");
  const [profileMarkdown, setProfileMarkdown] = useState("");
  const [socialMarkdown, setSocialMarkdown] = useState("");
  const [skillsMarkdown, setSkillsMarkdown] = useState("");
  const [languageStatsMarkdown, setLanguageStatsMarkdown] = useState("");
  const [supportMarkdown, setSupportMarkdown] = useState("");

  const [githubBio, setGithubBio] = useState("");

  const getGithubUsername = (val: string) => {
    setGithubUsername(val);
  };

  const generateBio = () => {
    // 这里是组合所有表单数据生成 Markdown 格式的逻辑
    let markdownBio = "";

    if (statsMarkdown) {
      markdownBio += statsMarkdown;
    }

    if (profileMarkdown) {
      markdownBio += profileMarkdown;
    }

    if (skillsMarkdown) {
      markdownBio += `
        <h2>🛠 Skills</h2>
          <p>
            ${skillsMarkdown}
          </p>
        `;
    }
    if (languageStatsMarkdown) {
      markdownBio += languageStatsMarkdown;
    }

    if (socialMarkdown) {
      markdownBio += `
        <h2>📪 Contact me</h2>
        <p>
          ${socialMarkdown}
        </p>
        `;
    }

    if (supportMarkdown) {
      markdownBio += `
        <h2>☕️ Support Me</h2>
        <p>${supportMarkdown}</p>
        `;
    }

    const cleanedMarkdownBio = removeLeadingSpaces(markdownBio) as string;
    setGithubBio(cleanedMarkdownBio);
  };

  return (
    <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 mt-20 bg-slate-100 dark:bg-slate-700">
      {generators.map((generator, index) => (
        <React.Fragment key={index}>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* left Title */}
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 sticky top-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-5 md:col-span-2 md:mt-0">
                  {generator.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {generator.subTitle}
                </p>
              </div>
            </div>
            {/* right Form */}
            <div className="mt-5 md:col-span-2 md:mt-0 relative">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-4 bg-white px-4 py-5 sm:p-6 dark:bg-slate-500">
                  {generator.type === "account" && (
                    <AccountForm
                      getGithubUsername={getGithubUsername}
                      setStatsMarkdown={setStatsMarkdown}
                    />
                  )}
                  {generator.type === "profile" && (
                    <ProfileForm setMarkdown={setProfileMarkdown} />
                  )}
                  {generator.type === "skills" && (
                    <SkillsForm
                      setMarkdown={setSkillsMarkdown}
                      setLanguageStatsMarkdown={setLanguageStatsMarkdown}
                      githubUsername={githubUsername}
                    />
                  )}
                  {generator.type === "social" && (
                    <SocialForm setMarkdown={setSocialMarkdown} />
                  )}
                  {generator.type === "supports" && (
                    <SupportForm setMarkdown={setSupportMarkdown} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
            </div>
          </div>
        </React.Fragment>
      ))}
      {/* Generator button */}
      <PreviewSheet generateBio={generateBio} githubBio={githubBio} />
    </div>
  );
};

export default Generator;
