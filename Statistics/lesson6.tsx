import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.3.1 Types of Evenly Spaced Sets | Statistics",
  description:
    "Learn the two most common evenly spaced sets on the GMAT—consecutive integers and consecutive multiples—and see clear examples. Includes a quick check-for-understanding question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.1 Types of Evenly Spaced Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On the GMAT, evenly spaced sets show up frequently. You can think of
          them as lists where each term is obtained by adding the same constant
          step to the previous one. In other words, the difference between
          consecutive terms never changes.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="m-0">
              An evenly spaced set is an arithmetic sequence. If the first term
              is <InlineMath math="a_1" /> and the common difference (step) is{" "}
              <InlineMath math="d" />, then:
            </p>
            <BlockMath math="a_n = a_1 + (n - 1)d" />
            <p className="m-0">
              Equivalently, the set looks like:
            </p>
            <BlockMath math="\{\,a_1,\; a_1 + d,\; a_1 + 2d,\; \dots\,\}" />
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Consecutive integers: <InlineMath math="d = 1" />
              </li>
              <li>
                Consecutive odd or even integers: <InlineMath math="d = 2" /> (starting from an odd or even value)
              </li>
              <li>
                Consecutive multiples of <InlineMath math="m" />:{" "}
                <InlineMath math="d = m" /> (starting from any multiple of{" "}
                <InlineMath math="m" />)
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="common-appearances">
          <h3 id="common-appearances" className="sr-only">
            Common appearances on the GMAT
          </h3>
          <p className="m-0">
            The two most common ways evenly spaced sets appear:
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-2">
            <li>
              A run of consecutive integers (including the special cases of all
              odds or all evens).
            </li>
            <li>
              A run of consecutive multiples of a particular number (e.g., every
              5th or every 12th number).
            </li>
          </ul>
        </section>

        <section aria-labelledby="examples">
          <h3 id="examples" className="font-semibold text-gray-200">
            Examples
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Consecutive integers:{" "}
              <InlineMath math="\{4,\,5,\,6,\,7,\,8,\,9,\,10,\,11,\,12\}" />
            </li>
            <li>
              Consecutive odd integers:{" "}
              <InlineMath math="\{3,\,5,\,7,\,9,\,11,\,13,\,15\}" />
            </li>
            <li>
              Consecutive even integers:{" "}
              <InlineMath math="\{0,\,2,\,4,\,6,\,8,\,10,\,12\}" />
            </li>
            <li>
              Consecutive multiples of 5:{" "}
              <InlineMath math="\{5,\,10,\,15,\,20,\,25,\,30,\,35\}" />
            </li>
            <li>
              Consecutive multiples of 12:{" "}
              <InlineMath math="\{12,\,24,\,36,\,48,\,60,\,72,\,84\}" />
            </li>
          </ul>
        </section>

        <MCQExample
          number={31}
          prompt="Which list is an evenly spaced set?"
          options={[
            "{2, 5, 8, 12}",
            "{7, 14, 21, 28, 35}",
            "{1, 2, 4, 8}",
            "{9, 12, 16, 19}",
            "{0, 2, 5, 8}",
          ]}
          correct="{7, 14, 21, 28, 35}"
          solution={
            <>
              <p>
                An evenly spaced set has a constant difference between
                consecutive terms. Check each option’s gaps:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  {"{2, 5, 8, 12}"}: differences are 3, 3, and 4 → not constant.
                </li>
                <li>
                  {"{7, 14, 21, 28, 35}"}: each step is +7 → constant. This is a
                  sequence of consecutive multiples of 7.
                </li>
                <li>
                  {"{1, 2, 4, 8}"}: this grows by factors, not by a fixed add-on.
                </li>
                <li>
                  {"{9, 12, 16, 19}"}: differences are 3, 4, and 3 → not constant.
                </li>
                <li>
                  {"{0, 2, 5, 8}"}: differences are 2, 3, and 3 → not constant.
                </li>
              </ul>
              <p className="mt-2">Correct choice: {`{7, 14, 21, 28, 35}`}.</p>
            </>
          }
        />
      </article>
    </main>
  );
}