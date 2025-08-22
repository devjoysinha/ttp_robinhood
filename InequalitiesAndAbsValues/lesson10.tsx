import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.11 Absolute Value | Inequalities and Absolute Values",
  description:
    "Understand absolute value as distance on the number line, use the piecewise definition, and practice with quick examples involving |x| equations and quadratic roots.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.11 Absolute Value
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A helpful way to view absolute value is as a distance on the real
          number line. The value inside the bars is measured from zero, so its
          sign doesn’t matter. For instance,{" "}
          <InlineMath math="|100|=100" /> and <InlineMath math="|-100|=100" />.
        </p>

        <MustKnow>
          Absolute value reports how far a number is from zero on the number
          line. It ignores sign.
        </MustKnow>

        <p>
          Algebraically, absolute value can be written with a piecewise rule:
        </p>

        <BlockMath math={`|a|=\\begin{cases}
a, & a\\ge 0 \\\\
-a, & a<0
\\end{cases}`} />

        <p>
          A direct consequence is that <InlineMath math="|a|=|-a|" /> for every
          real number a.
        </p>

        <MustKnow>
          For any real a: if <InlineMath math="a\ge 0" />, then{" "}
          <InlineMath math="|a|=a" />; if <InlineMath math="a<0" />, then{" "}
          <InlineMath math="|a|=-a" />. Also, <InlineMath math="|a|=|-a|" />.
        </MustKnow>

        <MCQExample
          number={26}
          prompt="Which set describes the solutions to the equation |x| = 12?"
          options={[
            "x = 12 only",
            "x = -12 only",
            "x = -12 or x = 12",
            "All real x with x ≥ 12",
            "All real x with |x| ≥ 12",
          ]}
          correct="x = -12 or x = 12"
          solution={
            <>
              <p>
                Solve <InlineMath math="|x|=12" /> by considering both cases:
              </p>
              <BlockMath math={`|x|=12\\;\\Rightarrow\\; x=12\\;\\text{or}\\;x=-12`} />
              <p>
                So the solution set is exactly{" "}
                <InlineMath math="\\{-12,\\;12\\}" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={27}
          prompt='Which of the following equations has at least one solution equal to -|-5|?'
          options={["I only", "II only", "III only", "I and II", "I and III"]}
          correct="I and III"
          solution={
            <>
              <p>
                First compute <InlineMath math="-|-5|=-5" />.
              </p>
              <p>
                I) <InlineMath math="x^2+3x-10=0" /> factors to{" "}
                <InlineMath math="(x+5)(x-2)=0" />, so{" "}
                <InlineMath math="x=-5" /> or <InlineMath math="x=2" />. This
                includes <InlineMath math="-5" />.
              </p>
              <p>
                II) <InlineMath math="x^2-9=0" /> gives{" "}
                <InlineMath math="x=\\pm 3" />. No <InlineMath math="-5" /> here.
              </p>
              <p>
                III) <InlineMath math="100x^2+300x-1000=0" /> divides by 100 to{" "}
                <InlineMath math="x^2+3x-10=0" />, the same as I, so it includes{" "}
                <InlineMath math="-5" />.
              </p>
              <p>Therefore, I and III.</p>
            </>
          }
        />

        <MCQExample
          number={28}
          prompt="If x^2 = 100, which of the following could be the value of |x| + 10?"
          options={["20", "10", "0", "I and III", "I, II, and III"]}
          correct="20"
          solution={
            <>
              <p>
                From <InlineMath math="x^2=100" />,{" "}
                <InlineMath math="x=10" /> or <InlineMath math="x=-10" />. In
                both cases, <InlineMath math="|x|=10" />, so{" "}
                <InlineMath math="|x|+10=20" />. No other value is possible.
              </p>
            </>
          }
        />

        <p>
          Big takeaway: absolute value is about distance. Use the piecewise
          definition when signs complicate an expression, and remember{" "}
          <InlineMath math="|a|=|-a|" /> to simplify quickly.
        </p>
      </article>
    </main>
  );
}