import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "11.4 Ratio Alone Does Not Give Actual Counts | Ratios",
  description:
    "A ratio only captures a relative comparison, not exact amounts. Learn why additional information is needed and practice with a Data Sufficiency example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.4 A Ratio by Itself Doesn’t Reveal Actual Quantities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio describes how two quantities compare, not how large they are.
          Without extra details, you cannot pin down the specific counts for each
          part of the ratio.
        </p>

        <p>
          For example, suppose the number of zebras to elephants is in the ratio{" "}
          <InlineMath math="\;5:2\;" aria-label="five to two" />. That could be{" "}
          <InlineMath math="50:20" aria-label="fifty to twenty" />,{" "}
          <InlineMath math="500:200" aria-label="five hundred to two hundred" />, or any
          other common multiple of <InlineMath math="5" /> and{" "}
          <InlineMath math="2" />. The relationship is fixed, but the actual counts are
          not determined.
        </p>

        <MustKnow>
          A ratio communicates relative size only. By itself, it does not determine
          unique values for each quantity. To find actual numbers, you need another
          piece of information (for instance, a total, a difference, or one exact
          part).
        </MustKnow>

        <p>
          You’ll often see this idea tested in Data Sufficiency. If a prompt gives only
          a ratio—without a total, a fixed difference, or a concrete count—you generally
          can’t solve for the exact amounts.
        </p>

        <ExampleCard
          number={19}
          title="How many boys are in the class?"
          statements={[
            "1) The ratio of boys to girls is 4 to 3.",
            "2) The ratio of boys to total students is 4 to 7.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We’re asked for the exact number of boys. Consider each statement.
              </p>

              <p>
                Statement (1): boys:girls = 4:3. This admits many possibilities:
                4 boys and 3 girls, 40 and 30, 400 and 300, and so on. With no
                total or additional constraint, the number of boys isn’t fixed.
                Not sufficient.
              </p>

              <p>
                Statement (2): boys:total = 4:7. This also allows infinitely many
                class sizes: 4 boys out of 7 students, 40 out of 70, 400 out of 700, etc.
                Again, the exact number of boys is not determined. Not sufficient.
              </p>

              <p>
                Together: From (1), <InlineMath math="\frac{\text{boys}}{\text{girls}}=\frac{4}{3}" />.
                From (2), <InlineMath math="\frac{\text{boys}}{\text{boys}+\text{girls}}=\frac{4}{7}" />,
                which is equivalent to <InlineMath math="\frac{\text{boys}}{\text{girls}}=\frac{4}{3}" />.
                So statement (2) doesn’t add anything new beyond (1). We still can’t find
                a single value for boys. Not sufficient.
              </p>

              <p>
                Therefore, the statements together do not determine the number of boys.
                Answer: E.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: ratios are about proportions. To convert a ratio into exact counts,
          you need an extra anchor such as a total, a fixed difference, or one known part.
        </p>
      </article>
    </main>
  );
}