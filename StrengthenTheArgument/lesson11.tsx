import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.11 Common Wrong Choices in Strengthen Questions | Critical Reasoning",
  description:
    "Learn the traps that show up in Strengthen questions, why they’re tempting, and how to spot them. Includes quick drills and worked examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11 Common Incorrect Choices in Strengthen Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test writers recycle the same trap patterns in Strengthen questions. Once you
          know what those choices look like, you’ll avoid wasting time on answers that
          feel supportive but don’t actually make the conclusion more likely.
        </p>

        <p>
          In this section, we’ll preview the major trap families and start with the most
          frequent one: options that leave the argument’s strength basically unchanged.
        </p>

        <MustKnow>
          To strengthen an argument, a choice must increase the probability that the
          conclusion is true. Facts that are merely interesting, confirm a premise,
          or shift attention to a different claim don’t help. A useful mental check is:
          “Does this create or reinforce a link from evidence to conclusion
          (informally, A ⇒ B)?” If not, it’s probably a trap.
        </MustKnow>

        <section aria-labelledby="trap-roadmap" className="mt-6">
          <h3 id="trap-roadmap" className="text-xl font-semibold text-white">
            Roadmap of common trap answers
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Irrelevant detail: information that doesn’t move the conclusion either way.</li>
            <li>Premise “confirmation”: restates or validates a given fact without helping the leap to the conclusion.</li>
            <li>Supports a different claim: strengthens something that isn’t the author’s conclusion.</li>
            <li>Explains a piece of the stimulus: clarifies background but doesn’t bolster the inference.</li>
            <li>Loose or remote connection: related topic, weak or off‑scope link.</li>
            <li>Pseudo‑strengthener: sounds persuasive but fails to address the logical gap.</li>
            <li>Actual weakener: makes the conclusion less likely (sometimes cleverly disguised).</li>
          </ul>
        </section>

        <MCQExample
          number={71}
          prompt="City planners argue that building more protected bike lanes will reduce citywide traffic fatalities because neighborhoods that added such lanes last year saw 15% fewer car crashes. Which option most strengthens the planners’ argument?"
          options={[
            "The transportation budget for bike projects increased last year.",
            "On streets that received protected bike lanes, average car speeds fell by 10%.",
            "Residents say protected bike lanes make the city look modern.",
            "Some neighborhoods without new bike lanes also reported fewer crashes.",
            "Next year the city will run a general road‑safety awareness campaign.",
          ]}
          correct="On streets that received protected bike lanes, average car speeds fell by 10%."
          solution={
            <>
              <p>
                We want a statement that makes the conclusion—fewer fatalities citywide
                if lanes are added—more plausible by reinforcing the causal link.
              </p>
              <p>
                Reduced speeds where lanes were installed provide a concrete mechanism
                connecting bike lanes to safer roads, so fatalities plausibly drop.
                That directly strengthens the causal story. The budget, opinions, and
                future campaigns are off‑scope or neutral. Noting that some no‑lane
                areas improved could even weaken the claim.
              </p>
            </>
          }
        />

        <MCQExample
          number={72}
          prompt="A nutrition study concludes that adding high‑fiber foods to one’s diet leads to better heart health. Which option most likely does NOT affect the strength of this conclusion?"
          options={[
            "Participants who increased fiber also reduced their saturated‑fat intake.",
            "The study tracked clinically measured heart‑health markers, not self‑reports.",
            "The study’s sample included adults across a wide range of ages.",
            "Researchers observed improved cholesterol levels after fiber intake rose.",
            "The study was funded by an independent public health agency.",
          ]}
          correct="The study was funded by an independent public health agency."
          solution={
            <>
              <p>
                We’re looking for a detail that doesn’t meaningfully change how strongly
                the evidence supports the conclusion.
              </p>
              <p>
                Neutral or administrative facts—like funding source—typically don’t bear
                on the logical link from fiber to heart health. By contrast, co‑changes
                in diet (reduced saturated fat) threaten the causal link, direct
                biomarker improvements support it, and appropriate measurement and
                sampling can impact credibility. Thus, the funding detail is the least
                impactful.
              </p>
            </>
          }
        />

        <ExampleCard
          number={73}
          title="Mini‑Drill: Which statement actually strengthens?"
          statements={[
            "Prompt: A retailer claims its new ad campaign caused a 12% rise in quarterly sales.",
            "1) Regions where the ads ran saw a larger sales increase than similar regions where the ads did not run.",
            "2) During the campaign, a key competitor experienced supply shortages and frequent stockouts.",
            "Question type: Using data‑sufficiency letters, which statement provides genuine strengthening on its own?",
            "A) Statement (1) alone",
            "B) Statement (2) alone",
            "C) Both together are needed",
            "D) Each alone is sufficient",
            "E) Neither is sufficient",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                Statement (1) gives a comparison against a control group, making it more
                likely the ads—not background trends—explain the sales bump. That’s a
                direct strengthen.
              </p>
              <p>
                Statement (2) introduces an alternate cause for the retailer’s increased
                sales (competitor stockouts), which would not strengthen and may weaken.
                So (1) alone suffices; (2) alone does not.
              </p>
            </>
          }
        />

        <p>
          Big picture: a correct Strengthen answer narrows the logical gap between the
          evidence and the conclusion. If a choice doesn’t create or fortify that link,
          it’s probably one of the classic traps above.
        </p>
      </article>
    </main>
  );
}