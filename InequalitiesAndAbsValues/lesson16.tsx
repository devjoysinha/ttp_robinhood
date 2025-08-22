import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ expr, block = false }: { expr: string; block?: boolean }) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.15 Inequalities with Absolute Values | GMAT Quant",
  description:
    "Master absolute value inequalities: how to isolate, split into cases, and interpret solution sets. Includes worked examples and quick practice questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.15 Inequalities with Absolute Values
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’ve already seen how absolute value equations break into cases. The
          same idea powers absolute value inequalities. Isolate the absolute
          value, then analyze two scenarios: the expression inside the bars is
          nonnegative or negative.
        </p>

        <MustKnow>
          • First, isolate the absolute value.
          <br />
          • Then split into two cases: inside ≥ 0 and inside &lt; 0.
          <br />
          • For “less than” types like <K expr="|E|<c" /> (with <K expr="c>0" />
          ), you’ll get an AND result (a band/interval).
          <br />
          • For “greater than” types like <K expr="|E|>c" />, you’ll get an OR
          result (two rays).
          <br />
          • Don’t forget: multiplying or dividing an inequality by a negative
          flips the inequality sign.
        </MustKnow>

        <section aria-labelledby="basic-less-than">
          <h3
            id="basic-less-than"
            className="text-xl font-semibold text-white"
          >
            Warm‑up: a “less than” inequality
          </h3>
          <p>
            Suppose <K expr="|x|<8" />. Split by the sign of x:
          </p>
          <ul className="list-disc pl-6">
            <li>
              If <K expr="x\ge 0" /> then <K expr="|x|=x" /> so{" "}
              <K expr="x<8" />.
            </li>
            <li>
              If <K expr="x<0" /> then <K expr="|x|=-x" /> so{" "}
              <K expr="-x<8\ \Rightarrow\ x>-8" />.
            </li>
          </ul>
          <p>
            Combine the two: <K expr="-8<x<8" />.
          </p>
        </section>

        <section aria-labelledby="isolate-abs">
          <h3 id="isolate-abs" className="text-xl font-semibold text-white">
            Isolate first, then split
          </h3>
          <p>
            Consider <K expr="|2x+4|-12<8" />. Isolate the absolute value:
          </p>
          <p>
            <K block expr="|2x+4|<20" />
          </p>
          <p>Now break into the two cases:</p>
          <ul className="list-disc pl-6">
            <li>
              Inside nonnegative: <K expr="2x+4<20 \Rightarrow 2x<16 \Rightarrow x<8" />
            </li>
            <li>
              Inside negative:{" "}
              <K expr="-(2x+4)<20 \Rightarrow -2x-4<20 \Rightarrow -2x<24 \Rightarrow x>-12" />
            </li>
          </ul>
          <p>
            Therefore <K expr="-12<x<8" />.
          </p>
        </section>

        <section aria-labelledby="greater-than">
          <h3 id="greater-than" className="text-xl font-semibold text-white">
            A “greater than” inequality
          </h3>
          <p>
            If <K expr="|x+3|>5" />, then:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <K expr="x+3>5 \Rightarrow x>2" />
            </li>
            <li>
              <K expr="-(x+3)>5 \Rightarrow -x-3>5 \Rightarrow -x>8 \Rightarrow x<-8" />
            </li>
          </ul>
          <p>
            So the solution set is <K expr="x<-8" /> or <K expr="x>2" /> (two
            disjoint rays).
          </p>
        </section>

        <MCQExample
          number={44}
          prompt="Which description matches the graph of the solution to |x| < 2000 on a number line?"
          options={[
            "Closed circles at −2000 and 2000 with shading between them",
            "Open circles at −2000 and 2000 with shading to the left of −2000",
            "Closed circle at 2000 with shading to the right",
            "Open circles at −2000 and 2000 with shading between them",
            "Open circle at 0 with shading to the right",
          ]}
          correct="Open circles at −2000 and 2000 with shading between them"
          solution={
            <>
              <p>
                Since <K expr="|x|<2000" /> is a “less than” inequality, the
                solution is the band <K expr="-2000<x<2000" />. On a number
                line, that’s open circles at −2000 and 2000 with the segment
                between them shaded.
              </p>
            </>
          }
        />

        <MCQExample
          number={45}
          prompt="If |4x + 6| > 8, which statement is true?"
          options={[
            "x < 4",
            "x < −7/2 or x > 1/2",
            "x = 0",
            "x < 2/7",
            "−7/2 < x < 1/2",
          ]}
          correct="x < −7/2 or x > 1/2"
          solution={
            <>
              <p>Split the inequality into two cases:</p>
              <ul className="list-disc pl-6">
                <li>
                  <K expr="4x+6>8 \Rightarrow 4x>2 \Rightarrow x>\tfrac12" />
                </li>
                <li>
                  <K expr="-(4x+6)>8 \Rightarrow -4x-6>8 \Rightarrow -4x>14 \Rightarrow x<-\tfrac{7}{2}" />
                </li>
              </ul>
              <p>
                Thus, <K expr="x<-\tfrac{7}{2}" /> or <K expr="x>\tfrac12" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={46}
          title="Quick Drill: Solve and write the solution set"
          statements={[
            "Solve |3x − 9| ≤ 12.",
            "1) Isolate, then split into two cases.",
            "2) Interpret as a single interval if applicable.",
          ]}
          correctLetter="—"
          solution={
            <>
              <p>
                Isolate: already isolated. Handle the non-strict version (≤)
                the same way as “less than,” but use closed endpoints.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <K expr="3x-9\le 12 \Rightarrow 3x\le 21 \Rightarrow x\le 7" />
                </li>
                <li>
                  <K expr="-(3x-9)\le 12 \Rightarrow -3x+9\le 12 \Rightarrow -3x\le 3 \Rightarrow x\ge -1" />
                </li>
              </ul>
              <p>
                Combined: <K expr="-1\le x\le 7" /> (closed interval).
              </p>
            </>
          }
        />

        <MustKnow>
          Summary:
          <br />
          • Isolate absolute value; split into two cases.
          <br />
          • “Less than/at most” gives an interval (AND).
          <br />
          • “Greater than/at least” gives two rays (OR).
          <br />
          • Watch for sign flips when multiplying or dividing by negatives.
        </MustKnow>
      </article>
    </main>
  );
}