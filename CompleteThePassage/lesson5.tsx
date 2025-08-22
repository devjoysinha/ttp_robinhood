import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.6 Complete the Passage: Choose Logic Over Look‑alike Wording | GMAT Verbal",
  description:
    "Avoid trap answers that echo the passage’s phrasing. Learn how to complete the argument logically, not by word matching. Includes two worked examples with full reasoning.",
};

function Eq({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  return (
    <span
      role="img"
      aria-label={ariaLabel ?? "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.6 Pick the Answer That Fits the Passage’s Logic — Not Just Its Words
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On Complete the Passage questions, tempting wrong choices often recycle
          memorable phrases from the text. Don’t be swayed by verbal overlap.
          Your job is to finish the argument in a way that makes the author’s
          reasoning work, even if the right answer uses different wording.
        </p>

        <MustKnow>
          Correct completions align with the argument’s logic, not with its
          vocabulary. Prioritize what must be true for the author’s claim to
          make sense, and beware of options that merely echo the stimulus.
        </MustKnow>

        <section aria-labelledby="ebook-mini-example" className="space-y-4">
          <h3 id="ebook-mini-example" className="text-xl font-semibold text-white">
            Mini example: wording echo vs. logical completion
          </h3>

          <MCQExample
            number={61}
            prompt='Since the rise of e‑books, some predicted that print publishing would soon fade because readers would favor the convenience of digital formats. However, this forecast may have been premature, as ________.'
            options={[
              "revenue at neighborhood bookstores has largely come from sales of traditional books",
              "in the past few years, sales of physical books have actually gone up",
            ]}
            correct="in the past few years, sales of physical books have actually gone up"
            solution={
              <>
                <p>
                  We need a fact that undercuts the prediction that print will
                  soon be obsolete. The first option sounds familiar — it
                  mentions traditional books and bookstores — but those stores
                  could still be shrinking while relying on print for what
                  remains of their revenue. The second option directly weakens
                  the prediction by reporting rising print sales, which suggests
                  obsolescence is not imminent.
                </p>
              </>
            }
          />
        </section>

        <p>
          A reliable way to avoid wording traps is to turn the incomplete
          sentence into a specific question that targets the author’s claim
          (e.g., “Why?” or “What explains?”). Then pick the choice that best
          addresses that question, even if it doesn’t reuse the passage’s terms.
        </p>

        <MustKnow>
          Convert the blank into a focused question and answer that question
          directly. Matching the surface language of the passage is not enough —
          the completion must strengthen, explain, or otherwise make the author’s
          final claim reasonable.
        </MustKnow>

        <section aria-labelledby="sustainable-power-example" className="space-y-4">
          <h3
            id="sustainable-power-example"
            className="text-xl font-semibold text-white"
          >
            Example: complete the argument logically
          </h3>

          <MCQExample
            number={62}
            prompt="Every megawatt generated from a clean, renewable source (e.g., wind or solar) displaces a megawatt that would otherwise have been produced by a polluting source (e.g., fossil fuels). Thus, each renewable megawatt avoids some pollution. At the same time, the amount of pollution avoided per renewable megawatt has been decreasing because ________."
            options={[
              "consumer costs for renewable power have fallen due to government subsidies",
              "advances in technology have lowered the pollution produced per megawatt from fossil fuels",
              "the cost of producing power from fossil fuels has dropped",
              "the share of total power produced from fossil fuels has been steadily declining",
              "some countries are attempting to cap annual pollution from fossil fuel use",
            ]}
            correct="advances in technology have lowered the pollution produced per megawatt from fossil fuels"
            solution={
              <>
                <p className="mb-2">
                  Reframe the blank as a question: “Why would pollution avoided
                  per renewable megawatt be getting smaller?” If fossil power is
                  cleaner per unit than before, then swapping in one renewable
                  megawatt prevents less pollution than it used to.
                </p>

                <p className="mb-2">
                  A compact way to see this:
                </p>
                <div className="rounded-md bg-gray-800/50 p-3 text-gray-200">
                  <p className="mb-1">
                    Avoided pollution per MW:
                    {" "}
                    <Eq
                      ariaLabel="Avoided equals fossil per megawatt minus renewable per megawatt"
                      expr={`A = E_{\\text{fossil per MW}} - E_{\\text{renew per MW}}`}
                    />
                  </p>
                  <p className="mb-0">
                    Since renewables are approximately non‑polluting,
                    {" "}
                    <Eq expr={`E_{\\text{renew per MW}} \\approx 0`} ariaLabel="Renewable per megawatt approximately zero" />
                    , so
                    {" "}
                    <Eq expr={`A \\approx E_{\\text{fossil per MW}}`} ariaLabel="Avoided approximately equals fossil per megawatt" />
                    . If
                    {" "}
                    <Eq expr={`E_{\\text{fossil per MW}}`} ariaLabel="fossil per megawatt" />
                    {" "}
                    decreases over time,
                    {" "}
                    <Eq expr={`A`} ariaLabel="Avoided pollution" />
                    {" "}
                    decreases as well.
                  </p>
                </div>

                <p className="mt-3">
                  That’s exactly what the correct choice states. The other
                  options either concern prices or total/output shares or policy
                  caps — none of which directly changes the pollution created
                  per megawatt and thus do not explain a decline in avoided
                  pollution per renewable megawatt.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: treat these as reasoning problems. The right completion
          makes the author’s conclusion make sense; a look‑alike choice that
          merely borrows the passage’s vocabulary does not.
        </p>
      </article>
    </main>
  );
}