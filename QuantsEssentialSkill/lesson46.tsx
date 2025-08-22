import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.20 Re‑expressing Numbers with Addition and Subtraction | Essential GMAT Quant",
  description:
    "Speed up arithmetic by rewriting numbers around convenient benchmarks (e.g., 1,000 or 10,000) and by factoring. Includes worked examples and quick multiple‑choice drills, rendered with KaTeX.",
};

function TeX(props: { expr: string; display?: boolean; ariaLabel?: string }) {
  const { expr, display = false, ariaLabel } = props;
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
  });
  if (display) {
    return (
      <div
        aria-label={ariaLabel ?? "equation"}
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel ?? "equation"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.20 Speeding Up Arithmetic: Re‑expressing Using Addition and Subtraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Straightforward addition and subtraction can still be slow if you’re carrying or
          borrowing repeatedly. A reliable way to save time is to reframe numbers around
          friendly benchmarks such as 10, 100, 1,000, or 10,000, or to factor out common
          terms before computing. With a few small rearrangements, the arithmetic becomes
          cleaner and far less error‑prone.
        </p>

        <MustKnow>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Nudge numbers to nearby round values: for instance, re‑express 999 as 1000 − 1
              or 9,992 as 10,000 − 8, then add or subtract in a more convenient order.
            </li>
            <li>
              When subtracting from a round number, use the “all 9s” trick:
              subtract from 999, 9,999, etc., then adjust by the amount you added.
            </li>
            <li>
              Factor first: if many terms share a factor, factor it out before doing the arithmetic.
            </li>
            <li>
              Keep your approach flexible—tiny rewrites can turn “messy” into “mental‑math friendly.”
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="friendly-sums">
          <h3 id="friendly-sums" className="text-xl font-semibold text-white">
            Making addition friendlier
          </h3>
          <p>Example: rather than adding 999 and 578 directly, push 999 to 1000.</p>
          <TeX display expr={"999 + 578 = (1000 - 1) + 578 = 1000 + 577 = 1577"} />

          <p>Try two quick mental‑math drills using the same idea.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              692 + 996
              <TeX
                display
                expr={
                  "692 + 996 = 692 + (1000 - 4) = (692 + 1000) - 4 = 1692 - 4 = 1688"
                }
              />
            </li>
            <li>
              9,992 + 6,889
              <TeX
                display
                expr={
                  "9992 + 6889 = (10000 - 8) + 6889 = 10000 + 6889 - 8 = 16889 - 8 = 16881"
                }
              />
            </li>
          </ul>
        </section>

        <MCQExample
          number={89}
          prompt="Compute 1,008 + 995 + 1,007 + 993."
          options={["3,883", "3,983", "4,003", "4,027", "21,895"]}
          correct="4,003"
          solution={
            <>
              <p>
                Rewrite each term near 1,000 and group the easy parts first:
              </p>
              <TeX
                display
                expr={
                  "1008 + 995 + 1007 + 993 = (1000 + 8) + (1000 - 5) + (1000 + 7) + (1000 - 7)"
                }
              />
              <TeX display expr={"= 4\\cdot 1000 + (8 - 5 + 7 - 7) = 4000 + 3 = 4003"} />
            </>
          }
        />

        <section aria-labelledby="factoring">
          <h3 id="factoring" className="text-xl font-semibold text-white">
            When factoring unlocks the arithmetic
          </h3>
          <p>
            Large expressions often hide a big common factor. Extracting that factor makes
            the rest trivial.
          </p>
        </section>

        <MCQExample
          number={90}
          prompt="30(799) + 15(799) + 15(799) + 20(799) + 15(799) + 4(799) + 798 equals:"
          options={["79,900", "79,899", "79,879", "79,679", "79,549"]}
          correct="79,899"
          solution={
            <>
              <p>
                All terms share a factor of 799, except for the final 798. Convert 798 to
                align with that factor.
              </p>
              <TeX display expr={"798 = 799 - 1"} />
              <TeX
                display
                expr={
                  "30(799)+15(799)+15(799)+20(799)+15(799)+4(799)+798 \\\\= 799\\,(30+15+15+20+15+4+1) - 1"
                }
              />
              <TeX display expr={"= 799\\cdot 100 - 1 = 79900 - 1 = 79899"} />
              <p>Answer: 79,899.</p>
              <p className="mt-3">
                Why bother rewriting 798? Without that step, you would get
                <TeX display expr={"799(30+15+15+20+15+4) + 798 = 799\\cdot 99 + 798"} />
                which still works, but you then compute 79,101 + 798 to reach the same result.
                Rewriting 798 as 799 − 1 keeps everything in one clean factor.
              </p>
            </>
          }
        />

        <section aria-labelledby="friendly-subtraction">
          <h3 id="friendly-subtraction" className="text-xl font-semibold text-white">
            Faster subtraction from round numbers
          </h3>
          <p>
            Subtracting from a power of 10 is easiest if you go through the “all 9s”
            number and then adjust. Example:
          </p>
          <TeX
            display
            expr={
              "1000 - 857 = (999 + 1) - 857 = (999 - 857) + 1 = 142 + 1 = 143"
            }
          />
          <p>Two quick practice moves:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              1,005 − 667
              <TeX
                display
                expr={
                  "1005 - 667 = (999 + 6) - 667 = (999 - 667) + 6 = 332 + 6 = 338"
                }
              />
            </li>
            <li>
              10,011 − 7,677
              <TeX
                display
                expr={
                  "10011 - 7677 = (9999 + 12) - 7677 = (9999 - 7677) + 12 = 2322 + 12 = 2334"
                }
              />
            </li>
          </ul>
        </section>

        <MCQExample
          number={91}
          prompt="Evaluate 1,000,000,000,000 − 888,888,888,888."
          options={[
            "1,111,111,111,112",
            "2,111,111,111,122",
            "2,111,111,111,112",
            "122,222,222,222",
            "111,111,111,112",
          ]}
          correct="111,111,111,112"
          solution={
            <>
              <p>Peel off 1 as 999,999,999,999 + 1 and subtract in two steps:</p>
              <TeX
                display
                expr={
                  "(999999999999 + 1) - 888888888888 = (999999999999 - 888888888888) + 1"
                }
              />
              <TeX display expr={"= 111111111111 + 1 = 111111111112"} />
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Look for ways to re‑express numbers before you calculate. Whether you nudge to
            a nearby benchmark, factor out a common term, or route subtraction through
            999s/9,999s, you’ll reduce carrying/borrowing and speed up your work without
            sacrificing accuracy.
          </p>
        </section>
      </article>
    </main>
  );
}