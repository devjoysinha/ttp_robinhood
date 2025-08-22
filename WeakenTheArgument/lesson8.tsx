import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "3.7.2 Weaken: Challenge Cause-and-Effect Conclusions | Critical Reasoning",
  description:
    "Learn how to weaken arguments that claim causation: spot correlation vs. causation, reversed causality, third-variable causes, and coincidence. Includes three worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.2 Weakening Type 2: Calling a Cause-and-Effect Conclusion into Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Cause–and–effect claims appear often in Weaken questions. The trap is
          that a pattern in the data can be real while the proposed causal story
          is wrong. Your job is to test whether the conclusion truly follows
          from the evidence or whether a different explanation fits just as well.
        </p>

        <MustKnow>
          Treat causal claims with skepticism. Showing that one thing happened
          before another does not, by itself, prove that the first caused the
          second.
        </MustKnow>

        <p>
          This is the classic correlation-versus-causation pitfall. Authors may
          see two things occur together and assume a direct cause. However, the
          same pattern can arise for other reasons, including:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li className="leading-relaxed">
            Reversed direction: we observe{" "}
            <MathInline expr={"X \\to Y"} ariaLabel="X causes Y" /> in the data,
            but in reality{" "}
            <MathInline expr={"Y \\to X"} ariaLabel="Y causes X" />.
          </li>
          <li className="leading-relaxed">
            A lurking variable: some third factor{" "}
            <MathInline expr={"Z"} ariaLabel="Z" /> drives both{" "}
            <MathInline expr={"X"} ariaLabel="X" /> and{" "}
            <MathInline expr={"Y"} ariaLabel="Y" />, i.e.,{" "}
            <MathInline expr={"Z \\to X"} ariaLabel="Z causes X" /> and{" "}
            <MathInline expr={"Z \\to Y"} ariaLabel="Z causes Y" />.
          </li>
          <li className="leading-relaxed">
            Coincidence or noise: the co‑movement isn’t causal at all.
          </li>
        </ul>

        <MustKnow>
          A quick way to weaken a causal conclusion is to offer a plausible
          alternative explanation for the same observation—reverse causality, a
          confounder, or coincidence.
        </MustKnow>

        <p>
          Example: suppose a report finds that people who eat an avocado each
          morning are healthier than those who don’t. That could mean the
          avocado habit improves health. Or it could be that healthier people
          choose avocado toast, that farm work makes people both fit and more
          likely to have avocados on hand, or that the pattern is a statistical
          fluke. The data alone don’t decide the causal story.
        </p>

        <MCQExample
          number={11}
          prompt="A study compared people who avoid alcohol entirely with those who drink modest amounts. On average, the moderate drinkers were healthier and lived longer, so the researchers concluded that moderate alcohol consumption improves health. Which statement most undermines this conclusion?"
          options={[
            "Different research teams define “moderate” consumption in slightly different ways.",
            "A substantial portion of people who abstain do so because of existing health problems.",
            "Alcohol by volume differs a lot across beverages.",
            "Participants who drank moderately did not do so for health reasons.",
            "The study controlled for lifestyle factors such as diet and exercise.",
          ]}
          correct="A substantial portion of people who abstain do so because of existing health problems."
          solution={
            <>
              <p className="mb-2">
                The argument infers causation from a correlation:
              </p>
              <ul className="mb-3 list-disc pl-6">
                <li>
                  Evidence: moderate drinkers have better health and longevity
                  than abstainers.
                </li>
                <li>
                  Conclusion: moderate drinking improves health (cause{" "}
                  <MathInline expr={"\\text{moderation} \\to \\text{health}"} ariaLabel="moderation leads to health" />
                  ).
                </li>
              </ul>
              <p className="mb-2">
                To weaken, show an alternative story. If many abstainers avoid
                alcohol because they’re already ill, that suggests reversed
                causality: poorer health leads to abstention, not the other way
                around (
                <MathInline expr={"\\text{poor health} \\to \\text{abstain}"} ariaLabel="poor health leads to abstention" />
                ). That directly undercuts the conclusion.
              </p>
              <p className="mb-2">
                The other choices are irrelevant or supportive: varying
                definitions and ABV don’t show a different cause, motivation
                for drinking doesn’t matter, and adjusting for lifestyle
                actually strengthens the original claim.
              </p>
            </>
          }
        />

        <MCQExample
          number={12}
          prompt="Health coach: For two years after summiting Mount Everest, successful climbers have a lower heart‑attack rate than the general population. Therefore, climbing Everest every two years will reduce one’s risk of heart attack. Which option most seriously weakens the coach’s argument?"
          options={[
            "People who only fly over Mount Everest have heart‑attack rates similar to everyone else.",
            "People who frequently climb on indoor walls have fewer heart attacks than those who don’t.",
            "Typically, only individuals with exceptional fitness levels succeed in summiting Everest.",
            "Paying for a guided Everest expedition is far more expensive than a two‑year gym membership.",
            "Many heart‑attack patients could lower risk by quitting smoking.",
          ]}
          correct="Typically, only individuals with exceptional fitness levels succeed in summiting Everest."
          solution={
            <>
              <p className="mb-2">
                The coach treats a correlation as proof of cause:
              </p>
              <ul className="mb-3 list-disc pl-6">
                <li>
                  Evidence: Everest summiters show lower cardiac risk for two
                  years post‑climb.
                </li>
                <li>
                  Conclusion: the climb itself lowers risk (
                  <MathInline expr={"\\text{climb} \\to \\text{lower risk}"} ariaLabel="climb leads to lower risk" />
                  ).
                </li>
              </ul>
              <p className="mb-2">
                If only highly fit people succeed in summiting, preexisting
                fitness (
                <MathInline expr={"Z"} ariaLabel="Z (fitness)" />
                ) may drive both the climb and the lower risk (
                <MathInline expr={"Z \\to \\text{climb},\\ Z \\to \\text{lower risk}"} ariaLabel="fitness causes both the climb and lower risk" />
                ). That’s a classic third‑variable explanation and weakens the
                causal claim.
              </p>
              <p className="mb-2">
                Other options don’t attack the causal link: viewing the mountain
                is irrelevant, cheaper alternatives and quitting smoking don’t
                speak to whether climbing causes the effect, and indoor walls
                being helpful doesn’t negate Everest’s potential effect.
              </p>
            </>
          }
        />

        <MCQExample
          number={13}
          prompt="Advisor: Data show that couples who cohabit before marriage divorce more often than those who don’t. So, living together before marriage is a cause of divorce. Which statement most strongly challenges the advisor’s claim?"
          options={[
            "Compared with more conservative couples, more liberal couples tend to be both more open to cohabiting before marriage and more willing to divorce.",
            "In several countries, divorce rates have fallen steadily over the last three decades.",
            "Cohabiting couples can practice teamwork and household management before marrying.",
            "Strong communication skills are the most effective way to avoid divorce.",
            "For many couples who lived together before marrying, marriage brings few immediate lifestyle changes.",
          ]}
          correct="Compared with more conservative couples, more liberal couples tend to be both more open to cohabiting before marriage and more willing to divorce."
          solution={
            <>
              <p className="mb-2">
                The conclusion asserts a cause from a correlation: cohabitation
                supposedly increases divorce risk (
                <MathInline expr={"\\text{cohabit} \\to \\text{divorce}"} ariaLabel="cohabit leads to divorce" />
                ).
              </p>
              <p className="mb-2">
                If a shared mindset (e.g., liberal values) makes couples both
                more likely to live together before marriage and more accepting
                of divorce, then that third factor explains the higher divorce
                rate without cohabitation being causal (
                <MathInline expr={"Z \\to \\text{cohabit},\\ Z \\to \\text{divorce}"} ariaLabel="mindset causes both cohabitation and divorce" />
                ). That directly weakens the claim.
              </p>
              <p className="mb-2">
                The remaining options don’t undermine the causal link: overall
                trends, potential benefits of cohabitation, the importance of
                communication, or lifestyle continuity do not provide an
                alternative cause for the observed correlation.
              </p>
            </>
          }
        />

        <MustKnow>
          To weaken a causal conclusion, show that the same evidence fits a
          different story: the arrow might point the other way, a hidden factor
          could drive both variables, or the pattern may be coincidental.
        </MustKnow>

        <p className="mt-6">
          Next up: another common flaw that weakener choices expose—overbroad
          generalizations.
        </p>
      </article>
    </main>
  );
}