import type { Metadata } from "next";
import Head from "next/head";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.2.1 The x- and y-axes | Coordinate Geometry",
  description:
    "Understand the coordinate axes: orientation, sign conventions, and the origin (0, 0). Includes one quick multiple‑choice check and a Data Sufficiency drill.",
};

// Lightweight KaTeX inline component (server-safe)
function MathInline({
  formula,
  ariaLabel,
  className,
}: {
  formula: string;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: false,
    strict: false,
  });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      aria-label={ariaLabel ?? formula}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet via CDN (kept local to this page for encapsulation) */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-7mQb1u9brgF7E0XG2Lz6G0jCQoY1P32Y0JY3v1l1a0fWZ8fT4Q6j7Jv1s3sQyT2y"
          crossOrigin="anonymous"
        />
      </Head>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.2.1 The x- and y-axes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The coordinate plane is built from two reference lines called axes. The{" "}
          <strong>x‑axis</strong> runs horizontally and extends without end to the
          left and right{" "}
          <MathInline formula="(\!-\infty,\ \infty\!)" ariaLabel="negative infinity to positive infinity" />.
          Values of <MathInline formula="x" /> to the right of the origin are positive,
          and values to the left are negative. At the origin,{" "}
          <MathInline formula="x=0" />.
        </p>

        <p>
          The <strong>y‑axis</strong> runs vertically and also stretches indefinitely{" "}
          <MathInline formula="(\!-\infty,\ \infty\!)" ariaLabel="negative infinity to positive infinity" />.
          Points above the origin have <MathInline formula="y&gt;0" ariaLabel="y greater than 0" />,
          and points below have <MathInline formula="y&lt;0" ariaLabel="y less than 0" />.
          At the origin, <MathInline formula="y=0" />.
        </p>

        <p>
          The two axes meet at the <strong>origin</strong>, the point{" "}
          <MathInline formula="\left(0,0\right)" ariaLabel="(0, 0)" />. They are
          perpendicular, forming right angles where they intersect, and every point on
          the plane is addressed by an ordered pair{" "}
          <MathInline formula="\left(x,y\right)" ariaLabel="(x, y)" /> indicating its
          horizontal and vertical positions relative to the origin.
        </p>

        <MustKnow>
          • The x‑axis is horizontal; the y‑axis is vertical. They cross at{" "}
          <MathInline formula="\left(0,0\right)" ariaLabel="(0, 0)" />.
          • Sign rules: right of the origin → <MathInline formula="x&gt;0" ariaLabel="x greater than 0" />, left →
          <MathInline formula="x&lt;0" ariaLabel="x less than 0" />; above →{" "}
          <MathInline formula="y&gt;0" ariaLabel="y greater than 0" />, below →{" "}
          <MathInline formula="y&lt;0" ariaLabel="y less than 0" />.
          • Points on the axes have at least one coordinate equal to zero
          (x‑axis: <MathInline formula="y=0" />, y‑axis: <MathInline formula="x=0" />).
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Which point lies on the y‑axis?"
          options={[
            "(2, 0)",
            "(0, 5)",
            "(-3, -2)",
            "(4, 4)",
            "(1, -6)",
          ]}
          correct="(0, 5)"
          solution={
            <>
              <p>
                Points on the y‑axis have <MathInline formula="x=0" />. Among the choices,
                only <MathInline formula="\left(0,5\right)" ariaLabel="(0, 5)" /> has
                x equal to zero. So it is on the y‑axis.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Locating a point relative to the axes"
          statements={[
            "Point P has coordinates (a, b). In which quadrant or axis does P lie?",
            "1) a > 0",
            "2) b < 0",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Quadrants are determined by the signs of{" "}
                <MathInline formula="a" /> and <MathInline formula="b" /> in{" "}
                <MathInline formula="\left(a,b\right)" />:
                QI: <MathInline formula="(+,+)" ariaLabel="positive, positive" />,
                QII: <MathInline formula="(-,+)" ariaLabel="negative, positive" />,
                QIII: <MathInline formula="(-,-)" ariaLabel="negative, negative" />,
                QIV: <MathInline formula="(+,-)" ariaLabel="positive, negative" />.
              </p>
              <p>
                Statement (1): <MathInline formula="a&gt;0" ariaLabel="a greater than 0" />.
                This places P either in QI (<MathInline formula="b&gt;0" />) or QIV (
                <MathInline formula="b&lt;0" />) or on the positive x‑axis if{" "}
                <MathInline formula="b=0" />. Not sufficient.
              </p>
              <p>
                Statement (2): <MathInline formula="b&lt;0" ariaLabel="b less than 0" />.
                This places P either in QIII (<MathInline formula="a&lt;0" />) or QIV (
                <MathInline formula="a&gt;0" />) or on the negative y‑axis if{" "}
                <MathInline formula="a=0" />. Not sufficient.
              </p>
              <p>
                Together: <MathInline formula="a&gt;0" /> and{" "}
                <MathInline formula="b&lt;0" /> locate P in QIV uniquely. Sufficient.
                Answer: C.
              </p>
            </>
          }
        />

        <p>
          Big picture: Every ordered pair{" "}
          <MathInline formula="\left(x,y\right)" ariaLabel="(x, y)" /> tells you how far
          a point is from the origin horizontally and vertically. Zero values place the
          point directly on an axis; the signs of the coordinates identify the quadrant.
        </p>
      </article>
    </main>
  );
}