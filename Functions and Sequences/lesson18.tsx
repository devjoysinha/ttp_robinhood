import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.18 Arithmetic Sequences | Functions and Sequences",
  description:
    "Learn what defines an arithmetic sequence, how the common difference works, and how to use a_n = a_1 + (n−1)d. Includes two practice problems with complete, clear solutions.",
};

function MathInline({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? tex}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ tex, ariaLabel }: { tex: string; ariaLabel?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      role="math"
      aria-label={ariaLabel ?? tex}
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
          19.18 Arithmetic Sequences
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An arithmetic sequence (also called an arithmetic progression) is a
          list of numbers in which the gap between any two neighboring terms is
          constant. That constant gap is the common difference.
        </p>

        <p>
          For instance, 1, 4, 7, 10, 13, … forms an arithmetic sequence with a
          common difference of 3. Every step forward adds the same amount.
        </p>

        <p>
          The nth term of an arithmetic sequence is given by{" "}
          <MathInline tex={"a_n = a_1 + (n - 1)d"} ariaLabel="a sub n equals a sub 1 plus n minus 1 times d" />
          , where <MathInline tex={"a_1"} ariaLabel="a sub 1" /> is the first
          term and <MathInline tex={"d"} ariaLabel="d" /> is the common
          difference.
        </p>

        <MustKnow>
          An arithmetic sequence advances by a fixed step, the common difference{" "}
          <MathInline tex={"d"} />. The general term is{" "}
          <MathInline tex={"a_n = a_1 + (n - 1)d"} />, which lets you jump to
          any position in the sequence without listing all prior terms.
        </MustKnow>

        <p>Let’s practice with a couple of quick examples.</p>

        <MCQExample
          number={44}
          prompt="The common difference of an arithmetic sequence is 5. If the first term is 7, what is a₄ − a₃?"
          options={["1", "2", "3", "4", "5"]}
          correct="5"
          solution={
            <>
              <p>
                Use the nth‑term formula{" "}
                <MathInline tex={"a_n = a_1 + (n-1)d"} />.
              </p>
              <p>
                <strong>Compute directly:</strong>
              </p>
              <MathBlock tex={"a_3 = 7 + (3-1)\\cdot 5 = 17"} />
              <MathBlock tex={"a_4 = 7 + (4-1)\\cdot 5 = 22"} />
              <p>
                Therefore, <MathInline tex={"a_4 - a_3 = 22 - 17 = 5"} />.
              </p>
              <p className="mt-4">
                <strong>Quicker observation:</strong> The difference between
                consecutive terms in an arithmetic sequence is always{" "}
                <MathInline tex={"d"} />. Here,{" "}
                <MathInline tex={"a_4 - a_3 = d = 5"} />.
              </p>
            </>
          }
        />

        <p>
          Important sign convention: the common difference is the next term
          minus the current term, i.e.,{" "}
          <MathInline
            tex={"d = a_{k+1} - a_k"}
            ariaLabel="d equals a sub k plus 1 minus a sub k"
          />
          . Reversing the subtraction would flip the sign.
        </p>

        <MCQExample
          number={45}
          prompt="In an arithmetic sequence, a₅ = 26 and a₆ = 22. What is the first term a₁?"
          options={["10", "14", "30", "38", "42"]}
          correct="42"
          solution={
            <>
              <p>
                First find the common difference using consecutive terms:{" "}
                <MathInline tex={"d = a_6 - a_5 = 22 - 26 = -4"} />.
              </p>
              <p>
                Now apply <MathInline tex={"a_n = a_1 + (n-1)d"} /> with{" "}
                <MathInline tex={"n = 5"} />:
              </p>
              <MathBlock tex={"a_5 = a_1 + 4d"} />
              <MathBlock tex={"26 = a_1 + 4(-4) = a_1 - 16"} />
              <MathBlock tex={"a_1 = 26 + 16 = 42"} />
              <p className="mt-4">
                Note: If you accidentally compute{" "}
                <MathInline tex={"a_5 - a_6"} /> instead of{" "}
                <MathInline tex={"a_6 - a_5"} />, you’d get{" "}
                <MathInline tex={"+4"} /> for <MathInline tex={"d"} />, which is
                incorrect here.
              </p>
            </>
          }
        />

        <p>
          Bottom line: identify the common difference as “next minus current,”
          and use <MathInline tex={"a_n = a_1 + (n-1)d"} /> to move directly to
          any position in the sequence.
        </p>
      </article>
    </main>
  );
}