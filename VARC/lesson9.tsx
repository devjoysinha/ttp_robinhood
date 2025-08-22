import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.10 Detail Trap: Distortion | Reading Comprehension",
  description:
    "Learn how Distortion traps work in RC Detail questions, why they feel convincing, and how to avoid them. Includes a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken, and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.10 Detail Trap 1: Distortion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One of the most frequent wrong-answer patterns in Detail questions is the Distortion trap.
          These choices echo the language of the passage but tweak a word, shift a scope, or introduce
          a causal or quantitative claim the author never made.
        </p>

        <MustKnow>
          In Detail questions, Distortion traps sound close to what the passage says, but they are not exact.
          They usually alter a noun, verb, modifier, scope, or cause/effect relationship.
        </MustKnow>

        <p>
          Consider two quick illustrations of how small wording shifts produce distortions:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Passage says: an author&apos;s style was “less serious” than that of contemporaries. Distortion:
            claiming the author&apos;s writing “was funny.” “Less serious” does not necessarily mean “comical.”
          </li>
          <li>
            Passage says: quinoa was “the most easily grown source of protein” in a region. Distortion:
            stating quinoa was “the primary food for most residents.” “Easiest protein to grow” is not the same
            as “main food.”
          </li>
        </ul>

        <MustKnow>
          Distortion answers “feel right” because they reuse key terms or paraphrase closely. That familiarity can be persuasive,
          so don’t rely on gut feel—verify against the text.
        </MustKnow>

        <p>
          The cure is mechanical: when an option seems reasonable, go back and match it against the passage word‑for‑word.
          Watch for changes to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Verbs that inject new causality (e.g., “causes,” “proves,” “ensures”).</li>
          <li>Modifiers that change strength or scope (e.g., “primary,” “generally,” “all,” “most”).</li>
          <li>Key nouns or qualifiers that narrow or widen meaning.</li>
        </ul>

        <MustKnow>
          Strategy: Confirm the exact wording in the passage, especially verbs, nouns, and modifiers. If any of those
          are altered in the answer choice, you likely have a Distortion.
        </MustKnow>

        <section aria-labelledby="passage-heading" className="rounded-md bg-gray-800/40 p-4">
          <h3 id="passage-heading" className="mb-2 text-base font-semibold text-gray-100">
            Reading Passage (for the example below)
          </h3>
          <div className="space-y-3 text-gray-300">
            <p>
              Debates about the effects of new technology have recurred throughout the modern era, and the internet is
              no exception. In The Shallows, Nicholas Carr argues that the internet undermines rather than strengthens
              human intellect. He contends that constant online stimuli, such as frequent smartphone notifications, erode
              patience, concentration, and memory.
            </p>
            <p>
              Carr points to research indicating that this heavy exposure to notification‑driven cues impairs focus—even
              when the devices aren’t in active use. For example, a 2017 study from the McCombs School of Business found
              that participants’ concentration dropped even with their smartphones powered off and placed in a pocket or
              face down on a table. Carr is especially troubled by the fact that nearly all participants failed to recognize
              this impact, insisting their phones had not distracted them.
            </p>
            <p>
              Many scholars push back on these concerns, highlighting significant benefits of the internet. Neuropsychologist
              Vaughn Bell notes that anxieties about “information overload” have appeared for generations, with each era
              revisiting fears about the mind and new media. Others emphasize the internet’s unmatched access to knowledge
              and low‑cost tools for communication and collaboration. While some, such as Nir Eyal (author of Indistractable),
              acknowledge that misuse will occur, they maintain that the advantages far outweigh the drawbacks.
            </p>
          </div>
        </section>

        <MCQExample
          number={6}
          prompt="Based on the passage, which statement about the 2017 McCombs School of Business study is accurate?"
          options={[
            "Participants were unaware that their phones were switched off.",
            "The study concluded that turning a phone off causes people to lose focus.",
            "Participants believed smartphones are generally not distracting.",
            "Carr was alarmed by the size of the participants’ drop in focus.",
            "Participants didn’t realize their phones had affected their ability to focus.",
          ]}
          correct="Participants didn’t realize their phones had affected their ability to focus."
          solution={
            <>
              <p>
                The relevant information appears where the study is summarized: the focus decrease occurred even with
                phones off and out of use, and nearly all participants failed to recognize this effect, claiming their
                phones hadn’t been a distraction.
              </p>
              <p>
                Why the wrong options are distortions:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  “Participants were unaware that their phones were switched off” misreads “ignorant of this effect.”
                  The effect refers to the focus drop, not the phone&apos;s power state.
                </li>
                <li>
                  “Turning a phone off causes people to lose focus” invents causality. The passage says focus declined
                  despite phones being off; it does not claim that powering off triggers the decline.
                </li>
                <li>
                  “Smartphones are generally not distracting” overgeneralizes. Participants denied distraction in this
                  study context, not “in general.”
                </li>
                <li>
                  “Carr was alarmed by the size of the focus drop” misattributes what alarmed him. He was alarmed that
                  participants didn’t recognize the effect, not by the decline itself.
                </li>
              </ul>
              <p>
                The correct choice states that participants failed to realize their phones affected their focus, exactly
                matching the passage.
              </p>
            </>
          }
        />

        <p>
          Bottom line: Distortions tend to be one word or one step away from the text. If the center of meaning
          shifts—even slightly—the choice is out.
        </p>
      </article>
    </main>
  );
}