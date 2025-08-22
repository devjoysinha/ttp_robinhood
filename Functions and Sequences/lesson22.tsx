import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { MathInline, MathBlock } from "@/components/ui/KaTeX";

export const metadata: Metadata = {
  title: "19.20.2 Equally Spaced Number Lines with Exponents | Functions & Sequences",
  description:
    "How to solve equally spaced tick‑mark questions when labels are powers. Learn to pull out a common factor to keep numbers small, then compute unknown points quickly. Includes two multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.20.2 Equally Spaced Number Lines with Exponents
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some tick‑mark problems place exponential labels on an equally spaced
          number line. Although the notation can look intimidating, the approach
          does not change: consecutive tick marks are separated by the same
          constant difference. If you express that difference symbolically, you
          can locate any unlabeled point without evaluating large powers.
        </p>

        <MustKnow>
          For equally spaced tick marks, there is a single step size k between
          neighboring positions. When labels are powers, factor the difference
          instead of computing big numbers:
          <span className="block pt-2">
            <MathBlock>{String.raw`a^m - a^n = a^n\!\left(a^{\,m-n}-1\right)`}</MathBlock>
          </span>
          This keeps arithmetic small and lets you write any unknown as a known
          label plus or minus multiples of k.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="sr-only">
            Mini‑example
          </h3>
          <p>
            Mini‑example. Suppose two adjacent labeled ticks are{" "}
            <MathInline>{String.raw`2^5`}</MathInline> and{" "}
            <MathInline>{String.raw`2^8`}</MathInline>, and y is three ticks to
            the right of <MathInline>{String.raw`2^8`}</MathInline>. Let k be
            the common step size.
          </p>
          <p>
            First find k from consecutive labeled values:
          </p>
          <MathBlock>{String.raw`
k \;=\; 2^8 - 2^5 \;=\; 2^5\!\left(2^{\,3}-1\right) \;=\; 2^5\cdot 7
          `}</MathBlock>
          <p>Now express y as an offset from 2^8 by three steps:</p>
          <MathBlock>{String.raw`
y \;=\; 2^8 + 3k \;=\; 2^8 + 3\bigl(2^5\cdot 7\bigr)
          `}</MathBlock>
          <MathBlock>{String.raw`
y \;=\; 2^5\!\bigl(2^3 + 21\bigr) \;=\; 2^5\cdot 29 \;=\; 928
          `}</MathBlock>
          <p>
            You could also evaluate first,{" "}
            <MathInline>{String.raw`2^8-2^5=256-32=224`}</MathInline>, then use{" "}
            <MathInline>{String.raw`y=2^8+3k=256+3(224)=928`}</MathInline>, but
            factoring avoids working with large intermediates when exponents get
            big.
          </p>
        </section>

        <MCQExample
          number={51}
          prompt={
            <>
              On an equally spaced number line, two consecutive labeled ticks
              are <MathInline>{String.raw`9^{12}`}</MathInline> and{" "}
              <MathInline>{String.raw`9^{13}`}</MathInline>. Point p is four
              ticks to the right of <MathInline>{String.raw`9^{13}`}</MathInline
              >. What is p?
            </>
          }
          options={[
            <>
              32 × <MathInline>{String.raw`9^{12}`}</MathInline>
            </>,
            <>
              36 × <MathInline>{String.raw`9^{12}`}</MathInline>
            </>,
            <>
              41 × <MathInline>{String.raw`9^{12}`}</MathInline>
            </>,
            <>
              44 × <MathInline>{String.raw`9^{12}`}</MathInline>
            </>,
            <>
              45 × <MathInline>{String.raw`9^{12}`}</MathInline>
            </>,
          ]}
          correct="41 × 9^{12}"
          solution={
            <>
              <p>
                Let k be the common step. Since{" "}
                <MathInline>{String.raw`9^{12}`}</MathInline> and{" "}
                <MathInline>{String.raw`9^{13}`}</MathInline> are consecutive
                labels,
              </p>
              <MathBlock>{String.raw`
k \;=\; 9^{13}-9^{12} \;=\; 9^{12}\!\bigl(9-1\bigr) \;=\; 8\cdot 9^{12}.
              `}</MathBlock>
              <p>
                Moving four steps right from{" "}
                <MathInline>{String.raw`9^{13}`}</MathInline>:
              </p>
              <MathBlock>{String.raw`
p \;=\; 9^{13} + 4k \;=\; 9^{12}\!\bigl(9\bigr) + 4\!\left(8\cdot 9^{12}\right)
\;=\; 9^{12}\!\bigl(9 + 32\bigr) \;=\; 41\cdot 9^{12}.
              `}</MathBlock>
              <p>Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={52}
          prompt={
            <>
              On an equally spaced number line,{" "}
              <MathInline>{String.raw`3^{8}`}</MathInline> and{" "}
              <MathInline>{String.raw`3^{10}`}</MathInline> are consecutive
              labeled ticks. Point z is two ticks to the left of{" "}
              <MathInline>{String.raw`3^{8}`}</MathInline>. What is z?
            </>
          }
          options={[
            <>
              −17 × <MathInline>{String.raw`3^{8}`}</MathInline>
            </>,
            <>
              −16 × <MathInline>{String.raw`3^{8}`}</MathInline>
            </>,
            <>
              −15 × <MathInline>{String.raw`3^{8}`}</MathInline>
            </>,
            <MathInline>{String.raw`3^{4}`}</MathInline>,
            <>
              17 × <MathInline>{String.raw`3^{4}`}</MathInline>
            </>,
          ]}
          correct="-15 × 3^{8}"
          solution={
            <>
              <p>
                Let k be the common step. From consecutive labels we get:
              </p>
              <MathBlock>{String.raw`
k \;=\; 3^{10}-3^{8} \;=\; 3^{8}\!\left(3^{2}-1\right) \;=\; 3^{8}\cdot 8.
              `}</MathBlock>
              <p>
                Two ticks to the left of <MathInline>{String.raw`3^{8}`}</MathInline>:
              </p>
              <MathBlock>{String.raw`
z \;=\; 3^{8} - 2k \;=\; 3^{8} - 2\!\left(8\cdot 3^{8}\right)
\;=\; \bigl(1-16\bigr)\,3^{8} \;=\; -15\cdot 3^{8}.
              `}</MathBlock>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: model the line as an arithmetic progression with step k.
          When labels are powers, pull out the smaller power to factor the
          difference. You’ll avoid massive computations and get to the answer
          faster and more reliably.
        </p>
      </article>
    </main>
  );
}