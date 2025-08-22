import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "4.15 Strengthen Trap: Explains a Premise | Critical Reasoning",
  description:
    "Learn to avoid the CR strengthen trap where an option merely explains something already stated in the stimulus. Includes two quick mini‑checks and a full multiple‑choice example with detailed reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.15 Incorrect Strengthen Choice Type 4: Explains Something in the Stimulus
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, statements labeled as premises are treated as facts.
          You’re not asked to prove or bolster a fact—you use it. A frequent trap in
          Strengthen questions is an answer that merely explains why a fact is true or
          how it works. That kind of explanation doesn’t add support to the conclusion.
        </p>

        <MustKnow>
          Premises are taken as true. An answer choice that only clarifies or
          explains a stated fact does not strengthen the argument’s conclusion.
        </MustKnow>

        <p>
          To pick a real strengthener, look for information that makes the conclusion more
          credible—by adding new support, connecting the cause to the effect, ruling out
          alternatives, or confirming the expected result when a key factor changes.
        </p>

        <MustKnow>
          Ask: “Does this option increase confidence in the conclusion itself?” If it only
          explains a premise or background point, it’s not a strengthener.
        </MustKnow>

        <section aria-labelledby="roofing-mini" className="space-y-4">
          <h3 id="roofing-mini" className="text-xl font-semibold text-white">
            Mini‑check 1: Roofing material
          </h3>

          <MCQExample
            number={1}
            prompt="A new roofing material reflects almost all sunlight. Homes with this roof need less air‑conditioning on hot days than homes with other roofs. Therefore, installing this roof helps a household conserve energy. Which option most strengthens the conclusion?"
            options={[
              "Sunlight not reflected by a roof warms the house, so the cooling system must work harder to remove that heat.",
              "On cold days, homes with the new roof lose less heat, so their heating systems run less than they would with other roofs.",
            ]}
            correct="On cold days, homes with the new roof lose less heat, so their heating systems run less than they would with other roofs."
            solution={
              <>
                <p>
                  The first option only explains why reflecting sunlight eases cooling—that fact is already in the stimulus. The second option adds new support: it shows the roof also cuts heating usage, directly boosting overall energy savings.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="soap-mini" className="space-y-4">
          <h3 id="soap-mini" className="text-xl font-semibold text-white">
            Mini‑check 2: Eco‑friendly soap
          </h3>

          <MCQExample
            number={2}
            prompt="A cruise line will switch to Super Soap, which has essentially no negative environmental effects at the concentrations released during ship washing. Management claims this change will reduce the company’s environmental harm. Which option best confirms the plan will work?"
            options={[
              "All ingredients in Super Soap occur naturally in ocean water.",
              "Producing Super Soap causes less environmental damage than manufacturing the current soap.",
            ]}
            correct="Producing Super Soap causes less environmental damage than manufacturing the current soap."
            solution={
              <>
                <p>
                  The first option merely explains why Super Soap is harmless when used—it doesn’t add new support. The second option contributes additional, independent evidence of reduced overall harm by improving the upstream manufacturing footprint.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="how-to-spot" className="space-y-2">
          <h3 id="how-to-spot" className="text-xl font-semibold text-white">
            How to spot the “explains a premise” trap
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>It restates or elaborates on facts already provided.</li>
            <li>It clarifies mechanism or background but leaves the conclusion no better off.</li>
            <li>
              It doesn’t confirm the predicted effect when the key driver changes. For a cause–effect claim like{" "}
              <InlineMath math="\text{lead} \downarrow \;\Rightarrow\; \text{crime} \downarrow" />
              , a good strengthener shows the pattern holds when lead stays high or drops.
            </li>
          </ul>
        </section>

        <MCQExample
          number={16}
          prompt="In the country of Lundinia, crime has fallen steadily for four decades. A plausible explanation is the large drop in lead in the air and water during that time, since lead absorbed from air or water harms cognitive function. Which option best supports this hypothesis?"
          options={[
            "Lead present in drinking water can enter the body through digestion.",
            "Although lead paint is no longer used, some older buildings in Lundinia still have lead paint on their walls.",
            "An ambitious education reform began forty years ago and has continued improving schools ever since.",
            "Lundinia has almost entirely phased out leaded gasoline over the past forty years.",
            "In cities where most water still travels through lead pipes, crime rates have barely changed relative to forty years ago.",
          ]}
          correct="In cities where most water still travels through lead pipes, crime rates have barely changed relative to forty years ago."
          solution={
            <>
              <p>
                Argument structure:
              </p>
              <ul className="list-disc pl-6">
                <li>Background: Crime has declined for 40 years.</li>
                <li>Premise: Absorbed lead impairs cognition.</li>
                <li>Conclusion (hypothesis): The crime drop is at least partly due to reduced environmental lead.</li>
              </ul>
              <p>
                A strong answer should tie the cause to the effect by showing the expected pattern when the key variable
                changes or doesn’t change.
              </p>
              <p>
                A) Explains a detail already implied (how lead gets into the body). No new support.
              </p>
              <p>
                B) Notes some lead remains; the claim concerns a decrease, not total elimination. Irrelevant to the link.
              </p>
              <p>
                C) Introduces an alternative explanation (education), which undermines rather than strengthens.
              </p>
              <p>
                D) Potentially explains why environmental lead fell (leaded fuel phase‑out) but doesn’t add support for the crime link.
              </p>
              <p>
                E) Best. Where lead likely did not drop (cities with lead piping), crime did not fall much either—matching the predicted pattern{" "}
                <InlineMath math="\text{lead not} \downarrow \;\Rightarrow\; \text{crime not} \downarrow" />. This directly supports the causal hypothesis.
              </p>
              <p>
                Correct answer: E.
              </p>
            </>
          }
        />

        <p>
          Takeaway: explanations of facts feel comforting but don’t move the needle on the conclusion. Real strengtheners add new
          evidence for the claim, especially by validating cause–effect behavior when the key driver changes—or doesn’t.
        </p>
      </article>
    </main>
  );
}