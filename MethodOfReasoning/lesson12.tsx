import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.5.2 Partially Correct Answers | Critical Reasoning",
  description:
    "Learn to avoid trap choices in Method of Reasoning questions that sound right but contain one wrong clause. Includes an annotated two‑speaker example and systematic answer analysis.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.2 Partially Correct Answers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some incorrect choices in Method of Reasoning questions are especially
          persuasive because they begin on solid footing: they correctly capture
          one piece of what the author does. The catch is that a later clause
          quietly mislabels a role or overstates a relationship. Since each
          choice must be fully right to be credited, one faulty clause is enough
          to sink the entire option.
        </p>

        <MustKnow>
          An answer is correct only if every part is correct. If any clause
          mischaracterizes the passage or the speakers’ moves, the whole choice
          is wrong.
        </MustKnow>

        <section aria-labelledby="why-the-trap-is-tempting" className="space-y-3">
          <h3 id="why-the-trap-is-tempting" className="text-xl font-semibold text-white">
            Why these traps feel convincing
          </h3>
          <p>
            Consider a short illustration. People widely recognize that too much
            salt can push blood pressure up. A research summary notes that heavy
            sugar intake can have a similar effect and, in one study, produced a
            larger increase in blood pressure than salt did, in part because
            high sugar prompted a surge of insulin that raised blood pressure.
          </p>
          <p className="text-gray-300">
            A tempting but wrong description might say: “The author presents a
            claim supported by scientific evidence and then shows how that claim
            goes against common knowledge.” The first clause sounds fine—the
            claim is evidence‑backed. The second clause is off: the author
            doesn’t attack what is commonly known; rather, the claim adds to it.
          </p>
          <p className="text-gray-300">
            A correct description would be: “The author uses supporting
            information to substantiate a claim that expands on common
            knowledge.” Every part aligns with what was actually done.
          </p>
        </section>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example: spotting the partial‑truth trap
          </h3>

          <p>
            Read the exchange and then identify how the second speaker responds.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="italic text-gray-200">
              Chris: The highways in our city are jammed day after day. If we
              add lanes to each main route, there will be more roadway per car.
              So the city should widen the highways.
            </p>
            <p className="mt-3 italic text-gray-200">
              Elena: When a major freeway in Houston was widened to fight
              congestion, the extra capacity drew more drivers. Congestion got
              worse, and average commute times in the area climbed by over 40%.
            </p>
          </div>

          <MCQExample
            number={11}
            prompt="Elena responds to Chris’s argument in which of the following ways?"
            options={[
              "She endorses the proposal yet critiques the evidence used to support it.",
              "She introduces a specific case to challenge the ultimate directive.",
              "She attacks the assumption that a tactic effective elsewhere would also work locally.",
              "She overturns the recommendation by arguing that two unlike situations are nonetheless comparable.",
              "She cites a single instance to warn against treating all seemingly similar cases as identical.",
            ]}
            correct="She introduces a specific case to challenge the ultimate directive."
            solution={
              <>
                <p>
                  Structure check: Chris identifies a problem (persistent
                  congestion), proposes a fix (add lanes), and concludes the
                  city should widen its highways. Elena supplies an example
                  (Houston) showing that widening can backfire by inducing
                  demand, worsening traffic and commute times.
                </p>

                <p>
                  Therefore, Elena uses a concrete case to cast doubt on the
                  final recommendation. That matches: “She introduces a specific
                  case to challenge the ultimate directive.” 
                </p>

                <p className="mt-2">
                  Why the others fail (note the “partially correct” traps):
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    A: She does not agree with Chris’s conclusion; she questions
                    it. So the first clause is already wrong.
                  </li>
                  <li>
                    C: She does question an assumption, but it’s not about
                    “something worked elsewhere.” Chris never claimed it worked
                    in some other place; he argued it would work here.
                  </li>
                  <li>
                    D: She raises doubt rather than definitively refuting the
                    conclusion, and she doesn’t establish an analogy between two
                    dissimilar cases.
                  </li>
                  <li>
                    E: She does cite a case, but Chris isn’t assuming that all
                    such cases are the same. The second clause misstates his
                    reasoning.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Takeaway: when an option seems half right, interrogate every clause.
          If any part misstates the role of a sentence, the relationship between
          claims, or what a speaker actually does, move on—the choice is out.
        </p>
      </article>
    </main>
  );
}