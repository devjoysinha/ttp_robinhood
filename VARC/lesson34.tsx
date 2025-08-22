import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { useEffect, useRef } from "react";

// Small, client-only KaTeX helper for inline math
function InlineMath({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  "use client";
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const katex = await import("katex");
      await import("katex/dist/katex.min.css");
      if (mounted && ref.current) {
        try {
          katex.render(expr, ref.current, {
            throwOnError: false,
            trust: true,
            output: "html",
          });
        } catch {
          // graceful fallback: leave plain text if KaTeX fails
          ref.current.textContent = expr;
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [expr]);

  return <span ref={ref} aria-label={ariaLabel ?? "math"} className="align-baseline" />;
}

export const metadata: Metadata = {
  title: "3.35 Weaken the Argument | Reading Comprehension",
  description:
    "A concise, practical guide to Weaken questions in Reading Comprehension: what they ask, how to spot them, and a 3‑step method with a worked example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.35 Weaken the Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Weaken questions show up in Reading Comprehension too, not just in Critical
          Reasoning. The task is the same: pick the choice that makes a cited claim
          less convincing.
        </p>

        <MustKnow>
          In RC Weaken questions, your job is to reduce confidence in a specific
          conclusion mentioned in the stem. The credited response introduces new,
          relevant information that undercuts that conclusion or the support for it.
        </MustKnow>

        <p>
          RC Weaken prompts can target many kinds of claims: an author’s main point,
          a secondary conclusion, an explanation someone offers in the passage, or even
          the author’s critique of another view. The label doesn’t matter—your focus
          is on the conclusion named in the question.
        </p>

        <MustKnow>
          Learn the common stem language that signals a Weaken task, for example:
          “undermine,” “call into question,” “cast doubt,” “most seriously weaken,”
          or “most effectively counter.”
        </MustKnow>

        <section aria-labelledby="example-stems" className="space-y-2">
          <h3 id="example-stems" className="text-white font-semibold">
            Sample Weaken stems you might see
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Which of the following, if true, would most seriously undermine the author’s
              explanation for the rise in coastal erosion?
            </li>
            <li>
              The discovery of which of the following would call into question the claim
              that education is strongly associated with lifetime earnings
              (i.e., positive correlation <InlineMath expr="r &gt; 0" ariaLabel="r greater than zero" />)?
            </li>
            <li>
              Which option would most effectively counter the criticism stated at the
              beginning of the passage?
            </li>
            <li>
              Which finding would cast the greatest doubt on the theory described in
              the second paragraph?
            </li>
          </ul>
        </section>

        <section aria-labelledby="three-step" className="space-y-3">
          <h3 id="three-step" className="text-white font-semibold">
            A 3‑step plan for Weaken RC questions
          </h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Locate the cited conclusion. Go to the passage and find the exact claim
              referenced in the question stem.
            </li>
            <li>
              Identify the support and context. Note any evidence or reasoning tied to
              that conclusion. If the passage offers no clear support, read nearby
              sentences to understand the setup and scope.
            </li>
            <li>
              Test each answer against the conclusion. Choose the option that most
              clearly reduces the conclusion’s plausibility given the support/context.
              The correct answer introduces new information that weakens that specific claim.
            </li>
          </ol>
        </section>

        <MustKnow>Memorize the 3‑step process above and apply it mechanically under time.</MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-white font-semibold">
            Worked Example
          </h3>

          <MCQExample
            number={29}
            prompt={
              <>
                <p className="mb-3">
                  Paper currency whose value rests on government backing and public
                  confidence has many skeptics. They argue that because a central bank
                  manages the money supply in such a system, that supply will often fail
                  to align with current economic needs. They further warn that unlimited
                  creation of this type of money invites severe inflation if too much is
                  issued. As a remedy, skeptics advocate tying the money supply to a
                  commodity (for example, gold) so that currency creation is constrained
                  by the quantity of that commodity—thereby, in their view, eliminating
                  the risk of large swings in the money supply.
                </p>
                <p className="mb-3">
                  Proponents of government‑backed paper money counter that flexible
                  control by the central bank promotes stability and helps contain price
                  growth. They also contend that pegging money to a commodity can choke
                  a growing economy by keeping the money supply below an optimal level.
                </p>
                <p className="mb-3">
                  Which of the following, if true, most weakens the idea that adopting
                  the highlighted “remedy” would achieve its stated goal?
                </p>
              </>
            }
            options={[
              "Large changes in a country’s money supply do not always harm the overall economy.",
              "Some nations cannot implement a commodity peg because they lack adequate reserves of a suitable commodity.",
              "The available quantity of a commodity can swing sharply over short periods.",
              "In several countries, central banks have refrained from creating excessive amounts of money.",
              "In most modern economies, the money supply is not tied to a commodity.",
            ]}
            correct="The available quantity of a commodity can swing sharply over short periods."
            solution={
              <>
                <p>
                  The “remedy” is to peg the money supply to a commodity to avoid large
                  fluctuations in money supply. To weaken this, show that even with the
                  peg, large fluctuations could still happen.
                </p>
                <p>
                  If the commodity’s quantity can change dramatically in a short time,
                  then a money supply tied to that commodity can also change dramatically.
                  That directly undermines the claim that the peg would eliminate the
                  risk of large swings. Therefore, the choice stating that the commodity’s
                  supply can vary sharply is the strongest weakener.
                </p>
                <p className="mt-3">
                  Why the others don’t work:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Saying big money‑supply swings aren’t always damaging doesn’t show
                    the peg fails to reduce such swings.
                  </li>
                  <li>
                    Infeasibility in some countries doesn’t show the remedy fails where
                    it is implemented.
                  </li>
                  <li>
                    Examples of central banks not over‑issuing money don’t address the
                    peg’s effectiveness at preventing large swings.
                  </li>
                  <li>
                    Noting that most countries aren’t on a commodity peg says nothing
                    about whether the peg achieves its goal.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="big-picture" className="space-y-2">
          <h3 id="big-picture" className="text-white font-semibold">Big picture</h3>
          <p>
            Always anchor on the conclusion named in the stem, gather the support and
            context around it, then pick the choice that most directly erodes that
            conclusion’s credibility. If an option doesn’t touch the cited claim, it
            won’t be the correct answer.
          </p>
        </section>

        <ExampleCard
          number={30}
          title="Quick Drill: Identify what to weaken"
          statements={[
            "A passage attributes declining bee populations to pesticide X and proposes restricting X to stabilize pollination rates.",
            "1) A large longitudinal study finds that exposure to pesticide X varies widely by region.",
            "2) Weather volatility, not pesticides, best predicts regional pollination swings over the last decade.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The conclusion to weaken is: restricting X would stabilize pollination.
                Statement (1) is compatible with the conclusion and doesn’t show the
                restriction fails. Statement (2) supplies an alternate driver (weather),
                undermining the idea that restricting X will achieve stabilization.
                Thus, only (2) weakens.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}