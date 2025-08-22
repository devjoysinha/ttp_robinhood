import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "7.11 Consecutive Integer Word Problems | Word Problems",
  description:
    "Learn how to model and solve consecutive integer problems using algebra. Includes a quick multiple‑choice example with full reasoning and KaTeX‑rendered equations.",
};

// Small server-safe KaTeX helper
function TeX({
  children,
  displayMode = false,
  ariaLabel,
}: {
  children: string;
  displayMode?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    displayMode,
    throwOnError: false,
    strict: "ignore",
  });
  if (displayMode) {
    return (
      <div
        role="math"
        aria-label={ariaLabel ?? children}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.11 Consecutive Integer Word Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Consecutive integers are whole numbers that come one after another on
          the number line, each 1 apart. For instance, 2, 3, 4, 5 are four in a
          row, and 55, 56, 57, 58, 59 are five in a row.
        </p>

        <p>
          A reliable way to model these is to let the first term be{" "}
          <TeX ariaLabel="x">x</TeX>. Then the next few are{" "}
          <TeX ariaLabel="x plus 1">(x+1)</TeX>,{" "}
          <TeX ariaLabel="x plus 2">(x+2)</TeX>,{" "}
          <TeX ariaLabel="x plus 3">(x+3)</TeX>, and so on.
        </p>

        <p>
          Because they form a simple pattern, sums are easy to write. For five
          consecutive integers starting at <TeX>x</TeX>:
        </p>

        <TeX displayMode ariaLabel="x plus (x+1) plus (x+2) plus (x+3) plus (x+4) equals 5x plus 10">
          x + (x+1) + (x+2) + (x+3) + (x+4) = 5x + 10
        </TeX>

        <MustKnow>
          <div className="space-y-3">
            <p className="text-gray-200 font-medium">
              Modeling consecutive integers
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                If k consecutive integers start at <TeX>x</TeX>, then the sum is
               :
                <div className="mt-2">
                  <TeX displayMode ariaLabel="Sum equals kx plus k times (k minus 1) over 2">
                    \text{Sum} = kx + \frac{k(k-1)}{2}
                  </TeX>
                </div>
              </li>
              <li>
                The average of consecutive integers equals the middle value (or
                the mean of the two middle values if k is even).
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={52}
          prompt="The sum of 4 consecutive integers is 506. What is the smallest of the four integers?"
          options={["115", "120", "125", "130", "135"]}
          correct="125"
          solution={
            <>
              <p>
                Let the four integers be{" "}
                <TeX>x, x+1, x+2, x+3</TeX>. Then:
              </p>
              <TeX displayMode ariaLabel="x plus (x+1) plus (x+2) plus (x+3) equals 506">
                x + (x+1) + (x+2) + (x+3) = 506
              </TeX>
              <p>Combine like terms:</p>
              <TeX displayMode ariaLabel="4x plus 6 equals 506">
                4x + 6 = 506
              </TeX>
              <TeX displayMode ariaLabel="4x equals 500; x equals 125">
                4x = 500 \;\;\Rightarrow\;\; x = 125
              </TeX>
              <p>
                So the smallest integer is 125. (Quick check using averages:
                with four consecutive integers, the average is halfway between
                the two middle values. The average is{" "}
                <TeX>506 \div 4 = 126.5</TeX>, so the set is 125, 126, 127,
                128.)
              </p>
            </>
          }
        />

        <p>
          Key takeaway: represent the run with a single variable and build each
          subsequent term by adding 1. From there, sums and averages fall out
          cleanly, and you can solve for the starting value in one or two
          algebra steps.
        </p>
      </article>
    </main>
  );
}