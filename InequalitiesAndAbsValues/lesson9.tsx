import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "6.10 Minimum or Maximum of a Product | Inequalities",
  description:
    "How to find the largest and smallest possible values of a product when variables are restricted to intervals. Includes the 4-endpoints rule, a quick mini‑example, and two multiple‑choice drills with full reasoning.",
};

// Simple KaTeX helpers (server-rendered). Make sure KaTeX CSS is loaded globally.
function KInline({
  children,
  ariaLabel,
}: {
  children: string;
  ariaLabel?: string;
}) {
  const __html = katex.renderToString(children, {
    throwOnError: false,
    output: "html",
    strict: "warn",
  });
  return (
    <span
      className="katex"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

function KBlock({
  children,
  ariaLabel,
}: {
  children: string;
  ariaLabel?: string;
}) {
  const __html = katex.renderToString(children, {
    displayMode: true,
    throwOnError: false,
    output: "html",
    strict: "warn",
  });
  return (
    <div
      className="katex my-3 overflow-x-auto"
      role="group"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.10 The Minimum or Maximum Value of a Product
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two quantities each vary within an interval, the extreme values of
          their product aren’t always found by multiplying “min with min” or “max
          with max.” Signs matter. A dependable way is to check the products formed
          by the four endpoints of the intervals.
        </p>

        <MustKnow>
          <>
            <p className="mb-3">
              If <KInline ariaLabel="a less than or equal x less than or equal b">{`a\\le x\\le b`}</KInline> and{" "}
              <KInline ariaLabel="c less than or equal y less than or equal d">{`c\\le y\\le d`}</KInline>, then:
            </p>
            <KBlock ariaLabel="Maximum and minimum of x y equal the max and min among a c, a d, b c, b d">
              {String.raw`\begin{aligned}
\max(xy) &= \max\{ac,\ ad,\ bc,\ bd\} \\
\min(xy) &= \min\{ac,\ ad,\ bc,\ bd\}
\end{aligned}`}
            </KBlock>
            <p className="mt-3">
              In words: compute the four endpoint products and pick the largest for
              the maximum and the smallest for the minimum.
            </p>
          </>
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick mini‑example
          </h3>
          <p>
            Suppose <KInline ariaLabel="negative six less than or equal p less than or equal three">{`-6\\le p\\le 3`}</KInline> and{" "}
            <KInline ariaLabel="negative five less than or equal q less than or equal nine">{`-5\\le q\\le 9`}</KInline>. The four
            endpoint products are:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <KInline ariaLabel="negative six times negative five equals thirty">{`(-6)(-5)=30`}</KInline>
            </li>
            <li>
              <KInline ariaLabel="negative six times nine equals negative fifty four">{`(-6)(9)=-54`}</KInline>
            </li>
            <li>
              <KInline ariaLabel="three times negative five equals negative fifteen">{`(3)(-5)=-15`}</KInline>
            </li>
            <li>
              <KInline ariaLabel="three times nine equals twenty seven">{`(3)(9)=27`}</KInline>
            </li>
          </ul>
          <p>
            So the maximum is 30 and the minimum is −54. If a question asked for
            “max + min,” the result would be{" "}
            <KInline ariaLabel="thirty plus negative fifty four equals negative twenty four">{`30+(-54)=-24`}</KInline>.
          </p>
        </section>

        <MCQExample
          number={24}
          prompt="If −80 ≤ a ≤ 10 and −20 ≤ b ≤ 15, what is (maximum possible ab) − (minimum possible ab)?"
          options={["-2,800", "-1,900", "1,750", "1,900", "2,800"]}
          correct="2,800"
          solution={
            <>
              <p className="mb-2">
                Evaluate the four endpoint products for ab:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <KInline ariaLabel="negative eighty times negative twenty equals one thousand six hundred">{`(-80)(-20)=1600`}</KInline>
                </li>
                <li>
                  <KInline ariaLabel="negative eighty times fifteen equals negative twelve hundred">{`(-80)(15)=-1200`}</KInline>
                </li>
                <li>
                  <KInline ariaLabel="ten times negative twenty equals negative two hundred">{`(10)(-20)=-200`}</KInline>
                </li>
                <li>
                  <KInline ariaLabel="ten times fifteen equals one hundred fifty">{`(10)(15)=150`}</KInline>
                </li>
              </ul>
              <p className="mt-2">
                The maximum is 1600 and the minimum is −1200. Their difference is{" "}
                <KInline ariaLabel="one thousand six hundred minus negative twelve hundred equals two thousand eight hundred">{`1600-(-1200)=2800`}</KInline>.
              </p>
            </>
          }
        />

        <section aria-labelledby="value-testing">
          <h3 id="value-testing" className="text-xl font-semibold text-white">
            Fast elimination by testing values
          </h3>
          <p>
            For statements that claim a product must be above or below a target,
            try plugging in legal values that break the claim. Finding a single
            counterexample disproves the guarantee.
          </p>
        </section>

        <MCQExample
          number={25}
          prompt="Which of the following conditions on real numbers p and q guarantees that pq > 100?"
          options={[
            "p ≤ 10, 60 ≤ q",
            "p ≥ −50, q ≤ 90",
            "p ≤ −10, q ≤ −15",
            "p ≥ 9, 9 ≤ q",
            "p ≤ 100, 100 ≤ q",
          ]}
          correct="p ≤ −10, q ≤ −15"
          solution={
            <>
              <p className="mb-2">
                We look for a counterexample to each choice. If one exists, the
                choice does not guarantee pq &gt; 100.
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  A: Let p = −1 and q = 60 → pq = −60. Not guaranteed.
                </li>
                <li>
                  B: Let p = 0 and q = 0 → pq = 0. Not guaranteed.
                </li>
                <li>
                  C: If <KInline>{`p\\le -10`}</KInline> and{" "}
                  <KInline>{`q\\le -15`}</KInline>, then both are negative with
                  magnitudes at least 10 and 15. Hence{" "}
                  <KInline ariaLabel="absolute value of p times absolute value of q at least one hundred fifty">{`|p||q|\\ge 150`}</KInline>{" "}
                  and pq is positive, so pq ≥ 150 &gt; 100. Guaranteed.
                </li>
                <li>
                  D: Let p = 9 and q = 9 → pq = 81. Not guaranteed.
                </li>
                <li>
                  E: Let p = 0 and q = 100 → pq = 0. Not guaranteed.
                </li>
              </ul>
              <p className="mt-2">Only choice C forces pq to exceed 100.</p>
            </>
          }
        />

        <p>
          Bottom line: for products with bounded variables, check the four
          endpoint products to lock down global minima and maxima. For “must be”
          questions, hunt for counterexamples to eliminate weak conditions.
        </p>
      </article>
    </main>
  );
}