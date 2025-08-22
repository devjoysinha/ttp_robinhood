import type { Metadata } from "next";
import katex from "katex";
// Note: Ensure KaTeX CSS is included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel || "mathematical expression"}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true });
  return (
    <div
      role="img"
      aria-label={ariaLabel || "mathematical expression"}
      className="overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "2.18 Time‑Saving Properties of Multiplication | Essential GMAT Quant",
  description:
    "Learn how the commutative and associative laws let you reorder factors to compute faster. Includes a quick multiple‑choice example, tips for pairing to powers of 10, and a PEMDAS caution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.18 Time‑Saving Properties of Multiplication
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Multiplication has two powerful rules that let you rearrange factors freely:
          the commutative and associative properties. Because of these, you can choose
          the order that makes the arithmetic simplest without changing the result.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Commutative law:
              {" "}
              <MathInline expr={"a \\times b = b \\times a"} ariaLabel="a times b equals b times a" />
            </li>
            <li>
              Associative law:
              {" "}
              <MathInline expr={"(a \\times b) \\times c = a \\times (b \\times c)"} ariaLabel="associative property of multiplication" />
            </li>
            <li>
              When all operations are multiplication, you’re free to regroup and reorder factors to speed up the calculation.
            </li>
          </ul>
        </MustKnow>

        <p>
          Example of reordering for speed: rather than multiply left‑to‑right, look for
          easy pairs first. For instance, with
          {" "}
          <MathInline expr={"4 \\times 7 \\times 25"} ariaLabel="four times seven times twenty five" />,
          compute
          {" "}
          <MathInline expr={"4 \\times 25 = 100"} ariaLabel="four times twenty five equals one hundred" />
          {" "}
          and then
          {" "}
          <MathInline expr={"100 \\times 7 = 700"} ariaLabel="one hundred times seven equals seven hundred" />.
        </p>

        <MCQExample
          number={84}
          prompt="2 × 4 × 5 × 8 × 25 × 125 is equal to which of the following?"
          options={["10,000", "50,000", "100,000", "500,000", "1,000,000"]}
          correct="1,000,000"
          solution={
            <>
              <p>Group factors that form powers of 10:</p>
              <MathBlock
                expr={"2\\times 5=10,\\;\\; 4\\times 25=100,\\;\\; 8\\times 125=1000"}
                ariaLabel="two times five equals ten; four times twenty five equals one hundred; eight times one hundred twenty five equals one thousand"
              />
              <MathBlock
                expr={
                  "\\Rightarrow\\; 2\\times 4\\times 5\\times 8\\times 25\\times 125 \\\\ =\\; 10\\times 100\\times 1000 \\\\ =\\; 1{,}000{,}000"
                }
                ariaLabel="therefore the product equals ten times one hundred times one thousand equals one million"
              />
              <p>So the correct choice is 1,000,000.</p>
            </>
          }
        />

        <p>
          A great shortcut is to spot factor pairs that multiply to
          {" "}
          <MathInline expr={"10,\\;100,\\;1000,\\;\\ldots"} ariaLabel="ten, one hundred, one thousand" />.
          The most common pairs are
          {" "}
          <MathInline expr={"(2,\\,5),\\; (4,\\,25),\\; (8,\\,125)"} ariaLabel="two and five; four and twenty five; eight and one hundred twenty five" />.
          Keeping these in mind can dramatically cut down your work on GMAT arithmetic.
        </p>

        <MustKnow>
          You can reorder only when all operations are the same. If both addition and
          multiplication appear, follow the order of operations (PEMDAS).
          For example,
          {" "}
          <MathInline expr={"3 + 8\\times 6 = 3 + 48 = 51"} ariaLabel="three plus eight times six equals fifty one" />,
          not
          {" "}
          <MathInline expr={"(3+8)\\times 6"} ariaLabel="three plus eight in parentheses times six" />.
        </MustKnow>

        <p>
          Up next: we’ll connect multiplication and addition with the distributive property,
          a key tool for factoring and mental math.
        </p>
      </article>
    </main>
  );
}