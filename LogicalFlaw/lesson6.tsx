import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "10.2.4 Common Reasoning Flaws | Critical Reasoning",
  description:
    "A compact guide to the most common argument flaws: causal mistakes, overgeneralization and sampling issues, numerical confusion, unsupported conclusions, and necessary vs. sufficient mix‑ups. Includes one quick identification question.",
};

type FlawCardProps = {
  id: string;
  title: string;
  description: string;
  redFlags: string[];
  example: React.ReactNode;
};

function FlawCard({ id, title, description, redFlags, example }: FlawCardProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="rounded-lg border border-gray-800 bg-[#0B0F1A] p-5 shadow-sm"
    >
      <h3 id={`${id}-title`} className="text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-200">Watch for:</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
          {redFlags.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-200">Mini‑example:</h4>
        <div className="mt-1 text-gray-300">{example}</div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Logical Flaw</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.4 Common Flaws in Reasoning Found in Logical Flaw Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test makers rely on a small set of predictable reasoning mistakes. If you can name the
          pattern, you can spot it quickly and choose the answer that describes it. The same
          patterns you use to weaken arguments also show up here—you’re just labeling the flaw
          rather than attacking it.
        </p>

        <MustKnow>
          Logical Flaw questions are about diagnosis, not attack. First, separate the author’s
          conclusion from the support. Then ask: what kind of leap did the argument make? Most
          wrong turns fall into five buckets below.
        </MustKnow>

        <div className="grid grid-cols-1 gap-5">
          <FlawCard
            id="causal"
            title="1) Causal errors (correlation vs. causation)"
            description="The author treats a correlation, sequence, or coincidence as proof that one thing caused another, while overlooking alternate causes or reverse causation."
            redFlags={[
              "“After X, Y increased; therefore X caused Y.”",
              "No consideration of other explanations or controls",
              "Assumes the direction of causation without evidence",
            ]}
            example={
              <p>
                After a city launched a new bike‑share app, bike sales climbed. The author concludes
                the app caused the increase. But nicer weather, a local cycling event, or new lanes
                could explain the spike.
              </p>
            }
          />

          <FlawCard
            id="overgen"
            title="2) Overgeneralization and sampling flaws"
            description="A small, biased, or unrepresentative sample is used to draw a sweeping conclusion about a broader group."
            redFlags={[
              "Tiny pilot or convenience sample → conclusion about “all users/customers”",
              "Survey/poll with selection bias or unclear methodology",
              "Results from one subgroup generalized to a different population",
            ]}
            example={
              <p>
                Ten people at a single café loved a new loyalty feature, so the company declares
                “our customers will love it.” That group is too small and not necessarily
                representative of all customers.
              </p>
            }
          />

          <FlawCard
            id="numerical"
            title="3) Numerical confusion (percentages vs. counts, averages, base rates)"
            description="The argument mixes up rates and totals or misreads averages, base rates, or proportions."
            redFlags={[
              "Compares percentages in one place to raw totals in another",
              "Average (mean) touted without distribution context",
              "Ignores different baselines when comparing growth",
            ]}
            example={
              <p>
                Firm A grew revenue by 200% (from $1M to $3M); Firm B grew by 10% (from $200M to
                $220M). Claiming A “added more revenue” confuses rate with absolute dollars—B added
                $20M, which is larger than A’s $2M gain.
              </p>
            }
          />

          <FlawCard
            id="unsupported"
            title="4) Unsupported conclusion (scope or claim leap)"
            description="The evidence doesn’t justify the strength or scope of the conclusion—often jumping from correlation to policy, from some to all, or from is to ought."
            redFlags={[
              "Evidence is about one context, conclusion is broad or prescriptive",
              "Leaps from descriptive facts to a recommendation without weighing trade‑offs",
              "Shifts in scope (some → most/everyone) or concept drift",
            ]}
            example={
              <p>
                A study finds people who practice at night score slightly higher on a quiz. The
                author concludes, “All learners should study at night.” The jump to a universal
                recommendation is not supported.
              </p>
            }
          />

          <FlawCard
            id="necessary-vs-sufficient"
            title="5) Confusing necessary with sufficient (and related logic mix‑ups)"
            description="The author treats a requirement as if it guarantees the outcome, or mistakes a statement for its converse. In logic terms, they blur what follows from what."
            redFlags={[
              "Assumes that meeting a requirement ensures success",
              "Conflates a statement with its converse",
              "Labels something “important” or “significant” and treats it as enough on its own",
            ]}
            example={
              <p>
                If attending a prep course is required to earn a certificate, concluding “they took
                the course, so they will be certified” mistakes a necessary condition for a
                sufficient one. In symbols:{" "}
                <InlineMath math={"A \\Rightarrow B \\;\\not\\Rightarrow\\; B \\Rightarrow A"} />.
              </p>
            }
          />
        </div>

        <MCQExample
          number={1}
          prompt="City data show that after painting new bike lanes, cycling injuries dropped by 20%. Therefore, the lanes caused the reduction in injuries. Which flaw best matches this reasoning?"
          options={[
            "Causal error: treats correlation/sequence as proof of causation",
            "Overgeneralization from an unrepresentative sample",
            "Numerical confusion between percentages and totals",
            "Necessary vs. sufficient condition confusion",
            "Unsupported conclusion due to scope shift",
          ]}
          correct="Causal error: treats correlation/sequence as proof of causation"
          solution={
            <>
              <p>
                The argument assumes the new lanes caused the drop without ruling out other factors
                (e.g., seasonal traffic, enforcement changes, awareness campaigns). That’s the hallmark
                of a causal leap.
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: label the conclusion, list the evidence, and name the gap. In most cases, that
          gap is one of the five patterns above.
        </p>
      </article>
    </main>
  );
}