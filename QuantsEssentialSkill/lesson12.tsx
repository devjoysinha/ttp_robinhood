import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.2.1 Use a Reference Point to Compare Fractions | Essential GMAT Quant",
  description:
    "Learn a fast strategy for comparing fractions by anchoring to reference points like 1/2 or 1. Includes an example with full reasoning and KaTeX-rendered math.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2.1 Using a Reference Point to Compare the Size of Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you need to decide which of several fractions is largest or
          smallest, a quick way is to compare each fraction to a simple
          reference point such as{" "}
          <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> or{" "}
          <MathInline expr="1" ariaLabel="one" />. This often lets you rank the
          options without computing exact decimal values.
        </p>

        <p>
          For instance, among{" "}
          <MathInline expr="\tfrac{61}{120}" ariaLabel="sixty‑one over one hundred twenty" />
          , <MathInline expr="\tfrac{499}{1000}" ariaLabel="four hundred ninety‑nine over one thousand" />
          , and{" "}
          <MathInline expr="\tfrac{198}{400}" ariaLabel="one hundred ninety‑eight over four hundred" />
          , which is largest?
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Notice{" "}
            <MathInline expr="\tfrac{198}{400}" ariaLabel="one hundred ninety‑eight over four hundred" />{" "}
            sits just under{" "}
            <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> since{" "}
            <MathInline expr="\tfrac{200}{400}=\tfrac{1}{2}" ariaLabel="two hundred over four hundred equals one half" />
            .
          </li>
          <li>
            Likewise,{" "}
            <MathInline expr="\tfrac{499}{1000}" ariaLabel="four hundred ninety‑nine over one thousand" />{" "}
            is just below{" "}
            <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> because{" "}
            <MathInline expr="\tfrac{500}{1000}=\tfrac{1}{2}" ariaLabel="five hundred over one thousand equals one half" />
            .
          </li>
          <li>
            Meanwhile,{" "}
            <MathInline expr="\tfrac{61}{120}" ariaLabel="sixty‑one over one hundred twenty" />{" "}
            is slightly above{" "}
            <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> since{" "}
            <MathInline expr="\tfrac{60}{120}=\tfrac{1}{2}" ariaLabel="sixty over one hundred twenty equals one half" />
            .
          </li>
        </ul>

        <p>Therefore, the largest of the three is 61/120.</p>

        <MustKnow>
          To compare fractions quickly, anchor each one to a familiar benchmark
          (for example, 0, 1/2, or 1). If a fraction is clearly above the
          reference point while others are below it, you can rank them without
          precise calculation.
        </MustKnow>

        <MCQExample
          number={34}
          prompt="Which of the following fractions is the greatest?"
          options={["6/14", "8/18", "34/70", "200/401", "302/602"]}
          correct="302/602"
          solution={
            <>
              <p>
                Compare each option to{" "}
                <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" />:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <MathInline expr="\tfrac{6}{14}" ariaLabel="six over fourteen" /> ={" "}
                  <MathInline expr="\tfrac{3}{7}" ariaLabel="three over seven" />{" "}
                  is below{" "}
                  <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" />.
                </li>
                <li>
                  <MathInline expr="\tfrac{8}{18}" ariaLabel="eight over eighteen" /> ={" "}
                  <MathInline expr="\tfrac{4}{9}" ariaLabel="four over nine" />{" "}
                  is below{" "}
                  <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" />.
                </li>
                <li>
                  <MathInline expr="\tfrac{34}{70}" ariaLabel="thirty‑four over seventy" /> ={" "}
                  <MathInline expr="\tfrac{17}{35}" ariaLabel="seventeen over thirty‑five" />{" "}
                  is below{" "}
                  <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" />.
                </li>
                <li>
                  <MathInline expr="\tfrac{200}{401}" ariaLabel="two hundred over four hundred one" />{" "}
                  is just under{" "}
                  <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> because{" "}
                  <MathInline expr="\tfrac{200}{400}=\tfrac{1}{2}" ariaLabel="two hundred over four hundred equals one half" />{" "}
                  and the denominator is slightly larger than 400.
                </li>
                <li>
                  <MathInline expr="\tfrac{302}{602}" ariaLabel="three hundred two over six hundred two" />{" "}
                  is just over{" "}
                  <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" /> since{" "}
                  <MathInline expr="\tfrac{301}{602}=\tfrac{1}{2}" ariaLabel="three hundred one over six hundred two equals one half" />{" "}
                  and the numerator here is 302.
                </li>
              </ul>
              <p>
                Only{" "}
                <MathInline expr="\tfrac{302}{602}" ariaLabel="three hundred two over six hundred two" />{" "}
                exceeds{" "}
                <MathInline expr="\tfrac{1}{2}" ariaLabel="one half" />, so it is
                the greatest. Answer: E.
              </p>
            </>
          }
        />

        <p>
          Takeaway: If most candidates cluster just below your reference point
          and one sits just above, you can identify the winner immediately. This
          benchmark approach is a major time saver on test day.
        </p>
      </article>
    </main>
  );
}