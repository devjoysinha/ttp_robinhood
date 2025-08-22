import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.7 Mode | Statistics",
  description:
    "Learn what the mode is, when a set has one mode, multiple modes, or no mode at all. Then practice with a multiple‑choice problem and a Data Sufficiency example (with KaTeX for math steps).",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.7 Mode
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The mode of a data set is the value that appears most often. For
          instance, in the set 1, 4, 6, 7, 4, 8, 7, 5, 4, the value 4 occurs
          three times—more than any other—so 4 is the mode.
        </p>

        <MustKnow>
          The mode is the most frequently occurring value in a data set.
        </MustKnow>

        <p className="mt-6 font-semibold text-gray-200">
          More than one mode
        </p>
        <p>
          A data set can have more than one mode. If several values tie for the
          highest frequency, each of those values is a mode. Example: in
          1, 4, 6, 7, 4, 8, 7, 7, 4, both 4 and 7 appear three times, so the set
          is bimodal with modes 4 and 7.
        </p>

        <MustKnow>
          When two or more values occur with the same highest frequency, all of
          them are modes of the set.
        </MustKnow>

        <p className="mt-6 font-semibold text-gray-2 00">
          When there is no mode
        </p>
        <p>
          If all values occur equally often, the set has no mode. For example,
          the set 1, 4, 6, 7, 3, 8, 5, 9, 2 has every value appearing exactly
          once, so there is no mode. Likewise, in the set 1, 4, 6, 7, 6, 4, 1, 7,
          each value appears twice: no single value occurs most frequently, so
          there is no mode.
        </p>

        <MustKnow>
          If all values in a data set occur the same number of times, then the
          set has no mode.
        </MustKnow>

        <MCQExample
          number={46}
          prompt="Consider the set 2, 5, 7, 11, 2, 5, 6, 2, x. If x is the only mode of the set, which of the following could be the value of x?"
          options={["I only", "II only", "III only", "I and II", "I and III"]}
          correct="I only"
          extraPrompt={
            <>
              <p className="mt-2">
                I. 2
                <br />
                II. 5
                <br />
                III. 7
              </p>
            </>
          }
          solution={
            <>
              <p>
                Count current frequencies: 2 appears three times; 5 appears
                twice; 7, 6, and 11 appear once. We need x to become the single
                most frequent value—and its value must itself be the mode.
              </p>
              <p>
                I. x = 2 → 2 would then appear four times (more than any other
                value), so the unique mode is 2, and that equals x. Works.
              </p>
              <p>
                II. x = 5 → both 2 and 5 would appear three times each. There
                would be two modes (2 and 5), so x would not be the only mode.
                Reject.
              </p>
              <p>
                III. x = 7 → 2 would still appear three times, while 7 would
                appear twice. The single mode would be 2, not x. Reject.
              </p>
              <p>Therefore, only I is possible. Answer: I only.</p>
            </>
          }
        />

        <ExampleCard
          number={47}
          title="Mode with an unknown value (Data Sufficiency)"
          statements={[
            "Data set: 6, 8, 9, 8, 9, 8, x. What is the mode of the set?",
            "1) x > 9",
            "2) x^2 = 100",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                The fixed counts before considering x are: 8 appears 3 times, 9
                appears 2 times, and 6 appears once. The only way 9 could tie 8
                is if x = 9; otherwise, 8 remains the most frequent value.
              </p>
              <p>
                Statement (1): x &gt; 9. Then x cannot be 9. No other value
                surpasses the existing count of 8, so 8 is the unique mode.
                Sufficient.
              </p>
              <p>
                Statement (2): <InlineMath math={"x^2 = 100"} />. Thus{" "}
                <InlineMath math={"|x| = 10"} /> and{" "}
                <InlineMath math={"x = \\pm 10"} />. In either case, x is not 9
                and does not change the fact that 8 occurs most often. The mode
                is 8. Sufficient.
              </p>
              <p>Each statement alone is sufficient. Answer: D.</p>
            </>
          }
        />

        <p>
          Takeaway: the mode depends solely on frequency. A set may have one
          mode, multiple modes, or no mode; test counts directly to determine
          which case applies.
        </p>
      </article>
    </main>
  );
}