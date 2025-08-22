import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.1 Ratios: Introduction | GMAT Quant",
  description:
    "A concise introduction to ratios: what they mean, how to simplify them, and how they connect to fractions, decimals, and percents. Includes a quick practice question.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: false,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio compares the sizes of two or more quantities. For instance, if
          a room has 5 men and 10 women, the ratio of men to women is 5 to 10,
          which simplifies to 1 to 2 after dividing both parts by their greatest
          common factor, 5. The simplified ratio 1:2 tells us there are two
          women for every one man.
        </p>

        <p>
          Ratios can also describe multiplicative relationships. If one tower is
          twice as tall as another, their height ratio is 2 to 1. Knowing the
          shorter building is 1,000 feet implies the taller one measures 2,000
          feet.
        </p>

        <MustKnow>
          Ratios express relative size, not absolute amounts. You can simplify a
          ratio by dividing all terms by a common factor. Multiplying all terms
          by the same number produces an equivalent ratio. When you need exact
          counts, you’ll usually pair a ratio with additional information (such
          as a total or a specific part).
        </MustKnow>

        <p>
          It’s often convenient to write ratios as fractions so we can connect
          them to decimals and percents. In the 5‑men/10‑women example, there
          are 15 people in total. Women account for{" "}
          <KInline expr="10/15" ariaLabel="ten fifteenths" /> ≈ 0.667, or about
          67%, and men account for <KInline expr="5/15" ariaLabel="five fifteenths" />{" "}
          ≈ 0.333, or about 33%.
        </p>

        <MCQExample
          number={1}
          prompt="In a group, the ratio of cats to dogs is 3:5, and there are 40 animals total. How many dogs are in the group?"
          options={["15", "20", "25", "30", "35"]}
          correct="25"
          solution={
            <>
              <p>
                The ratio parts sum to 3 + 5 = 8. Each “part” is{" "}
                <KInline expr="40/8" ariaLabel="forty divided by eight" /> = 5
                animals. Dogs take 5 parts, so{" "}
                <KInline
                  expr="5 \times 5 = 25"
                  ariaLabel="five times five equals twenty-five"
                />
                .
              </p>
              <p>
                Alternatively, dogs are{" "}
                <KInline expr="5/8" ariaLabel="five eighths" /> of the total, so{" "}
                <KInline
                  expr="\frac{5}{8}\times 40 = 25"
                  ariaLabel="five eighths times forty equals twenty-five"
                />
                .
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}