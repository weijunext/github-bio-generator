"use client";
import { profileForm as profileFormConfig } from "@/lib/constants/profile";
import React from "react";

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

const ProfileForm: React.FC<ProfileFormProps> = ({
  profileData,
  setProfileData,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

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
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={profileData[field.name]}
            required={field.required}
            placeholder={field.placeholder}
            onChange={handleInputChange}
            className="mt-1 p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      ))}
    </>
  );
};

export default ProfileForm;
