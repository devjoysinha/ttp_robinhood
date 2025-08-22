import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn't already include KaTeX styles globally, add them in app/layout.tsx:
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "1.3 Data Insights Scoring | GMAT Data Insights",
  description:
    "Understand how the GMAT Data Insights section is scored: scale, mean, percentiles, and experimental items. Includes a quick concept check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.3 How Data Insights Is Scored
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Data Insights (DI) score uses the same scale as Quant and Verbal. In symbols:{" "}
          <InlineMath math={"60 \\le s \\le 90"} />. Your DI result also feeds into your overall
          GMAT total score, which spans{" "}
          <InlineMath math={"205\\text{ to }805"} />. In short, DI matters just as much as the other sections when
          schools look at your complete score profile.
        </p>

        <p>
          As a reference point, the current average DI score is about{" "}
          <InlineMath math={"\\mu_{\\text{DI}} \\approx 74.41"} />, and reaching roughly the{" "}
          <InlineMath math={"90^{\\text{th}}"} /> percentile typically corresponds to a score near{" "}
          <InlineMath math={"81"} />. Percentiles help admissions teams assess how your performance compares with that of other examinees.
        </p>

        <p>
          Like the other sections, DI includes some experimental (unscored) questions. Because there’s no reliable way to
          identify them during the exam, treat every question as if it counts.
        </p>

        <MustKnow>
          - DI uses the same scoring band as the other sections: <InlineMath math={"60 \\le s \\le 90"} />.
          - It contributes to your overall total score of <InlineMath math={"205\\text{–}805"} />.
          - You won’t know which questions are experimental, so give full effort on each one.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which statement must be true about Data Insights scoring?"
          options={[
            "The DI section counts less toward the total score than Quant.",
            "The DI scale runs from 0 to 90.",
            "Experimental DI questions are labeled so you can skip them.",
            "Percentiles describe how your DI score compares with those of other test takers.",
            "The average DI score is 81."
          ]}
          correct="Percentiles describe how your DI score compares with those of other test takers."
          solution={
            <>
              <p>
                - A is false: DI contributes alongside Quant and Verbal to your total score; it’s not weighted less.
              </p>
              <p>
                - B is false: the DI scale is <InlineMath math={"60\\text{–}90"} />, not 0–90.
              </p>
              <p>
                - C is false: experimental questions are not identified on test day.
              </p>
              <p>
                - D is true: percentiles indicate your standing relative to the broader testing population.
              </p>
              <p>
                - E is false: the mean is about <InlineMath math={"74.41"} />, not 81.
              </p>
            </>
          }
        />

        <p>
          Bottom line: understand the scale, aim for competitive percentiles, and approach every prompt as scored. That mindset maximizes your DI performance and strengthens your overall GMAT result.
        </p>
      </article>
    </main>
  );
}