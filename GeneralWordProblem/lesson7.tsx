import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2.2 Length Problems | General Word Problems",
  description:
    "Translate word statements about cutting ropes/boards into equations. Learn a dependable setup and solve a multiple‑choice example with a full solution, rendered with KaTeX.",
};

function Math({
  expression,
  inline = false,
  ariaLabel,
  className = "",
}: {
  expression: string;
  inline?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: !inline,
    strict: "warn",
    output: "html",
  });

  const Tag: any = inline ? "span" : "div";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel}
      className={inline ? className : `my-3 overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2.2 Length Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Length questions often describe a rope or board cut into pieces and ask
          for one or more segment lengths. The reliable approach is to translate
          the story into equations: introduce variables for the unknown piece(s),
          use a sum‑to‑total relationship, and apply any extra relationships given
          in the prompt.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Name your variables clearly (for instance, s for the shorter piece
              and L for the longer piece).
            </li>
            <li>
              The parts add up to the whole: if a 30‑inch rope is cut into two
              pieces of lengths s and L, then s + L = 30.
            </li>
            <li>
              Turn comparative statements into equations. For example, “the longer
              piece is six less than twice the shorter” becomes L = 2s − 6.
            </li>
            <li>
              Solve the system to find the requested length(s). This setup mirrors
              the structure of many age‑problem translations.
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={4}
          prompt="A rope measuring 30 inches is cut into two segments. The longer segment is six inches less than twice the length of the shorter segment. What is the length of the longer segment?"
          options={[
            "6 inches",
            "12 inches",
            "18 inches",
            "24 inches",
            "28 inches",
          ]}
          correct="18 inches"
          solution={
            <>
              <p>
                Let s be the shorter length and L be the longer length. From the
                problem:
              </p>
              <Math
                expression={String.raw`
                  \begin{aligned}
                    s + L &= 30 \\
                    L &= 2s - 6
                  \end{aligned}
                `}
                ariaLabel="System of equations: s plus L equals 30; L equals 2s minus 6."
              />
              <p>Substitute L from the second equation into the first:</p>
              <Math
                expression={String.raw`
                  \begin{aligned}
                    s + (2s - 6) &= 30 \\
                    3s - 6 &= 30 \\
                    3s &= 36 \\
                    s &= 12
                  \end{aligned}
                `}
                ariaLabel="Solve for s: s plus two s minus six equals thirty, leading to s equals twelve."
              />
              <p>Now compute the longer segment:</p>
              <Math
                expression={String.raw`L = 2s - 6 = 2(12) - 6 = 18`}
                ariaLabel="Compute L: two times twelve minus six equals eighteen."
              />
              <p>Therefore, the longer piece is 18 inches.</p>
            </>
          }
        />

        <p>
          In short, treat these as translation problems: define variables, write
          the sum‑to‑total equation, encode any comparisons, and solve. The same
          blueprint you use for age problems works seamlessly for length problems.
        </p>
      </article>
    </main>
  );
}