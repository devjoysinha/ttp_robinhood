import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "14.3 Evenly Spaced Sets | Statistics",
  description:
    "Understand evenly spaced sets (arithmetic sequences): definition, common difference, and examples. Includes a quick multiple‑choice check for mastery.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3 Evenly Spaced Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An evenly spaced set is a collection of numbers arranged so that each
          successive term is separated from the previous one by the same constant
          amount. That constant step is called the common difference.
        </p>

        <p>
          Two quick examples:
          {" "}
          <InlineMath math={"\\{11,\\;22,\\;33,\\;44,\\;55,\\;66\\}"} /> and
          {" "}
          <InlineMath math={"\\{1,\\;2,\\;3,\\;4,\\;5,\\;6\\}"} />.
          In the first set, each term rises by 11; in the second, each term rises by 1.
        </p>

        <p>
          In general, an evenly spaced set (an arithmetic sequence) can be written as:
        </p>

        <div aria-label="General form of an evenly spaced set" className="rounded-md bg-neutral-800/60 p-4">
          <BlockMath math={"a,\\; a+d,\\; a+2d,\\; \\dots,\\; a+(n-1)d"} />
          <ul className="mt-2 list-disc pl-6 text-sm text-gray-300">
            <li>
              <InlineMath math={"a"} /> is the first term.
            </li>
            <li>
              <InlineMath math={"d"} /> is the common difference (can be positive or negative).
            </li>
            <li>
              <InlineMath math={"n"} /> is the number of terms in the set.
            </li>
          </ul>
        </div>

        <MustKnow>
          In an evenly spaced set, every pair of consecutive terms differs by the
          same constant amount (the common difference). Equivalently, the set can
          be modeled as <InlineMath math={"a+(k-1)d"} /> for integer positions
          <InlineMath math={"\\;k=1,2,\\dots,n"} />.
        </MustKnow>

        <p>
          You can verify even spacing by checking that all successive gaps match.
          For the set <InlineMath math={"\\{11,22,33,44,55,66\\}"} />, each jump is
          <InlineMath math={"\\;22-11=33-22=\\dots=11"} />. For
          <InlineMath math={"\\{1,2,3,4,5,6\\}"} />, each jump is 1.
        </p>

        <MCQExample
          number={1}
          prompt="Which of the following is an evenly spaced set?"
          options={[
            "{2, 5, 8, 11, 15}",
            "{7, 4, 1, -2, -5}",
            "{1, 2, 4, 8, 16}",
            "{10, 12, 15, 18, 21}",
            "{3, 3, 3, 3, 4}",
          ]}
          correct="{7, 4, 1, -2, -5}"
          solution={
            <>
              <p>
                Even spacing means the difference between consecutive terms is constant.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A: differences are 3, 3, 3, then 4 → not constant.
                </li>
                <li>
                  B: differences are −3 throughout → constant; evenly spaced.
                </li>
                <li>
                  C: factors double (geometric), not a constant difference.
                </li>
                <li>
                  D: differences are 2, 3, 3, 3 → not constant.
                </li>
                <li>
                  E: final jump changes to 1 → not constant.
                </li>
              </ul>
              <p>Answer: {`{7, 4, 1, -2, -5}`}</p>
            </>
          }
        />
      </article>
    </main>
  );
}