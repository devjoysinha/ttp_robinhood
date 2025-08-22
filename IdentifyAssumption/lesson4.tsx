import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.5 Authors Assume Their Arguments Are Correct | Critical Reasoning",
  description:
    "In GMAT Critical Reasoning, authors presume their conclusions are valid and that no hidden factors derail them. Learn how to spot these assumptions and practice with four MCQ examples and full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.5 In Critical Reasoning, authors assume their arguments are sound
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning prompts, the author writes as if the argument is
          already airtight. That means they’re implicitly betting that no
          overlooked factor will pop up and undercut the reasoning.
        </p>

        <MustKnow>
          Authors treat their claims as correct unless something unforeseen gets
          in the way. Your task is to find what must be true to keep the
          argument from breaking.
        </MustKnow>

        <p>
          A useful mental model is to think about “spoiler variables” —
          unaccounted-for circumstances that would make the conclusion fall
          apart. Correct answers on Assumption questions usually deny the
          presence of a plausible spoiler.
        </p>

        <MustKnow>
          Look for answers that effectively say “the spoiler does not happen.”
          In symbols:{" "}
          <InlineMath math={"\\text{Assumption} :\\; \\lnot S"} /> where{" "}
          <InlineMath math={"S"} /> represents a potential spoiler.
        </MustKnow>

        <p>Two hallmarks of a spoiler variable:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>It wasn’t considered by the author.</li>
          <li>If true, it would undermine the conclusion.</li>
        </ul>

        <p>
          When a plan is proposed (“we will do X, therefore Y will happen”),
          authors also assume there’s nothing that will derail that plan in
          execution.
        </p>

        <MustKnow>
          For plan or prediction arguments, assumptions often assert that no
          implementation obstacles or offsetting effects will prevent the
          predicted result.
        </MustKnow>

        <section className="space-y-8 pt-2">
          <MCQExample
            number={7}
            prompt={
              <>
                Most people in Spring Hills currently lack health insurance. Blue
                Health has just announced a steeply discounted policy for any
                Spring Hills resident without a preexisting condition. Therefore,
                by next month, the majority of Spring Hills residents will carry
                health insurance.
                <br />
                Which assumption is required?
              </>
            }
            options={[
              "No other insurer will introduce a similar discount in Spring Hills.",
              "It will take several months for most residents to hear about Blue Health’s announcement.",
              "Having health insurance is essential to a successful wealth plan.",
              "Blue Health can discount policies because healthcare in Spring Hills is unusually inexpensive.",
              "Most Spring Hills residents do not have a condition that Blue Health classifies as preexisting.",
            ]}
            correct="Most Spring Hills residents do not have a condition that Blue Health classifies as preexisting."
            solution={
              <>
                <p>
                  The conclusion predicts widespread coverage within a month.
                  That prediction only follows if most residents are actually
                  eligible for the new plan. If, instead, most residents had a
                  preexisting condition, the offer wouldn’t apply to them, and
                  the prediction would collapse. Thus, we must assume that most
                  residents do not have disqualifying conditions.
                </p>
                <p>
                  The other options either explain background facts, are
                  irrelevant (even if other insurers also discount, the
                  conclusion could still hold), or actively weaken the timeline
                  (taking months to learn about the offer).
                </p>
              </>
            }
          />

          <MCQExample
            number={8}
            prompt={
              <>
                People who practice yoga tend to be healthier than those who do
                not. Our company will begin offering on-site yoga classes.
                Therefore, our employees will become healthier.
                <br />
                Which of the following is an assumption the prediction depends
                on?
              </>
            }
            options={[
              "Employees will enroll in and attend the yoga classes.",
              "Employees do not have enough time to take yoga classes.",
              "Yoga improves health by strengthening the heart, muscles, and immune system.",
              "Healthier employees are more productive at work.",
              "Yoga is the only path by which a person can improve health.",
            ]}
            correct="Employees will enroll in and attend the yoga classes."
            solution={
              <>
                <p>
                  This is a plan argument: “Offer classes, so employees become
                  healthier.” That plan only works if people actually show up.
                  If no one participates, the conclusion is not supported.
                  Therefore, attendance is a necessary assumption.
                </p>
                <p>
                  The remaining choices either introduce a problem (no time),
                  explain mechanisms that aren’t needed, add a different outcome
                  (productivity), or make an extreme claim (yoga as the only
                  way).
                </p>
              </>
            }
          />

          <MCQExample
            number={9}
            prompt={
              <>
                One hundred fifty years ago, the confluence of the Mininguela
                and Dallora Rivers supported many native species. Later, an
                industrial build‑up made the area unsuitable for those species.
                Now that the factories are being demolished, native plants and
                animals will return to the region.
                <br />
                Which assumption is required for the prediction to be reasonable?
              </>
            }
            options={[
              "Demolishing the factories is more environmentally sound than letting them deteriorate naturally.",
              "The factories never discharged toxic waste into either river.",
              "Native species cannot return without human reintroduction.",
              "Years of manufacturing have not left the soil inhospitable to native species.",
              "At present, no native species live near the confluence.",
            ]}
            correct="Years of manufacturing have not left the soil inhospitable to native species."
            solution={
              <>
                <p>
                  The forecast is that species will repopulate once factories
                  are removed. That requires the underlying habitat to be
                  viable. If the soil remains toxic or otherwise unsuitable, the
                  teardown won’t bring species back. Thus, we must assume the
                  soil hasn’t been rendered inhospitable.
                </p>
                <p>
                  The other options are unnecessary (demolition vs. decay,
                  current presence/absence) or weaken/overreach (species can
                  only return via humans, or focusing on one specific pollutant
                  without tying it to repopulation feasibility).
                </p>
              </>
            }
          />

          <MCQExample
            number={10}
            prompt={
              <>
                On the island of Lakahoa, large stone statues are found across
                many sites and are believed to mark sacred places. A few statues
                remain at the quarry where all statues were carved. Therefore,
                those quarry statues must have been judged not good enough to
                mark sacred areas.
                <br />
                The argument relies on which assumption?
              </>
            }
            options={[
              "Ancient Lakahoans could not transport the remaining quarry statues.",
              "Among statues used at sacred sites, all were of identical quality.",
              "The number of statues in ancient times matched the number still present today.",
              "The quarry and its surroundings were not considered sacred.",
              "All ancient Lakahoans could reliably assess statue quality.",
            ]}
            correct="The quarry and its surroundings were not considered sacred."
            solution={
              <>
                <p>
                  If the quarry area itself was a sacred place, leaving some
                  statues there would be perfectly consistent with their being
                  of adequate quality, and the conclusion would fail. The
                  reasoning therefore assumes the quarry was not sacred.
                </p>
                <p>
                  The other answers either offer alternative explanations that
                  weaken (couldn’t transport), make irrelevant claims (counts or
                  universal skill), or make unnecessary generalizations about
                  quality uniformity.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Summary: In Assumption questions, the correct choice typically blocks
          a realistic spoiler variable so the middle of the argument doesn’t
          collapse. When in doubt, negate a tempting answer and ask whether the
          argument can still stand.
        </MustKnow>
      </article>
    </main>
  );
}