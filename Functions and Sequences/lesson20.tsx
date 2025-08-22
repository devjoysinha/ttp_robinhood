import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.20 Equally Spaced Tick Marks | Functions & Sequences",
  description:
    "Learn how to work with equally spaced tick marks on number lines: identify the common difference, fill in missing values, and solve quick multiple‑choice checks.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.20 Equally Spaced Tick Marks
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some GMAT problems show a number line with evenly spaced tick marks.
          Your job is often to recover missing labels. The main idea is simple:
          when spacing is uniform, each step adds the same amount as you move to
          the right and subtracts the same amount as you move to the left.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              If two adjacent marks on a number line are equally spaced, the
              difference between them is a constant step size <InlineMath math="d" />.
            </li>
            <li>
              For consecutive marks <InlineMath math="x&lt;y" />, the common
              difference is <InlineMath math="d = y - x" />. Every neighboring
              pair shares this same difference.
            </li>
          </ul>
        </MustKnow>

        <p>
          For instance, if the ticks are spaced by 3, then every move from one
          tick to the next changes the value by 3:
        </p>

        <div className="space-y-1">
          <BlockMath math="(-1) - (-4) = 3" />
          <BlockMath math="2 - (-1) = 3" />
          <BlockMath math="5 - 2 = 3" />
          <BlockMath math="8 - 5 = 3" />
          <BlockMath math="11 - 8 = 3" />
          <BlockMath math="14 - 11 = 3" />
        </div>

        <p>
          If 14, x, and 20 are consecutive marks, the step size is{" "}
          <InlineMath math="20-14=6" />, so the middle mark is{" "}
          <InlineMath math="x=14+6=20" />. If instead the step size were 3 and
          14 and 20 bracket x as consecutive marks, then{" "}
          <InlineMath math="x=14+3=17=20-3" />. The same logic works for any two
          neighbors: add <InlineMath math="d" /> going right; subtract{" "}
          <InlineMath math="d" /> going left.
        </p>

        <MustKnow>
          If two neighboring marks are known, the common difference is locked:
          <InlineMath math="d = \text{(right)} - \text{(left)}" />. Use that
          fixed step to propagate values in either direction.
        </MustKnow>

        <MCQExample
          number={47}
          prompt="On an equally spaced number line, 29 and 35 are consecutive marks. Let j be the value four ticks to the left of 29, and let k be the value two ticks to the right of 35. What is j + k?"
          options={["50", "52", "54", "56", "58"]}
          correct="52"
          solution={
            <>
              <p>
                First find the step size: <InlineMath math="d = 35 - 29 = 6" />.
              </p>
              <p>
                Four ticks left of 29 reduces the value by{" "}
                <InlineMath math="4d=24" />, so{" "}
                <InlineMath math="j = 29 - 24 = 5" />.
              </p>
              <p>
                Two ticks right of 35 increases the value by{" "}
                <InlineMath math="2d=12" />, so{" "}
                <InlineMath math="k = 35 + 12 = 47" />.
              </p>
              <p>
                Therefore, <InlineMath math="j + k = 5 + 47 = 52" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={48}
          prompt="On an equally spaced number line, 18 and 22 are consecutive marks. In this region the marks follow the pattern …, 2 (labeled c), 6, 10 (labeled d), 14, 18, 22, …. What is d^c?"
          options={["1", "10", "100", "1,000", "1,024"]}
          correct="100"
          solution={
            <>
              <p>
                Since 18 and 22 are neighbors, the step size is{" "}
                <InlineMath math="d_{\text{step}} = 22 - 18 = 4" />. The given
                snippet shows <InlineMath math="c = 2" /> and{" "}
                <InlineMath math="d = 10" />.
              </p>
              <p>
                Compute <InlineMath math="d^c = 10^2 = 100" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={49}
          prompt="The tick marks on a number line are equally spaced. If u − t = 20 for a consecutive pair (t, u), what is z − y for any other consecutive pair (y, z) on the same line?"
          options={["4", "8", "10", "20", "100"]}
          correct="20"
          solution={
            <>
              <p>
                Equal spacing means every adjacent pair differs by the same
                constant. Given <InlineMath math="u - t = 20" />, the common
                difference is <InlineMath math="20" />.
              </p>
              <p>
                Thus, for any consecutive pair{" "}
                <InlineMath math="(y, z)" />, we must have{" "}
                <InlineMath math="z - y = 20" />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: once you know a single adjacent gap, you know them all.
          Use <InlineMath math="d = y - x" /> for any consecutive pair to march
          left or right and fill in the rest.