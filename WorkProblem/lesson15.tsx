import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.10 Relative-Rate Work Problems | GMAT Work",
  description:
    "Master relative-rate work problems: multiples of a rate, faster/slower by an amount, and percent/time comparisons. Includes one MCQ and two Data Sufficiency drills with step-by-step reasoning.",
};

// Lightweight KaTeX renderer (server-safe)
function K({ expr, display = false }: { expr: string; display?: boolean }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={expr}
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
          10.10 Relative-Rate Work Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many multi‑worker scenarios, one worker’s speed is described in relation
          to another’s. These “relative‑rate” prompts are easiest when you translate
          the language into equations using the core relationships{" "}
          <K expr="W = R \cdot T" /> and <K expr="R = \frac{1}{T}" /> for a single job
          of size <K expr="W=1" />.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Three common relative‑rate patterns:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Multiples of a rate: “A is k times as fast as B” →{" "}
                <K expr="r_A = k \, r_B" />.
              </li>
              <li>
                Faster/slower by an amount: “A is d jobs/hr faster than B” →{" "}
                <K expr="r_A = r_B + d" />.
              </li>
              <li>
                Percent or fractional time comparisons: “A needs p% less time than B”
                → <K expr="T_A = (1 - \frac{p}{100})\, T_B" />, so{" "}
                <K expr="\frac{r_A}{r_B} = \frac{T_B}{T_A} = \frac{1}{1 - \frac{p}{100}}" />.
              </li>
            </ul>
            <p className="mt-3">
              Strategy: write what the words say, convert any time comparison to a rate
              comparison, then add rates for “working together” problems:{" "}
              <K expr="r_{\text{together}} = r_1 + r_2 (+ \, r_3 + \cdots)" />. If the job size
              is one unit, time together is <K expr="T_{\text{together}} = \frac{1}{r_{\text{together}}}" />.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="patterns-heading" className="space-y-3">
          <h3 id="patterns-heading" className="text-xl font-semibold text-white">
            Translating the wording
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              “A is twice as fast as B” → <K expr="r_A = 2r_B" />.
            </li>
            <li>
              “A is 0.2 jobs/hr faster than B” → <K expr="r_A = r_B + 0.2" />.
            </li>
            <li>
              “A finishes in 20% less time than B” →{" "}
              <K expr="T_A = 0.8\,T_B \;\Rightarrow\; r_A = \frac{1}{0.8}r_B = 1.25\,r_B" />.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt="Worker A is twice as fast as Worker B. Together, they complete a job in 6 hours. How many hours would B need to complete the job alone?"
          options={["9", "12", "18", "24", "27"]}
          correct="18"
          solution={
            <>
              <p>
                Let <K expr="r_B" /> be B’s rate, so <K expr="r_A = 2r_B" />. Working together,
                <K expr="r_A + r_B = \frac{1}{6}" />. Thus <K expr="3r_B = \frac{1}{6}" /> and{" "}
                <K expr="r_B = \frac{1}{18}" /> job/hour. Therefore B’s time is{" "}
                <K expr="T_B = \frac{1}{r_B} = 18" /> hours.
              </p>
            </>
          }
        />

        <p>
          Don’t assume the split between workers is fixed unless it’s implied by the
          wording. Always anchor your work to the equations that the language gives you.
        </p>

        <ExampleCard
          number={2}
          title="Relative rates with an additive difference (Data Sufficiency)"
          statements={[
            "Two machines, A and B, each can complete the job alone at constant rates. Is A’s time less than 8 hours?",
            "1) A works faster than B by 1/12 job per hour.",
            "2) Together, A and B finish the job in 3 hours.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let <K expr="r_A" /> and <K expr="r_B" /> be the individual rates. We are asked
                whether <K expr="T_A &lt; 8" />, i.e., whether{" "}
                <K expr="r_A &gt; \tfrac{1}{8}" />.
              </p>
              <p>
                Statement (1): <K expr="r_A = r_B + \tfrac{1}{12}" />. Without a second equation,
                the pair <K expr="(r_A, r_B)" /> is not fixed. Not sufficient.
              </p>
              <p>
                Statement (2): <K expr="r_A + r_B = \tfrac{1}{3}" />. The rates could be split many
                ways; <K expr="r_A" /> is unknown. Not sufficient.
              </p>
              <p>
                Together: Solve the system
                {" "}
                <K expr="\begin{cases} r_A = r_B + \tfrac{1}{12} \\ r_A + r_B = \tfrac{1}{3} \end{cases}" display />
                Substituting, <K expr="2r_B + \tfrac{1}{12} = \tfrac{1}{3}" /> gives{" "}
                <K expr="r_B = \tfrac{1}{8}" /> and <K expr="r_A = \tfrac{5}{24}" />. Then{" "}
                <K expr="T_A = \tfrac{1}{r_A} = \tfrac{24}{5} = 4.8" /> hours, which is less than 8.
                Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Percent‑time comparison (Data Sufficiency)"
          statements={[
            "Machines M and N each can complete the job alone at constant rates. Is M’s time less than 6 hours?",
            "1) M works 50% faster than N, and together they finish in 4 hours.",
            "2) N alone can finish the job in 9 hours.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                “M works 50% faster than N” means <K expr="r_M = 1.5\,r_N" />.
              </p>
              <p>
                Statement (1): <K expr="r_M + r_N = \tfrac{1}{4}" /> and{" "}
                <K expr="r_M = 1.5\,r_N" />. Hence <K expr="2.5\,r_N = \tfrac{1}{4}" /> so{" "}
                <K expr="r_N = \tfrac{1}{10}" /> and <K expr="r_M = \tfrac{3}{20}" />. Then{" "}
                <K expr="T_M = \tfrac{1}{r_M} = \tfrac{20}{3} \approx 6.67" /> hours, which is
                not less than 6. We can answer the question definitively (No). Sufficient.
              </p>
              <p>
                Statement (2): Knowing only <K expr="T_N = 9" /> gives{" "}
                <K expr="r_N = \tfrac{1}{9}" />, but we don’t know how M compares to N. Not sufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up-heading" className="space-y-2">
          <h3 id="wrap-up-heading" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Relative‑rate prompts are about translation, not tricks. Convert the words
            to equations, use <K expr="W = R \cdot T" />, flip time statements into rate
            statements when needed, and add rates for “together” scenarios. Once your
            equations are set, the algebra is usually quick.
          </p>
        </section>
      </article>
    </main>
  );
}