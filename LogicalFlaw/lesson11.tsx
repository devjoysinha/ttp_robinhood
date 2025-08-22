import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          output: "html",
          displayMode: false,
        }),
      }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? "mathematical expression"}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          output: "html",
          displayMode: true,
        }),
      }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "10.2.9 Necessary vs. Sufficient (and Significant) | Logical Flaws",
  description:
    "Learn why “necessary” or “important” evidence is not the same as “sufficient” evidence. Includes formal notation, quick examples, and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.9 Logical Flaw Five: Mixing Up Necessary/Significant With Sufficient
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test writers love to blur the line between evidence that is required or
          meaningful and evidence that fully guarantees a conclusion. Those are not
          the same thing. This lesson clarifies the difference and shows how that mix‑up
          creates flawed arguments.
        </p>

        <MustKnow>
          “Necessary” or “important” information is not automatically “sufficient” to
          prove a conclusion. Confusing these ideas is a classic reasoning error.
        </MustKnow>

        <section aria-labelledby="defs" className="space-y-4">
          <h3 id="defs" className="text-xl font-semibold text-white">
            Definitions, with notation
          </h3>

          <p className="leading-relaxed">
            Let A be some condition and B be the result (or conclusion).
          </p>

          <div className="rounded-md bg-slate-800/50 p-4">
            <p className="font-semibold text-white">Sufficient condition</p>
            <p>
              If A is sufficient for B, then whenever A holds, B must hold. In symbols:{" "}
              <KInline expr="A \Rightarrow B" ariaLabel="A implies B" />.
            </p>
          </div>

          <div className="rounded-md bg-slate-800/50 p-4">
            <p className="font-semibold text-white">Necessary condition</p>
            <p>
              If A is necessary for B, then B cannot happen without A. In symbols:{" "}
              <KInline expr="B \Rightarrow A" ariaLabel="B implies A" />.
            </p>
          </div>

          <KBlock
            expr={`\\text{Key pitfalls:}\\quad
\\begin{aligned}
\\text{(1) Treating necessary as sufficient:}\\; & B \\Rightarrow A\\;\\text{ but concluding }\\; A \\Rightarrow B.\\\\
\\text{(2) Treating “significant” as sufficient:}\\; & \\text{A matters, but does not guarantee } B.
\\end{aligned}`}
            ariaLabel="Common pitfalls with necessary and sufficient conditions"
          />
        </section>

        <section aria-labelledby="examples" className="space-y-4">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Quick intuition checks
          </h3>

          <div className="space-y-3">
            <p className="font-semibold text-white">Necessary, not sufficient:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Plants require water to survive. Water is <em>required</em>, but by itself
                it doesn’t ensure growth (they also need light, nutrients, etc.).
              </li>
              <li>
                All mammals are animals. If something is a mammal, it must be an animal.
                But “not having evidence that it’s not an animal” is far from enough to
                conclude it <em>is</em> a mammal.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-white">Clearly sufficient:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Knowing a creature is a shark is enough to conclude it’s a fish
                (all sharks are fish).
              </li>
              <li>
                If a person flatly refuses to read any biography, then any plan that
                requires reading a specific biography will fail.
              </li>
            </ul>
          </div>
        </section>

        <MustKnow>
          If an argument needs evidence that guarantees the conclusion but instead
          provides evidence that is only required or merely meaningful, the reasoning
          is defective.
        </MustKnow>

        <section aria-labelledby="creos" className="space-y-3">
          <h3 id="creos" className="text-xl font-semibold text-white">
            A common trap in the wild
          </h3>
          <p>
            Imagine a city raises the minimum wage above the poverty line. Some conclude:
            “Therefore, no one there will be poor.” Having access to above‑poverty wages
            may be important and arguably necessary for escaping poverty, but it isn’t
            automatically enough. People who cannot work due to chronic illness, for
            example, would not benefit directly from the higher wage. The argument
            confuses a potentially necessary condition with a sufficient one.
          </p>
        </section>

        <MCQExample
          number={12}
          prompt="Principal of Guatama Elementary: Our school’s average reading score has lagged the state average for years. We’ve discovered heavy metals in the schoolyard that impair cognition when absorbed. Once we fix this issue, our average will rise to match the state average. Which choice best describes the flaw?"
          options={[
            "He does not show that other schools’ yards are free of the same heavy metals.",
            "He ignores that some Guatama students already score above the state average.",
            "He overlooks that raising Guatama’s scores could also raise the state average.",
            "He assumes, without justification, that removing the heavy metals will by itself close the entire score gap.",
            "He fails to specify the method by which the heavy metals will be removed.",
          ]}
          correct="He assumes, without justification, that removing the heavy metals will by itself close the entire score gap."
          solution={
            <>
              <p>
                The conclusion requires that fixing the contamination be{" "}
                <strong>sufficient</strong> to erase the average‑score gap. The evidence
                shows a plausible cause of low scores, but nothing proves that cause is
                the only meaningful factor. Other contributors (instructional quality,
                attendance, resources, etc.) could keep the gap in place.
              </p>
              <p>
                That’s the classic “necessary/significant vs. sufficient” mix‑up: even if
                remediation is necessary or very important, it may not be enough on its own
                to guarantee parity with the state average.
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>
                  Choices about other schools (A) and method details (E) don’t affect the
                  core sufficiency claim.
                </li>
                <li>
                  Individual high scorers (B) are compatible with a low average and don’t
                  address the flaw.
                </li>
                <li>
                  A shifting state average (C) doesn’t preclude Guatama from catching up;
                  it’s not the key defect.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Spot the swap: arguments are flawed when they treat “A is required for B”
          (B ⇒ A) or “A is important for B” as if it were “A guarantees B” (A ⇒ B).
        </MustKnow>

        <section aria-labelledby="wrap" className="space-y-3">
          <h3 id="wrap" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <p>
            Keep the arrows straight. Sufficient: <KInline expr="A \\Rightarrow B" ariaLabel="A implies B" />.
            Necessary: <KInline expr="B \\Rightarrow A" ariaLabel="B implies A" />. When a prompt
            needs a guarantee but only gives a requirement or “this matters,” the reasoning
            doesn’t reach the conclusion.
          </p>
        </section>
      </article>
    </main>
  );
}