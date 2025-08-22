import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.13 Mixtures with Replacement | General Word Problems",
  description:
    "Learn how to handle mixture problems where part of a solution is removed and replaced. Includes a must‑know tip, a worked mini‑example, and two practice questions with solutions.",
};

function InlineMath({
  expr,
  sr,
  className,
}: {
  expr: string;
  sr?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span className={className}>
      <span className="sr-only">{sr ?? expr}</span>
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
    </span>
  );
}

function BlockMath({
  expr,
  sr,
  className,
}: {
  expr: string;
  sr?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
  });
  return (
    <div className={className}>
      <span className="sr-only">{sr ?? expr}</span>
      <div
        aria-hidden="true"
        className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
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
          7.13 Mixtures with Replacement
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some mixture problems, you remove part of a solution and then pour
          in a new liquid (which might be pure or another solution) to return to
          the original volume but achieve a new concentration. You can treat
          these just like standard mixture problems with one twist: build your
          setup after the removal step, and then enforce conservation on the
          pure substance of interest.
        </p>

        <MustKnow>
          For “remove and replace” problems, set up the mixture after taking out
          r units. Then add back the same r units of the replacement liquid and
          write a single equation by equating “amount of pure ingredient after
          replacement” to the target amount in the final mixture.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3
            id="mini-example"
            className="text-xl font-semibold text-white md:text-2xl"
          >
            Mini‑example: Replacing with a pure substance
          </h3>
          <p>
            A flask contains 1,200 ml of a 20% acid solution. How much should
            be removed and replaced with pure acid so that the final 1,200 ml
            solution is 40% acid by volume?
          </p>
          <p>
            Let r be the number of milliliters removed (and then replaced).
            After removing r ml, the remaining{" "}
            <InlineMath expr="1{,}200 - r" sr="1200 minus r" /> ml is still 20%
            acid. Then we add back r ml of pure acid (100%).
          </p>

          <p className="mt-2">Set up the conservation equation on acid:</p>
          <BlockMath expr="0.20\,(1200 - r) + 1\cdot r \;=\; 0.40\cdot 1200" />
          <BlockMath expr="240 - 0.2r + r \;=\; 480" />
          <BlockMath expr="240 + 0.8r \;=\; 480" />
          <BlockMath expr="0.8r \;=\; 240 \quad\Rightarrow\quad r \;=\; \frac{240}{0.8} \;=\; 300" />

          <p>
            So, removing 300 ml of the 20% solution and replacing it with 300 ml
            of pure acid yields a 40% acid solution.
          </p>
        </section>

        <section aria-labelledby="example-61" className="space-y-4">
          <h3
            id="example-61"
            className="text-xl font-semibold text-white md:text-2xl"
          >
            Practice: Remove and replace with a stronger liquid
          </h3>

          <MCQExample
            number={61}
            prompt="A 20-ounce solution is 30% alcohol by volume. Approximately how many ounces must be removed and replaced with pure alcohol to obtain a 20-ounce solution that is 55% alcohol?"
            options={["2.5", "3.6", "5.3", "7.1", "8.7"]}
            correct="7.1"
            solution={
              <>
                <p>
                  Let r be the number of ounces removed and replaced. After
                  removal, we have <InlineMath expr="20 - r" /> ounces at 30%
                  alcohol; we then add r ounces at 100% alcohol. The final
                  volume is still 20 ounces at 55% alcohol. Set up:
                </p>
                <BlockMath expr="0.30\,(20 - r) + 1\cdot r \;=\; 0.55\cdot 20" />
                <BlockMath expr="6 - 0.3r + r \;=\; 11" />
                <BlockMath expr="0.7r \;=\; 5 \quad\Rightarrow\quad r \;=\; \frac{50}{7} \;\approx\; 7.1" />
                <p>Therefore, about 7.1 ounces must be swapped. Answer: D.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-62" className="space-y-4">
          <h3
            id="example-62"
            className="text-xl font-semibold text-white md:text-2xl"
          >
            Practice: Remove and replace with a weaker liquid
          </h3>

          <MCQExample
            number={62}
            prompt="Rohit has 5 liters of solution that is 82% water and 18% honey. He wants 5 liters that are 15% honey. Approximately how many liters should he remove and replace with water?"
            options={["0.64", "0.72", "0.83", "0.96", "1.08"]}
            correct="0.83"
            solution={
              <>
                <p>
                  Track honey. Let r be the liters removed and replaced. After
                  removing r, we have <InlineMath expr="5 - r" /> liters at 18%
                  honey; then we add r liters of water, which contains 0% honey.
                  The final mixture is 5 liters at 15% honey:
                </p>
                <BlockMath expr="0.18\,(5 - r) + 0\cdot r \;=\; 0.15\cdot 5" />
                <BlockMath expr="0.9 - 0.18r \;=\; 0.75" />
                <BlockMath expr="0.18r \;=\; 0.15 \quad\Rightarrow\quad r \;=\; \frac{0.15}{0.18} \;=\; \frac{5}{6} \;\approx\; 0.83" />
                <p>So approximately 0.83 liters should be replaced. Answer: C.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: model the state after removal, then add the replacement
          liquid and write one conservation equation on the pure ingredient.
          Solving for r tells you exactly how much to swap.
        </p>
      </article>
    </main>
  );
}