import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "4.11.4 Product from LCM and GCF | Number Properties",
  description:
    "See why the product of two positive integers equals their LCM times their GCF, with a quick proof sketch, a worked factorization check, and a multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11.4 Product from LCM and GCF
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Suppose x and y are positive integers. A powerful identity links their
          least common multiple and greatest common factor directly to their
          product:
        </p>

        <MustKnow>
          <span className="block">
            <InlineMath math={"\\text{LCM}(x,y)\\cdot \\text{GCF}(x,y) = x\\,y"} />
          </span>
          <span className="mt-2 block">
            Rearrangements:
          </span>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <InlineMath math={"\\text{LCM}(x,y) = \\dfrac{x\\,y}{\\text{GCF}(x,y)}"} />
            </li>
            <li>
              <InlineMath math={"\\text{GCF}(x,y) = \\dfrac{x\\,y}{\\text{LCM}(x,y)}"} />
            </li>
          </ul>
        </MustKnow>

        <section aria-label="Why the identity works" className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Why this is true (quick sketch)</h3>
          <p>
            Let g = GCF(x, y). Then we can write x = g·a and y = g·b with integers a and b that
            share no prime factors (i.e., gcd(a, b) = 1). The least common multiple is then
            LCM(x, y) = g·a·b. Multiplying:
          </p>
          <BlockMath math={"\\text{LCM}(x,y)\\cdot \\text{GCF}(x,y) = (g\\,a\\,b)\\cdot g = g^2 a b"} />
          <p>
            Meanwhile, the product is:
          </p>
          <BlockMath math={"x\\,y = (g\\,a)(g\\,b) = g^2 a b"} />
          <p>Since both expressions equal g²ab, the identity holds.</p>
        </section>

        <section aria-label="Worked example with factorization" className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <h3 className="text-lg font-semibold text-white">Worked check with prime factors</h3>
          <p className="mt-2">
            Take m = 24 and n = 30. Using prime factorization:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <InlineMath math={"24 = 2^3\\cdot 3"} />
            </li>
            <li>
              <InlineMath math={"30 = 2\\cdot 3\\cdot 5"} />
            </li>
          </ul>
          <p className="mt-2">
            Their product is:
          </p>
          <BlockMath math={"mn = (2^3\\cdot 3)(2\\cdot 3\\cdot 5) = 2^4\\cdot 3^2\\cdot 5"} />
          <p className="mt-2">
            The least common multiple and greatest common factor are:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <InlineMath math={"\\text{LCM}(24,30) = 2^3\\cdot 3\\cdot 5 = 120"} />
            </li>
            <li>
              <InlineMath math={"\\text{GCF}(24,30) = 2\\cdot 3 = 6"} />
            </li>
          </ul>
          <p className="mt-2">Their product matches mn:</p>
          <BlockMath math={"120\\cdot 6 = 2^3\\cdot 3\\cdot 5\\;\\times\\; 2\\cdot 3 = 2^4\\cdot 3^2\\cdot 5"} />
        </section>

        <MCQExample
          number={35}
          prompt="Let p and q be positive integers with pq = 3,600. If LCM(p, q) = 300, what is GCF(p, q)?"
          options={["12", "18", "24", "48", "1,080,000"]}
          correct="12"
          solution={
            <>
              <p>
                Use the identity LCM(p, q) × GCF(p, q) = p q.
              </p>
              <BlockMath math={"300\\cdot \\text{GCF}(p,q) = 3600"} />
              <BlockMath math={"\\text{GCF}(p,q) = \\dfrac{3600}{300} = 12"} />
              <p>Therefore, the GCF is 12.</p>
            </>
          }
        />

        <section aria-label="Takeaway">
          <p>
            The identity ties product, LCM, and GCF together. If you know any two of these
            three quantities for positive integers, you can immediately compute the third.
          </p>
        </section>
      </article>
    </main>
  );
}