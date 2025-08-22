import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.3 Spotting Weaken-the-Argument Questions | Critical Reasoning",
  description:
    "Learn how to quickly recognize Weaken question stems and practice with two fully worked multiple‑choice examples. Understand how to target the assumption and undercut the conclusion’s support.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.3 How to Spot a Weaken‑the‑Argument Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Identifying Weaken questions is usually straightforward because the test
          writers rely on familiar phrasing. Your job on these is to expose a crack
          in the argument’s support—typically by challenging the assumption that links
          the evidence to the conclusion. You do not have to disprove the conclusion;
          you only need to reduce its support.
        </p>

        <section aria-labelledby="stems-heading">
          <h3 id="stems-heading" className="sr-only">
            Common Weaken stems
          </h3>
          <p className="font-semibold text-gray-200">
            Typical stems that signal a Weaken task:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Which of the following, if true, most strongly weakens the argument?
            </li>
            <li>
              Which of the following, if true, casts the greatest doubt on the conclusion?
            </li>
            <li>
              Which option, if true, most calls the claim above into question?
            </li>
            <li>
              Which finding, if true, would count against the speculation above?
            </li>
            <li>
              Which of the following, if true, most undermines the support offered for the conclusion?
            </li>
            <li>
              Which of the following, if true, reveals a vulnerability in the reasoning?
            </li>
            <li>
              Which of the following, if true, most reduces the force of the evidence?
            </li>
          </ul>
        </section>

        <MustKnow>
          To weaken an argument, attack the connection between the premise(s) and the
          conclusion. Look for an answer that introduces a new fact or perspective that
          makes the conclusion less likely to follow, often by challenging a hidden
          assumption. You are not required to prove the conclusion false—only to diminish
          its support.
        </MustKnow>

        <p>Try the examples below and focus on the assumption each conclusion relies on.</p>

        <MCQExample
          number={3}
          prompt={
            <>
              <p>
                Although campfires are prohibited in Falcon Ridge National Park, they still
                frequently spark wildfires. Starting tomorrow, the park will deploy aerial
                drones to detect campfires and send locations to rangers, who will travel to
                the sites and extinguish the fires. Therefore, from now on, wildfires caused
                by campfires should be rare.
              </p>
              <p className="mt-3">
                Which of the following, if true, most seriously weakens the argument above?
              </p>
            </>
          }
          options={[
            "Park employees have received extensive training in both drone operations and safe fire suppression.",
            "A large share of wildfires in the park are not started by campfires.",
            "Historical records show that campfire‑caused wildfires have destroyed thousands of acres of parkland.",
            "Because the park is vast, rangers typically need about 30 minutes to reach most locations, during which time embers can readily ignite wildfires.",
            "The drones use highly sensitive thermal sensors similar to those used by militaries to detect missile launches.",
          ]}
          correct="Because the park is vast, rangers typically need about 30 minutes to reach most locations, during which time embers can readily ignite wildfires."
          solution={
            <>
              <p className="mb-2 font-semibold text-gray-200">Why D?</p>
              <p>
                The plan assumes that detection plus dispatch will prevent campfires from
                becoming wildfires. If rangers routinely take around 30 minutes to arrive,
                sparks may ignite a wildfire before suppression begins. That directly
                undercuts the plan’s effectiveness.
              </p>

              <p className="mt-4 mb-2 font-semibold text-gray-200">Why not the others?</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A: Training strengthens the plan, not weakens it.
                </li>
                <li>
                  B: Fires from other causes don’t bear on this plan’s promise about
                  campfire‑caused wildfires.
                </li>
                <li>
                  C: Past damage is irrelevant to whether the new plan will work going forward.
                </li>
                <li>
                  E: Better sensors make detection more reliable, which strengthens the plan.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={4}
          prompt={
            <>
              <p>
                It’s much easier to farm a field after removing rocks near the surface.
                Yet fields that were cultivated for centuries on the island of Rapa Nui
                contain many fragments of volcanic stone. Thus, the inhabitants of Rapa Nui
                must not have developed strong agricultural know‑how.
              </p>
              <p className="mt-3">
                Which of the following, if true, most seriously undermines the conclusion?
              </p>
            </>
          }
          options={[
            "Because the island had few trees suitable for boat building, the people of Rapa Nui relied heavily on farming.",
            "When Europeans first arrived on Rapa Nui, they encountered a thriving population.",
            "Many of the rock fragments found in the fields were small enough to be removed by a single person.",
            "The people of Rapa Nui carved large statues from volcanic rock and arranged them throughout the island.",
            "Volcanic rock releases small amounts of phosphorus, a key plant nutrient that is typically scarce in Rapa Nui’s soils.",
          ]}
          correct="Volcanic rock releases small amounts of phosphorus, a key plant nutrient that is typically scarce in Rapa Nui’s soils."
          solution={
            <>
              <p className="mb-2 font-semibold text-gray-200">Why E?</p>
              <p>
                The argument assumes rocks in fields signal poor farming expertise. If
                volcanic stones provide phosphorus—a nutrient lacking in local soil—then
                leaving rocks in the fields could be a deliberate, knowledgeable practice,
                weakening the inference that the farmers lacked expertise.
              </p>

              <p className="mt-4 mb-2 font-semibold text-gray-200">Why not the others?</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A and B: These facts don’t address why the rocks are present, so they
                  don’t break the link from “rocks in fields” to “lack of expertise.”
                </li>
                <li>
                  C: If stones were easy to remove yet remained, that actually supports the
                  idea of poor practices, not the opposite.
                </li>
                <li>
                  D: The statues don’t explain or justify leaving rocks in farmed soil.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Big picture: to weaken an argument, introduce information that makes the conclusion
          less likely to follow from the premises—most often by showing that a key assumption
          could be false or incomplete. You’re decreasing confidence in the link, not proving
          the conclusion wrong.
        </MustKnow>
      </article>
    </main>
  );
}