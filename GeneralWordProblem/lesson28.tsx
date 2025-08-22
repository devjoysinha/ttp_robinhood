import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "7.7.1 Linear Growth Formula | Word Problems",
  description:
    "Learn the constant-rate (linear) growth model F_n = kn + p, when and how to use it, and practice with a quick multiple‑choice question and worked solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.7.1 The Linear Growth Formula
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a quantity increases by the same amount each period, the change is linear. A simple model captures this behavior:
        </p>

        <div className="rounded-md bg-gray-800/60 p-4">
          <BlockMath math={`F_n = k\\,n + p`} />
        </div>

        <p>
          Here, <InlineMath math="F_n" /> is the value after <InlineMath math="n" /> periods,
          <InlineMath math="p" /> is the starting value, and <InlineMath math="k" /> is the fixed amount added every period.
        </p>

        <MustKnow>
          Constant-rate change follows a straight line. In the model <InlineMath math="F_n = k n + p" />, the offset <InlineMath math="p" /> sets the starting level, and the slope <InlineMath math="k" /> controls how much the value increases for each additional period. If growth is truly “per period, same amount,” this formula applies directly.
        </MustKnow>

        <p>
          Let’s apply the model to a quick example.
        </p>

        <MCQExample
          number={40}
          prompt="A tree is 10 feet tall and grows at a steady rate of 2 feet per year. How tall will the tree be after 20 years?"
          options={["15 feet", "25 feet", "50 feet", "65 feet", "75 feet"]}
          correct="50 feet"
          solution={
            <>
              <p>
                Identify the parameters: <InlineMath math="p=10" /> (initial height),
                <InlineMath math="k=2" /> (feet of growth per year),
                and <InlineMath math="n=20" /> (years).
              </p>
              <BlockMath math={`F_n = k\\,n + p = 2\\cdot 20 + 10 = 50\\text{ feet}`} />
              <p>
                Notice that the extra height comes from the term <InlineMath math="k n" />, which accumulates the constant increase over <InlineMath math="n" /> periods.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: with linear growth, you can find the value at any time by plugging the relevant period count into <InlineMath math="F_n = k n + p" />. Change <InlineMath math="n" /> to jump to any point in time.
        </p>
      </article>
    </main>
  );
}