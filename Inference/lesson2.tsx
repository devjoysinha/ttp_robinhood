import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.3 Guidelines for Inference Questions | Critical Reasoning",
  description:
    "Practical rules for GMAT-style Inference questions: use only the given facts, avoid plausible-but-unsupported choices, and understand that valid inferences need not be the passage’s main point. Includes two multiple‑choice drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3 Essential Guidelines for Answering Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inference questions demand conclusions that are guaranteed by the text.
          Your job is to read precisely, connect only what’s stated, and resist
          the urge to lean on what seems reasonable in the real world.
        </p>

        <h3 className="text-xl font-semibold text-white">
          Use only what the stimulus gives you
        </h3>
        <p>
          If an answer can be true only by adding outside knowledge, it is not a
          valid inference for the test. Even statements that are true in real
          life are wrong here if they aren’t nailed down by the passage.
        </p>

        <MustKnow>
          An inference must be fully supported by the prompt’s facts—no extra
          assumptions, background knowledge, or “common sense” add‑ons.
        </MustKnow>

        <p>
          Trap answers often sound sensible because they match things we already
          believe. Don’t reward plausibility—reward proof from the given text.
        </p>

        <MustKnow>
          Plausible ≠ proven. If you can’t point to explicit lines in the
          stimulus that force the statement to be true, eliminate it.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">
          An inference doesn’t have to be the author’s main takeaway
        </h3>
        <p>
          People sometimes assume the correct inference must summarize the
          passage or capture its primary conclusion. Not so. Any statement that
          must follow from what’s said—whether big or small—qualifies.
        </p>

        <MustKnow>
          A valid inference is any must‑be‑true consequence of the stated facts,
          even if it isn’t the passage’s main point.
        </MustKnow>

        <section aria-labelledby="example-passage-1" className="space-y-3">
          <h4 id="example-passage-1" className="text-white font-semibold">
            Mini‑passage demo
          </h4>
          <p className="italic text-gray-300">
            Over the last eight years, Riverside built no additional homes, and
            home prices there stayed flat. During the same period, the number of
            children living in Riverside rose sharply. The school system is
            funded entirely by property taxes calculated from home values.
          </p>
          <p>From this, all of the following must be true:</p>
          <ul className="list-disc pl-6">
            <li>
              The combined value of all homes in Riverside is no higher now than
              it was eight years ago.
            </li>
            <li>
              On average, there are more children per home now than eight years
              ago.
            </li>
          </ul>
          <p>
            Notice that a separate statement such as “Riverside will need to
            raise tax rates” could be a reasonable main conclusion, but it is
            not forced by the facts and therefore isn’t a must‑be‑true
            inference.
          </p>
        </section>

        <h3 className="text-xl font-semibold text-white">Quick checks</h3>

        <MCQExample
          number={201}
          prompt="A survey asked 1,000 professional poker players whether they received formal training in statistics. Of the 900 respondents, 400 said they had no formal training. Which statement must be true?"
          options={[
            "Most professional poker players don’t have time to answer surveys.",
            "Formal statistics training benefits professional poker players.",
            "Most professional poker players choose to teach themselves statistics informally.",
            "It is possible to become a professional poker player without any formal training in statistics.",
            "Most professional poker players never attend college at any point in their careers.",
          ]}
          correct="It is possible to become a professional poker player without any formal training in statistics."
          solution={
            <>
              <p>
                The data tell us that 900 of 1,000 players responded, and 400
                of those respondents reported no formal statistics training.
                Those 400 are professional poker players by definition of the
                sample. Therefore, it must be possible to become a professional
                poker player without formal statistics training.
              </p>
              <p>
                The other choices either go beyond the text (benefits of
                training, college attendance, time for surveys) or speculate
                about behavior (self‑study). None are guaranteed by the
                provided numbers.
              </p>
              <p className="text-sm text-gray-400">
                Note: Of the 1,000 surveyed, 900 answered (
                <code>900/1000 = 90%</code>). This supports that many did
                respond; it does not prove who did or did not have training
                beyond the 400 explicitly mentioned.
              </p>
            </>
          }
        />

        <MCQExample
          number={202}
          prompt="In nuclear fusion, two atomic nuclei combine into a nucleus of a different element and release energy that could be converted to electricity. Typically, temperatures near 50 million °C are required, and reaching such temperatures is extremely challenging. Researchers are investigating 'cold fusion'—fusion at room temperature—but so far no one has demonstrated that cold fusion actually occurs. If all of the above is true, which of the following must also be true?"
          options={[
            "Fusion won’t solve the world’s energy problems anytime soon.",
            "Whenever temperatures hit 50 million °C, fusion occurs.",
            "Any time two nuclei fuse into a different element, the temperature must have been around 50 million °C.",
            "Cold fusion cannot occur at temperatures above room temperature.",
            "If an experiment produced electrical energy from a nuclear reaction, that reaction was not driven by cold fusion.",
          ]}
          correct="If an experiment produced electrical energy from a nuclear reaction, that reaction was not driven by cold fusion."
          solution={
            <>
              <p>
                We’re told that cold fusion has not been demonstrated to occur.
                Therefore, any observed nuclear reaction used to generate
                electricity could not have been cold fusion. Choice E is
                forced by the facts.
              </p>
              <p>
                The other options overstate or confuse the information: A is a
                forecast, not a certainty; B treats a typically needed
                temperature as sufficient; C ignores the possibility (even if
                unproven) of other fusion conditions; D goes beyond the text by
                restricting cold fusion to exactly room temperature.
              </p>
            </>
          }
        />

        <h3 className="text-xl font-semibold text-white">
          Don’t try to predict the exact answer
        </h3>
        <p>
          A short passage often supports many different must‑be‑true
          statements. Rather than guessing what the correct answer should look
          like, fully digest the facts and how they interact, then test each
          option strictly against the text.
        </p>

        <MustKnow>
          There can be many valid inferences. Your edge comes from a rigorous
          read of the stimulus, not from pre‑phrasing the answer.
        </MustKnow>

        <section aria-labelledby="example-passage-2" className="space-y-3">
          <h4 id="example-passage-2" className="text-white font-semibold">
            Mini‑passage demo
          </h4>
          <p className="italic text-gray-300">
            The carrying capacity for deer in a region is the maximum number
            that can live there long‑term. If the deer population exceeds this
            level, they consume vegetation faster than it regrows. Two years
            ago, all wolves in Pine County—previously keeping the deer below
            carrying capacity—were driven out and have not returned. Now, the
            deer population in Pine County exceeds its carrying capacity.
          </p>
          <p>Guaranteed inferences include (among others):</p>
          <ul className="list-disc pl-6">
            <li>
              There are more deer in Pine County now than two years ago.
            </li>
            <li>
              Deer are currently eating plants faster than those plants can
              regrow.
            </li>
            <li>
              The present number of deer in Pine County is higher than what the
              area can sustain long‑term.
            </li>
            <li>
              There are fewer wolves in Pine County now than two years ago.
            </li>
            <li>
              The presence of wolves can keep a local deer population lower than
              it would be without them.
            </li>
          </ul>
        </section>

        <h3 className="text-xl font-semibold text-white">Big picture</h3>
        <ul className="list-disc pl-6">
          <li>Prove every word of an option directly from the passage.</li>
          <li>
            Reject answers that merely sound reasonable or that require outside
            facts.
          </li>
          <li>
            Remember: a valid inference doesn’t have to be the author’s main
            point.
          </li>
        </ul>

        <ExampleCard
          number={203}
          title="Inference sanity check (Data Sufficiency‑style prompts)"
          statements={[
            "Prompt: A short passage establishes several constraints among quantities A, B, and C.",
            "1) The passage alone implies A > B.",
            "2) The passage alone implies B > C.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                This is a meta‑check: each statement taken alone could be true
                in some passages but not others. Without the actual text, neither
                statement is guaranteed to follow. Together they still don’t
                force A > C unless the passage itself links these quantities
                transitively. Without that, the “median” conclusion is not
                determined. Hence, E: not enough information.
              </p>
              <p className="text-sm text-gray-400">
                Tip: Inference certainty always comes from the specific words in
                the stimulus, not from common algebraic instincts.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}