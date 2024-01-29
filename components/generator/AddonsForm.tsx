"use client";
import React from "react";

type Addon = {
  name: string;
  label: string;
  checked: boolean;
};

type AddonsFormProps = {
  addons: Addon[];
  setAddons: React.Dispatch<React.SetStateAction<Addon[]>>;
};

const AddonsForm: React.FC<AddonsFormProps> = ({ addons, setAddons }) => {
  const handleCheckboxChange = (addonName: string) => {
    const updatedAddons = addons.map((addon) =>
      addon.name === addonName ? { ...addon, checked: !addon.checked } : addon
    );
    setAddons(updatedAddons);
  };

  return (
    <div className="flex flex-col">
      {addons.map((addon) => (
        <div key={addon.name} className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-2"
            htmlFor={addon.name}
          >
            <input
              id={addon.name}
              type="checkbox"
              checked={addon.checked}
              onChange={() => handleCheckboxChange(addon.name)}
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <label
            className="mt-px cursor-pointer select-none font-light text-gray-700 dark:text-white dark:border-slate-800"
            htmlFor={addon.name}
          >
            {addon.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default AddonsForm;
