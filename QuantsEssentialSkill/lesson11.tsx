import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Client-only KaTeX components (rendered on the client to avoid SSR issues)
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "2.2 Comparing the Size of Fractions | Essential GMAT Quant Skills",
  description:
    "Quick, reliable ways to compare fractions: use reference points such as 1/2 or 1, same‑denominator and same‑numerator rules, and the bow‑tie (cross‑multiply) method. Includes a multiple‑choice drill and two Data Sufficiency examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2 Comparing the Size of Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Being able to compare fractions quickly is a high‑leverage test skill.
          In this lesson, you’ll learn fast, dependable techniques to tell which
          fraction is larger without computing decimals.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-200">Core ideas for fast comparisons</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use reference points. Many fractions sit naturally around{" "}
                <InlineMath math="\tfrac{1}{2}" /> or 1. For instance,{" "}
                <InlineMath math="\tfrac{5}{8}" /> is above{" "}
                <InlineMath math="\tfrac{1}{2}" /> (since{" "}
                <InlineMath math="\tfrac{4}{8}=\tfrac{1}{2}" />), while{" "}
                <InlineMath math="\tfrac{7}{15}" /> is below{" "}
                <InlineMath math="\tfrac{1}{2}" /> (since{" "}
                <InlineMath math="\tfrac{7.5}{15}=\tfrac{1}{2}" />).
              </li>
              <li>
                Same denominator: larger numerator ⇒ larger fraction. Example:{" "}
                <InlineMath math="\tfrac{7}{19} > \tfrac{5}{19}" />.
              </li>
              <li>
                Same numerator: smaller denominator ⇒ larger fraction. Example:{" "}
                <InlineMath math="\tfrac{7}{12} > \tfrac{7}{15}" />.
              </li>
              <li>
                Bow‑tie (cross‑multiply) for positive denominators: compare{" "}
                <InlineMath math="\tfrac{a}{b}" /> and{" "}
                <InlineMath math="\tfrac{c}{d}" /> by checking{" "}
                <InlineMath math="ad" /> vs. <InlineMath math="bc" />. No need to
                reduce or find a common denominator.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="ref-point" className="space-y-3">
          <h3 id="ref-point" className="text-xl font-semibold text-white">
            Reference point strategy
          </h3>
          <p>
            Fractions close to <InlineMath math="\tfrac{1}{2}" /> or 1 are easy to
            rank by their “gap” from that anchor. Example: compare{" "}
            <InlineMath math="\tfrac{7}{12}" /> and <InlineMath math="\tfrac{5}{8}" />.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Against <InlineMath math="\tfrac{1}{2}" />:{" "}
              <InlineMath math="\tfrac{7}{12}=\tfrac{0.5}{1}+ \tfrac{1}{12}" /> (one twelfth above{" "}
              <InlineMath math="\tfrac{1}{2}" />), while{" "}
              <InlineMath math="\tfrac{5}{8}=\tfrac{0.5}{1}+ \tfrac{1}{8}" /> (one eighth above{" "}
              <InlineMath math="\tfrac{1}{2}" />). Since{" "}
              <InlineMath math="\tfrac{1}{8} > \tfrac{1}{12}" />,{" "}
              <InlineMath math="\tfrac{5}{8}" /> is farther above{" "}
              <InlineMath math="\tfrac{1}{2}" /> and is therefore larger.
            </li>
            <li>
              Cross‑multiplication confirms it: compare{" "}
              <InlineMath math="7 \cdot 8 = 56" /> with{" "}
              <InlineMath math="5 \cdot 12 = 60" />. Because{" "}
              <InlineMath math="56 < 60" />, we have{" "}
              <InlineMath math="\tfrac{7}{12} < \tfrac{5}{8}" />.
            </li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt="Which fraction is greater?"
          options={["7/12", "5/8", "They are equal", "Cannot be determined"]}
          correct="5/8"
          solution={
            <>
              <p>
                Using a reference point, both are above <InlineMath math="\tfrac{1}{2}" />, but{" "}
                <InlineMath math="\tfrac{5}{8}" /> is{" "}
                <InlineMath math="\tfrac{1}{8}" /> above{" "}
                <InlineMath math="\tfrac{1}{2}" /> while{" "}
                <InlineMath math="\tfrac{7}{12}" /> is only{" "}
                <InlineMath math="\tfrac{1}{12}" /> above. Since{" "}
                <InlineMath math="\tfrac{1}{8} > \tfrac{1}{12}" />,{" "}
                <InlineMath math="\tfrac{5}{8}" /> is larger.
              </p>
              <p>
                Bow‑tie check: compare <InlineMath math="7\cdot 8=56" /> and{" "}
                <InlineMath math="5\cdot 12=60" />. Because{" "}
                <InlineMath math="56<60" />, we have{" "}
                <InlineMath math="\tfrac{7}{12}<\tfrac{5}{8}" />.
              </p>
            </>
          }
        />

        <section aria-labelledby="bow-tie" className="space-y-3">
          <h3 id="bow-tie" className="text-xl font-semibold text-white">
            Bow‑tie (cross‑multiply) method
          </h3>
          <p>
            For positive denominators, you can compare{" "}
            <InlineMath math="\tfrac{a}{b}" /> and <InlineMath math="\tfrac{c}{d}" /> by
            checking <InlineMath math="ad" /> vs. <InlineMath math="bc" />. The larger
            product indicates the larger fraction.
          </p>
          <BlockMath math="\frac{a}{b} \quad ? \quad \frac{c}{d} \;\;\Longleftrightarrow\;\; ad \quad ? \quad bc" />
          <p>
            This avoids converting to decimals or finding common denominators and
            is especially helpful under time pressure.
          </p>
        </section>

        <ExampleCard
          number={22}
          title="Is x/y greater than 1/2?"
          statements={[
            "Let x and y be positive integers. Is x/y > 1/2?",
            "1) x = y/2 + 3",
            "2) y > 6 and x ≥ 3",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We need to decide whether <InlineMath math="\tfrac{x}{y}>\tfrac{1}{2}" />.
              </p>
              <p>
                <strong>Statement (1):</strong> <InlineMath math="x = \tfrac{y}{2}+3" /> with{" "}
                <InlineMath math="y>0" /> implies{" "}
                <InlineMath math="\tfrac{x}{y}=\tfrac{1}{2}+\tfrac{3}{y}>\tfrac{1}{2}" />.
                Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing only that{" "}
                <InlineMath math="y>6" /> and <InlineMath math="x\ge 3" /> doesn’t fix{" "}
                <InlineMath math="\tfrac{x}{y}" /> relative to{" "}
                <InlineMath math="\tfrac{1}{2}" />. For example,{" "}
                <InlineMath math="x=3,y=100\Rightarrow \tfrac{x}{y}=0.03<\tfrac12" />, but{" "}
                <InlineMath math="x=50,y=7\Rightarrow \tfrac{x}{y}\approx 7.14>\tfrac12" />. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone is sufficient. Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={23}
          title="Testing a comparison with a variable numerator"
          statements={[
            "Is a/9 > 5/12, where a is a positive integer?",
            "1) a = 4",
            "2) a ≥ 5",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Compare <InlineMath math="\tfrac{a}{9}" /> to{" "}
                <InlineMath math="\tfrac{5}{12}" /> via cross‑multiplication: check{" "}
                <InlineMath math="12a" /> vs. <InlineMath math="45" />.
              </p>
              <p>
                <strong>Statement (1):</strong> If <InlineMath math="a=4" />, then{" "}
                <InlineMath math="12a=48>45" />, so{" "}
                <InlineMath math="\tfrac{a}{9}>\tfrac{5}{12}" />. Sufficient to answer “Yes.”
              </p>
              <p>
                <strong>Statement (2):</strong> If <InlineMath math="a\ge 5" />, then{" "}
                <InlineMath math="12a\ge 60>45" />, so{" "}
                <InlineMath math="\tfrac{a}{9}>\tfrac{5}{12}" /> for all such{" "}
                <InlineMath math="a" />. Also sufficient.
              </p>
              <p>Each statement alone answers the question. Answer: D.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Fraction comparisons are about structure, not computation. Anchor at{" "}
            <InlineMath math="\tfrac{1}{2}" /> or 1 when possible, exploit same‑denominator
            or same‑numerator shortcuts, and use the bow‑tie method to avoid
            unnecessary arithmetic.
          </p>
        </section>
      </article>
    </main>
  );
}