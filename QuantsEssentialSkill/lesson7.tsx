import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "2.1.7 Multiplying and Dividing a Whole Number and a Fraction | Essential GMAT Quant Skills",
  description:
    "Learn the clean way to multiply and divide whole numbers and fractions. Avoid common pitfalls, use the “over 1” trick, and practice with three MCQs, all with step‑by‑step solutions rendered with KaTeX.",
};

// Lightweight KaTeX renderer.
// Note: Ensure `katex/dist/katex.min.css` is loaded globally (e.g., in your root layout).
function Tex({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
  });
  const Wrapper = block ? "div" : "span";
  return (
    <Wrapper
      role="math"
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.1.7 Multiplying and dividing a whole number and a fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a whole number multiplies a fraction, you multiply only the
          numerator by that whole number and keep the denominator the same. For
          instance,{" "}
          <Tex ariaLabel="five times three fourths equals fifteen fourths">
            5 \times \tfrac{3}{4} = \tfrac{15}{4}
          </Tex>{" "}
          and{" "}
          <Tex ariaLabel="six times two thirds equals twelve thirds equals four">
            6 \times \tfrac{2}{3} = \tfrac{12}{3} = 4
          </Tex>
          .
        </p>

        <MustKnow>
          <div className="text-gray-100">
            If the whole number is <Tex>A</Tex> and the fraction is{" "}
            <Tex>\tfrac{b}{c}</Tex>, then{" "}
            <Tex>
              A \times \tfrac{b}{c} = \tfrac{A \cdot b}{c}
            </Tex>
            . Multiply the numerator; keep the denominator.
          </div>
        </MustKnow>

        <p>
          A frequent mistake is to multiply the whole number by both the
          numerator and denominator. For example, treating{" "}
          <Tex>5 \times \tfrac{3}{4}</Tex> as{" "}
          <Tex>\tfrac{15}{20}</Tex> just gives{" "}
          <Tex>\tfrac{3}{4}</Tex> again after reducing, which can’t be right—
          multiplying by 5 should make the value five times larger, not leave it
          unchanged.
        </p>

        <p>
          A reliable way to avoid errors is to write the whole number as a
          fraction over 1 and then apply “numerator × numerator, denominator ×
          denominator.” For instance,
          {" "}
          <Tex ariaLabel="five over one times three fourths equals fifteen fourths">
            \tfrac{5}{1} \times \tfrac{3}{4} = \tfrac{15}{4}
          </Tex>
          .
        </p>

        <p>
          The same “over 1” idea helps with division. Convert division to
          multiplication by the reciprocal, and treat the whole number as{" "}
          <Tex>\tfrac{\text{whole}}{1}</Tex>.
        </p>

        <p>
          Example 1:{" "}
          <Tex ariaLabel="five divided by three fourths equals five over one times four over three equals twenty over three">
            5 \div \tfrac{3}{4} \;=\; \tfrac{5}{1} \times \tfrac{4}{3} \;=\; \tfrac{20}{3}
          </Tex>
          .
          <br />
          Example 2:{" "}
          <Tex ariaLabel="two thirds divided by six equals two thirds times one sixth equals one ninth">
            \tfrac{2}{3} \div 6 \;=\; \tfrac{2}{3} \times \tfrac{1}{6} \;=\; \tfrac{1}{9}
          </Tex>
          .
        </p>

        <MustKnow>
          <div className="text-gray-100">
            When multiplying or dividing a whole number and a fraction, first
            write the whole number as a fraction over 1.
          </div>
        </MustKnow>

        <section aria-labelledby="practice" className="space-y-6">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Try a few
          </h3>

          <MCQExample
            number={19}
            prompt="Compute 4 × (2/3) + 3 × (5/6)."
            options={["13/5", "5", "31/6", "11/2", "35/6"]}
            correct="31/6"
            solution={
              <>
                <p>
                  Convert each product by writing whole numbers over 1:
                </p>
                <p>
                  <Tex ariaLabel="four times two thirds equals eight thirds">
                    4 \times \tfrac{2}{3} = \tfrac{4}{1} \times \tfrac{2}{3} = \tfrac{8}{3}
                  </Tex>
                  , and{" "}
                  <Tex ariaLabel="three times five sixths equals fifteen sixths equals five halves">
                    3 \times \tfrac{5}{6} = \tfrac{3}{1} \times \tfrac{5}{6} = \tfrac{15}{6} = \tfrac{5}{2}
                  </Tex>
                  .
                </p>
                <p>
                  Use a common denominator of 6:{" "}
                  <Tex>\tfrac{8}{3} = \tfrac{16}{6}</Tex> and{" "}
                  <Tex>\tfrac{5}{2} = \tfrac{15}{6}</Tex>. Then add:{" "}
                  <Tex ariaLabel="sixteen sixths plus fifteen sixths equals thirty one sixths">
                    \tfrac{16}{6} + \tfrac{15}{6} = \tfrac{31}{6}
                  </Tex>
                  .
                </p>
              </>
            }
          />

          <MCQExample
            number={20}
            prompt="Compute (2/3) ÷ 5 + (1/3) ÷ 4."
            options={["14/3", "4", "11/3", "13/60", "8/30"]}
            correct="13/60"
            solution={
              <>
                <p>
                  Turn each division into multiply by the reciprocal:
                </p>
                <p>
                  <Tex ariaLabel="two thirds divided by five equals two thirds times one fifth equals two fifteenths">
                    \tfrac{2}{3} \div 5 = \tfrac{2}{3} \times \tfrac{1}{5} = \tfrac{2}{15}
                  </Tex>{" "}
                  and{" "}
                  <Tex ariaLabel="one third divided by four equals one third times one fourth equals one twelfth">
                    \tfrac{1}{3} \div 4 = \tfrac{1}{3} \times \tfrac{1}{4} = \tfrac{1}{12}
                  </Tex>
                  .
                </p>
                <p>
                  Common denominator 60:{" "}
                  <Tex>\tfrac{2}{15}=\tfrac{8}{60}</Tex> and{" "}
                  <Tex>\tfrac{1}{12}=\tfrac{5}{60}</Tex>. Then{" "}
                  <Tex ariaLabel="eight sixtieths plus five sixtieths equals thirteen sixtieths">
                    \tfrac{8}{60} + \tfrac{5}{60} = \tfrac{13}{60}
                  </Tex>
                  .
                </p>
              </>
            }
          />

          <MCQExample
            number={21}
            prompt="For variables p and q (nonzero), compute p × (1/q) + (1/q) ÷ p."
            options={[
              "(p+1)/(qp)",
              "p^2/(qp)",
              "(p^2+1)/(qp)",
              "(p^2+1)/p",
              "(p^2+1)/(p+qp)",
            ]}
            correct="(p^2+1)/(qp)"
            solution={
              <>
                <p>
                  First term:{" "}
                  <Tex ariaLabel="p times one over q equals p over q">
                    p \times \tfrac{1}{q} = \tfrac{p}{q}
                  </Tex>
                  .
                </p>
                <p>
                  Second term:{" "}
                  <Tex ariaLabel="one over q divided by p equals one over q times one over p equals one over q p">
                    \tfrac{1}{q} \div p = \tfrac{1}{q} \times \tfrac{1}{p} = \tfrac{1}{qp}
                  </Tex>
                  .
                </p>
                <p>
                  Add with denominator <Tex>qp</Tex>:{" "}
                  <Tex ariaLabel="p over q equals p squared over q p">
                    \tfrac{p}{q} = \tfrac{p^2}{qp}
                  </Tex>
                  , so{" "}
                  <Tex ariaLabel="p squared over q p plus one over q p equals p squared plus one over q p">
                    \tfrac{p^2}{qp} + \tfrac{1}{qp} = \tfrac{p^2+1}{qp}
                  </Tex>
                  .
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: treat whole numbers as fractions over 1, convert division
          to multiplication by the reciprocal, and keep your eye on the common
          denominator when adding results.
        </p>
      </article>
    </main>
  );
}