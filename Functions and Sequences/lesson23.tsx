import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.21 Geometric Sequences | Functions and Sequences",
  description:
    "Understand geometric sequences: common ratio, closed-form formula an = a1·r^(n−1), and a worked multiple‑choice example with full reasoning.",
};

// Simple KaTeX renderer (SSR-safe)
function TeX({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });
  if (display) {
    return (
      <div
        aria-label={ariaLabel ?? "Mathematical expression"}
        className="overflow-x-auto py-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel ?? "Mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.21 Geometric Sequences
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In an arithmetic sequence, consecutive terms differ by a constant
          amount. In contrast, a geometric sequence (also called a geometric
          progression) is defined by a constant multiplicative factor between
          adjacent terms. That constant factor is the common ratio.
        </p>

        <p>
          Example: the sequence 2, 10, 50, 250, 1250, … is geometric because
          each term is obtained by multiplying the previous term by the same
          number. The common ratio is
          {" "}
          <TeX expr="1250/250 = 250/50 = 50/10 = 10/2 = 5" />
          .
        </p>

        <p>
          A closed-form for the nth term of a geometric sequence is:
        </p>
        <TeX
          display
          expr="a_n = a_1 \cdot r^{\,n-1}"
          ariaLabel="a sub n equals a one times r to the n minus 1"
        />
        <p>
          where
          {" "}
          <TeX expr="a_n" ariaLabel="a sub n" />
          {" "}
          is the nth term,
          {" "}
          <TeX expr="a_1" ariaLabel="a sub 1" />
          {" "}
          is the first term,
          {" "}
          and
          {" "}
          <TeX expr="r" ariaLabel="r" />
          {" "}
          is the common ratio.
        </p>

        <MustKnow>
          A sequence is geometric if every term is obtained by multiplying the
          previous term by the same constant ratio r. The nth term is
          {" "}
          <TeX expr="a_n = a_1 \cdot r^{\,n-1}" ariaLabel="a sub n equals a one times r to the n minus one" />
          .
        </MustKnow>

        <MCQExample
          number={53}
          difficulty="medium"
          prompt="The sequence 1.5, 6, a, b, … is geometric. What is the value of a + b?"
          options={["24", "25.5", "60", "96", "120"]}
          correct="120"
          solution={
            <>
              <p>
                First find the common ratio by dividing a term by the one
                before it:
                {" "}
                <TeX expr="r = \dfrac{6}{1.5} = 4" ariaLabel="r equals six over one point five equals four" />
                .
              </p>
              <p>
                Multiply forward to fill in the missing terms:
                {" "}
                <TeX expr="a = 6 \cdot 4 = 24" ariaLabel="a equals 6 times 4 equals 24" />
                {" "}
                and
                {" "}
                <TeX expr="b = a \cdot 4 = 24 \cdot 4 = 96" ariaLabel="b equals a times 4 equals 24 times 4 equals 96" />
                .
              </p>
              <p>
                Therefore,
                {" "}
                <TeX expr="a + b = 24 + 96 = 120" ariaLabel="a plus b equals 24 plus 96 equals 120" />
                .
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}