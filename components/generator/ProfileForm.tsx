"use client";
import { Input } from "@/components/ui/input";
import { profileForm as profileFormConfig } from "@/lib/constants/profile";
import React, { useEffect, useState } from "react";

type ProfileFormField = {
  name: string;
  label: string;
  type: string;
  value: string;
  required: boolean;
  placeholder: string;
};

type ProfileFormProps = {
  profileData: { [key: string]: string };
  setProfileData: (data: { [key: string]: string }) => void;
};

const ProfileForm: React.FC<{ setMarkdown: (markdown: string) => void }> = ({
  setMarkdown,
}) => {
  const [profileData, setProfileData] = useState<{ [key: string]: string }>(
    profileFormConfig.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const markdown = `
      <h1>${profileData.title}</h1>

      <p>${profileData.subTitle}</p>
    `;

    setMarkdown(markdown);
  }, [profileData, setMarkdown]);

  return (
    <>
      {profileFormConfig.map((field: ProfileFormField, index) => (
        <div key={index} className="col-span-6 sm:col-span-3">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          <Input
            type={field.type}
            name={field.name}
            id={field.name}
            value={profileData[field.name]}
            required={field.required}
            placeholder={field.placeholder}
            onChange={handleInputChange}
          />
        </div>
      ))}
    </>
  );
};

export default ProfileForm;
