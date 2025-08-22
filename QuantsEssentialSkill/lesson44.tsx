import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.19 The Distributive Property | Essential GMAT Quant Skills",
  description:
    "Understand and apply the distributive property of multiplication over addition and subtraction. See clear examples, variations, and a quick multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.19 The Distributive Property
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The distributive property lets you multiply a factor across a sum or
          difference inside parentheses. In symbols,{" "}
          <InlineMath math={"a(b + c) = ab + ac"} />. In words, multiply the
          outside factor by each term inside, and then add the results.
        </p>

        <MustKnow>
          <span className="block">
            Distributive property of multiplication over addition:
          </span>
          <InlineMath math={"a(b + c) = ab + ac"} />
        </MustKnow>

        <p>Here’s a quick numeric check to see it in action:</p>
        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath
            math={
              String.raw`\begin{aligned}
2(3+4) &= 2\cdot 3 + 2\cdot 4 \\
2\cdot 7 &= 6 + 8 \\
14 &= 14
\end{aligned}`
            }
          />
        </div>

        <p>
          Distributing can speed up mental math. For instance,{" "}
          <InlineMath math={"4(17 + 25)"} /> can be computed as{" "}
          <InlineMath math={"4\\cdot 17 + 4\\cdot 25 = 68 + 100 = 168"} />,
          which avoids adding first and keeps numbers friendly.
        </p>

        <p>
          The same idea extends to more terms and to subtraction. Thanks to the
          commutative property of multiplication, it also works when the factor
          is written on the right.
        </p>

        <MustKnow>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Right‑side factor: <InlineMath math={"(b + c)a = ba + ca"} />
            </li>
            <li>
              More addends:{" "}
              <InlineMath math={"a(b + c + d) = ab + ac + ad"} />
            </li>
            <li>
              Over subtraction: <InlineMath math={"a(b - c) = ab - ac"} />
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={85}
          prompt={
            <>
              If <InlineMath math={"r(s + t) = 14"} />, which of the following
              must be true?
            </>
          }
          options={[
            "r × s + t × r = 14",
            "r × s + t × s = 14",
            "r × t + t × s = 14",
            "s + t = 7",
            "r + s + t = 14",
          ]}
          correct="r × s + t × r = 14"
          solution={
            <>
              <p>
                Distribute <InlineMath math={"r"} /> across the sum:{" "}
                <InlineMath math={"r(s + t) = rs + rt"} />. The product{" "}
                <InlineMath math={"rt"} /> equals <InlineMath math={"tr"} /> by
                commutativity, so this is the same as{" "}
                <InlineMath math={"rs + tr = 14"} />. That matches choice A.
              </p>
            </>
          }
        />

        <p>
          Two equally useful directions to remember:
          <br />
          • Left to right: distribute a common factor, e.g.,{" "}
          <InlineMath math={"a(b + c) \\to ab + ac"} />.
          <br />
          • Right to left: factor out a common factor, e.g.,{" "}
          <InlineMath math={"ab + ac \\to a(b + c)"} />. Recognizing common
          factors to “undistribute” is a key GMAT skill you’ll use often.
        </p>
      </article>
    </main>
  );
}