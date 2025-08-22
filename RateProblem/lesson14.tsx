import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function TeX({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={block ? "my-2 overflow-x-auto" : ""}
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.10.3 Faster vs. Slower Objects | Rate Problems",
  description:
    "Learn how to set up converging-rate problems when one object is a fixed amount faster than another. Includes a worked example and a multiple‑choice drill with full solution using KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.10.3 Variation 3: One Object Travels Faster than Another
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two travelers move toward each other and one is a constant amount
          faster than the other, you don’t need their individual speeds right
          away. Model the slower speed with a variable and express the faster
          speed by adding the known difference.
        </p>

        <MustKnow>
          If one mover is a fixed amount faster than the other, let the slower
          speed be r and the faster speed be r + Δ, where Δ is the given speed
          difference. Build your rate–time–distance setup from these expressions
          and use “sum of distances equals the gap” for converging motion.
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick Worked Example
          </h3>
          <p>
            Two cyclists start at the same moment from points 52 miles apart and
            ride toward each other. The faster cyclist rides 2 mph faster than
            the slower cyclist. They meet after 2 hours. What is the slower
            cyclist’s speed?
          </p>

          <p>Let the slower speed be r mph, so the faster speed is r + 2 mph.</p>

          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="w-full border-separate border-spacing-0 text-left text-sm">
              <caption className="sr-only">
                Rate–Time–Distance matrix for the cyclists
              </caption>
              <thead className="bg-gray-800/40 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    Rider
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Rate
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Time
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Distance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-800/20">
                  <th scope="row" className="px-4 py-2 font-medium text-white">
                    Slower
                  </th>
                  <td className="px-4 py-2">
                    <TeX>r\\,\\text{mph}</TeX>
                  </td>
                  <td className="px-4 py-2">2 hours</td>
                  <td className="px-4 py-2">
                    <TeX>2r\\,\\text{miles}</TeX>
                  </td>
                </tr>
                <tr className="odd:bg-gray-800/20">
                  <th scope="row" className="px-4 py-2 font-medium text-white">
                    Faster
                  </th>
                  <td className="px-4 py-2">
                    <TeX>(r+2)\\,\\text{mph}</TeX>
                  </td>
                  <td className="px-4 py-2">2 hours</td>
                  <td className="px-4 py-2">
                    <TeX>2(r+2)\\,\\text{miles}</TeX>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div aria-live="polite">
            <TeX block ariaLabel="Equation: sum of distances equals 52">
              2r + 2(r+2) = 52
            </TeX>
            <TeX block>4r + 4 = 52</TeX>
            <TeX block>4r = 48</TeX>
            <TeX block>r = 12</TeX>
          </div>

          <p>Therefore, the slower cyclist rides at 12 mph.</p>
        </section>

        <section aria-labelledby="why-it-works">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why this setup works
          </h3>
          <p>
            In head‑on motion at constant rates, each traveler covers a portion
            of the initial separation. With equal time for both, distances are
            rate × time, and the two distances must add up to the initial gap.
            Representing speeds as r and r + Δ lets you solve directly.
          </p>
        </section>

        <MCQExample
          number={14}
          prompt="Two boats start at the same time from ports 100 miles apart and travel toward each other on parallel tracks. One boat sails 10 mph faster than the other. They meet in 2 hours. What is the sum of their speeds?"
          options={["40 mph", "45 mph", "48 mph", "50 mph", "60 mph"]}
          correct="50 mph"
          solution={
            <>
              <p>
                Let the slower speed be r mph, so the faster speed is r + 10
                mph. In 2 hours, their distances are 2r and 2(r + 10). These
                must total 100 miles:
              </p>
              <TeX block>2r + 2(r+10) = 100</TeX>
              <TeX block>4r + 20 = 100 \\ \\Rightarrow\\ 4r = 80 \\ \\Rightarrow\\ r = 20</TeX>
              <p>
                Thus the speeds are 20 mph and 30 mph, and their sum is 50 mph.
              </p>
            </>
          }
        />

        <section aria-labelledby="takeaways">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use r and r + Δ for slower/faster speeds when a fixed difference
              is given.
            </li>
            <li>For converging motion, sum of distances equals the gap.</li>
            <li>
              If both travel the same time t, write distances as rt and
              (r+Δ)t, then solve.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}