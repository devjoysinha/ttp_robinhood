import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.5 Weighted Averages | Statistics",
  description:
    "Understand weighted averages: what they are, how to identify data points vs. frequencies, and how to compute them. Includes two GMAT‑style multiple‑choice examples with full, step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.5 Weighted Averages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A plain (arithmetic) average treats every item equally. In many real
          scenarios, though, different items matter by different amounts—for
          instance, prices with different quantities or scores with different
          weights. In such cases, use a weighted average.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="mb-2">
              Weighted average formula:
            </p>
            <BlockMath math={"\\text{Weighted Average} = \\dfrac{\\sum_{i=1}^{n} w_i\\,v_i}{\\sum_{i=1}^{n} w_i}"} />
            <ul className="list-disc pl-5">
              <li>
                v_i are the values (data points) you want to average.
              </li>
              <li>
                w_i are the corresponding weights (such as counts, quantities, or percentages).
              </li>
            </ul>
          </div>
        </MustKnow>

        <MustKnow>
          To distinguish “data points” from “frequencies,” match units to the
          question. The final answer’s unit should match the unit of each data point v_i.
          The weights w_i typically count how many times or how strongly each data point contributes.
        </MustKnow>

        <section aria-labelledby="example-22">
          <MCQExample
            number={22}
            prompt="A university tracked how long students took to finish a master’s program. Exactly 100 students took 800 days, and 150 students took 600 days. What is the average number of days for these students?"
            options={[
              "620 days",
              "650 days",
              "680 days",
              "700 days",
              "720 days",
            ]}
            correct="680 days"
            solution={
              <>
                <p>
                  Treat “days” as the data points and “number of students” as the weights.
                </p>
                <BlockMath math={"\\text{Average days} = \\dfrac{100\\cdot 800 + 150\\cdot 600}{100 + 150}"} />
                <BlockMath math={"= \\dfrac{80{,}000 + 90{,}000}{250} = \\dfrac{170{,}000}{250} = 680\\text{ days}"} />
                <p>Answer: 680 days.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="expanded-formula" className="space-y-3">
          <p>
            You can view the formula term‑by‑term as “value × frequency,” summed
            over all distinct values, then divided by the total frequency:
          </p>
          <BlockMath math={
            "\\text{Weighted Average} = \\dfrac{(v_1\\times f_1) + (v_2\\times f_2) + \\cdots + (v_n\\times f_n)}{f_1 + f_2 + \\cdots + f_n}"
          } />
        </section>

        <section aria-labelledby="example-23">
          <MCQExample
            number={23}
            prompt="Lauren bought two tickets at $50 each, six tickets at $240 each, and x tickets at $800 each. If her average ticket price was $260, what is x?"
            options={["1", "2", "4", "5", "6"]}
            correct="1"
            solution={
              <>
                <p>
                  Prices are the data points; quantities are the weights. Set the weighted average equal to 260:
                </p>
                <BlockMath math={
                  "\\dfrac{2\\cdot 50 + 6\\cdot 240 + x\\cdot 800}{2 + 6 + x} = 260"
                } />
                <BlockMath math={
                  " \\dfrac{100 + 1440 + 800x}{8 + x} = 260 \\quad\\Rightarrow\\quad 260(8 + x) = 1540 + 800x"
                } />
                <BlockMath math={
                  "2080 + 260x = 1540 + 800x \\quad\\Rightarrow\\quad 540 = 540x \\quad\\Rightarrow\\quad x = 1"
                } />
                <p>Therefore, x = 1.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: multiply each value by its weight, add those products, and
          divide by the total weight. Keep units consistent to avoid confusing
          data points with frequencies.
        </p>
      </article>
    </main>
  );
}