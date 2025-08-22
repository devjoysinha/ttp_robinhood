import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "10.8.1 Build a Group’s Combined Rate from Three Pairwise Rates | Work Problems",
  description:
    "A fast method for finding the all‑together rate of three workers when you know their pairwise times. Add the equations, divide by 2, and convert rate to time. Includes one quick MCQ and one Data Sufficiency drill with full reasoning.",
};

// Small helper to render KaTeX on the server for accessible math
function K({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  if (block) {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className="overflow-x-auto py-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className="inline-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.8.1 Build a Combined Rate from Three Pairwise Rates
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many work questions you’re told how long it takes pairs of workers to finish a job together, and you’re asked how long all three would take as a team. Substituting individual rates can get messy. There’s a cleaner approach that exploits symmetry in the pairwise sums.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Key idea for three workers (A, B, C):</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Let the individual rates be r_A, r_B, r_C (jobs per hour). If you know the pairwise times, convert each to a rate and write:
                <div className="mt-2">
                  <K expr="r_A + r_B = \text{pair}_{AB}" ariaLabel="r A plus r B equals pair AB" block />
                  <K expr="r_B + r_C = \text{pair}_{BC}" ariaLabel="r B plus r C equals pair BC" block />
                  <K expr="r_A + r_C = \text{pair}_{AC}" ariaLabel="r A plus r C equals pair AC" block />
                </div>
              </li>
              <li>
                Add the three equations. Each single rate appears twice:
                <div className="mt-2">
                  <K
                    expr="2(r_A + r_B + r_C) = \text{pair}_{AB} + \text{pair}_{BC} + \text{pair}_{AC}"
                    ariaLabel="Two times the sum of r A plus r B plus r C equals the sum of the three pairwise rates"
                    block
                  />
                </div>
              </li>
              <li>
                Divide by 2 to get the all‑together rate:
                <div className="mt-2">
                  <K
                    expr="r_{\text{all}} = r_A + r_B + r_C = \dfrac{\text{pair}_{AB} + \text{pair}_{BC} + \text{pair}_{AC}}{2}"
                    ariaLabel="All-together rate equals the sum of the three pairwise rates divided by two"
                    block
                  />
                </div>
                Finally, convert rate to time using time = 1 / rate.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑Example: Three painters
          </h3>
          <p>
            Workers X and Y finish a house in 6 hours, Y and Z in 9 hours, and X and Z in 10 hours. How long for all three together?
          </p>
          <p>
            Pairwise rates:
          </p>
          <div className="space-y-1">
            <K expr="r_X + r_Y = \dfrac{1}{6}" ariaLabel="r X plus r Y equals 1 over 6" block />
            <K expr="r_Y + r_Z = \dfrac{1}{9}" ariaLabel="r Y plus r Z equals 1 over 9" block />
            <K expr="r_X + r_Z = \dfrac{1}{10}" ariaLabel="r X plus r Z equals 1 over 10" block />
          </div>
          <p>Add them and divide by 2:</p>
          <div className="space-y-2">
            <K
              expr="2(r_X + r_Y + r_Z) = \dfrac{1}{6} + \dfrac{1}{9} + \dfrac{1}{10} = \dfrac{34}{90}"
              ariaLabel="Two times the sum equals 1/6 plus 1/9 plus 1/10 equals 34/90"
              block
            />
            <K
              expr="r_{\text{all}} = \dfrac{17}{90}\ \text{house/hour}"
              ariaLabel="All together rate equals 17 over 90 house per hour"
              block
            />
            <K
              expr="t_{\text{all}} = \dfrac{1}{r_{\text{all}}} = \dfrac{90}{17}\ \text{hours} \approx 5.29\ \text{hours}"
              ariaLabel="All together time equals 1 over that rate equals 90 over 17 hours approximately 5.29 hours"
              block
            />
          </div>
        </section>

        <ExampleCard
          number={16}
          title="Data Sufficiency — Three machines"
          statements={[
            "Machines E, F, and G complete the same order. Together, E and F take 5 hours.",
            "1) Together, F and G finish in 6 hours.",
            "2) Together, E and G finish in 10 hours.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let rates be <K expr="1/e" ariaLabel="one over e" /> for E, <K expr="1/f" ariaLabel="one over f" /> for F, and <K expr="1/g" ariaLabel="one over g" /> for G (orders per hour).
                The question asks for the all‑together time, i.e., the reciprocal of <K expr="1/e+1/f+1/g" ariaLabel="one over e plus one over f plus one over g" />.
              </p>
              <p>
                From the stem: <K expr="\dfrac{1}{e} + \dfrac{1}{f} = \dfrac{1}{5}" ariaLabel="one over e plus one over f equals one over five" />.
              </p>
              <p>
                Statement (1): <K expr="\dfrac{1}{f} + \dfrac{1}{g} = \dfrac{1}{6}" ariaLabel="one over f plus one over g equals one over six" />. Alone, that and the stem are not enough to isolate <K expr="\dfrac{1}{e} + \dfrac{1}{f} + \dfrac{1}{g}" ariaLabel="sum of the three rates" />.
              </p>
              <p>
                Statement (2): <K expr="\dfrac{1}{e} + \dfrac{1}{g} = \dfrac{1}{10}" ariaLabel="one over e plus one over g equals one over ten" />. Alone, still insufficient.
              </p>
              <p>
                Together, add the three pairwise rate equations and divide by 2:
              </p>
              <div className="space-y-1">
                <K
                  expr="2\!\left(\dfrac{1}{e}+\dfrac{1}{f}+\dfrac{1}{g}\right)=\dfrac{1}{5}+\dfrac{1}{6}+\dfrac{1}{10}=\dfrac{14}{30}"
                  ariaLabel="Two times the sum equals 1/5 plus 1/6 plus 1/10 equals 14 over 30"
                  block
                />
                <K
                  expr="\dfrac{1}{e}+\dfrac{1}{f}+\dfrac{1}{g}=\dfrac{7}{30}\ \text{order/hour}"
                  ariaLabel="Sum equals 7 over 30 order per hour"
                  block
                />
                <K
                  expr="t_{\text{all}}=\dfrac{30}{7}\ \text{hours}"
                  ariaLabel="All together time equals 30 over 7 hours"
                  block
                />
              </div>
              <p>Hence, both statements together are sufficient; each alone is not. Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt="Robots A and B finish a job in 2 hours, A and C in 3 hours, and B and C in 4 hours. Working together at constant rates, approximately how long will A, B, and C take?"
          options={["2 hours", "1.8 hours", "1 hour", "0.9 hours", "0.50 hours"]}
          correct="1.8 hours"
          solution={
            <>
              <p>
                Convert each pairwise time to a rate (jobs/hour):
                <K expr="r_A+r_B=\dfrac{1}{2},\ r_A+r_C=\dfrac{1}{3},\ r_B+r_C=\dfrac{1}{4}" ariaLabel="pairwise rates for A and B, A and C, B and C" />
                .
              </p>
              <p>
                Add and divide by 2:
              </p>
              <div className="space-y-1">
                <K
                  expr="2(r_A+r_B+r_C)=\dfrac{1}{2}+\dfrac{1}{3}+\dfrac{1}{4}=\dfrac{13}{12}"
                  ariaLabel="Two times the sum equals one half plus one third plus one quarter equals 13 over 12"
                  block
                />
                <K
                  expr="r_{\text{all}}=\dfrac{13}{24}\ \text{job/hour}\quad\Rightarrow\quad t_{\text{all}}=\dfrac{24}{13}\approx1.846\ \text{hours}"
                  ariaLabel="All together rate equals 13 over 24 so time is 24 over 13 about 1 point 846 hours"
                  block
                />
              </div>
              <p>Closest option: 1.8 hours.</p>
            </>
          }
        />

        <p>
          Bottom line: when you have the three pairwise times for a group of three, convert to rates, sum the three equations, divide by 2, and then invert to get time. It’s quick, reliable, and avoids solving for each person’s individual rate.
        </p>
      </article>
    </main>
  );
}