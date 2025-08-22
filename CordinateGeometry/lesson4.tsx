import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import dynamic from "next/dynamic";
const InlineMath = dynamic(() => import("react-katex").then(m => m.InlineMath), { ssr: false });

export const metadata: Metadata = {
  title: "18.3 The Four Quadrants of the Coordinate Plane | Coordinate Geometry",
  description:
    "Understand how the coordinate plane is partitioned into quadrants, learn the sign patterns for (x, y) in each quadrant, and practice with multiple examples including GMAT-style Data Sufficiency.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.3 The Four Quadrants of the Coordinate Plane
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The xy‑plane is divided by the two axes into four unbounded regions called
          quadrants. Starting in the upper‑right and moving counterclockwise, they are
          labeled I, II, III, and IV. Describing a point by its quadrant is a quick way
          to communicate the signs of its coordinates.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Sign patterns by quadrant</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Quadrant I: (x, y) = (+, +)
              </li>
              <li>
                Quadrant II: (x, y) = (−, +)
              </li>
              <li>
                Quadrant III: (x, y) = (−, −)
              </li>
              <li>
                Quadrant IV: (x, y) = (+, −)
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Tip: A point on an axis is in no quadrant. Only points with both coordinates nonzero lie in quadrants.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="examples" className="space-y-8">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Worked Examples
          </h3>

          <MCQExample
            number={1}
            prompt="A line segment AB passes through quadrants I and II but does not enter quadrants III or IV. Which of the following points could lie on segment AB?"
            options={[
              "I. (11, 23)",
              "II. (-2, -10)",
              "III. (-10, 49)",
              "I only",
              "I and II only",
              "II and III only",
              "I and III only",
              "I, II, and III",
            ]}
            correct="I and III only"
            solution={
              <>
                <p>
                  Segment AB appears only where y is positive: in quadrants I and II. Any point
                  with y &gt; 0 could be on AB; any point with y &lt; 0 (quadrants III or IV) cannot.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>(11, 23) has (+, +) → quadrant I → allowed.</li>
                  <li>(-2, -10) has (−, −) → quadrant III → not allowed.</li>
                  <li>(-10, 49) has (−, +) → quadrant II → allowed.</li>
                </ul>
                <p>Thus, only I and III are possible.</p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="Point A = (x, y) lies in quadrant II. Which statements must be true?"
            options={[
              "I. xy < 0",
              "II. y − x > 0",
              "III. x / y > 0",
              "I only",
              "I and III only",
              "II only",
              "I and II only",
              "I, II, and III",
            ]}
            correct="I and II only"
            solution={
              <>
                <p>
                  In quadrant II, x is negative and y is positive.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    I: x(negative) · y(positive) is negative → true.
                  </li>
                  <li>
                    II: y − x > 0 because subtracting a negative (x) increases y → true.
                  </li>
                  <li>
                    III: x / y has opposite‑sign numerator and denominator → negative, not &gt; 0 → false.
                  </li>
                </ul>
                <p>Therefore, I and II must be true.</p>
              </>
            }
          />

          <MCQExample
            number={3}
            prompt="A is in quadrant I and B is in quadrant III. Point C shares A’s x‑coordinate and B’s y‑coordinate. Point D shares B’s x‑coordinate and A’s y‑coordinate. In which quadrants are C and D, respectively?"
            options={[
              "I and II",
              "II and I",
              "II and IV",
              "IV and II",
              "I and III",
            ]}
            correct="IV and II"
            solution={
              <>
                <p>
                  A has (+, +); B has (−, −).
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    C = (x of A, y of B) = (+, −) → quadrant IV.
                  </li>
                  <li>
                    D = (x of B, y of A) = (−, +) → quadrant II.
                  </li>
                </ul>
                <p>So C is in IV and D is in II.</p>
              </>
            }
          />

          <MCQExample
            number={4}
            prompt={
              <>
                On the xy‑plane, A is in quadrant I, B is in quadrant II, and C is in quadrant III.
                Let p, q, and s be the x‑coordinates of A, B, and C, respectively. Which statement must be true?
              </>
            }
            options={[
              "(1/p^3) · (1/q^3) · (1/s^3) < 0",
              "p^2 · q^3 · s^2 > 0",
              "p^2 · q^3 · s^3 < 0",
              "(1/p^2) · (1/q^2) · (1/s^2) < 0",
              "p^2 · q^3 · s^5 > 0",
            ]}
            correct="p^2 · q^3 · s^5 > 0"
            solution={
              <>
                <p>
                  Signs of x‑coordinates by quadrant: A in I ⇒ p &gt; 0; B in II ⇒ q &lt; 0; C in III ⇒ s &lt; 0.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    For the correct choice: p^2 is positive; q^3 is negative; s^5 is negative.
                    Product = positive × negative × negative = positive → true.
                  </li>
                  <li>
                    The other options either claim a negative result for an always‑positive product
                    (all even powers/reciprocals squared) or combine signs to give a non‑matching inequality.
                  </li>
                </ul>
                <p>Therefore, p^2 · q^3 · s^5 &gt; 0 must hold.</p>
              </>
            }
          />

          <ExampleCard
            number={5}
            title="Same quadrant check: (-p, q) and (-q, p)"
            statements={[
              "Are points (-p, q) and (-q, p) in the same quadrant?",
              "1) pq > 0",
              "2) p^2 q^2 > 0",
            ]}
            correctLetter="A"
            solution={
              <>
                <p>
                  For both points to share a quadrant, their x‑coordinates must have the same sign, and their y‑coordinates must have the same sign.
                  Equivalently, it’s enough to know whether p and q share a sign, because then (−p) and (−q) also share a sign.
                </p>
                <p>
                  Statement (1): pq &gt; 0 implies p and q have the same sign. Then (−p) and (−q) also have the same sign. Sufficient.
                </p>
                <p>
                  Statement (2): p^2 q^2 &gt; 0 only tells us p and q are both nonzero; they could be both positive or both negative (same sign), or one positive and one negative (opposite signs). Not sufficient.
                </p>
                <p>Answer: A.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="notation" className="space-y-3">
          <h3 id="notation" className="text-xl font-semibold text-white">
            Notation refresher
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <InlineMath math="(x, y)" /> denotes a point’s coordinates (x first, then y).
            </li>
            <li>
              Quadrant labels: I (upper‑right), II (upper‑left), III (lower‑left), IV (lower‑right).
            </li>
            <li>
              Signs in each quadrant follow directly from whether x and y are positive or negative in that region.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}