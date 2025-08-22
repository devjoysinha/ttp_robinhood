import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import "katex/dist/katex.min.css";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "1.18 No Specialized Knowledge Needed | Critical Reasoning",
  description:
    "Critical Reasoning problems do not require expert background knowledge. Learn what counts as common knowledge, what will be provided in the prompt, and why logical reasoning—not outside facts—is the real challenge.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.18 No Outside, Specialized Knowledge Needed for Critical Reasoning
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You don’t need expert-level facts in economics, science, or any niche field to solve Critical Reasoning (CR) questions. People with everyday experience and a standard middle‑ or high‑school education already know enough to engage with what these questions ask.
        </p>

        <MustKnow>
          Correct CR answers never depend on specialized, outside knowledge. If the problem needs information beyond common sense, it will either be provided in the text or won’t be required to pick the right answer.
        </MustKnow>

        <p>
          You will see passages tied to a variety of domains—business, public policy, psychology, and more. Still, anything you genuinely need that isn’t part of general knowledge will be stated in the prompt. For instance, it’s reasonable to expect you know the basic idea of profit. Written as a simple relationship:
          {" "}
          <InlineMath math="\\text{profit} = \\text{revenue} - \\text{cost}" />
          . On the other hand, you would not be expected to know technical links between mortgage rates and bond yields.
        </p>

        <p>
          Similarly, it’s ordinary knowledge that depression can involve prolonged sadness or low mood. However, advanced medical explanations for its causes fall outside what CR expects you to know in advance.
        </p>

        <MustKnow>
          If a choice can only be confirmed by having expert training in a field, that choice cannot be the correct answer to a CR question.
        </MustKnow>

        <p>
          Important nuance: CR often references unfamiliar topics or plans. Even so, any specialized detail necessary to reason correctly will be contained within the question itself. The real difficulty is the logical work—tracking claims, evaluating assumptions, and testing implications—not recalling outside facts.
        </p>

        <p>
          Coming up, we’ll discuss pacing and how to manage your time on CR without sacrificing careful reasoning.
        </p>
      </article>
    </main>
  );
}