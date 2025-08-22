import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.10.1 Properties of Exponents | Essential GMAT Quant Skills",
  description:
    "Master the core exponent rules for the GMAT. Learn the product and quotient rules, see worked examples, and practice with multiple‑choice questions. All math rendered with KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10.1 Properties of Exponents
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            This lesson focuses on two fundamental exponent tools you will use
            constantly on GMAT problems: multiplying powers with the same base
            and dividing powers with the same base. Once the rules click,
            simplifying long expressions becomes a line or two of arithmetic
            on the exponents rather than a slog through expanded products.
          </p>

          <h3 className="text-xl font-semibold text-white">Multiplying powers with the same base</h3>
          <p>
            When you multiply like bases, you add the exponents:
          </p>

          <MustKnow>
            <InlineMath math={"x^a \\cdot x^b = x^{a+b}"} />
          </MustKnow>

          <div className="space-y-3">
            <p className="text-gray-300">
              Examples:
            </p>
            <div className="space-y-2 rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <BlockMath math={"3^2\\cdot 3^5 = 3^{2+5}=3^7"} />
              <BlockMath math={"2^3\\cdot 2^8 = 2^{11}"} />
              <BlockMath math={"9^9\\cdot 9^4 = 9^{13}"} />
              <BlockMath math={"11^3\\cdot 11^6 = 11^{9}"} />
              <BlockMath math={"7^{10}\\cdot 7^{18} = 7^{28}"} />
            </div>
            <div className="space-y-2 rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <BlockMath math={"10^2\\cdot 10^3\\cdot 10^6 = 10^{2+3+6}=10^{11}"} />
              <BlockMath math={"4^3\\cdot 4^4\\cdot 4^7\\cdot 4^2\\cdot 4^9 = 4^{3+4+7+2+9}=4^{25}"} />
            </div>
          </div>

          <p className="text-gray-300">
            Important: The product rule only applies when the bases match. For instance,
            you cannot combine <InlineMath math={"6^2"} /> and <InlineMath math={"8^4"} /> using this rule.
          </p>

          <MCQExample
            number={60}
            prompt={
              <>
                If <InlineMath math={"83^2\\cdot 83^w = 83^{32}"} />, what is the value of <InlineMath math={"w"} />?
              </>
            }
            options={["5", "10", "16", "30", "34"]}
            correct="30"
            solution={
              <>
                <p>
                  Multiply like bases by adding exponents:
                  <InlineMath math={"83^2\\cdot 83^w = 83^{2+w}"} />. Since the result equals <InlineMath math={"83^{32}"} />, the exponents must match:
                </p>
                <BlockMath math={"2 + w = 32 \\quad \\Rightarrow \\quad w = 30"} />
                <p className="mt-2">
                  Common slip: multiplying the exponents (<InlineMath math={"2\\cdot w"} />) instead of adding them. Always add for products of the same base.
                </p>
              </>
            }
          />

          <MCQExample
            number={61}
            prompt={
              <>
                If <InlineMath math={"f+g+h+i=11"} /> and <InlineMath math={"5^f\\cdot 5^g\\cdot 5^h\\cdot 5^i = 5^k"} />, what is <InlineMath math={"k"} />?
              </>
            }
            options={["5", "6", "11", "16", "55"]}
            correct="11"
            solution={
              <>
                <p>
                  Add the exponents when multiplying the same base:
                  <InlineMath math={"5^f\\cdot 5^g\\cdot 5^h\\cdot 5^i = 5^{f+g+h+i}"} />.
                </p>
                <BlockMath math={"k = f+g+h+i = 11"} />
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Dividing powers with the same base</h3>
          <p>
            When you divide like bases, you subtract the exponents:
          </p>

          <MustKnow>
            <InlineMath math={"\\dfrac{x^a}{x^b} = x^{a-b}"} />
          </MustKnow>

          <div className="space-y-3">
            <p className="text-gray-300">
              Examples:
            </p>
            <div className="space-y-2 rounded-lg border border-gray-700 bg-gray-900/40 p-4">
              <BlockMath math={"\\dfrac{8^5}{8^2} = 8^{5-2} = 8^3"} />
              <BlockMath math={"\\dfrac{5^{22}}{5^2} = 5^{20}"} />
              <BlockMath math={"\\dfrac{13^{40}}{13^{10}} = 13^{30}"} />
              <BlockMath math={"\\dfrac{20^{8}}{20^{3}} = 20^{5}"} />
            </div>
          </div>

          <p className="text-gray-300">
            Important: The quotient rule also requires equal bases. You cannot simplify{" "}
            <InlineMath math={"\\dfrac{18^7}{19^4}"} /> using this rule because the bases differ.
          </p>

          <MCQExample
            number={62}
            prompt={
              <>
                If <InlineMath math={"\\dfrac{9^{16}}{9^2} = 9^y"} />, what is <InlineMath math={"y"} />?
              </>
            }
            options={["-14", "4", "8", "12", "14"]}
            correct="14"
            solution={
              <>
                <p>
                  Subtract exponents when dividing the same base:
                </p>
                <BlockMath math={"\\dfrac{9^{16}}{9^2} = 9^{16-2} = 9^{14}"} />
                <p className="mt-2">
                  A frequent mistake is dividing the exponents (<InlineMath math={"16\\div 2"} />). For quotients, subtract.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Putting both rules together</h3>
          <p>
            Combine product and quotient rules by first collapsing each side (numerator and denominator) with addition, then subtracting across the fraction:
          </p>
          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <BlockMath math={"\\dfrac{12^8\\cdot 12^8\\cdot 12^9\\cdot 12^{11}}{12^5\\cdot 12^7}"} />
            <p className="mt-2">Group by base and add exponents in the numerator and denominator:</p>
            <BlockMath math={"= \\dfrac{12^{8+8+9+11}}{12^{5+7}} = \\dfrac{12^{36}}{12^{12}}"} />
            <p className="mt-2">Now subtract the exponents:</p>
            <BlockMath math={"= 12^{36-12} = 12^{24}"} />
          </div>
          <p className="text-gray-300">
            Big picture: with matching bases, products turn into sums of exponents,
            and quotients turn into differences of exponents. Use these shortcuts
            to keep work clean and fast.
          </p>
        </section>
      </article>
    </main>
  );
}