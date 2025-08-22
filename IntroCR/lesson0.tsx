import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.1 Critical Reasoning: Introduction | GMAT Verbal",
  description:
    "A concise kickoff to GMAT Critical Reasoning: what CR tests, roughly how many CR questions you’ll see, the 11 core question families, and how to read common stems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.1 Getting Oriented
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The GMAT Verbal section includes a steady dose of Critical Reasoning
          (CR). You should expect around 10 CR items, each designed to probe how
          well you interpret arguments, track assumptions, and reason with care
          under time pressure.
        </p>

        <MustKnow>
          On test day, Critical Reasoning isn’t about outside knowledge—it’s
          about reading precisely and analyzing arguments. You’ll see roughly 10
          CR questions on the Verbal section, and every one is solvable using
          the information on screen.
        </MustKnow>

        <section aria-labelledby="cr-types">
          <h3 id="cr-types" className="text-xl font-semibold text-white">
            The 11 most common CR question families
          </h3>
          <p>
            Although stems vary in wording, most CR prompts fall into one of the
            following categories. Learn what each family asks for and how stems
            typically sound.
          </p>

          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <p className="font-medium text-gray-100">Identify the assumption</p>
              <p className="text-gray-300">
                Find a premise the author must be taking for granted.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which statement is required for the conclusion to
                hold?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Weaken the argument</p>
              <p className="text-gray-300">
                Pick a fact that most undermines the author’s reasoning.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which option, if true, most seriously calls the
                conclusion into question?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Strengthen the argument</p>
              <p className="text-gray-300">
                Choose a fact that most helps the logic or conclusion.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which choice, if true, most supports the claim?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Resolve the paradox</p>
              <p className="text-gray-300">
                Reconcile two findings that appear to conflict.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which statement best explains the apparent
                contradiction?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Inference</p>
              <p className="text-gray-300">
                Deduce what must be true given the passage.
              </p>
              <p className="italic text-gray-400">
                Example stem: If the statements are accurate, which conclusion
                follows?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Find the conclusion</p>
              <p className="text-gray-300">
                Identify the main point the author is driving toward.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which option best captures the author’s main
                conclusion?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Evaluate the argument</p>
              <p className="text-gray-300">
                Determine what piece of information would be most useful for
                assessing the argument’s strength.
              </p>
              <p className="italic text-gray-400">
                Example stem: To judge the argument’s validity, which detail
                would be most relevant?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Logical flaw</p>
              <p className="text-gray-300">
                Spot the specific error in the reasoning.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which answer best describes the argument’s mistake
                in reasoning?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Complete the passage</p>
              <p className="text-gray-300">
                Select the sentence that best completes the author’s thought.
              </p>
              <p className="italic text-gray-400">
                Example stem: Which option most logically completes the passage?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Method of reasoning</p>
              <p className="text-gray-300">
                Describe how the argument is structured or developed.
              </p>
              <p className="italic text-gray-400">
                Example stem: The author’s argument proceeds by doing which of
                the following?
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">Boldface</p>
              <p className="text-gray-300">
                Explain the roles of the bolded portions within the argument.
              </p>
              <p className="italic text-gray-400">
                Example stem: The two boldfaced statements play which roles?
              </p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="practice">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Quick practice
          </h3>

          <MCQExample
            number={1}
            prompt="Which stem most clearly signals a Weaken question?"
            options={[
              "Which statement is essential to the conclusion?",
              "Which of the following, if true, most undermines the conclusion?",
              "Which choice best summarizes the author’s main point?",
              "Which detail would be most useful to evaluate the plan?",
              "Which statement can be properly inferred from the passage?",
            ]}
            correct="Which of the following, if true, most undermines the conclusion?"
            solution={
              <>
                <p>
                  Weaken questions ask you to reduce the credibility of the
                  reasoning or conclusion. Stems with language like “most
                  weakens,” “most undermines,” or “most seriously calls into
                  question” are classic signals.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="About how many Critical Reasoning questions typically appear in the GMAT Verbal section?"
            options={["5", "About 10", "15", "20", "It varies wildly from test to test"]}
            correct="About 10"
            solution={
              <>
                <p>
                  You’ll usually see roughly ten CR questions. That’s enough to
                  matter significantly, so building consistent, methodical CR
                  habits pays off.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap">
          <h3 id="wrap" className="text-xl font-semibold text-white">
            What to expect next
          </h3>
          <p>
            If any of these task types feel unfamiliar, that’s expected. In the
            lessons that follow, we’ll take each family one at a time, unpack
            what the test is asking for, and practice the patterns of strong,
            test‑day reasoning.
          </p>
        </section>
      </article>
    </main>
  );
}