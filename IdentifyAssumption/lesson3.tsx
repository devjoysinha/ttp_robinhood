import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.4 Strategy for Identify the Assumption Questions | Critical Reasoning",
  description:
    "A concise, practical 6‑step method for Identify the Assumption questions. Learn the core idea, use the Negation Test, and practice with two fully worked examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.4 A Strategy for Identify the Assumption Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Assumption questions ask for a statement that must be true for an
          argument to stand. Think of the assumption as the hidden plank that
          connects the evidence to the conclusion. If that plank breaks, the
          argument collapses.
        </p>

        <MustKnow>
          Assumptions are the necessary links between the stated evidence and
          the conclusion. If you negate the right assumption (write it as
          “not‑that”), the argument should fail. In symbols: premises → conclusion
          relies on some A. If you use ¬A, the chain from premises to conclusion
          breaks.
        </MustKnow>

        <section aria-labelledby="six-step-method">
          <h3 id="six-step-method" className="text-xl font-semibold text-white">
            A 6‑step method you can trust
          </h3>

          <p>
            Use this repeatable process to find the assumption efficiently and
            accurately.
          </p>

          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Read the passage carefully. Understand what is being claimed and
              what evidence is offered. Note key details and any comparisons,
              trends, or causal language.
            </li>
            <li>
              Read the question stem. Confirm it’s an Identify the Assumption
              task (a necessary assumption that the conclusion depends on).
            </li>
            <li>
              Pin down the exact conclusion. Quote it mentally, word for word,
              rather than paraphrasing loosely. Small wording differences can
              steer you to traps.
            </li>
            <li>
              Map the support. Identify the premises and how they are supposed
              to lead to the conclusion. The gap between premises and conclusion
              is where the assumption lives.
            </li>
            <li>
              First‑pass elimination. Remove choices that clearly don’t have to
              be true (out of scope, mere explanations, reverse logic, or
              restatements of premises). Keep any choices you’re unsure about.
            </li>
            <li>
              Choose the statement that must be true. If you’re stuck, apply the
              Negation Test: negate a contender and ask whether the argument
              falls apart. If negating it destroys the argument, you’ve likely
              found the assumption.
            </li>
          </ol>

          <MustKnow>
            On your first pass, only eliminate choices that are obviously wrong.
            It’s common for the correct assumption to look less “connected” at
            first glance. Keep the maybes for a second pass and use the Negation
            Test to decide.
          </MustKnow>

          <MustKnow>
            Nail the conclusion precisely. Choosing an answer that supports a
            slightly different or narrower conclusion is a classic trap in
            assumption problems.
          </MustKnow>
        </section>

        <section aria-labelledby="examples">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Practice: two targeted examples
          </h3>

          <MCQExample
            number={5}
            prompt={
              <>
                Until recently, quinoa was largely produced using lower‑impact
                traditional methods. With popularity and output rising, many
                growers have adopted commercial techniques that significantly
                harm the environment. Therefore, people who prioritize the
                environment should cut back on quinoa and choose other foods
                instead. Which of the following is an assumption required by
                this reasoning?
              </>
            }
            options={[
              "Growers could meet today’s demand using traditional practices if they expanded the total farmland enough.",
              "There exist foods with exactly the same nutrient profile and concentrations as quinoa.",
              "The commercial methods used to produce quinoa damage the environment more than the methods used to produce reasonable substitute foods.",
              "Quinoa farmers were better off financially before the shift to modern commercial methods.",
              "If consumers were more aware of quinoa’s environmental footprint, quinoa would be less popular.",
            ]}
            correct="The commercial methods used to produce quinoa damage the environment more than the methods used to produce reasonable substitute foods."
            solution={
              <>
                <p>
                  Conclusion: eco‑conscious consumers should swap away from
                  quinoa to other foods. Evidence: commercial quinoa production
                  harms the environment.
                </p>
                <p>
                  The switch only makes sense if producing the alternative foods
                  is not equally bad (or worse) for the planet. Otherwise,
                  replacing quinoa wouldn’t reduce harm.
                </p>
                <p>
                  That missing idea is precisely the assumption: the methods for
                  producing quinoa are more damaging than the methods for
                  producing the foods people would eat instead. Negation Test:
                  if it’s not true—if quinoa production is no worse than other
                  foods—then cutting quinoa doesn’t help, and the argument
                  collapses. Thus the comparative harm statement must hold.
                </p>
                <p>
                  The other options either discuss feasibility (not required),
                  an exact nutrient match (not necessary), farmer welfare (out
                  of scope), or popularity effects (a conclusion you could draw,
                  but not a needed assumption).
                </p>
              </>
            }
          />

          <MCQExample
            number={6}
            prompt={
              <>
                Many expect jazz players to read notation to learn new tunes.
                Yet a recent survey found that while amateurs mainly rely on
                reading, experts learn new songs by “playing by ear” much more
                often than by reading. These data suggest that learning by ear
                is the more effective way to learn jazz pieces. The conclusion
                depends on which assumption?
              </>
            }
            options={[
              "Learning by ear is an appropriate way to learn songs in every musical genre.",
              "Most expert jazz musicians who play by ear are weak at reading notation.",
              "For the kinds of tunes amateurs play, reading is just as easy as playing by ear.",
              "Amateur jazz musicians would prefer to play by ear rather than read notation.",
              "Expert jazz musicians learn new pieces more effectively than amateur jazz musicians do.",
            ]}
            correct="Expert jazz musicians learn new pieces more effectively than amateur jazz musicians do."
            solution={
              <>
                <p>
                  Premise: experts tend to learn by ear; amateurs mostly use
                  notation. Conclusion: learning by ear is the more effective
                  method for jazz.
                </p>
                <p>
                  The argument treats “what experts do” as evidence for “what’s
                  most effective.” That leap only works if experts are indeed
                  better at learning new material than amateurs. Negate the
                  choice—suppose experts are not more effective learners than
                  amateurs—and the preference of experts for playing by ear no
                  longer supports the claim about effectiveness. So this
                  assumption is required.
                </p>
                <p>
                  The remaining options talk about other genres (out of scope),
                  skill explanations (could even weaken the link), a subset of
                  songs (too narrow), or preferences (not about effectiveness).
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Identify the exact conclusion, map the support, and hunt for the
            indispensable link. When torn between finalists, negate each
            candidate. The one whose negation wrecks the argument is your
            assumption.
          </p>
        </section>
      </article>
    </main>
  );
}