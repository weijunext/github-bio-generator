"use client";
import { socialForm } from "@/lib/constants/social";
import React, { useState } from "react";

type SocialField = {
  name: string;
  icon: string;
  placeholder: string;
};

const SocialForm: React.FC = () => {
  const [socialInputs, setSocialInputs] = useState<{ [key: string]: string }>(
    socialForm.reduce((acc, social) => {
      acc[social.name] = "";
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialInputs({ ...socialInputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {socialForm.map((social: SocialField) => (
        <div key={social.name} className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-1 py-1.5 text-sm text-gray-500 dark:border-slate-800 dark:bg-slate-600">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={social.icon}
              className="w-5 h-5 sm:w-8"
              alt={social.name}
            />
          </span>
          <input
            type="text"
            name={social.name}
            id={social.name}
            value={socialInputs[social.name]}
            onChange={handleInputChange}
            className="block w-full flex-1 px-3 rounded-none rounded-r-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={social.placeholder}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialForm;
