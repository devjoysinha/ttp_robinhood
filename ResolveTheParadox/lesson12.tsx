import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Inline KaTeX renderer (server-safe)
function MathInline({
  expr,
  alt,
  className = "",
}: {
  expr: string;
  alt: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    trust: true,
    output: "html",
  });
  return (
    <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }}>
      {/* KaTeX output */}
    </span>
  );
}

export const metadata: Metadata = {
  title: "5.8.5 Paradox Trap Type 5: Information With No Impact | Critical Reasoning",
  description:
    "Learn to avoid Resolve-the-Paradox answers that add facts with zero impact on the contradiction. Includes a worked example and a quick multiple-choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.5 Incorrect Choice Type 5: Adds Information That Does Not Affect the Paradox
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common trap in Resolve‑the‑Paradox questions is an answer that introduces a fact
          related to the scenario but that doesn’t actually change the tension between the two
          given facts. These choices sound relevant yet leave the contradiction untouched.
        </p>

        <MustKnow>
          A choice that leaves the contradiction unchanged cannot be the solution.
          If the proposed fact does not shift the outcome or reconcile the two facts, it has{" "}
          <span className="inline-flex items-center gap-1">
            zero effect
            <MathInline
              className="ms-1"
              expr="\,\Delta_{\text{paradox}} = 0"
              alt="Delta paradox equals zero"
            />
          </span>{" "}
          and must be eliminated.
        </MustKnow>

        <section aria-labelledby="billboard-example">
          <h3 id="billboard-example" className="text-xl font-semibold text-white">
            Mini‑Example: Billboards and Crashes
          </h3>
          <p className="mt-2">
            A city removed a row of billboards along a short highway segment because officials
            suspected that the signs distracted drivers during the afternoon rush. Surprisingly,
            after the billboards came down, the daily crash count increased.
          </p>

          <p className="mt-2">The puzzle is:</p>
          <ul className="list-disc pl-6">
            <li>Billboards believed to be distracting were removed.</li>
            <li>Yet collisions went up, not down.</li>
          </ul>

          <p className="mt-2">Consider how different statements interact with the paradox.</p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-100">Incorrect: No real impact</p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                “Without the billboards, the roadside looks more natural.” Nice to know, but it
                doesn’t plausibly change afternoon crash risk.
              </li>
              <li>
                “The billboards advertised shops farther down the road.” This detail doesn’t connect
                in a sensible way to the increase in accidents.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-emerald-700 bg-emerald-900/20 p-4">
            <p className="font-semibold text-emerald-200">Correct: Resolves the contradiction</p>
            <p className="mt-2">
              “The boards had blocked low afternoon sun from shining straight into drivers’ eyes.”
              Removing them increased glare, plausibly causing more crashes. This directly bridges
              the two facts, so it resolves the paradox.
            </p>
          </div>
        </section>

        <MustKnow>
          Don’t invent far‑fetched stories to make a choice seem helpful. The right answer will
          create a clear, sensible connection that reduces the tension between the two facts.
        </MustKnow>

        <section aria-labelledby="mcq-example">
          <h3 id="mcq-example" className="text-xl font-semibold text-white">
            Quick Check
          </h3>

          <MCQExample
            number={17}
            prompt="The First‑Sale Doctrine (established in 1908) allows someone who lawfully purchases a physical copy of a copyrighted work to resell or otherwise dispose of that copy, even for profit, creating a legal secondary market. However, courts have rejected attempts to build a lawful secondary market for purely digital goods such as MP3s and e‑books. Which option best explains this difference?"
            options={[
              "When a digital file is 'resold,' there is no reliable way to confirm the seller deleted every copy; disposal cannot be verified.",
              "Some potential buyers lack the devices needed to play MP3s or read e‑books.",
              "Publishers and labels have also tried to shut down resale markets for physical goods.",
              "Digital formats did not exist when the First‑Sale Doctrine was recognized.",
              "Many creators release the same content in both digital and physical formats.",
            ]}
            correct="When a digital file is 'resold,' there is no reliable way to confirm the seller deleted every copy; disposal cannot be verified."
            solution={
              <>
                <p>
                  We need a fact that explains why resale is fine for physical copies but not for
                  digital files.
                </p>
                <p className="mt-2">
                  Option A highlights a decisive difference: when you sell a physical book or CD,
                  your copy leaves your possession. With digital goods, the “seller” can keep
                  identical copies, and{" "}
                  <MathInline expr="\text{disposal is unverifiable}" alt="disposal is unverifiable" />.
                  Since the doctrine assumes true disposal, unverifiability explains why courts treat
                  digital resale differently. Therefore, A resolves the contradiction.
                </p>
                <ul className="mt-3 list-disc pl-6">
                  <li>
                    B: Access to devices is irrelevant; it doesn’t reconcile the legal difference.
                  </li>
                  <li>
                    C and E: These note similarities, not the critical legal distinction.
                  </li>
                  <li>
                    D: Digital’s later invention doesn’t by itself justify different treatment,
                    especially since newer physical media still fall under the doctrine.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p className="mt-2">
            The correct Resolve‑the‑Paradox answer actively reduces the conflict between the two
            facts. If a choice leaves the central tension unchanged{" "}
            <MathInline expr="\left(\Delta_{\text{paradox}} = 0\right)" alt="Delta paradox equals zero" />{" "}
            or relies on a stretched, implausible story, eliminate it.
          </p>
        </section>
      </article>
    </main>
  );
}