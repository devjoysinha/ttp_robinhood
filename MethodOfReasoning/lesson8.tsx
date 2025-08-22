import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathBlock({ expr, inline = false, ariaLabel }: { expr: string; inline?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: !inline,
  });
  return (
    <span
      aria-label={ariaLabel}
      className="text-gray-200"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "12.4.2 Find the Conclusion First: Boldface CR | Verbal Reasoning",
  description:
    "Learn a reliable approach to Boldface Method of Reasoning questions: lock down the main conclusion first and use it to classify each bolded portion. Includes a worked password example and a full five‑choice practice item with explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.4.2 Spotting the Conclusion to Solve Boldface Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Boldface prompts often mix background facts, premises, intermediate claims, and
          the author’s final takeaway. Because those elements can appear in any order,
          the safest way to classify the bolded parts is to first identify the passage’s
          main conclusion and then judge how each boldface relates to it.
        </p>

        <MustKnow>
          Finding the main conclusion gives you a fixed reference point. Once you have it,
          label each bolded portion as background, an opposed view, a premise, an
          intermediate conclusion, or direct support for the author’s conclusion—based on
          how it relates to that main claim.
        </MustKnow>

        <p>
          Background can masquerade as a conclusion, and a conclusion may occur mid‑paragraph
          instead of at the end. So don’t rely on position; rely on role.
        </p>

        <section aria-labelledby="password-example" className="space-y-4">
          <h3 id="password-example" className="text-xl font-semibold text-white">
            Quick check: anchor on the conclusion
          </h3>
          <p className="italic text-gray-300">
            Since a popular 2003 guideline, many users have chosen single‑word passwords,
            swapping digits or symbols for letters. Still, a stronger practice is to use
            long strings of random words instead. Software can guess common symbol
            substitutions, and longer passwords are harder to crack; moreover, multi‑word
            phrases are easier to remember than long strings of mixed characters.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900 p-4">
            <p className="mb-2 text-gray-200">Structure, abstracted:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                P1: Many people follow a substitution‑based, single‑word password practice
                (background about a commonly adopted method).
              </li>
              <li>
                P2: Predictable substitutions can be detected; longer passwords resist
                cracking; passphrases are easier to memorize (evidence).
              </li>
              <li>
                C: Prefer long, random multi‑word passwords (author’s recommendation).
              </li>
            </ul>
            <div className="mt-3">
              <span className="mr-2 text-gray-400">Logical spine:</span>
              <MathBlock
                expr={`(P_2) \\;\\Rightarrow\\; \\text{Prefer long random-word passwords}`}
                ariaLabel="Premises imply the recommendation"
                inline
              />
            </div>
          </div>

          <MCQExample
            number={1}
            prompt="In the passage above, the two bold portions play which roles?"
            options={[
              "A) The first states the author’s recommendation; the second is information to consider when applying that recommendation.",
              "B) The first describes a practice the author argues against; the second supplies evidence that supports the author’s recommendation.",
            ]}
            correct="B) The first describes a practice the author argues against; the second supplies evidence that supports the author’s recommendation."
            solution={
              <>
                <p>
                  The author’s main conclusion is to favor long, random multi‑word passwords.
                  The first boldface summarizes a common approach that the author rejects,
                  not the author’s recommendation. The second boldface contributes direct
                  support for the recommendation by highlighting that length makes passwords
                  harder to crack. Therefore option B correctly classifies the roles.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          A conclusion does not have to be an entire sentence. On the GMAT, a clause within a
          sentence can be the author’s main claim; the surrounding text may provide contrast
          or supporting detail.
        </MustKnow>

        <section aria-labelledby="college-example" className="space-y-4">
          <h3 id="college-example" className="text-xl font-semibold text-white">
            Practice: classify each boldface by relation to the main conclusion
          </h3>

          <p className="text-gray-300">
            In recent years, so many people have gone to college that college graduates now
            outnumber jobs requiring a college degree. Some commentators have therefore argued
            that <strong>much of the sizeable spending on college won’t pay off in higher productivity</strong>.
            However, that judgment is mistaken, because <strong>in many jobs that do not require a degree,
            workers with college educations are more productive than those without one</strong>.
          </p>

          <MCQExample
            number={2}
            prompt="In the argument above, the two bold portions play which roles?"
            options={[
              "A) The first is evidence used to support an intermediate conclusion; the second is that intermediate conclusion.",
              "B) The first is evidence used to support a view the passage rejects; the second is an intermediate conclusion that backs the author’s main conclusion.",
              "C) The first is a judgment advanced in favor of a view the author opposes; the second is the author’s main conclusion.",
              "D) The first is a position the author argues against; the second is evidence offered in support of the author’s conclusion.",
              "E) The first is a conclusion that supports the author’s main conclusion; the second is that main conclusion.",
            ]}
            correct="D) The first is a position the author argues against; the second is evidence offered in support of the author’s conclusion."
            solution={
              <>
                <p>
                  Outline the roles:
                </p>
                <ul className="list-disc pl-6">
                  <li>Sentence 1: background about graduates vs. jobs.</li>
                  <li>
                    First boldface: a claim some people make—this is the opposed position
                    that the author intends to refute.
                  </li>
                  <li>
                    Second boldface: a reason the author gives (greater productivity in
                    many non‑degree jobs among degree‑holders), which supports the author’s
                    contrary conclusion that the pessimistic assessment is wrong.
                  </li>
                </ul>
                <p className="mt-2">
                  No intermediate conclusion is asserted between the premise and the author’s
                  main conclusion. Thus, the first boldface is an opposing claim, and the second
                  is supporting evidence for the author’s conclusion. Choice D matches.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaways">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Big takeaways
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Find the main conclusion first; use it to assign roles to bolded parts.
            </li>
            <li>
              Don’t let sentence boundaries fool you—conclusions can be clauses.
            </li>
            <li>
              Opposing views are often presented then refuted with evidence that supports
              the author’s main claim.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}