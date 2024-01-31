import { icons } from "@/lib/constants/skills";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function Introduction() {
  return (
    <>
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start">
          <div className="flex flex-col md:flex-row w-full items-center gap-x-8 gap-y-8">
            <div className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-y-4 icon-translate">
              <h2 className="text-2xl font-bold leading-tight mb-0">
                Show off your skills 🛠️
              </h2>
              <p className="text-lg text-center md:text-left mb-0">
                Showcasing technical skills and project achievements by
                selecting various options such as programming languages,
                frameworks, etc.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 md:ml-auto icon-translate">
              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.react}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="React JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.vuejs}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Vue JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.svelte}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Svelte"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.python}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Python"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.go}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Go"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.tailwind}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.typescript}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="TypeScript"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.tensorflow}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Tensorflow"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.graphql}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="GraphQL"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.php}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="PHP"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.supabase}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Supabase"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.firebase}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Firebase"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.figma}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Figma"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.nextjs}
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Next JS"
                  />
                  <Image
                    src={icons.nextjsLight}
                    width={48}
                    height={48}
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Next JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.nestjs}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Nest JS"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.babel}
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Babel"
                  />
                  <Image
                    src={icons.babelLight}
                    width={48}
                    height={48}
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Babel"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.flutter}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Flutter"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.express}
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Express JS"
                  />
                  <Image
                    src={icons.expressLight}
                    width={48}
                    height={48}
                    className="hidden dark:flex scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Express JS"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.sass}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Sass"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.swift}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Swift"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.linux}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Linux"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.kubernetes}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Kubernetes"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.gcp}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Google Cloud"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.jenkins}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Jenkins"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src={icons.android}
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Android"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex-col flex items-start justify-center">
          <div className="flex flex-col-reverse md:flex-row w-full items-center gap-x-8 gap-y-8">
            <div className="flex flex-col gap-y-4 icon-translate">
              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/polywork.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Polywork"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Facebook"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Instagram"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/hashnode.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Hashnode"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox.svg"
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="CodeSandbox"
                  />
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codesandbox-dark.svg"
                    width={48}
                    height={48}
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="CodeSandbox"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitch.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Twitch"
                  />
                </div>
              </div>
              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Stack Overflow"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="YouTube"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Discord"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/dribbble.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Dribbble"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12"></div>
              </div>
              <div className="flex gap-4 mx-auto items-center">
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
                    width={48}
                    height={48}
                    className="scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="X"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg"
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Medium"
                  />
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium-dark.svg"
                    width={48}
                    height={48}
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Medium"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12">
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/threads.svg"
                    width={48}
                    height={48}
                    className="flex dark:hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Threads"
                  />
                  <Image
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/threads-dark.svg"
                    width={48}
                    height={48}
                    className="dark:flex hidden scale-100 transition-all duration-300 hover:scale-125 ease-in-out"
                    alt="Threads"
                  />
                </div>
                <div className="w-10 sm:w-12 md:w-12"></div>
                <div className="w-10 sm:w-12 md:w-12"></div>
              </div>
            </div>
            <div className="flex grow flex-col md:items-end justify-end items-center gap-y-4 md:ml-auto icon-translate">
              <h2 className="text-2xl font-bold leading-tight mb-0">
                Share your socials📮
              </h2>
              <p className="text-lg mb-0">
                Add links to all of your social profiles and blogs in seconds.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-full flex items-center bg-light-100 dark:bg-dark-800 py-24">
        <article className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-y-8">
          <div className="flex w-full md:w-1/2 flex-col items-center md:items-start gap-y-4 icon-translate">
            <h2 className="text-2xl font-bold leading-tight mb-0">
              Add some stats📊
            </h2>
            <p className="text-lg text-center md:text-left mb-0">
              Add necessary data displays to your GitHub to attract more
              viewers.
            </p>
          </div>
          <div className="w-full md:w-1/2 block relative icon-translate">
            <div className="relative h-48 sm:h-80 overflow-hidden">
              <Image
                src="/stats-illustration.svg"
                loading="lazy"
                decoding="async"
                width={100}
                height={100}
                className="object-fit absolute h-full w-full inset-0 text-transparent"
                alt="Statistics illustration"
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
