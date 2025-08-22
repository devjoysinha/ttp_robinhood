import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "6.4.4 Weaken a Causal Argument by Showing the Effect Doesn’t Follow the Cause | Critical Reasoning",
  description:
    "How to undermine a cause-and-effect claim by exhibiting cases in which the alleged cause occurs but the effect does not. Includes three multiple‑choice drills with full reasoning.",
};

function TeX({
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
    trust: true,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel}
      role="img"
      className={display ? "block my-2" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Load KaTeX stylesheet (lightweight CDN) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4.4 Weakening a Causal Claim by Showing the Effect Does Not Occur When the Cause Occurs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quick way to erode support for a cause‑and‑effect conclusion is to find an instance in which the supposed
          cause happens but the predicted outcome does not. A true causal rule implies that whenever the cause shows up,
          the effect should follow.
        </p>

        <MustKnow>
          Show the alleged cause without the effect to weaken a causal claim. In logic terms, a claim like{" "}
          <TeX expr="\text{Cause} \Rightarrow \text{Effect}" ariaLabel="Cause implies effect" />
          is undermined by a counterexample of{" "}
          <TeX expr="\text{Cause} \land \lnot \text{Effect}" ariaLabel="Cause and not effect" />.
        </MustKnow>

        <p>
          This tactic doesn’t require disproving the conclusion in all cases. Introducing a credible counterexample is
          enough to cast serious doubt on the causal story.
        </p>

        <MCQExample
          number={15}
          prompt="A regional hospital reported that tardy arrivals last week were three times higher than usual. The administrator learned that several subway lines were partially closed and concluded that the closures caused the spike in late arrivals. Which of the following, if true, most clearly undermines the administrator’s conclusion?"
          options={[
            "During six of the previous twelve weeks, the same subway lines had similar closures, yet late arrivals at the hospital remained at normal levels.",
            "Traffic congestion near the hospital has worsened over the past year.",
            "Several bus routes were added to compensate for the partial subway closures.",
            "Most hospital employees live within walking distance of the hospital.",
            "The hospital’s on-time arrival rate last month was higher than the city average.",
          ]}
          correct="During six of the previous twelve weeks, the same subway lines had similar closures, yet late arrivals at the hospital remained at normal levels."
          solution={
            <>
              <p>
                The argument claims subway closures caused a spike in tardiness. To weaken, show the closures can occur
                without the spike. If those very lines were closed multiple times before and lateness did not surge,
                then the suggested cause did not reliably produce the effect—casting doubt on the conclusion.
              </p>
            </>
          }
        />

        <MCQExample
          number={16}
          prompt="Last spring, a bloom of algae appeared in Lake Meridian. Just before the bloom, a nearby farm began releasing treated runoff containing nitrogen and phosphorus into the lake. Therefore, the treated runoff caused the bloom. Which option, if true, most strongly calls this explanation into question?"
          options={[
            "A nearby, ecologically similar Lake Hart received comparable amounts of the same treated runoff, but no bloom developed there.",
            "Local officials had long warned that Lake Meridian could experience a bloom.",
            "The bloom subsided soon after the farm paused the releases.",
            "Although algae have been present in Lake Meridian for centuries, the lake had never had a bloom before last spring.",
            "When algae density gets high, associated toxins can damage crops irrigated with lake water.",
          ]}
          correct="A nearby, ecologically similar Lake Hart received comparable amounts of the same treated runoff, but no bloom developed there."
          solution={
            <>
              <p>
                The best weakener shows the cause without the effect. If a similar lake receives similar runoff yet no
                bloom occurs, the purported cause does not consistently yield the effect, so the causal claim loses
                support.
              </p>
            </>
          }
        />

        <MCQExample
          number={17}
          prompt="Paleontologists often argue that rapid global warming roughly 15,000 years ago caused the extinction of the saber‑toothed cat about 10,000 years ago. Which statement, if true, most seriously undermines this explanation?"
          options={[
            "The largest mass extinction on record is widely attributed to volcanic activity.",
            "Although modern warming threatens some species, many populations appear stable despite higher temperatures.",
            "Geological data confirm that the global average temperature rose substantially starting about 15,000 years ago.",
            "Evidence indicates that Earth underwent a sharp warming around 50,000 years ago, followed by cooling starting around 30,000 years ago.",
            "Some megafauna species thrived during the period when the saber‑toothed cat disappeared.",
          ]}
          correct="Evidence indicates that Earth underwent a sharp warming around 50,000 years ago, followed by cooling starting around 30,000 years ago."
          solution={
            <>
              <p>
                If a comparable warming event occurred earlier (around 50,000 years ago) and did not wipe out
                saber‑toothed cats (which still existed until ~10,000 years ago), then warming does not reliably produce
                the alleged effect. That earlier instance is a cause‑without‑effect counterexample, weakening the
                warming‑caused‑extinction claim.
              </p>
            </>
          }
        />

        <section aria-label="Why this works" className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h3 className="mb-2 text-lg font-semibold text-white">Why this technique works</h3>
          <p className="text-gray-300">
            A causal conclusion asserts a directional rule: whenever the cause occurs, the effect should follow. One
            compelling way to attack that rule is to exhibit a real or plausibly similar scenario where the cause shows
            up but the effect doesn’t. Formally, a single instance of{" "}
            <TeX expr="\text{Cause} \land \lnot \text{Effect}" ariaLabel="Cause and not effect" /> contradicts{" "}
            <TeX expr="\text{Cause} \Rightarrow \text{Effect}" ariaLabel="Cause implies effect" /> and weakens the
            inference.
          </p>
        </section>

        <p>
          Bottom line: When evaluating a causal claim, actively look for credible counterexamples in which the cause is
          present but the effect is absent. If you can find one, the causal link is on shaky ground.
        </p>
      </article>
    </main>
  );
}