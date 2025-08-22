import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "7.2.6 Translating Words to Equations in Data Sufficiency | GMAT Quant",
  description:
    "Learn a disciplined approach to turning short verbal prompts into equations for Data Sufficiency questions. Includes two fully worked DS examples with KaTeX-rendered algebra.",
};

function MathInline({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span className="inline-flex items-center">
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
    </span>
  );
}

function MathBlock({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    strict: "ignore",
    displayMode: true,
  });
  return (
    <div className="my-3">
      <span className="sr-only">{children}</span>
      <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
          7.2.6 Translating Words to Equations in Data Sufficiency
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          By now you’ve practiced turning language into math for several common
          word‑problem types. On test day, expect at least one Data Sufficiency
          item that hinges on building the right equations from a short prompt.
          The key is to define variables cleanly, capture totals and
          relationships, and then check whether the information pins down a
          unique value.
        </p>

        <MustKnow>
          • Name your variables up front and write the fundamental relationship
          (often a simple total or conservation equation). • Translate each
          statement into math and combine with the base relationship. • In Data
          Sufficiency, you don’t need the exact numeric value unless it’s
          determined uniquely—focus on whether the info forces a single outcome.
        </MustKnow>

        <section aria-labelledby="example-11">
          <ExampleCard
            number={11}
            title="Hair colors at a school"
            statements={[
              "At a school with 400 students, every student has exactly one of these hair colors: brown, red, or blond. How many students have red hair?",
              "1) The number of red‑haired students exceeds the combined number of brown‑ and blond‑haired students by 150.",
              "2) There are 100 students with brown hair.",
            ]}
            correctLetter="A"
            solution={
              <>
                <p className="mb-2">
                  Let b, d, and r be the counts of brown, blond, and red hair,
                  respectively. Because these are the only options:
                </p>
                <MathBlock>{`b + d + r = 400`}</MathBlock>

                <p className="mb-2">
                  Statement (1): “Red is 150 more than the sum of brown and
                  blond” translates to:
                </p>
                <MathInline>{`r = 150 + (b + d)`}</MathInline>
                <p className="mt-2">
                  Substitute <MathInline>{`b + d = r - 150`}</MathInline> into
                  the total:
                </p>
                <MathBlock>{`(r - 150) + r = 400 \\Rightarrow 2r = 550 \\Rightarrow r = 275`}</MathBlock>
                <p className="mb-4">Unique value found ⇒ sufficient.</p>

                <p className="mb-2">
                  Statement (2): If <MathInline>{`b = 100`}</MathInline>, then
                  from the total:
                </p>
                <MathBlock>{`100 + d + r = 400 \\Rightarrow d + r = 300`}</MathBlock>
                <p>
                  Many pairs <MathInline>{`(d, r)`}</MathInline> work, so r is
                  not fixed ⇒ insufficient.
                </p>

                <p className="mt-4">
                  Only statement (1) is sufficient. Answer: A.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-12">
          <ExampleCard
            number={12}
            title="Scores from 2‑point and 3‑point baskets"
            statements={[
              "In a game, only 2‑point and 3‑point baskets were made. There were 8 more 2‑point baskets than 3‑point baskets. How many 3‑point baskets were made?",
              "1) The total number of baskets (2‑point plus 3‑point) was 44.",
              "2) Two‑point baskets accounted for 13/22 of all baskets.",
            ]}
            correctLetter="D"
            solution={
              <>
                <p className="mb-2">
                  Let <MathInline>{`a`}</MathInline> be the number of 2‑point
                  baskets and <MathInline>{`b`}</MathInline> the number of
                  3‑point baskets. The prompt gives:
                </p>
                <MathBlock>{`a = b + 8`}</MathBlock>

                <p className="mb-2">
                  Statement (1): If the total number of baskets is 44, then:
                </p>
                <MathBlock>{`a + b = 44`}</MathBlock>
                <p>Substitute <MathInline>{`a = b + 8`}</MathInline>:</p>
                <MathBlock>{`(b + 8) + b = 44 \\Rightarrow 2b = 36 \\Rightarrow b = 18`}</MathBlock>
                <p className="mb-4">Unique value ⇒ sufficient.</p>

                <p className="mb-2">
                  Statement (2): Two‑point baskets are{" "}
                  <MathInline>{`\\tfrac{13}{22}`}</MathInline> of all baskets,
                  so:
                </p>
                <MathBlock>{`a = \\tfrac{13}{22}(a + b)`}</MathBlock>
                <p>Use <MathInline>{`a = b + 8`}</MathInline>:</p>
                <MathBlock>{`b + 8 = \\tfrac{13}{22}((b + 8) + b)`}</MathBlock>
                <MathBlock>{`22(b + 8) = 13(2b + 8) \\Rightarrow 22b + 176 = 26b + 104 \\Rightarrow 4b = 72 \\Rightarrow b = 18`}</MathBlock>
                <p>Unique value ⇒ sufficient.</p>

                <p className="mt-4">Each statement alone is sufficient. Answer: D.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in DS translation problems, build a clean equation from
          the setup first, then layer each statement onto that structure. Your
          goal is to decide whether the information forces one and only one
          result.
        </p>
      </article>
    </main>
  );
}