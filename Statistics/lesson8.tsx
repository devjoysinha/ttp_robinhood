import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "14.3.3 Counting Consecutive Integers (Inclusive) | Statistics",
  description:
    "Learn how to count how many integers are in an inclusive range using the formula n = highest − lowest + 1. Includes a quick multiple‑choice example and a small-number check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.3 Counting Consecutive Integers, Inclusive of Both Endpoints
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a question asks for how many integers lie from one number up to another{" "}
          <em>including</em> both ends, you must account for the first and the last terms.
          Simply subtracting the endpoints misses one of them.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-medium">
              To count consecutive integers from a lowest value{" "}
              <InlineMath math="a" /> to a highest value <InlineMath math="b" />{" "}
              inclusive, use:
            </p>
            <BlockMath math="n = b - a + 1" />
            <p className="text-sm text-gray-300/90">
              This works because there are <InlineMath math="b-a" /> steps between{" "}
              <InlineMath math="a" /> and <InlineMath math="b" />, and we add one to
              include both endpoints.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="worked-check" className="space-y-3">
          <h3 id="worked-check" className="text-white font-semibold">
            Quick sanity check with small numbers
          </h3>
          <p>
            From 4 to 9 inclusive, we can list: 4, 5, 6, 7, 8, 9. That’s 6 numbers. The
            formula agrees:
          </p>
          <BlockMath math="n = 9 - 4 + 1 = 6" />
        </section>

        <section aria-labelledby="example-mcq" className="pt-2">
          <MCQExample
            number={31}
            prompt="How many integers are there from 50 through 101, inclusive?"
            options={["50", "51", "52", "53", "54"]}
            correct="52"
            solution={
              <>
                <p>
                  Apply the inclusive counting formula with{" "}
                  <InlineMath math="a=50" /> and <InlineMath math="b=101" />:
                </p>
                <BlockMath math="n = b - a + 1 = 101 - 50 + 1 = 52" />
                <p>The correct answer is 52.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="tips" className="space-y-3">
          <h3 id="tips" className="text-white font-semibold">
            Tips and common pitfalls
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Make sure the range is inclusive before using{" "}
              <InlineMath math="b - a + 1" />. If the problem excludes an endpoint, the
              count changes.
            </li>
            <li>
              The formula works with negatives and zero as well. For example, from −3 to
              2 inclusive: <InlineMath math="2 - (-3) + 1 = 6" />.
            </li>
            <li>
              If you’re unsure, verify with a tiny example or quickly list a few values.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}