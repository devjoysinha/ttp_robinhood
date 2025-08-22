import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Defer KaTeX rendering to the client for robustness
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "1.5 Five Data Insights Question Types | Introduction",
  description:
    "Get a quick overview of the five question formats in the Data Insights section, how they appear on test day, and what to expect as you study.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.5 The Five Question Types You’ll See
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Data Insights section is built around five well‑defined formats. You’ve
          already spent time with Data Sufficiency earlier in the course; next,
          you’ll work through the remaining formats one by one. On the real exam,
          these question types are mixed—there’s no fixed sequence—so you should be
          comfortable switching among them.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">The five DI formats are:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Data Sufficiency</li>
              <li>Graphics Interpretation</li>
              <li>Two‑Part Analysis</li>
              <li>Table Analysis</li>
              <li>Multi‑Source Reasoning</li>
            </ul>
            <div className="pt-2 text-gray-300">
              <span className="sr-only">
                In set notation: DI equals the set of DS, GI, TPA, TA, and MSR.
              </span>
              <InlineMath math="\text{DI}=\{\text{DS},\ \text{GI},\ \text{TPA},\ \text{TA},\ \text{MSR}\}" />
            </div>
          </div>
        </MustKnow>

        <p>
          In the chapters that follow, we’ll dig into each format, highlight the
          skills you need, and practice efficient strategies. Remember: item order
          is unpredictable on test day, so focus on recognizing the format quickly
          and applying the right approach.
        </p>

        <MCQExample
          number={1}
          prompt="Which option correctly lists all five Data Insights formats?"
          options={[
            "Data Sufficiency; Graphics Interpretation; Two‑Part Analysis; Table Analysis; Multi‑Source Reasoning",
            "Statistics; Probability; Geometry; Algebra; Number Properties",
            "Reading Comprehension; Critical Reasoning; Sentence Correction; Table Analysis; Data Sufficiency",
            "Data Sufficiency; Line Graphs; Scatterplots; Tables; Multi‑Source Reasoning",
            "Graphics Interpretation; Two‑Part Analysis; Table Analysis; Multi‑Source Reasoning; Combinatorics",
          ]}
          correct="Data Sufficiency; Graphics Interpretation; Two‑Part Analysis; Table Analysis; Multi‑Source Reasoning"
          solution={
            <>
              <p>
                The Data Insights section has exactly five formats:
                Data Sufficiency (DS), Graphics Interpretation (GI),
                Two‑Part Analysis (TPA), Table Analysis (TA), and
                Multi‑Source Reasoning (MSR). Only the first choice includes all
                five, with no extras.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}