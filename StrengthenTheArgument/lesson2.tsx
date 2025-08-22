import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.3 Recognizing Strengthen the Argument Questions | Critical Reasoning",
  description:
    "Quickly identify Strengthen question stems and practice with a targeted multiple‑choice example, complete with clear, test‑day reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 How to Spot a Strengthen Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strengthen prompts are usually easy to recognize because they rely on
          highly consistent wording. Train your eye to notice these stems so you
          can shift quickly into “support the conclusion” mode on test day.
        </p>

        <section aria-labelledby="common-stems">
          <h3 id="common-stems" className="sr-only">
            Common Strengthen stems
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <em>Which option, if true, would most strongly support _____?</em>
            </li>
            <li>
              <em>Which statement, if true, gives the strongest basis for
                _____?</em>
            </li>
            <li>
              <em>Which of the following, if true, best helps to justify
                _____?</em>
            </li>
            <li>
              <em>Which choice, if true, offers the best reason for _____?</em>
            </li>
            <li>
              <em>Which of the following, if true, would strengthen
                _____?</em>
            </li>
            <li>
              <em>Which option, if true, provides the greatest support for
                _____?</em>
            </li>
            <li>
              <em>Which of the following, if true, most bolsters the
                argument?</em>
            </li>
            <li>
              <em>
                Each of the following, if true, helps to justify _____ EXCEPT:
              </em>
            </li>
            <li>
              <em>Which of the following, if true, is additional evidence
                that _____?</em>
            </li>
          </ul>
        </section>

        <MustKnow>
          Be ready to recognize the standard “strengthen” stems quickly. Your
          job in these problems is to pick the statement that makes the stated
          conclusion more believable, not to prove it beyond doubt.
        </MustKnow>

        <section aria-labelledby="example">
          <h3 id="example" className="sr-only">
            Strengthen example
          </h3>

          <MCQExample
            number={2}
            prompt="A large multinational launched a three‑month training program for employees in its garment factories, focusing on life skills and problem‑solving. Although the content is not directly tied to garment production, the company expects the program to pay for itself by boosting factory productivity. Which of the following, if true, most supports the company’s expectation?"
            options={[
              "Enough workers have volunteered to fill all available seats in the program.",
              "A sizable share of factory employees have had few prior chances to build strong life skills.",
              "Even relatively experienced employees believe they could benefit from the program.",
              "Several experts doubt adults can markedly improve life skills over just a few months.",
              "Deficits in problem‑solving or life skills create ongoing issues that hinder job performance and employee retention.",
            ]}
            correct="Deficits in problem‑solving or life skills create ongoing issues that hinder job performance and employee retention."
            solution={
              <>
                <p className="mb-2">
                  We need the choice that most increases the likelihood that the
                  program will raise productivity enough to cover its cost.
                </p>
                <p className="mb-2">
                  A: High interest doesn’t connect the training to higher output.
                </p>
                <p className="mb-2">
                  B: Suggests employees might benefit personally, but it still
                  doesn’t link the program to productivity gains for the firm.
                </p>
                <p className="mb-2">
                  C: Similar issue—possible individual benefit, no clear tie to
                  factory productivity.
                </p>
                <p className="mb-2">
                  D: This undercuts the premise that the training can work
                  quickly; it weakens rather than strengthens.
                </p>
                <p className="mb-2 font-semibold text-white">
                  E: If weak life/problem‑solving skills cause persistent work
                  disruptions and reduce effectiveness, then improving those
                  skills is plausibly linked to higher productivity. This
                  directly supports the company’s expectation. Correct.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in Strengthen questions, look for the choice that makes
          the stated conclusion more reasonable—ideally by connecting the given
          plan or evidence to the desired outcome.
        </p>
      </article>
    </main>
  );
}