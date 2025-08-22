import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.15 Direct Variation | Ratios",
  description:
    "Understand direct variation and the model y = kx. See clear real‑world setups, step‑by‑step algebra using KaTeX, and three practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">11.15 Direct Variation</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A direct variation links two variables so that one scales in lockstep with the other.
          If “y varies directly with x,” multiplying x by any factor multiplies y by exactly the
          same factor.
        </p>

        <p>
          A simple cost example: if a ride costs a flat 5 dollars per mile, then cost c depends
          linearly on miles m via <InlineMath math="c = 5m" />. Doubling the miles doubles the
          price; cutting the miles in half cuts the price in half.
        </p>

        <p>
          The general model is <InlineMath math="y = kx" />, where k is a constant of proportionality.
        </p>

        <MustKnow>
          If x and y are in direct proportion, they satisfy <InlineMath math="y = kx" /> for a positive
          constant k. Any percentage or multiplicative change to x causes the same multiplicative change
          to y.
        </MustKnow>

        <section aria-labelledby="mini-example-1" className="space-y-3">
          <h3 id="mini-example-1" className="text-white font-semibold">
            Quick check: solving for k and predicting y
          </h3>
          <p>
            Suppose y varies directly with x, and when <InlineMath math="x = 5" /> we have
            <InlineMath math="y = 20" />. Find y when <InlineMath math="x = 8" />.
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <BlockMath math={"y = kx"} />
            <BlockMath math={"20 = k \\cdot 5"} />
            <BlockMath math={"k = 4"} />
            <p className="mt-2">
              With <InlineMath math="k = 4" />, plug in <InlineMath math="x = 8" />:
            </p>
            <BlockMath math={"y = 4 \\cdot 8 = 32"} />
          </div>
        </section>

        <section aria-labelledby="mini-example-2" className="space-y-3">
          <h3 id="mini-example-2" className="text-white font-semibold">
            Quick check: word problem
          </h3>
          <p>
            A technician charges a fixed rate per hour, so total cost varies directly with time.
            If a 5‑hour job costs 300 dollars, what will an 8‑hour job cost?
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <p>Let c be cost, t be time, and k be the hourly rate.</p>
            <BlockMath math={"c = kt"} />
            <BlockMath math={"300 = k \\cdot 5"} />
            <BlockMath math={"k = 60"} />
            <p className="mt-2">Then for 8 hours:</p>
            <BlockMath math={"c = 60 \\cdot 8 = 480"} />
            <p className="mt-2">So, the 8‑hour job costs 480 dollars.</p>
          </div>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={24}
          prompt="The height of a tree varies directly with its age (in years). If a 100‑year‑old tree is 80 feet tall, how tall was the tree at age 9?"
          options={["6.4", "7.2", "11.25", "20", "40"]}
          correct="7.2"
          solution={
            <>
              <p>
                Let height be h (in feet) and age be a (in years), so <InlineMath math="h = ka" />.
                From the 100‑year data point:
              </p>
              <BlockMath math={"80 = k \\cdot 100 \\Rightarrow k = 0.8"} />
              <p>At age 9:</p>
              <BlockMath math={"h = 0.8 \\cdot 9 = 7.2"} />
              <p>Answer: 7.2.</p>
            </>
          }
        />

        <MCQExample
          number={25}
          prompt="At a steady speed, a car’s fuel use varies directly with distance traveled. This car uses 2 gallons every 50 miles at 60 mph. How many gallons are needed for 200 miles at the same speed?"
          options={["1/2 gallon", "3/4 gallon", "4 gallons", "8 gallons", "12 gallons"]}
          correct="8 gallons"
          solution={
            <>
              <p>
                Let <InlineMath math="g" /> be gallons and <InlineMath math="d" /> be miles. Then
                <InlineMath math="g = kd" />. Using the given point:
              </p>
              <BlockMath math={"2 = k \\cdot 50 \\Rightarrow k = \\tfrac{2}{50} = \\tfrac{1}{25}"} />
              <p>For 200 miles:</p>
              <BlockMath math={"g = \\tfrac{1}{25} \\cdot 200 = 8"} />
              <p>Answer: 8 gallons.</p>
              <p className="mt-2 text-gray-400">
                Shortcut: distance scales by a factor of 4 (50 → 200), so fuel also scales by 4
                (2 → 8).
              </p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="Hooke’s law: the force to stretch a spring varies directly with the extension beyond its natural length. A 10‑cm spring requires 40 N to reach 15 cm. What force is needed to reach 13 cm?"
          options={["3", "8", "24", "48", "64"]}
          correct="24"
          solution={
            <>
              <p>
                Extension at 15 cm is <InlineMath math={"15 - 10 = 5\\text{ cm}"} />, and the
                required force is 40 N. Let <InlineMath math="F = kx" />, where x is the extension
                in cm.
              </p>
              <BlockMath math={"40 = k \\cdot 5 \\Rightarrow k = 8\\,\\text{N/cm}"} />
              <p>
                For 13 cm, the extension is <InlineMath math={"13 - 10 = 3\\text{ cm}"} />:
              </p>
              <BlockMath math={"F = 8 \\cdot 3 = 24\\,\\text{N}"} />
              <p>Answer: 24.</p>
            </>
          }
        />

        <p>
          Takeaway: direct variation is position‑free and formula‑light—identify the constant k from
          one data point, then scale to any other point using <InlineMath math="y = kx" />.
        </p>

        <p className="text-gray-400">Up next: more nuanced direct‑variation setups.</p>
      </article>
    </main>
  );
}