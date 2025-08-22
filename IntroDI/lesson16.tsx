import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.17 Pay Close Attention to Details and Keywords | Data Insights",
  description:
    "In Data Insights, tiny wording shifts change the logic. Learn the most important keywords and practice interpreting phrases like more than, at least, and at most with a quick check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.17 Read the Fine Print: Details and Keywords
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Precision pays in Data Insights. Whether the information is textual, numerical,
          or visual, your accuracy depends on how carefully you track definitions,
          qualifiers, and constraints.
        </p>

        <MustKnow>
          The more closely you attend to detail, the more consistent your DI results.
          Small wording changes often flip the meaning of a statement, so slow down
          enough to notice those shifts.
        </MustKnow>

        <p>
          Tiny differences in phrasing can completely alter what’s being asked or implied.
          Train yourself to spot the signal words that govern comparisons, frequency,
          and certainty.
        </p>

        <MustKnow>
          Subtle wording tweaks can change the logic. Terms like “more than,” “at least,”
          and “usually” each carry distinct implications. Treat them as constraints, not
          decoration.
        </MustKnow>

        <section aria-labelledby="keywords-heading" className="space-y-3">
          <h3 id="keywords-heading" className="text-xl font-semibold text-white">
            High‑leverage keywords to watch for
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              greater than <InlineMath math="(\,>\,)" />
            </li>
            <li>
              less than <InlineMath math="(\,<\,)" />
            </li>
            <li>
              equal to <InlineMath math="(\,=\,)" />
            </li>
            <li>
              greater than or equal to <InlineMath math="(\,\ge\,)" />
            </li>
            <li>
              less than or equal to <InlineMath math="(\,\le\,)" />
            </li>
            <li>sometimes</li>
            <li>almost</li>
            <li>always</li>
            <li>usually</li>
            <li>highest</li>
            <li>lowest</li>
            <li>
              not equal to <InlineMath math="(\,\ne\,)" />
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            Tip: When you see a keyword, translate it to a precise condition. For example,
            “at least k” means <InlineMath math="\ge k" />, and “more than k” means{" "}
            <InlineMath math="> k" />. That translation step prevents common misreads.
          </p>
        </section>

        <MCQExample
          number={11701}
          prompt={
            <>
              A report states: “This quarter’s revenue is at least 20% higher than last
              quarter’s revenue.” Let <InlineMath math="R_c" /> be this quarter and{" "}
              <InlineMath math="R_p" /> be last quarter. Which statement must be true?
            </>
          }
          options={[
            <span key="A">
              <InlineMath math="R_c > 1.2R_p" />
            </span>,
            <span key="B">
              <InlineMath math="R_c \ge 1.2R_p" />
            </span>,
            <span key="C">
              <InlineMath math="R_p \le 0.8R_c" />
            </span>,
            <span key="D">
              <InlineMath math="R_c - R_p > 0.2R_c" />
            </span>,
            <span key="E">
              <InlineMath math="R_c - R_p \ge 0.2R_p" />
            </span>,
          ]}
          correct="R_c \ge 1.2R_p"
          solution={
            <>
              <p>
                “At least 20% higher” means the current value is no smaller than 120% of
                the previous value: <InlineMath math="R_c \ge 1.2R_p" />. So choice B is
                correct.
              </p>
              <p>
                Choice A uses “more than” instead of “at least,” so it’s too strict (
                <InlineMath math=">" /> instead of <InlineMath math="\ge" />). Choice C
                incorrectly rearranges terms. Choice D compares to{" "}
                <InlineMath math="R_c" /> instead of <InlineMath math="R_p" />. Choice E
                is true but redundant with B; the question asks for a single statement
                that must be true, and B is the clean, direct translation.
              </p>
            </>
          }
        />

        <ExampleCard
          number={11702}
          title="Qualifiers can change the answer"
          statements={[
            "A data brief says: “At most 35% of surveyed users chose option X.” Which of the following must be true?",
            "1) The share that chose option X is less than 35%.",
            "2) The share that chose option X is no greater than 35%.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                “At most 35%” translates to <InlineMath math="\le 35\%" />. Statement (1)
                uses “less than,” which means strictly below 35% and excludes 35%, so it’s
                not guaranteed. Statement (2) matches the intended meaning (“no greater
                than”), so it must be true.
              </p>
            </>
          }
        />

        <p>
          Bottom line: DI is a reading‑precision game. Convert keywords into exact
          conditions and keep those conditions intact as you interpret charts, tables, and
          prompts.
        </p>
      </article>
    </main>
  );
}