import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  children,
  display = false,
  ariaLabel,
}: {
  children: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel}
      className={display ? "my-3 text-center" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "18.8 Perpendicular Lines | Coordinate Geometry",
  description:
    "Understand how to recognize and write equations of perpendicular lines. Learn the negative‑reciprocal slope rule, see a quick numeric example, and practice with a GMAT‑style multiple‑choice and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.8 Perpendicular Lines
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two lines are perpendicular if they meet at a right angle. In slope
          terms, this happens exactly when the slopes are negative reciprocals:
          multiplying them gives −1.
        </p>

        <Math ariaLabel="Perpendicular slope rule">
          m_1 \cdot m_2 = -1 \quad\Longleftrightarrow\quad m_2 = -\frac{1}{m_1}
        </Math>

        <p>
          For instance, the slopes 10 and −1/10 form a perpendicular pair
          because their product is −1.
        </p>

        <Math ariaLabel="Example of negative reciprocals">
          10 \times \left(-\frac{1}{10}\right) = -1
        </Math>

        <MustKnow>
          The slopes of perpendicular nonvertical lines are negative reciprocals:
          m1 × m2 = −1. A horizontal line (slope 0) is perpendicular to a
          vertical line (undefined slope).
        </MustKnow>

        <section aria-labelledby="mcq-1">
          <h3 id="mcq-1" className="sr-only">
            Multiple-choice example: Perpendicular line
          </h3>

          <MCQExample
            number={31}
            prompt={
              <>
                In the coordinate plane, line p has equation{" "}
                <Math>y = z x + 10</Math> with <Math>z \neq 0</Math>. Which of
                the following is an equation of a line perpendicular to p?
              </>
            }
            options={[
              "y − 10 = x/z",
              "-y + 10 = xz",
              "zy + 10z = x",
              "-zy - 10z = x",
              "-zy + 10z = -x",
            ]}
            correct="-zy - 10z = x"
            solution={
              <>
                <p>
                  From <Math>y = z x + 10</Math>, the slope of p is{" "}
                  <Math>z</Math>. A line perpendicular to p must have slope{" "}
                  <Math>-\frac{1}{z}</Math>.
                </p>
                <p>
                  Check choice D: <Math>-zy - 10z = x</Math>. Rearrange:
                </p>
                <Math display>{String.raw`-z(y+10) = x \;\;\Longrightarrow\;\; y+10 = -\frac{x}{z} \;\;\Longrightarrow\;\; y = -\frac{1}{z}x - 10`}</Math>
                <p>
                  The slope is <Math>-\frac{1}{z}</Math>, so D is correct.
                  Choices A, C, and E all simplify to slope <Math>1/z</Math>,
                  and B simplifies to slope <Math>-z</Math>, so they are not
                  perpendicular to p.
                </p>
              </>
            }
          />
        </section>

        <p>
          To find a perpendicular line quickly, extract the original slope, take
          the negative reciprocal, then use point–slope or slope–intercept form
          as needed.
        </p>

        <section aria-labelledby="ds-1">
          <h3 id="ds-1" className="sr-only">
            Data Sufficiency example: y-intercept from perpendicular condition
          </h3>

          <ExampleCard
            number={32}
            title="Finding a y‑intercept using a perpendicular line"
            statements={[
              "Line ℓ is perpendicular to 5x + 3y = 12.",
              "Line ℓ passes through the point (2, −1).",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  Target: the y‑intercept of line ℓ. First, determine the slope
                  of the reference line:
                </p>
                <Math display>{String.raw`5x + 3y = 12 \;\;\Longrightarrow\;\; y = -\frac{5}{3}x + 4`}</Math>
                <p>
                  So its slope is <Math>-\tfrac{5}{3}</Math>. Therefore, any
                  perpendicular line has slope{" "}
                  <Math>{String.raw`-\frac{1}{-\frac{5}{3}} = \frac{3}{5}`}</Math>.
                </p>
                <p>
                  Statement (1) alone gives only the slope of ℓ (as{" "}
                  <Math>3/5</Math>), not a unique line. Not sufficient.
                </p>
                <p>
                  Statement (2) alone gives a single point, but not the slope.
                  Not sufficient.
                </p>
                <p>
                  Together, slope <Math>3/5</Math> and point <Math>(2,-1)</Math>{" "}
                  determine ℓ uniquely. Use point–slope:
                </p>
                <Math display>{String.raw`y - (-1) = \frac{3}{5}(x - 2) \;\;\Longrightarrow\;\; y = \frac{3}{5}x - \frac{6}{5} - 1 = \frac{3}{5}x - \frac{11}{5}`}</Math>
                <p>
                  The y‑intercept is <Math>-\tfrac{11}{5}</Math>. Thus, both
                  statements together are sufficient and the correct answer is
                  C.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: perpendicular means “negative reciprocal slope.” Convert
          to slope–intercept form when needed, then apply{" "}
          <Math>m_{\perp} = -\frac{1}{m}</Math> to build the required equation.
        </p>
      </article>
    </main>
  );
}