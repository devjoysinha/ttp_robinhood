import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "4.7.1 Factor Charts: Find All Factors of a Number | Properties of Numbers",
  description:
    "Learn a fast, systematic way to list every factor of an integer using a factor chart. Includes worked examples (10 and 56), the 'crossing' stop rule, and a quick concept check.",
};

type FactorRow = {
  a: number;
  b: number;
  product: number;
  crossed?: boolean;
};

function KInline({ expr, sr }: { expr: string; sr?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap"
      aria-label={sr ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function FactorTable({
  caption,
  rows,
  id,
}: {
  caption: string;
  rows: FactorRow[];
  id?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700/60 bg-gray-900">
      <table
        className="min-w-[520px] w-full border-collapse text-sm"
        aria-describedby={id ? `${id}-caption` : undefined}
      >
        <caption
          id={id ? `${id}-caption` : undefined}
          className="text-left p-3 text-gray-400"
        >
          {caption}
        </caption>
        <thead>
          <tr className="bg-gray-800/50 text-gray-200">
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Factor 1
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Factor 2
            </th>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Product
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={`${r.a}-${r.b}-${i}`}
              className={`border-t border-gray-800 ${
                r.crossed ? "bg-amber-500/5" : ""
              }`}
            >
              <td className="px-4 py-3 text-gray-100 font-medium">{r.a}</td>
              <td className="px-4 py-3 text-gray-100 font-medium">{r.b}</td>
              <td className="px-4 py-3 text-gray-300">{r.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.7.1 Factor Charts: Finding the Factors of a Number
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every positive integer has only finitely many positive factors. For
          instance, 6 has factors 1, 2, 3, and 6, while 9 has factors 1, 3, and
          9. A quick way to list all factors of any integer is to build a
          factor chart: test small divisors in order and record each successful
          factor pair.
        </p>

        <MustKnow>
          To list all factors of a number N efficiently:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Start with the guaranteed pair (1, N).</li>
            <li>
              Increase the trial divisor by 1 each time. Whenever{" "}
              <KInline expr="\dfrac{N}{d}" sr="N divided by d" /> is an
              integer, record the pair (d, N/d).
            </li>
            <li>
              Stop as soon as the left factor would exceed the right factor. At
              that moment the pairs have “crossed,” and any further pairs would
              just repeat in reverse.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="factor-10" className="space-y-4">
          <h3 id="factor-10" className="text-xl font-semibold text-white">
            Example 1: Build a factor chart for 10
          </h3>
          <p>
            Begin with (1, 10). Next, test successive divisors:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <KInline expr="\dfrac{10}{2} = 5" /> → record (2, 5)
            </li>
            <li>
              <KInline expr="\dfrac{10}{3} = 3\tfrac{1}{3}" /> → not an integer,
              skip
            </li>
            <li>
              <KInline expr="\dfrac{10}{4} = 2\tfrac{1}{2}" /> → not an integer,
              skip
            </li>
            <li>
              <KInline expr="\dfrac{10}{5} = 2" /> → this reverses (2, 5). Pairs
              have crossed, so stop.
            </li>
          </ul>

          <FactorTable
            id="chart-10"
            caption="Factor chart for 10"
            rows={[
              { a: 1, b: 10, product: 10 },
              { a: 2, b: 5, product: 10 },
            ]}
          />

          <p className="mt-2">
            Therefore, the positive factors of 10 are 1, 2, 5, and 10.
          </p>
        </section>

        <section aria-labelledby="factor-56" className="space-y-4">
          <h3 id="factor-56" className="text-xl font-semibold text-white">
            Example 2: Build a factor chart for 56
          </h3>
          <p>Test divisors in order and record the factor pairs:</p>

          <FactorTable
            id="chart-56"
            caption="Factor chart for 56"
            rows={[
              { a: 1, b: 56, product: 56 },
              { a: 2, b: 28, product: 56 },
              { a: 4, b: 14, product: 56 },
              { a: 7, b: 8, product: 56, crossed: true },
            ]}
          />

          <p>
            After (7, 8), the next left factor would exceed the right one, so
            we’re done. Listing them in order gives eight factors:
            {" "}
            <span className="text-gray-100 font-medium">
              1, 2, 4, 7, 8, 14, 28, 56
            </span>
            .
          </p>
        </section>

        <section aria-labelledby="why-cross" className="space-y-3">
          <h3 id="why-cross" className="text-xl font-semibold text-white">
            Why the “crossing” rule works
          </h3>
          <p>
            Every factor d below the square root pairs uniquely with{" "}
            <KInline expr="N/d" sr="N divided by d" /> above the square root.
            Once the two sides meet or cross, you’ve already found every pair.
            That’s why it’s enough to test divisors up to{" "}
            <KInline expr="\lfloor \sqrt{N} \rfloor" sr="floor of square root of N" />.
          </p>
        </section>

        <MCQExample
          number={31}
          prompt="Which statement about building a factor chart is always true?"
          options={[
            "You must test every divisor up to N.",
            "You can stop once the left factor would exceed the right factor.",
            "If d doesn’t divide N evenly, N/d is still a factor.",
            "The total number of factors is always even.",
          ]}
          correct="You can stop once the left factor would exceed the right factor."
          solution={
            <>
              <p>
                You don’t need to test all integers up to N—testing up to the
                square root is sufficient. If d does not divide N, then N/d
                is not an integer and isn’t a factor. The total count of
                factors isn’t always even: perfect squares have an odd number
                of factors. The reliable stopping rule is to stop once the
                factor pairs would reverse order (i.e., when the left factor
                would exceed the right factor).
              </p>
            </>
          }
        />

        <MustKnow>
          Practical checklist:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Write the first row as (1, N).</li>
            <li>
              Test d = 2, 3, 4, …; each time{" "}
              <KInline expr="\dfrac{N}{d}" sr="N divided by d" /> is an integer,
              add the pair (d, N/d).
            </li>
            <li>
              Stop immediately when the next left factor would be larger than
              the right factor—this prevents duplicated pairs.
            </li>
            <li>Combine all found pairs to list every positive factor.</li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}