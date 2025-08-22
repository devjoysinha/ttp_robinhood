import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.2.1 Equivalent Ratios | Ratios",
  description:
    "Understand how to simplify and scale ratios, determine when two ratios are equivalent, and practice with two quick multiple‑choice problems.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.2.1 Equivalent Ratios
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Ratios follow many of the same rules as fractions. In particular, you
          can reduce them and also generate other, equivalent forms that express
          the same relationship.
        </p>

        <MustKnow>
          Ratios simplify the same way fractions do: divide both parts by the
          same nonzero number (typically a greatest common divisor) to produce
          an equivalent, reduced ratio.
        </MustKnow>

        <p>
          For instance, suppose a fruit stand has 5 apples and 10 oranges. The
          ratio of apples to oranges is 5 to 10, which we can simplify by
          dividing both parts by 5:
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"5:10\\;\\Rightarrow\\;5\\div5:10\\div5\\;=\\;1:2"} />
        </div>

        <p>
          This 1 to 2 relationship means that for every single apple there are
          exactly two oranges. No matter how many apples and oranges you have,
          maintaining this proportion preserves the ratio.
        </p>

        <MustKnow>
          Multiplying or dividing both parts of a ratio by the same nonzero
          constant creates an equivalent ratio. This scaling lets you connect a
          pure ratio to real‑world quantities.
        </MustKnow>

        <p>
          Suppose the heights of two buildings are in the ratio 3 to 2. If the
          taller one is 3,000 feet, the shorter one must be 2,000 feet:
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath
            math={
              String.raw`\frac{\text{Taller}}{\text{Shorter}}=\frac{3}{2}
              =\frac{3\times1000}{2\times1000}
              =\frac{3000}{2000}`
            }
          />
        </div>

        <p>Quick check: Are the ratios 6 : 15 and 2 : 5 equivalent?</p>
        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"6:15\\;\\Rightarrow\\;6\\div3:15\\div3\\;=\\;2:5"} />
        </div>
        <p>Yes — dividing both parts by 3 shows they match.</p>

        <MCQExample
          number={1}
          prompt="In an orchestra there are 20 violinists and 25 cellists. Which of the following is the ratio of violinists to cellists?"
          options={["4 : 5", "5 : 4", "3 : 5", "5 : 3", "1 : 5"]}
          correct="4 : 5"
          solution={
            <>
              <p>
                The requested order is violinists to cellists: 20 : 25. Reduce
                by dividing both parts by 5:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4">
                <BlockMath
                  math={"20:25\\;\\Rightarrow\\;20\\div5:25\\div5\\;=\\;4:5"}
                />
              </div>
              <p>Therefore, the ratio is 4 : 5.</p>
            </>
          }
        />

        <section aria-labelledby="tree-data-heading" className="space-y-3">
          <h3
            id="tree-data-heading"
            className="mt-8 text-lg font-semibold text-white"
          >
            Data for Trees A–E
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <caption className="sr-only">
                Ages and coconuts produced for five trees A–E
              </caption>
              <thead className="bg-gray-800/50 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm">
                    Tree
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm">
                    Age (years)
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm">
                    Coconuts (last year)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium">
                    A
                  </th>
                  <td className="px-4 py-3">8</td>
                  <td className="px-4 py-3">18</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium">
                    B
                  </th>
                  <td className="px-4 py-3">12</td>
                  <td className="px-4 py-3">45</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium">
                    C
                  </th>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">60</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium">
                    D
                  </th>
                  <td className="px-4 py-3">24</td>
                  <td className="px-4 py-3">55</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium">
                    E
                  </th>
                  <td className="px-4 py-3">35</td>
                  <td className="px-4 py-3">48</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <MCQExample
          number={2}
          prompt="For tree C, what is the ratio of coconuts produced last year to its age (in years)?"
          options={["1 : 4", "1 : 3", "3 : 1", "4 : 1", "1 : 1"]}
          correct="4 : 1"
          solution={
            <>
              <p>
                From the table, tree C produced 60 coconuts and is 15 years
                old, so the ratio (coconuts to age) is 60 : 15. Reduce by 15:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4">
                <BlockMath
                  math={
                    String.raw`60:15
                    \;=\;
                    \frac{60}{15}
                    \;=\;
                    \frac{60\div15}{15\div15}
                    \;=\;
                    \frac{4}{1}
                    \;=\;
                    4:1`
                  }
                />
              </div>
              <p>Therefore, the ratio is 4 : 1.</p>
            </>
          }
        />

        <MustKnow>
          Two ratios are equivalent if you can multiply or divide both parts of
          one ratio by the same nonzero number to get the other.
        </MustKnow>

        <p className="pt-2">
          Bottom line: simplify ratios by dividing both parts by a common factor
          and scale them up or down by the same multiplier to create equivalent
          forms.
        </p>
      </article>
    </main>
  );
}