import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// If your project already imports KaTeX styles globally, you can remove the line below.
// Otherwise, ensure KaTeX CSS is included once at the app root.
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.8.4 Converting a Decimal to a Fraction | GMAT Quant",
  description:
    "Learn how to convert terminating decimals to fractions quickly and reliably. See examples for 1, 2, and 3 decimal places, understand repeating vs non‑repeating decimals, and know which decimals cannot be written as fractions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8.4 Converting a Decimal to a Fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Decimals come in three broad categories. Knowing which kind you are
          dealing with tells you whether the number can be written as a
          fraction of integers and, if so, how to do it efficiently.
        </p>

        <section aria-labelledby="types-of-decimals" className="space-y-4">
          <h3 id="types-of-decimals" className="text-xl font-semibold text-white">
            The three types of decimals
          </h3>

          <ul className="list-inside list-disc space-y-2">
            <li>
              Terminating decimals end after a finite number of digits:
              3.4, 0.12, 0.0056.
            </li>
            <li>
              Repeating decimals continue forever but repeat a fixed block of
              digits, for example:
              <span className="ml-2">
                <InlineMath>3.\overline{4}</InlineMath>,{" "}
                <InlineMath>0.\overline{12}</InlineMath>,{" "}
                <InlineMath>0.00\overline{560}</InlineMath>
              </span>
              .
            </li>
            <li>
              Non‑terminating, non‑repeating decimals never stop and never
              settle into a repeating pattern, for example:
              0.12345…, 0.1010010001…, and the decimal expansion of{" "}
              <InlineMath>\pi</InlineMath>.
            </li>
          </ul>

          <p>
            We often use an ellipsis (…) to indicate digits continue. For repeating
            decimals, a bar over the repeating block is standard:
            <span className="ml-2">
              <InlineMath>3.\overline{4}</InlineMath>,{" "}
              <InlineMath>0.\overline{12}</InlineMath>,{" "}
              <InlineMath>0.00\overline{560}</InlineMath>.
            </span>
          </p>
        </section>

        <section aria-labelledby="which-can-be-fractions" className="space-y-3">
          <h3 id="which-can-be-fractions" className="text-xl font-semibold text-white">
            Which decimals can be written as fractions?
          </h3>
          <p>
            - Terminating decimals can always be converted to rational numbers
            (fractions of integers). The same is true for repeating decimals.
          </p>
          <p>
            - Non‑terminating, non‑repeating decimals cannot be expressed as
            a ratio of two integers. For instance,{" "}
            <InlineMath>\pi</InlineMath> is irrational.
          </p>
          <p>
            In this lesson, we’ll focus on the fast, reliable method for
            converting terminating decimals to fractions.
          </p>
        </section>

        <MustKnow>
          To convert a terminating decimal to a fraction, move the decimal point
          right by n places to make an integer and place that integer over{" "}
          <InlineMath>10^n</InlineMath>. Then reduce the fraction if possible.
        </MustKnow>

        <section aria-labelledby="one-decimal-place" className="space-y-3">
          <h3 id="one-decimal-place" className="text-lg font-semibold text-white">
            Case 1: One decimal place
          </h3>
          <p>
            If the number has exactly one digit after the decimal point, place the
            digits over 10 and simplify.
          </p>
          <div className="rounded-md bg-neutral-900/50 p-4">
            <ul className="list-inside list-disc space-y-2">
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>0.3=\dfrac{3}{10}</InlineMath>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>3.4=\dfrac{34}{10}=\dfrac{17}{5}</InlineMath>
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="two-decimal-places" className="space-y-3">
          <h3 id="two-decimal-places" className="text-lg font-semibold text-white">
            Case 2: Two decimal places
          </h3>
          <p>
            If the number has two digits after the decimal point, write those digits
            over 100, then reduce.
          </p>
          <div className="rounded-md bg-neutral-900/50 p-4">
            <ul className="list-inside list-disc space-y-2">
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>1.47=\dfrac{147}{100}</InlineMath>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>0.12=\dfrac{12}{100}=\dfrac{3}{25}</InlineMath>
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="three-decimal-places" className="space-y-3">
          <h3 id="three-decimal-places" className="text-lg font-semibold text-white">
            Case 3: Three decimal places
          </h3>
          <p>
            If the number has three digits after the decimal point, put the digits
            over 1,000 and simplify.
          </p>
          <div className="rounded-md bg-neutral-900/50 p-4">
            <ul className="list-inside list-disc space-y-2">
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>0.679=\dfrac{679}{1000}</InlineMath>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <span>Example:</span>
                <InlineMath>0.125=\dfrac{125}{1000}=\dfrac{1}{8}</InlineMath>
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="general-rule" className="space-y-3">
          <h3 id="general-rule" className="text-lg font-semibold text-white">
            General rule and a longer example
          </h3>
          <p>
            If a terminating decimal has n decimal places, remove the decimal
            point and place the resulting integer over{" "}
            <InlineMath>1\underbrace{00\ldots 0}_{n\ \text{zeros}}</InlineMath>
            . Then reduce.
          </p>
          <div className="rounded-md bg-neutral-900/50 p-4 space-y-2">
            <p className="font-medium text-gray-200">Example:</p>
            <BlockMath math={"0.0056=\\dfrac{56}{10000}=\\dfrac{7}{1250}"} />
            <p className="text-sm text-gray-400">
              Here, there are 4 digits after the decimal point, so the denominator
              is <InlineMath>10^4=10000</InlineMath>, and the fraction reduces to{" "}
              <InlineMath>7/1250</InlineMath>.
            </p>
          </div>
        </section>

        <section aria-labelledby="quick-recap" className="space-y-3">
          <h3 id="quick-recap" className="text-lg font-semibold text-white">
            Quick recap
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Terminating and repeating decimals are rational.</li>
            <li>
              Non‑terminating, non‑repeating decimals (like{" "}
              <InlineMath>\pi</InlineMath>) are not expressible as a fraction of
              integers.
            </li>
            <li>
              For terminating decimals, slide the decimal n places to form an
              integer and place it over <InlineMath>10^n</InlineMath>, then reduce.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}