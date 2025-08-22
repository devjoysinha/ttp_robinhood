import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.3.2 Co‑Occurrence Fallacy | Critical Reasoning",
  description:
    "Learn why events that happen at the same time aren’t necessarily causally related. Includes two GMAT‑style multiple‑choice examples (Weaken and Strengthen) with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3.2 Co‑Occurrence Error: Mistaking “Happened Together” for “Caused”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common trap in causal reasoning is to notice two events that happen at the
          same time and then assume one must be the reason the other occurred. Seeing{" "}
          <InlineMath math="X" /> and <InlineMath math="Y" /> together tells us only
          that they co‑occurred—not that <InlineMath math="X" /> caused{" "}
          <InlineMath math="Y" /> or vice versa.
        </p>

        <MustKnow>
          Simultaneity is not causality. The fact that two events occur together does
          not, by itself, establish a cause‑and‑effect link in either direction.
          Always consider other possibilities: reversed causation or a third factor
          driving both.
        </MustKnow>

        <p>
          To see this, imagine two events, <InlineMath math="X" /> and{" "}
          <InlineMath math="Y" />, observed at the same time. Several different
          relationships are possible:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <InlineMath math="X" /> causes <InlineMath math="Y" />
          </li>
          <li>
            <InlineMath math="Y" /> causes <InlineMath math="X" />
          </li>
          <li>
            A third variable <InlineMath math="Z" /> causes both
          </li>
          <li>No causal connection at all; the timing is a coincidence</li>
        </ul>

        <p>
          The co‑occurrence error happens when an argument treats “X and Y happened
          together” as sufficient proof that “X causes Y.” The following questions
          show how to weaken or strengthen such arguments on test day.
        </p>

        <MCQExample
          number={5}
          difficulty="hard"
          prompt={
            <>
              In 1994, researchers reported that 98% of murders in Country X took place
              in victims’ own homes. The government then launched a gun
              buy‑back program. From 1994 to 2000, the share of households owning guns
              fell by 30%, and murders occurring in victims’ homes fell by 8%.
              Lawmakers applauded the program, asserting that the homicide decline was
              caused by reduced household gun ownership.
              <br />
              <br />
              Which of the following, if true, most calls the lawmakers’ conclusion
              into question?
            </>
          }
          options={[
            "From 1978 to 1994, both household gun ownership and the overall homicide rate in Country X were essentially unchanged.",
            "Between 1994 and 2000, incidents of domestic violence overall did not decline in Country X.",
            "Between 1994 and 2000, serious crime of all types declined substantially throughout Country X.",
            "The suicide rate in Country X rose by 2% between 1994 and 2000.",
            "From 1994 to 2000, annual gun sales to households in Country X did not decrease.",
          ]}
          correct="Between 1994 and 2000, serious crime of all types declined substantially throughout Country X."
          solution={
            <>
              <p>
                The argument infers cause from timing: fewer households owned guns and
                homicides at home decreased, therefore the buy‑back caused the decline.
                A strong way to weaken that link is to show a broader trend that could
                explain the drop in home homicides without relying on gun ownership.
              </p>
              <p>
                Correct: If all serious crime fell nationwide over the same years, a
                general shift (e.g., economic or cultural changes, policy mix, improved
                policing) could be responsible for the decline, not specifically the
                buy‑back. That undermines the causal claim.
              </p>
              <p>
                Why the others don’t weaken:
                <br />
                A) Different time window; if anything, “no decrease with no buy‑back”
                loosely aligns with the lawmakers’ story.
                <br />
                B) Domestic violence and homicide are not identical; premises about
                homicides are taken as true, and this doesn’t show an alternative cause.
                <br />
                D) Suicide trends are separate from homicide and don’t address the causal
                link at issue.
                <br />
                E) Sales volume can stay flat even if total household ownership falls
                (e.g., government buy‑backs outpace purchases); it doesn’t undercut the
                premise that ownership dropped.
              </p>
            </>
          }
        />

        <MCQExample
          number={6}
          difficulty="medium"
          prompt={
            <>
              A study reports that residents of brightly lit cities at night express
              more dissatisfaction with their sleep (quality and quantity) than residents
              of darker cities. Based on this, researchers concluded that reducing the
              number of streetlights in the brighter cities would improve residents’
              sleep.
              <br />
              <br />
              Which of the following, if true, most strengthens the researchers’
              conclusion?
            </>
          }
          options={[
            "Reducing the number of streetlights would also lower municipal electricity costs.",
            "Residents in brighter cities could install blackout shades to block incoming light.",
            "People who watch television right before bed report poorer sleep than people who read before bed.",
            "Cities with more nighttime light did not experience more noisy nighttime disturbances.",
            "Residents in brighter cities say sleep quality matters more to them than sleep quantity.",
          ]}
          correct="Cities with more nighttime light did not experience more noisy nighttime disturbances."
          solution={
            <>
              <p>
                To support the causal claim, we want to rule out alternative explanations
                for poor sleep in brighter cities. If brighter cities don’t have more
                nighttime noise, we’ve eliminated a major competing cause, making it
                more plausible that the light itself is the driver. That bolsters the
                idea that fewer streetlights could help.
              </p>
              <p>
                Why the others don’t help:
                <br />
                Cost savings (A) are irrelevant to whether sleep improves.
                <br />
                An alternative remedy (B) doesn’t show that the proposed remedy works.
                <br />
                TV vs. reading (C) introduces a different factor.
                <br />
                Preferences (E) don’t establish causality.
              </p>
            </>
          }
        />

        <MustKnow>
          Co‑occurrence alone never proves cause. To weaken a causal claim, show an
          alternate cause, a broader trend affecting both variables, or that the
          relationship can be reversed. To strengthen it, rule out other plausible
          causes or show the effect tracks the proposed cause when other factors don’t.
        </MustKnow>

        <p>
          Next, we’ll zoom in on the classic pitfall of confusing correlation with
          causation and how test makers exploit it—and how you can avoid the trap.
        </p>
      </article>
    </main>
  );
}