import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqList } from "@/lib/constants/faq";

export default function FAQ() {
  return (
    <div
      id="faq"
      className="mx-= my-24 md:w-[50vw] w-[90vw] md:my-28 2xl:my-32"
    >
      <p className="text-center text-base font-semibold leading-7 text-amber-500">
        Frequently asked questions
      </p>{" "}
      <h2 className="text-center font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-gray-200">
        Everything you need to know
      </h2>{" "}
      <Accordion type="single" collapsible>
        {faqList.map((i) => {
          return (
            <AccordionItem value={i.question} key={i.question}>
              <AccordionTrigger>{i.question}</AccordionTrigger>
              <AccordionContent>{i.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
