import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, block = false }: { expr: string; block?: boolean }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  if (block) {
    return (
      <div
        className="my-2 overflow-x-auto"
        role="img"
        aria-label={expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "18.5.5 Vertical Lines (Undefined Slope) | Coordinate Geometry",
  description:
    "Learn why vertical lines have undefined slope, how to write their equations, and how their x‑intercepts determine which quadrants they pass through. Includes two Data Sufficiency drills with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5.5 Lines with Undefined Slope (Vertical Lines)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A vertical line is parallel to the y‑axis and keeps the same x‑value at
          every point. Using the slope formula{" "}
          <K expr="m=\dfrac{y_2-y_1}{x_2-x_1}" />{" "}
          shows why its slope is undefined: for any two points on a vertical
          line, <K expr="x_2-x_1=0" />, which makes the denominator zero and the
          quotient undefined. The general equation of a vertical line is{" "}
          <K expr="x=a" />, where <K expr="a" /> is its x‑intercept.
        </p>

        <MustKnow>
          On a vertical line, every point shares the same x‑coordinate. Because
          <K expr="\Delta x=0" /> between any two points, the slope is undefined. 
          The equation is <K expr="x=a" />, and the x‑intercept equals <K expr="a" />.
        </MustKnow>

        <p>Quadrant behavior follows directly from the sign of a vertical line’s x‑intercept:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            If <K expr="a>0" />, the line <K expr="x=a" /> passes through quadrants I and IV.
          </li>
          <li>
            If <K expr="a=0" />, the line is the y‑axis and does not lie inside any quadrant.
          </li>
          <li>
            If <K expr="a<0" />, the line <K expr="x=a" /> passes through quadrants II and III.
          </li>
        </ul>

        <MustKnow>
          A vertical line intersects:
          {" "}
          <span className="font-semibold">QI and QIV</span> when <K expr="a>0" />,
          {" "}
          <span className="font-semibold">QII and QIII</span> when <K expr="a<0" />,
          and sits on the y‑axis when <K expr="a=0" />.
        </MustKnow>

        <MCQExample
          number={12}
          prompt="Which is the equation of the vertical line through the point (−3, 4)?"
          options={["y = −3", "x = −3", "y = 4", "x = 4", "x + y = 1"]}
          correct="x = −3"
          solution={
            <>
              <p>
                A vertical line has the form <K expr="x=a" />. Substituting the
                point (−3, 4) gives <K expr="x=-3" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={13}
          title="Does line k have a positive x‑intercept?"
          statements={[
            "1) Line k has an undefined slope.",
            "2) Line k intersects Quadrant IV.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We’re asked whether line k has a positive x‑intercept. A vertical
                line has the form <K expr="x=a" />, whose x‑intercept is a.
              </p>
              <p>
                <strong>Statement (1):</strong> undefined slope ⇒ line k is vertical,
                i.e., <K expr="x=a" />. But a could be negative, zero, or positive.
                Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> intersects QIV. Many non‑vertical
                lines intersect QIV, and a vertical line could intersect QIV if
                <K expr="a>0" />, but we don’t know the slope is undefined. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> vertical and intersects QIV. For a vertical line
                to reach QIV, we must have <K expr="a>0" />. Hence the x‑intercept is
                positive. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <ExampleCard
          number={14}
          title="Does line k intersect Quadrant III?"
          statements={[
            "1) 5m is nonnegative, where m is the slope of line k.",
            "2) Line k intersects Quadrant I.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We must determine whether the line crosses QIII.
              </p>
              <p>
                <strong>Statement (1):</strong> <K expr="5m\ge 0" /> implies <K expr="m\ge 0" />.
                If <K expr="m>0" />, typical oblique lines pass through QIII. But if{" "}
                <K expr="m=0" /> (horizontal), the line may miss QIII entirely (e.g.,{" "}
                <K expr="y=2" />). Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> crossing QI alone doesn’t force the line to hit QIII.
                Some lines through QI do, others don’t (e.g., certain horizontal or steep negative‑slope lines).
                Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> knowing <K expr="m\ge 0" /> and that the line hits QI still leaves{" "}
                <K expr="m=0" /> possible, which can avoid QIII. Therefore, we still can’t conclude.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <p>
          Key takeaway: vertical lines are modeled by <K expr="x=a" /> and have undefined slope.
          The sign of <K expr="a" /> determines which quadrants they enter, and that fact
          often drives sufficiency in coordinate‑geometry problems.
        </p>
      </article>
    </main>
  );
}