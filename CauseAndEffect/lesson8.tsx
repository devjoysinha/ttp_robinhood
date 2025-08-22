import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.4.2 Alternative Causes | Critical Reasoning",
  description:
    "Weaken cause-and-effect arguments by proposing a different cause for the same effect. Learn the tactic and practice with two multiple‑choice examples, each with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4.2 Weakening by Proposing an Alternative Cause
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A classic way to undercut a cause–effect claim is to show that the
          observed outcome could be explained by something other than the
          author’s proposed cause. If the effect admits another reasonable
          origin, the original causal story becomes less convincing.
        </p>

        <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
          <BlockMath
            math={
              "\\text{Claim: } A \\to B \\quad \\text{but a plausible rival is } C \\to B."
            }
          />
        </div>

        <MustKnow>
          To weaken a causal conclusion, offer a credible different cause for
          the same effect. If that alternative can account for what we observe,
          the link from the author’s cause to the effect is no longer
          necessary—only one of several possibilities.
        </MustKnow>

        <p className="mt-4">
          Practical checklist:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Identify the asserted cause and the measured effect (
            <InlineMath math="A \\to B" />).
          </li>
          <li>Ask: What else could produce B under realistic conditions?</li>
          <li>
            Provide a fact that supports this rival cause, showing B can occur
            even without A increasing.
          </li>
        </ul>

        <MCQExample
          number={11}
          prompt="Surfer: In the last five years, there have been on average 82 shark attacks on humans per year worldwide, whereas twenty years ago the average was about 50. Clearly, conservation has boosted shark numbers."
          options={[
            "Public campaigns highlight sharks’ ecological value, yet many sharks are still killed each year for their fins.",
            "Last year set a record for the number of reported shark attacks.",
            "Fatality rates from shark bites have dropped as medical care has improved.",
            "Far more people swim in the ocean now than twenty years ago.",
            "Sometimes shark attacks in remote areas are never reported.",
          ]}
          correct="Far more people swim in the ocean now than twenty years ago."
          solution={
            <>
              <p>
                The argument claims “more attacks” implies “more sharks.” A
                strong way to weaken this is to suggest another reason for the
                increase in attacks. If ocean swimming is substantially more
                popular now, there are many more human–shark encounters, which
                can raise attacks even if shark populations have not grown. Thus
                the effect (more attacks) is explained by a different cause
                (more swimmers), undermining the original conclusion. Choice D.
              </p>
              <p>
                Why the others don’t weaken the causation:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  A: High finning numbers don’t tell us whether the total shark
                  population rose or fell overall.
                </li>
                <li>
                  B: Restates the trend but doesn’t introduce a competing cause.
                </li>
                <li>
                  C: Concerns outcomes of attacks (fatality), not the count of
                  attacks.
                </li>
                <li>
                  E: Mentions underreporting without showing how reporting has
                  changed across time.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={12}
          prompt="The number of elm trees in Zobrinia had fallen for decades, but recently that decline has slowed noticeably. Therefore, the elms must have developed greater resistance to Dutch elm disease."
          options={[
            "Some elms were recently infected by a highly aggressive strain of the disease-causing fungus.",
            "Leaf scorch, a typically nonfatal condition, can be mistaken for Dutch elm disease.",
            "In other countries, inoculation has been used to boost elm resistance, but Zobrinia has not used inoculation.",
            "Efforts to control the beetle that spreads the fungus have mostly failed.",
            "Elm-wood furniture has gone out of style in Zobrinia in recent years.",
          ]}
          correct="Elm-wood furniture has gone out of style in Zobrinia in recent years."
          solution={
            <>
              <p>
                The conclusion attributes the slower decline in elm counts to
                improved disease resistance. A good weakener supplies a rival
                reason the decline could slow. If demand for elm-wood furniture
                dropped, logging would likely decrease, slowing the loss of elm
                trees without any change in disease resistance. Choice E.
              </p>
              <p>
                Briefly on the others:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  A: Some infections can occur even if overall resistance is up;
                  doesn’t offer a different cause for the slowed decline.
                </li>
                <li>
                  B: Misdiagnosis is possible, but we’re told disease has been
                  killing elms; this doesn’t provide an alternative driver of
                  the slowdown.
                </li>
                <li>
                  C: Resistance could rise without inoculation; not an
                  alternative cause for the slower decline.
                </li>
                <li>
                  D: If beetle control failed, that tends to support continued
                  disease pressure, not a new cause for the slowdown.
                </li>
              </ul>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: When you see a claim of the form{" "}
          <InlineMath math="A \\to B" />, ask what other cause could also yield{" "}
          <InlineMath math="B" />. If a credible alternative exists and is
          supported by evidence, the original causal link is weakened.
        </p>
      </article>
    </main>
  );
}