import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({
  expr,
  block = false,
  ariaLabel = "mathematical expression",
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  if (block) {
    return (
      <div
        aria-label={ariaLabel}
        className="my-3 overflow-x-auto py-1 text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.4.2 Multiplying Decimals | Essential GMAT Quant Skills",
  description:
    "A clear, fast method to multiply decimals, plus a test‑taking shortcut and an important caveat. Includes a GMAT‑style multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.4.2 Multiplying Decimals
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Here’s a reliable, computation‑light way to multiply decimals. The idea
          is to perform the whole‑number multiplication first and then place the
          decimal at the very end.
        </p>

        <section aria-labelledby="procedure-heading">
          <h3 id="procedure-heading" className="sr-only">
            Procedure to multiply decimals
          </h3>
          <ol className="list-inside list-decimal space-y-2 text-gray-300">
            <li>
              Ignore the decimal points and multiply the numbers as if they were
              integers.
            </li>
            <li>
              Count how many total digits appear to the right of the decimal
              across both original factors.
            </li>
            <li>
              In your product, move the decimal to the left by that same total
              number of places.
            </li>
          </ol>
        </section>

        <MustKnow>
          To multiply decimals, compute the integer product first, then place the
          decimal. The number of places you shift left equals the sum of the
          decimal digits in the factors.
        </MustKnow>

        <MCQExample
          number={43}
          prompt={
            <>
              What is{" "}
              <Math expr="15.534 \times 2.8" ariaLabel="15.534 times 2.8" />?
            </>
          }
          options={["0.00434952", "0.0434952", "0.434952", "4.34952", "43.4952"]}
          correct="43.4952"
          solution={
            <>
              <p className="mb-2">
                First, count decimal places: 15.534 has 3 and 2.8 has 1, for a
                total of 4 places. Now multiply as integers:{" "}
                <Math expr="15534 \times 28 = 434952" ariaLabel="15534 times 28 equals 434952" />
                .
              </p>
              <p>
                Finally, shift the decimal 4 places left:{" "}
                <Math expr="434952 \rightarrow 43.4952" ariaLabel="434952 becomes 43.4952 after moving decimal 4 places" />
                . Therefore, the answer is 43.4952.
              </p>
            </>
          }
        />

        <section aria-labelledby="shortcut-heading" className="space-y-3">
          <h3 id="shortcut-heading" className="text-lg font-semibold text-white">
            A quick answer‑choice shortcut
          </h3>
          <p>
            On multiple‑choice problems, you can often pick the correct option by
            using only the total decimal places. For example, consider{" "}
            <Math expr="0.004 \times 0.07" />. The first factor has 3 decimal
            digits and the second has 2, so the product must have 5 decimal
            places. Without doing the full multiplication, you can identify{" "}
            <Math expr="0.00028" /> as the result because it has exactly 5
            decimal places.
          </p>
          <Math expr="0.004 \times 0.07 = 0.00028" block ariaLabel="0.004 times 0.07 equals 0.00028" />
        </section>

        <MustKnow>
          Caution: The “count the decimal places” shortcut can mislead you if the
          integer product ends in zero. Example:{" "}
          <Math expr="0.5 \times 0.6" ariaLabel="0.5 times 0.6" /> has a total of
          2 decimal places, but{" "}
          <Math expr="5 \times 6 = 30" ariaLabel="5 times 6 equals 30" />. After
          placing the decimal, you get{" "}
          <Math expr="0.30 = 0.3" ariaLabel="0.30 equals 0.3" />. If answer
          choices differ only by trailing zeros, don’t rely solely on the place
          count—do the quick integer product check.
        </MustKnow>

        <p className="text-gray-300">
          Bottom line: position the decimal after the multiplication, and use the
          decimal‑count shortcut to move faster on multiple‑choice questions—just
          remember the trailing‑zero exception.
        </p>
      </article>
    </main>
  );
}