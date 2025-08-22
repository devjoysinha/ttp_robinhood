import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.6 Determining the Ratio Multiplier | Ratios",
  description:
    "Learn two dependable ways to find the ratio multiplier: when a part is known and when the total is known. Includes one Problem Solving MCQ and one Data Sufficiency example with full reasoning.",
};

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={expr}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, { displayMode: true, throwOnError: false });
  return (
    <div
      role="math"
      aria-label={expr}
      className="my-2 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.6 Finding the Ratio Multiplier
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio such as a:b tells you how quantities compare, not their actual counts. To convert
          a comparison into real numbers, introduce a multiplier x so that the parts become ax and bx.
          In many problems, you can determine x from a single extra fact.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              If you know the actual amount of one part in the ratio, set that amount equal to its
              ratio form and solve for x.
            </li>
            <li>
              If you know the total of all parts, add the ratio parts, set equal to that total, and
              solve for x.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="known-part">
          <h3 id="known-part" className="text-xl font-semibold text-white">
            Case 1: A specific part is given
          </h3>
          <p>
            Suppose boys:girls = 4:3 and you’re told there are 16 boys. Let boys ={" "}
            <MathInline expr="4x" /> and girls = <MathInline expr="3x" />. Then:
          </p>
          <MathBlock expr="4x = 16 \;\Rightarrow\; x = 4" />
          <p>Now the remaining quantities follow immediately:</p>
          <MathBlock expr="3x = 3\cdot 4 = 12 \quad\text{and}\quad 16 + 12 = 28\text{ total}" />
        </section>

        <MCQExample
          number={20}
          prompt="At a sports camp, the ratio of football players to basketball players is 5 to 3. If there are 42 basketball players, how many football players are there?"
          options={["8", "14", "56", "60", "70"]}
          correct="70"
          solution={
            <>
              <p>
                Let football = <MathInline expr="5x" /> and basketball = <MathInline expr="3x" />.
                Since basketball players = 42:
              </p>
              <MathBlock expr="3x = 42 \;\Rightarrow\; x = 14" />
              <p>Thus the number of football players is:</p>
              <MathBlock expr="5x = 5\cdot 14 = 70" />
            </>
          }
        />

        <section aria-labelledby="ds-example">
          <ExampleCard
            number={21}
            title="Cost of rings with direct proportionality"
            statements={[
              "A jeweler sells three rings. Ring 1 has five diamonds, Ring 2 has four, and Ring 3 has three. The price of each ring is directly proportional to its number of diamonds, and each diamond costs exactly x dollars. What is the price of Ring 1?",
              "1) The combined price of Ring 1 and Ring 2 is $18,000.",
              "2) Ring 3 costs $2,000 less than Ring 2.",
            ]}
            correctLetter="D"
            solution={
              <>
                <p>
                  With direct proportionality, Ring 1 = <MathInline expr="5x" />, Ring 2 ={" "}
                  <MathInline expr="4x" />, and Ring 3 = <MathInline expr="3x" />.
                </p>
                <p>
                  <strong>Statement (1):</strong> Ring 1 + Ring 2 = $18,000.
                </p>
                <MathBlock expr="5x + 4x = 18{,}000 \;\Rightarrow\; 9x = 18{,}000 \;\Rightarrow\; x = 2{,}000" />
                <p>
                  Therefore, Ring 1 = <MathInline expr="5x = 5\cdot 2{,}000 = 10{,}000" />.
                  Statement (1) is sufficient.
                </p>
                <p>
                  <strong>Statement (2):</strong> Ring 3 is $2,000 less than Ring 2.
                </p>
                <MathBlock expr="4x - 3x = 2{,}000 \;\Rightarrow\; x = 2{,}000" />
                <p>
                  Again, Ring 1 = <MathInline expr="5\cdot 2{,}000 = 10{,}000" />. Statement (2)
                  is also sufficient.
                </p>
                <p>
                  Each statement alone determines the answer. Correct answer: D.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="known-total">
          <h3 id="known-total" className="text-xl font-semibold text-white">
            Case 2: The total is given
          </h3>
          <p>
            When you’re told the overall total, write each part in terms of x and set their sum
            equal to that total. For example, if blue:red = 7:5 and there are 144 marbles:
          </p>
          <MathBlock expr="7x + 5x = 144 \;\Rightarrow\; 12x = 144 \;\Rightarrow\; x = 12" />
          <p>So the counts are:</p>
          <MathBlock expr="\text{Blue} = 7x = 7\cdot 12 = 84 \quad\text{and}\quad \text{Red} = 5x = 5\cdot 12 = 60" />
        </section>

        <MCQExample
          number={22}
          prompt="In a class of 36 students, the ratio of left-handed to right-handed is 1 to 5. How many right-handed students are there?"
          options={["6", "12", "18", "24", "30"]}
          correct="30"
          solution={
            <>
              <p>
                Let L = <MathInline expr="1x" /> and R = <MathInline expr="5x" />. Then:
              </p>
              <MathBlock expr="x + 5x = 36 \;\Rightarrow\; 6x = 36 \;\Rightarrow\; x = 6" />
              <p>Therefore, right-handed students:</p>
              <MathBlock expr="R = 5x = 5\cdot 6 = 30" />
            </>
          }
        />

        <p className="pt-2">
          Bottom line: introduce a multiplier to turn a ratio into actual counts. If you’re given a
          specific part or the total, you can usually lock down the multiplier and compute every
          part quickly.
        </p>
      </article>
    </main>
  );
}