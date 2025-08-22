import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.9 Distance Between Two Points | Coordinate Geometry",
  description:
    "Learn multiple ways to compute the distance between two points in the xy‑plane. Includes the distance formula, quick special cases, and three practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.9 How to Find the Distance Between Two Points
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the coordinate plane, the distance between two points can be found
          in a few different ways. When neither coordinate matches, we use the
          classic distance formula, which is a direct application of the
          Pythagorean theorem.
        </p>

        <MustKnow>
          For points (x₁, y₁) and (x₂, y₂), the distance is
          d = √[(x₂ − x₁)² + (y₂ − y₁)²].
          Think of (x₂ − x₁) and (y₂ − y₁) as the horizontal and vertical legs
          of a right triangle; the distance is the hypotenuse.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-white font-semibold">
            Quick worked example
          </h3>
          <p>
            Distance between (3, 1) and (6, 2):
            d = √[(6 − 3)² + (2 − 1)²] = √(3² + 1²) = √10.
          </p>
        </section>

        <MCQExample
          number={32}
          prompt="A circle in the xy‑plane has center (3, 2) and passes through the origin. What is its circumference? (Use C = 2πr.)"
          options={["2π√5", "5π", "2π√13", "10π", "6π√13"]}
          correct="2π√13"
          solution={
            <>
              <p>
                The radius is the distance from the center to the origin:
                r = √[(3 − 0)² + (2 − 0)²] = √(9 + 4) = √13.
              </p>
              <p>Therefore, C = 2πr = 2π√13.</p>
            </>
          }
        />

        <section aria-labelledby="special-cases" className="space-y-3">
          <h3 id="special-cases" className="text-white font-semibold">
            When you don’t need the distance formula
          </h3>
          <p>
            If two points share one coordinate, the distance collapses to an
            absolute difference on the other coordinate:
          </p>
          <MustKnow>
            • Same y‑coordinate: distance between (x, y) and (z, y) is |x − z|.
            • Same x‑coordinate: distance between (x, y) and (x, z) is |y − z|.
          </MustKnow>
        </section>

        <MCQExample
          number={33}
          prompt="In the coordinate plane, the distance between point n and point m is √61. If n = (6, 10) and m = (1, q), which of the following could be the value of q?"
          options={["-16", "-8", "-4", "4", "8"]}
          correct="4"
          solution={
            <>
              <p>
                Apply the distance formula:
                √[(1 − 6)² + (q − 10)²] = √61 → (−5)² + (q − 10)² = 61 →
                25 + (q − 10)² = 61 → (q − 10)² = 36 → q = 10 ± 6.
              </p>
              <p>
                So q ∈ {`{4, 16}`}. Among the choices, only 4 appears.
              </p>
            </>
          }
        />

        <MCQExample
          number={34}
          prompt="For distinct nonzero real numbers a and b, the distance between (a, 0) and (b, 0) equals a. What is b in terms of a?"
          options={["2a", "5a/2", "3a", "7a/2", "4a"]}
          correct="2a"
          solution={
            <>
              <p>
                The points lie on a horizontal line, so distance = |a − b| = a.
              </p>
              <p>
                Case 1: a − b = a → b = 0 (not allowed, since b ≠ 0).
                Case 2: b − a = a → b = 2a.
              </p>
              <p>Thus, b = 2a.</p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-3">
          <h3 id="big-picture" className="text-white font-semibold">
            Big picture
          </h3>
          <p>
            Use d = √[(x₂ − x₁)² + (y₂ − y₁)²] whenever both coordinates change.
            If the points share an x‑ or y‑coordinate, the distance is simply
            the absolute difference on the other axis. Both perspectives come
            straight from right‑triangle geometry.
          </p>
        </section>
      </article>
    </main>
  );
}