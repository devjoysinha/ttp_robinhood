import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? expr}
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: '12.6 "What Percent" Problems | Percent Word Problems',
  description:
    'Master “what percent” questions using two fast methods: equation setup and the (a/b)×100 template. Includes worked multiple‑choice examples and variable‑percent translations.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.6 “What Percent” Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Prompts that ask “what percent” can be phrased in more than one way, for example:
          “100 is what percent of 50?” and “What percent of 50 is 100?” Both are asking for the
          same thing: the percentage that compares one quantity to another.
        </p>

        <MustKnow>
          A reliable way to handle “what percent” is to replace the phrase with{" "}
          <KInline expr="x/100" ariaLabel="x over 100" /> and write an equation to solve for{" "}
          <KInline expr="x" />. This keeps the unknown directly in percent form.
        </MustKnow>

        <section aria-labelledby="method-1">
          <h3 id="method-1" className="sr-only">
            Method 1
          </h3>
          <p>
            Method 1: Model “what percent” with <KInline expr="x/100" /> and translate the sentence
            into an equation.
          </p>

          <MCQExample
            number={46}
            prompt="80 is what percent of 50?"
            options={["80%", "100%", "130%", "150%", "160%"]}
            correct="160%"
            solution={
              <>
                <p>
                  Let the unknown percent be <KInline expr="x" />. Then:
                </p>
                <KBlock
                  expr="80=\left(\frac{x}{100}\right)\cdot 50 \;\;\Rightarrow\;\; \frac{80}{50}=\frac{x}{100} \;\;\Rightarrow\;\; \frac{8}{5}=\frac{x}{100} \;\;\Rightarrow\;\; x=\frac{8}{5}\cdot 100=160"
                  ariaLabel="80 equals x over 100 times 50, so 80 over 50 equals x over 100, which simplifies to 8 over 5 equals x over 100, giving x equals 8 fifths times 100 equals 160"
                />
                <p>Therefore, the answer is 160%.</p>
              </>
            }
          />

          <MCQExample
            number={47}
            prompt="If p is 500% of q, and q is 400% of nonzero z, then z is what percent of p?"
            options={["80 percent", "50 percent", "20 percent", "10 percent", "5 percent"]}
            correct="5 percent"
            solution={
              <>
                <p>
                  Translate each statement:
                  <br />
                  <KInline expr="p=5q" ariaLabel="p equals five q" /> and{" "}
                  <KInline expr="q=4z" ariaLabel="q equals four z" />. So{" "}
                  <KInline expr="p=5\cdot 4z=20z" ariaLabel="p equals twenty z" />.
                </p>
                <p>
                  Then <KInline expr="\dfrac{z}{p}=\dfrac{z}{20z}=\dfrac{1}{20}=0.05=5\%" />.
                  Thus, z is 5% of p.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          A quick template for many problems is{" "}
          <KInline expr="\left(\dfrac{a}{b}\right)\times 100\%" ariaLabel="open paren a over b close paren times one hundred percent" />
          , where a is the “is” quantity and b is the “of” quantity.
        </MustKnow>

        <section aria-labelledby="method-2">
          <h3 id="method-2" className="sr-only">
            Method 2
          </h3>
          <p>
            Method 2: Compute the fraction and multiply by 100. For “A is what percent of B?”, use{" "}
            <KInline expr="\left(\dfrac{A}{B}\right)\cdot 100\%" ariaLabel="A over B times one hundred percent" />.
          </p>

          <MCQExample
            number={48}
            prompt="105 is what percent of 15?"
            options={[
              "70 percent",
              "90 percent",
              "170 percent",
              "190 percent",
              "700 percent",
            ]}
            correct="700 percent"
            solution={
              <>
                <KBlock
                  expr="\left(\dfrac{105}{15}\right)\cdot 100\% = 7\cdot 100\% = 700\%"
                  ariaLabel="one hundred five over fifteen times one hundred percent equals seven times one hundred percent equals seven hundred percent"
                />
                <p>So, 105 is 700% of 15.</p>
              </>
            }
          />

          <p>
            Be careful: the quotient alone is not the percent—multiply by 100 to get a percent.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <KInline expr="\dfrac{100}{50}=2" /> implies{" "}
              <KInline expr="2\times 100\%=200\%" />. So 100 is 200% of 50.
            </li>
            <li>
              <KInline expr="\dfrac{20}{80}=\dfrac{1}{4}=0.25" /> implies{" "}
              <KInline expr="0.25\times 100\%=25\%" />. So 20 is 25% of 80.
            </li>
          </ul>

          <MCQExample
            number={49}
            prompt="Company X’s 2009 revenue was $280 million and total expenses were $150 million, of which $80 million were fixed. Variable expenses were what percent of revenue?"
            options={[
              "0.0025 percent",
              "0.025 percent",
              "0.25 percent",
              "2.5 percent",
              "25 percent",
            ]}
            correct="25 percent"
            solution={
              <>
                <p>
                  Variable expenses = total − fixed = $150M − $80M = $70M. Then
                </p>
                <KBlock
                  expr="\left(\dfrac{70}{280}\right)\cdot 100\%=\left(\dfrac{1}{4}\right)\cdot 100\%=25\%"
                  ariaLabel="seventy over two eighty times one hundred percent equals one quarter times one hundred percent equals twenty five percent"
                />
              </>
            }
          />
        </section>

        <section aria-labelledby="variable-percents">
          <h3 id="variable-percents" className="text-xl font-semibold text-white">
            Variable Percents
          </h3>
          <p>
            Sentences with lettered percents translate the same way. For instance, “p percent of q
            equals r” becomes <KInline expr="\dfrac{p}{100}\cdot q=r" ariaLabel="p over 100 times q equals r" />.
            Similarly, “a percent of b equals c” is{" "}
            <KInline expr="\dfrac{a}{100}\cdot b=c" ariaLabel="a over 100 times b equals c" />.
          </p>

          <MCQExample
            number={50}
            prompt="If x percent of y equals z, then y is what percent of z?"
            options={["100x", "1,000x", "10,000x", "100/x", "10,000/x"]}
            correct="10,000/x"
            solution={
              <>
                <p>Start with the given:</p>
                <KBlock
                  expr="\dfrac{x}{100}\cdot y=z \;\;\Rightarrow\;\; y=\dfrac{100z}{x}"
                  ariaLabel="x over 100 times y equals z, therefore y equals 100 z over x"
                />
                <p>
                  The percent that y is of z equals{" "}
                  <KInline expr="\left(\dfrac{y}{z}\right)\cdot 100\%" />:
                </p>
                <KBlock
                  expr="\left(\dfrac{y}{z}\right)\cdot 100\%=\left(\dfrac{100z/x}{z}\right)\cdot 100\%=\left(\dfrac{100}{x}\right)\cdot 100\%=\dfrac{10{,}000}{x}\%"
                  ariaLabel="y over z times one hundred percent equals one hundred z over x divided by z times one hundred percent equals one hundred over x times one hundred percent equals ten thousand over x percent"
                />
                <p>So the answer is 10,000/x.</p>
              </>
            }
          />
        </section>

        <MustKnow>
          Summary: To find “what percent,” either set{" "}
          <KInline expr="x/100" /> and write an equation, or compute{" "}
          <KInline expr="\left(\dfrac{a}{b}\right)\times 100\%" /> with a = “is,” b = “of.” Always
          multiply by 100 to convert a ratio or decimal to a percent.
        </MustKnow>
      </article>
    </main>
  );
}