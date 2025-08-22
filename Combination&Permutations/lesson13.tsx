import type { Metadata } from "next";
import katex from "katex";
// Note: Import KaTeX CSS once in your root layout for styling:
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.12 Combinations with Restrictions: Items That Must NOT Be Chosen",
  description:
    "Learn how to count combinations when certain items are forbidden: shrink the main pool, keep subgroup size the same, and apply nCk. Includes a worked example and two multiple‑choice drills with full solutions.",
};

// Server-side KaTeX renderer
function Ktx({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "warn",
    trust: false,
    output: "html",
  });

  return (
    <span
      aria-label={ariaLabel ?? expr}
      role="math"
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.12 Combinations with Restrictions: Some Items Must NOT Be Chosen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Previously, we handled combination problems in which certain items were
          required. Here, we switch gears to situations where specific items are
          prohibited from the subgroup.
        </p>

        <p>
          In any combination setup, you select from a main pool and place those
          selections into a subgroup of fixed size. When some items are off‑limits,
          simply remove them from the main pool. The number of slots in the subgroup
          does not change.
        </p>

        <MustKnow>
          To exclude items in a combination problem:
          <br />
          1) Delete the forbidden items from the main pool.
          <br />
          2) Keep the subgroup size the same.
          <br />
          3) Compute the count with nCk using the reduced pool.
        </MustKnow>

        <section aria-labelledby="quick-examples" className="space-y-4">
          <h3 id="quick-examples" className="text-white font-semibold">
            Quick illustrations
          </h3>

          <p>
            • Team selection: From 25 students, two specific students cannot be
            chosen for an 8‑person team. Remove them from the pool:
            <span className="ms-2">
              <Ktx expr="25 - 2 = 23" ariaLabel="25 minus 2 equals 23" />
            </span>
            . The number of possible teams is
            <span className="ms-1">
              <Ktx expr="{}^{23}C_{8}" ariaLabel="23 choose 8" />
            </span>
            .
          </p>

          <p>
            • Magazines: A box has 14 magazines, two of which are business magazines
            that cannot be selected. For a 7‑magazine bundle, the available pool is
            <span className="ms-2">
              <Ktx expr="14 - 2 = 12" ariaLabel="14 minus 2 equals 12" />
            </span>
            , so the count is
            <span className="ms-1">
              <Ktx expr="{}^{12}C_{7}" ariaLabel="12 choose 7" />
            </span>
            .
          </p>
        </section>

        <section aria-labelledby="worked-mini-example" className="space-y-3 rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <h3 id="worked-mini-example" className="text-white font-semibold">
            Worked mini‑example
          </h3>
          <p>
            Among 11 students trying out for a play, two particular students (say,
            Mateo and Samuel) are not eligible. How many 4‑person casts are possible?
          </p>
          <p>
            Remove the two ineligible students:
            <span className="ms-2">
              <Ktx expr="11 - 2 = 9" ariaLabel="11 minus 2 equals 9" />
            </span>
            . We now select 4 from 9:
            <span className="ms-2">
              <Ktx expr="{}^{9}C_{4}" ariaLabel="9 choose 4" />
            </span>
            .
          </p>
          <p>
            One efficient way to compute is:
            <span className="ms-2">
              <Ktx
                expr="{}^{9}C_{4} = \frac{9 \cdot 8 \cdot 7 \cdot 6}{4 \cdot 3 \cdot 2} = 126"
                ariaLabel="9 choose 4 equals 9 times 8 times 7 times 6 over 4 times 3 times 2 equals 126"
              />
            </span>
            .
          </p>
          <p className="text-gray-200">So there are 126 possible casts.</p>
        </section>

        <section aria-labelledby="practice" className="space-y-6">
          <h3 id="practice" className="text-white font-semibold">
            Practice
          </h3>

          <MCQExample
            number={18}
            prompt="Connor and Finn are two of 10 candidates for a 5‑person team. If neither Connor nor Finn is selected, how many distinct teams are possible?"
            options={["6", "15", "20", "56", "64"]}
            correct="56"
            solution={
              <>
                <p>
                  Exclude the two named candidates from the 10‑person pool:
                  <span className="ms-2">
                    <Ktx expr="10 - 2 = 8" ariaLabel="10 minus 2 equals 8" />
                  </span>
                  . We then choose 5 from those 8:
                  <span className="ms-2">
                    <Ktx expr="{}^{8}C_{5}" ariaLabel="8 choose 5" />
                  </span>
                  .
                </p>
                <p>
                  Compute:
                  <span className="ms-2">
                    <Ktx
                      expr="{}^{8}C_{5} = {}^{8}C_{3} = \frac{8 \cdot 7 \cdot 6}{3 \cdot 2 \cdot 1} = 56"
                      ariaLabel="8 choose 5 equals 8 choose 3 equals 8 times 7 times 6 over 3 times 2 times 1 equals 56"
                    />
                  </span>
                  .
                </p>
                <p>Answer: 56.</p>
              </>
            }
          />

          <MCQExample
            number={19}
            prompt="A display has 10 different cookies, 3 of which are chocolate chip. If a batch of 4 cookies is made without using any chocolate chip cookies, how many batches are possible?"
            options={["12", "21", "35", "56", "64"]}
            correct="35"
            solution={
              <>
                <p>
                  Exclude the 3 forbidden types:
                  <span className="ms-2">
                    <Ktx expr="10 - 3 = 7" ariaLabel="10 minus 3 equals 7" />
                  </span>
                  . Now select 4 from 7:
                  <span className="ms-2">
                    <Ktx expr="{}^{7}C_{4}" ariaLabel="7 choose 4" />
                  </span>
                  .
                </p>
                <p>
                  Compute:
                  <span className="ms-2">
                    <Ktx
                      expr="{}^{7}C_{4} = {}^{7}C_{3} = \frac{7 \cdot 6 \cdot 5}{3 \cdot 2 \cdot 1} = 35"
                      ariaLabel="7 choose 4 equals 7 choose 3 equals 7 times 6 times 5 over 3 times 2 times 1 equals 35"
                    />
                  </span>
                  .
                </p>
                <p>Answer: 35.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: when some items cannot be picked, shrink the pool by removing
          those items and then apply the standard combination formula to the reduced
          set.
        </p>
      </article>
    </main>
  );
}