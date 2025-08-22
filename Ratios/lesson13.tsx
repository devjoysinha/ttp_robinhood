import type { Metadata } from "next";
import katex from "katex";
// Ensure KaTeX CSS is loaded once at the app layout level:
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight server-side KaTeX renderer (accessible with MathML)
function Math({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: display,
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={className}
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "11.13 Evaluating Ratios as Fractions | GMAT Quant",
  description:
    "Treat ratios as fractions to reason about how they change. Learn what happens when you add the same amount to numerator and denominator, scale both parts, or move units between parts. Includes a PS example with Roman numerals and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.13 Evaluating Ratios in Fraction Form
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio is simply another way to write a fraction. That perspective lets
          you predict how a ratio changes when the parts change. If the numerator
          rises while the denominator is steady or falls, the fraction grows. If
          the denominator rises while the numerator is steady or falls, the
          fraction shrinks.
        </p>

        <MustKnow>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Scaling both parts by the same positive factor leaves a ratio
              unchanged:{" "}
              <Math expr="\frac{b}{c} = \frac{kb}{kc}" ariaLabel="b over c equals k b over k c" />
              .
            </li>
            <li>
              For a proper fraction with{" "}
              <Math expr="0<b<c" ariaLabel="b less than c" />, adding the same
              positive amount to numerator and denominator moves the value toward 1
              and thus increases it:{" "}
              <Math
                expr="\frac{b+k}{c+k}>\frac{b}{c}\quad(k>0)"
                ariaLabel="(b plus k) over (c plus k) is greater than b over c"
              />
              .
            </li>
            <li>
              Pushing units from the denominator’s group to the numerator’s group
              boosts the ratio even more:{" "}
              <Math
                expr="\frac{b+k}{c-k}>\frac{b}{c}"
                ariaLabel="(b plus k) over (c minus k) is greater than b over c"
              />
              , when quantities remain positive.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={20}
          prompt="In a park there are blue jays and cardinals. If the number of cardinals is greater than the number of blue jays, which of the following actions will increase the ratio of blue jays to cardinals?"
          options={[
            "I only",
            "III only",
            "I and II",
            "I and III",
            "I, II, and III",
          ]}
          correct="I and III"
          solution={
            <>
              <p>
                Let <Math expr="b" ariaLabel="b" /> be the number of blue jays and{" "}
                <Math expr="c" ariaLabel="c" /> the number of cardinals, with{" "}
                <Math expr="0<b<c" ariaLabel="b less than c" />.
              </p>

              <p>
                I. Add k blue jays and k cardinals. New ratio is{" "}
                <Math expr="\frac{b+k}{c+k}" />. Since{" "}
                <Math expr="b/c" /> is a proper fraction and{" "}
                <Math expr="k>0" />,{" "}
                <Math expr="\frac{b+k}{c+k}>\frac{b}{c}" />. This increases the
                ratio.
              </p>

              <p>
                II. Triple both counts. New ratio{" "}
                <Math expr="\frac{3b}{3c}" /> simplifies to{" "}
                <Math expr="\frac{b}{c}" />, so it does not change.
              </p>

              <p>
                III. Move k from cardinals to blue jays (k cardinals leave, k blue
                jays enter): ratio becomes{" "}
                <Math expr="\frac{b+k}{c-k}" /> which is strictly larger than{" "}
                <Math expr="\frac{b}{c}" /> as long as counts stay positive.
              </p>

              <p>Therefore, I and III increase the ratio.</p>
            </>
          }
        />

        <p>
          When working with ratios, test specific motions: scale both parts,
          add the same amount to both, or shift units from one part to the other.
          Those maneuvers predictably move a fraction up, down, or keep it the
          same.
        </p>

        <ExampleCard
          number={21}
          title="Did the number of blueberry muffins decrease?"
          statements={[
            "Over a certain day at Sara’s Diner, blueberry and pumpkin muffins are baked and sold. Did the number of blueberry muffins for sale go down? (Only these two muffin types are for sale.)",
            "1) Over the day, the ratio of blueberry muffins to total muffins decreased.",
            "2) Over the day, the total number of muffins decreased.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let <Math expr="b" ariaLabel="b" /> be blueberry muffins and{" "}
                <Math expr="p" ariaLabel="p" /> be pumpkin muffins. The ratio in
                question is <Math expr="\frac{b}{b+p}" />.
              </p>

              <p>
                Statement (1): The fraction{" "}
                <Math expr="\frac{b}{b+p}" /> went down. That can happen in many
                ways: for instance, keep <Math expr="b" /> fixed and increase{" "}
                <Math expr="p" />, or decrease <Math expr="b" /> with{" "}
                <Math expr="p" /> fixed, or even raise both but increase{" "}
                <Math expr="p" /> relatively more. We cannot tell whether{" "}
                <Math expr="b" /> itself decreased. Not sufficient.
              </p>

              <p>
                Statement (2): The total <Math expr="b+p" /> decreased. That only
                tells us at least one of <Math expr="b" /> or <Math expr="p" /> went
                down; we still can’t isolate what happened to{" "}
                <Math expr="b" />. Not sufficient.
              </p>

              <p>
                Together: We know the total shrank and the share{" "}
                <Math expr="\frac{b}{b+p}" /> also shrank. If the denominator{" "}
                <Math expr="b+p" /> gets smaller yet the fraction decreases, the
                numerator must have dropped enough to more than offset the smaller
                denominator. Hence <Math expr="b" /> decreased. Sufficient
                together. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: think of ratios as fractions. Uniform scaling leaves them
          unchanged; adding the same positive amount to both parts raises a proper
          fraction; and reassigning units from the denominator’s group to the
          numerator’s group raises the ratio sharply.
        </p>
      </article>
    </main>
  );
}