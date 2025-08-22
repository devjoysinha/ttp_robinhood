import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: Add `import "katex/dist/katex.min.css";` to app/layout.tsx (or a global CSS entry)
// so KaTeX renders with proper styles.

export const metadata: Metadata = {
  title: "18.5.3 Lines with Negative Slopes | Coordinate Geometry",
  description:
    "Understand how lines with negative slope behave on the coordinate plane. Learn which quadrants they must cross and how intercept signs relate to slope. Includes an MCQ and a Data Sufficiency example with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5.3 Lines with Negative Slopes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A line with negative slope decreases as you move from left to right. In the{" "}
          <InlineMath math="xy" />-plane, that simple fact tightly constrains which
          quadrants the line can cross and how its intercepts are related.
        </p>

        <MustKnow>
          <>
            • Any line with negative slope must pass through quadrants II and IV.
            <br />
            • In intercept form{" "}
            <InlineMath math="\frac{x}{a} + \frac{y}{b} = 1" />, the slope is{" "}
            <InlineMath math="m = -\frac{b}{a}" />. For a negative slope,{" "}
            <InlineMath math="ab > 0" />; that is, the <em>x</em>- and <em>y</em>-intercepts
            have the same sign (both positive or both negative).
          </>
        </MustKnow>

        <p className="mt-4">
          How does a negative slope line interact with the quadrants? Use the{" "}
          <InlineMath math="x" />-intercept to decide:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            It always intersects quadrants II and IV, regardless of intercept values.
          </li>
          <li>
            If the <InlineMath math="x" />-intercept is positive, the line also meets
            quadrant I.
          </li>
          <li>
            If the line goes through the origin (
            <InlineMath math="x\text{-intercept} = 0" />), it intersects only quadrants II
            and IV.
          </li>
          <li>
            If the <InlineMath math="x" />-intercept is negative, the line also meets
            quadrant III.
          </li>
        </ul>

        <MCQExample
          number={10}
          prompt={
            <>
              In the <InlineMath math="xy" />-plane, suppose line <InlineMath math="s" /> has
              negative slope. Which statement must be true?
              <br />
              I. <InlineMath math="s" /> intersects quadrants I and II
              <br />
              II. <InlineMath math="s" /> intersects quadrants I, II, and IV
              <br />
              III. <InlineMath math="s" /> intersects quadrants II and IV
            </>
          }
          options={["I only", "I and III", "II only", "II and III", "III only"]}
          correct="III only"
          solution={
            <>
              <p>
                A line with <InlineMath math="m&lt;0" /> always crosses quadrants II and IV
                because it falls left-to-right. Depending on intercepts, it may or may not
                cross quadrant I or III. Therefore, only statement III must hold.
              </p>
            </>
          }
        />

        <ExampleCard
          number={11}
          title="Is the slope negative?"
          statements={[
            "If (a, 0) and (0, b) lie on line k, is the slope of k negative?",
            "1) Line k passes through quadrant II.",
            "2) ab < 0",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                Using intercepts, line <InlineMath math="k" /> can be written as{" "}
                <InlineMath math="\dfrac{x}{a} + \dfrac{y}{b} = 1" />, so its slope is{" "}
                <InlineMath math="m = -\dfrac{b}{a}" />.
              </p>
              <p>
                <strong>Statement (1):</strong> Passing through quadrant II does not fix the
                sign of the slope; lines of either positive or negative slope can pass
                through quadrant II. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If <InlineMath math="ab &lt; 0" />, then{" "}
                <InlineMath math="\dfrac{b}{a} &lt; 0" /> and hence{" "}
                <InlineMath math="m = -\dfrac{b}{a} &gt; 0" />. We can definitively answer
                the question “Is the slope negative?” with “No.” That is sufficient.
              </p>
              <p>
                Conclusion: Statement (2) alone is sufficient; statement (1) alone is not.
                Answer: B.
              </p>
            </>
          }
        />

        <blockquote className="rounded-md border border-gray-700 bg-gray-800/40 p-4">
          <p className="text-gray-200 font-semibold">Key takeaway</p>
          <p>
            Negative slope is about direction, not magnitude: it determines which quadrants
            must be hit and forces the intercepts to share a sign. Use{" "}
            <InlineMath math="m = -\dfrac{b}{a}" /> to link slope and intercepts quickly.
          </p>
        </blockquote>
      </article>
    </main>
  );
}