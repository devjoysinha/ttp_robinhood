import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.2.4 Combination by Addition | Linear Systems",
  description:
    "Learn how to eliminate a variable in a system of linear equations by adding the equations. See a worked example, key steps, and a quick practice question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Linear and Quadratic Equations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2.4 Combination by Addition
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two linear equations have opposite coefficients on a variable,
          adding the equations wipes that variable out instantly. This “add to eliminate”
          move is often the fastest route to the remaining variable.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Line up like terms and add the equations term by term. Opposite
              coefficients cancel.
            </li>
            <li>
              After the cancellation, solve the resulting one‑variable equation.
              Then back‑substitute to find the other variable if needed.
            </li>
            <li>
              If the coefficients aren’t opposites yet, you can scale one or both
              equations first to create opposites, then add.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example
          </h3>
          <p className="mt-2">
            Consider the system:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math="-2x + 2y = 100" />
            <BlockMath math="2x + 2y = 100" />
          </div>
          <p className="mt-2">
            Adding the equations eliminates <InlineMath math="x" />:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath
              math={String.raw`\begin{aligned}
(-2x + 2y) + (2x + 2y) &= 100 + 100 \\
0x + 4y &= 200 \\
4y &= 200 \\
y &= 50
\end{aligned}`}
            />
          </div>
          <p className="mt-2">
            The sum locks in <InlineMath math="y=50" />. You can then plug
            that value into either original equation to find <InlineMath math="x" /> if required.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Using the addition method, what is the value of y if the system is −2x + 2y = 100 and 2x + 2y = 100?"
          options={["25", "50", "100", "200", "Cannot be determined"]}
          correct="50"
          solution={
            <>
              <p>
                Add the two equations so the x-terms cancel:
              </p>
              <BlockMath
                math={String.raw`\begin{aligned}
(-2x + 2y) + (2x + 2y) &= 100 + 100 \\
4y &= 200 \\
y &= 50
\end{aligned}`}
              />
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Why addition works"
          statements={[
            "When the coefficients of x are opposites (e.g., −2 and 2), adding the equations removes x.",
            "The same idea applies to y if the y-coefficients are opposites.",
            "If neither variable has opposite coefficients, multiply one or both equations to create opposites first, then add.",
          ]}
          correctLetter=""
          solution={
            <>
              <p>
                Addition leverages additive inverses. If one equation has <InlineMath math="-2x" /> and the
                other has <InlineMath math="2x" />, their sum is <InlineMath math="0x" />, so the variable drops out.
                This reduces a two‑variable system to a single‑variable equation that you can solve directly.
              </p>
            </>
          }
        />

        <p>
          In short, combine equations by addition when a variable’s coefficients are
          already opposites—or can be made opposites with a quick scaling step. If the
          middle terms won’t cancel, adjust the equations first, then add.
        </p>
      </article>
    </main>
  );
}