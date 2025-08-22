import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2.5 Word Problems with Variables in the Answer Choices | Algebra",
  description:
    "Two reliable methods for problems whose answers are algebraic expressions: (1) translate words into equations, (2) test friendly numbers. Includes four practice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2.5 Word Problems with Variables in the Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes a word problem asks for an expression rather than a single
          number. In these cases, the correct choice must represent the desired
          quantity for all legal values of the variables in the prompt.
        </p>

        <p>
          There are two dependable ways to tackle these: translate the story
          directly into equations, or plug in easy numbers and compare results.
        </p>

        <MustKnow title="Algebraic translation: the default approach">
          <ul className="list-disc pl-5">
            <li>Define a variable for the quantity you must find.</li>
            <li>Turn each statement into an equation (or a system).</li>
            <li>Solve symbolically for the target variable.</li>
          </ul>
        </MustKnow>

        <MustKnow title="Testing numbers: a powerful fallback">
          <ul className="list-disc pl-5">
            <li>Assign simple, valid values to the variables in the stem.</li>
            <li>Compute the requested quantity using those values.</li>
            <li>
              Substitute the same values into each answer choice and keep only
              the match. If more than one remains, try a different set of
              values.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Warm‑up mini‑example
          </h3>

          <MCQExample
            number={1}
            prompt="Fiona owns T batteries, of which A are alkaline. Which expression gives the number of non‑alkaline batteries?"
            options={["T × A", "A + T", "A − T", "T^A", "T − A"]}
            correct="T − A"
            solution={
              <>
                <p className="mb-2 font-semibold text-white">
                  Method 1: Translate to an equation
                </p>
                <p>
                  Total = alkaline + non‑alkaline, so{" "}
                  <InlineMath math={"T = A + N"} />. Solving for{" "}
                  <InlineMath math={"N"} /> gives{" "}
                  <InlineMath math={"N = T - A"} />. Thus the expression is{" "}
                  <InlineMath math={"T - A"} />.
                </p>

                <p className="mt-4 mb-2 font-semibold text-white">
                  Method 2: Test numbers (sanity check)
                </p>
                <p>
                  Let <InlineMath math={"T = 7"} /> and{" "}
                  <InlineMath math={"A = 2"} />. Then non‑alkaline batteries ={" "}
                  <InlineMath math={"7 - 2 = 5"} />. Only{" "}
                  <InlineMath math={"T - A"} /> also evaluates to 5 with those
                  values.
                </p>
              </>
            }
          />
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="example-7">
          <h3 id="example-7" className="text-xl font-semibold text-white">
            Example 7
          </h3>
          <MCQExample
            number={7}
            prompt="Zara has z cousins, and Fez has f cousins. Together with Gabe, they have t cousins total. In terms of z, f, and t, how many cousins does Gabe have?"
            options={[
              "z + f + t",
              "z + f − t",
              "t − f + z",
              "t − f − z",
              "z − t − f",
            ]}
            correct="t − f − z"
            solution={
              <>
                <p>
                  If Gabe has <InlineMath math={"g"} />, then{" "}
                  <InlineMath math={"z + f + g = t"} />. Solving,{" "}
                  <InlineMath math={"g = t - z - f"} />, which is the same as{" "}
                  <InlineMath math={"t - f - z"} />.
                </p>

                <p className="mt-3">
                  Numbers check: If <InlineMath math={"z = 3"} />,{" "}
                  <InlineMath math={"f = 7"} />, and{" "}
                  <InlineMath math={"t = 16"} />, then{" "}
                  <InlineMath math={"g = 16 - 3 - 7 = 6"} />. Only{" "}
                  <InlineMath math={"t - f - z"} /> matches 6 consistently.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-8">
          <h3 id="example-8" className="text-xl font-semibold text-white">
            Example 8
          </h3>
          <MCQExample
            number={8}
            prompt="A technician inspected T light bulbs. Of the first F bulbs, one‑tenth were defective. Of the remaining bulbs, one‑twentieth were defective. In terms of T and F, how many defective bulbs were inspected?"
            options={[
              "(F + T) / 10",
              "(F + T) / 15",
              "(F + T) / 20",
              "T/10 + F/20",
              "T/10 − F/20",
            ]}
            correct="(F + T) / 20"
            solution={
              <>
                <p className="mb-2 font-semibold text-white">Algebraic path</p>
                <p>
                  First batch defects: <InlineMath math={"\\tfrac{1}{10}F"} />.
                  Remaining bulbs: <InlineMath math={"T - F"} />; second‑batch
                  defects: <InlineMath math={"\\tfrac{1}{20}(T - F)"} />.
                </p>
                <BlockMath math={"\\tfrac{F}{10} + \\tfrac{T-F}{20}"} />
                <p>
                  Put over a common denominator of 20:{" "}
                  <InlineMath math={"\\tfrac{2F}{20} + \\tfrac{T}{20} - \\tfrac{F}{20} = \\tfrac{T+F}{20}"} />
                  .
                </p>

                <p className="mt-4 mb-2 font-semibold text-white">
                  Numbers check
                </p>
                <p>
                  Let <InlineMath math={"T = 50"} />,{" "}
                  <InlineMath math={"F = 30"} />. First batch defects: 3. From
                  the remaining 20, defects: 1. Total: 4. Expression{" "}
                  <InlineMath math={"\\tfrac{T+F}{20} = \\tfrac{80}{20} = 4"} />{" "}
                  confirms.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-9">
          <h3 id="example-9" className="text-xl font-semibold text-white">
            Example 9
          </h3>
          <MCQExample
            number={9}
            prompt="Shantelle has 2p more dollars than her brother Bron. Together they have 12p dollars. In terms of p, how much money does Bron have?"
            options={["p", "2p", "3p", "5p", "7p"]}
            correct="5p"
            solution={
              <>
                <p>
                  Let Bron have <InlineMath math={"B"} />. Then Shantelle has{" "}
                  <InlineMath math={"B + 2p"} />, and{" "}
                  <InlineMath math={"B + (B + 2p) = 12p"} />. So{" "}
                  <InlineMath math={"2B + 2p = 12p"} />, hence{" "}
                  <InlineMath math={"2B = 10p"} /> and{" "}
                  <InlineMath math={"B = 5p"} />.
                </p>

                <p className="mt-3">
                  Quick check: If <InlineMath math={"p = 3"} />, then{" "}
                  <InlineMath math={"B = 15"} /> and Shantelle is 21; together
                  36, which equals <InlineMath math={"12p"} />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-10">
          <h3 id="example-10" className="text-xl font-semibold text-white">
            Example 10
          </h3>
          <MCQExample
            number={10}
            prompt="Aiko has A hats. Junmi has 4 fewer hats than Aiko. Bo has B hats, and Link has half as many hats as Bo. Together they have k hats. In terms of A and k, how many hats does Bo have?"
            options={[
              "(k − 4A + 8) / 3",
              "(2k − 4A + 8) / 5",
              "(k − 4A − 8) / 3",
              "(k + 4A − 18) / 5",
              "(2k − 4A + 8) / 3",
            ]}
            correct="(2k − 4A + 8) / 3"
            solution={
              <>
                <p>
                  Totals: Aiko <InlineMath math={"= A"} />, Junmi{" "}
                  <InlineMath math={"= A - 4"} />, Bo{" "}
                  <InlineMath math={"= B"} />, Link{" "}
                  <InlineMath math={"= \\tfrac{B}{2}"} />.
                </p>
                <p>
                  Sum is <InlineMath math={"A + (A - 4) + B + \\tfrac{B}{2} = k"} />.
                </p>
                <BlockMath math={"2A - 4 + \\tfrac{3}{2}B = k"} />
                <p>
                  Multiply by 2:{" "}
                  <InlineMath math={"4A - 8 + 3B = 2k"} /> ⇒{" "}
                  <InlineMath math={"3B = 2k - 4A + 8"} /> ⇒{" "}
                  <InlineMath math={"B = \\tfrac{2k - 4A + 8}{3}"} />.
                </p>

                <p className="mt-3">
                  Numbers check: Let <InlineMath math={"A = 5"} />,{" "}
                  <InlineMath math={"B = 10"} />; then Link has 5, Junmi has 1,
                  total <InlineMath math={"k = 21"} />. Plugging{" "}
                  <InlineMath math={"A = 5,\\ k = 21"} /> into{" "}
                  <InlineMath math={"\\tfrac{2k - 4A + 8}{3}"} /> gives{" "}
                  <InlineMath math={"\\tfrac{42 - 20 + 8}{3} = \\tfrac{30}{3} = 10"} />
                  , as expected.
                </p>
              </>
            }
          />
        </section>

        <p className="mt-6">
          Bottom line: start by translating the story into algebra; if that
          stalls, plug in clean numbers to narrow the choices. In both methods,
          confirm that the result makes sense in the context of the problem.
        </p>
      </article>
    </main>
  );
}