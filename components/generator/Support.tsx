"use client";
import { supportForm as supportFormConfig } from "@/lib/constants/support";
import React, { useEffect, useState } from "react";

interface SupportOption {
  id: string;
  name: string;
  placeholder: string;
  icon: string;
}
interface SupportData {
  [key: string]: string;
}

const SupportForm: React.FC<{ setMarkdown: (markdown: string) => void }> = ({
  setMarkdown,
}) => {
  const [supportData, setSupportData] = useState<SupportData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupportData({ ...supportData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const markdown = Object.keys(supportData)
      .map((key) => {
        const support = supportFormConfig[key];
        if (supportData[key]) {
          return `
            <p>
              <a href="${supportData[key]}">
                <img src="${support.icon}" width="160" alt="${key}" />
              </a>
            </p>
            `;
        }
        return "";
      })
      .join("\n");

    setMarkdown(markdown);
  }, [supportData, setMarkdown]);

  return (
    <div className="flex flex-col gap-4">
      {Object.values(supportFormConfig as Record<string, SupportOption>).map(
        (support: SupportOption) => (
          <div key={support.id} className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={support.icon}
              className="h-6 sm:h-10"
              alt={support.name}
            />
            <input
              placeholder={support.placeholder}
              id={support.id}
              value={supportData[support.id] || ""}
              onChange={handleChange}
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 dark:text-white dark:border-slate-800"
            />
          </div>
        )
      )}
    </div>
  );
};

export default SupportForm;
