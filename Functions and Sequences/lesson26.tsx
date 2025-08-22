import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.23.1 Telescoping Sums of Sequences | Functions & Sequences",
  description:
    "Learn to sum consecutive terms in telescoping sequences by cancellation. Includes a guided walkthrough and two multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.23.1 Summing Consecutive Terms by Cancellation (Telescoping Sums)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When the terms of a sequence are added in order, many problems become
          easy if the sum “telescopes,” meaning intermediate pieces cancel and
          only a few boundary terms survive. Your first step is to check whether
          the sum repeats in cycles; if not, look for a telescoping structure.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Decide first: repeating pattern or not. For repeating sequences,
              apply the period-based strategy; for nonrepeating, look for
              cancellation.
            </li>
            <li>
              Write terms in a form that exposes cancellation. Avoid simplifying
              too early—unsimplified differences often make the telescoping
              crystal clear.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="walkthrough">
          <h3
            id="walkthrough"
            className="text-xl font-semibold text-white mt-8"
          >
            Quick Walkthrough: a Classic Telescoping Sum
          </h3>
          <p>
            Suppose the sequence is defined by{" "}
            <TeX math={"a_n=\\frac{1}{n}-\\frac{1}{n+1}"} /> for integers{" "}
            <TeX math={"n\\ge 1"} />. What is the sum of the first 50 terms?
          </p>
          <p>
            List the first few terms without simplifying each difference:
          </p>
          <div className="rounded-md bg-slate-800/50 p-3">
            <TeX
              block
              math={
                "a_1=\\frac{1}{1}-\\frac{1}{2},\\; a_2=\\frac{1}{2}-\\frac{1}{3},\\; a_3=\\frac{1}{3}-\\frac{1}{4},\\; \\dots"
              }
            />
          </div>
          <p>Also write the last few terms:</p>
          <div className="rounded-md bg-slate-800/50 p-3">
            <TeX
              block
              math={
                "a_{48}=\\frac{1}{48}-\\frac{1}{49},\\; a_{49}=\\frac{1}{49}-\\frac{1}{50},\\; a_{50}=\\frac{1}{50}-\\frac{1}{51}"
              }
            />
          </div>
          <p>Now add everything together:</p>
          <div className="rounded-md bg-slate-800/50 p-3">
            <TeX
              block
              math={
                "\\sum_{n=1}^{50} a_n = \\left(\\frac{1}{1}-\\frac{1}{2}\\right)+\\left(\\frac{1}{2}-\\frac{1}{3}\\right)+\\left(\\frac{1}{3}-\\frac{1}{4}\\right)+\\cdots+\\left(\\frac{1}{50}-\\frac{1}{51}\\right)"
              }
            />
          </div>
          <p>
            The middle fractions pair off and cancel in sequence:{" "}
            <TeX math={"-\\tfrac12+\\tfrac12"} />,{" "}
            <TeX math={"-\\tfrac13+\\tfrac13"} />, and so on. Only the very
            first and the very last terms remain:
          </p>
          <div className="rounded-md bg-slate-800/50 p-3">
            <TeX block math={"= 1 - \\frac{1}{51} = \\frac{50}{51}"} />
          </div>

          <MustKnow>
            A telescoping sum collapses to its endpoints. Once you spot the
            structure, focus on the first positive piece and the last negative
            piece; everything in the middle cancels.
          </MustKnow>
        </section>

        <MCQExample
          number={58}
          prompt="The sequence S has terms t_n = 1/n − 1/(n+2) for n ≥ 1. What is the sum of the first 8 terms?"
          options={["71/90", "113/90", "58/45", "71/45", "3/2"]}
          correct="58/45"
          solution={
            <>
              <p>
                Use the identity{" "}
                <TeX math={"\\tfrac{1}{n}-\\tfrac{1}{n+2}"} /> which naturally
                telescopes in blocks of two steps. Write out the first eight
                terms without simplifying too early:
              </p>
              <div className="rounded-md bg-slate-800/50 p-3">
                <TeX
                  block
                  math={
                    "\\begin{aligned}\n" +
                    "t_1&=\\frac{1}{1}-\\frac{1}{3},\\quad t_2=\\frac{1}{2}-\\frac{1}{4},\\quad t_3=\\frac{1}{3}-\\frac{1}{5},\\quad t_4=\\frac{1}{4}-\\frac{1}{6},\\\\\n" +
                    "t_5&=\\frac{1}{5}-\\frac{1}{7},\\quad t_6=\\frac{1}{6}-\\frac{1}{8},\\quad t_7=\\frac{1}{7}-\\frac{1}{9},\\quad t_8=\\frac{1}{8}-\\frac{1}{10}.\n" +
                    "\\end{aligned}"
                  }
                />
              </div>
              <p>
                Now add. Every negative term from one line cancels with a
                positive term two lines later. What’s left is:
              </p>
              <div className="rounded-md bg-slate-800/50 p-3">
                <TeX
                  block
                  math={
                    "\\left(\\frac11+\\frac12\\right)-\\left(\\frac19+\\frac{1}{10}\\right)=1+\\frac12-\\frac19-\\frac{1}{10}"
                  }
                />
              </div>
              <p>
                With denominator 90, the sum is{" "}
                <TeX math={"\\tfrac{90}{90}+\\tfrac{45}{90}-\\tfrac{10}{90}-\\tfrac{9}{90}=\\tfrac{116}{90}=\\tfrac{58}{45}."} />
              </p>
            </>
          }
        />

        <MCQExample
          number={59}
          prompt="For n ≥ 1, t_n = 2/[n(n+2)]. Using 2/[n(n+2)] = 1/n − 1/(n+2), evaluate 2/(5·7) + 2/(6·8) + … + 2/(23·25)."
          options={["43/200", "11/50", "9/40", "57/200", "3/10"]}
          correct="57/200"
          solution={
            <>
              <p>
                Since{" "}
                <TeX math={"\\dfrac{2}{n(n+2)} = \\dfrac{1}{n}-\\dfrac{1}{n+2}"} />
                , the sum from <TeX math={"n=5"} /> to <TeX math={"23"} /> is a
                telescoping chain:
              </p>
              <div className="rounded-md bg-slate-800/50 p-3">
                <TeX
                  block
                  math={
                    "\\Big(\\tfrac15-\\tfrac17\\Big)+\\Big(\\tfrac16-\\tfrac18\\Big)+\\Big(\\tfrac17-\\tfrac19\\Big)+\\cdots+\\Big(\\tfrac1{23}-\\tfrac1{25}\\Big)"
                  }
                />
              </div>
              <p>
                Everything cancels except the first two positive parts and the
                last two negative parts:
              </p>
              <div className="rounded-md bg-slate-800/50 p-3">
                <TeX block math={"\\tfrac15+\\tfrac16-\\tfrac1{24}-\\tfrac1{25}"} />
              </div>
              <p>
                Compute:{" "}
                <TeX math={"\\tfrac15-\\tfrac1{25}=\\tfrac4{25}"} /> and{" "}
                <TeX math={"\\tfrac16-\\tfrac1{24}=\\tfrac3{24}=\\tfrac18"} />.
                With denominator 200:
              </p>
              <div className="rounded-md bg-slate-800/50 p-3">
                <TeX
                  block
                  math={
                    "\\tfrac4{25}+\\tfrac18 = \\tfrac{32}{200}+\\tfrac{25}{200}=\\tfrac{57}{200}."
                  }
                />
              </div>
            </>
          }
        />

        <section aria-labelledby="wrapup">
          <h3 id="wrapup" className="text-xl font-semibold text-white mt-6">
            Takeaways
          </h3>
          <ul className="list-disc pl-5">
            <li>
              If the sum is nonrepeating and each term is a difference of two
              simple fractions, try writing a few early and late terms to reveal
              the pattern.
            </li>
            <li>
              In a true telescoping sum, nearly all interior terms disappear.
              Focus on the endpoints to finish quickly and accurately.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}