import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.3.2 “Inclusive” and Counting Terms in Evenly Spaced Sets | Statistics",
  description:
    "Learn what 'inclusive' means on the GMAT and how to count the number of terms in evenly spaced sets. Includes the general formula with common difference, a quick MCQ, and two Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.2 “Inclusive” and Counting the Number of Terms in an Evenly Spaced Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          GMAT questions often ask for how many values appear in a long,
          evenly spaced list. You’ll also see the word “inclusive,” which signals that
          the endpoints are part of the set you’re counting.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Key ideas</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Consecutive integers from a to b, inclusive:
                <span className="ml-2">
                  <InlineMath math={"N = b - a + 1"} />
                </span>
              </li>
              <li>
                Evenly spaced sequence with first term F, last term L, and common difference d &gt; 0:
                <div className="mt-2">
                  <BlockMath math={"N = \\left\\lfloor\\dfrac{L - F}{d}\\right\\rfloor + 1"} />
                </div>
                This formula works when counting every d-units starting at F up to L. If both endpoints are terms of the sequence, the floor is not needed and
                <InlineMath math={"\\;N = \\dfrac{L - F}{d} + 1\\;"} />
                is an integer.
              </li>
              <li>
                “Inclusive” means “count the endpoints.” If a problem says “inclusive,” do not forget to add 1 when the step is 1.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={28}
          prompt="How many integers are there from 13 through 57, inclusive?"
          options={["43", "44", "45", "46", "47"]}
          correct="45"
          solution={
            <>
              <p>
                The numbers are consecutive integers with endpoints included, so use
                <InlineMath math={"\\;N = b - a + 1\\;"} />.
              </p>
              <BlockMath math={"N = 57 - 13 + 1 = 45"} />
              <p>Therefore, there are 45 integers.</p>
            </>
          }
        />

        <p>
          For sequences that jump by more than 1 (for example, every 3rd or every 5th integer),
          treat the set as an arithmetic sequence: first term, last term, and a fixed step d.
          Then apply the general counting formula.
        </p>

        <ExampleCard
          number={29}
          title="Counting terms when the step is greater than 1"
          statements={[
            "Set T contains every fourth integer starting at 7 and ending at q, inclusive. How many terms are in T?",
            "1) 80 ≤ q ≤ 90",
            "2) When q is divided by 4, the remainder is 3",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                Terms of T look like 7, 11, 15, …, q, i.e., <InlineMath math={"7 + 4k"} />.
                The count would be <InlineMath math={"N = \\left\\lfloor\\dfrac{q - 7}{4}\\right\\rfloor + 1"} /> once q is known.
              </p>
              <p>
                <strong>Statement (1):</strong> 80 ≤ q ≤ 90. We still don’t know q exactly, so we can’t pin down a single N. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> q ≡ 3 (mod 4), so q is aligned with the pattern 7, 11, 15, …, but without the value of q, N remains unknown. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> In the range 80–90 with q ≡ 3 (mod 4), possible q values include 83 and 87.
                For q = 83:
              </p>
              <BlockMath math={"N = \\dfrac{83 - 7}{4} + 1 = 19 + 1 = 20"} />
              <p>For q = 87:</p>
              <BlockMath math={"N = \\dfrac{87 - 7}{4} + 1 = 20 + 1 = 21"} />
              <p>
                Different counts are possible, so the data are insufficient. Answer: E.
              </p>
            </>
          }
        />

        <ExampleCard
          number={30}
          title='Reading "inclusive" correctly with consecutive integers'
          statements={[
            "List L contains all integers from p to 200, inclusive. How many integers are in L?",
            "1) p = 161",
            "2) The list contains exactly 40 integers",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the count of consecutive integers from p to 200, inclusive. Use
                <InlineMath math={"\\;N = 200 - p + 1\\;"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> p = 161 → <InlineMath math={"N = 200 - 161 + 1 = 40"} />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> The count is directly given as 40. Sufficient.
              </p>
              <p>Each statement alone is sufficient. Answer: D.</p>
            </>
          }
        />

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Checklist</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>For consecutive integers, add 1: <InlineMath math={"b - a + 1"} />.</li>
              <li>
                For step d, use <InlineMath math={"\\left\\lfloor\\dfrac{L - F}{d}\\right\\rfloor + 1"} />, confirming whether L is actually a term.
              </li>
              <li>“Inclusive” means the endpoints are counted.</li>
            </ul>
          </div>
        </MustKnow>
      </article>
    </main>
  );
}