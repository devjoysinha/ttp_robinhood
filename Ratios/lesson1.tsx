import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.2 Three Equivalent Ways to Write Ratios | Ratios",
  description:
    "Learn the three interchangeable formats for writing ratios and how to invert a ratio. Includes a quick practice check and KaTeX-rendered notation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.2 Three Equivalent Ways to Write Ratios
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A single ratio can be written in several interchangeable formats. For
          instance, imagine a vet clinic with 3 dogs and 4 cats. The ratio of
          cats to dogs can be shown in any of the following ways, and each one
          communicates the same relationship.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li className="flex flex-wrap items-center gap-2">
            Fraction form:{" "}
            <span className="text-gray-100">
              <InlineMath math="\dfrac{\text{cats}}{\text{dogs}}=\dfrac{4}{3}" />
            </span>
          </li>
          <li>
            Colon form:{" "}
            <span className="text-gray-100">cats:dogs = 4:3</span>
          </li>
          <li>
            “To” form:{" "}
            <span className="text-gray-100">cats to dogs = 4 to 3</span>
          </li>
        </ul>

        <p>
          You can also flip the comparison to express dogs relative to cats by
          inverting the ratio. Using the same numbers, the ratio of dogs to cats
          becomes:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li className="flex flex-wrap items-center gap-2">
            Fraction form:{" "}
            <span className="text-gray-100">
              <InlineMath math="\dfrac{\text{dogs}}{\text{cats}}=\dfrac{3}{4}" />
            </span>
          </li>
          <li>
            Colon form:{" "}
            <span className="text-gray-100">dogs:cats = 3:4</span>
          </li>
          <li>
            “To” form:{" "}
            <span className="text-gray-100">dogs to cats = 3 to 4</span>
          </li>
        </ul>

        <MustKnow>
          The ratio comparing a quantity x to a quantity y can be written in any
          of these equivalent ways:{" "}
          <InlineMath math="\dfrac{x}{y}" /> , <InlineMath math="\text{x}:\text{y}" /> , or “x to y.”
          Inverting the comparison swaps the order: y to x is{" "}
          <InlineMath math="\dfrac{y}{x}" /> , <InlineMath math="\text{y}:\text{x}" /> , or “y to x.”
        </MustKnow>

        <MCQExample
          number={22}
          prompt="A shelter has 4 cats and 3 dogs. What is the ratio of dogs to cats?"
          options={["4/3", "3/4", "7/1", "1/7", "4:3"]}
          correct="3/4"
          solution={
            <>
              <p>
                Dogs to cats compares dogs in the numerator to cats in the
                denominator. With 3 dogs and 4 cats, the ratio is{" "}
                <InlineMath math="\dfrac{3}{4}" />.
              </p>
              <p>
                Note: cats to dogs would be 4:3, but the question asks for dogs
                to cats, which is 3:4.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}