import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your project exposes a KaTeX helper, keep this import.
// Otherwise, replace <Katex> usages with your local math component.
import { Katex } from "@/components/ui/Katex";

export const metadata: Metadata = {
  title:
    "2.2 Use the Calculator Sparingly | Graphics Interpretation",
  description:
    "On GMAT Graphics Interpretation, estimation often beats calculation. Learn when to avoid the calculator, recognize estimation triggers, and practice with a two‑part example using price/weight ratios.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2 Use the Calculator Sparingly When Solving Graphics Interpretation Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’ll have access to a basic on‑screen calculator, but pressing it first is rarely the fastest path. Many Graphics Interpretation items can be handled the same way you tackle standard Problem Solving: by reasoning, comparing, and estimating.
        </p>

        <MustKnow>
          The calculator is a tool, not a default. Before computing, ask: “Is there a quicker, more strategic way?”
        </MustKnow>

        <p>
          Estimation is a core skill here. Because the test emphasizes reasoning, clever approximations often solve a question outright or narrow choices instantly.
        </p>

        <MustKnow>
          If the prompt uses words like “approximately,” “nearest,” or “closest,” that’s a green light to estimate first.
        </MustKnow>

        <p>
          Another signal is answer spacing. If the options are far apart, a rough but sensible estimate can be sufficient to land the correct choice.
        </p>

        <MustKnow>
          Widely separated answer choices usually mean estimation will be both safe and fast.
        </MustKnow>

        <section aria-labelledby="walnut-example">
          <h3 id="walnut-example" className="sr-only">
            Example: Prices and Weights of Packaged Walnuts
          </h3>

          <figure className="mt-6">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/481/content_Example_2_-_Weights_and_Prices_of_Packaged_Walnuts.png"
              alt="Scatterplot showing package weight (lb) versus price ($) for walnuts at stores A, B, C, D, and E"
              width={750}
              height={558}
              className="h-auto w-full rounded-md ring-1 ring-white/10"
              priority
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Package price versus weight for walnuts at stores A–E.
            </figcaption>
          </figure>

          <div className="mt-6 space-y-8">
            <MCQExample
              number={1}
              prompt="Using the scatterplot, the price per pound at store B is approximately how much greater than the price per pound at store D?"
              options={["$0.15", "$1.60", "$2.90", "$4.11", "$5.80"]}
              correct="$5.80"
              solution={
                <>
                  <p className="mb-3">
                    Compute price per pound using price divided by weight:
                  </p>
                  <div className="mb-3">
                    <Katex expression={`\\text{price per pound} = \\dfrac{\\text{price}}{\\text{weight (lb)}}`} />
                  </div>

                  <p className="mb-2">
                    From the plot, store B is about $6.10 for 0.62 lb. Estimating:
                  </p>
                  <div className="mb-3 space-y-2">
                    <Katex expression={`\\dfrac{\\$6.10}{0.62} \\approx \\dfrac{\\$6.20}{0.62} = \\$10\\,\\text{per lb}`} />
                  </div>

                  <p className="mb-2">
                    Store D is about $4.50 for 1.1 lb. Estimating:
                  </p>
                  <div className="mb-3 space-y-2">
                    <Katex expression={`\\dfrac{\\$4.50}{1.1} \\approx \\dfrac{\\$4.40}{1.1} = \\$4\\,\\text{per lb}`} />
                  </div>

                  <p className="mb-2">
                    So the difference is about:
                  </p>
                  <div className="mb-3">
                    <Katex expression={`\\$10 - \\$4 = \\$6\\,\\text{per lb} \\approx \\$5.80`} />
                  </div>

                  <p>
                    Only $5.80 is close to $6 among the choices, so $5.80 is the best approximation.
                  </p>
                </>
              }
            />

            <MCQExample
              number={2}
              prompt="Using store C’s price and weight from the scatterplot, about how many pounds of walnuts can you purchase for $73 at store C?"
              options={["3.7", "9.8", "13.9", "24.1"]}
              correct="13.9"
              solution={
                <>
                  <p className="mb-3">
                    From the plot, store C is about $7.25 for 1.4 lb. Keep the price‑to‑weight ratio constant:
                  </p>
                  <div className="mb-3">
                    <Katex expression={`\\dfrac{\\$7.25}{1.4\\,\\text{lb}} = \\dfrac{\\$73}{w\\,\\text{lb}}`} />
                  </div>
                  <p className="mb-2">
                    Solve for w using a friendly estimate 7.25 ≈ 7.3 to simplify:
                  </p>
                  <div className="mb-3 space-y-2">
                    <Katex expression={`7.3\\,w = 73\\times 1.4`} />
                    <Katex expression={`w = \\dfrac{73}{7.3}\\times 1.4 = 10\\times 1.4 = 14 \\text{ lb (approx.)}`} />
                  </div>
                  <p>
                    The closest option to 14 is 13.9, so 13.9 pounds is the best choice.
                  </p>
                </>
              }
            />
          </div>
        </section>

        <p className="mt-6">
          Bottom line: estimation is often the shortest route to the right answer. When wording or answer spacing invites an approximate approach, save time by reasoning first and using the calculator only if truly necessary.
        </p>
      </article>
    </main>
  );
}