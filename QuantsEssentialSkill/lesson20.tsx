import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.4.3 Dividing Decimals | GMAT Quant",
  description:
    "A clean, reliable method for dividing decimals on the GMAT: vocabulary, the 3‑step process, one quick walkthrough, and two practice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.4.3 Dividing Decimals
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          While the GMAT often rewards estimation and number sense, you will
          occasionally need to carry out exact decimal division. The good news:
          a short, consistent routine makes these problems straightforward and
          fast.
        </p>

        <section aria-labelledby="vocabulary-heading">
          <h3
            id="vocabulary-heading"
            className="text-base font-semibold text-gray-100"
          >
            Vocabulary check
          </h3>
          <p>
            In a division <InlineMath math={"a \\div b"} />:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <span className="font-medium text-gray-100">a</span> is the
              dividend.
            </li>
            <li>
              <span className="font-medium text-gray-100">b</span> is the
              divisor.
            </li>
          </ul>
          <p className="mt-2">
            We’ll use a place‑value shift to turn the divisor into an integer,
            which keeps the value of the quotient the same:
          </p>
          <BlockMath math={"\\frac{a}{b}=\\frac{10^{k}\\,a}{10^{k}\\,b}"} />
        </section>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-100">
              3‑step recipe for dividing decimals
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                Shift the decimal point in the divisor to the right until the
                divisor becomes a whole number. This is equivalent to
                multiplying by <InlineMath math={"10^k"} />.
              </li>
              <li>
                Shift the decimal point in the dividend by the same number of
                places (also multiply by <InlineMath math={"10^k"} />).
              </li>
              <li>
                Divide using long division. Place the decimal in the quotient
                directly above its position in the adjusted dividend.
              </li>
            </ol>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example-heading">
          <h3
            id="mini-example-heading"
            className="text-base font-semibold text-gray-100"
          >
            Quick walkthrough
          </h3>
          <p>
            Compute <InlineMath math={"5.1 \\div 0.25"} />.
          </p>
          <p>
            Make the divisor an integer by shifting two places:{" "}
            <InlineMath math={"0.25 \\to 25"} />. Apply the same shift to the
            dividend: <InlineMath math={"5.1 \\to 510"} />. Now divide:
          </p>
          <BlockMath math={"5.1 \\div 0.25 = \\frac{510}{25} = 20.4"} />
          <p className="mt-2">
            Because we multiplied both numbers by <InlineMath math={"10^2"} />,
            the value of the expression didn’t change—only its form did.
          </p>
        </section>

        <MCQExample
          number={44}
          prompt="10.36 ÷ 2.8 ="
          options={["2.7", "3.2", "3.7", "4.2", "4.7"]}
          correct="3.7"
          solution={
            <>
              <p>
                Shift one place to make the divisor an integer:{" "}
                <InlineMath math={"2.8 \\to 28"} />, and do the same for the
                dividend: <InlineMath math={"10.36 \\to 103.6"} />. Now compute{" "}
                <InlineMath math={"103.6 \\div 28"} />.
              </p>
              <p>
                Since <InlineMath math={"28\\times 3 = 84"} />, the remainder is{" "}
                <InlineMath math={"103.6-84=19.6"} />. Then{" "}
                <InlineMath math={"28\\times 0.7=19.6"} />. So the exact
                quotient is <InlineMath math={"3.7"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={45}
          prompt="A wire is 71.4 inches long and is cut into equal pieces of length 4.2 inches. How many pieces are made?"
          options={["12", "13", "15", "17", "19"]}
          correct="17"
          solution={
            <>
              <p>
                We need <InlineMath math={"71.4 \\div 4.2"} />. Shift one place
                to clear the decimal in the divisor:{" "}
                <InlineMath math={"71.4 \\to 714"} /> and{" "}
                <InlineMath math={"4.2 \\to 42"} />. Now compute{" "}
                <InlineMath math={"714 \\div 42 = 17"} />.
              </p>
              <p>
                Therefore, the wire yields 17 equal pieces of length 4.2 inches.
              </p>
            </>
          }
        />

        <p>
          Takeaway: decimal division is really place‑value management plus long
          division. Clear the divisor’s decimal with a matching shift in the
          dividend, and the arithmetic becomes routine.
        </p>
      </article>
    </main>
  );
}