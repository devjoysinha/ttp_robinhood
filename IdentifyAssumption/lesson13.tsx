import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "2.9.5 Necessary Assumption Type 5: Turning a Likely Fact into a Certain One | Critical Reasoning",
  description:
    "Learn a common Assumption question pattern: the argument quietly treats a likely fact as certainly true. Includes two practice questions with full solutions and the negation test.",
};

function KaTeXInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="align-baseline"
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify The Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.5 Necessary Assumption Type 5: Treating a Likely Fact as Actually True
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some Critical Reasoning Assumption problems, the author leans on a claim that
          seems very plausible but was never established. The conclusion depends on that
          “probably true” detail being “definitely true.”
        </p>

        <MustKnow>
          Correct answers of this type lock in a fact that only looked likely from the
          premises. A reliable way to test necessity is the negation test: if you deny the
          choice and the argument collapses, that choice is a required assumption.
        </MustKnow>

        <section aria-labelledby="logic-skeleton" className="space-y-3">
          <h3 id="logic-skeleton" className="text-base font-semibold text-gray-200">
            Logic skeleton (with notation)
          </h3>
          <p>
            Many arguments follow this shape:
          </p>
          <ul className="list-disc ps-6">
            <li>
              Premises make it plausible that some fact P holds.
            </li>
            <li>
              Conclusion implicitly treats P as certain.
            </li>
          </ul>
          <p>
            The hidden requirement is “P is true.” For instance, “some Brookville residents
            use the internet” can be written as{" "}
            <KaTeXInline expr={`\\exists\\ r\\in B:\\ \\text{r uses the internet}`} ariaLabel="There exists a resident in Brookville who uses the internet" />.
          </p>
        </section>

        <MCQExample
          number={25}
          prompt="A new carrier, Satellite Media, is about to launch an aggressive online ad campaign. Many people in Brookville have long been unhappy with their cell reception. Therefore, once the online ads start, Brookville residents will begin moving their service to Satellite Media. Which assumption is required for this conclusion?"
          options={[
            "Satellite Media will eliminate all competing carriers in the market.",
            "No one in Brookville uses a landline for calls.",
            "At least some Brookville residents go online.",
            "Satellite Media’s plans are cheaper than all current options in Brookville.",
            "Some Brookville residents are satisfied with their current reception.",
          ]}
          correct="At least some Brookville residents go online."
          solution={
            <>
              <p className="mb-2">
                The prediction hinges on residents seeing those online ads. If no one in
                Brookville uses the internet, the campaign can’t influence switching
                behavior, and the conclusion falls apart.
              </p>
              <p className="mb-2">
                Negation test: deny the choice “some residents go online.” If{" "}
                <KaTeXInline
                  expr={`\\neg\\,\\exists\\ r\\in B:\\ \\text{r uses the internet}`}
                  ariaLabel="It is not the case that there exists a Brookville resident who uses the internet"
                />{" "}
                then residents won’t be reached by online ads, so the move-to-Satellite
                conclusion is unsupported. Thus, the assumption is necessary.
              </p>
              <ul className="list-disc ps-6">
                <li>
                  Choices about wiping out competitors, landline usage, price differences,
                  or some residents being happy are not required for the argument to work.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="For years, Catunah’s unemployment rate exceeded 10%. The government then offered free job‑skills training to unemployed citizens, and the rate has since dropped to about 7%. These results show that teaching work skills helps people find jobs. Which assumption is required?"
          options={[
            "The government will keep the training program until the unemployment rate reaches 6%.",
            "The training targeted skills needed by specific local industries.",
            "The drop occurred because many job seekers moved abroad to find work.",
            "Some people who took the training later obtained employment.",
            "If the training continues, unemployment will decline even more.",
          ]}
          correct="Some people who took the training later obtained employment."
          solution={
            <>
              <p className="mb-2">
                The conclusion attributes the decrease to the training. For that to be true,
                at least some trainees must have become employed afterward. If none did, the
                decline must be explained by something else (e.g., migration, macroeconomic
                changes).
              </p>
              <p className="mb-2">
                The necessary fact can be expressed as{" "}
                <KaTeXInline
                  expr={`\\exists\\ t\\in T:\\ \\text{t was employed after training}`}
                  ariaLabel="There exists a trainee who was employed after training"
                />
                . Negating it breaks the cause‑and‑effect story, so it is required.
              </p>
              <ul className="list-disc ps-6">
                <li>
                  Future plans or further declines (A, E) aren’t needed to explain a past
                  drop.
                </li>
                <li>
                  Designing training for local firms (B) may help, but the argument still
                  needs evidence that trainees actually got jobs.
                </li>
                <li>
                  A migration explanation (C) weakens the argument and cannot be a required
                  assumption.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: when a conclusion leans on a detail that only seems probable from the
          premises, the correct assumption often pins that detail down as true. Use the
          negation test—deny the candidate statement and see whether the argument’s logic
          collapses—to confirm necessity.
        </p>
      </article>
    </main>
  );
}