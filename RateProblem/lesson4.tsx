import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Helper to SSR-render KaTeX with MathML for accessibility
function Math({
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
    output: "htmlAndMathml",
  });
  return (
    <span
      className={display ? "block my-2" : "inline"}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.5 Major Types of Rate–Time–Distance Problems | Quant",
  description:
    "A quick tour of the 8 core Rate–Time–Distance problem types. Learn the categories you’ll see most and the base formulas that power all rate questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.5 The Major Types of Rate–Time–Distance Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Most rate questions are variations on a small set of themes. If you can
          recognize the pattern, you’ll know which relationships and set‑ups to use.
          Below are the eight common families of Rate–Time–Distance (RTD) problems you
          should be comfortable with.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-medium">
              Core RTD identities you’ll use everywhere:
            </p>
            <p>
              <Math expr="d = r \cdot t" ariaLabel="distance equals rate times time" />
              ,{" "}
              <Math expr="r = \dfrac{d}{t}" ariaLabel="rate equals distance over time" />
              ,{" "}
              <Math expr="t = \dfrac{d}{r}" ariaLabel="time equals distance over rate" />
            </p>
            <p className="text-gray-300">
              Always track and align units. If you convert rates or times, convert
              distances accordingly.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="types-heading" className="space-y-4">
          <h3 id="types-heading" className="text-xl font-semibold text-white">
            The 8 RTD problem types
          </h3>

          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <p>
                <strong className="text-gray-100">Elementary Rate Questions:</strong>{" "}
                Direct use of{" "}
                <Math expr="d = r t" ariaLabel="distance equals rate times time" /> with
                a single object and consistent units. Typically you solve for one
                missing quantity given the other two.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Average Rate Questions:</strong> Find a
                single rate for multiple segments. Beware: a simple average of speeds
                is generally wrong unless times are equal. For equal distances A→B and
                B→A, the overall average speed is the harmonic mean:
                <Math
                  display
                  expr="v_{\text{avg}} = \dfrac{2}{\dfrac{1}{v_1} + \dfrac{1}{v_2}}"
                  ariaLabel="average speed equals two divided by the sum of reciprocals of v one and v two"
                />
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Converging Rate Questions:</strong>{" "}
                Two movers approach each other. Their closing speed is the sum of
                their individual speeds; use that to find meeting time or distance.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Diverging Rate Questions:</strong>{" "}
                Objects move away from a common point or from each other. Their
                separation speed is typically the sum (or appropriate vector sum) of
                their speeds.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Round‑Trip Rate Questions:</strong>{" "}
                Out‑and‑back along the same route, often with different speeds in each
                direction. Total time is{" "}
                <Math
                  expr="t_{\text{total}} = \dfrac{d}{v_1} + \dfrac{d}{v_2}"
                  ariaLabel="total time equals distance over v one plus distance over v two"
                />
                , and overall average speed is total distance over total time.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Catch‑Up Rate Questions:</strong>{" "}
                A faster mover starts behind a slower one and eventually overtakes.
                Set “lead distance = relative rate × time,” where relative rate is{" "}
                <Math expr="|v_{\text{fast}} - v_{\text{slow}}|" ariaLabel="absolute difference of fast speed and slow speed" />
                .
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">Relative Motion Rate Questions:</strong>{" "}
                Speeds are compared in a moving frame (e.g., a boat in a current or a
                plane with wind). Effective speed is adjusted by the medium:
                with/against current or wind add/subtract the flow speed.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-100">If/Then Questions:</strong> “What
                happens to time if speed doubles?” Translate verbal changes into
                algebraic ones using{" "}
                <Math expr="d = r t" ariaLabel="distance equals rate times time" />; for
                fixed distance, time varies inversely with rate:
                <Math
                  display
                  expr="t \propto \dfrac{1}{r}\ \ \text{(if distance is fixed)}"
                  ariaLabel="time is proportional to one over rate when distance is fixed"
                />
              </p>
            </li>
          </ol>
        </section>

        <MCQExample
          number={1}
          prompt="A hiker walks from base to the summit and then returns along the same trail. The uphill and downhill speeds differ. Which RTD type is this?"
          options={[
            "Elementary Rate Questions",
            "Average Rate Questions",
            "Converging Rate Questions",
            "Round‑Trip Rate Questions",
            "Relative Motion Rate Questions",
          ]}
          correct="Round‑Trip Rate Questions"
          solution={
            <>
              <p>
                This is a classic out‑and‑back along the same distance with two
                different speeds, so it’s a round‑trip problem. The overall average
                speed is total distance over total time:
              </p>
              <p>
                <Math
                  display
                  expr="\displaystyle v_{\text{avg}}=\frac{2d}{\frac{d}{v_{\uparrow}}+\frac{d}{v_{\downarrow}}}=\frac{2}{\frac{1}{v_{\uparrow}}+\frac{1}{v_{\downarrow}}}"
                  ariaLabel="average speed equals two d divided by d over up speed plus d over down speed, which simplifies to the harmonic mean of the two speeds"
                />
              </p>
            </>
          }
        />

        <p>
          Master these eight templates and the core relationships above. Once you can
          spot the pattern, setting up the right equations becomes routine—even on
          tougher questions.
        </p>
      </article>
    </main>
  );
}