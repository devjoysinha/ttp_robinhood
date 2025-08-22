import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "5.3 Other Even‑Indexed Roots | Roots and Exponents",
  description:
    "Understand radical indices, why even‑indexed roots are non‑negative, and how |x| appears in even‑root identities. Includes four GMAT‑style practice questions with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.3 Other Even‑Indexed Roots
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The small number written at the upper‑left of a radical is called the
          index. It tells you which root is being taken. When the index is 2
          (a square root), we typically omit it.
        </p>

        <div className="space-y-2">
          <p className="flex flex-wrap gap-x-2">
            For example:{" "}
            <InlineMath math="\text{index of }\sqrt[6]{64}\text{ is }6" />{" "}
            and <InlineMath math="\text{index of }\sqrt[4]{10{,}000}\text{ is }4" />.
          </p>
          <p>
            A square root is written as <InlineMath math="\sqrt{\,\cdot\,}" />{" "}
            without showing the 2. So{" "}
            <InlineMath math="\sqrt[2]{100}=\sqrt{100}" />.
          </p>
        </div>

        <MustKnow>
          The principal square root is never negative. For any non‑negative a,
          <InlineMath math="\sqrt{a}\ge 0" />, so{" "}
          <InlineMath math="\sqrt{100}=10" /> and it is not equal to ±10.
        </MustKnow>

        <div className="space-y-2">
          <p>Quick checks:</p>
          <p className="flex flex-wrap gap-x-4">
            <InlineMath math="\sqrt{64}=8" />
            <InlineMath math="\sqrt{256}=16" />
            <InlineMath math="\sqrt{9}=3" />
            <InlineMath math="\sqrt{1}=1" />
            <InlineMath math="\sqrt{0}=0" />
          </p>
        </div>

        <p>
          Because the square root returns the non‑negative output, taking the
          square root of a perfect square variable gives an absolute value:
        </p>
        <BlockMath math="\sqrt{x^2}=|x|" />

        <p>These ideas extend to any even index n.</p>

        <MustKnow>
          If n is even and x is real, then{" "}
          <InlineMath math="\sqrt[n]{x^n}=|x|" />. Also, for non‑negative inputs
          a, even‑indexed roots are non‑negative:{" "}
          <InlineMath math="\sqrt[n]{a}\ge 0" />.
        </MustKnow>

        <div className="space-y-2">
          <p>Examples of even‑indexed roots:</p>
          <p className="flex flex-wrap gap-x-4">
            <InlineMath math="\sqrt[4]{10{,}000}=\sqrt[4]{10^4}=|10|=10" />
            <InlineMath math="\sqrt[10]{1024}=\sqrt[10]{2^{10}}=|2|=2" />
            <InlineMath math="\sqrt[4]{81}=\sqrt[4]{3^4}=|3|=3" />
            <InlineMath math="\sqrt[6]{64}=\sqrt[6]{2^6}=|2|=2" />
            <InlineMath math="\sqrt[8]{1}=1" />
            <InlineMath math="\sqrt[10]{0}=0" />
          </p>
        </div>

        <p>
          On the GMAT, you won’t be asked for{" "}
          <InlineMath math="\sqrt{-100}" /> (that expression isn’t real). But
          you can take odd roots of negatives because the sign is preserved:
        </p>
        <p className="flex flex-wrap gap-x-6">
          <InlineMath math="\sqrt[3]{-64}=-4" />{" "}
          <span className="text-gray-400">
            (since <InlineMath math="(-4)^3=-64" />)
          </span>
          <InlineMath math="\sqrt[5]{-32}=-2" />{" "}
          <span className="text-gray-400">
            (since <InlineMath math="(-2)^5=-32" />)
          </span>
        </p>

        <MustKnow>
          General identities:
          <br />
          • If n is even, <InlineMath math="\sqrt[n]{x^n}=|x|" />.
          <br />• If n is odd, <InlineMath math="\sqrt[n]{x^n}=x" />.
        </MustKnow>

        <MCQExample
          number={46}
          prompt="Let n = ⁴√256 and m = ³√(−27). Which of the following could equal m + n?"
          options={["I only", "I and II", "I and III", "III only", "I, II, and III"]}
          correct="I only"
          solution={
            <>
              <p>Evaluate each term first.</p>
              <p className="flex flex-col gap-1">
                <span>
                  <InlineMath math="n=\sqrt[4]{256}=\sqrt[4]{4^4}=4" />
                </span>
                <span>
                  <InlineMath math="m=\sqrt[3]{-27}=\sqrt[3]{(-3)^3}=-3" />
                </span>
                <span>
                  So <InlineMath math="m+n=-3+4=1" />.
                </span>
              </p>
              <p>
                Only I (the value 1) is attainable. Therefore, I only.
              </p>
            </>
          }
        />

        <MCQExample
          number={47}
          prompt="Let P = ³√(−125) and Q = ⁴√625. What is P − Q?"
          options={["-10", "-5", "0", "5", "10"]}
          correct="-10"
          solution={
            <>
              <p className="flex flex-col gap-1">
                <span>
                  <InlineMath math="P=\sqrt[3]{-125}=\sqrt[3]{(-5)^3}=-5" />
                </span>
                <span>
                  <InlineMath math="Q=\sqrt[4]{625}=\sqrt[4]{5^4}=|5|=5" />
                </span>
                <span>
                  Hence <InlineMath math="P-Q=-5-5=-10" />.
                </span>
              </p>
            </>
          }
        />

        <MCQExample
          number={48}
          prompt="Suppose x = ³√(n³) and √(m²) = y. Then x − y equals:"
          options={[
            "³√n − m",
            "³√n − √m",
            "n − m",
            "n − √m",
            "n − |m|",
          ]}
          correct="n − |m|"
          solution={
            <>
              <p>
                Since the index 3 is odd,{" "}
                <InlineMath math="x=\sqrt[3]{n^{3}}=n" />. And{" "}
                <InlineMath math="y=\sqrt{m^{2}}=|m|" /> by the even‑root rule.
              </p>
              <p>
                Therefore, <InlineMath math="x-y=n-|m|" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={49}
          prompt="If n is an odd positive integer, m is an even positive integer, y < 0 < z, which statement must be true?"
          options={[
            "I only",
            "II only",
            "I and II only",
            "I and III only",
            "II and III only",
          ]}
          correct="II only"
          solution={
            <>
              <p>Consider each claim.</p>
              <p className="mt-2">
                I.{" "}
                <InlineMath math="\dfrac{\sqrt[n]{y^n}}{\sqrt[m]{z^m}}<-1" />
                . Since n is odd, <InlineMath math="\sqrt[n]{y^n}=y" /> (a
                negative). Since m is even,{" "}
                <InlineMath math="\sqrt[m]{z^m}=|z|>0" />. The ratio is
                negative but not necessarily less than −1 (e.g., y = −1, z = 1
                gives −1). So I is not guaranteed.
              </p>
              <p>
                II. <InlineMath math="y<\sqrt[m]{z}" />. With m even and{" "}
                <InlineMath math="z>0" />,{" "}
                <InlineMath math="\sqrt[m]{z}\ge 0" />. Any negative y is
                strictly less than a non‑negative number. Thus II must hold.
              </p>
              <p>
                III. <InlineMath math="y^m<z^n" />. Here{" "}
                <InlineMath math="y^m" /> is positive (even exponent), and{" "}
                <InlineMath math="z^n" /> is also positive. Either side can be
                larger depending on magnitudes (e.g., y = −3, m = 2 ⇒ 9; z = 2,
                n = 3 ⇒ 8). Not guaranteed.
              </p>
              <p>Only II must be true.</p>
            </>
          }
        />

        <p>
          Bottom line: Even‑indexed roots return the principal (non‑negative)
          value, which is why <InlineMath math="\sqrt[n]{x^n}=|x|" /> for even
          n. Odd‑indexed roots preserve sign, so{" "}
          <InlineMath math="\sqrt[n]{x^n}=x" /> for odd n. Keep these rules
          handy to avoid sign traps on test day.
        </p>
      </article>
    </main>
  );
}