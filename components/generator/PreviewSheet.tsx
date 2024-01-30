import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/preview.modules.css";
import { Parser } from "html-to-react";

export const PreviewSheet: React.FC<{
  generateBio: () => void;
  githubBio: string;
}> = ({ generateBio, githubBio }) => {
  const htmlParser = new (Parser as any)();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex mx-auto items-center select-none gap-3 rounded-lg bg-amber-500 mt-3 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/50 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={generateBio}
        >
          Generate Bio
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Preview</SheetTitle>
          <SheetDescription>
            Click &ldquo;Copy code&rdquo; and paste on your github Readme.
          </SheetDescription>
        </SheetHeader>
        <div className="markdown-body border rounded-sm p-2">
          {htmlParser.parse(githubBio)}
        </div>
        <SheetFooter className="border-t">
          <SheetClose asChild>
            <Button type="submit" className="mt-2">
              Copy code
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
