import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.4 Matrix Method for Rate–Time–Distance | GMAT Quant",
  description:
    "Learn to organize rate–time–distance problems with a simple matrix. See how to keep units consistent, use travel duration (not clock time), and convert units with KaTeX‑rendered formulas. Includes a quick multiple‑choice practice problem.",
};

function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span className={display ? "block my-3" : "inline"} aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function MatrixTable({
  caption,
  rows,
}: {
  caption: string;
  rows: Array<{ object: string; rate?: string; time?: string; distance?: string }>;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800">
      <table className="min-w-full divide-y divide-gray-800">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-gray-900">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
              Object
            </th>
            <th scope="col" className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
              Rate
            </th>
            <th scope="col" className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
              Time
            </th>
            <th scope="col" className="px-4 py-2 text-left text-sm font-semibold text-gray-200">
              Distance
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800 bg-gray-950/40">
          {rows.map((r, i) => (
            <tr key={i}>
              <th scope="row" className="px-4 py-2 text-sm font-medium text-gray-100">
                {r.object}
              </th>
              <td className="px-4 py-2 text-sm text-gray-300">{r.rate ?? "—"}</td>
              <td className="px-4 py-2 text-sm text-gray-300">{r.time ?? "—"}</td>
              <td className="px-4 py-2 text-sm text-gray-300">{r.distance ?? "—"}</td>
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
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Rate Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.4 Using a Matrix to Organize Rate–Time–Distance
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A compact table—or “matrix”—keeps rate, time, and distance data tidy and makes the
          required operations obvious. Each column holds one part of the relationship, and each row
          represents a moving object. The core equation is:
        </p>

        <div>
          <K expr="D = R \times T" display ariaLabel="Distance equals rate times time" />
        </div>

        <p>Here’s the blank structure we’ll use throughout:</p>

        <MatrixTable
          caption="Blank matrix for rate, time, and distance."
          rows={[
            { object: "Object", rate: "", time: "", distance: "" },
          ]}
        />

        <p>Let’s populate the matrix for a quick warm‑up.</p>

        <MatrixTable
          caption="Filled matrix for a jet example."
          rows={[
            { object: "Jet", rate: "500 miles/hour", time: "4 hours", distance: "2,000 miles" },
          ]}
        />

        <p className="mt-2">
          Multiplying the entries confirms the result:
        </p>

        <div>
          <K
            display
            expr="500\ \frac{\text{miles}}{\text{hour}} \times 4\ \text{hours} = 2{,}000\ \text{miles}"
            ariaLabel="500 miles per hour times 4 hours equals 2,000 miles"
          />
        </div>

        <MustKnow>
          Always track the middle of the formula, not the clock. Time in the matrix is the duration
          of travel, not a time of day. For instance, a trip from 5 PM to 5 AM is 12 hours of travel
          time—those timestamps only help you compute the duration.
        </MustKnow>

        <MustKnow>
          Units must match. Before multiplying, ensure rate and time are compatible (e.g., miles per
          hour with hours). Convert anything that doesn’t match so the units cancel correctly.
        </MustKnow>

        <section aria-labelledby="unit-conversion">
          <h3 id="unit-conversion" className="sr-only">
            Unit conversion reminder
          </h3>
          <p>
            A reliable setup for unit changes is:
          </p>
          <div>
            <K
              display
              expr="\text{Desired Units} = (\text{Current Units}) \times \left(\frac{\text{Target}}{\text{Current}}\right)"
              ariaLabel="Desired units equal current units times conversion ratio"
            />
          </div>
        </section>

        <MCQExample
          number={1}
          prompt="A jet departs Tanzania and flies at a constant 400 miles per hour for 600 minutes. How far does it travel?"
          options={[
            "4,000 miles",
            "24,000 miles",
            "40,000 miles",
            "120,000 miles",
            "240,000 miles",
          ]}
          correct="4,000 miles"
          solution={
            <>
              <p>First, align the units. Minutes must be converted to hours:</p>
              <K
                display
                expr="600\ \text{min}\times\left(\frac{1\ \text{hour}}{60\ \text{min}}\right)=10\ \text{hours}"
                ariaLabel="Six hundred minutes times one hour over sixty minutes equals ten hours"
              />
              <p>Now compute the distance:</p>
              <K
                display
                expr="400\ \frac{\text{miles}}{\text{hour}} \times 10\ \text{hours} = 4{,}000\ \text{miles}"
                ariaLabel="Four hundred miles per hour times ten hours equals four thousand miles"
              />
              <p>Therefore, the jet covers 4,000 miles.</p>
            </>
          }
        />

        <section aria-labelledby="practice-matrix">
          <h3 id="practice-matrix" className="sr-only">
            Matrix check with converted time
          </h3>
          <MatrixTable
            caption="Matrix after converting 600 minutes to 10 hours."
            rows={[
              { object: "Jet", rate: "400 miles/hour", time: "10 hours", distance: "4,000 miles" },
            ]}
          />
        </section>

        <p className="mt-4">
          Takeaway: organize your data in the matrix, use travel duration, and convert units before
          multiplying. Once everything aligns, the calculation is straightforward with{" "}
          <span className="whitespace-nowrap">
            <K expr="D=R\times T" ariaLabel="D equals R times T" />
          </span>
          .
        </p>
      </article>
    </main>
  );
}