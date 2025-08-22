import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "18.5 Slope of a Line | Coordinate Geometry",
  description:
    "Understand slope as rise over run, use m = Δy/Δx = (y2 − y1)/(x2 − x1), and practice with two GMAT‑style examples including full solutions and tips.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5 Slope of a Line
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Slope measures how steep a line is. It captures how much the line
          moves up or down for a given step to the right. Formally, the slope
          m between two distinct points <InlineMath math="(x_1,y_1)" /> and{" "}
          <InlineMath math="(x_2,y_2)" /> is given by:
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}"} />
        </div>

        <MustKnow>
          <div className="space-y-2">
            <p>
              • Slope is the ratio of vertical change to horizontal change. Keep
              x– and y–coordinates paired from the same point when you compute{" "}
              <InlineMath math="(y_2 - y_1)/(x_2 - x_1)" />.
            </p>
            <p>
              • You may swap the labels of the two points; the value of m will
              not change as long as you stay consistent in the numerator and
              denominator.
            </p>
            <p>
              • Watch edge cases: horizontal lines have m = 0, and vertical
              lines have undefined slope because <InlineMath math="\\Delta x = 0" />.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Line N passes through the points (2, 2) and (6, 6). What is the slope of line N?"
          options={["1/7", "5/7", "1", "7/6", "2"]}
          correct="1"
          solution={
            <>
              <p>
                Use <InlineMath math="m = \\dfrac{y_2 - y_1}{x_2 - x_1}" /> with{" "}
                <InlineMath math="(x_1,y_1) = (2,2)" /> and{" "}
                <InlineMath math="(x_2,y_2) = (6,6)" />:
              </p>
              <BlockMath math={"m = \\frac{6 - 2}{6 - 2} = \\frac{4}{4} = 1"} />
              <p>
                If you reverse the points, the value is the same:
              </p>
              <BlockMath math={"m = \\frac{2 - 6}{2 - 6} = \\frac{-4}{-4} = 1"} />
              <p>Therefore, the slope is 1.</p>
            </>
          }
        />

        <p>
          A quick reminder: it doesn’t matter which point you call “point 1”
          and which you call “point 2,” as long as the x– and y–values in each
          pair come from the same point when forming the differences.
        </p>

        <MCQExample
          number={2}
          prompt="In the xy‑plane, line A goes through (2, 3) and (−1, −3), and line B goes through (6, 1) and (2, 3). What is the product of the slopes of line A and line B?"
          options={["−1", "−1/2", "0", "1/2", "1"]}
          correct="−1"
          solution={
            <>
              <p>
                First find the slope of line A:
              </p>
              <BlockMath math={"m_A = \\frac{3 - ( -3)}{2 - ( -1)} = \\frac{6}{3} = 2"} />
              <p>Now find the slope of line B:</p>
              <BlockMath math={"m_B = \\frac{3 - 1}{2 - 6} = \\frac{2}{-4} = -\\tfrac{1}{2}"} />
              <p>The product is then:</p>
              <BlockMath math={"m_A \\cdot m_B = 2 \\times \\left(-\\tfrac{1}{2}\\right) = -1"} />
              <p>So the correct answer is −1.</p>
            </>
          }
        />

        <p>
          Big picture: slope is a position‑based ratio. When computing it, keep
          your coordinate pairing consistent; do that, and the rise‑over‑run
          idea will carry you through virtually any two‑point slope question.
        </p>
      </article>
    </main>
  );
}