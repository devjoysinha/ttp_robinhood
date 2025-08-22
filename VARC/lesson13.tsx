import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.14 Detail Trap: Half‑Right | Reading Comprehension",
  description:
    "Learn to spot the Half‑Right trap in GMAT Reading Comprehension detail questions. See a fully worked example with answer analysis and get practical tips to avoid this common mistake.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.14 Detail Trap 5: Half‑Right
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Detail questions often include an answer that starts out sounding correct and then quietly slips in something the passage never said. These Half‑Right choices are appealing because the first clause matches the text—but the rest goes beyond it or misstates it.
        </p>

        <MustKnow>
          A Half‑Right answer is still wrong. It quotes or paraphrases something accurate from the passage and then adds a claim the passage does not support.
        </MustKnow>

        <p>
          Here’s a quick illustration. Imagine a passage that says:
        </p>

        <blockquote className="rounded-md border border-gray-700 bg-gray-900/40 p-4 text-gray-200">
          The First Industrial Revolution in eighteenth‑century Britain emphasized textile innovations along with steam and water power. The Second Industrial Revolution, beginning in the mid‑nineteenth century, centered on steel, the automobile, and expanded use of electricity. As the second wave unfolded, standards of living rose steadily in some regions.
        </blockquote>

        <p>
          A detail question might ask: “Which statement does the author make about the Second Industrial Revolution?”
        </p>

        <ul className="ml-6 list-disc space-y-2">
          <li>
            Half‑Right trap: It produced sustained gains in living standards due to advances in textiles, steam power, and water power.
          </li>
          <li>
            Correct: It is associated with developments in steel, the automobile, and electricity.
          </li>
        </ul>

        <p>
          Why the first option fails: the “living standards increased” part does match the passage about the second revolution, but attributing that rise to textiles/steam/water belongs to the first revolution, not the second. One part true + one part false = incorrect.
        </p>

        <MustKnow>
          To avoid Half‑Right traps, read every choice to the period. Then verify each claim against the text—line by line and clause by clause.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <div className="space-y-3">
            <p className="text-gray-200">Passage</p>
            <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
              <p className="mb-3">
                At present, a key limiter of computer performance is how quickly information can be shuttled from its current location to where it must go next to be processed. One contributor to that bottleneck is the speed at which electrons travel within silicon chips, essential components in computers. Since longer distances take electrons more time to traverse, shrinking chip features can reduce those distances and help computers run faster. Engineers have done exactly that for decades, achieving dramatic boosts in computing power. However, further miniaturization is getting harder; new approaches and technologies are needed to keep shrinking components.
              </p>
              <p>
                Tools that deliver extremely high‑resolution views of material surfaces can aid continued miniaturization because engineers must understand candidate chip materials at the atomic scale. One promising method, electron ptychography, was used by a Cornell‑led team to magnify a crystal surface on the order of one hundred million times. Unlike traditional light microscopes that rely on lenses, electron ptychography uses a stream of electrons to produce an ultra‑high‑magnification image that closely reflects the scanned surface.
              </p>
            </div>
          </div>

          <MCQExample
            number={10}
            prompt="According to the passage, within computer engineering, the speed of electrons is best described as"
            options={[
              "a constraint on the process of making silicon‑chip components smaller",
              "important because it is one factor that limits overall computing performance",
              "dependent on how engineers design silicon chips",
              "limited by the rate at which information moves inside computers",
              "something that can be increased directly to make computers faster",
            ]}
            correct="important because it is one factor that limits overall computing performance"
            solution={
              <>
                <p>
                  The question asks what the passage actually says about electron speed. In paragraph one, the author states that computer speed is limited by how fast information can be moved. The next sentence says that electron speed within silicon chips is one of the factors constraining that movement. Put together, electron speed contributes to the limit on computing performance. So the correct choice is “important because it is one factor that limits overall computing performance.”
                </p>
                <p>
                  Why the others are wrong:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    “A constraint on the process of making silicon‑chip components smaller” (Half‑Right). The passage says electron speed constrains how fast information moves, not the manufacturing or miniaturization process itself.
                  </li>
                  <li>
                    “Dependent on how engineers design silicon chips.” The text does not claim electron speed varies with chip design; it only notes that smaller components reduce distances electrons must travel.
                  </li>
                  <li>
                    “Limited by the rate at which information moves.” This reverses the relationship: information movement is limited by electron speed, not the other way around.
                  </li>
                  <li>
                    “Can be increased directly to make computers faster” (Half‑Right). The passage offers a different lever: shorten distances by shrinking components; it does not suggest we directly increase electron speed.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaways">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key Takeaways
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>Half‑Right answers mix one accurate claim with one unsupported or incorrect claim.</li>
            <li>Confirm every clause against the text—don’t stop at the part that sounds familiar.</li>
            <li>Watch for relationship reversals (A limits B vs. B limits A) and mismatched attributions.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}