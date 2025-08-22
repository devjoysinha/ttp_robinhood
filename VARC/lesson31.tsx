import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.32 Application Questions | Reading Comprehension",
  description:
    "Understand what Application questions ask in GMAT RC, how to spot them fast, and see common stem patterns. Includes a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.32 Application Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Application questions ask you to take what the passage establishes and
          use it in a new setting. Instead of re‑quoting the passage, these
          items test whether you can transfer a rule, relationship, or point of
          view to a situation the passage did not explicitly discuss.
        </p>

        <MustKnow>
          Application questions require applying ideas from the passage to a
          different context. The correct answer won’t be stated verbatim in the
          text; it will extend the passage’s logic or perspective to a new case.
        </MustKnow>

        <p>
          What might you be asked to do? Common tasks include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Match an outside scenario to a relationship or process described in
            the passage (analogy/parallel).
          </li>
          <li>
            Predict the author’s stance on a new but related issue using the
            author’s stated views.
          </li>
          <li>
            Choose an example that follows a definition or principle introduced
            in the passage.
          </li>
          <li>
            Identify which proposed action or outcome best aligns with the
            passage’s framework.
          </li>
        </ul>

        <MustKnow>
          The right answer will concern something outside the passage but linked
          to it in the specified way (by definition, principle, relationship, or
          viewpoint).
        </MustKnow>

        <p>
          For instance, if a passage explains how two biological species interact,
          an application item might ask for an analogous interaction in a
          non‑biological setting—say, a market system or a machine—so long as the
          roles and dependencies match. Your ability to map structures, track
          cause‑effect, and detect the author’s attitude is crucial here.
        </p>

        <p>Typical Application stems look like:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Which of the following best exemplifies X as defined in the passage?
          </li>
          <li>
            Which situation most closely mirrors the process described in the
            passage?
          </li>
          <li>
            Based on the author’s perspective, which proposal would the author
            most likely support in a related field?
          </li>
          <li>
            Which experiment would most appropriately test the principle outlined
            in the passage?
          </li>
          <li>
            The counseling discussed in the passage would be most helpful for an
            individual experiencing which of the following?
          </li>
          <li>
            The relationship between A and B described in the passage is most
            similar to which of the following pairs?
          </li>
          <li>
            The passage suggests the author would be most opposed to which of
            the following?
          </li>
        </ul>

        <MustKnow>
          Learn the predictable phrasing of Application questions so you can
          recognize them quickly and shift into “transfer and match” mode.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which of the following is an Application-style question stem?"
          options={[
            "Which sentence best restates the main idea of the passage?",
            "According to the passage, which statement is directly supported?",
            "Which of the following scenarios best illustrates the principle described in the passage?",
            "Which of the following is NOT mentioned in the passage?",
            "What is the primary purpose of the passage?",
          ]}
          correct="Which of the following scenarios best illustrates the principle described in the passage?"
          solution={
            <>
              <p>
                Application items ask you to apply the passage’s ideas to a new
                case. Option C explicitly asks for a scenario that exemplifies
                the passage’s principle—classic Application wording.
              </p>
              <p>
                The other options are main idea (E), detail (B), detail‑EXCEPT
                (D), and purpose (A is main idea rephrase), none of which require
                applying ideas to a new context.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when a question pushes you beyond what’s explicitly in the
          text and asks you to carry the author’s reasoning, definitions, or
          relationships into a new situation, you’re in Application territory.
        </p>
      </article>
    </main>
  );
}