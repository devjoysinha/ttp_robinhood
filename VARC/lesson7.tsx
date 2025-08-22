import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.8 Detail Answers Based on One Statement | GMAT RC",
  description:
    "How to spot correct Detail answers in Reading Comprehension when they’re tied to one line from the passage: direct restatements, paraphrases, and rearrangements. Includes five quick practice items and one RC mini‑example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.8 Detail Answers Based on One Statement in the Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Detail questions, the right choice often comes straight from a single line in the passage. Sometimes the match is nearly word‑for‑word; other times it’s a clean paraphrase or a rearrangement of the same idea. The skill you’re building is to verify that a choice truly says what the passage says, regardless of surface wording.
        </p>

        <MustKnow>
          A correct Detail answer can be a near-verbatim restatement of a sentence in
          the passage. If you’ve located the relevant line, the match should be obvious.
        </MustKnow>

        <p>
          For instance, if a passage says, “The poet began drafting the piece while in Italy,” a correct answer might read, “The poet started composing the poem during a stay in Italy.” Different words, same claim.
        </p>

        <MustKnow>
          Many correct Detail answers paraphrase the source line using synonyms or a new structure while preserving the original meaning.
        </MustKnow>

        <p>
          A third pattern is reordering. The answer choice may flip clauses or compress the sentence yet still communicate the identical idea.
        </p>

        <MustKnow>
          Don’t rely on word matching. The best answer can be the one that looks least like the passage—so long as it accurately conveys the same fact and answers the question asked.
        </MustKnow>

        <section aria-labelledby="targeted-practice" className="mt-8">
          <h3 id="targeted-practice" className="text-xl font-semibold text-white mb-2">
            Targeted Practice
          </h3>
          <p className="text-gray-300">
            For each prompt, pick the option that most faithfully captures the original meaning.
          </p>

          <div className="mt-6 space-y-8">
            <MCQExample
              number={1}
              prompt="Original: After the eggs hatch, the baby turtles head straight for the sea and begin swimming."
              options={[
                "Upon hatching, the turtles quickly reach the ocean and swim off.",
                "Because the turtles hatch in the ocean, they immediately swim away.",
              ]}
              correct="Upon hatching, the turtles quickly reach the ocean and swim off."
              solution={
                <>
                  <p>
                    Choice A restates the sentence with minimal change: “upon hatching” matches “after the eggs hatch,” and the rest preserves the same action. Choice B invents a new claim—that the turtles hatch in the ocean—which contradicts the idea that they must crawl to the sea.
                  </p>
                </>
              }
            />

            <MCQExample
              number={2}
              prompt="Original: The anthropologists based their conclusions on studies of traditional Chinese medicine and Native American healing."
              options={[
                "The researchers drew conclusions about various cultures by using conventional research approaches.",
                "The researchers’ conclusions rested on research into different cultures’ healing methods.",
              ]}
              correct="The researchers’ conclusions rested on research into different cultures’ healing methods."
              solution={
                <>
                  <p>
                    The original states that conclusions were grounded in studies of two cultural healing systems. Choice B captures that directly. Choice A adds claims not in the sentence (“about various cultures” and “conventional research approaches”), so it’s not a faithful restatement.
                  </p>
                </>
              }
            />

            <MCQExample
              number={3}
              prompt="Original: Because landlords relied on their tenants to preserve their wealth, serfs retained some leverage."
              options={[
                "Serfs had some leverage over lords since they contributed to lords’ income.",
                "As tenants of wealthy landowners, serfs had no power at all.",
              ]}
              correct="Serfs had some leverage over lords since they contributed to lords’ income."
              solution={
                <>
                  <p>
                    The original explicitly says serfs were not powerless and explains why. Choice A mirrors that idea. Choice B contradicts the sentence by claiming serfs had no power.
                  </p>
                </>
              }
            />

            <MCQExample
              number={4}
              prompt="Original: Immune to cobra venom, the honey badger is among the few mammals that can survive multiple cobra bites."
              options={[
                "A mammal called the honey badger can live through several cobra bites because it is immune to the venom.",
                "Most mammals, including the honey badger, can withstand multiple cobra bites due to venom immunity.",
              ]}
              correct="A mammal called the honey badger can live through several cobra bites because it is immune to the venom."
              solution={
                <>
                  <p>
                    Choice A simply rearranges the sentence and keeps the meaning. Choice B flips “few” into “most,” which reverses the claim and is therefore wrong.
                  </p>
                </>
              }
            />

            <MCQExample
              number={5}
              prompt="Original: Believing that an educated public was essential to the young nation’s success, the founders prioritized building a school system."
              options={[
                "The country’s founders created a school system because the public demanded it.",
                "The founders made establishing an education system a top priority to help the nation thrive.",
              ]}
              correct="The founders made establishing an education system a top priority to help the nation thrive."
              solution={
                <>
                  <p>
                    Choice B restates “gave high priority” and “for the success of the new nation” in new words. Choice A introduces a new, unsupported reason (“because the public demanded it”), so it doesn’t match the source line.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <section aria-labelledby="rc-mini" className="mt-10 space-y-4">
          <h3 id="rc-mini" className="text-xl font-semibold text-white">
            Mini Reading Comprehension Example
          </h3>

          <div className="rounded-md border border-gray-700 bg-gray-900 p-4 leading-relaxed text-gray-200">
            <p>
              Some scholars argue that fairness exists only in human societies. Recent work, however, suggests that norms of fairness can also emerge among animals. Studying seven communities of banded mongooses in Uganda, zoologist Harry Marshall documented an unusual synchrony: most pregnant females give birth on the same night. This “veil of ignorance” means the pups look, smell, and sound so similar that parents cannot tell which offspring are their own and thus cannot allocate extra care on that basis. As a result—unlike much of the natural world where parents favor their young—these mongooses distribute care evenly across the entire litter, which improves the litter’s overall chances of survival. For instance, females often give additional milk to lighter pups, shrinking weight gaps within a few weeks.
            </p>
          </div>

          <MCQExample
            number={6}
            prompt="According to the passage, why don’t banded mongoose parents favor their own pups?"
            options={[
              "They believe that equal treatment is fairer.",
              "They cannot see, smell, or hear the pups in the litter.",
              "They cannot tell which pups are theirs.",
              "They want to maximize the litter’s survival chances.",
              "They give extra attention to low‑birth‑weight pups.",
            ]}
            correct="They cannot tell which pups are theirs."
            solution={
              <>
                <p>
                  The passage introduces a causal “therefore” after noting that parents can’t identify their own offspring because the pups are nearly indistinguishable. That inability prevents favoritism, making “They cannot tell which pups are theirs” the only supported reason.
                </p>
                <p>
                  The other choices mention beliefs or goals not stated (fairness, wanting better survival), misread the sensory claim (they can sense pups but can’t identify lineage), or cite a behavior (extra care for lighter pups) that isn’t the cause of non‑favoritism.
                </p>
              </>
            }
          />
        </section>

        <p className="mt-8">
          Takeaway: lock onto the exact claim in the relevant line, then accept any answer that accurately conveys that claim—even if the wording looks new.
        </p>
      </article>
    </main>
  );
}