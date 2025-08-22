import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.8.1 Convert a Decimal to a Percent | Essential GMAT Quant Skills",
  description:
    "Learn the fastest way to convert decimals and integers to percents: multiply by 100 and add the percent sign. Includes worked examples and a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8.1 Convert a Decimal to a Percent
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any decimal or whole number can be written as a percent. The most efficient approach is to
          shift the decimal point two places to the right and then attach the percent sign.
        </p>

        <MustKnow>
          Converting a decimal or integer to a percent is equivalent to multiplying by 100 and
          writing the percent symbol. In symbols:{" "}
          <InlineMath math={"x \\text{ (as a percent)} = 100x\\%"} />.
        </MustKnow>

        <section aria-labelledby="examples" className="space-y-4">
          <h3 id="examples" className="text-white font-semibold text-base md:text-lg">
            Quick conversions
          </h3>

          <div className="rounded-md border border-gray-700/60 bg-gray-900/40 p-4">
            <div className="space-y-2 text-gray-200">
              <BlockMath math={"0.03 \\;\\to\\; 3\\%"} />
              <BlockMath math={"0.85 \\;\\to\\; 85\\%"} />
              <BlockMath math={"2 \\;\\to\\; 200\\%"} />
              <BlockMath math={"0.004 \\;\\to\\; 0.4\\%"} />
            </div>
          </div>

          <p>
            Why does this work? Moving the decimal two places to the right is the same as multiplying
            by 100. So writing a percent is just{" "}
            <InlineMath math={"x \\times 100"} /> with a{" "}
            <InlineMath math={"\\%"} /> symbol.
          </p>
        </section>

        <ExampleCard
          number={1}
          title="Explaining the rule"
          statements={[
            "Show that converting any decimal x to a percent is equivalent to multiplying x by 100 and appending the percent sign.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                By definition, a percent is “per 100.” Thus, taking a value x and expressing it as a percent
                means scaling x by 100 and indicating that scale with the percent symbol.
              </p>
              <p className="mt-2">
                In notation: <InlineMath math={"x \\mapsto 100x\\%"} />. For instance,{" "}
                <InlineMath math={"0.375 \\mapsto 37.5\\%"} /> and{" "}
                <InlineMath math={"1 \\mapsto 100\\%"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Which percent is equivalent to 0.375?"
          options={["0.375%", "3.75%", "37.5%", "375%", "0.0375%"]}
          correct="37.5%"
          solution={
            <>
              <p>
                Multiply by 100 and append the percent sign:{" "}
                <InlineMath math={"0.375 \\times 100 = 37.5"} />, so{" "}
                <InlineMath math={"0.375 = 37.5\\%"} />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Edge cases and sanity checks"
          statements={[
            "a) Convert 1.2 to a percent.",
            "b) Convert 0.009 to a percent.",
            "c) Explain why converting a percent back to a decimal divides by 100.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                a) <InlineMath math={"1.2 \\times 100 = 120"} /> → <InlineMath math={"120\\%"} />.
              </p>
              <p>
                b) <InlineMath math={"0.009 \\times 100 = 0.9"} /> → <InlineMath math={"0.9\\%"} />.
              </p>
              <p>
                c) Reversing the process must undo the “times 100,” so converting a percent back to a
                decimal divides by 100. For example, <InlineMath math={"120\\% = 1.2"} /> and{" "}
                <InlineMath math={"0.9\\% = 0.009"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: turning decimals into percents is a position shift, not heavy computation. If
          you can slide the decimal two places to the right, you can convert in a single step.
        </p>
      </article>
    </main>
  );
}