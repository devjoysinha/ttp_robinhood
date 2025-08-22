import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.10.3 Scaling a Data Set Changes Its Standard Deviation | Statistics",
  description:
    "See how multiplying or dividing every term by the same factor scales standard deviation, why adding a constant doesn’t, and practice with a quick multiple‑choice question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10.3 Multiplying or Dividing a Data Set by a Constant Changes the Standard Deviation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When every value in a list is scaled by the same constant, the spread of the
          list scales by that same amount. In other words, standard deviation doesn’t
          stay put under scaling—it grows or shrinks by the absolute value of the factor
          you multiply or divide by.
        </p>

        <MustKnow>
          <p className="mb-2">
            If you transform a set by an affine change x&apos; = a x + b, then
          </p>
          <ul className="list-disc pl-6">
            <li>
              the mean transforms as μ&apos; = a μ + b
            </li>
            <li>
              the standard deviation transforms as σ&apos; = |a| σ
            </li>
          </ul>
          <p className="mt-2">
            Consequences:
          </p>
          <ul className="list-disc pl-6">
            <li>Adding or subtracting the same constant (b) to all terms leaves σ unchanged.</li>
            <li>Multiplying all terms by a factor a scales σ by |a|. Dividing by a number c &gt; 0 scales σ by 1/c.</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="why-it-works">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why the scaling rule holds
          </h3>
          <p>
            Standard deviation measures average distance from the mean. If you multiply
            every deviation (x − μ) by a factor a, each distance becomes |a| times as large,
            so the resulting standard deviation becomes |a|σ. Shifting the entire set by
            adding a constant does not change any distances, so σ stays the same.
          </p>
        </section>

        <section aria-labelledby="quick-numeric-sense-check">
          <h3 id="quick-numeric-sense-check" className="text-xl font-semibold text-white">
            Quick numerical sense check
          </h3>
          <p>
            Suppose a small set has standard deviation σ = 2. If we multiply every term by 10,
            the new standard deviation is 10 × 2 = 20. If instead we divide every term by 2,
            the new standard deviation is (1/2) × 2 = 1. If we add 7 to each term, σ remains 2.
          </p>
        </section>

        <MCQExample
          number={63}
          prompt={
            <>
              A certain data set has standard deviation σ = x, where x &gt; 0. For a fixed integer n &gt; 1,
              which of the following operations, applied to every term in the set, will increase the
              set’s standard deviation?
              <br />
              <br />
              I. Divide each term by n
              <br />
              II. Add n to each term
              <br />
              III. Multiply each term by n
            </>
          }
          options={[
            "I only",
            "I and II",
            "II and III",
            "II only",
            "III only",
          ]}
          correct="III only"
          solution={
            <>
              <p>
                Use the scaling rule: for x&apos; = a x + b, the standard deviation transforms as σ&apos; = |a| σ.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  I. Divide by n: a = 1/n with n &gt; 1, so σ&apos; = (1/n)σ &lt; σ. This decreases σ.
                </li>
                <li>
                  II. Add n: a = 1, b = n, so σ&apos; = |1|σ = σ. No change.
                </li>
                <li>
                  III. Multiply by n: a = n &gt; 1, so σ&apos; = nσ &gt; σ. This increases σ.
                </li>
              </ul>
              <p>Only III increases the standard deviation. Answer: III only.</p>
            </>
          }
        />

        <ExampleCard
          number={64}
          title="Scaling and sign: a small caveat"
          statements={[
            "A set S has mean μ and standard deviation σ > 0. Consider S' formed by x' = a x + b.",
            "1) If 0 < a < 1, what happens to σ?",
            "2) If a < 0, what happens to μ and σ?",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                For x&apos; = a x + b, we always have μ&apos; = a μ + b and σ&apos; = |a| σ.
              </p>
              <p>
                1) If 0 &lt; a &lt; 1, then |a| &lt; 1, so σ decreases by the factor a.
              </p>
              <p>
                2) If a &lt; 0, the mean flips sign and shifts (μ&apos; = a μ + b), but the standard deviation
                uses |a|, so σ still scales by |a| (no negative standard deviations).
              </p>
              <p>
                Takeaway: the magnitude |a| dictates how σ changes; b never affects σ.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: adding a constant leaves the spread alone, while scaling by a factor stretches
          or compresses the spread in direct proportion to that factor’s absolute value.
        </p>
      </article>
    </main>
  );
}