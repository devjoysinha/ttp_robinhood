import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.2 Build Your Quant & Verbal Base Before Data Insights | GMAT",
  description:
    "Why a strong Quant and Verbal foundation makes Data Insights easier. What to study first, what to postpone, and how to time DI practice in your GMAT prep.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.2 Build Most of Your Quant and Verbal Skills Before Diving into DI
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Success in Data Insights rests on tools you pick up in the Quantitative and
          Verbal sections. If those fundamentals are shaky, DI feels harder than it
          needs to be.
        </p>

        <MustKnow>
          Performing well in Data Insights depends on the same core abilities assessed
          in Quant and Verbal. Strengthen those first so DI becomes faster and more
          intuitive.
        </MustKnow>

        <section aria-labelledby="skills-youll-reuse">
          <h3 id="skills-youll-reuse" className="sr-only">
            Skills you’ll reuse in Data Insights
          </h3>
          <p>
            On the Quant side, expect to lean on topics such as probability, ratios,
            percentages, Venn diagrams, and number properties. On the Verbal side,
            you’ll regularly apply argument analysis—e.g., how to weaken/strengthen a
            claim or draw a sound inference.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-3 text-sm text-gray-400">
              A couple of small reminders you&apos;ll reuse in DI:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Percentage relationship:{" "}
                <InlineMath math="\text{percent}=\dfrac{\text{part}}{\text{whole}}\times 100\%" />
              </li>
              <li>
                Two-set Venn diagram count:{" "}
                <BlockMath math="|A \cup B| = |A| + |B| - |A \cap B|" />
              </li>
            </ul>
          </div>
        </section>

        <p>
          Does this mean you must master every last Quant and Verbal detail before
          touching DI? Not at all. What you should avoid is starting DI too early,
          before your toolkit is reasonably built.
        </p>

        <MustKnow>
          The smart sequence is to develop your Quant and Verbal base first, then fold
          in focused Data Insights practice closer to the end of your prep. This timing
          lets you apply well‑honed skills to DI instead of learning them on the fly.
        </MustKnow>

        <p>
          If you’re following the study plan, you’ll naturally cover our Quant and
          Verbal chapters before this DI chapter—so you’re on the right track.
          Keep in mind: every hour you invest in core Quant/Verbal skills adds useful
          tools to your DI toolbox.
        </p>
      </article>
    </main>
  );
}