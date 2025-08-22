```tsx
// app/gmat/reading-comprehension/1-intro/1-2-winning-mindset/page.tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

// KaTeX (server-rendered) for a compact, accessible equation
import katex from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "1.2 Building the Winning RC Mindset | GMAT Reading Comprehension",
  description:
    "Develop a productive mindset for GMAT Reading Comprehension. Replace myths with proven habits, avoid gimmicks, and learn how deliberate practice and strategy drive real improvement.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel || "equation"}
      className="inline-block align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.2 Building the Winning Reading Comprehension Mindset
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section aria-labelledby="rc-mindset-intro">
          <h3 id="rc-mindset-intro" className="text-xl font-semibold text-white">
            Why mindset matters
          </h3>
          <p className="mt-2">
            Strong performance on Reading Comprehension is not reserved for a select few.
            Most learners can improve substantially—provided they train the right skills and use
            effective strategies. In short:
            {" "}
            <MathInline
              expr={`\\text{RC}_{\\text{score}}\\ \\propto\\ \\text{Practice}\\times\\text{Strategy}`}
              ariaLabel="RC score is proportional to practice times strategy"
            />
            .
          </p>
        </section>

        <MustKnow>
          Improvement in RC follows from targeted practice plus sound strategy—not luck, not shortcuts.
          Treat it like any other skill you can train.
        </MustKnow>

        <section aria-labelledby="myths-vs-truths" className="space-y-6">
          <h3 id="myths-vs-truths" className="text-xl font-semibold text-white">
            Common myths—and the mindset that beats them
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Myth: “RC ability is fixed.”</p>
            <p className="mt-2">
              Believing that your reading ability can’t change discourages practice in the very
              areas that create improvement.
            </p>
            <p className="mt-3 font-medium text-gray-100">Winning mindset:</p>
            <p>
              RC is trainable. With deliberate drills, strategy, and feedback, you can raise both
              accuracy and speed.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Myth: “Just grind more passages.”</p>
            <p className="mt-2">
              Unstructured repetition often cements unhelpful habits and stalls progress.
            </p>
            <p className="mt-3 font-medium text-gray-100">Winning mindset:</p>
            <p>
              Learn concrete techniques—main idea extraction, paragraph role, author attitude,
              reference tracking—and then practice with intention.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Myth: “There’s not enough time—skip entire passages.”</p>
            <p className="mt-2">
              Rapid-fire guessing on a full passage risks a streak of consecutive misses that can
              heavily impact your score.
            </p>
            <p className="mt-3 font-medium text-gray-100">Winning mindset:</p>
            <p>
              Build pacing through practice sets, tighten your read for structure, and make
              selective, informed guesses—not mass skipping.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Myth: “I only do well on topics I like.”</p>
            <p className="mt-2">
              Waiting for interesting content is a luxury the exam won’t provide.
            </p>
            <p className="mt-3 font-medium text-gray-100">Winning mindset:</p>
            <p>
              Approach every passage like a professional analyst: identify purpose, map structure,
              and extract claims—even when the subject isn’t your favorite.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Myth: “Use tricks and hacks; passages are too dense.”</p>
            <p className="mt-2">
              Gimmicks rarely hold up under exam pressure and can cause misreads.
            </p>
            <p className="mt-3 font-medium text-gray-100">Winning mindset:</p>
            <p>
              Rely on fundamentals that scale: purposeful reading, locating evidence, and testing
              each choice against the passage.
            </p>
          </div>
        </section>

        <MustKnow>
          Gimmicks don’t generalize; fundamentals do. Master structure-first reading, evidence-based
          elimination, and disciplined pacing.
        </MustKnow>

        <section aria-labelledby="avoid-gimmicks">
          <h3 id="avoid-gimmicks" className="text-xl font-semibold text-white">
            “Shortcuts” to avoid
          </h3>
          <p className="mt-2">
            If any of these are in your toolkit, replace them with skills-based methods:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>Reading only the first/last sentence of each paragraph</li>
            <li>Reading only the first and last paragraphs</li>
            <li>Skimming for a vague “main idea” without structure mapping</li>
            <li>Speed-reading “hacks” that sacrifice comprehension</li>
            <li>Peeking at the first question before reading the passage</li>
            <li>Re-reading the entire passage repeatedly to “feel sure”</li>
            <li>Pre-thinking answers instead of testing choices against text</li>
            <li>Auto-eliminating “extreme” choices without evidence</li>
            <li>Scanning only keywords rather than relationships and claims</li>
            <li>Selecting choices just because words match the passage</li>
          </ul>
        </section>

        <MustKnow>
          Read with intent: map the passage, locate evidence, and evaluate each answer against what the text actually says.
        </MustKnow>

        <section aria-labelledby="next-steps">
          <h3 id="next-steps" className="text-xl font-semibold text-white">
            What’s next
          </h3>
          <p className="mt-2">
            Up next, we’ll clarify what GMAT Reading Comprehension actually tests so you can align
            your study to the skills that matter most.
          </p>
        </section>
      </article>
    </main>
  );
}
```