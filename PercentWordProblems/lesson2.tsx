import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.3 Five Essential Phrases in Percent Word Problems",
  description:
    "Master five core phrases that drive percent word problems: percent of, what percent, percent less than, percent greater than, and percent change. Includes quick checks and Data Sufficiency practice.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.3 Five Essential Phrases in Percent Word Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Percent questions show up constantly because they model real business
          situations—pricing, discounts, markups, and growth. To move quickly
          and accurately, learn how five recurring phrases translate into math.
        </p>

        <section aria-labelledby="five-phrases">
          <h3 id="five-phrases" className="text-xl font-semibold text-white">
            The five phrases you must recognize
          </h3>

          <ul className="ml-5 list-disc space-y-3">
            <li>
              Percent of:
              <span className="ml-2">
                <InlineMath math={"b\\% \\text{ of } a = \\tfrac{b}{100}\\cdot a"} />
              </span>
            </li>
            <li>
              What percent:
              <span className="ml-2">
                If <InlineMath math={"x\\% \\text{ of } a = b"} />, then{" "}
                <InlineMath math={"x = 100\\cdot \\tfrac{b}{a}"} />.
              </span>
            </li>
            <li>
              Percent less than:
              <span className="ml-2">
                “b is k% less than a” means{" "}
                <InlineMath math={"b = \\left(1 - \\tfrac{k}{100}\\right)a"} />.
              </span>
            </li>
            <li>
              Percent greater than:
              <span className="ml-2">
                “b is k% greater than a” means{" "}
                <InlineMath math={"b = \\left(1 + \\tfrac{k}{100}\\right)a"} />.
              </span>
            </li>
            <li>
              Percent change:
              <span className="ml-2">
                <InlineMath math={"\\%\\text{ change} = \\tfrac{\\text{new} - \\text{old}}{\\text{old}}\\times 100\\%"} />
              </span>
            </li>
          </ul>

          <MustKnow>
            <div className="space-y-2">
              <p className="font-semibold">
                Always identify the base. Every percent statement compares to a
                specific reference value.
              </p>
              <ul className="ml-5 list-disc">
                <li>
                  “k% less/greater than” compacts to{" "}
                  <InlineMath math={"\\text{base}\\times\\left(1\\mp \\tfrac{k}{100}\\right)"} />.
                </li>
                <li>
                  “What percent” questions become a ratio times 100.
                </li>
                <li>
                  Successive changes multiply, not add. For example, up 25% then
                  down 20% is{" "}
                  <InlineMath math={"1.25\\times 0.8 = 1.0"} /> (no net change),
                  not 5%.
                </li>
              </ul>
            </div>
          </MustKnow>
        </section>

        <section aria-labelledby="percent-of-start">
          <h3 id="percent-of-start" className="text-xl font-semibold text-white">
            Starting point: “percent of”
          </h3>
          <p>
            The workhorse of percent problems is “percent of.” Replace the
            phrase with multiplication by a fraction. For instance, “17% of 250”
            is <InlineMath math={"0.17\\times 250"} /> or{" "}
            <InlineMath math={"\\tfrac{17}{100}\\cdot 250"} />.
          </p>
          <BlockMath math={"b\\% \\text{ of } a = \\left(\\tfrac{b}{100}\\right)a"} />
        </section>

        <MCQExample
          number={31}
          prompt='What percent of 80 is 24?'
          options={["20%", "25%", "30%", "35%", "40%"]}
          correct="30%"
          solution={
            <>
              <p>
                Let x be the percent. Then{" "}
                <InlineMath math={"x\\%\\cdot 80 = 24"} />, so{" "}
                <InlineMath math={"\\tfrac{x}{100} = \\tfrac{24}{80} = 0.3"} />.
              </p>
              <p>
                Therefore <InlineMath math={"x = 30\\%"} />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Percent increase from A to B"
          statements={[
            "A price increases from A to B. What is the percent increase?",
            "1) B − A = 15 and A = 60",
            "2) B/A = 5/4",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We want{" "}
                <InlineMath math={"\\tfrac{B - A}{A} \\times 100\\%"} />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={"\\tfrac{B - A}{A} = \\tfrac{15}{60} = 0.25"} />{" "}
                ⇒ 25%. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={"\\tfrac{B - A}{A} = \\tfrac{B}{A} - 1 = \\tfrac{5}{4} - 1 = 0.25"} />{" "}
                ⇒ 25%. Sufficient.
              </p>
              <p>Either statement alone is enough. Answer: D.</p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Percent less than"
          statements={[
            "x is k percent less than y. What is k?",
            "1) y − x = 18 and y = 90",
            "2) x/y = 0.8",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                “k% less than” means{" "}
                <InlineMath math={"x = (1 - \\tfrac{k}{100})y"} />.
              </p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <InlineMath math={"\\tfrac{y - x}{y} = \\tfrac{18}{90} = 0.2"} />{" "}
                ⇒ <InlineMath math={"k = 20\\%"} />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={"x/y = 0.8 = 1 - \\tfrac{k}{100}"} /> ⇒{" "}
                <InlineMath math={"k = 20\\%"} />. Sufficient.
              </p>
              <p>Either statement alone is enough. Answer: D.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Translate the phrase first, then compute. Keep track of the base,
            use the{" "}
            <InlineMath math={"1\\pm \\tfrac{k}{100}"} /> shortcuts for
            decreases and increases, and express “what percent” as a ratio times
            100. With these templates, most percent questions become one‑line
            equations.
          </p>
        </section>
      </article>
    </main>
  );
}