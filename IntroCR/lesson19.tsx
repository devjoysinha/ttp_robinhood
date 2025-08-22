import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.19 Timing and Critical Reasoning | Verbal",
  description:
    "Learn practical timing guidelines for GMAT Critical Reasoning: how long to spend per question on test day and how to practice effectively off-test. Includes must‑know tips and study advice.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="inline-block align-middle"
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.19 Managing Time on Critical Reasoning Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On the GMAT, you’ll have limited time for each Verbal question. For Critical
          Reasoning specifically, plan on spending about{" "}
          <MathInline
            expr={`t \\approx 1.75\\text{–}2.00\\ \\text{min}`}
            ariaLabel="between one point seven five and two minutes"
          />{" "}
          per question on average. Tougher items can legitimately require more time—up to{" "}
          <MathInline expr={`t_{\\max}=3\\ \\text{min}`} ariaLabel="three minutes maximum" />.
        </p>

        <MustKnow>
          You should typically allocate around 1.75 to 2 minutes to a Critical
          Reasoning prompt on test day, with particularly challenging questions taking
          as long as 3 minutes.
        </MustKnow>

        <p>
          Timing during a real exam and timing during practice serve different goals.
          When you’re taking the test, time management is essential. When you’re building
          skill, speed is secondary.
        </p>

        <MustKnow>
          In practice, work untimed. Prioritize understanding and accuracy first; speed
          will follow as your skill improves.
        </MustKnow>

        <p>
          A productive way to practice is to analyze every choice thoroughly—why each
          incorrect option fails and why the correct one stands. That deeper review often
          takes significantly longer than two minutes. Many learners spend 5–10 minutes
          (or more) on a single practice problem while they’re still developing
          fundamentals, and that’s okay.
        </p>

        <p>
          Think of it this way: getting many questions wrong quickly won’t build the
          reasoning habits you need. Giving yourself enough time to dissect arguments,
          trace assumptions, and compare answer choices will. As those skills solidify,
          your pace naturally increases.
        </p>

        <p>
          One last note: the formats and logic patterns in Critical Reasoning have been
          stable over time. The more you practice methodically, the more familiar those
          patterns will feel—and the easier it becomes to stay on schedule when it counts.
        </p>
      </article>
    </main>
  );
}