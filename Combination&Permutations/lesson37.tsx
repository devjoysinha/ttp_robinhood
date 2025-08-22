import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Simple KaTeX helper (server-safe). Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx).
// import "katex/dist/katex.min.css";
import katex from "katex";

function KaTeX({ expression, block = false }: { expression: string; block?: boolean }) {
  const html = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  return (
    <span
      aria-label="mathematical notation"
      role="img"
      className={block ? "my-2 block" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.5 Multi‑Digit Problems with Restrictions | Combinatorics",
  description:
    "Count n‑digit integers under digit constraints using the fundamental counting principle. Learn the zero‑cannot‑lead rule, handle extra restrictions, and practice with three GMAT‑style examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.5 Multi‑Digit Problems with Restrictions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many digit‑counting problems ask how many n‑digit integers satisfy specific rules
          (such as forbidding certain digits, banning repetition, or forcing parity). The go‑to
          tactic is to treat each position as a “slot,” count the allowable choices for that slot,
          and then multiply across the slots.
        </p>

        <MustKnow>
          Analyze each place value separately, determine the number of valid options for that
          position, then multiply all counts using the fundamental counting principle.
        </MustKnow>

        <p>
          This mirrors code‑building problems, but there’s a crucial twist for integers:
          the leading digit cannot be zero. Keep that in mind before you start multiplying.
        </p>

        <MustKnow>
          The leftmost digit of a positive integer is never 0. Adjust the count for the first
          position accordingly.
        </MustKnow>

        <section aria-labelledby="mini-example-1" className="space-y-3">
          <h3 id="mini-example-1" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            How many positive 3‑digit integers can you form from the digits 0–9 if repetition is
            allowed?
          </p>
          <ul className="list-disc pl-5">
            <li>Hundreds place: 9 options (1–9)</li>
            <li>Tens place: 10 options (0–9)</li>
            <li>Ones place: 10 options (0–9)</li>
          </ul>
          <p>
            Total =
            <KaTeX expression="9 \times 10 \times 10 \;=\; 900" /> 3‑digit integers.
          </p>
        </section>

        <section aria-labelledby="restrictions" className="space-y-3">
          <h3 id="restrictions" className="text-xl font-semibold text-white">
            Watch the extra rules
          </h3>
          <p>
            Questions often include added constraints: no repetition, only odd digits, “must be a
            multiple of 5,” or “tens place cannot be 5 or 7,” and so on. Missing a single
            restriction will derail the count.
          </p>
          <MustKnow>
            Always re‑compute the number of valid choices per slot after applying every stated
            restriction (parity, excluded digits, repetition, divisibility, fixed positions, etc.).
          </MustKnow>
        </section>

        <section aria-labelledby="mini-example-2" className="space-y-3">
          <h3 id="mini-example-2" className="text-xl font-semibold text-white">
            Worked example with multiple constraints
          </h3>
          <p>
            How many 3‑digit odd integers have an even hundreds digit, an odd tens digit, an odd
            ones digit, and do not allow repeated digits?
          </p>
          <ul className="list-disc pl-5">
            <li>Hundreds (even and nonzero): 2, 4, 6, 8 → 4 options</li>
            <li>Tens (odd): 1, 3, 5, 7, 9 → 5 options</li>
            <li>
              Ones (odd but different from tens): from the same five odd digits, exclude the
              chosen tens digit → <KaTeX expression="5-1=4" /> options
            </li>
          </ul>
          <p>
            Total =
            <KaTeX expression="4 \times 5 \times 4 \;=\; 80" /> integers.
          </p>
        </section>

        <MCQExample
          number={50}
          prompt="How many 3‑digit integers have all digits even?"
          options={["100", "80", "50", "33", "25"]}
          correct="100"
          solution={
            <>
              <p>
                Hundreds place: cannot be 0 and must be even → 2, 4, 6, 8 (
                <strong>4</strong> options).
              </p>
              <p>
                Tens place: any even digit 0, 2, 4, 6, 8 (
                <strong>5</strong> options).
              </p>
              <p>
                Ones place: any even digit 0, 2, 4, 6, 8 (
                <strong>5</strong> options).
              </p>
              <p>
                Product: <KaTeX expression="4 \times 5 \times 5 \;=\; 100" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={51}
          prompt="If digits cannot repeat, how many positive four‑digit integers contain none of the digits 2, 3, or 4?"
          options={["360", "480", "600", "720", "1,080"]}
          correct="720"
          solution={
            <>
              <p>
                Available digits overall: {`{0, 1, 5, 6, 7, 8, 9}`} (seven digits). The first (thousands)
                digit cannot be 0, so it has 6 options: 1, 5, 6, 7, 8, 9.
              </p>
              <ul className="list-disc pl-5">
                <li>Thousands: 6 choices</li>
                <li>Hundreds: 6 remaining choices (can now include 0, but no repetition)</li>
                <li>Tens: 5 remaining</li>
                <li>Ones: 4 remaining</li>
              </ul>
              <p>
                Total =
                <KaTeX expression="6 \times 6 \times 5 \times 4 \;=\; 720" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={52}
          prompt="How many positive four‑digit integers contain the digit 5 at least once?"
          options={["2,439", "3,168", "3,988", "4,904", "5,832"]}
          correct="3,168"
          solution={
            <>
              <p>
                Use the complement. Total 4‑digit numbers minus those with no 5 gives the count with
                at least one 5:
              </p>
              <p>
                <KaTeX
                  block
                  expression={
                    "\\#(\\text{≥1 five}) = \\#(\\text{all 4-digit}) - \\#(\\text{no fives})"
                  }
                />
              </p>
              <p>
                Total 4‑digit integers: 1000–9999 → <KaTeX expression="9000" />.
              </p>
              <p>
                No 5:
                <br />
                Thousands place: 1, 2, 3, 4, 6, 7, 8, 9 → <strong>8</strong> options.
                <br />
                Each of the other three places: any digit except 5 → <strong>9</strong> options each.
              </p>
              <p>
                <KaTeX expression="8 \\times 9 \\times 9 \\times 9 \\,=\\, 5832" /> have no 5.
              </p>
              <p>
                Therefore,
                <KaTeX expression="9000 - 5832 \\,=\\, 3168" /> numbers have at least one 5.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            Build counts slot‑by‑slot, remember the leading‑digit rule, and re‑evaluate options
            after every restriction. When a condition says “at least once,” consider the complement
            (“none”) for a faster path.
          </p>
        </section>
      </article>
    </main>
  );
}