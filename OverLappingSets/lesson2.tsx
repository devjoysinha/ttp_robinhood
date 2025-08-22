import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "13.2.1 Percents in Overlapping Set Problems | Overlapping Sets",
  description:
    "Solve two‑set problems given only percentages by setting the total to 100 or using a variable. Includes a quick warm‑up, a multiple‑choice example, and a Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.1 Percents in Overlapping Set Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many two‑set questions are stated entirely in percentages. When the total
          number of items isn’t provided, you have two reliable options:
          assume the total is 100 for easy arithmetic, or introduce a variable for the total
          and work symbolically.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Two equally valid approaches</p>
            <ul className="list-disc pl-5">
              <li>Let the total be 100 to turn percents into whole numbers.</li>
              <li>Let the total be a variable (for example, T or N) and keep everything in terms of that variable.</li>
            </ul>

            <p className="mt-4 font-semibold">Core relationships for two sets A and B</p>
            <div className="rounded-md bg-slate-800/60 p-3">
              <BlockMath math={"P(A\\cup B) = P(A) + P(B) - P(A\\cap B)"} />
              <BlockMath math={"\\text{Neither} = 100\\% - P(A\\cup B)"} />
            </div>

            <div className="rounded-md bg-slate-800/60 p-3">
              <BlockMath math={"\\text{Neither (counts)} = T - \\big(|A| + |B| - |A\\cap B|\\big)"} />
            </div>

            <p className="mt-3">
              A 2×2 set‑matrix is often the fastest way to organize what you know:
              four inner cells (two Yes/No choices across two categories) plus row/column totals.
              The intersection cell A ∩ B is the glue that ties both directions together.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>
          <p>
            In a group, 70% are not veterans and 55% are not senior citizens. If 15% are both veterans and seniors,
            what percent are seniors who are not veterans?
          </p>

          <p className="font-semibold">Method 1: Let the total be 100</p>
          <ul className="list-disc pl-5">
            <li>Seniors total = 100 − 55 = 45</li>
            <li>Non‑veterans total = 70</li>
            <li>Seniors & not veterans = seniors total − seniors who are veterans = 45 − 15 = 30</li>
          </ul>
          <p>Answer: 30% of the group.</p>

          <p className="font-semibold">Method 2: Let the total be N</p>
          <div className="space-y-1">
            <InlineMath math={"\\text{Seniors} = 0.45N"} />{" "}
            <span>and</span>{" "}
            <InlineMath math={"\\text{Non‑veterans} = 0.70N"} />.
            <div>
              Seniors who are not veterans:
              <InlineMath math={"\\;0.45N - 0.15N = 0.30N"} /> → 30% of N.
            </div>
          </div>
        </section>

        <MCQExample
          number={1}
          prompt="In a survey, 30% said they read news in print newspapers, 55% said they read news on the internet, and 15% said they use both. What percent read news in neither source?"
          options={["15 percent", "30 percent", "40 percent", "55 percent", "70 percent"]}
          correct="30 percent"
          solution={
            <>
              <p>
                Use the union formula on percents:
              </p>
              <BlockMath math={"P(\\text{print} \\cup \\text{internet}) = 30\\% + 55\\% - 15\\% = 70\\%"} />
              <p>
                Therefore,
              </p>
              <BlockMath math={"\\text{Neither} = 100\\% - 70\\% = 30\\%"} />
              <p>So 30 percent of people use neither source.</p>
            </>
          }
        />

        <section aria-labelledby="alt-method" className="space-y-3">
          <h3 id="alt-method" className="text-xl font-semibold text-white">
            Alternate variable approach (same idea)
          </h3>
          <p>
            Let the total be T. Then:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <InlineMath math={"|\\text{print}| = 0.30T"} />,{" "}
              <InlineMath math={"|\\text{internet}| = 0.55T"} />,{" "}
              <InlineMath math={"|\\text{both}| = 0.15T"} />.
            </li>
            <li>
              <InlineMath math={"|\\text{either}| = 0.30T + 0.55T - 0.15T = 0.70T"} />.
            </li>
            <li>
              <InlineMath math={"|\\text{neither}| = T - 0.70T = 0.30T"} /> → 30% of T.
            </li>
          </ul>
        </section>

        <ExampleCard
          number={2}
          title="Data Sufficiency: Two‑set overlap in counts"
          statements={[
            "In a survey of 60 car owners, 20% use premium gasoline and 75% wash their cars at least once per week. How many do both?",
            "1) 10% of the car owners do neither.",
            "2) 70% of the car owners do not use premium gasoline but do wash at least once per week.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                From the stem: total <InlineMath math={"T = 60"} />,{" "}
                <InlineMath math={"|P| = 0.20\\cdot 60 = 12"} /> (premium),
                and <InlineMath math={"|W| = 0.75\\cdot 60 = 45"} /> (wash weekly).
                Let <InlineMath math={"x = |P \\cap W|"} /> be the number who do both.
              </p>

              <p>
                <strong>Statement (1):</strong> 10% do neither →{" "}
                <InlineMath math={"|\\text{neither}| = 0.10\\cdot 60 = 6"} />.
                Then the union is <InlineMath math={"|P\\cup W| = 60 - 6 = 54"} />.
              </p>
              <BlockMath math={"x = |P| + |W| - |P\\cup W| = 12 + 45 - 54 = 3"} />
              <p>Sufficient.</p>

              <p>
                <strong>Statement (2):</strong>{" "}
                <InlineMath math={"|\\overline{P} \\cap W| = 0.70\\cdot 60 = 42"} />.
                Within the “wash” group, the 45 people split into “premium & wash” and “no‑premium & wash”:
              </p>
              <BlockMath math={"45 = x + 42 \\;\\Rightarrow\\; x = 3"} />
              <p>Sufficient.</p>

              <p className="font-semibold">Either statement alone yields x = 3. Answer: D.</p>
            </>
          }
        />

        <p>
          Takeaway: With percentages only, pick 100 or use a variable and apply the same
          2‑set relationships. A quick set‑matrix sketch keeps the pieces aligned and
          makes the intersection—and thus the whole problem—fall into place.
        </p>
      </article>
    </main>
  );
}