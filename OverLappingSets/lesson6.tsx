import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={block ? "my-2 block" : "inline-block align-middle"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "13.2.5 Combinations of Cells in Overlapping Sets | Quant",
  description:
    "Learn how to find sums like A-only + B-only and other multi-cell combinations in 2×2 set matrices. Includes formula shortcuts, a quick check, one Problem Solving MCQ, one Data Sufficiency example, and an application with percents/fractions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">13. Overlapping Sets</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.5 Solving for a Combination of Cells in an Overlapping Set
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, we’ve often targeted one box of a 2×2 set‑matrix. On test day, you’ll just as often be asked for
          the sum of several boxes (for example, “exactly one” of two groups). This section shows how to capture those
          combinations quickly and reliably.
        </p>

        <MustKnow>
          Expect questions that ask for more than a single box. Being fluent with sums of boxes in the 2×2 matrix is a
          core overlapping‑sets skill.
        </MustKnow>

        <section aria-labelledby="exactly-one">
          <h3 id="exactly-one" className="text-xl font-semibold text-white">
            “Exactly one” as a sum of boxes
          </h3>
          <p>
            Suppose we track a population by membership in Group A and Group B. In a 2×2 matrix, the “exactly one”
            count is simply the sum of the two off‑diagonal boxes: A‑only + B‑only.
          </p>

          <figure className="overflow-x-auto rounded-md border border-gray-700">
            <figcaption className="sr-only">2×2 matrix highlighting A‑only and B‑only cells</figcaption>
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-32 border-b border-gray-700 p-2"></th>
                  <th className="border-b border-gray-700 p-2">Group A</th>
                  <th className="border-b border-gray-700 p-2">Not Group A</th>
                  <th className="border-b border-gray-700 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="w-32 border-b border-gray-700 p-2">
                    Group B
                  </th>
                  <td className="border-b border-gray-700 p-2"></td>
                  <td className="border-b border-gray-700 bg-gray-800/60 p-2 font-semibold">y (B‑only)</td>
                  <td className="border-b border-gray-700 p-2"></td>
                </tr>
                <tr>
                  <th scope="row" className="w-32 border-b border-gray-700 p-2">
                    Not Group B
                  </th>
                  <td className="border-b border-gray-700 bg-gray-800/60 p-2 font-semibold">x (A‑only)</td>
                  <td className="border-b border-gray-700 p-2"></td>
                  <td className="border-b border-gray-700 p-2"></td>
                </tr>
                <tr>
                  <th scope="row" className="w-32 p-2">Total</th>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </figure>

          <p className="mt-3">
            The master identity for two overlapping sets is:
            <span className="ml-2">
              <Math expr="\text{A only} + \text{B only} + \text{Both} + \text{Neither} = \text{Total}" ariaLabel="A only plus B only plus Both plus Neither equals Total" />
            </span>
          </p>
          <p>
            Rearranging for the “exactly one” sum,
            <span className="ml-2">
              <Math expr="(\text{A only} + \text{B only}) = \text{Total} - \text{Both} - \text{Neither}" ariaLabel="A only plus B only equals Total minus Both minus Neither" />
            </span>
          </p>

          <MCQExample
            number={1}
            prompt="In a class of 80 students, 30 study both French and German, and 25 study neither language. How many study exactly one of the two languages?"
            options={["20", "25", "30", "35", "55"]}
            correct="25"
            solution={
              <>
                <p>
                  Use the identity:
                  <span className="ml-2">
                    <Math expr="(\text{French only} + \text{German only}) = 80 - 30 - 25 = 25" ariaLabel="Exactly one equals 80 minus 30 minus 25 equals 25" />
                  </span>
                </p>
                <p>Therefore, 25 students study exactly one language.</p>
              </>
            }
          />

          <MustKnow>
            If you know the total, the “both” count, and the “neither” count, you can immediately compute the number in
            exactly one group via Total − Both − Neither.
          </MustKnow>
        </section>

        <MCQExample
          number={2}
          prompt="A toy company surveys n children about two new toys. If 3/5 of the children like both toys and 1/4 of the children like neither toy, how many children like exactly one toy?"
          options={[
            String.raw`\frac{3}{20}n`,
            String.raw`\frac{7}{20}n`,
            String.raw`\frac{13}{20}n`,
            String.raw`\frac{17}{20}n`,
            String.raw`\frac{19}{20}n`,
          ]}
          correct={String.raw`\frac{3}{20}n`}
          solution={
            <>
              <p>
                Let “exactly one” be X. Using the formula with <Math expr="n" /> total,
                <span className="ml-2">
                  <Math expr="X = n - \frac{3}{5}n - \frac{1}{4}n" ariaLabel="X equals n minus three fifths n minus one fourth n" />
                </span>
              </p>
              <p>
                Compute:
                <span className="ml-2">
                  <Math expr="1 - \frac{3}{5} - \frac{1}{4} = \frac{20}{20} - \frac{12}{20} - \frac{5}{20} = \frac{3}{20}" />
                </span>
              </p>
              <p>
                So <Math expr="X = \tfrac{3}{20}n" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={3}
          title="Only one ice cream? (Data Sufficiency)"
          statements={[
            "In a blind taste test, p people tried ice cream A and ice cream B. What fraction of the people liked only one type of ice cream?",
            "1) 2/5 of the people liked both types.",
            "2) 3/7 of the people liked neither type.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let X be the fraction who liked exactly one. From the identity,
                <span className="ml-2">
                  <Math expr="X = 1 - \text{Both} - \text{Neither}" ariaLabel="X equals one minus Both minus Neither" />
                </span>
              </p>
              <p>
                Statement (1) alone gives <Math expr="\text{Both} = \frac{2}{5}" />, but “Neither” is unknown ⇒ insufficient.
              </p>
              <p>
                Statement (2) alone gives <Math expr="\text{Neither} = \frac{3}{7}" />, but “Both” is unknown ⇒ insufficient.
              </p>
              <p>
                Together:
                <span className="ml-2">
                  <Math expr="X = 1 - \frac{2}{5} - \frac{3}{7} = \frac{35}{35} - \frac{14}{35} - \frac{15}{35} = \frac{6}{35}" />
                </span>
                of the people. Unique result ⇒ sufficient. Answer C.
              </p>
            </>
          }
        />

        <section aria-labelledby="at-least-one">
          <h3 id="at-least-one" className="text-xl font-semibold text-white">
            “At least one” as a sum of three boxes
          </h3>
          <p>
            “At least one of A or B” means everything except the “Neither” box. With the identity, that sum is just
            Total − Neither.
          </p>

          <figure className="overflow-x-auto rounded-md border border-gray-700">
            <figcaption className="sr-only">2×2 matrix with x, y, z and a given Neither cell</figcaption>
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-40 border-b border-gray-700 p-2"></th>
                  <th className="border-b border-gray-700 p-2">Like Swimming</th>
                  <th className="border-b border-gray-700 p-2">Don’t Like Swimming</th>
                  <th className="border-b border-gray-700 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="w-40 border-b border-gray-700 p-2">
                    Like Fishing
                  </th>
                  <td className="border-b border-gray-700 bg-gray-800/60 p-2 font-semibold">x</td>
                  <td className="border-b border-gray-700 bg-gray-800/60 p-2 font-semibold">z</td>
                  <td className="border-b border-gray-700 p-2"></td>
                </tr>
                <tr>
                  <th scope="row" className="w-40 border-b border-gray-700 p-2">
                    Don’t Like Fishing
                  </th>
                  <td className="border-b border-gray-700 bg-gray-800/60 p-2 font-semibold">y</td>
                  <td className="border-b border-gray-700 p-2">7 (Neither)</td>
                  <td className="border-b border-gray-700 p-2"></td>
                </tr>
                <tr>
                  <th scope="row" className="w-40 p-2">Total</th>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2">30</td>
                </tr>
              </tbody>
            </table>
          </figure>

          <p className="mt-3">
            With 30 campers total and 7 in “Neither,” the campers who like at least one activity is
            <span className="ml-2">
              <Math expr="30 - 7 = 23" ariaLabel="30 minus 7 equals 23" />
            </span>
            . Equivalently,
            <span className="ml-2">
              <Math expr="x + y + z = 23" ariaLabel="x plus y plus z equals 23" />
            </span>
            .
          </p>

          <MustKnow>
            If you know Total and any one of the four main boxes (A‑only, B‑only, Both, or Neither), you can find the
            sum of the other three as Total minus that known value.
          </MustKnow>
        </section>

        <MCQExample
          number={4}
          prompt="At a cleaners, each of k customers chooses wash type (hand‑wash or dry‑clean) and ironing (with starch or without). If 2/7 of customers prefer hand‑wash, and among those, 3/5 also prefer starch, how many customers do NOT like hand‑wash or do NOT like starch?"
          options={[
            String.raw`\frac{19}{35}k`,
            String.raw`\frac{21}{35}k`,
            String.raw`\frac{26}{35}k`,
            String.raw`\frac{28}{35}k`,
            String.raw`\frac{29}{35}k`,
          ]}
          correct={String.raw`\frac{29}{35}k`}
          solution={
            <>
              <p>
                First find the “like both” box. A fraction <Math expr="\tfrac{2}{7}" /> like hand‑wash, and among those a
                fraction <Math expr="\tfrac{3}{5}" /> also like starch. Thus,
                <span className="ml-2">
                  <Math expr="\text{Like both} = \frac{3}{5}\cdot\frac{2}{7}\,k=\frac{6}{35}k" />
                </span>
                .
              </p>
              <p>
                People who “do NOT like hand‑wash or do NOT like starch” are everyone except the “like both” group, i.e.
                the union of the two “dislike” conditions. So the count is
                <span className="ml-2">
                  <Math expr="k - \frac{6}{35}k = \frac{29}{35}k" />
                </span>
                .
              </p>
            </>
          }
        />

        <footer className="pt-2 text-gray-400">
          Big picture: identify which boxes the prompt is asking for, then use the identity
          <span className="ml-2">
            <Math expr="\text{A only} + \text{B only} + \text{Both} + \text{Neither} = \text{Total}" />
          </span>
          to jump straight to the needed sum.
        </footer>
      </article>
    </main>
  );
}