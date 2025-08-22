import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { KaTeX } from "@/components/ui/KaTeX";

export const metadata: Metadata = {
  title: "17.1 Introduction | Probability",
  description:
    "A concise intro to probability: experiments, outcomes, and events; what “with replacement” and “without replacement” mean; and the core probability bounds. Includes a quick check question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.1 Introduction to Probability
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Probability assigns a number to how likely something is to happen.
          To reason clearly, we’ll use a few precise terms throughout this chapter:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Experiment:</strong> an action with uncertain results
            (for instance, drawing a ball from a bag, picking a flower from a vase,
            or taking a cookie from a jar).
          </li>
          <li>
            <strong>Outcome:</strong> a single result of an experiment.
          </li>
          <li>
            <strong>Event:</strong> a specific outcome or a collection of outcomes.
          </li>
        </ul>

        <div className="rounded-md border border-gray-700 bg-gray-800/50 p-4">
          <div className="space-y-3">
            <p className="text-gray-200 font-semibold">Notation you’ll see:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden="true" />
                <div>
                  <KaTeX expression="S" /> denotes the sample space (all possible outcomes),
                  and an event is a subset of the sample space: <KaTeX expression="E \subseteq S" />.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden="true" />
                <div>
                  Every probability is between 0 and 1 (inclusive):
                  <span className="ml-2">
                    <KaTeX expression="0 \le P(E) \le 1" />
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden="true" />
                <div>
                  The probabilities of all outcomes in <KaTeX expression="S" /> add up to 1:
                  <span className="ml-2">
                    <KaTeX expression="\sum_{\omega \in S} P(\omega) = 1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>
          You’ll also encounter “with replacement” and “without replacement.”
          These phrases describe whether selected items go back into the pool before the next selection.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>With replacement:</strong> after an item is chosen, it’s returned to the set before the next draw.
              Consecutive draws are typically independent, so
              <span className="ml-1">
                <KaTeX expression="P(A \text{ then } B) = P(A)\,P(B)" />
              </span>
              , when the events do not influence each other.
            </li>
            <li>
              <strong>Without replacement:</strong> once an item is taken, it is not put back.
              Draws become dependent, so
              <span className="ml-1">
                <KaTeX expression="P(A \text{ then } B) = P(A)\,P(B \mid A)" />
              </span>
              .
            </li>
            <li>
              Unless a problem explicitly says “with replacement,” assume selections are made{" "}
              <em>without</em> replacement.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which statement correctly distinguishes “with replacement” from “without replacement”?"
          options={[
            "With replacement: the items are not returned; Without replacement: the items are returned.",
            "With replacement: the items are returned; Without replacement: the items are not returned.",
            "Both mean the same thing in probability.",
            "With replacement always lowers the probability of every event."
          ]}
          correct="With replacement: the items are returned; Without replacement: the items are not returned."
          solution={
            <>
              <p>
                When drawing <em>with replacement</em>, each selected item is placed back into the set,
                keeping the pool unchanged between draws. When drawing <em>without replacement</em>,
                chosen items are removed from the pool, so later draws are affected by earlier ones.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Replacement language in a word problem"
          statements={[
            "A box has 5 red and 3 blue tokens. Two tokens are drawn in succession. Is the second draw independent of the first?",
            "1) The tokens are drawn with replacement.",
            "2) The tokens are drawn without replacement."
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We’re asked whether the second draw is independent of the first. With independence,
                the result of the first selection doesn’t change the distribution for the second.
              </p>
              <p>
                <strong>Statement (1):</strong> With replacement, the first token is returned to the box.
                The composition resets before the second draw, so the draws are independent. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Without replacement, the first token is not returned.
                The composition changes, so the second draw depends on what happened first. This does
                not establish independence. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone is sufficient. Answer: A.</p>
            </>
          }
        />

        <p>
          As you proceed, keep these definitions and the replacement rule in mind—they guide how we set up
          and compute probabilities throughout the chapter.
        </p>
      </article>
    </main>
  );
}