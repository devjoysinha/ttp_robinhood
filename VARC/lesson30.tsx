import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.31 Inference “EXCEPT” or “LEAST” Questions | Reading Comprehension",
  description:
    "How to handle RC inference prompts that include EXCEPT or LEAST. Learn the logic, see common stems, and work through a multiple‑choice example with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.31 Inference “EXCEPT” or “LEAST” Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inference prompts sometimes flip the usual task by adding words such as
          “EXCEPT” or “LEAST.” In these problems, you eliminate what the passage
          does support and select the one choice that is not supported (EXCEPT) or
          is the weakest support (LEAST).
        </p>

        <section aria-labelledby="ex-stems" className="space-y-2">
          <h3 id="ex-stems" className="text-lg font-semibold text-white">
            Common stems you might see
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              It can be inferred from the passage that all of the following are true,
              EXCEPT:
            </li>
            <li>
              The author implies each of the following, EXCEPT:
            </li>
            <li>
              The passage LEAST supports the inference that:
            </li>
          </ul>
        </section>

        <MustKnow>
          For EXCEPT and LEAST inference items, four answer choices line up with
          the passage. Those supported choices are wrong. The correct choice is the
          one that is not supported (for EXCEPT) or has the weakest support (for LEAST).
        </MustKnow>

        <p>
          Because this format runs counter to the way most inference questions work,
          keep the word in the stem front and center. Don’t slip into your normal
          habit of picking a supported statement.
        </p>

        <section aria-labelledby="passage" className="rounded-lg border border-gray-700 bg-gray-900/40 p-5">
          <h3 id="passage" className="mb-2 text-base font-semibold text-white">
            Passage
          </h3>
          <div className="space-y-3 leading-relaxed">
            <p>
              Indigenous communities in the regions that are now the United States
              and Canada practiced agriculture with both skill and restraint. They
              often harvested resources from living plants in ways that preserved
              those plants for future use. For example, when collecting wood or bark,
              they removed only what a tree could spare, keeping the tree healthy—an
              approach they described as “asking” the tree for what they needed.
            </p>
            <p>
              These communities also used intercropping, intentionally planting
              different crops together so each helped the others. A well‑known
              layout, the “Three Sisters,” combined corn, beans, and squash.
              Corn stalks gave beans a structure to climb; beans enriched the soil
              with nitrogen and helped steady corn against strong winds; and the
              broad squash leaves shaded the ground, limiting weed growth and
              soil water loss.
            </p>
            <p>
              In another example of resourcefulness, some groups used diluted human
              urine—rich in minerals such as nitrogen and phosphorus—to fertilize
              crops. This reduced the need for waste dumps that could damage soil,
              while also helping plants grow larger and hardier.
            </p>
          </div>
        </section>

        <MCQExample
          number={26}
          prompt="According to the passage, using the Three Sisters arrangement leads to all of the following outcomes EXCEPT:"
          options={[
            "greater overall crop growth",
            "less damage to farmland",
            "lower chance that high winds will harm certain plants",
            "improved plant health across the intercropped field",
            "squash plants’ developing broad leaves",
          ]}
          correct="squash plants’ developing broad leaves"
          solution={
            <>
              <p>
                The Three Sisters is presented as a specific instance of intercropping.
                So, anything the passage says intercropping accomplishes is fair game
                for what the Three Sisters accomplishes.
              </p>
              <p>
                Choice A (greater growth) and D (better overall health) follow from
                the claim that the characteristics of each plant enhance the growth
                and health of all intercropped plants. Choice B (less land damage)
                is supported by the idea that intercropping reduces farming‑related
                harm to the soil. Choice C (reduced wind damage) is supported by
                the bean plants stabilizing corn during heavy winds.
              </p>
              <p>
                Choice E says the Three Sisters causes squash to have broad leaves.
                The passage treats broad leaves as a built‑in trait of squash that
                makes the method work (they provide shade), not as a result produced
                by the method. Therefore, E is the statement that is not supported,
                and it is the correct answer to this EXCEPT question.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-2">
          <h3 id="big-picture" className="text-lg font-semibold text-white">
            Big picture
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Mark the “EXCEPT” or “LEAST” cue in the stem.</li>
            <li>Confirm four choices that the passage supports.</li>
            <li>Pick the lone choice that lacks support (or is least supported).</li>
          </ul>
        </section>
      </article>
    </main>
  );
}