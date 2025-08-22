import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Ensure KaTeX CSS is loaded once in your app (e.g., in app/layout):
// import "katex/dist/katex.min.css";

// Lazy-load react-katex to keep this page a server component and avoid SSR issues for math.
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "19.17 Recursive Notation | Functions & Sequences",
  description:
    "Understand the difference between explicit and recursive definitions of sequences. See how to translate between forms and compute terms efficiently, with worked examples and solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.17 Recursive Notation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A sequence can be described in two common ways:
          an explicit rule that gives the{" "}
          <InlineMath math={"a_n"} /> directly from{" "}
          <InlineMath math={"n"} />, and a recursive rule that builds{" "}
          <InlineMath math={"a_n"} /> from earlier terms.
          For example, explicit rules like{" "}
          <InlineMath math={"a_n = 3(n-1)"} /> or{" "}
          <InlineMath math={"S_n = n^2 - 1"} /> compute the{" "}
          <InlineMath math={"n"} />th value without referencing previous terms.
          By contrast, a recursive rule defines each new term using one
          or more terms that came before it and must also include starting values.
        </p>

        <MustKnow>
          • Explicit form: you can calculate any term in one shot from its index.
          • Recursive form: each term depends on earlier term(s), so initial
          value(s) are mandatory. Without base cases, the sequence is not defined.
        </MustKnow>

        <section aria-labelledby="concrete-example">
          <h3 id="concrete-example" className="sr-only">
            Concrete recursive example
          </h3>
          <p>
            Consider the sequence defined by the initial term{" "}
            <InlineMath math={"a_1 = 2"} /> and the recursion{" "}
            <InlineMath math={"a_n = 3\\,a_{n-1} \\text{ for } n \\ge 2"} />.
            The first several terms are:
          </p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <BlockMath math={"a_1 = 2"} />
            <BlockMath math={"a_2 = 3a_1 = 3\\cdot 2 = 6"} />
            <BlockMath math={"a_3 = 3a_2 = 3\\cdot 6 = 18"} />
            <BlockMath math={"a_4 = 3a_3 = 3\\cdot 18 = 54"} />
            <BlockMath math={"a_5 = 3a_4 = 3\\cdot 54 = 162"} />
          </div>
          <p className="mt-3">
            In words, each term (from the second onward) is three times the one
            right before it.
          </p>
        </section>

        <MCQExample
          number={42}
          prompt={
            <>
              Which recursive description matches the explicit sequence{" "}
              <InlineMath math={"a_n = 2n + 3 \\;\\; (n \\ge 1)"} />?
            </>
          }
          options={[
            "A1 = 3; for n ≥ 2, An = A(n−1) + 2",
            "B1 = 2; for n ≥ 2, Bn = B(n−1) + 3",
            "C1 = 5; for n ≥ 2, Cn = C(n−1) + 2",
            "D1 = 5; for n ≥ 2, Dn = D(n−1) + 3",
            "E1 = 5; for n ≥ 2, En = 2·E(n−1) + 3",
          ]}
          correct="C1 = 5; for n ≥ 2, Cn = C(n−1) + 2"
          solution={
            <>
              <p>
                First list a few terms from the explicit rule{" "}
                <InlineMath math={"a_n = 2n + 3"} />:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4">
                <BlockMath math={"a_1 = 2\\cdot 1 + 3 = 5"} />
                <BlockMath math={"a_2 = 2\\cdot 2 + 3 = 7"} />
                <BlockMath math={"a_3 = 2\\cdot 3 + 3 = 9"} />
                <BlockMath math={"a_4 = 2\\cdot 4 + 3 = 11"} />
                <BlockMath math={"a_5 = 2\\cdot 5 + 3 = 13"} />
              </div>
              <p className="mt-3">
                The pattern increases by 2 each step and starts at 5, which is
                exactly the recursion “start at 5 and keep adding 2.” So the
                correct match is{" "}
                <InlineMath math={"C_1 = 5,\\; C_n = C_{n-1} + 2\\; (n\\ge2)"} />.
              </p>
            </>
          }
        />

        <MustKnow>
          • If you have an explicit formula, you can jump straight to a far
          term. For instance,{" "}
          <InlineMath math={"a_n = 2n + 3"} /> gives{" "}
          <InlineMath math={"a_{100} = 2\\cdot100 + 3 = 203"} /> immediately.
          • With a recursive rule, to reach{" "}
          <InlineMath math={"a_{100}"} /> you must first know all earlier terms
          up to <InlineMath math={"a_{99}"} /> (which in turn requires{" "}
          <InlineMath math={"a_{98}"} />, and so on).
        </MustKnow>

        <MCQExample
          number={43}
          prompt={
            <>
              Let <InlineMath math={"a_1 = a_2 = 1"} /> and for{" "}
              <InlineMath math={"n \\ge 3"} />,{" "}
              <InlineMath math={"a_n = a_{n-1} + a_{n-2}"} />. What is{" "}
              <InlineMath math={"a_{10}"} />?
            </>
          }
          options={["21", "34", "55", "89", "144"]}
          correct="55"
          solution={
            <>
              <p>
                Build the sequence step by step using{" "}
                <InlineMath math={"a_n = a_{n-1} + a_{n-2}"} />:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4">
                <BlockMath math={"a_1 = 1,\\; a_2 = 1"} />
                <BlockMath math={"a_3 = 1 + 1 = 2"} />
                <BlockMath math={"a_4 = 2 + 1 = 3"} />
                <BlockMath math={"a_5 = 3 + 2 = 5"} />
                <BlockMath math={"a_6 = 5 + 3 = 8"} />
                <BlockMath math={"a_7 = 8 + 5 = 13"} />
                <BlockMath math={"a_8 = 13 + 8 = 21"} />
                <BlockMath math={"a_9 = 21 + 13 = 34"} />
                <BlockMath math={"a_{10} = 34 + 21 = 55"} />
              </div>
              <p className="mt-3">
                Therefore, <InlineMath math={"a_{10} = 55"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: recursive definitions hinge on starting values and local
          step rules, while explicit formulas give direct access to any index.
          Knowing when to switch between these viewpoints is a powerful skill
          for sequence questions.
        </p>
      </article>
    </main>
  );
}