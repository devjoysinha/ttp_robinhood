import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.5 The Ratio Multiplier | Ratios",
  description:
    "Understand the ratio multiplier: turn relative ratios into actual quantities using a single scaling value x. See how 4:3 becomes 4x and 3x, with KaTeX-rendered math and an example problem.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.5 The Ratio Multiplier
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio tells us how two amounts compare, not what those amounts
          actually are. To convert a ratio into concrete values, we scale each
          part by the same factor, often called the ratio multiplier.
        </p>

        <p>
          For instance, if the ratio of boys to girls is 4 to 3, we can write
          this comparison as{" "}
          <InlineMath math="\dfrac{\text{boys}}{\text{girls}}=\dfrac{4}{3}" />.
          Introducing a single scaling value <InlineMath math="x" /> (the ratio
          multiplier), we model the actual counts as{" "}
          <InlineMath math="\text{boys}=4x" /> and{" "}
          <InlineMath math="\text{girls}=3x" />. In compact form:
        </p>

        <div className="rounded-md bg-slate-800/60 p-4">
          <BlockMath math="\frac{\text{boys}}{\text{girls}}=\frac{4}{3}=\frac{4x}{3x}\quad\Rightarrow\quad \text{boys}=4x,\;\text{girls}=3x" />
        </div>

        <p>
          Different choices of <InlineMath math="x" /> produce different actual
          totals while preserving the 4:3 relationship. For example,{" "}
          <InlineMath math="x=1" /> gives 4 boys and 3 girls;{" "}
          <InlineMath math="x=10" /> gives 40 boys and 30 girls. Without extra
          information (such as the total number of students),{" "}
          <InlineMath math="x" /> isn’t fixed, so many real-world pairs are
          possible.
        </p>

        <MustKnow>
          If the ratio of A to B is <InlineMath math="a:b" />, then for some
          positive multiplier <InlineMath math="x" />, the actual quantities can
          be written as <InlineMath math="A=ax" /> and{" "}
          <InlineMath math="B=bx" />. If A and B must be whole numbers, choose
          an <InlineMath math="x" /> that makes both values integers.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="In a class, the ratio of boys to girls is 4:3. If there are 63 students in total, how many boys are in the class?"
          options={["27", "30", "36", "45", "48"]}
          correct="36"
          solution={
            <>
              <p>
                The parts sum is <InlineMath math="4+3=7" />. Each part is{" "}
                <InlineMath math="63 \div 7 = 9" /> students, so{" "}
                <InlineMath math="x=9" />. The number of boys is{" "}
                <InlineMath math="4x=4\cdot9=36" />.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: ratios encode relative structure. The ratio multiplier
          provides the bridge from that structure to actual values, once enough
          information is available to pin down <InlineMath math="x" />.
        </p>
      </article>
    </main>
  );
}