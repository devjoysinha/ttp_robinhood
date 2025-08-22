import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.5 Solve Unknowns with the Symmetry of Combinations | Combinatorics",
  description:
    "Learn to solve for unknowns using the symmetry of combinations: C(n,k) = C(n,n−k). Includes a quick warm‑up, a must‑know identity, and two multiple‑choice examples with full reasoning.",
};

// Server-rendered KaTeX helper
function Eq({
  formula,
  display = false,
  ariaLabel,
}: {
  formula: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel ?? formula}
      className={display ? "my-2 block text-center" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.5 Solving for Unknowns Using the Symmetry of Combinations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Earlier, we used the symmetry of combinations to simplify large
          expressions. The same idea also lets us find unknowns when two
          combinations with the same top number are equal.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-medium">Core identities to remember:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Symmetry:
                {" "}
                <Eq formula="\,\binom{n}{k}=\binom{n}{\,n-k\,}" ariaLabel="n choose k equals n choose n minus k" />
              </li>
              <li>
                If
                {" "}
                <Eq formula="\binom{N}{x}=\binom{N}{y}" />
                {" "}
                (with the same
                {" "}
                <Eq formula="N" />
                {" "}
                on top), then
                {" "}
                <Eq formula="N=x+y" ariaLabel="N equals x plus y" />.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-white font-semibold">
            Quick warm‑up
          </h3>
          <p>
            Suppose
            {" "}
            <Eq formula="\binom{49}{44}=\binom{49}{y}" />
            . By symmetry,
          </p>
          <Eq
            display
            formula="\binom{49}{44}=\binom{49}{\,49-44\,}=\binom{49}{5}"
            ariaLabel="49 choose 44 equals 49 choose 5"
          />
          <p>
            Therefore,
            {" "}
            <Eq formula="y=5" />
            .
          </p>
        </section>

        <section aria-labelledby="equivalent-pairs" className="space-y-3">
          <h3 id="equivalent-pairs" className="text-white font-semibold">
            Spotting equivalent pairs
          </h3>
          <p>These pairs illustrate the symmetry:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <Eq formula="\binom{12}{10}=\binom{12}{2}" />
            </li>
            <li>
              <Eq formula="\binom{30}{27}=\binom{30}{3}" />
            </li>
            <li>
              <Eq formula="\binom{11}{9}=\binom{11}{2}" />
            </li>
            <li>
              <Eq formula="\binom{25}{21}=\binom{25}{4}" />
            </li>
            <li>
              <Eq formula="\binom{49}{44}=\binom{49}{5}" />
            </li>
          </ul>
          <p>
            In each case, the top value matches, and the two bottom values add
            up to that top value.
          </p>
        </section>

        <MCQExample
          number={46}
          prompt="If W and r are positive integers with W > r, and C(W, r) = C(W, t), what is the value of t?"
          options={["W − r", "W + r", "r − W", "Wr", "W/r"]}
          correct="W − r"
          solution={
            <>
              <p>
                Use symmetry with the same top value:
                {" "}
                <Eq formula="\binom{W}{r}=\binom{W}{\,W-r\,}" />
                . Since
                {" "}
                <Eq formula="\binom{W}{r}=\binom{W}{t}" />
                , it must be that
                {" "}
                <Eq formula="t=W-r" />
                .
              </p>
            </>
          }
        />

        <section aria-labelledby="word-problem" className="space-y-3">
          <h3 id="word-problem" className="text-white font-semibold">
            Apply the identity in a context
          </h3>
          <p>
            Two pizza shops each offer a total of
            {" "}
            <Eq formula="T" />
            {" "}
            toppings. At one shop, a customer chooses
            {" "}
            <Eq formula="c" />
            {" "}
            toppings in
            {" "}
            <Eq formula="x" />
            {" "}
            ways; at the other, a customer chooses
            {" "}
            <Eq formula="d" />
            {" "}
            toppings in
            {" "}
            <Eq formula="y" />
            {" "}
            ways. If
            {" "}
            <Eq formula="x=y" />
            {" "}
            and
            {" "}
            <Eq formula="0<d<c<T" />
            , what must be true of
            {" "}
            <Eq formula="T" />
            ?
          </p>
        </section>

        <MCQExample
          number={47}
          prompt="Given x = y and 0 < d < c < T for two combination counts from the same T toppings, which statement about T must be true?"
          options={["T = cd", "T = c^d", "T = c − d", "T = c + d", "T = c/d"]}
          correct="T = c + d"
          solution={
            <>
              <p>
                The counts are
                {" "}
                <Eq formula="x=\binom{T}{c}" />
                {" "}
                and
                {" "}
                <Eq formula="y=\binom{T}{d}" />
                . Since
                {" "}
                <Eq formula="x=y" />
                {" "}
                and the top value
                {" "}
                <Eq formula="T" />
                {" "}
                is the same, symmetry implies
                {" "}
                <Eq formula="T=c+d" />
                .
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: when two combinations share the same top value and are
          equal, either the bottom numbers match or they are complementary and
          sum to the top. That simple fact quickly unlocks unknowns.
        </p>
      </article>
    </main>
  );
}