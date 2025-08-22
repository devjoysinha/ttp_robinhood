import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// If your design system exposes KaTeX helpers, prefer those imports.
// Fallback assumption: a shared KaTeX wrapper provides InlineMath/BlockMath.
import { InlineMath, BlockMath } from "@/components/ui/KaTeX";

export const metadata: Metadata = {
  title: "4.6.8 Even/Odd Exponents and the Sign of the Result | Properties of Numbers",
  description:
    "Learn how the parity of an exponent determines the sign of a power, when you can infer the sign of the base from a result, and practice with quick GMAT‑style problems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.8 Even and Odd Exponents Versus Positive and Negative Answers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A favorite GMAT move is to combine signs with exponents. The crucial
          idea is parity: even powers erase the sign of a nonzero base, while odd
          powers preserve it. Once you know that, you can tell when the sign of a
          power pins down the sign of its base—and when it doesn’t.
        </p>

        <section aria-labelledby="rule-even">
          <h3 id="rule-even" className="sr-only">
            Rule for even exponents
          </h3>
          <MustKnow>
            If a nonzero base is raised to an even power, the result is always
            positive.
          </MustKnow>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"3^4 = 81"} /> which is positive.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"(-2)^2 = 4"} /> is positive even though the
                base is negative.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"\\left(-\\tfrac{1}{2}\\right)^6 = \\tfrac{1}{64}"} /> is also positive.
              </span>
            </p>
          </div>
        </section>

        <section aria-labelledby="rule-odd">
          <h3 id="rule-odd" className="sr-only">
            Rule for odd exponents
          </h3>
          <MustKnow>
            If a nonzero base is raised to an odd power, the sign of the result
            matches the sign of the base.
          </MustKnow>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"3^3 = 27"} /> is positive (same sign as the base).
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"(-2)^5 = -32"} /> is negative (same sign as the base).
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                <InlineMath math={"\\left(-\\tfrac{1}{2}\\right)^3 = -\\tfrac{1}{8}"} /> is negative.
              </span>
            </p>
          </div>
        </section>

        <section aria-labelledby="inference">
          <h3 id="inference" className="sr-only">
            Inferring the sign of the base
          </h3>
          <MustKnow>
            - Even power: knowing the sign of <InlineMath math={"x^{\\text{even}}"} /> does not tell
            you the sign of <InlineMath math={"x"} /> (as long as <InlineMath math={"x \\neq 0"} />).
            - Odd power: the sign of <InlineMath math={"x^{\\text{odd}}"} /> equals the sign of{" "}
            <InlineMath math={"x"} />.
          </MustKnow>

          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                If <InlineMath math={"x^4 > 0"} />, <InlineMath math={"x"} /> could be positive or negative
                (for instance, <InlineMath math={"x=-2"} /> or <InlineMath math={"x=3"} />).
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-500">•</span>
              <span>
                If <InlineMath math={"x^3 > 0"} />, then <InlineMath math={"x > 0"} />. If{" "}
                <InlineMath math={"x^7 < 0"} />, then <InlineMath math={"x < 0"} />.
              </span>
            </p>
          </div>
        </section>

        <MCQExample
          number={8}
          difficulty="easy"
          prompt={
            <>
              If <InlineMath math={"m^4 > 0"} /> and <InlineMath math={"n^3 < 0"} />, which of the
              following must be true?
              <div className="mt-2 space-y-1">
                <div>I. mn &lt; 0</div>
                <div>II. mn &gt; 0</div>
                <div>III. m + n &gt; 0</div>
              </div>
            </>
          }
          options={["I only", "III only", "I and II", "II and III", "None"]}
          correct="None"
          solution={
            <>
              <p>
                From <InlineMath math={"m^4 > 0"} />, we only know <InlineMath math={"m \\neq 0"} />; the sign
                of <InlineMath math={"m"} /> is unknown because an even power is always positive for any
                nonzero base. From <InlineMath math={"n^3 < 0"} />, we know <InlineMath math={"n < 0"} /> (odd
                power preserves sign).
              </p>
              <p>
                I. mn &lt; 0? If <InlineMath math={"m < 0"} />, then mn is positive; if{" "}
                <InlineMath math={"m > 0"} />, mn is negative. Not guaranteed.
              </p>
              <p>
                II. mn &gt; 0? Same issue—depends on <InlineMath math={"m"} />. Not guaranteed.
              </p>
              <p>
                III. m + n &gt; 0? With <InlineMath math={"n < 0"} />, the sum could be negative or positive
                depending on <InlineMath math={"m"} /> (e.g., 4 + (−10) vs. 25 + (−10)). Not guaranteed.
              </p>
              <p>Therefore, none of the statements must be true. Answer: None.</p>
            </>
          }
        />

        <MCQExample
          number={9}
          difficulty="easy"
          prompt={
            <>
              If <InlineMath math={"x"} /> and <InlineMath math={"y"} /> are both negative, which of the
              following expressions must be negative?
              <div className="mt-2 space-y-1">
                <div>I. <InlineMath math={"x^2 y"} /></div>
                <div>
                  II. <InlineMath math={"x - y"} />
                </div>
                <div>
                  III. <InlineMath math={"3x + y"} />
                </div>
              </div>
            </>
          }
          options={["II only", "III only", "I and III", "II and III", "I, II and III"]}
          correct="I and III"
          solution={
            <>
              <p>
                I. <InlineMath math={"x^2 y"} />: <InlineMath math={"x^2"} /> is positive (even power), and{" "}
                <InlineMath math={"y"} /> is negative, so the product is negative. Must be negative.
              </p>
              <p>
                II. <InlineMath math={"x - y"} />: subtracting a negative is adding a positive; depending on
                magnitudes, the result can be negative, zero, or positive. Not guaranteed.
              </p>
              <p>
                III. <InlineMath math={"3x + y"} />: since <InlineMath math={"x"} /> and{" "}
                <InlineMath math={"y"} /> are both negative, <InlineMath math={"3x"} /> is negative and adding
                another negative keeps the sum negative. Must be negative.
              </p>
              <p>Thus, I and III. Answer: I and III.</p>
            </>
          }
        />

        <MCQExample
          number={10}
          difficulty="easy"
          prompt={
            <>
              If <InlineMath math={"m < 0"} /> and <InlineMath math={"n < 0"} />, which of the following must
              be positive?
            </>
          }
          options={[
            <span key="a">
              <InlineMath math={"m^6 n^3"} />
            </span>,
            <span key="b">
              <InlineMath math={"m^5 n^2"} />
            </span>,
            <span key="c">
              <InlineMath math={"m^3 n^5"} />
            </span>,
            <span key="d">
              <InlineMath math={"m^6 n^7"} />
            </span>,
            <span key="e">
              <InlineMath math={"m^2 n^3"} />
            </span>,
          ]}
          correct={<InlineMath math={"m^3 n^5"} />}
          solution={
            <>
              <p>
                For a negative base, an even power is positive and an odd power is negative:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <InlineMath math={"m^6"} /> positive, <InlineMath math={"n^3"} /> negative → product
                  negative.
                </li>
                <li>
                  <InlineMath math={"m^5"} /> negative, <InlineMath math={"n^2"} /> positive → product
                  negative.
                </li>
                <li>
                  <InlineMath math={"m^3"} /> negative, <InlineMath math{"n^5"} /> negative → product positive.
                </li>
                <li>
                  <InlineMath math={"m^6"} /> positive, <InlineMath math={"n^7"} /> negative → product
                  negative.
                </li>
                <li>
                  <InlineMath math={"m^2"} /> positive, <InlineMath math={"n^3"} /> negative → product
                  negative.
                </li>
              </ul>
              <p>The only expression that must be positive is <InlineMath math={"m^3 n^5"} />.</p>
            </>
          }
        />

        <MCQExample
          number={11}
          difficulty="easy"
          prompt={
            <>
              Let <InlineMath math={"a, b, c, d, z"} /> be nonzero integers and suppose{" "}
              <InlineMath math={"(az)^{79} (bz)^{71} (cz)^8 (dz)^2 > 0"} />. Which statement must be true?
            </>
          }
          options={[
            "z > 0",
            "ab > 0",
            "abcd > 0",
            <span key="d">
              <InlineMath math={"b^2 - a^2 > 0"} />
            </span>,
            <span key="e">
              <InlineMath math={"az + bz > 0"} />
            </span>,
          ]}
          correct="ab > 0"
          solution={
            <>
              <p>
                The even‑powered factors <InlineMath math={"(cz)^8"} /> and{" "}
                <InlineMath math={"(dz)^2"} /> are positive regardless of signs (bases are nonzero). Thus the
                sign of the whole product is controlled by{" "}
                <InlineMath math={"(az)^{79} (bz)^{71}"} />:
              </p>
              <BlockMath math={"(az)^{79}(bz)^{71} = a^{79} b^{71} z^{150}"} />
              <p>
                Since <InlineMath math={"150"} /> is even, <InlineMath math={"z^{150} > 0"} />. Therefore the
                product is positive if and only if{" "}
                <InlineMath math={"a^{79} b^{71} > 0"} />, which requires <InlineMath math={"a"} /> and{" "}
                <InlineMath math={"b"} /> to have the same sign. Hence <InlineMath math={"ab > 0"} /> must be
                true. None of the other choices is forced.
              </p>
            </>
          }
        />

        <p>
          Takeaway: parity drives the sign. Even powers always give a positive
          result for nonzero bases; odd powers keep the base’s sign. Use that to
          decide when a sign conclusion is possible and when additional information
          is needed.
        </p>
      </article>
    </main>
  );
}