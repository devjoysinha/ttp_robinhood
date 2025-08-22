import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6.5 Subtraction with Signed Numbers | Properties of Numbers",
  description:
    "Learn how to subtract signed numbers by rewriting subtraction as addition of the additive inverse. Includes worked examples and a quick multiple‑choice check.",
};

type KProps = {
  children: string;
  block?: boolean;
  ariaLabel?: string;
};

function K({ children, block = false, ariaLabel = "mathematical expression" }: KProps) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    strict: "ignore",
  });
  if (block) {
    return (
      <div
        role="math"
        aria-label={ariaLabel}
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.5 Subtraction with Signed Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A reliable way to handle subtraction with positives and negatives is to
          convert subtraction into addition. In short: keep the first number as is and
          add the opposite of the number being subtracted.
        </p>

        <MustKnow>
          Subtracting any number is identical to adding its additive inverse.
          In symbols, <K>{`a - b = a + (-b)`}</K>. Only the subtrahend changes sign; the
          minuend stays the same. After the rewrite, use your normal rules for adding signed
          numbers.
        </MustKnow>

        <section aria-labelledby="worked-examples" className="space-y-4">
          <h3 id="worked-examples" className="text-xl font-semibold text-white">
            Worked examples
          </h3>

          <div className="rounded-lg bg-neutral-800/50 p-4">
            <K block ariaLabel="Example 1">
              {`(-6) - (-10) = -6 + 10 = 4`}
            </K>
            <K block ariaLabel="Example 2">
              {`9 - (-3) = 9 + 3 = 12`}
            </K>
            <K block ariaLabel="Example 3">
              {`2 - 5 = 2 + (-5) = -3`}
            </K>
            <K block ariaLabel="Example 4">
              {`4 - 1 = 4 + (-1) = 3`}
            </K>
          </div>

          <p>
            Note: when both numbers are positive and the first is larger, ordinary
            subtraction already gives the result (for instance, 4 − 1 = 3).
            In trickier sign situations, the “add the opposite” rewrite keeps things clear.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="What is (-7) − 8?"
          options={["-1", "1", "-15", "15", "0"]}
          correct="-15"
          solution={
            <>
              <p>
                Rewrite the subtraction as addition of the opposite:
                <K>{`(-7) - 8 = (-7) + (-8)`}</K>.
              </p>
              <p>
                Now add two negatives: <K>{`-7 + (-8) = -15`}</K>. So the value is -15.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}