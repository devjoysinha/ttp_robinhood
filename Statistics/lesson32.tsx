import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";
// Note: Ensure KaTeX CSS is included once in your app (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "14.10 Standard Deviation | Statistics",
  description:
    "A concise guide to standard deviation for the GMAT: definition, key properties, and quick Data Sufficiency checks. Includes formula review with KaTeX and practice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10 Standard Deviation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You won’t often be asked to compute a standard deviation on the GMAT, but you
          should be fluent with what it measures and how it reacts to common
          transformations of a data set. Mastering those behaviors lets you answer
          questions quickly without crunching numbers.
        </p>

        <MustKnow>
          Standard deviation (SD) captures the typical distance of data points from the
          mean. It is zero only when all values are identical. SD uses the same units as
          the data, and it responds predictably to shifting and scaling:
          - Adding the same constant to every value does not change SD.
          - Multiplying every value by a constant scales SD by the absolute value of that constant.
        </MustKnow>

        <section aria-labelledby="sd-formulas">
          <h3 id="sd-formulas" className="text-xl font-semibold text-white">
            Core formulas
          </h3>
          <p className="mt-2">
            Population variance and standard deviation:
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math={"\\sigma^2 = \\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2"} />
            <BlockMath math={"\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2}"} />
          </div>
          <p className="mt-4">
            Sample standard deviation (using Bessel’s correction):
          </p>
          <div className="rounded-md bg-gray-900/50 p-4">
            <BlockMath math={"s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}"} />
          </div>
          <p className="mt-4">
            Transformations that are frequently tested:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Shift: if y<sub>i</sub> = x<sub>i</sub> + c, then{" "}
              <InlineMath math={"s_y = s_x"} />.
            </li>
            <li>
              Scale: if y<sub>i</sub> = k·x<sub>i</sub>, then{" "}
              <InlineMath math={"s_y = |k|\\, s_x"} />.
            </li>
          </ul>
        </section>

        <MCQExample
          number={101}
          prompt="Which operation must leave the standard deviation of a data set unchanged?"
          options={[
            "Add 7 to each value in the set",
            "Multiply every value by 2",
            "Replace each value with the square of that value",
            "Reflect each value across the maximum (x ↦ max − x)",
            "Add a single extra data point equal to the set’s mean",
          ]}
          correct="Add 7 to each value in the set"
          solution={
            <>
              <p>
                Adding the same constant to all data points shifts the entire set without
                altering how spread out the values are, so SD is unchanged. Multiplying by
                2 doubles the spread (SD scales by |2|). Squaring or reflecting values
                generally modifies distances from the mean, and adding one extra copy of
                the mean typically reduces the SD slightly (unless the set is already
                degenerate).
              </p>
            </>
          }
        />

        <ExampleCard
          number={102}
          title="Data Sufficiency: Shifting a data set"
          statements={[
            "A set T is formed by adding 4 to every value in set S. What is the standard deviation of T?",
            "1) The standard deviation of S is 3.",
            "2) The mean of S is 10.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                Adding a constant to every term doesn’t change SD. So SD(T) = SD(S).
              </p>
              <p>
                Statement (1) gives SD(S) = 3, hence SD(T) = 3. Sufficient.
              </p>
              <p>
                Statement (2) provides only the mean, which doesn’t determine SD. Not
                sufficient.
              </p>
              <p>Therefore, (1) alone is sufficient. Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={103}
          title="Data Sufficiency: Scaling a data set"
          statements={[
            "Set U is created by multiplying each element of set R by a constant k. What is the standard deviation of U?",
            "1) k = -2",
            "2) The standard deviation of R is 5",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Scaling a set by k scales SD by |k|. Thus SD(U) = |k|·SD(R).
              </p>
              <p>
                (1) Alone: k is known but SD(R) is not → not sufficient.
              </p>
              <p>
                (2) Alone: SD(R) is known but k is not → not sufficient.
              </p>
              <p>
                Together: SD(U) = |−2|·5 = 10 → sufficient. Answer: C.
              </p>
            </>
          }
        />

        <section aria-labelledby="tips">
          <h3 id="tips" className="text-xl font-semibold text-white">
            What to remember on test day
          </h3>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>SD is about spread, not location.</li>
            <li>
              Shifts by a constant leave SD unchanged; scaling by k multiplies SD by |k|.
            </li>
            <li>
              SD is zero exactly when every value in the set is the same.
            </li>
            <li>
              SD uses the same units as the original data (unlike variance, which is
              squared units).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}