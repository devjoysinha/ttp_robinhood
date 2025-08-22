import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.5.2 Scientifically Designed Experiments | Critical Reasoning",
  description:
    "Learn how controlled experiments strengthen causal conclusions: control vs. experimental groups, isolating variables, and a CR-style multiple‑choice example with full reasoning.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: false });
  return (
    <span
      className="align-baseline"
      aria-label={ariaLabel ?? expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5.2 Scientifically Designed Experiments
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A well‑built experiment aims to isolate one factor and measure how it influences
          an outcome. In other words, we try to make every aspect of the test and control
          conditions the same except for the one variable we care about. If we can fix the
          middle of the setup and let only the key input move, any change in the outcome
          is far more credibly tied to that input.
        </p>

        <MustKnow>
          The core purpose of an experiment is to hold everything constant except one
          variable. Use a control group and an experimental group that are treated
          identically in all ways, with the sole exception that the experimental group
          receives the variable under investigation. This design rules out alternative
          explanations and strengthens a causal claim.
        </MustKnow>

        <p>
          Practically, that means we build two groups:
        </p>
        <ul className="list-inside list-disc space-y-2 text-gray-300">
          <li>
            Control group: same procedures, no exposure to the variable of interest.
          </li>
          <li>
            Experimental group: same procedures, gets the variable of interest.
          </li>
        </ul>
        <p>
          If our outcome behaves similarly in both groups, the variable likely isn’t the
          driver. If outcomes diverge meaningfully, that difference points toward a causal
          effect from the variable. A probabilistic way to summarize a successful setup is
          that the conditional probability in the treated group should exceed that in the
          control group:
          {" "}
          <MathInline
            expr="P(\text{effect} \mid \text{cause}) \;>\; P(\text{effect} \mid \neg\text{cause})"
            ariaLabel="Probability of effect given cause is greater than probability of effect without the cause"
          />
          .
        </p>

        <MustKnow>
          Think “same everything, one difference.” The stronger the match between groups
          on non‑target factors (e.g., environment, demographics, timing, protocol), the
          more persuasive the causal conclusion.
        </MustKnow>

        <section aria-labelledby="vitamin-d-example" className="space-y-4">
          <h3 id="vitamin-d-example" className="text-xl font-semibold text-white">
            Quick illustration
          </h3>
          <p>
            Suppose we want to see whether a specific multivitamin boosts vitamin D.
            We split participants into two equal groups. The experimental group takes the
            multivitamin; the control group does not. We align diet, time outdoors, schedule,
            and instructions across both groups to eliminate competing explanations.
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              If both groups show similar changes in vitamin D, the multivitamin probably
              isn’t the cause.
            </li>
            <li>
              If only the multivitamin group shows a meaningful rise while the control
              group does not, that pattern supports a causal impact from the multivitamin.
            </li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt={
            <>
              The Tima people are a closely related population with comparable lifestyles,
              living across two neighboring countries. In Country G, many Timas eat large
              amounts of highly processed foods, and 38% currently have diabetes. The argument
              concludes that the elevated diabetes rate among Timas in Country G is caused by
              their dietary choices. Which statement, if true, most strengthens this conclusion?
            </>
          }
          options={[
            "Among the 62% of Timas in Country G who do not have diabetes, many still consume large amounts of highly processed foods.",
            "Timas in Country G who eat heavily processed foods and have diabetes generally say they are unaware of any diet–diabetes connection.",
            "Recent medical advances have made managing diabetes symptoms relatively straightforward.",
            "Among Timas in Country L, who maintain a traditional diet that excludes heavily processed foods, the diabetes rate is only 7%.",
            "Timas who maintain healthy body weight seldom develop diabetes.",
          ]}
          correct="Among Timas in Country L, who maintain a traditional diet that excludes heavily processed foods, the diabetes rate is only 7%."
          solution={
            <>
              <p>
                The author asserts a causal link: diet high in processed foods → higher diabetes
                rates. To strengthen a causal claim, show a well‑matched comparison in which the
                alleged cause is absent and the effect is correspondingly low.
              </p>
              <p>
                Choice D creates a near “control group” in Country L: same people (closely related),
                similar lifestyles, but without the processed‑food diet. The much lower diabetes rate
                (7%) when the supposed cause is absent is exactly what we expect if diet is the driver.
                Formally, it indicates
                {" "}
                <MathInline
                  expr="P(\text{diabetes} \mid \text{processed diet}) \gg P(\text{diabetes} \mid \text{no processed diet})"
                  ariaLabel="Probability of diabetes given processed diet is much greater than probability of diabetes with no processed diet"
                />
                .
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  A weakens/doesn’t help: if many non‑diabetics also eat processed foods, the link
                  looks less tight.
                </li>
                <li>
                  B is irrelevant: awareness doesn’t bear on whether diet causes diabetes.
                </li>
                <li>
                  C is irrelevant: ease of treatment doesn’t address causation.
                </li>
                <li>
                  E introduces weight as a confounder but gives no diet comparison, so it doesn’t
                  directly support the stated causal claim.
                </li>
              </ul>
              <p>Therefore, D most strongly supports the conclusion.</p>
            </>
          }
        />

        <p>
          Bottom line: strong experimental design is about isolating the cause. When the
          only systematic difference between groups is the variable of interest, a difference
          in outcomes is persuasive evidence of causation.
        </p>
      </article>
    </main>
  );
}