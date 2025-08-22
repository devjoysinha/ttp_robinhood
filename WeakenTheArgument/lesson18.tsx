import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Optional: if your design system exposes an ExampleCard for non‑MCQ content, you can swap MCQs accordingly.

export const metadata: Metadata = {
  title: "3.9.3 Frameshifts — Weaken Questions | Critical Reasoning",
  description:
    "Learn to spot frameshift traps in Weaken questions—answers that undermine a different conclusion than the author’s. Includes two quick illustrative MCQs and one full practice question with a detailed solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9.3 Frameshifts — Choices that Weaken Support for the Wrong
          Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a Weaken question, your job is to chip away at the argument’s stated
          conclusion. A common trap is a “frameshift”: an answer that challenges a
          conclusion that sounds related but isn’t the one the author actually
          drew. Because the target shifts, the argument’s real conclusion remains
          largely intact.
        </p>

        <MustKnow>
          Frameshift answers attack a different conclusion than the one in the
          prompt. They can feel attractive because the alternate conclusion is
          similar in topic or timing, but it is not the claim you were asked to
          weaken. Always anchor your evaluation to the author’s exact conclusion.
        </MustKnow>

        <section aria-labelledby="ex1" className="space-y-4">
          <h3 id="ex1" className="text-xl font-semibold text-white">
            Mini‑Example 1
          </h3>

          <p>
            Claim: Infants exposed to classical music end up testing higher in
            kindergarten math and reading than peers who weren’t exposed.
            Therefore, classical music benefits early development.
          </p>

          <MCQExample
            number={28}
            prompt="Which option most undermines the conclusion about early development?"
            options={[
              "(Frameshift) High school students who listen to classical music at home do not outperform peers on standardized tests.",
              "(Correct) Parents who play classical music for their infants are, on average, more involved in their children’s education than parents who do not.",
            ]}
            correct="(Correct) Parents who play classical music for their infants are, on average, more involved in their children’s education than parents who do not."
            solution={
              <>
                <p>
                  The first option shifts the conclusion to a different life stage
                  (high school) and thus doesn’t address the author’s claim about
                  early development. That’s a frameshift.
                </p>
                <p>
                  The second option provides a competing explanation for the
                  observed kindergarten advantage: parental investment, not music,
                  could be responsible. That weakens the original conclusion.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex2" className="space-y-4">
          <h3 id="ex2" className="text-xl font-semibold text-white">
            Mini‑Example 2
          </h3>

          <p>
            Survey result: In local nursing homes, most residents prefer DVD
            players/streaming services over VCRs. Conclusion: Older adults adapt
            to new tech more easily than commonly believed.
          </p>

          <MCQExample
            number={29}
            prompt="Which option most directly calls the conclusion into question?"
            options={[
              "(Frameshift) Residents spend only a small portion of their time watching movies on their own devices.",
              "(Correct) The survey was sent only to residents who had recently purchased subscriptions to home‑theater technology magazines.",
            ]}
            correct="(Correct) The survey was sent only to residents who had recently purchased subscriptions to home‑theater technology magazines."
            solution={
              <>
                <p>
                  The first option attacks how much time is spent watching movies,
                  not whether residents can adapt to technology—again, the wrong
                  target. That’s a frameshift.
                </p>
                <p>
                  The second option undermines the validity of the survey by
                  revealing sample bias: tech‑enthusiast subscribers are not
                  representative of the broader elderly population, weakening the
                  conclusion.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="fullPractice" className="space-y-4">
          <h3 id="fullPractice" className="text-xl font-semibold text-white">
            Practice: Full Weaken Question
          </h3>

          <p>
            Background: For years, most personal computers ran the Circlix
            operating system. A decade ago, a new OS called Orange launched and
            has steadily gained users. Over that same period, call volume to tech
            support centers has climbed. Conclusion: Orange must be harder to use
            than Circlix.
          </p>

          <p className="italic">
            Which of the following, if true, most seriously undercuts the
            evidence cited?
          </p>

          <MCQExample
            number={30}
            prompt="Choose the option that most weakens the inference that Orange is harder to use."
            options={[
              "Compared with a decade ago, today’s PC user base includes far more novices and occasional users, whereas earlier it consisted mostly of experts.",
              "For many PC users, top‑tier security features matter more than ease of use.",
              "The average length of a tech support call has stayed roughly the same over the last ten years.",
              "Marketing teams are not worried that concerns about usability will hurt sales of Orange.",
              "More engineer hours were invested in developing Orange than were invested in developing Circlix.",
            ]}
            correct="Compared with a decade ago, today’s PC user base includes far more novices and occasional users, whereas earlier it consisted mostly of experts."
            solution={
              <>
                <p className="font-semibold">Argument map</p>
                <ul className="list-disc pl-5">
                  <li>Premise: Support call volume has increased over 10 years.</li>
                  <li>Context: Orange adoption rose over the same period.</li>
                  <li>Conclusion: Orange is tougher to use than Circlix.</li>
                </ul>

                <p className="mt-3">
                  The author treats “more support calls” as evidence of “harder to
                  use,” assuming no other cause explains the increase.
                </p>

                <p className="mt-3 font-semibold">Evaluate each choice</p>
                <p>
                  A. If the user population shifted from experts to many
                  first‑timers and casual users, calls could increase regardless of
                  which OS is easier. This offers a credible alternative cause and
                  weakens the conclusion. Correct.
                </p>
                <p>
                  B. This speaks to what users value (security vs. ease), not to
                  whether Orange is actually harder to use. It doesn’t touch the
                  causal link the argument relies on.
                </p>
                <p>
                  C. Call duration isn’t the cited metric—call count is. Flat call
                  length doesn’t explain away the increase in the number of calls.
                </p>
                <p>
                  D. Marketers’ opinions about sales impact don’t establish
                  anything about real‑world usability.
                </p>
                <p>
                  E. Engineer hours don’t directly tell us anything about user
                  difficulty; more time could make an OS simpler or more complex,
                  and we’re given no link either way.
                </p>

                <p className="mt-3 font-semibold">Answer: A</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Always locate the author’s precise conclusion and test each
          option against that claim. If an answer targets a different takeaway,
          it’s a frameshift—eliminate it.
        </p>
      </article>
    </main>
  );
}