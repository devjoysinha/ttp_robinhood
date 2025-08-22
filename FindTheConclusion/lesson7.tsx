import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "8.4.1 Find the Conclusion: Wrong Answer Type 1 (Needs Outside Info) | GMAT Critical Reasoning",
  description:
    "Learn how to eliminate Find the Conclusion answers that rely on outside information. Includes a warm‑up example and a five‑option practice problem with full explanations.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet fallback for environments without global CSS injection */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        integrity="sha384-o9b3WjZwmdY0/3QRA5p9F9O4yBJ4m2zX7Hq0bq1R9m2C1w1y3u5iO7t8z0Z0w6lf"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4.1 Wrong Answer Type One: Choices That Depend on Information Not
          Stated in the Stimulus
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some Critical Reasoning tasks (for example, Strengthen or Weaken),
          the correct option may introduce a new fact. By contrast, in a Find
          the Conclusion question, the right answer must be justified entirely
          by what the passage already says. If a choice needs an extra fact not
          provided by the stimulus, it cannot be correct.
        </p>

        <MustKnow>
          An answer is invalid in a Find the Conclusion question if it leans on
          outside knowledge or unstated assumptions. The conclusion must follow
          from the text alone.
        </MustKnow>

        <p>
          Also note: some tempting choices might be reasonable or even true in
          real life, yet still be wrong because the passage does not support
          them.
        </p>

        <MustKnow>
          A choice can sound sensible and still be incorrect if the stimulus
          doesn’t establish it. Truth in the real world is irrelevant; only
          support from the given statements matters.
        </MustKnow>

        <p>
          A helpful way to check a candidate conclusion is to imagine placing it
          after a{" "}
          <MathInline expr="\\therefore" ariaLabel="therefore" />
          . If the jump from the premises to that sentence requires new
          information, reject it.
        </p>

        <section aria-labelledby="ex-headache">
          <h3 id="ex-headache" className="sr-only">
            Warm-up example: Headaches
          </h3>

          <MCQExample
            number={1}
            prompt="The most common treatment for headaches is an over‑the‑counter pain reliever, such as ibuprofen or acetaminophen, and using either is usually effective. Yet a recent study found that a brief stretching and light‑exercise routine reduced headaches more effectively than either medication. Which conclusion is best supported?"
            options={[
              "Doctors advise certain patients to avoid acetaminophen due to side effects.",
              "Headaches frequently originate from psychological causes such as stress or anxiety.",
              "In most cases, people who cannot take painkillers because of adverse reactions can still alleviate headaches.",
            ]}
            correct="In most cases, people who cannot take painkillers because of adverse reactions can still alleviate headaches."
            solution={
              <>
                <p>
                  We need a conclusion that follows from the two facts:
                  painkillers usually work, and the exercise routine works even
                  better. The only choice that draws a supported inference
                  without introducing a new premise is the idea that people who
                  cannot take the meds will still, in most cases, be able to get
                  relief via the routine.
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    Choice A brings in new material about medical guidance and
                    side effects; the passage does not address physician
                    recommendations.
                  </li>
                  <li>
                    Choice B speculates about causes of headaches; the stimulus
                    discusses treatments and comparative effectiveness, not
                    etiology.
                  </li>
                  <li>
                    Choice C is supported: if meds usually help and the routine
                    is even more effective, then people unable to use meds still
                    generally have an effective path to relief.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-vesornia">
          <h3 id="ex-vesornia" className="sr-only">
            Practice example: Vesornia manufacturing
          </h3>

          <MCQExample
            number={2}
            prompt="Over the last twenty years, Vesornia’s manufacturing capacity fell by more than 70% as firms shifted production abroad, and 70% of its manufacturing jobs disappeared. New policies are expected to bring capacity back to its former level relatively quickly. However, most of the new plants will be far more automated than those that existed before the decline. If all of the above is true, which prediction is most strongly supported?"
            options={[
              "The number of manufacturing jobs in Vesornia is unlikely to return to its former level in the near term.",
              "Landing a job in a new Vesornian factory will be harder than before.",
              "Vesornia’s overall unemployment rate will stay roughly the same in the short to medium term.",
              "The new factories in Vesornia will produce different types of goods than the old factories did.",
              "The new factories in Vesornia will be more profitable for owners than the old factories were.",
            ]}
            correct="The number of manufacturing jobs in Vesornia is unlikely to return to its former level in the near term."
            solution={
              <>
                <p className="mb-2">
                  Premises:
                  <br />
                  1) Capacity dropped by 70% and 70% of manufacturing jobs were
                  lost.
                  <br />
                  2) Policy likely restores capacity to the old level.
                  <br />
                  3) New facilities will be much more automated.
                </p>
                <p className="mb-2">
                  Because capacity is projected to return while automation
                  increases, the same output will require fewer people. Thus,
                  the job count is unlikely to rebound to its former level soon
                  — making choice A the strongest conclusion supported by the
                  text.
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    B needs extra assumptions about hiring difficulty and labor
                    market competition — not given.
                  </li>
                  <li>
                    C talks about the overall unemployment rate, which depends
                    on many sectors beyond manufacturing — outside the scope.
                  </li>
                  <li>
                    D speculates about product mix, which the passage never
                    addresses.
                  </li>
                  <li>
                    E assumes effects of automation on profitability without any
                    data on costs, prices, or competition.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Find the Conclusion answers must be warranted solely by
          the passage. If a choice needs an extra premise, it’s out.
        </p>
      </article>
    </main>
  );
}