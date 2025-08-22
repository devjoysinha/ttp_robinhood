import type { Metadata } from "next";
import Head from "next/head";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight KaTeX helpers (server-rendered)
function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: false });
  return <span role="math" aria-label={ariaLabel ?? expr} dangerouslySetInnerHTML={{ __html: html }} />;
}
function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true });
  return <div role="math" aria-label={ariaLabel ?? expr} className="my-3" dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "6.2 Multi‑Source Reasoning: How to Start | GMAT",
  description:
    "A step‑by‑step approach for beginning Multi‑Source Reasoning questions: skim every tab, map where info lives, connect tabs, and manage your time. Includes two practice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet (for math rendering) */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-8YhT0v3P1Q1h6Yb5hJ3v8KZt5pT2uZpC2exO6a3I9l0aZ8b8G3nH0m5+7o6Q7r3m"
          crossOrigin="anonymous"
        />
      </Head>

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">6. Multi‑Source Reasoning</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">6.2 How to Begin Attacking an MSR Question</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Multi‑Source Reasoning (MSR) prompts spread information across multiple tabs. Before you try any question,
          do a fast orientation pass so you know what’s on each tab and where to go when a question calls for specifics.
        </p>

        <h3 className="text-xl font-semibold text-white">First pass: skim and map</h3>
        <MustKnow>
          Review every tab quickly before answering. Your goal is a mental map: what each tab contains and where different
          details live. Don’t chase fine print yet—you’ll come back for it when needed.
        </MustKnow>

        <MustKnow>
          On that first read, skim rather than deep‑read. It’s normal to leave details for later; you’ll retrieve them when a
          question demands them.
        </MustKnow>

        <p>
          Treat this like reading strategy for RC: get the big picture, not every fact. The same principles apply even if the
          tabs include charts, tables, emails, or memos.
        </p>

        <MustKnow>
          RC mindset works here: read to understand structure and location. Details can be pulled on demand.
        </MustKnow>

        <p>
          For visuals (tables/graphs), capture:
        </p>
        <ul className="list-disc pl-6">
          <li>titles and units</li>
          <li>row/column or axis labels</li>
          <li>how data is organized (by year, category, person, etc.)</li>
        </ul>
        <p>You don’t need to compute or memorize values yet.</p>

        <MustKnow>
          On the initial sweep, note what’s tracked, how it’s labeled, and the general layout. Skip recording exact numbers
          and calculations until a question requires them.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Know the “what” and the “where”</h3>
        <p>
          Your orientation pass should answer two questions:
        </p>
        <ul className="list-disc pl-6">
          <li>What kinds of information are present?</li>
          <li>Where is each kind of information located?</li>
        </ul>

        <MustKnow>
          Aim to remember what appears on each tab and where to find it—rather than memorizing specifics.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Connect the tabs</h3>
        <p>
          While skimming, consider how the tabs relate. Are you reading a thread of communications, a summary plus data,
          or methods paired with costs? Making these connections early speeds up question‑time lookups.
        </p>

        <MustKnow>
          Think about relationships across tabs (e.g., narrative + data, recommendations + metrics). Anticipating connections
          helps you link the right pieces under time pressure.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Timing reality</h3>
        <p>
          Expect the first question tied to a prompt to take longer because you’re still orienting. That’s fine—you’ll make
          up the time on later questions once the map is in your head.
        </p>

        <MustKnow>
          It’s normal to run “behind” after the first question in a set. You’ll catch up as you reuse your mental map on the
          remaining questions.
        </MustKnow>

        <hr className="border-gray-700" />

        <section aria-labelledby="example-ebu" className="space-y-4">
          <h3 id="example-ebu" className="text-xl font-semibold text-white">Example: Reading across tabs</h3>
          <p className="text-gray-300">
            Suppose one tab lists each friend’s monthly net income, and another tab shows how Ebu splits his income by
            category (rent, food, entertainment, savings). If that second tab indicates that food is 30% of his net income,
            and the first tab shows Ebu earns $7,500 per month, then:
          </p>
          <MathBlock expr="\,\text{Food Spend} = 0.30 \times \$7{,}500 = \$2{,}250" ariaLabel="Food spend equals 0.30 times 7500 equals 2250 dollars" />
          <MCQExample
            number={1}
            prompt="How much does Ebu spend on food each month?"
            options={["$1000", "$1200", "$1500", "$1800", "$2250"]}
            correct="$2250"
            solution={
              <>
                <p>
                  From the “allocation” tab, food is 30% of Ebu’s net income. From the “income” tab, Ebu’s net income is
                  $7,500. So food = 0.30 × $7,500 = $2,250.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="net-profit-margin" className="space-y-4">
          <h3 id="net-profit-margin" className="text-xl font-semibold text-white">Example: Synthesize definitions + data</h3>
          <p>
            A separate prompt tracks three industries over 2019–2021. One tab gives a definition, another shows a line graph
            of a metric over time, and a third tab lists a table of financial measures. The definition tab states:
          </p>
          <div className="rounded-md bg-gray-800/50 p-4">
            <p className="font-semibold text-gray-200">Definition</p>
            <MathBlock
              expr="\text{Net Profit Margin} \;=\; \dfrac{\text{Net Profit}}{\text{Revenue}}"
              ariaLabel="Net Profit Margin equals Net Profit divided by Revenue"
            />
          </div>

          <div className="rounded-md border border-gray-700 p-4">
            <p className="mb-2 font-semibold text-gray-200">True/False style claims</p>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                In 2021, the customer acquisition cost (CAC) for luxury apparel is less than 10% of the CAC for
                pharmaceuticals.
                <div className="mt-1 inline-flex items-center rounded bg-green-900/40 px-2 py-0.5 text-sm text-green-300">
                  Supported
                </div>
                <p className="mt-2 text-gray-300">
                  The table shows CAC of about 38.9 for luxury apparel and ~599.7 for pharmaceuticals in 2021. Ten percent of
                  599.7 is 59.97, and 38.9 is below that threshold, so the statement holds.
                </p>
              </li>

              <li>
                For pharmaceuticals, ROAS and net profit margin move in opposite directions over the period.
                <div className="mt-1 inline-flex items-center rounded bg-red-900/40 px-2 py-0.5 text-sm text-red-300">
                  Not supported
                </div>
                <p className="mt-2 text-gray-300">
                  The table indicates ROAS increases each year, and the graph shows net profit margin also rising. That’s a
                  positive, not negative, relationship.
                </p>
              </li>

              <li>
                The luxury apparel industry benefited from improved economic conditions in 2021.
                <div className="mt-1 inline-flex items-center rounded bg-red-900/40 px-2 py-0.5 text-sm text-red-300">
                  Not supported
                </div>
                <p className="mt-2 text-gray-300">
                  The tabs report metrics (revenue, margins, etc.) but do not attribute changes to macroeconomic conditions.
                  Without explicit evidence, this is speculation.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">Wrap‑up</h3>
          <ul className="list-disc pl-6">
            <li>Skim all tabs first; build a quick map of “what” and “where.”</li>
            <li>Connect tabs conceptually (e.g., narrative + numbers, method + cost).</li>
            <li>Pull details only when a question asks for them.</li>
            <li>Expect Q1 to be slower; you’ll recover time on the rest.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}