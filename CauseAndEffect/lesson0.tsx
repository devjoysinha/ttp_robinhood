import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// Note: Ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import katex from "katex";

export const metadata: Metadata = {
  title: "6.1 Cause-and-Effect Arguments | Critical Reasoning",
  description:
    "An accessible introduction to causal reasoning for GMAT Critical Reasoning: what a cause–effect claim means, why it’s common on the test, and what assumptions typically underlie such arguments.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">6.1 Introduction</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a causal claim, one event is said to produce another: a cause leads to an effect. In
          shorthand, we might write{" "}
          <MathInline expr={"X \\to Y"} ariaLabel="X leads to Y" /> to mean “X causes Y.”
        </p>

        <MustKnow>
          A cause–and–effect relationship asserts that one occurrence brings about another. It goes
          beyond simple co‑occurrence or timing; it claims a generative link from cause to effect.
        </MustKnow>

        <p>Here are a few everyday illustrations of causal language:</p>
        <ul className="list-inside list-disc space-y-1 text-gray-300">
          <li>Applying heat makes ice melt.</li>
          <li>Earth’s gravity pulls objects downward.</li>
          <li>Smoking increases the risk of lung cancer.</li>
        </ul>

        <p>
          You’ll encounter causal reasoning frequently in Critical Reasoning prompts. Sometimes the
          relationship is genuinely causal; other times, the argument only{" "}
          <em>appears</em> to show causation when it actually reflects a different pattern (for
          example, mere correlation or a reversed direction of influence).
        </p>

        <MustKnow>
          Causal arguments are common in GMAT Critical Reasoning. Many prompts either rely on a
          cause–effect link or tempt you with a claim that only seems causal.
        </MustKnow>

        <p>
          Earlier chapters have already surfaced arguments with a causal flavor. Because these show
          up so often—and can be subtle—this chapter will sharpen your ability to analyze them. We’ll
          start by surfacing the typical assumptions built into a claim like{" "}
          <MathInline expr={"C \\Rightarrow E"} ariaLabel="C implies E" />, and then we’ll practice
          weakening, strengthening, and correctly interpreting such claims.
        </p>

        <p className="text-gray-400">
          Up next: the core assumptions behind any cause–and–effect argument and how they can be
          challenged or supported.
        </p>
      </article>
    </main>
  );
}