import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Make sure KaTeX CSS is included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel}
      role="math"
      className="align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
  });
  return (
    <div
      aria-label={ariaLabel}
      role="math"
      className="my-4 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "5.5 The Cube Root | Roots and Exponents",
  description:
    "Understand cube roots: definition, perfect cubes, handling negatives, and key facts to memorize. Includes a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.5 The Cube Root
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The cube root answers the question “what number, when multiplied by
          itself three times, gives the original value?” In symbols, the cube
          root of a number a is the value b such that{" "}
          <KInline expr={"b^3 = a"} ariaLabel="b cubed equals a" />. For
          instance,{" "}
          <KInline
            expr={"\\sqrt[3]{125} = 5"}
            ariaLabel="cube root of 125 equals 5"
          />{" "}
          because{" "}
          <KInline
            expr={"5\\times 5\\times 5 = 125"}
            ariaLabel="five times five times five equals one hundred twenty-five"
          />
          .
        </p>

        <p>
          Whether a cube root is an integer depends on whether the radicand is a
          perfect cube. A positive integer is a perfect cube exactly when every
          prime exponent in its factorization is a multiple of 3. For example,
          27 is a perfect cube since{" "}
          <KInline expr={"27 = 3^3"} ariaLabel="twenty-seven equals three cubed" />
          , while 28 is not because{" "}
          <KInline
            expr={"28 = 2^2\\cdot 7"}
            ariaLabel="twenty-eight equals two squared times seven"
          />
          . Thus{" "}
          <KInline
            expr={"\\sqrt[3]{27} = 3"}
            ariaLabel="cube root of twenty-seven equals three"
          />
          , but{" "}
          <KInline
            expr={"\\sqrt[3]{28} \\approx 3.037"}
            ariaLabel="cube root of twenty-eight is approximately 3.037"
          />
          , which is not an integer.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              - The cube root of a perfect cube is an integer; otherwise it
              isn’t.
            </p>
            <p>
              - Cube roots (and any odd root) can be taken of negative numbers.
              For example,{" "}
              <KInline
                expr={"\\sqrt[3]{-8} = -2"}
                ariaLabel="cube root of negative eight equals negative two"
              />{" "}
              since{" "}
              <KInline
                expr={"(-2)^3 = -8"}
                ariaLabel="negative two cubed equals negative eight"
              />
              .
            </p>
            <p>
              - Memorize the first several nonnegative perfect cubes to move
              faster on test day.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="perfect-cubes-heading" className="space-y-2">
          <h3
            id="perfect-cubes-heading"
            className="text-lg font-semibold text-white"
          >
            Common perfect cubes
          </h3>
          <p>
            0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000
          </p>
        </section>

        <KBlock
          expr={"\\text{If } b = \\sqrt[3]{a},\\text{ then } b^3 = a."}
          ariaLabel="If b equals the cube root of a, then b cubed equals a"
        />

        <MCQExample
          number={11}
          difficulty="medium"
          prompt={
            <>
              If <KInline expr={"\\sqrt[3]{-n}"} ariaLabel="cube root of negative n" /> is an
              integer, which statements must be true?
              <br />
              I. n is negative
              <br />
              II. n is an even integer
              <br />
              III. n is an integer
            </>
          }
          options={[
            "I only",
            "III only",
            "I and III only",
            "II and III only",
            "I, II, and III",
          ]}
          correct="III only"
          solution={
            <>
              <p>
                If <KInline expr={"\\sqrt[3]{-n}"} ariaLabel="cube root of negative n" /> is an
                integer, then the quantity <KInline expr={"-n"} ariaLabel="negative n" /> must be
                a perfect cube (e.g., …, −27, −8, −1, 0, 1, 8, 27, …). That
                means <KInline expr={"n"} ariaLabel="n" /> itself is the opposite of a perfect
                cube and therefore an integer. So III must be true.
              </p>
              <p>
                However, <KInline expr={"n"} ariaLabel="n" /> doesn’t have to be negative (take
                <KInline expr={"n=8"} ariaLabel="n equals eight" />, where{" "}
                <KInline expr={"\\sqrt[3]{-8}=-2"} ariaLabel="cube root of negative eight equals negative two" />
                ), and it doesn’t have to be even (e.g.,{" "}
                <KInline expr={"n=1"} ariaLabel="n equals one" /> gives{" "}
                <KInline expr={"\\sqrt[3]{-1}=-1"} ariaLabel="cube root of negative one equals negative one" />
                ). Thus only III is guaranteed.
              </p>
              <p>Answer: III only.</p>
            </>
          }
        />

        <p>
          Takeaway: Treat cube roots as position-free exponents—focus on whether
          the radicand is a perfect cube and remember that odd roots allow
          negatives. When the structure forces the radicand to be a perfect
          cube, the result is an integer.
        </p>
      </article>
    </main>
  );
}