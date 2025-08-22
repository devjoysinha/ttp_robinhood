import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.3 Turning the Blank into a Question: Why or What | Critical Reasoning",
  description:
    "A practical approach to GMAT Critical Reasoning “Complete the Passage” questions: convert the trailing blank into a Why or What question to expose traps. Includes four worked examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.3 Expose Traps by Turning the Blank into a “Why” or “What” Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Complete the Passage items are tricky because the correct choice must
          logically finish the author’s thought, not merely sound smooth in a long
          sentence. Polished-but-wrong options often “fit the prose” and lure you in.
          A reliable fix is to convert the trailing blank into a direct question and
          evaluate each option as a stand‑alone answer to that question.
        </p>

        <MustKnow>
          Don’t grade choices by how well they “flow.” Recast the sentence that ends
          with the blank as a question and test each option as a direct answer. This
          removes the illusion created by a well‑worded but illogical sentence.
        </MustKnow>

        <p>
          When the blank is preceded by a cause connector such as “because,” “since,”
          or “as,” turn the blank into a Why‑question. Heuristically:
          “because / since / as ⇒ Why?” If the blank isn’t preceded by a causal
          connector, a What‑question is typically better.
        </p>

        <MustKnow>
          Use Why when the blank follows a causal connector (because, since, as).
          Use What when there is no such connector and you need a missing fact,
          assumption, or criterion.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which option most sensibly completes the facts below?
          
In response to resident noise complaints, the Mergate city council is weighing a permanent closure of Mergate Airport. Local businesses rely on tourist spending, and some tourists arrive by air. Still, the council believes those businesses would not see profits fall if the airport closes, since ________."
          options={[
            "those businesses represent a large fraction of all businesses in Mergate",
            "those businesses are among the city’s most profitable",
            "without constant aircraft noise, Mergate would be more appealing to vacationers",
          ]}
          correct="without constant aircraft noise, Mergate would be more appealing to vacationers"
          solution={
            <>
              <p>
                Turn the blank into a Why‑question: Why do council members think
                profits won’t drop if the airport closes?
              </p>
              <p>
                A: “They’re a large fraction” doesn’t explain why profits will hold up.
                B: “They’re very profitable” says nothing about what happens after a
                closure. C: If the city becomes quieter and more attractive, tourism
                can be sustained or even improve—this directly answers the Why.
                Correct: C.
              </p>
            </>
          }
        />

        <MustKnow>
          Converting “..., since ____.” to “Why ... ?” strips away sentence polish and
          exposes whether a choice truly explains the claim.
        </MustKnow>

        <MCQExample
          number={2}
          prompt="Which option most logically completes the passage?
          
Personalized learning lets students pick topics and sequence them. In theory, this freedom boosts motivation and accelerates learning. In practice, though, students can become frustrated and lose motivation because ________."
          options={[
            "schools sometimes need to hire more teachers to deploy personalized learning",
            "poorly chosen topic order can hinder learning when one topic depends on mastery of another",
            "students working on the same topic together can help each other",
            "some schools adopting personalized learning see gains while others see declines",
            "some students are more enthusiastic than others about personalized learning",
          ]}
          correct="poorly chosen topic order can hinder learning when one topic depends on mastery of another"
          solution={
            <>
              <p>
                This is a Why‑question (blank follows “because”): Why might students
                get stuck and demotivated? The best support is a mechanism that
                explains frustration.
              </p>
              <p>
                B directly provides that mechanism: if learners choose an ineffective
                sequence, dependencies break and progress stalls—leading to
                frustration. The other choices are either tangential (A, D, E) or
                contrast a different model (C) rather than explaining the stated
                effect. Correct: B.
              </p>
            </>
          }
        />

        <p>
          Not every blank signals a Why. When the stem is drawing a conclusion that
          requires a hidden premise, convert to a What‑question: “What must be true?”
          or “What must be determined first?”
        </p>

        <MCQExample
          number={3}
          prompt="Which option most logically completes the passage?
          
It was long believed that prehistoric cave paintings were created by men for hunting‑related reasons. Many such paintings also include hand stencils. Analysis shows most of those hands are female. Thus, most cave paintings were created by women, provided that ________."
          options={[
            "the people who created the cave paintings did not hunt the animals depicted",
            "the hands in the stencils were the hands of the artists who made the paintings",
          ]}
          correct="the hands in the stencils were the hands of the artists who made the paintings"
          solution={
            <>
              <p>
                Convert to a What‑assumption question: What must be true for the
                female‑hand evidence to justify the conclusion? We must link the hands
                to the artists themselves. That’s exactly what choice B states. Choice
                A is irrelevant—women could hunt or not; hunting status doesn’t secure
                the inference. Correct: B.
              </p>
            </>
          }
        />

        <MustKnow>
          When the passage draws a conclusion from a new piece of evidence but the
          link is not guaranteed, rewrite the blank as “What must be assumed?” and
          test for a required bridge statement.
        </MustKnow>

        <MCQExample
          number={4}
          prompt="Which option most logically completes the passage?
          
Four blocks of a Trenditon street—Restaurant Row—feature restaurants at most ground‑floor storefronts. The Chamber of Commerce proposes planting trees in sidewalk openings to beautify the area, expecting higher restaurant profits as a result. To verify that having trees in the sidewalk would yield the intended outcome, the Chamber will first determine ________."
          options={[
            "whether making room for trees would significantly reduce the number of sidewalk dining tables",
            "which tree species would be healthiest along Restaurant Row",
            "whether local ordinances permit planting trees in public sidewalks",
            "whether changing parking rules would boost profits more than planting trees",
            "what share of restaurant owners favor planting trees on Restaurant Row",
          ]}
          correct="whether making room for trees would significantly reduce the number of sidewalk dining tables"
          solution={
            <>
              <p>
                Convert to a What‑to‑check question: What must be determined to
                confirm the plan will raise profits if implemented? If trees force
                restaurants to remove many outdoor tables, seating capacity (and
                revenue) could fall—undercutting the plan. That check (A) is directly
                relevant to the goal of higher profits.
              </p>
              <p>
                B is implementation detail, not profit impact. C is feasibility, not
                effectiveness. D is a “better plan” distraction. E is opinion polling,
                not profit mechanics. Correct: A.
              </p>
            </>
          }
        />

        <MustKnow>
          Evaluate the plan’s mechanism, not just feasibility or popularity. Ask:
          What could offset the expected benefit at the point of impact (foot traffic,
          seating, conversion, etc.)?
        </MustKnow>

        <p>
          Bottom line: Replace the trailing blank with a precise question—Why when a
          causal connector is present; What when an assumption, missing fact, or
          decision criterion is needed. Then accept only the option that answers that
          question and supports the passage’s logic end‑to‑end.
        </p>
      </article>
    </main>
  );
}