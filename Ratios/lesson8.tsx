import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.8 Useful Ratios | Ratios",
  description:
    "Learn when a ratio written with variables is actually informative. See why some ratios can’t be pinned down and how cancellation yields a constant. Includes two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.8 What Makes a Ratio “Useful”?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Ratios are meant to communicate a fixed relationship between two
          quantities. When a ratio contains variables, it’s only useful if the
          expression simplifies to a constant that does not depend on unknown
          values.
        </p>

        <MustKnow>
          A ratio is informative when unknowns cancel and the result is a single
          constant. If the ratio still varies with the values of the variables,
          then the relationship isn’t determined.
        </MustKnow>

        <section aria-labelledby="examples-of-non-constant">
          <h3 id="examples-of-non-constant" className="text-white font-semibold">
            When variables don’t cancel (ratio not fixed)
          </h3>
          <p className="mt-2">
            Suppose an office has m managers and m + 4 workers. The ratio of
            workers to managers would be{" "}
            <InlineMath math=" \dfrac{m + 4}{m} " />. Because this depends on{" "}
            <InlineMath math="m" />, it isn’t fixed. For instance:
          </p>
          <ul className="list-disc pl-6">
            <li>
              If <InlineMath math="m = 4" />, then{" "}
              <InlineMath math="\dfrac{m+4}{m} = \dfrac{8}{4} = 2" />.
            </li>
            <li>
              If <InlineMath math="m = 7" />, then{" "}
              <InlineMath math="\dfrac{m+4}{m} = \dfrac{11}{7}" />.
            </li>
          </ul>
          <p className="mt-2">
            Similarly, if there are 4 workers and m managers, the ratio{" "}
            <InlineMath math="\dfrac{4}{m}" /> is not determined without a value
            for <InlineMath math="m" />.
          </p>
          <p>
            If there are <InlineMath math="m+n" /> workers and{" "}
            <InlineMath math="m-n" /> managers, then{" "}
            <InlineMath math="\dfrac{m+n}{m-n}" /> is also undefined as a single
            constant until specific values are known.
          </p>
        </section>

        <section aria-labelledby="examples-of-constant">
          <h3 id="examples-of-constant" className="text-white font-semibold">
            When variables cancel (ratio fixed)
          </h3>
          <p className="mt-2">
            Now suppose there are <InlineMath math="5m" /> workers and{" "}
            <InlineMath math="m" /> managers. The ratio is
          </p>
          <BlockMath math="\dfrac{5m}{m} = \dfrac{5}{1} = 5:1" />
          <p>
            Here, the <InlineMath math="m" /> cancels, leaving a constant 5:1
            relationship regardless of the value of{" "}
            <InlineMath math="m" />.
          </p>
        </section>

        <section aria-labelledby="ds-1">
          <ExampleCard
            number={8}
            title="Revenue ratio with prices and quantities (Data Sufficiency)"
            statements={[
              "Last Sunday, a vineyard sold red wine for r dollars per case and white wine for w dollars per case. What was the ratio of revenue from red wine to revenue from white wine?",
              "1) The vineyard sold 4 times as many cases of red as of white.",
              "2) Each case of white cost $50 more than each case of red.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Let <InlineMath math="x" /> and <InlineMath math="y" /> be the
                  numbers of red and white cases sold, respectively. The target
                  ratio is:
                </p>
                <BlockMath math="\dfrac{\text{red revenue}}{\text{white revenue}} = \dfrac{r x}{w y}" />
                <p>
                  Statement (1): “Sold 4 times as many red cases as white” gives{" "}
                  <InlineMath math="x = 4y" />. Then
                </p>
                <BlockMath math="\dfrac{r(4y)}{w y} = \dfrac{4r}{w}" />
                <p>
                  Two unknowns remain and the value depends on{" "}
                  <InlineMath math="r" /> and <InlineMath math="w" />. Not
                  sufficient.
                </p>
                <p>
                  Statement (2): “White is $50 more than red” gives{" "}
                  <InlineMath math="w = r + 50" />. Then
                </p>
                <BlockMath math="\dfrac{r x}{(r + 50) y}" />
                <p>
                  The ratio still varies with multiple unknowns. Not sufficient.
                </p>
                <p>
                  Together: from (1) and (2),
                </p>
                <BlockMath math="\dfrac{r(4y)}{(r + 50) y} = \dfrac{4r}{r + 50}" />
                <p>
                  This still changes with <InlineMath math="r" />. Not
                  sufficient. Answer: E.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ds-2">
          <ExampleCard
            number={9}
            title="When price and quantity factors cancel (Data Sufficiency)"
            statements={[
              "Last Sunday, a vineyard sold red wine for r dollars per case and white wine for w dollars per case. What was the ratio of revenue from red wine to revenue from white wine?",
              "1) Each case of red cost 3 times as much as each case of white.",
              "2) The vineyard sold twice as many cases of white as of red.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  With <InlineMath math="x" /> red cases and{" "}
                  <InlineMath math="y" /> white cases, the ratio is{" "}
                  <InlineMath math="\dfrac{r x}{w y}" />.
                </p>
                <p>
                  Statement (1): <InlineMath math="r = 3w" />. Then
                </p>
                <BlockMath math="\dfrac{3w \, x}{w \, y} = \dfrac{3x}{y}" />
                <p>Still depends on quantities. Not sufficient.</p>
                <p>
                  Statement (2): <InlineMath math="y = 2x" />. Then
                </p>
                <BlockMath math="\dfrac{r x}{w \, (2x)} = \dfrac{r}{2w}" />
                <p>Still depends on prices. Not sufficient.</p>
                <p>
                  Together: substitute both relationships,
                </p>
                <BlockMath math="\dfrac{3w \, x}{w \, (2x)} = \dfrac{3}{2}" />
                <p>
                  All unknowns cancel to a constant. Sufficient only when
                  combined. Answer: C.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: a ratio written with variables is only “useful” if those
          variables eliminate and leave a single constant. If the middle terms
          keep the expression variable, the ratio isn’t determined.
        </p>
      </article>
    </main>
  );
}