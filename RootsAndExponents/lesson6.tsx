import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.7 Simplifying Radicals | Roots & Exponents",
  description:
    "How to simplify radicals efficiently: pull out perfect-power factors, use the product rule for radicals, and recognize when you’re already in simplest form. Includes cube and 4th roots, variables, and four practice MCQs with full solutions.",
};

// Server-side KaTeX helper
function K({ expr, block = false, sr }: { expr: string; block?: boolean; sr?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
  });
  const Wrapper = block ? "div" : "span";
  return <Wrapper dangerouslySetInnerHTML={{ __html: html }} aria-label={sr ?? expr} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">5. Roots and Exponents</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">5.7 Simplifying Radicals</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A radical is “simplified” when the number or expression inside the radical sign has no
          removable perfect-power factors. In plain terms, you should pull out as much as possible
          so the value left under the radical is as small as it can be.
        </p>

        <MustKnow>
          Whenever possible, extract perfect powers from under the radical. A root is in simplest
          form when there are no remaining perfect-power factors (other than 1) inside the radical.
        </MustKnow>

        <p>
          For a quick check, consider{" "}
          <K expr="\\sqrt{81}=9" sr="the square root of 81 equals 9" />. This is already fully
          simplified, since 81 is a perfect square and we’ve replaced the radical with its exact
          integer value.
        </p>

        <p>
          What if the number is not a perfect square, such as{" "}
          <K expr="\\sqrt{72}" sr="the square root of 72" />? We can still simplify by factoring
          out perfect squares and using the product rule for radicals:
        </p>

        <div className="rounded-md bg-slate-800/60 p-4">
          <K expr="\\text{If } a,b\\ge 0,\\quad \\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}." block />
        </div>

        <p>Apply that rule with 72 = 36 × 2:</p>
        <div className="rounded-md bg-slate-800/60 p-4">
          <K expr="\\sqrt{72}=\\sqrt{36\\cdot 2}=\\sqrt{36}\\,\\sqrt{2}=6\\sqrt{2}." block />
        </div>

        <p>
          So <K expr="\\sqrt{72}" /> and <K expr="6\\sqrt{2}" /> represent the same value, but{" "}
          <K expr="6\\sqrt{2}" /> is the simplified version.
        </p>

        <p>
          Not every radical can be reduced. For example, the only perfect square factor of 6 is 1,
          so <K expr="\\sqrt{6}" /> is already in simplest form.
        </p>

        <p>We can also simplify expressions with a coefficient in front of the radical:</p>
        <div className="rounded-md bg-slate-800/60 p-4">
          <K expr="7\\sqrt{45}=7\\sqrt{9\\cdot 5}=7\\cdot 3\\sqrt{5}=21\\sqrt{5}." block />
        </div>

        <p>
          There are usually multiple ways to factor the radicand, but the quickest route is to pull
          out the largest perfect square (for square roots), perfect cube (for cube roots), and so
          on.
        </p>

        <MustKnow>
          To save time, factor out the greatest possible perfect power from under the radical (e.g.,
          largest perfect square for square roots, largest perfect cube for cube roots).
        </MustKnow>

        <h3 className="mt-10 text-xl font-semibold text-white">Beyond square roots</h3>
        <p>
          The same idea works for other indices. For instance, to simplify a cube root, factor out
          perfect cubes:
        </p>
        <div className="rounded-md bg-slate-800/60 p-4">
          <K expr="\\sqrt[3]{40}=\\sqrt[3]{8\\cdot 5}=\\sqrt[3]{8}\\,\\sqrt[3]{5}=2\\sqrt[3]{5}." block />
        </div>

        <p>For fourth roots, pull out perfect fourth powers:</p>
        <div className="rounded-md bg-slate-800/60 p-4">
          <K expr="\\sqrt[4]{810}=\\sqrt[4]{81\\cdot 10}=\\sqrt[4]{81}\\,\\sqrt[4]{10}=3\\sqrt[4]{10}." block />
        </div>

        <h3 className="mt-10 text-xl font-semibold text-white">Radicals with variables</h3>
        <p>
          You can also extract perfect powers of variables. Consider{" "}
          <K expr="\\sqrt[3]{54y^{5}}" />:
        </p>
        <div className="rounded-md bg-slate-800/60 p-4">
          <K
            expr="\\sqrt[3]{54y^{5}}=\\sqrt[3]{(27\\cdot 2)\\,(y^{3}\\cdot y^{2})}=\\sqrt[3]{27}\\,\\sqrt[3]{2}\\,\\sqrt[3]{y^{3}}\\,\\sqrt[3]{y^{2}}=3y\\,\\sqrt[3]{2y^{2}}."
            block
          />
        </div>

        <MustKnow>
          Break the radicand into perfect-power parts and leftovers. Extract the perfect-power
          parts; keep the leftovers under the radical. This applies to both numbers and variables.
        </MustKnow>

        <h3 className="mt-10 text-xl font-semibold text-white">Practice</h3>

        <MCQExample
          number={15}
          difficulty="easy"
          prompt="3√28 + √88 is equal to which of the following?"
          options={[
            "8√29",
            "6√7 + 2√22",
            "12√7 + 4√22",
            "2√22 + 18√7",
            "4√22 + 18√7",
          ]}
          correct="6√7 + 2√22"
          solution={
            <>
              <p>
                Simplify each term separately. Since 28 = 4 × 7, we have{" "}
                <K expr="3\\sqrt{28}=3\\sqrt{4\\cdot 7}=3\\cdot 2\\sqrt{7}=6\\sqrt{7}" />. For{" "}
                <K expr="\\sqrt{88}" />, use 88 = 4 × 22 to get{" "}
                <K expr="\\sqrt{88}=\\sqrt{4\\cdot 22}=2\\sqrt{22}" />. Adding them gives{" "}
                <strong>6√7 + 2√22</strong>.
              </p>
              <p>
                A common mistake is to drop the radical on the 4 when applying{" "}
                <K expr="\\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}" />. Keep the radical until you take the
                root.
              </p>
            </>
          }
        />

        <MCQExample
          number={16}
          difficulty="medium"
          prompt="What is √1,600,000 written in simplest radical form?"
          options={["4√100,000", "4,000", "160√10", "400√10", "40√100"]}
          correct="400√10"
          solution={
            <>
              <p>
                Factor out the largest perfect square. Using prime powers,
                <K expr="\\;1{,}600{,}000=2^{9}\\cdot 5^{5}=2^{8}\\cdot 5^{4}\\cdot 2\\cdot 5=256\\cdot 625\\cdot 10" />.
                Then
              </p>
              <div className="rounded-md bg-slate-800/60 p-3">
                <K
                  expr="\\sqrt{1{,}600{,}000}=\\sqrt{256}\\,\\sqrt{625}\\,\\sqrt{10}=16\\cdot 25\\cdot \\sqrt{10}=400\\sqrt{10}."
                  block
                />
              </div>
              <p>Thus, the simplified form is <strong>400√10</strong>.</p>
            </>
          }
        />

        <MCQExample
          number={17}
          difficulty="easy"
          prompt="In simplest form, ∛(8x³) equals which of the following?"
          options={["(8x³)/3", "2√(x³)", "2x", "4x·∛x", "4x"]}
          correct="2x"
          solution={
            <>
              <p>
                Both 8 and <K expr="x^{3}" /> are perfect cubes. So{" "}
                <K expr="\\sqrt[3]{8x^{3}}=\\sqrt[3]{8}\\,\\sqrt[3]{x^{3}}=2x" />. You can confirm
                by cubing 2x: <K expr="(2x)^{3}=8x^{3}" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={18}
          difficulty="medium"
          prompt="Which expression is equivalent to ∛(6,000·w⁶)?"
          options={[
            "60w² · ∛w",
            "6w⁵ · ∛(60w)",
            "10w³ · √60",
            "10w · ∛(6w²)",
            "10w² · ∛6",
          ]}
          correct="10w² · ∛6"
          solution={
            <>
              <p>
                Split the cube root into factors:{" "}
                <K expr="\\sqrt[3]{6{,}000\\,w^{6}}=\\sqrt[3]{6{,}000}\\,\\sqrt[3]{w^{6}}" />. Since{" "}
                <K expr="6{,}000=1{,}000\\cdot 6=10^{3}\\cdot 6" />, we get{" "}
                <K expr="\\sqrt[3]{6{,}000}=10\\,\\sqrt[3]{6}" />; and{" "}
                <K expr="\\sqrt[3]{w^{6}}=w^{2}" />. Therefore,{" "}
                <K expr="\\sqrt[3]{6{,}000\\,w^{6}}=10w^{2}\\,\\sqrt[3]{6}" />.
              </p>
              <p>Answer: <strong>10w² · ∛6</strong>.</p>
            </>
          }
        />

        <p className="mt-10">
          Key idea to remember: factor the radicand into perfect powers and leftovers. Extract the
          perfect-power part; keep the rest under the radical. If nothing nontrivial factors out,
          you’re already in simplest form.
        </p>
      </article>
    </main>
  );
}