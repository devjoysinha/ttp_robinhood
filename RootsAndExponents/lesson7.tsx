import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX helpers (server-safe)
function KInline({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: false,
    strict: "warn",
  });
  return (
    <span
      aria-label={ariaLabel}
      className="katex-inline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
    strict: "warn",
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="katex-block my-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "5.7 Simplifying Radicals | Roots and Exponents",
  description:
    "Learn how to simplify square roots, cube roots, and higher-index radicals efficiently. Practice with numeric and variable expressions; includes multiple-choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.7 Simplifying Radicals
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A radical is considered simplified when the value under the radical
          sign has no removable perfect power (other than 1). For example,{" "}
          <KInline tex="\\sqrt{81}=9" ariaLabel="Square root of 81 equals 9" />. In
          this case, replacing the radical with the integer leaves nothing
          under the root, which is as simple as it gets.
        </p>

        <p>
          When the radicand is not a perfect square, we can still simplify by
          pulling out perfect square factors. For instance, to reduce{" "}
          <KInline tex="\\sqrt{72}" ariaLabel="Square root of seventy two" /> we
          look for a perfect square that divides 72. Since{" "}
          <KInline tex="72=36\\cdot 2" ariaLabel="Seventy two equals thirty six times two" />
          , we get
        </p>
        <KBlock
          tex="\\sqrt{72}=\\sqrt{36\\cdot 2}=\\sqrt{36}\\,\\sqrt{2}=6\\sqrt{2}"
          ariaLabel="Square root of seventy two equals six times square root of two"
        />

        <MustKnow>
          To simplify a square root, factor the radicand as a product of a
          perfect square and another integer, then use{" "}
          <KInline tex="\\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}" ariaLabel="Square root of a b equals square root of a times square root of b" />{" "}
          for a,b ≥ 0. The expression is in simplest form when no perfect
          square greater than 1 remains under the radical.
        </MustKnow>

        <p>
          Not every radical can be reduced. For example,{" "}
          <KInline tex="\\sqrt{6}" ariaLabel="Square root of six" /> is already
          simplified because 6 has no perfect square factors except 1.
        </p>

        <h3 className="text-xl font-semibold text-white">Quick example</h3>
        <p>
          Simplify <KInline tex="7\\sqrt{45}" ariaLabel="Seven times square root of forty five" />.
        </p>
        <p>
          Since <KInline tex="45=9\\cdot 5" ariaLabel="forty five equals nine times five" /> and{" "}
          <KInline tex="9" ariaLabel="nine" /> is a perfect square,
        </p>
        <KBlock
          tex="7\\sqrt{45}=7\\sqrt{9\\cdot 5}=7\\cdot 3\\cdot \\sqrt{5}=21\\sqrt{5}"
          ariaLabel="Seven root forty five equals twenty one root five"
        />

        <MustKnow>
          To work faster, factor out the greatest perfect square from the
          radicand. For <KInline tex="72" ariaLabel="seventy two" />, using{" "}
          <KInline tex="36" ariaLabel="thirty six" /> immediately yields{" "}
          <KInline tex="6\\sqrt{2}" ariaLabel="six square root two" />, whereas a
          smaller perfect square factor like 9 would require another step.
        </MustKnow>

        <section aria-labelledby="ex15" className="space-y-4">
          <h3 id="ex15" className="text-xl font-semibold text-white">
            Example 15
          </h3>
          <MCQExample
            number={15}
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
                  First reduce each term. Since{" "}
                  <KInline tex="28=4\\cdot 7" ariaLabel="twenty eight equals four times seven" />, we get{" "}
                  <KInline tex="3\\sqrt{28}=3\\cdot 2\\sqrt{7}=6\\sqrt{7}" ariaLabel="three root twenty eight equals six root seven" />.
                </p>
                <KBlock
                  tex="\\sqrt{88}=\\sqrt{4\\cdot 22}=2\\sqrt{22}"
                  ariaLabel="Square root eighty eight equals two root twenty two"
                />
                <p>
                  Therefore,{" "}
                  <KInline
                    tex="3\\sqrt{28}+\\sqrt{88}=6\\sqrt{7}+2\\sqrt{22}"
                    ariaLabel="three root twenty eight plus root eighty eight equals six root seven plus two root twenty two"
                  />
                  .
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex16" className="space-y-4">
          <h3 id="ex16" className="text-xl font-semibold text-white">
            Example 16
          </h3>
          <MCQExample
            number={16}
            prompt="What is √1,600,000 expressed in simplest form?"
            options={["4√100,000", "4,000", "160√10", "400√10", "40√100"]}
            correct="400√10"
            solution={
              <>
                <p className="font-semibold">Approach 1: prime powers</p>
                <p>
                  Factor{" "}
                  <KInline
                    tex="1{,}600{,}000=2^{9}\\cdot 5^{5}"
                    ariaLabel="one million six hundred thousand equals two to the ninth times five to the fifth"
                  />
                  . The largest perfect square factor is{" "}
                  <KInline
                    tex="2^{8}\\cdot 5^{4}=256\\cdot 625"
                    ariaLabel="two to the eighth times five to the fourth equals two hundred fifty six times six hundred twenty five"
                  />
                  .
                </p>
                <KBlock
                  tex="\\sqrt{1{,}600{,}000}=\\sqrt{256}\\,\\sqrt{625}\\,\\sqrt{10}=16\\cdot 25\\cdot \\sqrt{10}=400\\sqrt{10}"
                  ariaLabel="Square root one million six hundred thousand equals four hundred root ten"
                />
                <p className="font-semibold">Approach 2: peel perfect squares</p>
                <KBlock
                  tex="\\sqrt{1{,}600{,}000}=\\sqrt{16\\cdot 100{,}000}=4\\sqrt{100{,}000}=4\\sqrt{10{,}000\\cdot 10}=4\\cdot 100\\cdot \\sqrt{10}=400\\sqrt{10}"
                  ariaLabel="Alternate simplification also gives four hundred root ten"
                />
              </>
            }
          />
        </section>

        <h3 className="text-xl font-semibold text-white">
          Beyond square roots
        </h3>
        <p>
          The same idea works for other indices: pull out perfect cubes for{" "}
          <KInline tex="\\sqrt[3]{\\;}" ariaLabel="cube roots" />, perfect fourth powers for{" "}
          <KInline tex="\\sqrt[4]{\\;}" ariaLabel="fourth roots" />, and so on.
        </p>

        <p>
          Example: <KInline tex="\\sqrt[3]{40}" ariaLabel="cube root of forty" />.
          Since <KInline tex="40=8\\cdot 5" ariaLabel="forty equals eight times five" /> and{" "}
          <KInline tex="8=2^{3}" ariaLabel="eight equals two cubed" />, we have
        </p>
        <KBlock
          tex="\\sqrt[3]{40}=\\sqrt[3]{8\\cdot 5}=\\sqrt[3]{8}\\,\\sqrt[3]{5}=2\\sqrt[3]{5}"
          ariaLabel="Cube root of forty equals two cube root of five"
        />

        <p>
          Example: <KInline tex="\\sqrt[4]{810}" ariaLabel="fourth root of eight hundred ten" />.
          Because <KInline tex="810=81\\cdot 10" ariaLabel="eight hundred ten equals eighty one times ten" /> and{" "}
          <KInline tex="81=3^{4}" ariaLabel="eighty one equals three to the fourth" />, we get
        </p>
        <KBlock
          tex="\\sqrt[4]{810}=\\sqrt[4]{81\\cdot 10}=\\sqrt[4]{81}\\,\\sqrt[4]{10}=3\\sqrt[4]{10}"
          ariaLabel="Fourth root of eight hundred ten equals three fourth root of ten"
        />

        <h3 className="text-xl font-semibold text-white">
          Radicals with variables
        </h3>
        <p>
          Split variable powers into perfect powers times leftovers. For example,
          simplify <KInline tex="\\sqrt[3]{54y^{5}}" ariaLabel="cube root of fifty four y to the fifth" />:
        </p>
        <KBlock
          tex="\\sqrt[3]{54y^{5}}=\\sqrt[3]{27\\cdot 2}\\;\\sqrt[3]{y^{3}\\cdot y^{2}}=\\sqrt[3]{27}\\;\\sqrt[3]{2}\\;\\sqrt[3]{y^{3}}\\;\\sqrt[3]{y^{2}}=3y\\,\\sqrt[3]{2y^{2}}"
          ariaLabel="Cube root of fifty four y to the five equals three y cube root of two y squared"
        />

        <section aria-labelledby="ex17" className="space-y-4">
          <h3 id="ex17" className="text-xl font-semibold text-white">
            Example 17
          </h3>
          <MCQExample
            number={17}
            prompt="In simplest form, ∛(8x³) equals which of the following?"
            options={["(8x³)/3", "2√(x³)", "2x", "4x·∛x", "4x"]}
            correct="2x"
            solution={
              <>
                <p>
                  Both <KInline tex="8" ariaLabel="eight" /> and{" "}
                  <KInline tex="x^{3}" ariaLabel="x cubed" /> are perfect cubes:
                </p>
                <KBlock
                  tex="\\sqrt[3]{8x^{3}}=\\sqrt[3]{8}\\;\\sqrt[3]{x^{3}}=2x"
                  ariaLabel="Cube root of eight x cubed equals two x"
                />
                <p>
                  Check: <KInline tex="(2x)^{3}=8x^{3}" ariaLabel="two x cubed equals eight x cubed" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex18" className="space-y-4">
          <h3 id="ex18" className="text-xl font-semibold text-white">
            Example 18
          </h3>
          <MCQExample
            number={18}
            prompt="Which of the following is equivalent to ∛(6,000·w⁶)?"
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
                  Separate constants and variables:
                </p>
                <KBlock
                  tex="\\sqrt[3]{6{,}000\\,w^{6}}=\\sqrt[3]{6{,}000}\\;\\sqrt[3]{w^{6}}"
                  ariaLabel="Cube root of six thousand w to the six equals cube root of six thousand times cube root of w to the six"
                />
                <p>
                  Since <KInline tex="6{,}000=1{,}000\\cdot 6" ariaLabel="six thousand equals one thousand times six" /> and{" "}
                  <KInline tex="1{,}000=10^{3}" ariaLabel="one thousand equals ten cubed" />,
                </p>
                <KBlock
                  tex="\\sqrt[3]{6{,}000}=\\sqrt[3]{1{,}000}\\,\\sqrt[3]{6}=10\\,\\sqrt[3]{6}"
                  ariaLabel="Cube root six thousand equals ten times cube root six"
                />
                <p>
                  Also, <KInline tex="\\sqrt[3]{w^{6}}=w^{2}" ariaLabel="cube root w six equals w squared" />. Putting it together:
                </p>
                <KBlock
                  tex="\\sqrt[3]{6{,}000\\,w^{6}}=10w^{2}\\,\\sqrt[3]{6}"
                  ariaLabel="Cube root of six thousand w to the six equals ten w squared cube root of six"
                />
              </>
            }
          />
        </section>

        <h3 className="text-xl font-semibold text-white">Key takeaways</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Use{" "}
            <KInline tex="\\sqrt[n]{ab}=\\sqrt[n]{a}\\,\\sqrt[n]{b}" ariaLabel="nth root of a b equals nth root a times nth root b" />{" "}
            to split out perfect powers.
          </li>
          <li>
            The simplest form has no perfect n-th power factor left inside the
            radical.
          </li>
          <li>
            For speed, factor out the largest perfect power you can find.
          </li>
        </ul>
      </article>
    </main>
  );
}