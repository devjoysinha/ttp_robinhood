import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Small SSR KaTeX helpers.
// Make sure the KaTeX stylesheet is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    displayMode: false,
    trust: false,
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    displayMode: true,
    trust: false,
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.3.4 Splitting the Cost | General Word Problems",
  description:
    "Master split-the-bill problems by treating the per‑person amount as a rate. Learn the core setup and solve a quick multiple‑choice example with a clear, step‑by‑step KaTeX solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3.4 Splitting the Cost
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Split the bill” questions revolve around sharing a fixed total among a group. If fewer people end up paying, each person’s share rises. The clean way to handle these is to view the per‑person charge as a rate: total cost divided by the number of payers.
        </p>

        <MustKnow>
          Let the total cost be T and the number of payers be n. Then the per‑person amount is{" "}
          <MathInline expr="T/n" ariaLabel="T divided by n" />. If the headcount changes from n to m and each person’s amount increases by Δ, then
          <MathBlock
            expr="\\frac{T}{m} - \\frac{T}{n} = \\Delta"
            ariaLabel="T over m minus T over n equals delta"
          />
          Set up this equation directly from the story and solve for the unknown.
        </MustKnow>

        <p>
          Quick warm‑up: suppose 10 diners plan to split a bill of{" "}
          <MathInline expr="d" ariaLabel="d dollars" /> dollars. Each would pay{" "}
          <MathInline expr="d/10" ariaLabel="d over 10" />. If only 8 show up, each pays{" "}
          <MathInline expr="d/8" ariaLabel="d over 8" />, which is{" "}
          <MathInline expr="d/8 - d/10 = d/40" ariaLabel="d over 8 minus d over 10 equals d over 40" /> more than before.
        </p>

        <MCQExample
          number={19}
          prompt="Four coworkers planned to share a car rental equally. At the last moment, two cancel, and the per‑person cost becomes $40 higher. What was each person’s share under the original plan?"
          options={["$20", "$40", "$60", "$80", "$120"]}
          correct="$40"
          solution={
            <>
              <p>
                Let the total rental cost be <MathInline expr="x" ariaLabel="x" /> dollars.
                With all four paying, each would owe{" "}
                <MathInline expr="x/4" ariaLabel="x over 4" />. After two cancel, two people split the cost, so each pays{" "}
                <MathInline expr="x/2" ariaLabel="x over 2" />.
              </p>
              <p>
                The problem states the per‑person amount increases by $40:
              </p>
              <MathBlock
                expr="\\frac{x}{2} = \\frac{x}{4} + 40"
                ariaLabel="x over 2 equals x over 4 plus 40"
              />
              <p>Multiply both sides by 4:</p>
              <MathBlock expr="2x = x + 160" ariaLabel="2x equals x plus 160" />
              <p>So <MathInline expr="x = 160" ariaLabel="x equals 160" />. The original per‑person share was</p>
              <MathBlock
                expr="\\frac{160}{4} = 40"
                ariaLabel="160 over 4 equals 40"
              />
              <p>Answer: $40.</p>
            </>
          }
        />

        <p>
          Takeaway: translate the story into a difference of per‑person rates. Once you write{" "}
          <MathInline
            expr="\\frac{T}{m} - \\frac{T}{n} = \\Delta"
            ariaLabel="T over m minus T over n equals delta"
          />
          the algebra is straightforward.
        </p>
      </article>
    </main>
  );
}