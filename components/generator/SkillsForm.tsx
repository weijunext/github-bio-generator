"use client";
import {
  categorizedSkills,
  icons,
  skillWebsites,
} from "@/lib/constants/skills";
import React, { useEffect, useState } from "react";

const SkillsForm: React.FC<{ setMarkdown: (markdown: string) => void }> = ({
  setMarkdown,
}) => {
  const [skillsData, setSkillsData] = useState<string[]>([]);
  // const [search, setSearch] = useState<string>(""); // 可做搜索

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

  useEffect(() => {
    const markdown = skillsData
      .map((key) => {
        return `
          <a target="_blank" href="${skillWebsites[key]}" style="display: inline-block;">
            <img src="${icons[key]}" alt="${key}" width="42" height="42" />
          </a>
          `;
      })
      .join("\n");

    setMarkdown(markdown);
  }, [skillsData, setMarkdown]);

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
    </>
  );
};

export default SkillsForm;
