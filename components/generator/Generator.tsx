import AddonsForm from "@/components/generator/AddonsForm";
import ProfileForm from "@/components/generator/ProfileForm";
import SkillsForm from "@/components/generator/SkillsForm";
import SocialForm from "@/components/generator/SocialForm";
import SupportForm from "@/components/generator/Support";
import React from "react";

type Generator = {
  title: string;
  subTitle: string;
  type: "profile" | "skills" | "social" | "addons" | "supports";
};

const generators: Generator[] = [
  {
    title: "Profile",
    subTitle: "Some public information about you",
    type: "profile",
  },
  {
    title: "Skills",
    subTitle: "Showcase your skills",
    type: "skills",
  },
  {
    title: "Social Links",
    subTitle: "Add some social media links",
    type: "social",
  },
  {
    title: "Add-ons",
    subTitle: "",
    type: "addons",
  },
  {
    title: "Supports",
    subTitle: "",
    type: "supports",
  },
];

const Generator: React.FC = () => {
  return (
    <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 mt-20 bg-slate-100 dark:bg-slate-700">
      {generators.map((generator, index) => (
        <React.Fragment key={index}>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            {/* left Title */}
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0 sticky top-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
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
                  {generator.type === "profile" && <ProfileForm />}
                  {generator.type === "skills" && <SkillsForm />}
                  {generator.type === "social" && <SocialForm />}
                  {generator.type === "addons" && <AddonsForm />}
                  {generator.type === "supports" && <SupportForm />}
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
      <button
        id="generate"
        type="button"
        className="flex select-none mx-auto items-center gap-3 rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/50 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Generator Bio
      </button>
    </div>
  );
};

export default Generator;
