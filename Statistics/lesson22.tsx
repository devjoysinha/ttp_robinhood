import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Small server-safe KaTeX renderer
import katex from "katex";
function Tex({ expr, as = "span", block = false, ariaLabel }: { expr: string; as?: "span" | "div"; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  const Comp = as;
  return <Comp aria-label={ariaLabel ?? expr} className={block ? "my-3" : ""} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "14.5.5 Ratios and Fractions in Weighted Averages | Statistics",
  description:
    "Learn to compute weighted averages using ratios and fractions. Includes one multiple‑choice problem and three Data Sufficiency drills with full reasoning and KaTeX‑rendered math.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.5.5 Using Ratios and Fractions When Solving Weighted Averages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two groups have known group averages, you can still find the combined average without the exact group sizes—as long as you know how those sizes compare. Ratios or fractional parts of the whole act as the weights in a weighted average.
        </p>

        <MustKnow>
          If you know the values being averaged and the relative sizes of the groups (via a ratio or fraction of the total), the overall weighted average is uniquely determined.
        </MustKnow>

        <section aria-labelledby="wa-formula">
          <h3 id="wa-formula" className="text-xl font-semibold text-white">Weighted‑average setup</h3>
          <p>Suppose group A has average 1000 and group B has average 1600. Let A and B be the counts in each group. Then:</p>
          <Tex block expr="WA=\dfrac{1000\cdot A+1600\cdot B}{A+B}" ariaLabel="Weighted average equals (1000 A + 1600 B) divided by (A + B)" />
          <p>
            With only A and B unknown, this formula doesn’t resolve to a single number. But if we also know the ratio A:B, we can rewrite one variable in terms of the other and evaluate the average.
          </p>
          <p>For instance, if A:B = 2:3, then A = (2/3)B, so</p>
          <Tex
            block
            expr={`WA=\\dfrac{1000\\cdot\\tfrac{2}{3}B+1600\\cdot B}{\\tfrac{2}{3}B+B}
            =\\dfrac{\\tfrac{2000}{3}B+1600B}{\\tfrac{5}{3}B}
            =\\dfrac{\\tfrac{6800}{3}B}{\\tfrac{5}{3}B}
            =\\dfrac{6800}{5}=1360`}
            ariaLabel="Weighted average equals 1360"
          />
          <p>The B’s cancel, leaving a single, fixed combined average.</p>
        </section>

        <MustKnow>
          Weighted average template: <Tex expr="WA=\dfrac{\sum w_i x_i}{\sum w_i}" ariaLabel="WA equals sum of w i x i divided by sum of w i" /> where each weight <Tex expr="w_i" /> is either a count, a ratio‑based multiple, or a fraction of the total.
        </MustKnow>

        <MCQExample
          number={33}
          prompt="The mean IQ in class A is 100 and in class B is 160. If the combined mean of A and B together is 120, what is the ratio of the number of students in A to the number in B?"
          options={["3:2", "2:1", "3:1", "4:3", "5:4"]}
          correct="2:1"
          solution={
            <>
              <p>Let A and B be the class sizes. Set up the weighted average:</p>
              <Tex block expr="120=\dfrac{100A+160B}{A+B}" />
              <Tex block expr="120A+120B=100A+160B\ \Rightarrow\ 20A=40B\ \Rightarrow\ \dfrac{A}{B}=2" />
              <p>Therefore the ratio A:B is 2:1.</p>
            </>
          }
        />

        <p>Ratios are not the only way to weight. If you know what fraction of the entire population each group represents, those fractions serve as the weights directly.</p>

        <section aria-labelledby="fractions-of-whole">
          <h3 id="fractions-of-whole" className="text-xl font-semibold text-white">Using fractions of the whole</h3>
          <p>
            Imagine a room with x people. Women’s average shoe size is 8, men’s is 12. If one quarter are women and three quarters are men, then the overall average shoe size is:
          </p>
          <Tex block expr="WA=\dfrac{8\cdot \tfrac{x}{4}+12\cdot \tfrac{3x}{4}}{x}=\dfrac{2x+9x}{x}=11" ariaLabel="Weighted average equals 11" />
        </section>

        <MustKnow>
          Fractions act like weights. If a group is, say, one fourth of the total, its weight is <Tex expr="\tfrac{1}{4}" /> and the other group’s weight is <Tex expr="\tfrac{3}{4}" />.
        </MustKnow>

        <ExampleCard
          number={34}
          title="Average ticket price with a ratio of buyers"
          statements={[
            "At a museum last week, student tickets cost $10 and all other tickets cost $20. What was the average revenue per ticket last week?",
            "1) More than 100 student tickets were sold.",
            "2) The ratio of student tickets sold to other tickets sold was 9 to 5.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>Let s be student tickets and t be other tickets.</p>
              <p>
                Statement (1) only says s &gt; 100. Without a relationship between s and t, the average can vary widely. Not sufficient.
              </p>
              <p>
                Statement (2) gives s:t = 9:5 ⇒ let s = 9k and t = 5k. Then the average price is
              </p>
              <Tex block expr="WA=\dfrac{10\cdot 9k+20\cdot 5k}{9k+5k}=\dfrac{90k+100k}{14k}=\dfrac{190}{14}=\dfrac{95}{7}\approx 13.57" />
              <p>
                A single value results, independent of k. Sufficient. Answer: B.
              </p>
            </>
          }
        />

        <ExampleCard
          number={35}
          title="Average commands per second from two processors"
          statements={[
            "A computer has two processors, A and B. Exactly one runs at any moment. What was the average number of commands per second (cps) executed between 10am and 11am?",
            "1) Processor A runs at 10^6 cps and processor B runs at 10^8 cps.",
            "2) Between 10am and 11am, the ratio of time A ran to time B ran was 2 to 1.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                (1) Alone gives only the rates, not how long each ran. Many average values are possible. Not sufficient.
              </p>
              <p>
                (2) Alone gives only a time split, not the rates. Again, many averages are possible. Not sufficient.
              </p>
              <p>
                Together, we can weight by time: with time ratio 2:1, the hour‑average cps is
              </p>
              <Tex block expr="\dfrac{2\cdot 10^6+1\cdot 10^8}{2+1}=\dfrac{2\times 10^6+10^8}{3}" />
              <p>
                This is uniquely determined. Sufficient together. Answer: C.
              </p>
            </>
          }
        />

        <ExampleCard
          number={36}
          title="Average by fractions of a class"
          statements={[
            "A class has x students, each either left‑handed or right‑handed (not both). The class average is 90. What is the average for the left‑handed group?",
            "1) The class has 20 students.",
            "2) There are x/5 right‑handed students, and they average 95.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                (1) The total headcount alone does not pin down the split or the left‑handed average. Not sufficient.
              </p>
              <p>
                (2) Right‑handed count is x/5, so left‑handed count is 4x/5. Let L be the left‑handed average. Then:
              </p>
              <Tex block expr="90=\dfrac{\left(\tfrac{x}{5}\right)\cdot 95+\left(\tfrac{4x}{5}\right)\cdot L}{x}" />
              <Tex block expr="90x=\tfrac{x}{5}\cdot 95+\tfrac{4x}{5}L\ \Rightarrow\ 450x=95x+4xL\ \Rightarrow\ 450=95+4L\ \Rightarrow\ L=\tfrac{355}{4}=88.75" />
              <p>
                A unique value is obtained. Sufficient. Answer: B.
              </p>
            </>
          }
        />

        <p>
          Takeaway: treat ratios and fractions as weights. Once the weights and the group averages are known, the combined average is fixed—no matter the absolute group sizes.
        </p>
      </article>
    </main>
  );
}