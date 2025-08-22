import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "5.6 Multiplying Radicals | Roots and Exponents",
  description:
    "Learn how to multiply radicals safely and efficiently, including square roots and m-th roots. See worked examples and common traps.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Roots and Exponents
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.6 Multiplying Radicals
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In this lesson, we focus on a fundamental rule for multiplying radicals. When
          used correctly, it lets you combine roots first and simplify later—a big time
          saver on test day.
        </p>

        <MustKnow>
          <p className="mb-2">
            For nonnegative numbers a and b, you can multiply square roots by combining
            the values inside a single radical:
          </p>
          <div aria-label="Square root of a times square root of b equals square root of a b">
            <BlockMath math="\sqrt{a}\cdot\sqrt{b}=\sqrt{ab}" />
          </div>
          <p className="mt-2">
            This extends to any number of square roots:
          </p>
          <div aria-label="Product of many square roots equals the square root of the product inside">
            <BlockMath math="\sqrt{a_1}\cdot\sqrt{a_2}\cdots\sqrt{a_n}=\sqrt{a_1a_2\cdots a_n}" />
          </div>
        </MustKnow>

        <p>
          Why is this helpful? Sometimes each individual root is awkward to evaluate, but
          the product under a single root becomes a perfect square. For example:
        </p>

        <div className="rounded-md bg-slate-800/60 p-4">
          <p className="mb-2 font-medium text-gray-200">Two quick illustrations</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <InlineMath math="\sqrt{25}\cdot\sqrt{4}" /> can be done either way:
              evaluate first (5·2 = 10) or combine under one root (
              <InlineMath math="\sqrt{25\cdot 4}=\sqrt{100}=10" />).
            </li>
            <li>
              <InlineMath math="\sqrt{2}\cdot\sqrt{18}" /> looks messy separately, but
              combining is easy: <InlineMath math="\sqrt{2\cdot 18}=\sqrt{36}=6" />.
            </li>
          </ul>
        </div>

        <MCQExample
          number={12}
          prompt={
            <>
              If <InlineMath math="x=\sqrt{12}" /> and{" "}
              <InlineMath math="y=\sqrt{12}" />, then what is <InlineMath math="xy" />?
            </>
          }
          options={["3", "4", "6", "12", "144"]}
          correct="12"
          solution={
            <>
              <p>
                Multiply using the product rule for square roots:
                <InlineMath math="\;xy=\sqrt{12}\cdot\sqrt{12}=\sqrt{12\cdot 12}=\sqrt{144}=12" />
                .
              </p>
              <p>
                Intuitively, <InlineMath math="\sqrt{12}" /> times itself must be 12 by
                definition of the square root. The correct answer is 12.
              </p>
            </>
          }
        />

        <p>
          You can also apply the rule across three or more square roots in one step:
        </p>

        <div className="rounded-md bg-slate-800/60 p-4">
          <div aria-label="Multiply five square roots by combining under one radical">
            <BlockMath math="\sqrt{2}\cdot\sqrt{3}\cdot\sqrt{6}\cdot\sqrt{2}\cdot\sqrt{2}=\sqrt{2\cdot 3\cdot 6\cdot 2\cdot 2}=\sqrt{144}=12" />
          </div>
        </div>

        <MCQExample
          number={13}
          prompt={
            <>
              Let <InlineMath math="p=\sqrt{10}" />, <InlineMath math="q=\sqrt{5}" />,
              and <InlineMath math="r=\sqrt{2}" />. Compute{" "}
              <InlineMath math="2pqr-rq" />.
            </>
          }
          options={[
            "10",
            <span key="b">
              <InlineMath math="20-\sqrt{10}" />
            </span>,
            <span key="c">
              <InlineMath math="20\sqrt{90}" />
            </span>,
            <span key="d">
              <InlineMath math="2\sqrt{1{,}000}" />
            </span>,
            <span key="e">
              <InlineMath math="2\sqrt{10}" />
            </span>,
          ]}
          correct="20-\\sqrt{10}"
          solution={
            <>
              <p>
                Substitute and use the product rule under radicals:
                <InlineMath math="\;2pqr=2\sqrt{10}\sqrt{5}\sqrt{2}=2\sqrt{10\cdot 5\cdot 2}=2\sqrt{100}=20" />
                . Also, <InlineMath math="rq=\sqrt{2}\sqrt{5}=\sqrt{10}" />. Therefore,
                <InlineMath math="\;2pqr-rq=20-\sqrt{10}" />.
              </p>
            </>
          }
        />

        <h3 className="mt-10 text-xl font-semibold text-white">
          Extending the rule to other indices
        </h3>
        <p>
          The same idea works for m-th roots when they share the same index. If m is
          even, each factor inside must be nonnegative to keep the expression real.
        </p>

        <MustKnow>
          <p className="mb-2">
            For a common index m, the product rule (and its reverse) is:
          </p>
          <div aria-label="m-th root of a times m-th root of b equals m-th root of a b">
            <BlockMath math="\sqrt[m]{a}\cdot\sqrt[m]{b}=\sqrt[m]{ab}" />
          </div>
          <div aria-label="m-th root of a b can be split into m-th root of a times m-th root of b">
            <BlockMath math="\sqrt[m]{ab}=\sqrt[m]{a}\cdot\sqrt[m]{b}" />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Note: If m is even, require a ≥ 0 and b ≥ 0 (real numbers only).
          </p>
        </MustKnow>

        <div className="rounded-md bg-slate-800/60 p-4">
          <p className="mb-2 font-medium text-gray-200">Examples with other indices</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <InlineMath math="\sqrt[3]{25}\cdot\sqrt[3]{5}=\sqrt[3]{125}=5" />
            </li>
            <li>
              <InlineMath math="\sqrt[4]{5}\cdot\sqrt[4]{20}\cdot\sqrt[4]{2}\cdot\sqrt[4]{50}=\sqrt[4]{5\cdot 20\cdot 2\cdot 50}=\sqrt[4]{10{,}000}=10" />
            </li>
          </ul>
        </div>

        <MCQExample
          number={14}
          prompt={
            <>
              Which of the following are equivalent to{" "}
              <InlineMath math="\sqrt[3]{-3}\cdot\sqrt[3]{4}\cdot\sqrt[3]{9}\cdot\sqrt[3]{2}" />
              ?
              <br />
              I. -6
              <br />
              II. <InlineMath math="-3\cdot\sqrt[3]{8}" />
              <br />
              III. <InlineMath math="2\cdot\sqrt[3]{-27}" />
            </>
          }
          options={[
            "I only",
            "I and II",
            "I and III",
            "II and III",
            "I, II, and III",
          ]}
          correct="I, II, and III"
          solution={
            <>
              <p>
                Combine the four cube roots under one radical:
                <InlineMath math="\sqrt[3]{(-3)\cdot 4\cdot 9\cdot 2}=\sqrt[3]{-216}=-6" />
                , so I is true.
              </p>
              <p>
                For II, <InlineMath math="\sqrt[3]{8}=2" />, so{" "}
                <InlineMath math="-3\cdot\sqrt[3]{8}=-3\cdot 2=-6" />; true.
              </p>
              <p>
                For III, <InlineMath math="\sqrt[3]{-27}=-3" />, hence{" "}
                <InlineMath math="2\cdot\sqrt[3]{-27}=2\cdot(-3)=-6" />; also true.
              </p>
              <p>All three match -6. Correct answer: I, II, and III.</p>
            </>
          }
        />

        <p className="mt-8">
          Key takeaway: when radicals share the same index, multiply inside the radical
          first. Confirm domain conditions for even indices, and watch out for the common
          trap of treating a radical as its radicand.
        </p>
      </article>
    </main>
  );
}