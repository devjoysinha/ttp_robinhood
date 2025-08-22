import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.3.7 Counting Terms Between Two Endpoints | Statistics",
  description:
    "Learn how to count the number of consecutive integers strictly between two endpoints. Includes the key formula, intuition, and a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.7 Counting the Number of Consecutive Integers Between the First and Last Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a set consists of consecutive integers, you’ll often need the count of values that lie strictly between two endpoints. There’s a fast, reliable way to get that number without listing terms.
        </p>

        <MustKnow>
          <>
            To count how many consecutive integers are strictly between two endpoints a and b (with b &gt; a), use:
            <BlockMath math="\,\text{count between} = b - a - 1\,." />
            Intuition: the inclusive count is <InlineMath math="b-a+1" />, and removing the two endpoints leaves <InlineMath math="(b-a+1)-2=b-a-1" />.
          </>
        </MustKnow>

        <MCQExample
          number={15}
          prompt="Liam is 10th in a line, and Maya is 50th in the same line. How many people are standing between them?"
          options={["38", "39", "40", "41", "42"]}
          correct="39"
          solution={
            <>
              <p>
                We want the number strictly between 10 and 50 in a consecutive sequence of positions. Apply the formula:
              </p>
              <p>
                <InlineMath math="50 - 10 - 1 = 39" />
              </p>
              <p>
                Therefore, 39 people stand between them.
              </p>
              <p>
                Why this works: the inclusive count from 10th through 50th is <InlineMath math="50-10+1=41" />. Excluding both endpoints (Liam and Maya) removes 2, leaving <InlineMath math="41-2=39" />.
              </p>
            </>
          }
        />

        <p>
          Quick reminder: “between” means exclusive of the endpoints. If a problem instead asks for an inclusive count, use <InlineMath math="b-a+1" /> and do not subtract 2.
        </p>
      </article>
    </main>
  );
}