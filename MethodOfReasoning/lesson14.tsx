import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "12.5.4 Look‑Alike Methods: Tempting but Wrong | Critical Reasoning",
  description:
    "Learn to spot CR answers that mimic an argument’s language or structure but don’t actually describe what the author does. Includes a concise example and one two‑speaker multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.4 When an Answer Imitates the Argument’s Method—but Isn’t It
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some of the most deceptive wrong answers in Method of Reasoning
          questions echo the vocabulary or overall flavor of the stimulus. They
          feel familiar—yet they don’t precisely capture how the author builds
          the case.
        </p>

        <MustKnow>
          Beware of “sounds right” choices. A correct Method answer must
          accurately state the action the author takes—not a similar-sounding
          action, not a nearby idea, and not a method the author could have used
          but didn’t.
        </MustKnow>

        <section aria-labelledby="mini-scenario">
          <h3 id="mini-scenario" className="sr-only">
            Mini scenario
          </h3>
          <p>
            Consider a short illustration. Introducing wolves to Yellowstone
            restored the ecosystem by reviving long‑standing interspecies
            dynamics. Some ecologists propose reintroducing dingoes—wild dogs
            analogous to wolves—to certain Australian regions. However, those
            entrenched, long‑term species relationships are less typical in
            Australia. So, reintroducing dingoes wouldn’t automatically yield
            Yellowstone‑like outcomes.
          </p>
          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="text-gray-100 font-semibold">How does the author proceed?</p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="inline-block rounded bg-red-500/10 px-2 py-1 text-red-300">
                  Incorrect description
                </span>{" "}
                Demonstrates the effect of a factor by contrasting situations
                with and without that factor.
              </li>
              <li>
                <span className="inline-block rounded bg-emerald-500/10 px-2 py-1 text-emerald-300">
                  Correct description
                </span>{" "}
                Provides evidence that a comparison underlying a theory may have
                overlooked an important difference.
              </li>
            </ul>
          </div>
          <p>
            Why the confusion? Both statements mention a “comparison,” and the
            argument does talk about a key element present in one setting but
            not the other. Still, the author never proves the effect of any
            factor; rather, the author cautions that a proposed analogy
            downplays a crucial dissimilarity.
          </p>
        </section>

        <MustKnow>
          Match the author’s move exactly. If an answer adds a step the author
          never takes, rewrites the timeline (past vs. future), switches the
          claim type (e.g., “proves” vs. “suggests”), or reframes the debate,
          it’s a trap.
        </MustKnow>

        <MCQExample
          number={13}
          prompt={
            <>
              <p>
                University President: If we lend our renowned drama professor,
                Dr. Spencer, to The New Actors Group for the next academic year,
                they’ll send a famous alum for a one‑day master class once per
                month during each term. Those classes will deliver the enrollment
                boost our drama program needs.
              </p>
              <p className="mt-2">
                Admissions Official: Studying with Dr. Spencer is one of the
                strongest draws for prospective students. Given that our terms
                span about nine months, the trade is a year of Dr. Spencer in
                exchange for roughly nine master classes. This could actually
                reduce enrollment.
              </p>
              <p className="mt-2">
                The admissions official responds to the president&apos;s
                argument in which of the following ways?
              </p>
            </>
          }
          options={[
            "She accepts the projected upside of the arrangement but then introduces possible downsides.",
            "She offers new considerations that undermine the soundness of the president’s conclusion.",
            "She rejects the deal on principle, claiming current students have a right to study with Dr. Spencer.",
            "She disputes a weighing that says the plan’s benefits are smaller than its harms.",
            "She denies that master classes led by famous alumni would attract applicants."
          ]}
          correct="She offers new considerations that undermine the soundness of the president’s conclusion."
          solution={
            <>
              <p className="font-semibold text-gray-100">Structure check</p>
              <ul className="list-disc pl-6">
                <li>President: Describes a plan → predicts increased enrollment.</li>
                <li>
                  Admissions: Adds two key points (Dr. Spencer is a major draw;
                  the plan yields only ~9 classes) → counters that enrollment
                  may fall.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-gray-100">Why (B) is correct</p>
              <p>
                The official introduces new, relevant factors that directly call
                the president’s conclusion into question. If losing Dr. Spencer
                deters more students than the master classes attract, the net
                effect could be negative.
              </p>

              <p className="mt-4 font-semibold text-gray-100">Why the others are wrong</p>
              <ul className="list-disc pl-6">
                <li>
                  (A) She does not agree with the scope of the benefit; she
                  posits the plan may decrease enrollment.
                </li>
                <li>
                  (C) She doesn’t make a rights‑based or principle‑based claim
                  about already‑enrolled students.
                </li>
                <li>
                  (D) The president never performs an explicit cost‑benefit
                  balancing; he simply asserts a benefit. So there’s no
                  “weighing” she challenges.
                </li>
                <li>
                  (E) She doesn’t deny that the master classes could attract
                  students; she argues that the loss of Dr. Spencer may outweigh
                  that attraction.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: Don’t reward an answer for echoing the stimulus’s
          wording. Reward it for mirroring the stimulus’s exact reasoning move.
        </p>
      </article>
    </main>
  );
}