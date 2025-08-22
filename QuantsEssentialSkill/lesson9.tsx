import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '2.1.9 Reciprocals and "1 over a fraction" | Essential GMAT Quant Skills',
  description:
    "Master reciprocals and '1 over a fraction': what a reciprocal is, how to flip complex fractions, special cases, and why a number times its reciprocal equals 1. Includes five GMAT‑style practice questions with full explanations.",
};

function k(expr: string, displayMode = false) {
  return {
    __html: katex.renderToString(expr, {
      throwOnError: false,
      displayMode,
      output: "html",
      strict: "ignore",
      trust: true,
    }),
  };
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.9 Reciprocals and “1 over a fraction”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The reciprocal of a nonzero number is the value you get by placing 1 over that number.
          In other words, if a ≠ 0, then the reciprocal of a is
          <span
            className="mx-1 inline-block align-middle"
            dangerouslySetInnerHTML={k("\\frac{1}{a}")}
            aria-label="1 over a"
            role="img"
          />
          .
        </p>

        <div className="space-y-2">
          <p className="flex flex-wrap items-center gap-2">
            Example: the reciprocal of 5 is
            <span
              dangerouslySetInnerHTML={k("\\tfrac{1}{5}")}
              aria-label="1 over 5"
              role="img"
              className="inline-block align-middle"
            />
            ; the reciprocal of 8 is
            <span
              dangerouslySetInnerHTML={k("\\tfrac{1}{8}")}
              aria-label="1 over 8"
              role="img"
              className="inline-block align-middle"
            />
            .
          </p>
        </div>

        <p>
          When the “thing on the bottom” is itself a fraction, “1 over a fraction” simply flips that
          fraction. More formally, for nonzero a and b:
          <span
            className="block mt-2"
            dangerouslySetInnerHTML={k("\\frac{1}{\\tfrac{a}{b}}=\\tfrac{b}{a}", true)}
            aria-label="1 over a over b equals b over a"
            role="img"
          />
        </p>

        <div className="space-y-2">
          <p className="flex flex-wrap items-center gap-2">
            For instance,
            <span
              dangerouslySetInnerHTML={k("\\frac{1}{\\tfrac{1}{4}}=4")}
              aria-label="1 over one fourth equals 4"
              role="img"
              className="inline-block align-middle"
            />
            and
            <span
              dangerouslySetInnerHTML={k("\\frac{1}{\\tfrac{5}{16}}=\\tfrac{16}{5}")}
              aria-label="1 over five sixteenths equals sixteen fifths"
              role="img"
              className="inline-block align-middle"
            />
            .
          </p>
        </div>

        <MustKnow>
          The reciprocal of a nonzero number x is 1/x. If the expression is a fraction,
          1 divided by that fraction equals the fraction with its numerator and denominator swapped:
          1/(a/b) = b/a (a and b nonzero).
        </MustKnow>

        <p>Two useful special cases:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            The reciprocal of 1 is 1, and the reciprocal of −1 is −1:
            <span
              className="ml-2 inline-block align-middle"
              dangerouslySetInnerHTML={k("\\tfrac{1}{1}=1,\\quad \\tfrac{1}{-1}=-1")}
              aria-label="1 over 1 equals 1; 1 over negative 1 equals negative 1"
              role="img"
            />
            .
          </li>
          <li>
            0 has no reciprocal, since
            <span
              className="mx-1 inline-block align-middle"
              dangerouslySetInnerHTML={k("\\tfrac{1}{0}")}
              aria-label="1 over 0"
              role="img"
            />
            is undefined.
          </li>
        </ul>

        <MustKnow>
          Only nonzero numbers have reciprocals. Also, multiplying a number by its reciprocal always
          gives 1:
          <span
            className="ml-1 inline-block align-middle"
            dangerouslySetInnerHTML={k("x\\cdot \\tfrac{1}{x}=1\\quad (x\\neq 0)")}
            aria-label="x times 1 over x equals 1"
            role="img"
          />
          .
        </MustKnow>

        <section aria-labelledby="practice" className="space-y-8">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Quick Practice
          </h3>

          <MCQExample
            number={26}
            prompt={
              <>
                What is the product of the reciprocals of a, b, and{" "}
                <span
                  className="inline-block align-middle"
                  dangerouslySetInnerHTML={k("\\tfrac{1}{c}")}
                  aria-label="1 over c"
                  role="img"
                />
                ?
              </>
            }
            options={["abc", "ab/c", "ac/b", "c/(a+b)", "c/(ab)"]}
            correct="c/(ab)"
            solution={
              <>
                <p>
                  The reciprocals are
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{a},\\ \\tfrac{1}{b}")}
                    aria-label="1 over a, 1 over b"
                    role="img"
                  />
                  , and the reciprocal of
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{c}")}
                    aria-label="1 over c"
                    role="img"
                  />
                  is c. Multiply:
                </p>
                <p>
                  <span
                    className="inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{a}\\cdot \\tfrac{1}{b}\\cdot c=\\tfrac{c}{ab}")}
                    aria-label="1 over a times 1 over b times c equals c over ab"
                    role="img"
                  />
                  .
                </p>
              </>
            }
          />

          <MCQExample
            number={27}
            prompt={
              <>
                What is the sum of the reciprocal of 10 and the reciprocal of{" "}
                <span
                  className="inline-block align-middle"
                  dangerouslySetInnerHTML={k("\\tfrac{1}{20}")}
                  aria-label="1 over 20"
                  role="img"
                />
                ?
              </>
            }
            options={["3/20", "20/3", "201/20", "201/10", "30"]}
            correct="201/10"
            solution={
              <>
                <p>
                  The reciprocal of 10 is
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{10}")}
                    aria-label="1 over 10"
                    role="img"
                  />
                  , and the reciprocal of
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{20}")}
                    aria-label="1 over 20"
                    role="img"
                  />
                  is 20. So the sum is
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{10}+20=\\tfrac{1+200}{10}=\\tfrac{201}{10}")}
                    aria-label="1 over 10 plus 20 equals 201 over 10"
                    role="img"
                  />
                  .
                </p>
              </>
            }
          />

          <MCQExample
            number={28}
            prompt={
              <>
                If x is nonzero and the reciprocal of x equals x, which statement must be true?
                <br />
                I. x = 1
                <br />
                II. x = −1
                <br />
                III. x is an integer
              </>
            }
            options={["I only", "II only", "III only", "I and II", "I, II, and III"]}
            correct="III only"
            solution={
              <>
                <p>
                  If
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{x}=x")}
                    aria-label="1 over x equals x"
                    role="img"
                  />
                  , then
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("x^2=1")}
                    aria-label="x squared equals 1"
                    role="img"
                  />
                  , so x = 1 or x = −1. Either way, x is an integer. Thus only statement III must be
                  true.
                </p>
              </>
            }
          />

          <MCQExample
            number={29}
            prompt="Which of the following numbers does not have a reciprocal?"
            options={["0", "1/2", "3", "4/5", "6"]}
            correct="0"
            solution={
              <>
                <p>
                  Only nonzero values have reciprocals. Because
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{0}")}
                    aria-label="1 over 0"
                    role="img"
                  />
                  is undefined, 0 is the only choice without a reciprocal.
                </p>
              </>
            }
          />

          <MCQExample
            number={30}
            prompt={
              <>
                In which of the following pairs are the two numbers reciprocals of one another?
                <br />
                I. −19/171 and −171/19
                <br />
                II. 1/(9^10) and (9^9)/(1/9)
                <br />
                III. −2 and 1/2
              </>
            }
            options={["I only", "I and II", "II only", "I and III", "I, II, and III"]}
            correct="I and II"
            solution={
              <>
                <p>
                  Two numbers are reciprocals if their product is 1.
                  <br />
                  I:
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\left(-\\tfrac{19}{171}\\right)\\left(-\\tfrac{171}{19}\\right)=1")}
                    aria-label="negative 19 over 171 times negative 171 over 19 equals 1"
                    role="img"
                  />
                  .
                </p>
                <p>
                  II:
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("\\tfrac{1}{9^{10}}\\cdot \\tfrac{9^{9}}{\\tfrac{1}{9}}=\\tfrac{1}{9^{10}}\\cdot 9^{10}=1")}
                    aria-label="1 over 9 to the 10 times 9 to the 9 over 1 over 9 equals 1"
                    role="img"
                  />
                  .
                </p>
                <p>
                  III:
                  <span
                    className="mx-1 inline-block align-middle"
                    dangerouslySetInnerHTML={k("(-2)\\cdot \\tfrac{1}{2}=-1")}
                    aria-label="negative 2 times one half equals negative 1"
                    role="img"
                  />
                  , not 1. Therefore, pairs I and II only.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap" className="space-y-3">
          <h3 id="wrap" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              For nonzero x, reciprocal(x) =
              <span
                className="mx-1 inline-block align-middle"
                dangerouslySetInnerHTML={k("\\tfrac{1}{x}")}
                aria-label="1 over x"
                role="img"
              />
              .
            </li>
            <li>
              “1 over a fraction” flips it:
              <span
                className="mx-1 inline-block align-middle"
                dangerouslySetInnerHTML={k("\\tfrac{1}{\\tfrac{a}{b}}=\\tfrac{b}{a}")}
                aria-label="1 over a over b equals b over a"
                role="img"
              />
              .
            </li>
            <li>
              x times its reciprocal is 1:
              <span
                className="mx-1 inline-block align-middle"
                dangerouslySetInnerHTML={k("x\\cdot \\tfrac{1}{x}=1")}
                aria-label="x times 1 over x equals 1"
                role="img"
              />
              .
            </li>
            <li>0 has no reciprocal; 1 and −1 are their own reciprocals.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}