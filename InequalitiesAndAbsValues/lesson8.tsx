import type { Metadata } from "next";
import katex from "katex";
import "server-only";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

/*
  Note: Ensure KaTeX styles are loaded once globally (e.g., in app/layout.tsx):
    import "katex/dist/katex.min.css";
*/

function KInline({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    output: "html",
    trust: true,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} aria-hidden="true" />;
}

function KBlock({ tex, sr }: { tex: string; sr?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    output: "html",
    trust: true,
    displayMode: true,
  });
  return (
    <div className="my-3">
      {sr ? <span className="sr-only">{sr}</span> : null}
      <div dangerouslySetInnerHTML={{ __html: html }} aria-hidden="true" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "6.9 Simplifying Inequalities with x^2 | Inequalities and Absolute Values",
  description:
    "Learn how to solve inequalities that involve squared variables. Convert expressions like x^2 > b into absolute value or interval form and interpret the result on the number line. Includes quick multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.9 Simplifying Inequalities with x²
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the previous section, we solved equations with squared variables. Here, we use the same
          core idea for inequalities: the identity{" "}
          <KInline tex="\,\sqrt{x^{2}} = |x|\, " /> lets us translate statements about{" "}
          <KInline tex="x^{2}" /> into statements about <KInline tex="|x|" />.
        </p>

        <section aria-labelledby="eq-refresh">
          <h3 id="eq-refresh" className="text-xl font-semibold text-white">
            Quick refresher
          </h3>
          <p>Example: solve x when x² = 64.</p>
          <KBlock tex="x^{2} = 64 \;\;\Longrightarrow\;\; \sqrt{x^{2}} = \sqrt{64} \;\;\Longrightarrow\;\; |x| = 8" />
          <p>
            If <KInline tex="|x| = 8" /> then <KInline tex="x = 8" /> or <KInline tex="x = -8" />.
          </p>
        </section>

        <section aria-labelledby="gt-section">
          <h3 id="gt-section" className="text-xl font-semibold text-white">
            “Greater than” and “greater than or equal to”
          </h3>

          <p>Consider x² &gt; 64:</p>
          <KBlock tex="x^{2} > 64 \;\;\Longrightarrow\;\; \sqrt{x^{2}} > \sqrt{64} \;\;\Longrightarrow\;\; |x| > 8" />
          <p>
            Saying <KInline tex="|x| > 8" /> means x lies more than 8 units from zero, so{" "}
            <KInline tex="x > 8" /> or <KInline tex="x < -8" />.
          </p>

          <MustKnow>
            If b is positive:
            <div className="mt-2">
              <KBlock
                tex="\text{If } x^{2} > b,\; \text{then } x > \sqrt{b} \text{ or } x < -\sqrt{b}."
                sr="If x squared is greater than b, then x is greater than square root of b or less than negative square root of b."
              />
              <KBlock
                tex="\text{If } x^{2} \ge b,\; \text{then } x \ge \sqrt{b} \text{ or } x \le -\sqrt{b}."
                sr="If x squared is greater than or equal to b, then x is at least square root of b or at most negative square root of b."
              />
            </div>
          </MustKnow>

          <MCQExample
            number={22}
            prompt={
              <>
                If <KInline tex="x^{2} + 10 > 110" />, which of the following could be the value of x?
                <ul className="mt-2 list-inside list-disc">
                  <li>I. 8</li>
                  <li>II. −10</li>
                  <li>III. −12</li>
                </ul>
              </>
            }
            options={[
              "II only",
              "III only",
              "II and III only",
              "I and III only",
              "I, II, and III",
            ]}
            correct="III only"
            solution={
              <>
                <p>
                  Start by isolating the square: <KInline tex="x^{2} + 10 > 110 \;\Rightarrow\; x^{2} > 100" />.
                  Thus <KInline tex="|x| > 10" />, so <KInline tex="x > 10" /> or{" "}
                  <KInline tex="x < -10" />.
                </p>
                <p>
                  Check choices: 8 is not &gt; 10 and −10 is not &lt; −10. Only −12 works since{" "}
                  <KInline tex="-12 < -10" />. Therefore, III only.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="lt-section">
          <h3 id="lt-section" className="text-xl font-semibold text-white">
            “Less than” and “less than or equal to”
          </h3>

          <p>Now consider x² &lt; 64:</p>
          <KBlock tex="x^{2} < 64 \;\;\Longrightarrow\;\; \sqrt{x^{2}} < \sqrt{64} \;\;\Longrightarrow\;\; |x| < 8" />
          <p>
            Saying <KInline tex="|x| < 8" /> means x is within 8 units of zero, i.e.,{" "}
            <KInline tex="-8 < x < 8" />. This is a bounded interval rather than two unbounded rays.
          </p>

          <MustKnow>
            If b is positive:
            <div className="mt-2">
              <KBlock
                tex="\text{If } x^{2} < b,\; \text{then } -\sqrt{b} < x < \sqrt{b}."
                sr="If x squared is less than b, then x is between negative square root of b and square root of b."
              />
              <KBlock
                tex="\text{If } x^{2} \le b,\; \text{then } -\sqrt{b} \le x \le \sqrt{b}."
                sr="If x squared is less than or equal to b, then x is between negative square root of b and square root of b, inclusive."
              />
            </div>
          </MustKnow>

          <MCQExample
            number={23}
            prompt={
              <>
                A number line shows all x between −6 and 6, inclusive. Which inequality has this
                solution set?
                <p className="sr-only">
                  The solution set is the closed interval from −6 to 6.
                </p>
              </>
            }
            options={[
              <>
                <KInline tex="x^{2} \ge 36" />
              </>,
              <>
                <KInline tex="x^{2} \le 36" />
              </>,
              <>
                <KInline tex="|x| \le 36" />
              </>,
              <>
                <KInline tex="\sqrt{x} \le 36" />
              </>,
              <>
                <KInline tex="\sqrt{x} \ge 36" />
              </>,
            ]}
            correct={katex.renderToString("x^{2} \\le 36")}
            solution={
              <>
                <p>
                  The shaded interval is <KInline tex="-6 \le x \le 6" />. Rewriting in squared form
                  produces <KInline tex="x^{2} \le 36" />, which matches option B.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Key takeaway
          </h3>
          <p>
            Translate inequalities in <KInline tex="x^{2}" /> into absolute value or interval form
            using <KInline tex="\sqrt{x^{2}} = |x|" />:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              If <KInline tex="x^{2} > b" /> (b &gt; 0), then <KInline tex="x > \sqrt{b}" /> or{" "}
              <KInline tex="x < -\sqrt{b}" />.
            </li>
            <li>
              If <KInline tex="x^{2} \ge b" /> (b &gt; 0), then <KInline tex="x \ge \sqrt{b}" /> or{" "}
              <KInline tex="x \le -\sqrt{b}" />.
            </li>
            <li>
              If <KInline tex="x^{2} < b" /> (b &gt; 0), then{" "}
              <KInline tex="-\sqrt{b} < x < \sqrt{b}" />.
            </li>
            <li>
              If <KInline tex="x^{2} \le b" /> (b &gt; 0), then{" "}
              <KInline tex="-\sqrt{b} \le x \le \sqrt{b}" />.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}