import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.2 Word-to-Equation Translation | GMAT Word Problems",
  description:
    "Build a quick mental dictionary for translating everyday phrases into equations. See common English-to-math mappings and worked examples with KaTeX-rendered equations.",
};

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
};

function Math({ expr, display = false, ariaLabel, className }: MathProps) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  if (display) {
    return (
      <div
        className={className}
        aria-label={ariaLabel}
        role="img"
        aria-roledescription="equation"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className={className}
      aria-label={ariaLabel}
      role="img"
      aria-roledescription="equation"
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
          7.2 Translating Words into Equations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A big hurdle in word problems is turning conversational language into
          clean mathematical statements. The faster you can convert typical
          phrases into symbols, the quicker you’ll set up equations and move to
          the real solving.
        </p>

        <MustKnow>
          Build a mental “phrase → symbol” dictionary. Words such as “is,”
          “more,” “fewer,” and “times” translate directly to operations or
          relations. Use these conversions consistently to write equations
          without hesitation.
        </MustKnow>

        <section aria-labelledby="mapping-title">
          <h3 id="mapping-title" className="sr-only">
            Common English-to-math translations
          </h3>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full border-collapse">
              <caption className="sr-only">
                Common phrases and their math translations
              </caption>
              <thead className="bg-gray-800/60 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm">
                    English phrase
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm">
                    Translation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-3">“is”, “was”, “has been”</td>
                  <td className="px-4 py-3">
                    <Math expr="=" ariaLabel="equals" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">“more”, “years older”</td>
                  <td className="px-4 py-3">
                    <Math expr="+" ariaLabel="plus" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">“less”, “fewer”, “years younger”</td>
                  <td className="px-4 py-3">
                    <Math expr="-" ariaLabel="minus" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    “times”, “as many”, “factor”
                  </td>
                  <td className="px-4 py-3">
                    <Math expr="\times" ariaLabel="times" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">
            Tip: “less than” reverses order. For example, “8 less than x” is{" "}
            <Math expr="x-8" ariaLabel="x minus eight" /> (not{" "}
            <Math expr="8-x" ariaLabel="eight minus x" />).
          </p>
        </section>

        <section aria-labelledby="examples-title" className="space-y-4">
          <h3 id="examples-title" className="text-base font-semibold text-gray-100">
            Quick translations
          </h3>

          <div className="space-y-2">
            <p>
              “George is three times Frank’s age.” →{" "}
              <Math expr="G=3F" ariaLabel="G equals three F" />
            </p>
            <p>
              “Liz has 50 fewer friends than Selby.” →{" "}
              <Math expr="L=S-50" ariaLabel="L equals S minus fifty" />
            </p>
            <p>
              “Paula has been to 12 more countries than Molly.” →{" "}
              <Math expr="P=M+12" ariaLabel="P equals M plus twelve" />
            </p>
            <p>
              “Jason ate 3 fewer than 4 times the number Sara ate.” →{" "}
              <Math expr="J=4S-3" ariaLabel="J equals four S minus three" />
            </p>
          </div>
        </section>

        <MCQExample
          number={32}
          prompt="Which equation best represents the statement: “Jason ate 3 fewer than 4 times the number of candies that Sara ate”?"
          options={[
            "J = 4S − 3",
            "J = 4(S − 3)",
            "J = 3 − 4S",
            "J = 4S + 3",
            "J = S/4 − 3",
          ]}
          correct="J = 4S − 3"
          solution={
            <>
              <p>
                “4 times the number Sara ate” translates to{" "}
                <Math expr="4S" ariaLabel="four S" />. “3 fewer than that” means
                subtract 3 from the expression, giving{" "}
                <Math expr="4S-3" ariaLabel="four S minus three" />. So{" "}
                <Math expr="J=4S-3" ariaLabel="J equals four S minus three" /> is
                correct.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>J = 4(S − 3)</strong> subtracts first, then multiplies —
                  not what the sentence says.
                </li>
                <li>
                  <strong>J = 3 − 4S</strong> flips the order.
                </li>
                <li>
                  <strong>J = 4S + 3</strong> uses “more,” not “fewer.”
                </li>
                <li>
                  <strong>J = S/4 − 3</strong> uses division, not multiplication.
                </li>
              </ul>
            </>
          }
        />

        <p>
          As you practice, say the phrase, convert it to symbols immediately,
          and write the equation. With repetition, these translations become
          automatic and free up brainpower for the tougher reasoning in each
          problem.
        </p>
      </article>
    </main>
  );
}