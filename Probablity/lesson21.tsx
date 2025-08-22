import 'katex/dist/katex.min.css';
import type { Metadata } from "next";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.15 Algebra and Probability | Probability",
  description:
    "Learn why a probability on its own rarely fixes group sizes and how adding a second equation lets you solve exact counts. Includes a DS-style drill and a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.15 Algebra and Probability
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A probability is a ratio of favorable outcomes to total outcomes. Because ratios
          don’t determine absolute sizes, a single probability usually cannot tell you the exact
          number of items in each group without extra information.
        </p>

        <p>
          For instance, if the probability of choosing a girl from a class is{" "}
          <InlineMath math="\tfrac{3}{7}" />, let girls be <InlineMath math="g" /> and boys be{" "}
          <InlineMath math="b" />. Then
        </p>

        <BlockMath math={`P(\\text{girl})=\\frac{g}{g+b}=\\frac{3}{7}
\\;\\Longrightarrow\\; 7g=3g+3b\\;\\Longrightarrow\\; 4g=3b`} />

        <p>
          The equation <InlineMath math="4g=3b" /> admits infinitely many integer solutions
          (for example, <InlineMath math="(g,b)=(3,4)" /> or <InlineMath math="(6,8)" />),
          all consistent with <InlineMath math="P(\\text{girl})=\\tfrac{3}{7}" />. To pin down
          actual counts, you need a second, independent relationship between{" "}
          <InlineMath math="g" /> and <InlineMath math="b" />.
        </p>

        <MustKnow>
          A lone probability rarely fixes group sizes. To solve for exact counts, combine the
          probability with another independent equation (for example, a difference, sum, or ratio
          relating the same variables).
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked example: adding a second equation
          </h3>
          <p>
            Suppose the class still satisfies <InlineMath math="P(\\text{girl})=\\tfrac{3}{7}" />,
            and in addition there are 4 more boys than girls. How many girls are in the class?
          </p>

          <p>Set up the system:</p>

          <BlockMath math={`\\frac{g}{g+b}=\\frac{3}{7} \\quad\\text{and}\\quad b=g+4`} />

          <p>From the probability:</p>
          <BlockMath math={`7g=3g+3b\\;\\Rightarrow\\;4g=3b`} />

          <p>Substitute <InlineMath math="b=g+4" /> into <InlineMath math="4g=3b" />:</p>

          <BlockMath math={`4g=3(g+4)\\;\\Rightarrow\\;4g=3g+12\\;\\Rightarrow\\;g=12`} />

          <p>
            There are 12 girls. Then <InlineMath math="b=12+4=16" />, and the probability check
            still holds:
          </p>

          <BlockMath math={`\\frac{g}{g+b}=\\frac{12}{12+16}=\\frac{12}{28}=\\frac{3}{7}`} />
        </section>

        <ExampleCard
          number={28}
          title="Do we have enough to find exact counts?"
          statements={[
            "In a class of girls and boys, how many girls are there?",
            "1) The probability of selecting a girl is 3/7.",
            "2) There are 4 more boys than girls.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want a single numeric value for the number of girls. Assess each statement:
              </p>
              <p>
                <strong>1 alone:</strong> From <InlineMath math="g/(g+b)=3/7" /> we get{" "}
                <InlineMath math="4g=3b" />, which has infinitely many solutions. Not sufficient.
              </p>
              <p>
                <strong>2 alone:</strong> The relation <InlineMath math="b=g+4" /> doesn’t fix{" "}
                <InlineMath math="g" /> by itself. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> Solve{" "}
                <InlineMath math="\\{\\,g/(g+b)=3/7,\\;b=g+4\\}" /> to get{" "}
                <InlineMath math="g=12" />. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={29}
          prompt="A law firm has partners and associates. If one employee is chosen at random, the probability of choosing a partner is 1/5. If there are 12 more associates than partners, how many associates does the firm have?"
          options={["4", "8", "16", "18", "20"]}
          correct="16"
          solution={
            <>
              <p>
                Let <InlineMath math="p" /> be partners and <InlineMath math="a" /> be associates. The
                probability gives
              </p>
              <BlockMath math={`\\frac{p}{a+p}=\\frac{1}{5}\\;\\Rightarrow\\;5p=a+p\\;\\Rightarrow\\;a=4p`} />
              <p>The difference relation is <InlineMath math="a=p+12" />. Combine:</p>
              <BlockMath math={`4p=p+12\\;\\Rightarrow\\;3p=12\\;\\Rightarrow\\;p=4\\;\\Rightarrow\\;a=16`} />
              <p>Thus, the firm has 16 associates.</p>
            </>
          }
        />

        <p>
          Bottom line: treat the probability as one equation. If you can pair it with a second,
          independent equation in the same variables, you can usually solve the exact counts.
          Without that extra constraint, only ratios—not totals—are determined.
        </p>
      </article>
    </main>
  );
}