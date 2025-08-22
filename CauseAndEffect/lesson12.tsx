import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({
  expr,
  ariaLabel,
  display = false,
}: {
  expr: string;
  ariaLabel?: string;
  display?: boolean;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "6.5 Strengthening Cause‑and‑Effect Conclusions | Critical Reasoning",
  description:
    "Learn practical ways to reinforce a causal claim: eliminate competing explanations, show the effect disappears without the cause, and rule out reverse causality. Includes a quick CR multiple‑choice and a two‑statement drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.5 Strengthening the Support for a Cause‑and‑Effect Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          There are several reliable ways to make a causal conclusion more
          convincing. Broadly, we aim to show that the proposed cause really
          drives the effect, not something else, and that the relationship runs
          in the claimed direction.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Three high‑yield strengthening moves:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Rule out plausible alternative causes for the effect.</li>
              <li>
                Show that when the cause is absent, the effect does not occur.
              </li>
              <li>Demonstrate that the relationship cannot be flipped.</li>
            </ul>
            <div className="pt-2 text-sm text-gray-300/90">
              In symbols:
              <div className="mt-1">
                <MathInline expr={"C \\to E"} ariaLabel="Cause implies effect" />
                {"  "}
                strengthens the claim, as does evidence for the contrapositive{" "}
                <MathInline
                  expr={"\\lnot C \\Rightarrow \\lnot E"}
                  ariaLabel="Not cause implies not effect"
                />
                . Be cautious of the reversed direction{" "}
                <MathInline
                  expr={"E \\to C"}
                  ariaLabel="Effect implies cause"
                />{" "}
                — that is a different claim and often invalid.
              </div>
            </div>
          </div>
        </MustKnow>

        <p>
          We’ll begin with the first lever: eliminating competing explanations.
          If reasonable alternative causes remain on the table, the causal story
          is still shaky.
        </p>

        <MCQExample
          number={1}
          prompt="A city reports that neighborhoods that added bright‑green bike lanes saw a 25% decline in minor traffic collisions within a year. The city concludes that painting the lanes caused the drop in collisions. Which option best strengthens the city's conclusion?"
          options={[
            "During the same year, many neighborhoods across the city added various traffic features.",
            "Comparable neighborhoods that did not add green bike lanes did not experience a similar decline in minor collisions.",
            "Most residents in the city support bicycle infrastructure investments.",
            "Citywide traffic enforcement increased in every neighborhood during the year.",
            "Citywide car ownership fell slightly during the year.",
          ]}
          correct="Comparable neighborhoods that did not add green bike lanes did not experience a similar decline in minor collisions."
          solution={
            <>
              <p>
                We want evidence that ties the effect specifically to the green
                lanes, not to some other citywide change.
              </p>
              <p>
                The correct choice compares with a control group: similar areas
                without the lanes didn’t see the drop. That points to the lanes
                as the difference‑maker and rules out common citywide trends.
              </p>
              <p>
                Citywide changes (enforcement, car ownership) affect all areas
                and therefore cannot explain a difference limited to the treated
                neighborhoods. Public support and “many neighborhoods adding
                features” are irrelevant or too vague.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Two‑Statement Drill: Firming up a causal claim"
          statements={[
            "Researchers observe that employees who attend a company’s sleep‑hygiene seminar report fewer daytime errors three months later. The company claims the seminar caused the reduction in errors.",
            "1) Before the seminar, the error rates of attendees were similar to those of non‑attendees with comparable roles and schedules.",
            "2) In the quarter after the seminar, there were no policy changes affecting workload, tools, or supervision for the attendees other than the seminar itself.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We’re testing whether the seminar is the driver of the observed
                improvement, not some other factor, and that the groups were
                comparable to start with.
              </p>
              <p>
                Statement (1) handles baseline comparability. If pre‑seminar
                error rates match those of similar non‑attendees, we reduce the
                risk that attendees were already on a different trend.
                Helpful—but by itself, other changes post‑seminar could still be
                responsible.
              </p>
              <p>
                Statement (2) rules out competing explanations during the
                measurement window. If nothing meaningful changed besides the
                seminar, that points to the seminar as the active ingredient.
                Helpful—but without (1) we still worry the groups weren’t
                comparable beforehand.
              </p>
              <p>
                Together, (1) and (2) address both baseline equivalence and
                alternative causes, substantially reinforcing the causal story.
                Therefore, the combination is best. Answer: C.
              </p>
            </>
          }
        />

        <p>
          Takeaway: to strengthen a causal claim, tighten the link between the
          proposed cause and the effect and close off other paths to the same
          outcome. If the effect doesn’t show up without the cause, and the
          relationship can’t be reversed, your conclusion stands on much firmer
          ground.
        </p>
      </article>
    </main>
  );
}