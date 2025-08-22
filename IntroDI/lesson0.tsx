import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "1.1 Introduction | Data Insights (GMAT)",
  description:
    "An overview of the GMAT Data Insights section: what it measures, why it matters for your total score, and how it aligns with skills employers value.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.1 Overview
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The GMAT&apos;s Data Insights (DI) section focuses on workplace‑ready
          analytics skills. You&apos;ll be asked to interpret information,
          connect patterns, judge whether you have enough data to answer a
          question, and reason through layered problems efficiently.
        </p>

        <ul role="list" className="ml-5 list-disc space-y-2">
          <li>Reading and interpreting visuals such as tables and charts</li>
          <li>Identifying and evaluating patterns, trends, and relationships</li>
          <li>Determining whether the provided information is sufficient</li>
          <li>
            Solving multi‑step problems{" "}
            <InlineMath math={"(n \\ge 2)"} />
          </li>
          <li>Structuring and organizing messy or incomplete data</li>
          <li>Combining insights from multiple sources</li>
          <li>Making sound decisions under realistic constraints</li>
        </ul>

        <p>
          Research from GMAC indicates that the abilities assessed in DI closely
          mirror what hiring managers look for. In short, DI simulates the
          complex, layered analytical tasks professionals handle day to day.
        </p>

        <MustKnow>
          DI evaluates how you think through real‑world, multi‑layered
          analytical work—less about rote computation, more about reasoning with
          data.
        </MustKnow>

        <p>
          Your DI results matter for the overall GMAT outcome on the same
          footing as Quant and Verbal. In other words, the weight on DI is{" "}
          <InlineMath math={"w_{\\text{DI}} \\approx w_{\\text{Q}} \\approx w_{\\text{V}}"} />
          , so treating DI as a core scoring component is essential.
        </p>

        <MustKnow>
          Data Insights contributes to your total score on par with Quant and
          Verbal—plan your prep accordingly.
        </MustKnow>

        <p>
          Many data‑savvy employers care about candidates&apos; DI strengths.
          Standing out on this section can elevate your profile for
          data‑driven roles and high‑visibility projects.
        </p>

        <MustKnow>
          A strong DI score can set you apart in hiring pipelines or when
          you&apos;re considered for analytics‑heavy initiatives.
        </MustKnow>
      </article>
    </main>
  );
}