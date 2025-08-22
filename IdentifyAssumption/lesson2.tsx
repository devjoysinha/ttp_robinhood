import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX only on the client
const BlockMath = dynamic(
  async () => {
    const m = await import("react-katex");
    await import("katex/dist/katex.min.css");
    return m.BlockMath;
  },
  { ssr: false }
);

export const metadata: Metadata = {
  title: "2.3 Recognizing Identify-the-Assumption Questions | Critical Reasoning",
  description:
    "How to spot Identify-the-Assumption question stems, what they demand, and how to reason through a sample problem with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.3 Recognizing Identify‑the‑Assumption Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          These questions are usually easy to recognize because the stem uses
          familiar cues that ask for a missing piece of logic the author needs.
          Your job is to find the statement that must be true for the argument
          to hold together—not something that merely sounds plausible or draws a
          new conclusion.
        </p>

        <section aria-labelledby="common-stems">
          <h3 id="common-stems" className="text-white font-semibold">
            Common ways the stem is phrased
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Which option is a claim the argument requires to be valid?</li>
            <li>Which statement is taken for granted in reaching the conclusion?</li>
            <li>The argument relies on which of the following?</li>
            <li>The conclusion above presupposes that ____.</li>
            <li>Which statement, if added as a premise, would best justify the conclusion?</li>
            <li>For the conclusion to be correct, which choice must be true?</li>
          </ul>
        </section>

        <MustKnow>
          Learn to spot the predictable language of assumption stems, and remember:
          the correct answer is a necessary bridge between the evidence and the conclusion.
          If that statement is false, the argument’s logic collapses.
        </MustKnow>

        <section aria-labelledby="example">
          <h3 id="example" className="text-white font-semibold">
            Worked example
          </h3>

          <div className="rounded-md border border-gray-700/60 bg-gray-900/40 p-4">
            <p className="mb-4">
              Side‑by‑side testing reports no meaningful difference in the levels
              of key nutrients in produce grown conventionally versus organically.
              Therefore, there is no reason to think eating organic produce is
              healthier than eating conventional produce.
            </p>

            <p className="mb-2 font-medium text-gray-200">
              Which statement is an assumption the argument depends on?
            </p>

            <MCQExample
              number={4}
              prompt="Choose the claim that must be true for the author’s conclusion to follow."
              options={[
                "Organic fruits and vegetables taste no different from conventional ones.",
                "Plants necessarily absorb nutrients from soil to grow.",
                "Conventional produce does not contain meaningful amounts of health‑harming substances that organic produce lacks.",
                "The price premium for most organic produce is unwarranted.",
                "Organic farming methods typically require more labor than conventional methods.",
              ]}
              correct="Conventional produce does not contain meaningful amounts of health‑harming substances that organic produce lacks."
              solution={
                <>
                  <p className="mt-4">
                    The author moves from “no nutrient advantage” to “no health
                    advantage.” That jump only works if we also rule out other
                    health‑relevant differences—such as harmful contaminants.
                  </p>

                  <div className="my-3">
                    <BlockMath math="\text{No nutrient gap} \;\Rightarrow\; \text{No health gap} \quad \text{(only if no unique harm from conventional)}" />
                    <BlockMath math="\text{Needed: } \neg\big(\text{Conventional has unique health-harming chemicals}\big)" />
                  </div>

                  <p>
                    Choice C states exactly that needed safeguard: conventional
                    produce does not uniquely introduce health‑harming substances.
                    Without C, the evidence about nutrients could be true, and yet
                    organic could still be healthier because it avoids harms present
                    in conventional produce.
                  </p>

                  <p className="mt-3">
                    Why the others are out:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      A (taste) and D (prices) are off‑scope: the conclusion is about
                      health, not flavor or cost.
                    </li>
                    <li>
                      B (how plants grow) doesn’t affect the logic connecting nutrient
                      parity to the health conclusion.
                    </li>
                    <li>
                      E (farming effort) is unrelated to the claim about health benefits.
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </section>

        <MustKnow>
          Assumption answers are necessary, not just helpful. Try the negation test:
          if negating a choice breaks the argument, you’ve likely found the assumption.
        </MustKnow>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-white font-semibold">
            Big picture
          </h3>
          <p>
            Identify‑the‑Assumption stems point you to the argument’s hidden link.
            Look for gaps between the premise(s) and the conclusion, rule out
            unrelated or merely plausible claims, and confirm your pick is truly
            required for the conclusion to stand.
          </p>
        </section>
      </article>
    </main>
  );
}