import type { Metadata } from "next";
import katex from "katex";
// Important: ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: block, output: "html" });
  return (
    <span
      className={block ? "my-2 block overflow-x-auto" : "inline-block"}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "11.3 What Ratios Tell You | Ratios",
  description:
    "Every ratio encodes two ideas: part-to-part and part-to-whole. Learn how to turn a:b into shares of the total, with a quick check question and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">11.3 What Every Ratio Communicates</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A ratio packs two pieces of information. First, it compares one part to another (part‑to‑part). Second, it
          lets you determine how each part relates to the whole (part‑to‑whole) once you add the parts together.
        </p>

        <p>
          Example: suppose the ratio of cats to dogs is 4 to 3. The total “units” is 4 + 3 = 7. So cats make up{" "}
          <Math expr="4/7" ariaLabel="four sevenths" /> of all animals and dogs make up <Math expr="3/7" ariaLabel="three sevenths" />.
          In percentage terms, that’s roughly 57% cats and 43% dogs.
        </p>

        <MustKnow>
          A ratio a:b simultaneously tells you:
          <br />
          - How one category compares to another (a to b).
          <br />- How large each category is as a share of the whole: part/(a + b). For example, the fraction of the
          whole corresponding to the first category is <Math expr="a/(a+b)" ariaLabel="a over a plus b" />.
        </MustKnow>

        <MCQExample
          number={31}
          prompt="In a bin, the ratio of green balls to yellow balls is 5:3. What fraction of all balls are green?"
          options={["3/8", "5/8", "3/5", "5/3", "Cannot be determined"]}
          correct="5/8"
          solution={
            <>
              <p>
                With a 5:3 split, the total is 5 + 3 = 8 “parts.” The green share is{" "}
                <Math expr="5/8" ariaLabel="five eighths" /> of the whole.
              </p>
            </>
          }
        />

        <p>
          Key move: to convert a part‑to‑part ratio into part‑to‑whole information, sum the parts to get the total
          “units,” and then divide each part by that total.
        </p>

        <ExampleCard
          number={32}
          title="Inferring shares from a ratio (Data Sufficiency)"
          statements={[
            "In a club, the ratio of members in Group S to Group A is 7:5. What percentage of the club is in Group S?",
            "1) The club has 36 members.",
            "2) There are 21 members in Group S.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                From the ratio 7:5, the Group S share is{" "}
                <Math expr="7/(7+5)=7/12" ariaLabel="seven over twelve" /> of the club, which is about 58.33%. The ratio
                alone already fixes this percentage.
              </p>
              <p>
                Statement (1): Knowing the exact total (36) isn’t necessary to find the percentage; the share remains{" "}
                <Math expr="7/12" ariaLabel="seven twelfths" />. Sufficient.
              </p>
              <p>
                Statement (2): Knowing the exact count in S (21) also isn’t necessary for the percentage; the ratio
                already determines it as <Math expr="7/12" ariaLabel="seven twelfths" />. Sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: ratios don’t just compare categories—they also reveal each category’s slice of the total once you
          add the parts together.
        </p>
      </article>
    </main>
  );
}