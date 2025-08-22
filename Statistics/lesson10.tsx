import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function MathEq({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: true,
    output: "html",
  });

  return (
    <span
      className={display ? "block my-3 overflow-x-auto" : "inline"}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.3.5 Counting Consecutive Multiples in a Set | Statistics",
  description:
    "Learn a reliable formula to count how many multiples of a number appear in an inclusive range. Includes two multiple‑choice examples with full, step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.5 Counting Consecutive Multiples in a Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem asks how many numbers in an inclusive interval are multiples of some
          integer k, you don’t need to list them. Instead, find the first and last multiples of k
          that lie in the range and use a simple counting formula.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Inclusive-multiples counting formula</p>
            <p>
              If L is the smallest multiple of k within [a, b] and H is the largest multiple of k
              within [a, b], then the number of multiples of k in the range [a, b] is:
            </p>
            <MathEq
              display
              expr=" \text{count} \;=\; \left(\frac{H - L}{k}\right) + 1 "
              ariaLabel="count equals open parenthesis H minus L over k close parenthesis plus 1"
            />
            <p className="mt-4">
              Calculation order tip:
            </p>
            <ul className="list-disc pl-6">
              <li>Subtract first: H − L</li>
              <li>Divide by k</li>
              <li>Add 1 (because the endpoints are included)</li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Two quick notes:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Be sure your L and H are actual multiples of k inside the interval. Adjust up to the
            first multiple and down to the last multiple as needed.
          </li>
          <li>
            “Inclusive” means both endpoints of the range are considered if they meet the condition.
          </li>
        </ul>

        <MCQExample
          number={12}
          prompt="How many multiples of 2 are there between 51 and 99, inclusive?"
          options={["21", "22", "23", "24", "25"]}
          correct="24"
          solution={
            <>
              <p>
                The smallest multiple of 2 in the range is 52; the largest is 98. Apply the formula:
              </p>
              <MathEq display expr="\text{count} \;=\; \frac{98 - 52}{2} + 1 \;=\; \frac{46}{2} + 1 \;=\; 23 + 1 \;=\; 24" />
              <p className="mt-2">
                For reference, these 24 values are 52, 54, 56, …, 98.
              </p>
            </>
          }
        />

        <MCQExample
          number={13}
          prompt="How many multiples of 3 are there between 17 and 41, inclusive?"
          options={["6", "7", "8", "9", "10"]}
          correct="8"
          solution={
            <>
              <p>
                The first multiple of 3 in the interval is 18; the last is 39. Use the same setup:
              </p>
              <MathEq display expr="\text{count} \;=\; \frac{39 - 18}{3} + 1 \;=\; \frac{21}{3} + 1 \;=\; 7 + 1 \;=\; 8" />
              <p className="mt-2">Those multiples are 18, 21, 24, 27, 30, 33, 36, and 39.</p>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: identify the first and last valid multiples inside the interval and plug them
          into the formula. It’s fast, reliable, and avoids unnecessary listing.
        </p>
      </article>
    </main>
  );
}