import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "8.4.3 Trap Answer: Related but Not Supported | Critical Reasoning",
  description:
    "Learn to avoid CR trap answers that echo the passage but aren’t logically supported. Includes a Must‑Know summary and a targeted multiple‑choice example with full reasoning.",
  keywords: [
    "GMAT",
    "Critical Reasoning",
    "Find the Conclusion",
    "trap answers",
    "argument analysis",
  ],
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4.3 Trap Answer Type 3: Related to the Premises, Not Actually
          Supported
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A conclusion should be the natural outcome of the given statements. It
          can reuse ideas and vocabulary from the passage, but it must be
          warranted by the meanings of those statements. In other words, word
          overlap alone{" "}
          <MathInline
            expr=" \ne "
            ariaLabel="does not equal"
          />{" "}
          logical support.
        </p>

        <p>
          Test makers exploit this by offering answer choices that sound “on
          topic” yet aren’t guaranteed by the passage. Your job is to verify
          that the suggested conclusion truly follows from what’s said—not just
          that it shares similar language.
        </p>

        <section aria-labelledby="case-study" className="space-y-4">
          <h3 id="case-study" className="text-xl font-semibold text-white">
            Mini Case Study
          </h3>
          <p className="italic text-gray-300">
            Many commentators have written off Aether Devices as a serious
            competitor: its offerings trail the field, and its share of the
            market has been shrinking. Yet a few years ago, Enchanter Labs was
            in a comparable position and, by concentrating on core categories
            and investing heavily in R&amp;D, rose to industry leadership.
            Moreover, Aether Devices currently sits on a stronger financial
            foundation than Enchanter Labs had at that time.
          </p>
          <p className="italic text-gray-300">
            If the statements above are true, which conclusion do they best
            support?
          </p>

          <p>
            Here are conclusions that feel connected but overreach the evidence:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li className="text-gray-300">
              “Unless Aether Devices targets the exact same product categories
              as Enchanter Labs, it will fail soon.” This borrows wording but
              adds unstated specifics (the same categories and an imminent
              failure).
            </li>
            <li className="text-gray-300">
              “Analysts were wrong to predict that Enchanter Labs wouldn’t come
              back.” The passage never discusses analyst predictions about
              Enchanter Labs.
            </li>
          </ul>

          <p>
            A restrained, supported takeaway would be: “The analysts’ judgment
            of Aether Devices may be mistaken.” The passage shows that a company
            in a similar strategic position—but with weaker finances—rebounded
            after focusing and investing. That analogy makes it plausible the
            current pessimism could be off the mark.
          </p>
        </section>

        <MustKnow>
          Some wrong choices in Find the Conclusion questions echo terms or
          themes from the passage but are not logically implied by it. Always
          test whether the argument’s meanings force the choice to be true:
          <MathInline
            expr="\text{premises} \Rightarrow \text{conclusion}"
            ariaLabel="premises imply conclusion"
          />{" "}
          must hold. Related does not mean supported:{" "}
          <MathInline
            expr="\text{overlap} \ne \text{entailment}"
            ariaLabel="overlap does not equal entailment"
          />
          .
        </MustKnow>

        <p>
          To steer clear of these traps, slow down and match implications, not
          just vocabulary. Ask: “If the passage is true, must this choice be
          true? Or does it add, assume, or drift beyond what’s stated?”
        </p>

        <MCQExample
          number={8}
          prompt="For years, safety groups have promoted helmet use among cyclists. Yet in cities that require helmets, helmets have fostered a false sense of security: riders behave more recklessly when wearing them, and drivers become less vigilant around cyclists. Which statement best completes the argument?"
          options={[
            "Public campaigns urging helmet use are more effective at improving cyclist safety than mandatory helmet laws.",
            "It is uncertain that campaigns encouraging helmet use actually make cyclists safer.",
            "No cyclist riding in a city should ever wear a helmet.",
            "Cycling advocates generally oppose mandatory helmet laws.",
            "In serious car–bike collisions, helmets offer minimal protection.",
          ]}
          correct="It is uncertain that campaigns encouraging helmet use actually make cyclists safer."
          solution={
            <>
              <p>
                Premise 1: Advocates have run awareness campaigns urging helmet
                use. Premise 2: In places with helmet mandates, both cyclists
                and drivers exhibit riskier behavior.
              </p>
              <p>
                The most cautious completion is that the safety payoff of
                helmet-focused campaigns is questionable, given the documented
                risk compensation. Thus, it’s reasonable to say it’s unclear
                whether such campaigns improve safety.
              </p>
              <p>
                Why the others fail:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  Option A compares effectiveness of campaigns vs. laws—no such
                  comparison is provided.
                </li>
                <li>
                  Option C prescribes behavior (“no one should wear a helmet”),
                  which goes far beyond the evidence.
                </li>
                <li>
                  Option D claims advocates’ positions on mandates—unstated.
                </li>
                <li>
                  Option E asserts performance in severe crashes—also unstated.
                </li>
              </ul>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: Don’t reward answers that merely “sound right.” Reward
          answers that are compelled by the passage.
        </p>
      </article>
    </main>
  );
}