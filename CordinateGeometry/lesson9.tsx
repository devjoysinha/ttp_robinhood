import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "18.5.2 Lines with Positive Slopes | Coordinate Geometry",
  description:
    "Learn how positively sloped lines behave on the coordinate plane: which quadrants they must pass through and how intercepts determine the rest. Includes two multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5.2 Lines with Positive Slopes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          There are infinitely many lines with positive slope, but they all share
          a simple visual: as you move left to right, the line goes up. From
          that picture alone, we can predict which quadrants such a line must
          cross and how its intercepts constrain the rest.
        </p>

        <section aria-labelledby="positive-slope-properties" className="space-y-3">
          <h3 id="positive-slope-properties" className="text-xl font-semibold text-white">
            Core properties
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Any line with positive slope necessarily passes through quadrants I
              and III.
            </li>
            <li>
              Whether it also enters quadrant II or IV depends on its intercepts:
              <ul className="mt-2 list-[circle] space-y-2 pl-6">
                <li>
                  If the x-intercept is negative, then the y-intercept is positive,
                  so the line also enters quadrant II.
                </li>
                <li>
                  If the line passes through the origin (x-intercept is 0), it
                  intersects only quadrants I and III.
                </li>
                <li>
                  If the x-intercept is positive, then the y-intercept is negative,
                  so the line also enters quadrant IV.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <MustKnow>
          Lines with positive slope always include quadrants I and III. The sign
          of the x‑intercept determines whether the line also enters quadrant II
          (negative x‑intercept) or quadrant IV (positive x‑intercept). If the
          line goes through the origin, it includes only I and III.
        </MustKnow>

        <MCQExample
          number={8}
          prompt={
            <>
              If line L has positive slope, L could pass through which pairs of points?
              <br />
              I. (2, 1) and (5, 3)
              <br />
              II. (-1, 5) and (2, 1)
              <br />
              III. (-6, -3) and (-2, -1)
            </>
          }
          options={["I only", "II only", "I and II", "I and III", "III only"]}
          correct="I and III"
          solution={
            <>
              <p className="mb-2">
                A line through two distinct points is unique. Its slope is
                <InlineMath math="\ \text{slope}=\dfrac{y_2-y_1}{x_2-x_1}\ " />.
                We only need to check the sign.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  I: (2, 1) and (5, 3):{" "}
                  <InlineMath math="\dfrac{3-1}{5-2}=\dfrac{2}{3}>0" /> →
                  positive slope ✓
                </li>
                <li>
                  II: (-1, 5) and (2, 1):{" "}
                  <InlineMath math="\dfrac{1-5}{2-(-1)}=\dfrac{-4}{3}<0" /> →
                  negative slope ✗
                </li>
                <li>
                  III: (-6, -3) and (-2, -1):{" "}
                  <InlineMath math="\dfrac{-1-(-3)}{-2-(-6)}=\dfrac{2}{4}>0" /> →
                  positive slope ✓
                </li>
              </ul>
              <p className="mt-2">Therefore, I and III are possible.</p>
            </>
          }
        />

        <MCQExample
          number={9}
          prompt={
            <>
              The line k passes through the points (a, 0) and (0, b), where{" "}
              <InlineMath math="a>0" /> and <InlineMath math="b<0" />. Which
              quadrants does line k intersect?
            </>
          }
          options={[
            "I and II",
            "I and III",
            "I, II, and III",
            "I, III, and IV",
            "II, III, and IV",
          ]}
          correct="I, III, and IV"
          solution={
            <>
              <p className="mb-2">
                Compute the slope using{" "}
                <InlineMath math="\ \text{slope}=\dfrac{y_2-y_1}{x_2-x_1}\ " />.
                Taking (a, 0) as point 1 and (0, b) as point 2:
              </p>
              <BlockMath math="\text{slope}=\dfrac{b-0}{0-a}=-\dfrac{b}{a}" />
              <p className="mt-2">
                Since <InlineMath math="a>0" /> and <InlineMath math="b<0" />, we have{" "}
                <InlineMath math="\dfrac{b}{a}<0" />, so{" "}
                <InlineMath math="-\dfrac{b}{a}>0" />. Thus, the slope is
                positive, which guarantees quadrants I and III. Also, the
                x‑intercept is <InlineMath math="(a,0)" /> with{" "}
                <InlineMath math="a>0" />, so the line enters quadrant IV as
                well. Therefore, k passes through I, III, and IV.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Positive slope means “upward to the right,” locking in quadrants I
            and III. From there, the sign of the x‑intercept tells you whether
            the line also reaches quadrant II (negative x‑intercept) or
            quadrant IV (positive x‑intercept); passing through the origin
            limits the line to I and III only.
          </p>
        </section>
      </article>
    </main>
  );
}