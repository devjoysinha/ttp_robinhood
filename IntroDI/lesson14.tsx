import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.15 Avoid Extraneous Information in DI | GMAT Data Insights",
  description:
    "Learn why Data Insights (DI) questions often include superfluous details and how to focus on what actually matters. Includes quick must‑know takeaways and practical screening tips.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel ?? `math: ${expr}`}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction To Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.15 Be Careful of Extraneous Information in DI Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the Quant and Verbal portions of the GMAT, nearly every fact you’re
          given is there for a reason—you typically use all of it. Data
          Insights (DI) is different: those prompts frequently contain details
          that do not affect the answer.
        </p>

        <MustKnow>
          Expect DI questions to include information that doesn’t help you solve
          the problem. Your score improves when you ignore what isn’t relevant.
        </MustKnow>

        <p>
          The most valuable DI skill is filtering. Your goal is to isolate the
          few pieces of data that drive the conclusion and set aside the rest.
          For instance, if a chart lists five categories with counts{" "}
          <KInline expr="c_1, c_2, \dots, c_5" ariaLabel="c1 through c5" /> and
          a total <KInline expr="T" ariaLabel="T" />, only compute{" "}
          <KInline expr="T=\sum_{i=1}^{5} c_i" ariaLabel="T equals the sum of c i from 1 to 5" />{" "}
          if the question asks for the total—or if it’s essential for the step
          you’re on.
        </p>

        <MustKnow>
          DI success = find the signal, drop the noise. Scan the prompt for
          what directly ties to the question stem, and postpone or discard the
          rest.
        </MustKnow>

        <section aria-labelledby="practical-tips">
          <h3 id="practical-tips" className="text-xl font-semibold text-white">
            Quick screening tips
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Read the question stem first and underline what you must find.
            </li>
            <li>
              Map each data element to the target. If it doesn’t move you
              closer, skip it for now.
            </li>
            <li>
              Calculate the minimum needed. Avoid full-table totals or averages
              unless they’re explicitly required.
            </li>
          </ul>
        </section>

        <p>
          Bottom line: DI often presents more information than you need. Anchor
          on the task, gather only the essentials, and let the extra details sit
          on the sidelines.
        </p>
      </article>
    </main>
  );
}