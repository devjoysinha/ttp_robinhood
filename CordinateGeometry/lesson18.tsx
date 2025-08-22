import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "18.6.4 Points on a Line & the Slope‑Intercept Equation | Coordinate Geometry",
  description:
    "See how every point on a line satisfies its slope‑intercept equation. Substitute coordinates to verify membership on a line. Includes one Data Sufficiency drill and two Problem Solving examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6.4 All points on a line are tied together by the line’s slope‑intercept equation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A line written in slope‑intercept form, <InlineMath math={"y = mx + b"} />, describes
          every point on that line: a pair <InlineMath math={"(x, y)"} /> belongs to the line if,
          after substituting those values, the equation stays true.
        </p>

        <p className="space-y-3">
          For instance, consider <InlineMath math={"y = \\tfrac{1}{2}x + 2"} />.
          To check whether <InlineMath math="(2, 3)" /> is on the line, plug in
          <InlineMath math={"x = 2"} /> and <InlineMath math={"y = 3"} />:
          <BlockMath math={"3 \\stackrel{?}{=} \\tfrac{1}{2}(2) + 2 = 1 + 2 = 3"} />
          The equality holds, so <InlineMath math="(2, 3)" /> lies on the line.
        </p>

        <p className="space-y-3">
          Now test <InlineMath math="(5, 5)" />:
          <BlockMath math={"5 \\stackrel{?}{=} \\tfrac{1}{2}(5) + 2 = 2.5 + 2 = 4.5"} />
          The equality fails, so <InlineMath math="(5, 5)" /> is not on this line.
        </p>

        <MustKnow>
          A point is on a line exactly when its coordinates make the line’s equation true.
          In practice: substitute and see whether the equality is preserved.
        </MustKnow>

        <ExampleCard
          number={22}
          title="Is (3, 4) on line K?"
          statements={[
            "1) Line K crosses the y-axis at (0, 5).",
            "2) The slope of line K is 2.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                To determine if <InlineMath math="(3, 4)" /> is on K, we need K’s full equation.
              </p>
              <p>
                <strong>Statement (1):</strong> y‑intercept is <InlineMath math="(0, 5)" />.
                That’s one point, but a single point doesn’t define a unique line.
                Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> slope <InlineMath math="m = 2" />.
                Without any point on the line, we still don’t have a unique equation.
                Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> slope <InlineMath math="2" /> and y‑intercept
                <InlineMath math="5" /> give <InlineMath math={"y = 2x + 5"} />. Test
                <InlineMath math="(3, 4)" />:
              </p>
              <BlockMath math={"4 \\stackrel{?}{=} 2(3) + 5 = 11"} />
              <p>It’s not on the line, but we were able to answer the question definitively. Sufficient together. Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={23}
          prompt={
            <>
              If the equation of line Z is <InlineMath math={"12 = 3y + x"} />, which point is NOT on line Z?
            </>
          }
          options={["(3, 3)", "(6, 2)", "(12, 0)", "(18, -2)", "(24, -3)"]}
          correct="(24, -3)"
          solution={
            <>
              <p>
                Rearrange to slope‑intercept form:
              </p>
              <BlockMath math={"12 = 3y + x \\;\\Rightarrow\\; 3y = -x + 12 \\;\\Rightarrow\\; y = -\\tfrac{1}{3}x + 4"} />
              <p>
                Substitute each option into <InlineMath math={"y = -\\tfrac{1}{3}x + 4"} />.
                For <InlineMath math="(24, -3)" />:
              </p>
              <BlockMath math={"-3 \\stackrel{?}{=} -\\tfrac{1}{3}(24) + 4 = -8 + 4 = -4"} />
              <p>Mismatch, so (24, −3) is not on Z. The others satisfy the equation.</p>
            </>
          }
        />

        <MCQExample
          number={24}
          prompt={
            <>
              If <InlineMath math="(u, v)" /> lies on the line <InlineMath math={"y = mx + b"} />, which statements must be true?
              <br />
              I. <InlineMath math={"b = mu - v"} />
              <br />
              II. <InlineMath math={"4v = 4mu + 4b"} />
              <br />
              III. <InlineMath math={"b^{2} = v^{2} - 2vmu + m^{2}u^{2}"} />
            </>
          }
          options={["I only", "II only", "III only", "I and III", "II and III"]}
          correct="II and III"
          solution={
            <>
              <p>
                From membership on the line, we have <InlineMath math={"v = mu + b"} />.
              </p>
              <p>
                I. Solving <InlineMath math={"v = mu + b"} /> for <InlineMath math="b" /> gives
                <InlineMath math={"b = v - mu"} />, not <InlineMath math={"mu - v"} />.
                So I is false.
              </p>
              <p>
                II. Multiply both sides of <InlineMath math={"v = mu + b"} /> by 4:
                <InlineMath math={"4v = 4mu + 4b"} />. True.
              </p>
              <p>
                III. Squaring <InlineMath math={"b = v - mu"} /> yields
                <InlineMath math={"b^2 = (v - mu)^2 = v^2 - 2vmu + m^2u^2"} />. True.
              </p>
              <p>Therefore, II and III must be true.</p>
            </>
          }
        />

        <p>
          Bottom line: a line’s equation is a membership test—substitute a point’s coordinates and verify the equality. If it holds, the point sits on the line; otherwise, it does not.
        </p>
      </article>
    </main>
  );
}