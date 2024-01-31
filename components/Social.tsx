import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

import { SiBuymeacoffee } from "react-icons/si";

const Social = () => {
  return (
    <div className="mx-auto flex flex-row items-center">
      {/* <Link
        href="https://github.com/weijunext/github-bio"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsGithub className="text-lg" />
      </Link> */}
      <Link
        href="https://twitter.com/weijunext"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsTwitterX className="text-lg" />
      </Link>
      <Link
        href="https://www.buymeacoffee.com/weijunext"
        target="_blank"
        rel="noopener norefferer nofollow"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <SiBuymeacoffee className="text-lg" />
      </Link>
    </div>
  );
};
export default Social;
