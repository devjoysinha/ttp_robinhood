import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "7.2.3 Weight Problems | General Word Problems",
  description:
    "Translate weight word problems into equations and solve. Includes a quick multiple‑choice example with a full, equation‑based walkthrough using KaTeX.",
};

function MathBlock({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });

  return (
    <span
      role="img"
      aria-label={ariaLabel || expr}
      className={display ? "block my-2" : "inline"}
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
          7.2.3 Weight Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Weight” scenarios are classic translation exercises: you’re given
          relationships among weights of people or objects and asked to find an
          unknown. The playbook mirrors age and length problems—define
          variables, translate the wording into equations, then solve.
        </p>

        <MustKnow>
          - Start by naming variables for the unknown weights.{" "}
          <br />- Turn each sentence into an equation or inequality.{" "}
          <br />- Use substitution or elimination to isolate the target value.
        </MustKnow>

        <MCQExample
          number={5}
          prompt="Two dogs, Giva and Tito, have a combined weight of 200 pounds. Giva weighs 20 pounds more than twice Tito’s weight. How much does Giva weigh?"
          options={[
            "60 pounds",
            "100 pounds",
            "120 pounds",
            "140 pounds",
            "160 pounds",
          ]}
          correct="140 pounds"
          solution={
            <>
              <p>Let G be Giva’s weight and T be Tito’s weight.</p>
              <ul className="list-disc pl-6">
                <li>
                  Together: <MathBlock expr={"G + T = 200"} />
                </li>
                <li>
                  Relationship: <MathBlock expr={"G = 2T + 20"} />
                </li>
              </ul>
              <p>Substitute the second equation into the first:</p>
              <MathBlock display expr={"(2T + 20) + T = 200"} />
              <MathBlock display expr={"3T + 20 = 200"} />
              <MathBlock display expr={"3T = 180"} />
              <MathBlock display expr={"T = 60"} />
              <p>Now find G:</p>
              <MathBlock display expr={"G = 2(60) + 20 = 140"} />
              <p>Therefore, Giva weighs 140 pounds.</p>
            </>
          }
        />

        <p>
          Big picture: the underlying algebra doesn’t care whether you’re
          talking about pounds, years, or inches. The same translation-and-solve
          approach you used here works for a wide range of word problems, and
          we’ll carry it forward to money problems next.
        </p>
      </article>
    </main>
  );
}