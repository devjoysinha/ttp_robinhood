import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.14 MSR: Satisfying Multiple or Competing Demands | GMAT Reasoning",
  description:
    "Learn a step‑by‑step approach for Multi‑Source Reasoning items that require meeting multiple (sometimes conflicting) constraints. Includes an applied dam‑selection example and a Yes/No inference drill with full explanations.",
};

type Dam = {
  name: string;
  cost: number; // in $ millions
  mw: number; // total power in MW
  rating: "Good" | "Great" | "Excellent";
  completion: number; // year
};

const dams: Dam[] = [
  { name: "Bluecrest", cost: 900, mw: 800, rating: "Good", completion: 2026 },
  { name: "Silverflow", cost: 400, mw: 500, rating: "Excellent", completion: 2028 },
  { name: "Thunderstone", cost: 350, mw: 400, rating: "Excellent", completion: 2029 },
  { name: "Swiftstream", cost: 550, mw: 600, rating: "Great", completion: 2028 },
  { name: "Mistyrush", cost: 850, mw: 700, rating: "Excellent", completion: 2027 },
];

function SourceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
      className="rounded-lg border border-gray-800 bg-gray-900/40 p-4"
    >
      <h3
        id={title.replace(/\s+/g, "-").toLowerCase()}
        className="mb-2 text-base font-semibold text-gray-100"
      >
        {title}
      </h3>
      <div className="text-gray-300">{children}</div>
    </section>
  );
}

function DamTable({ data }: { data: Dam[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm text-gray-200">
        <caption className="sr-only">
          Projected characteristics for proposed hydroelectric dams
        </caption>
        <thead className="border-b border-gray-800 text-gray-300">
          <tr>
            <th scope="col" className="px-3 py-2">
              Dam
            </th>
            <th scope="col" className="px-3 py-2">
              Cost ($M)
            </th>
            <th scope="col" className="px-3 py-2">
              Total Power (MW)
            </th>
            <th scope="col" className="px-3 py-2">
              Sustainability
            </th>
            <th scope="col" className="px-3 py-2">
              Est. Completion
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr
              key={d.name}
              className="border-b border-gray-800 last:border-b-0"
            >
              <th scope="row" className="px-3 py-2 font-medium text-gray-100">
                {d.name} Dam
              </th>
              <td className="px-3 py-2">{d.cost.toLocaleString()}</td>
              <td className="px-3 py-2">{d.mw.toLocaleString()}</td>
              <td className="px-3 py-2">{d.rating}</td>
              <td className="px-3 py-2">{d.completion}</td>
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
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.14 MSR Items That Require Meeting Multiple or Competing Demands
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Multi‑Source Reasoning prompts don’t ask you to check just one
          condition. Instead, you’ll often have to confirm that an answer meets
          several constraints at once—sometimes even preferences that pull in
          different directions. Your job is to validate every required demand,
          not just the easy ones.
        </p>

        <MustKnow>
          Some MSR questions require you to satisfy multiple constraints at the
          same time. Treat each constraint as mandatory unless the prompt
          clearly labels it as flexible or a preference.
        </MustKnow>

        <p>
          You might be asked to pick an option that simultaneously honors two
          stakeholders’ criteria, or to judge statements that must align with
          two different parts of the prompt. Either way, the winning choice must
          hit all the targets the prompt establishes.
        </p>

        <MustKnow>
          The correct answer must fulfill all relevant demands from the sources,
          not merely a subset. One broken requirement is enough to eliminate a
          choice.
        </MustKnow>

        <p>Use this streamlined procedure when multiple demands are in play:</p>
        <ol className="list-inside list-decimal space-y-1">
          <li>List each demand in the order it appears in the question.</li>
          <li>
            For a given option, return to the source that governs the first
            demand and verify compliance.
          </li>
          <li>
            If it fails that demand, stop—discard the option and move on.
          </li>
          <li>
            If it passes, proceed to the next demand and repeat until the option
            fails or clears every demand.
          </li>
          <li>
            The option that meets all demands is correct. For Yes/No grids,
            select Yes only when the statement is supported by all relevant
            constraints.
          </li>
        </ol>

        <MustKnow>
          Working demand‑by‑demand lets you eliminate quickly and prevents you
          from overlooking a critical condition hidden in another tab or
          paragraph.
        </MustKnow>

        <hr className="my-8 border-gray-800" />

        <h3 className="text-xl font-semibold text-white">Example 18</h3>
        <p className="text-sm text-gray-400">
          Sources are shown first; the question follows.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SourceCard title="VP Mitchell (Requirements and Preferences)">
            <ul className="list-inside list-disc space-y-1">
              <li>We can approve only one dam.</li>
              <li>Total power must be at least 500 MW.</li>
              <li>
                Cost per MW should be under $1 million per MW (this is a
                preference and may be tough to hit, so we can be flexible).
              </li>
              <li>
                Choose a sustainability rating of great or better to satisfy
                environmental standards.
              </li>
            </ul>
          </SourceCard>

          <SourceCard title="VP Ramirez (Stricter Preferences)">
            <ul className="list-inside list-disc space-y-1">
              <li>
                Cost‑effectiveness matters but isn’t the top factor now because
                all proposals are well below our threshold of $2M per MW.
              </li>
              <li>
                In light of leadership’s focus on sustainability, we must pick a
                dam with an excellent rating.
              </li>
              <li>
                Due to ongoing power shortages, the project needs to finish
                before 2029.
              </li>
            </ul>
          </SourceCard>
        </div>

        <SourceCard title="Dam Proposals (Projected Characteristics)">
          <p className="mb-2 text-sm text-gray-400">
            Sustainability increases in the order: Good → Great → Excellent.
          </p>
          <DamTable data={dams} />
        </SourceCard>

        <MCQExample
          number={18}
          prompt="Which dam satisfies all of VP Mitchell’s and VP Ramirez’s requirements and preferences?"
          options={[
            "Bluecrest",
            "Silverflow",
            "Thunderstone",
            "Swiftstream",
            "Mistyrush",
          ]}
          correct="Silverflow"
          solution={
            <>
              <p>
                Start with Ramirez, whose constraints are tighter. He requires
                an excellent sustainability rating and completion before 2029.
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  Eliminate Bluecrest and Swiftstream (ratings Good and Great,
                  not Excellent).
                </li>
                <li>
                  Eliminate Thunderstone (completes in 2029, not before).
                </li>
              </ul>
              <p>
                That leaves Silverflow and Mistyrush. Now check Mitchell’s
                criteria: at least 500 MW and a rating of great or better. Both
                remaining dams qualify on those counts.
              </p>
              <p>
                Next, consider Mitchell’s cost preference: cost per MW below $1
                million per MW. A quick check works without long division:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  If cost in $ millions is less than the MW figure, then cost
                  per MW is under $1 million per MW.
                </li>
                <li>
                  If cost in $ millions is greater than the MW figure, it’s over
                  $1 million per MW.
                </li>
              </ul>
              <p>
                Silverflow: 400 (cost) vs. 500 (MW) → under $1M/MW. Mistyrush:
                850 vs. 700 → over $1M/MW.
              </p>
              <p>
                Since Mitchell asks us to respect that preference when possible
                (and Ramirez didn’t disqualify Silverflow), Silverflow is the
                only option that aligns with both VPs. Answer: Silverflow.
              </p>
            </>
          }
        />

        <hr className="my-8 border-gray-800" />

        <h3 className="text-xl font-semibold text-white">Example 19</h3>
        <p className="text-sm text-gray-400">
          Decide whether each statement is supported by combining the Director
          of Programming’s insights with the Network Executive’s constraints.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SourceCard title="Director of Programming (Audience Insights)">
            <ul className="list-inside list-disc space-y-1">
              <li>
                Viewers are most drawn to shows with supernatural elements,
                family dramas, and high‑school settings.
              </li>
              <li>They prefer one‑hour shows to 30‑minute programs.</li>
            </ul>
          </SourceCard>

          <SourceCard title="Network Executive (Budget and Format Rules)">
            <ul className="list-inside list-disc space-y-1">
              <li>
                Any new original show we add should have per‑episode costs at or
                below our standard $3M budget.
              </li>
              <li>
                Existing originals that already average over 6M viewers may
                exceed $3M, but by no more than 30%.
              </li>
              <li>Any newly acquired syndicated show must be 30 minutes.</li>
            </ul>
          </SourceCard>
        </div>

        <section className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h4 className="mb-2 text-base font-semibold text-gray-100">
            Statements and Answers
          </h4>
          <ol className="space-y-4">
            <li>
              <p className="font-medium text-gray-100">
                1) The network will not make any new acquisitions of programs in
                a half‑hour format.
              </p>
              <p className="mt-1 text-sm">
                Answer: No. Even though viewers prefer hour‑long shows, the
                executive’s rule says any newly acquired syndicated show must be
                30 minutes. A preference doesn’t override a “must.”
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">
                2) The network prefers acquiring original programming rather
                than syndicated programming.
              </p>
              <p className="mt-1 text-sm">
                Answer: No. The executive discusses both, but nowhere do the
                sources state a preference for originals over syndicated
                content. More words about one category ≠ preference.
              </p>
            </li>
            <li>
              <p className="font-medium text-gray-100">
                3) The network will not acquire any hour‑long dramas that cost
                $3 million per episode to produce.
              </p>
              <p className="mt-1 text-sm">
                Answer: No. For new originals, the ceiling is “cannot exceed”
                $3M, so exactly $3M is acceptable. Hour‑long dramas are also in
                line with the audience’s stated preference. Nothing prohibits
                this combination.
              </p>
            </li>
          </ol>
        </section>

        <p className="pt-2">
          Big takeaway: when multiple sources set the rules, verify each rule in
          turn and eliminate as soon as one is broken. Preferences yield to hard
          requirements, and a single conflict is enough to rule out an option.
        </p>
      </article>
    </main>
  );
}