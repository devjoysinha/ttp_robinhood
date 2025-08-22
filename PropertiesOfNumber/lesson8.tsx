import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx).
function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    output: "html",
    displayMode: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "4.4.3 Division Rules for Even and Odd Numbers | Properties of Numbers",
  description:
    "Learn how parity behaves under division: when an even/odd quotient can be an integer, when it can be even or odd, and when division is impossible. Includes a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4.3 Division rules for even and odd numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Division rules involving even and odd numbers only make sense when the
          quotient is an integer. In other words, a rule applies only if the
          denominator divides the numerator with no remainder.
        </p>

        <p>
          Here are the key outcomes when an integer result is possible:
        </p>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Even divided by even can be even or odd. For instance, 12 ÷ 6 = 2
            (even), but 12 ÷ 4 = 3 (odd).
          </li>
          <li>
            Even divided by odd (when it divides evenly) must be even. Example:
            12 ÷ 3 = 4 (even).
          </li>
          <li>
            Odd divided by odd (when it divides evenly) must be odd. Example:
            9 ÷ 3 = 3 (odd).
          </li>
          <li>
            Odd divided by even never produces an integer, because no even
            number divides an odd number evenly.
          </li>
        </ul>

        <MustKnow>
          Division parity rules apply only when the denominator divides the
          numerator exactly.
          <ul className="mt-2 list-inside list-disc">
            <li>Even ÷ even → could be even or odd.</li>
            <li>Even ÷ odd → if integer, the result is even.</li>
            <li>Odd ÷ odd → if integer, the result is odd.</li>
            <li>Odd ÷ even → never an integer, so no parity rule applies.</li>
          </ul>
        </MustKnow>

        <p>
          Algebraically, if j and k are integers, then{" "}
          <KInline expr="\\dfrac{2j}{2k} = \\dfrac{j}{k}" ariaLabel="(2 j) over (2 k) equals j over k" />.
          Whether that quotient is even, odd, or not an integer at all depends
          on the specific values of j and k.
        </p>

        <MCQExample
          number={4}
          prompt="If j and k are integers, which of the following must be an even integer?"
          options={[
            String.raw`\dfrac{2j}{2k}`,
            "jk",
            "3jk",
            "4jk",
            "5jk",
          ]}
          correct="4jk"
          solution={
            <>
              <p>
                Check each option under the only assumption that j and k are
                integers.
              </p>
              <p>
                Option A:{" "}
                <KInline
                  expr="\\dfrac{2j}{2k}"
                  ariaLabel="(2 j) over (2 k)"
                />{" "}
                simplifies to{" "}
                <KInline expr="\\dfrac{j}{k}" ariaLabel="j over k" />. This may
                not even be an integer (e.g., j = 2, k = 3 gives{" "}
                <KInline expr="\\dfrac{2}{3}" ariaLabel="two thirds" />
                ), so it certainly doesn’t have to be even.
              </p>
              <p>
                Option B: jk can be odd (e.g., j = 1, k = 1 → 1), so it isn’t
                guaranteed to be even.
              </p>
              <p>
                Option C: 3jk is just jk scaled by 3. If jk is odd, 3jk is also
                odd (e.g., j = 1, k = 1 → 3).
              </p>
              <p>
                Option D: 4jk = (4)(jk). Since 4 is even, the product of an even
                integer and any integer is always even. This one must be even.
              </p>
              <p>
                Option E: 5jk can be odd (e.g., j = 1, k = 1 → 5), so it’s not
                guaranteed to be even.
              </p>
              <p>Therefore, the only expression that must be even is 4jk.</p>
            </>
          }
        />

        <p>
          Takeaway: For division, confirm first that the division yields an
          integer. Then apply the parity patterns above to decide whether a
          result could be even, odd, or not determined.
        </p>
      </article>
    </main>
  );
}