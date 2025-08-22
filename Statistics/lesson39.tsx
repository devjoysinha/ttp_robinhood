import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

// Lightweight KaTeX helpers rendered on the server as accessible MathML.
function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    output: "mathml",
    throwOnError: false,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    output: "mathml",
    throwOnError: false,
    displayMode: true,
  });
  return <div className="my-3" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "14.11.1 Range 0 ⇒ All Values Identical | Statistics",
  description:
    "See why a set with zero range must have all identical entries and thus standard deviation 0. Includes a quick check and a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.11.1 When the Range Is Zero, Every Data Point Is the Same
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          If the largest and smallest elements of a set match, the spread of the
          set is zero. That situation forces every entry in the set to be the
          same value, so the standard deviation is also zero.
        </p>

        <section>
          <p className="mb-2">Range identity and its zero-range consequence:</p>
          <MathBlock expr={`\\text{range}(S) = \\max(S) - \\min(S)`} />
          <MathBlock
            expr={`\\text{range}(S) = 0 \\;\\implies\\; \\max(S) - \\min(S) = 0 \\;\\implies\\; \\max(S) = \\min(S)`}
          />
        </section>

        <section>
          <p className="mb-2">
            Quick check example: Suppose{" "}
            <MathInline expr={`\\min(X)=2`} /> and{" "}
            <MathInline expr={`\\text{range}(X)=0`} />.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              From the range definition, <MathInline expr={`\\max(X)=2`} />.
            </li>
            <li>
              With <MathInline expr={`\\min(X)=\\max(X)=2`} />, all entries in{" "}
              <MathInline expr={`X`} /> are 2.
            </li>
            <li>
              Therefore, <MathInline expr={`\\sigma_X = 0`} />.
            </li>
          </ul>
        </section>

        <MustKnow>
          If either the smallest value equals the largest value, or the range of
          a set is zero, then all elements in the set are identical and the
          standard deviation is zero.
        </MustKnow>

        <section>
          <h3 className="text-gray-100 font-semibold text-lg mb-2">
            Data Sufficiency Drill
          </h3>

          <ExampleCard
            number={69}
            title="Comparing spreads using range and standard deviation"
            statements={[
              "If the range of set S is 10, is the standard deviation of set T at least as large as the standard deviation of set S?",
              "1) The mean of S equals the mean of T.",
              "2) The largest value in T equals the smallest value in T.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  From the prompt: <MathInline expr={`\\text{range}(S)=10`} />{" "}
                  implies the set S is not constant, so{" "}
                  <MathInline expr={`\\sigma_S > 0`} />.
                </p>

                <p>
                  <strong>Statement (1):</strong> The two means match, but that
                  does not determine spread. For instance, S = {"{5, 15}"} and T
                  = {"{5, 15}"} have equal spreads, whereas S = {"{5, 15}"} and
                  T = {"{10, 10}"} have different spreads (
                  <MathInline expr={`\\sigma_T < \\sigma_S`} />). Not
                  sufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> If the largest and smallest
                  values in T are the same, then{" "}
                  <MathInline expr={`\\text{range}(T)=0`} /> and every element
                  of T is identical; therefore{" "}
                  <MathInline expr={`\\sigma_T = 0`} />. Since{" "}
                  <MathInline expr={`\\sigma_S > 0`} />, the question “Is{" "}
                  <MathInline expr={`\\sigma_T \\ge \\sigma_S`} />?” is answered
                  definitively as “No.” A definite answer means this statement
                  is sufficient.
                </p>

                <p>
                  Only statement (2) is sufficient. Answer:{" "}
                  <strong>B</strong>.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: zero range collapses a set to a single repeated value,
          guaranteeing a standard deviation of zero.
        </p>
      </article>
    </main>
  );
}