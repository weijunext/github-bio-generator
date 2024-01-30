"use client";
import { Input } from "@/components/ui/input";
import { socialForm as socialFormConfig } from "@/lib/constants/social";
import React, { useEffect, useState } from "react";

type SocialField = {
  name: string;
  icon: string;
  placeholder: string;
};

type SocialInfo = {
  name: string;
  link: string;
  icon: string;
  shields: string;
  placeholder: string;
};
interface SocialData {
  [key: string]: string;
}

const SocialForm: React.FC<{ setMarkdown: (markdown: string) => void }> = ({
  setMarkdown,
}) => {
  const [socialInputs, setSocialInputs] = useState<SocialData>(
    socialFormConfig.reduce((acc, social) => {
      acc[social.name] = "";
      return acc;
    }, {} as SocialData)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialInputs({ ...socialInputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const markdown = Object.keys(socialInputs)
      .map((key) => {
        if (socialInputs[key]) {
          const info = socialFormConfig.find(
            (i) => i.name === key
          ) as SocialInfo;
          return `<a target="_blank" href="${socialInputs[key]}" style="display: inline-block;">
              <img src="${info.shields}" alt="${info.name}" />
            </a>
            `;
        }
        return "";
      })
      .filter((i) => i)
      .join("\n");

    setMarkdown(markdown);
  }, [socialInputs, setMarkdown]);

  return (
    <div className="grid grid-cols-2 gap-8">
      {socialFormConfig.map((social: SocialField) => (
        <div key={social.name} className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-1 py-1.5 text-sm text-gray-500 dark:border-slate-800 dark:bg-slate-600">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={social.icon}
              className="w-5 h-5 sm:w-8"
              alt={social.name}
            />
          </span>
          <Input
            type="text"
            name={social.name}
            id={social.name}
            value={socialInputs[social.name]}
            onChange={handleInputChange}
            className="block w-full flex-1 px-3 rounded-none rounded-r-md border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 dark:bg-gray-700 dark:border-slate-800 dark:placeholder-gray-400 dark:text-white"
            placeholder={social.placeholder}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialForm;
