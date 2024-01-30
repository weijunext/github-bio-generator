import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/preview.modules.css";
import { Parser } from "html-to-react";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

export const PreviewSheet: React.FC<{
  generateBio: () => void;
  githubBio: string;
}> = ({ generateBio, githubBio }) => {
  const htmlParser = new (Parser as any)();

  const copyCode = () => {
    navigator.clipboard.writeText(githubBio);
    toast("✂️ Copied!");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="flex select-none mx-auto items-center gap-3 rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/50 hover:bg-amber-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={generateBio}
        >
          Generate Bio
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg">
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
          <Button type="submit" className="mt-2" onClick={copyCode}>
            <CopyIcon className="h-4 w-4 mr-2" /> Copy code
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
