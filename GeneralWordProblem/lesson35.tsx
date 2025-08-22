import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Server-side KaTeX rendering (no client JS needed)
import { renderToString } from "katex";

// Helper components for KaTeX (accessible output)
function MathInline({ expr }: { expr: string }) {
  const html = renderToString(expr, { throwOnError: false, output: "htmlAndMathml" });
  return <span aria-label="math" dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr }: { expr: string }) {
  const html = renderToString(expr, { throwOnError: false, displayMode: true, output: "htmlAndMathml" });
  return <div className="my-3 overflow-x-auto" aria-label="math block" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "7.11.1 Consecutive Even or Odd Integers | General Word Problems",
  description:
    "Understand consecutive even/odd integers, how to model them algebraically, and how to solve sum questions quickly. Includes a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. General Word Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.11.1 Consecutive Even or Odd Integers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Consecutive even numbers are even integers that come one after another, each differing by 2. The same idea
          holds for consecutive odd numbers: each term is 2 more than the one before it.
        </p>

        <p>
          Examples:
          {" "}
          <span className="text-gray-200">Even:</span> 2, 4, 6, 8, 10
          {" "}
          <span className="ms-4 text-gray-200">Odd:</span> 3, 5, 7, 9, 11
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-white">Algebraic templates you’ll reuse:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Three consecutive even or odd integers can be written as:
                {" "}
                <MathInline expr="x,\; x+2,\; x+4" />
                {" "}
                (x matches the needed parity).
              </li>
              <li>
                The k-th term in a run of consecutive even/odd integers is:
                {" "}
                <MathInline expr="x + 2(k-1)" />.
              </li>
              <li>
                Sum of n consecutive even/odd integers starting at x:
                <MathBlock expr="\sum_{i=0}^{n-1}\bigl(x+2i\bigr)=nx+2\sum_{i=0}^{n-1}i=nx+n(n-1)" />
              </li>
            </ul>
            <p className="text-gray-300">
              Because both even and odd runs increase by 2 each step, they share the same algebraic form; only the
              parity of the starting value differs.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={53}
          difficulty="easy"
          prompt="Three consecutive even integers sum to 18. What is the smallest of these integers?"
          options={["4", "6", "8", "12", "14"]}
          correct="4"
          solution={
            <>
              <p>Model the three even integers as <MathInline expr="x,\; x+2,\; x+4" />. Then:</p>
              <MathBlock expr="x+(x+2)+(x+4)=18" />
              <MathBlock expr="3x+6=18 \quad\Rightarrow\quad 3x=12 \quad\Rightarrow\quad x=4" />
              <p>
                So the integers are 4, 6, and 8, and the smallest is 4.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: when you see “consecutive even” or “consecutive odd,” translate directly to
          {" "}
          <MathInline expr="x,\; x+2,\; x+4,\;\dots" />
          {" "}
          and solve using linear expressions. This keeps the arithmetic clean and prevents parity mistakes.
        </p>
      </article>
    </main>
  );
}