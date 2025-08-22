import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "17.13 Quadratics and Probability | Probability",
  description:
    "See how drawing without replacement can lead to quadratic equations. Learn the r-over-n pattern, then solve a quick multiple-choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.13 Quadratics and Probability
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          We don’t usually link probability questions to quadratic equations, but
          they fit together more often than you might expect—especially in
          problems that involve drawing items without replacement. When the
          count of a color or type is unknown and appears in both factors of a
          product, the resulting equation is typically quadratic.
        </p>

        <p>
          For instance, suppose a jar holds 3 red and 1 blue marble. The chance
          of picking two reds in a row is
          {" "}
          <InlineMath math="\frac{3}{4}\times\frac{2}{3}=\frac{1}{2}" />.
          If we generalize by letting <InlineMath math="r" /> be the number of
          red marbles, the same scenario becomes
          {" "}
          <InlineMath math="\frac{r}{4}\times\frac{r-1}{3}" />, which leads to a
          quadratic when set equal to a known probability.
        </p>

        <MustKnow>
          If there are <InlineMath math="r" /> target items out of{" "}
          <InlineMath math="n" /> total and we draw two items without
          replacement, the probability of getting two targets is
          {" "}
          <InlineMath math="\frac{r}{n}\cdot\frac{r-1}{n-1}" />. Equating this
          expression to a given probability often produces a quadratic in
          <InlineMath math="\,r\, " />.
        </MustKnow>

        <p>
          One more warm‑up: with 3 red and 1 blue, the first draw has probability
          <InlineMath math="\frac{3}{4}" />, then the jar has one fewer red and
          one fewer total, so the second draw has probability{" "}
          <InlineMath math="\frac{2}{3}" />. Multiplying gives
          {" "}
          <InlineMath math="\frac{1}{2}" />, as above.
        </p>

        <MCQExample
          number={27}
          prompt={
            <>
              A jar contains 10 marbles, all of which are either red or blue.
              If the probability of drawing two red marbles in succession
              without replacement is <InlineMath math="\tfrac{2}{15}" />, how
              many red marbles are in the jar?
            </>
          }
          options={["0", "1", "2", "3", "4"]}
          correct="4"
          solution={
            <>
              <p>
                Let <InlineMath math="r" /> be the number of red marbles. The
                probability of two reds without replacement is
                {" "}
                <InlineMath math="\dfrac{r}{10}\cdot\dfrac{r-1}{9}" />.
                Set this equal to the given probability:
              </p>
              <BlockMath math="\frac{r}{10}\cdot\frac{r-1}{9}=\frac{2}{15}" />
              <BlockMath math="\frac{r^2-r}{90}=\frac{2}{15}" />
              <BlockMath math="15(r^2-r)=180" />
              <BlockMath math="r^2-r=12" />
              <BlockMath math="r^2-r-12=0" />
              <BlockMath math="(r-4)(r+3)=0" />
              <p>
                The roots are <InlineMath math="r=4" /> and{" "}
                <InlineMath math="r=-3" />. A negative count is impossible, so
                <InlineMath math="\,r=4" />.
              </p>
              <p>Answer: 4.</p>
            </>
          }
        />

        <p>
          Takeaway: when an unknown count appears in both factors of a
          without‑replacement probability, translating the setup into algebra
          and solving the resulting quadratic is often the fastest path to the
          answer.
        </p>
      </article>
    </main>
  );
}