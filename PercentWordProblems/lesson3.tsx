import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: `12.4 "Percent of" Problems | Percent Word Problems`,
  description:
    'Translate the phrase "percent of" into equations quickly and accurately. Includes key translations, one Data Sufficiency drill, and two quick problem‑solving checks with full explanations.',
};

// Server-safe KaTeX helper
function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: display,
  });
  if (display) {
    return (
      <div
        aria-label={ariaLabel}
        role="img"
        className="overflow-x-auto py-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel}
      role="img"
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
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.4 “Percent of” Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Whenever you see the phrase “percent of,” translate it to a
          multiplication: the percent as a fraction times the given value. This
          simple translation turns English phrases into clean equations you can
          solve.
        </p>

        <MustKnow>
          “Percent of” means multiply. Write the percent as a fraction over 100,
          then multiply by the referenced quantity.
        </MustKnow>

        <section aria-labelledby="key-translations" className="space-y-2">
          <h3 id="key-translations" className="text-white font-semibold">
            Quick translations
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              5 percent of z:{" "}
              <K expr={`\\tfrac{5}{100}\\,z=\\tfrac{z}{20}`} ariaLabel="five percent of z equals z over 20" />
            </li>
            <li>
              36 percent of k:{" "}
              <K expr={`\\tfrac{36}{100}\\,k=\\tfrac{9}{25}\\,k`} ariaLabel="thirty-six percent of k equals nine twenty-fifths k" />
            </li>
            <li>
              400 percent of y: <K expr={`\\tfrac{400}{100}\\,y=4y`} ariaLabel="four hundred percent of y equals 4y" />
            </li>
            <li>
              m percent of p:{" "}
              <K expr={`\\tfrac{m}{100}\\,p=\\tfrac{mp}{100}`} ariaLabel="m percent of p equals m p over 100" />
            </li>
          </ul>
        </section>

        <MustKnow>
          Percent literally means “per 100.” Dividing by 100 is the same as
          multiplying by <K expr={`\\tfrac{1}{100}`} ariaLabel="one over one hundred" />.
        </MustKnow>

        <section aria-labelledby="mcq-1" className="space-y-3">
          <MCQExample
            number={3}
            prompt="If 20 percent of p equals 40 percent of q, what is q in terms of p?"
            options={["4p", "2p", "p", "p/2", "p/4"]}
            correct="p/2"
            solution={
              <>
                <p>Translate directly:</p>
                <p>
                  <K
                    expr={`\\tfrac{20}{100}p=\\tfrac{40}{100}q`}
                    ariaLabel="twenty over one hundred times p equals forty over one hundred times q"
                    display
                  />
                </p>
                <p>
                  Multiply through by 100 and solve:
                  <K
                    expr={`20p=40q\\;\\Rightarrow\\;q=\\tfrac{20}{40}p=\\tfrac{1}{2}p`}
                    ariaLabel="twenty p equals forty q implies q equals one half p"
                    display
                  />
                  So, q = p/2.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ds-example" className="space-y-3">
          <ExampleCard
            number={2}
            title='“What percent?” via linked years (Data Sufficiency)'
            statements={[
              "Question: A gold dealer’s income in 1858 was what percent of his income in 1857?",
              "1) His income in 1857 was 20 percent of his income in 1856.",
              "2) His income in 1858 was 60 percent of his income in 1856.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  Let x be the 1858 income and y be the 1857 income. The
                  question asks for the percent x is of y, i.e.{" "}
                  <K expr={`\\tfrac{x}{y}\\times 100\\%`} ariaLabel="x over y times one hundred percent" />.
                </p>

                <p>
                  Statement (1): If z is the 1856 income, then{" "}
                  <K expr={`y=\\tfrac{20}{100}z=\\tfrac{1}{5}z`} ariaLabel="y equals one fifth z" />.
                  This ties y to z but says nothing about x. Not sufficient.
                </p>

                <p>
                  Statement (2): With the same z,{" "}
                  <K expr={`x=\\tfrac{60}{100}z=\\tfrac{3}{5}z`} ariaLabel="x equals three fifths z" />.
                  This ties x to z but says nothing about y. Not sufficient.
                </p>

                <p>
                  Together:{" "}
                  <K
                    expr={`x=\\tfrac{3}{5}z\\quad\\text{and}\\quad y=\\tfrac{1}{5}z`}
                    ariaLabel="x equals three fifths z and y equals one fifth z"
                    display
                  />
                  Hence{" "}
                  <K
                    expr={`\\tfrac{x}{y}=\\tfrac{\\tfrac{3}{5}z}{\\tfrac{1}{5}z}=3`}
                    ariaLabel="x over y equals three"
                    display
                  />
                  so x is 300% of y. The two statements combined are sufficient.
                </p>
                <p>Answer: C.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-2" className="space-y-3">
          <MCQExample
            number={4}
            prompt="One million percent of y equals which of the following?"
            options={["1,000,000y", "100,000y", "10,000y", "1,000y", "100y"]}
            correct="10,000y"
            solution={
              <>
                <p>
                  One million percent is{" "}
                  <K expr={`\\tfrac{1{,}000{,}000}{100}=10{,}000`} ariaLabel="one million over one hundred equals ten thousand" />.
                  Thus, the value is{" "}
                  <K expr={`10{,}000\\,y`} ariaLabel="ten thousand y" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="mcq-3" className="space-y-3">
          <MCQExample
            number={5}
            prompt="What is one one‑thousandth percent of z?"
            options={["z/100,000", "z/10,000", "z/1,000", "z/100", "z/10"]}
            correct="z/100,000"
            solution={
              <>
                <p>
                  “One one‑thousandth percent” is{" "}
                  <K expr={`\\tfrac{1}{1000}\\%`} ariaLabel="one over one thousand percent" />{" "}
                  which equals{" "}
                  <K
                    expr={`\\tfrac{1}{1000}\\times\\tfrac{1}{100}=\\tfrac{1}{100{,}000}`}
                    ariaLabel="one over one thousand times one over one hundred equals one over one hundred thousand"
                  />
                  . Multiplying by z gives{" "}
                  <K expr={`\\tfrac{z}{100{,}000}`} ariaLabel="z over one hundred thousand" />.
                </p>
              </>
            }
          />
        </section>

        <p>
          Big picture: replace “percent of” with “multiply by a fraction over
          100.” Doing so makes translation immediate and prevents common errors.
        </p>
      </article>
    </main>
  );
}