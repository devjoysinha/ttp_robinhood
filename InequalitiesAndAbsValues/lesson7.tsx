import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.8 Multiple Inequalities | Inequalities and Absolute Values",
  description:
    "Learn how to compare variables across several inequalities using a quick number‑line strategy. Includes two practice problems with full reasoning.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.8 Working with Multiple Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Problems often give several inequalities at once and then ask you to
          compare the sizes of different variables. Keeping all of those
          relationships straight can be tricky. A reliable approach is to sketch
          a simple number line and place each variable according to the given
          constraints; the visual makes the ordering far easier to track.
        </p>

        <MustKnow>
          When multiple inequalities are involved, plot the variables on a
          number line to visualize their order. This reduces mistakes and makes
          transitive relationships apparent at a glance.
        </MustKnow>

        <p>
          Consider the following quick check of ordering with three relations:{" "}
          <MathInline expr="a>b" ariaLabel="a is greater than b" />,{" "}
          <MathInline expr="c>a" ariaLabel="c is greater than a" />, and{" "}
          <MathInline expr="d<b" ariaLabel="d is less than b" />.
        </p>

        <MCQExample
          number={20}
          prompt="If a > b, c > a, and d < b, which of the following is true?"
          options={["d > b", "c > d", "b > c", "a < d", "a > c"]}
          correct="c > d"
          solution={
            <>
              <p>
                From <MathInline expr="a>b" /> we know{" "}
                <MathInline expr="b<a" />. Combine this with{" "}
                <MathInline expr="d<b" /> to get{" "}
                <MathInline expr="d<b<a" />. Since{" "}
                <MathInline expr="c>a" />, the full order is{" "}
                <MathInline expr="d<b<a<c" />. Therefore{" "}
                <strong>
                  <MathInline expr="c>d" />
                </strong>
                , so “c &gt; d” is correct.
              </p>
            </>
          }
        />

        <p>
          Note: when you only care about who is to the left or right on the line
          (relative order), dots are enough—no need for shaded regions or
          interval notation. The goal here is ranking, not solving for sets.
        </p>

        <MCQExample
          number={21}
          prompt="If m > n, n < p, and q > m, which of the following must be true?"
          options={[
            "I only",
            "II only",
            "III only",
            "I and II",
            "I, II, and III",
          ]}
          correct="III only"
          solution={
            <>
              <p>
                We’re given <MathInline expr="m>n" /> and{" "}
                <MathInline expr="q>m" />, which combine to the compound
                inequality <MathInline expr="q>m>n" />. We also know{" "}
                <MathInline expr="p>n" />, but nothing fixes the position of{" "}
                <MathInline expr="p" /> relative to{" "}
                <MathInline expr="m" /> or <MathInline expr="q" />.
              </p>
              <p>
                Check each statement:
                <br />
                I. <MathInline expr="p>m" />? Not guaranteed;{" "}
                <MathInline expr="p" /> could lie between{" "}
                <MathInline expr="n" /> and <MathInline expr="m" /> or to the
                right of <MathInline expr="m" />.
                <br />
                II. <MathInline expr="q>p" />? Also not forced;{" "}
                <MathInline expr="p" /> could be either left or right of{" "}
                <MathInline expr="q" /> while still satisfying{" "}
                <MathInline expr="p>n" />.
                <br />
                III. <MathInline expr="q>n" />? Yes—by transitivity from{" "}
                <MathInline expr="q>m" /> and <MathInline expr="m>n" /> we have{" "}
                <strong>
                  <MathInline expr="q>n" />
                </strong>
                .
              </p>
              <p>Thus, only statement III must be true.</p>
            </>
          }
        />

        <p>
          Takeaway: use the number line to build a consistent order from the
          given inequalities, then test uncertain comparisons by seeing where a
          variable is free to move. If a variable’s position isn’t locked,
          relations involving it may not be determined.
        </p>
      </article>
    </main>
  );
}