import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (client-only) for small bits of notation
const KatexInline = dynamic(
  async () => {
    const mod = await import("react-katex");
    await import("katex/dist/katex.min.css");
    return { default: mod.InlineMath };
  },
  { ssr: false }
);

export const metadata: Metadata = {
  title: "1.7 RC Questions Show One at a Time | GMAT Reading Comprehension",
  description:
    "See how GMAT Reading Comprehension is delivered: a fixed passage on the left and one question at a time on the right. Learn the key test‑day rules: no back navigation, no Ctrl+F, and no highlighter tools.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.7 RC Questions Appear One at a Time
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On the GMAT, Reading Comprehension uses a split view: the passage stays
          visible in full on the left panel, while the right panel shows one
          question at a time. After you submit an answer, the next question
          replaces the previous one in that right‑hand panel, but the passage
          does not move or reload.
        </p>

        <MustKnow>
          RC uses a split‑screen layout. The passage remains fixed on the left,
          and a single question is shown on the right. When you confirm an
          answer, only the right side changes to the next question.
        </MustKnow>

        <p>
          The interface enforces the same navigation rules used elsewhere on the
          exam: you can’t peek ahead to later questions before answering the
          current one, and once you confirm an answer you can’t return to that
          earlier question.
        </p>

        <MustKnow>
          You must answer the current RC question to see the next one, and after
          you confirm, you can’t go back to change that answer.
        </MustKnow>

        <p>
          You also won’t be told how many questions a passage will generate
          ahead of time. If we let{" "}
          <KatexInline math="k" aria-label="k" /> represent the number of
          questions tied to a passage, you only know that{" "}
          <KatexInline math="k \ge 1" aria-label="k is at least 1" />; the exact
          value of <KatexInline math="k" aria-label="k" /> remains undisclosed
          until you finish the associated set.
        </p>

        <MustKnow>
          The test does not reveal in advance how many questions belong to a
          given passage.
        </MustKnow>

        <p>
          Finally, RC on the GMAT does not provide a “find” or highlight tool.
          Keyboard shortcuts such as Ctrl+F (or Command+F) and any built‑in
          highlighters are unavailable, both on the online and the in‑person
          versions of the exam. Plan to locate text evidence by skimming and
          scanning visually.
        </p>

        <MustKnow>
          No Ctrl+F and no highlighter tools are available in RC—on both the
          online and test‑center versions. You must navigate and locate evidence
          manually.
        </MustKnow>

        <MCQExample
          number={7}
          prompt="Which statement accurately describes the GMAT RC interface?"
          options={[
            "All questions for a passage appear at once under the passage.",
            "The passage stays fixed on the left, and a single question appears on the right; after you submit, the next question replaces it.",
            "You can use Ctrl+F (or Command+F) to search the passage.",
            "You may return to any earlier RC question at any time.",
            "You are told the total number of RC questions for a passage before starting.",
          ]}
          correct="The passage stays fixed on the left, and a single question appears on the right; after you submit, the next question replaces it."
          solution={
            <>
              <p>
                RC uses a split‑screen: fixed passage on the left, one question
                at a time on the right. There’s no Ctrl+F/highlighter, no
                back‑navigation, and the total number of questions isn’t shown
                in advance. Thus, the correct choice is the split‑screen
                description.
              </p>
            </>
          }
        />

        <section aria-labelledby="what-to-expect" className="space-y-3">
          <h3 id="what-to-expect" className="text-xl font-semibold text-white">
            What this means for your approach
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Read with purpose: capture the passage’s structure and key roles,
              since you can’t backtrack to earlier questions for second thoughts.
            </li>
            <li>
              Build a quick mental map of where ideas live in the passage to
              speed up evidence checks without a search tool.
            </li>
            <li>
              Don’t assume how many questions you’ll get—stay consistent from
              the first to the last item tied to a passage.
            </li>
          </ul>
        </section>

        <p className="pt-2">
          Next up: pacing strategies that help you manage time across short and
          long passages while keeping accuracy high.
        </p>
      </article>
    </main>
  );
}