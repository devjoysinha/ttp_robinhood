import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";

// Note: Add `import "katex/dist/katex.min.css";` to your app/layout.tsx (global CSS)
// so KaTeX renders with proper styles across the app.
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "1.4 RC vs. Leisure Reading | GMAT Reading Comprehension",
  description:
    "Why GMAT Reading Comprehension requires a different mindset than casual reading. Learn how to read actively, stay fully engaged, and bring focus from practice to test day.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.4 Reading Comprehension Is Not Leisure Reading
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many of us read for fun—novels, long‑form journalism, or weekend
          features. That relaxed mode is great for enjoyment, but it&apos;s not
          the approach that earns points on GMAT Reading Comprehension. In short:{" "}
          <InlineMath math={"\\text{RC} \\ne \\text{leisure reading}"} />
          .
        </p>

        <MustKnow>
          GMAT RC demands an intentional, goal‑driven reading style. Casual,
          skim‑as‑you‑go habits from everyday reading won&apos;t reliably uncover
          structure, purpose, or fine‑grained details in test passages.
        </MustKnow>

        <p>
          When you read for pleasure, your attention may drift—and that&apos;s
          fine. Picture yourself in a cozy chair with a coffee and a Sunday
          magazine or on a beach with a mystery novel. That easy, low‑effort
          headspace is the opposite of what you need for RC.
        </p>

        <MustKnow>
          Treat every RC passage like a focused workout: read actively, track
          the author&apos;s aim, map the structure, and note shifts in tone or
          evidence. You&apos;re not passively absorbing words—you&apos;re
          interrogating the text.
        </MustKnow>

        <p>
          Show up ready to work. Bring full attention to the page, look for how
          ideas connect, and anticipate what the author is trying to accomplish.
          This mindset is essential during practice in your course, on mock
          exams, and especially on test day.
        </p>

        <p>
          We&apos;ll reinforce this idea throughout the upcoming sections. Next,
          let&apos;s look at how many Reading Comprehension questions you should
          expect on the GMAT.
        </p>
      </article>
    </main>
  );
}