import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.5.6 Slope and Steepness | Coordinate Geometry",
  description:
    "Understand how the absolute value of slope controls a line’s steepness. Includes two practice questions with full reasoning: ranking steepness and comparing y-intercepts for lines with the same x‑intercept.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5.6 Slope of a Line and How Steep the Line Is
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When we compare lines visually, it’s natural to equate a “larger slope” with a “steeper
          line.” That shortcut works only when the slopes are all positive. Once negative slopes are
          in the mix, you must compare the magnitudes of the slopes, not their raw values.
        </p>

        <p>
          In short: the sign of the slope tells you the direction the line moves (up or down as x
          increases), while the size of the slope in absolute value tells you how steep it is.
        </p>

        <MustKnow>
          The steepness of a line is determined by the absolute value of its slope. If |m1| &gt;
          |m2|, then the line with slope m1 is steeper, regardless of the signs. The sign of m
          indicates direction (positive rises left→right, negative falls left→right).
        </MustKnow>

        <section aria-labelledby="compare-steepness">
          <h3 id="compare-steepness" className="text-xl font-semibold text-white">
            Comparing steepness quickly
          </h3>
          <p>
            To rank lines by steepness, compare |m|:
          </p>
          <ul className="list-disc pl-6">
            <li>Among 1, 3/2, 2, and 3, the ordering by steepness is 1 &lt; 3/2 &lt; 2 &lt; 3.</li>
            <li>
              Among slopes −3/2, −3, 2, and 1, the same ordering by steepness holds because it’s
              based on |m|: 1 &lt; 3/2 &lt; 2 &lt; 3.
            </li>
          </ul>
        </section>

        <MCQExample
          number={15}
          prompt="Which slope produces the least steep line?"
          promptNote="Consider the set of slopes: −7, −5, −1/2, 3, 5."
          options={["−7", "−5", "−1/2", "3", "5"]}
          correct="−1/2"
          solution={
            <>
              <p>
                Steepness is governed by |m|. Compute magnitudes: |−7| = 7, |−5| = 5, |−1/2| = 1/2,
                |3| = 3, |5| = 5. The smallest magnitude is 1/2, so −1/2 corresponds to the least
                steep line.
              </p>
            </>
          }
        />

        <section aria-labelledby="shared-x-intercept">
          <h3 id="shared-x-intercept" className="text-xl font-semibold text-white">
            Lines with a shared x‑intercept
          </h3>
          <p>
            If several lines pass through the same point on the x‑axis and all have negative slope,
            the one with larger |m| will rise higher on the y‑axis before descending to that shared
            x‑intercept. Algebraically, if each line passes through (2, 0) and has slope m, then
            using point‑slope form,
          </p>
          <p className="text-gray-200">
            y − 0 = m(x − 2) ⇒ y = m(x − 2).
          </p>
          <p>
            Setting x = 0 gives the y‑intercept: y = −2m. Thus, more negative m (i.e., larger
            |m|) produces a larger positive y‑intercept.
          </p>
        </section>

        <MCQExample
          number={16}
          prompt="Lines a, b, and c all cross the x-axis at (2, 0). The slopes are: line a has m = −4, line b has m = −5, and line c has m = −3. If their y-intercepts are p, q, and r respectively, which statements must be true?"
          options={[
            "I only",
            "II only",
            "I and II only",
            "II and III only",
            "I, II, and III",
          ]}
          correct="II and III only"
          solution={
            <>
              <p>
                Using y = m(x − 2), the y‑intercept occurs at x = 0: y = −2m. So p = −2(−4) = 8,
                q = −2(−5) = 10, and r = −2(−3) = 6. Therefore q &gt; p &gt; r.
              </p>
              <ul className="list-disc pl-6">
                <li>I: p &gt; q is false (since 8 ≯ 10).</li>
                <li>II: r &lt; q is true (6 &lt; 10).</li>
                <li>III: p &gt; r is true (8 &gt; 6).</li>
              </ul>
              <p>Thus, II and III only.</p>
            </>
          }
        />

        <p>
          Takeaway: compare steepness by comparing |m|. Use the sign only to determine direction of
          tilt, not how steep the line is.
        </p>
      </article>
    </main>
  );
}