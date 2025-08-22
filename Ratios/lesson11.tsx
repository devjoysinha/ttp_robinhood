import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.11 Adjusting Ratios by Adding or Removing | Ratios",
  description:
    "How to reach a target ratio by adding to or subtracting from the parts or the total. Includes step‑by‑step examples and three multiple‑choice drills with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.11 Hitting a Desired Ratio by Adding or Removing
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes you’re given a current ratio and asked how many units must be added to or
          taken from one part (or both) to reach a new ratio. The playbook is simple:
          translate the ratio with a multiplier, find actual counts if possible, and then set up
          an equation that reflects the new ratio after the change.
        </p>

        <MustKnow>
          - For a part-to-part ratio like <InlineMath math="A:B" />, write the quantities as{" "}
          <InlineMath math="A=ka" /> and <InlineMath math="B=kb" /> using a common multiplier{" "}
          <InlineMath math="k" />. If you know a total, solve for <InlineMath math="k" />.
          <br />
          - To enforce a target part-to-part ratio after a change, set{" "}
          <InlineMath math="\dfrac{\text{new A}}{\text{new B}}=\dfrac{a'}{b'}" /> and solve.
          <br />
          - For a part-to-total target like “A is <InlineMath math="\tfrac{m}{n}" /> of the total,” set{" "}
          <InlineMath math="\dfrac{\text{new A}}{\text{new total}}=\dfrac{m}{n}" /> and solve.
        </MustKnow>

        <section aria-labelledby="guided-ptp" className="space-y-3">
          <h3 id="guided-ptp" className="text-xl font-semibold text-white">
            Guided example: shifting a part-to-part ratio
          </h3>
          <p>
            A ring has 15 stones in total, only diamonds and rubies. The ratio of diamonds to rubies is
            2 to 3. How many diamonds must be added so the ratio of diamonds to rubies becomes 5 to 5?
          </p>
          <p>Start with the multiplier model for the current ratio:</p>
          <BlockMath math={"2x+3x=15 \\;\\Rightarrow\\; 5x=15 \\;\\Rightarrow\\; x=3"} />
          <p>So initially there are 6 diamonds and 9 rubies. Let y be the diamonds we add. Enforce the new ratio:</p>
          <BlockMath math={"\\dfrac{6+y}{9}=\\dfrac{5}{5} \\;\\Rightarrow\\; 5(6+y)=9\\cdot5 \\;\\Rightarrow\\; 30+5y=45 \\;\\Rightarrow\\; y=3"} />
          <p>We must add 3 diamonds.</p>
        </section>

        <MCQExample
          number={16}
          prompt="In a class, the ratio of boys to girls is 4 to 5. If there are 180 students in total, how many boys must leave so that the ratio of boys to girls becomes 2 to 5?"
          options={["10", "20", "30", "40", "50"]}
          correct="40"
          solution={
            <>
              <p>Use a common multiplier x for the initial counts:</p>
              <BlockMath math={"4x+5x=180 \\Rightarrow 9x=180 \\Rightarrow x=20"} />
              <p>So boys = 80 and girls = 100. Let y be the number of boys who leave. Enforce the target ratio:</p>
              <BlockMath math={"\\dfrac{80-y}{100}=\\dfrac{2}{5} \\Rightarrow 5(80-y)=200 \\Rightarrow 400-5y=200 \\Rightarrow y=40"} />
              <p>Answer: 40.</p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt="The ratio of apples to pears is 5 to 3. If there are 45 apples, how many apples must be removed so that the ratio of apples to pears becomes 2 to 3?"
          options={["9", "15", "27", "30", "35"]}
          correct="27"
          solution={
            <>
              <p>Write apples and pears as 5x and 3x. Since apples are 45:</p>
              <BlockMath math={"5x=45 \\Rightarrow x=9 \\;\\Rightarrow\\; \\text{pears}=3x=27"} />
              <p>Let y be the apples removed. Enforce the new ratio:</p>
              <BlockMath math={"\\dfrac{45-y}{27}=\\dfrac{2}{3} \\Rightarrow 3(45-y)=2\\cdot27 \\Rightarrow 135-3y=54 \\Rightarrow y=27"} />
              <p>Answer: 27.</p>
            </>
          }
        />

        <section aria-labelledby="guided-ptt" className="space-y-3">
          <h3 id="guided-ptt" className="text-xl font-semibold text-white">
            Guided example: shifting a part-to-total ratio
          </h3>
          <p>
            A ring has exactly 6 diamonds and 9 rubies. How many diamonds must be added so that diamonds make up{" "}
            <InlineMath math="\\tfrac{4}{5}" /> of all stones?
          </p>
          <p>Let x be the number of diamonds to add. Enforce the part-to-total target:</p>
          <BlockMath math={"\\dfrac{6+x}{15+x}=\\dfrac{4}{5} \\Rightarrow 5(6+x)=4(15+x) \\Rightarrow 30+5x=60+4x \\Rightarrow x=30"} />
          <p>We must add 30 diamonds.</p>
        </section>

        <MCQExample
          number={18}
          prompt="A sample contains only carbon and hydrogen atoms in a 4 to 1 ratio (carbon:hydrogen). If the sample has 5,000,000 atoms, approximately how many carbon atoms must be added so that hydrogen represents 1/6 of the sample?"
          options={["1,000,000", "2,000,000", "3,000,000", "4,000,000", "5,000,000"]}
          correct="1,000,000"
          solution={
            <>
              <p>Start with the multiplier:</p>
              <BlockMath math={"4x+x=5{,}000{,}000 \\Rightarrow 5x=5{,}000{,}000 \\Rightarrow x=1{,}000{,}000"} />
              <p>So carbon = 4,000,000 and hydrogen = 1,000,000. If hydrogen is 1/6 of the total, carbon must be 5/6. Let c be the carbon to add:</p>
              <BlockMath math={"\\dfrac{4{,}000{,}000+c}{5{,}000{,}000+c}=\\dfrac{5}{6} \\Rightarrow 6(4{,}000{,}000+c)=5(5{,}000{,}000+c)"} />
              <BlockMath math={"24{,}000{,}000+6c=25{,}000{,}000+5c \\Rightarrow c=1{,}000{,}000"} />
              <p>Answer: 1,000,000.</p>
            </>
          }
        />

        <p>
          Takeaway: translate ratios with a common multiplier, then write a single fraction equation for the
          target ratio after your add/remove step. Solve, and you’re done.
        </p>
      </article>
    </main>
  );
}