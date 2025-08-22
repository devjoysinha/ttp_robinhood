import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.8 Range | Statistics",
  description:
    "Understand range as a measure of spread: max minus min. Work through four GMAT‑style questions from fundamentals to algebraic sets, with clear step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.8 Range
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The range of a data set measures how spread out the values are. It’s
          computed by subtracting the smallest value from the largest value. In
          symbols, you can think of it as “max − min.”
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              Range focuses only on the extremes of an ordered set:
              the largest and the smallest values.
            </p>
            <p>
              Using math notation with KaTeX:{" "}
              <span aria-label="range equals maximum minus minimum">
                $\\text{range} = \\max(\\text{set}) - \\min(\\text{set})$
              </span>
              .
            </p>
          </div>
        </MustKnow>

        <p>
          Basic range questions simply require identifying the min and max. More
          involved problems may use variables or number properties, but the
          definition stays the same.
        </p>

        <MCQExample
          number={48}
          prompt={
            <>
              Consider the sets:
              <br />
              A = {"{-10, 8, 5, -1, 0, 13, 15}"} <br />
              B = {"{-2, 50}"}
              <br />
              Which set has the larger range, and what is that range?
            </>
          }
          options={[
            "Set A, 52",
            "Set B, 52",
            "Set A, 54",
            "Set B, 54",
            "Set B, 48",
          ]}
          correct="Set B, 52"
          solution={
            <>
              <p>
                Range depends only on max and min.
                For A, min = −10 and max = 15, so range = 15 − (−10) = 25.
                For B, min = −2 and max = 50, so range = 50 − (−2) = 52.
              </p>
              <p>Therefore, set B has the greater range, and that range is 52.</p>
            </>
          }
        />

        <p>
          When variables are present, determine which expressions can be the
          absolute largest and smallest under the given constraints. The range
          is the difference between those two extremal values.
        </p>

        <MCQExample
          number={49}
          prompt={
            <>
              Let S = {"{x, (1/4)x, y^2, 5y, x^2, y}"} with constraints:
              x is an integer greater than 1 and 0 {"<"} y {"≤"} 0.7.
              Which expression represents the range of S?
            </>
          }
          options={[
            "(x + y)(x − y)",
            "x^2 − 3y",
            "y^2",
            "x − y",
            "x^2 − y",
          ]}
          correct="(x + y)(x − y)"
          solution={
            <>
              <p>
                Separate x‑terms and y‑terms and identify extremes given the
                constraints:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  x is an integer {"≥"} 2, so among x‑terms, the largest is
                  $x^2$ and the smallest is $(1/4)x$. Even at x = 2, $x^2 = 4$
                  and $(1/4)x = 0.5$.
                </li>
                <li>
                  For 0 {"<"} y {"≤"} 0.7, among y‑terms, the largest is 5y (up to 3.5 at y = 0.7),
                  and the smallest is $y^2$ (up to 0.49 at y = 0.7).
                </li>
              </ul>
              <p>
                Compare the potential overall maximums: $x^2$ is always at least 4,
                which exceeds the largest possible 5y (3.5). So the maximum of S is $x^2$.
              </p>
              <p>
                Compare potential overall minimums: the largest possible $y^2$ is 0.49,
                which is smaller than the smallest possible $(1/4)x$ (0.5 when x = 2).
                Thus the minimum of S is $y^2$.
              </p>
              <p>
                Therefore range = $x^2 - y^2 = (x + y)(x - y)$.
              </p>
            </>
          }
        />

        <MCQExample
          number={50}
          prompt={
            <>
              Start with the set {"{x, (1/2)x, x^3, 10x}"} where x is an integer
              less than −1. If we add one more term, which of the following
              choices must increase the range of the set?
              <br />
              I. x^0 &nbsp;&nbsp; II. x^{−1} &nbsp;&nbsp; III. x^2
            </>
          }
          options={[
            "I only",
            "I and II",
            "I and III",
            "II and III",
            "I, II, and III",
          ]}
          correct="I, II, and III"
          solution={
            <>
              <p>
                For x {"<"} −1, the original four terms are all negative. Among them,
                (1/2)x is the greatest (least negative), so it sets the upper end
                of the current range.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  I: x^0 = 1 (positive), which is greater than every original term.
                  Adding 1 increases the maximum, so the range grows.
                </li>
                <li>
                  II: x^{−1} = 1/x is a negative value with smaller magnitude than (1/2)x
                  when x {"<"} −1, so 1/x {" > "} (1/2)x is false; instead, compare numeric examples:
                  if x = −2, then 1/x = −1/2 and (1/2)x = −1. Since −1/2 {" > "} −1,
                  adding −1/2 raises the maximum and increases the range.
                </li>
                <li>
                  III: x^2 {" > "} 0, so it is positive and definitely exceeds all original
                  negative terms, increasing the range.
                </li>
              </ul>
              <p>All three additions increase the range. Answer: I, II, and III.</p>
            </>
          }
        />

        <MCQExample
          number={51}
          prompt={
            <>
              A commuter’s travel times for five days were 35, 50, 65, 30, and
              45 minutes. On day six, after including that day’s time, the
              overall range doubled. How long was the day‑six trip?
            </>
          }
          options={["55", "65", "70", "90", "100"]}
          correct="100"
          solution={
            <>
              <p>
                Original range: max − min = 65 − 30 = 35. Doubling gives 70.
                To double the range, the new time must create a gap of 70 from the
                smallest time (30) or from the largest (65). Since a “slow school
                bus” suggests a longer time, set:
              </p>
              <p>
                <span>$x - 30 = 70 \\Rightarrow x = 100$</span>
              </p>
              <p>Thus, the sixth day took 100 minutes.</p>
            </>
          }
        />

        <p>
          Takeaway: range is an extreme‑based measure. Identify the absolute
          maximum and minimum under the constraints, and subtract. Variables may
          change which terms are extreme, but the definition never changes.
        </p>
      </article>
    </main>
  );
}