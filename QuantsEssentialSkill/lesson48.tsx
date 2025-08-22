import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded once in your root layout:
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.21.1 Factoring Factorials | Essential GMAT Quant Skills",
  description:
    "Master how to factor expressions with factorials by rewriting and extracting the greatest common factorial. Includes worked examples and three GMAT‑style multiple‑choice problems with full solutions.",
};

function KTex({
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
    strict: "warn",
    output: "html",
    trust: true,
  });
  const El = display ? "div" : "span";
  return (
    <El
      className={display ? "my-2" : undefined}
      aria-label={ariaLabel ?? expr}
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
          2.21.1 Factoring Factorials
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When sums or differences of factorials show up, a fast way to simplify
          is to rewrite larger factorials in terms of a smaller one and then
          pull that common factorial out. This “shortening” reveals the greatest
          shared factorial instantly and turns messy expressions into something
          you can compute or compare at a glance.
        </p>

        <MustKnow>
          To factor expressions with factorials, first rewrite big factorials in
          terms of smaller ones using n! = n × (n − 1)!. Then factor out the
          largest common factorial from all terms. This step often collapses the
          problem to simple arithmetic.
        </MustKnow>

        <section aria-labelledby="worked-1" className="space-y-3">
          <h3 id="worked-1" className="text-white font-semibold">
            Quick example 1
          </h3>
          <p className="sr-only">Simplify 11! + 12!.</p>
          <div className="rounded-md bg-gray-800/40 p-4">
            <KTex display expr={"11! + 12!"} />
            <KTex display expr={"= 11! + 12\\cdot 11!"} />
            <KTex display expr={"= 11!\\,(1 + 12)"} />
            <KTex display expr={"= 11!\\cdot 13"} />
          </div>
        </section>

        <section aria-labelledby="worked-2" className="space-y-3">
          <h3 id="worked-2" className="text-white font-semibold">
            Quick example 2
          </h3>
          <p className="sr-only">Simplify 9! − 8! − 7!.</p>
          <div className="rounded-md bg-gray-800/40 p-4">
            <KTex display expr={"9! - 8! - 7!"} />
            <KTex display expr={"= 9\\cdot 8\\cdot 7! - 8\\cdot 7! - 7!"} />
            <KTex display expr={"= 7!\\,(9\\cdot 8 - 8 - 1)"} />
            <KTex display expr={"= 7!\\,(72 - 8 - 1) = 7!\\cdot 63"} />
          </div>
        </section>

        <MCQExample
          number={97}
          prompt="Which of the following equals 20! + 19! + 18! ?"
          options={[
            "18! (400)",
            "17! (50)",
            "16! (25)",
            "15! (5)",
            "5! (400)",
          ]}
          correct="18! (400)"
          solution={
            <>
              <p>
                Rewrite the bigger factorials in terms of 18! and then factor:
              </p>
              <div className="rounded-md bg-gray-800/40 p-4">
                <KTex display expr={"20! + 19! + 18!"} />
                <KTex display expr={"= (20\\cdot 19\\cdot 18!) + (19\\cdot 18!) + 18!"} />
                <KTex display expr={"= 18!\\,(20\\cdot 19 + 19 + 1)"} />
                <KTex display expr={"= 18!\\,(380 + 20) = 18!\\cdot 400"} />
              </div>
              <p>So the correct choice is 18! (400).</p>
            </>
          }
        />

        <MCQExample
          number={98}
          prompt="Evaluate (81! − 80! + 79!) / 79!."
          options={["80^2 + 1", "70^2 − 1", "60^2", "50^2", "40^2"]}
          correct="80^2 + 1"
          solution={
            <>
              <p>Extract 79! from the numerator and cancel:</p>
              <div className="rounded-md bg-gray-800/40 p-4">
                <KTex display expr={"\\frac{81! - 80! + 79!}{79!}"} />
                <KTex display expr={"= \\frac{79!\\,(81\\cdot 80 - 80 + 1)}{79!} = 81\\cdot 80 - 80 + 1"} />
                <KTex display expr={"= 80\\,(81 - 1) + 1 = 80\\cdot 80 + 1 = 80^2 + 1"} />
              </div>
            </>
          }
        />

        <MCQExample
          number={99}
          prompt="The value of (101! − 100!) / (99! − 98!) is closest to which of the following?"
          options={["10", "100", "1,000", "10,000", "100,000"]}
          correct="10,000"
          solution={
            <>
              <p>Factor each difference and then simplify:</p>
              <div className="rounded-md bg-gray-800/40 p-4">
                <KTex
                  display
                  expr={
                    "\\frac{101! - 100!}{99! - 98!} = " +
                    "\\frac{100!\\,(101 - 1)}{98!\\,(99 - 1)} = " +
                    "\\frac{100!\\cdot 100}{98!\\cdot 98}"
                  }
                />
                <KTex
                  display
                  expr={
                    "= \\frac{(100\\cdot 99\\cdot 98!)\\cdot 100}{98!\\cdot 98} = \\frac{100\\cdot 100\\cdot 99}{98}"
                  }
                />
              </div>
              <p>
                Since 99/98 is about 1.01, the value is roughly 100 × 100 ×
                1.01 ≈ 10,100. The closest option is 10,000.
              </p>
            </>
          }
        />

        <p>
          Bottom line: rewrite, factor out the largest common factorial, and
          reduce. With practice, you’ll spot the shared factorial immediately
          and turn intimidating expressions into quick arithmetic.
        </p>
      </article>
    </main>
  );
}