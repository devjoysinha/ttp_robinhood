import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Helper to render KaTeX (ensure katex CSS is loaded globally in your app)
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
    strict: "ignore",
  });
  const commonProps = {
    role: "math",
    "aria-label": ariaLabel || expr,
    dangerouslySetInnerHTML: { __html: html },
  } as const;

  return display ? (
    <div {...commonProps} className="my-2" />
  ) : (
    <span {...commonProps} />
  );
}

export const metadata: Metadata = {
  title: "7.2.1 Age Problems | General Word Problems",
  description:
    "Learn a reliable 4‑step framework for translating GMAT age problems. Define present ages, shift to past/future with +/−, organize in a small table, and write equations. Includes a worked example and three multiple‑choice practice questions with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.2.1 Translating Age Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Age word problems show up frequently on the GMAT. They compare how old
          people (or objects) are at different times—now, in the past, or in the
          future. The fastest way to stay organized is to anchor each person’s
          present age with a variable and then shift forward or backward in time
          by adding or subtracting years.
        </p>

        <MustKnow>
          Define a variable for each person’s current age. To represent a future
          age, add years to that variable; to represent a past age, subtract
          years. Keeping every timeline in the same variable makes the algebra
          simple.
        </MustKnow>

        <section aria-labelledby="example-winnie-kolten">
          <h3
            id="example-winnie-kolten"
            className="text-xl font-semibold text-white"
          >
            Worked example
          </h3>
          <p>
            Winnie is 30 years older than Kolten. In 28 years, Winnie will be
            twice Kolten’s age. How old is Winnie today?
          </p>

          <p className="font-semibold text-gray-200">Step 1: Define today’s ages.</p>
          <p>
            Let <TeX expr="w" /> be Winnie’s current age and <TeX expr="k" /> be
            Kolten’s current age.
          </p>

          <p className="font-semibold text-gray-200">
            Step 2: Translate ages at a different time.
          </p>
          <p>
            In 28 years: Winnie <TeX expr="w + 28" />, Kolten <TeX expr="k + 28" />.
          </p>

          <p className="font-semibold text-gray-200">
            Step 3: Organize in a small table (optional, but helpful).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-md border border-gray-700 text-left text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-3 py-2">Person</th>
                  <th className="px-3 py-2">Age Today</th>
                  <th className="px-3 py-2">Age in 28 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Winnie</td>
                  <td className="px-3 py-2">
                    <TeX expr="w" />
                  </td>
                  <td className="px-3 py-2">
                    <TeX expr="w + 28" />
                  </td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-3 py-2">Kolten</td>
                  <td className="px-3 py-2">
                    <TeX expr="k" />
                  </td>
                  <td className="px-3 py-2">
                    <TeX expr="k + 28" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-semibold text-gray-200">
            Step 4: Write equations and solve.
          </p>
          <p>
            From “Winnie is 30 years older”: <TeX expr="w = k + 30" />.
          </p>
          <p>
            From “in 28 years, Winnie will be twice Kolten’s age”:
            <TeX expr="w + 28 = 2(k + 28)" /> which simplifies to{" "}
            <TeX expr="w = 2k + 28" />.
          </p>
          <p>
            Substitute <TeX expr="w = k + 30" /> into <TeX expr="w = 2k + 28" />:
            <TeX expr="k + 30 = 2k + 28" /> so <TeX expr="k = 2" />. Therefore,
            <TeX expr="w = 2 + 30 = 32" />. Winnie is 32 years old.
          </p>
        </section>

        <MustKnow>
          A dependable 4‑step plan for age problems:
          <ul className="list-inside list-disc space-y-1">
            <li>Define present-day ages with variables.</li>
            <li>Shift to past/future ages using +/− years.</li>
            <li>Optionally put data into a small table for clarity.</li>
            <li>Translate the statements into equations and solve.</li>
          </ul>
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Practice</h3>

        <MCQExample
          number={1}
          prompt="Harry is three times as old as Paul. In five years, the sum of their ages will be 50. How old is Harry now?"
          options={["10", "24", "30", "33", "40"]}
          correct="30"
          solution={
            <>
              <p>
                Let Paul’s age be <TeX expr="P" /> and Harry’s age be{" "}
                <TeX expr="H" />. From the first statement:{" "}
                <TeX expr="H = 3P" />. In five years,{" "}
                <TeX expr="(H + 5) + (P + 5) = 50" /> so{" "}
                <TeX expr="H + P + 10 = 50" /> and{" "}
                <TeX expr="H + P = 40" />.
              </p>
              <p>
                Substitute <TeX expr="H = 3P" /> into <TeX expr="H + P = 40" />:
                <TeX expr="3P + P = 40" />, so <TeX expr="4P = 40" />, hence{" "}
                <TeX expr="P = 10" /> and <TeX expr="H = 30" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Abba is four times as old as Mabel. Ten years ago, Abba was nine times as old as Mabel. How old is Mabel today?"
          options={["4", "16", "20", "48", "64"]}
          correct="16"
          solution={
            <>
              <p>
                Let Abba’s age be <TeX expr="A" /> and Mabel’s be{" "}
                <TeX expr="M" />. Today: <TeX expr="A = 4M" />. Ten years ago:{" "}
                <TeX expr="A - 10 = 9(M - 10)" />.
              </p>
              <p>
                Expand the second equation: <TeX expr="A - 10 = 9M - 90" /> so{" "}
                <TeX expr="A = 9M - 80" />. Combine with <TeX expr="A = 4M" />:
                <TeX expr="4M = 9M - 80" /> which gives{" "}
                <TeX expr="5M = 80" /> and <TeX expr="M = 16" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="Two years ago, Farid was five times as old as Patrick. Six years ago, Farid was nine times as old as Patrick. How old is Patrick today?"
          options={["10", "14", "20", "25", "28"]}
          correct="10"
          solution={
            <>
              <p>
                Let Farid’s age be <TeX expr="F" /> and Patrick’s be{" "}
                <TeX expr="P" />. Two years ago:{" "}
                <TeX expr="F - 2 = 5(P - 2)" /> so{" "}
                <TeX expr="F = 5P - 8" />. Six years ago:{" "}
                <TeX expr="F - 6 = 9(P - 6)" /> so{" "}
                <TeX expr="F = 9P - 48" />.
              </p>
              <p>
                Set them equal: <TeX expr="5P - 8 = 9P - 48" /> which yields{" "}
                <TeX expr="40 = 4P" /> and <TeX expr="P = 10" />.
              </p>
            </>
          }
        />

        <p>
          Takeaway: anchor today’s ages with variables, move along the timeline
          using +/−, and then convert relationships into equations. A short
          table often makes the setup even clearer.
        </p>
      </article>
    </main>
  );
}