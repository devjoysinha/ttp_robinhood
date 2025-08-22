import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX components on the client
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "6.3.3 Correlation vs. Causation | Critical Reasoning",
  description:
    "Understand why correlation alone doesn’t prove causation. Learn positive vs. negative correlation, see a classic spurious-correlation example, and practice with two GMAT-style multiple‑choice questions with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3.3 Confusing Correlation with Causation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two quantities are said to be correlated when they move together in a
          predictable way. A positive correlation means the variables rise and
          fall together (
          <InlineMath math={"r > 0"} />), while a negative correlation means
          they move in opposite directions (
          <InlineMath math={"r < 0"} />).
        </p>

        <MustKnow>
          Correlation only describes how variables co-move; it does not, by
          itself, establish that one variable causes the other. In short:
          <InlineMath math={"\\; r \\ne 0 \\;\\not\\Rightarrow\\; \\text{causation}"} />.
        </MustKnow>

        <p>
          It’s easy to be misled by eye‑catching graphs. For instance, over a
          stretch of years, the divorce rate in one region might track almost
          perfectly with national margarine consumption. The visual match is
          striking, but there’s no plausible causal mechanism there—this is a
          textbook example of a spurious correlation that arises by chance.
        </p>

        <MustKnow>
          A strong correlation—positive or negative—can happen for many reasons:
          coincidence, a third factor driving both variables, or even the effect
          causing what we took to be the cause. You need more than correlation
          to claim causation.
        </MustKnow>

        <section aria-labelledby="practice-1" className="pt-2">
          <h3 id="practice-1" className="sr-only">
            Practice Question 1
          </h3>
          <MCQExample
            number={7}
            prompt="A venue consultant argues: “Banquet halls that want to host more events should raise their prices. Month after month, halls with higher average prices also report more events.” Which option most undermines the consultant’s reasoning?"
            options={[
              "A hall can boost profit by curating a higher‑margin food and beverage lineup.",
              "Venues discount less during peak event months because demand is already high.",
              "Handling more events does not always translate into higher profit.",
              "Customers often treat higher prices as a signal of higher quality.",
              "Some venues are already at capacity and don’t seek additional bookings.",
            ]}
            correct="Venues discount less during peak event months because demand is already high."
            solution={
              <>
                <p>
                  The argument infers cause from a correlation: higher prices
                  supposedly lead to more events. But if demand is the real
                  driver—busy months bring more inquiries—venues can charge more
                  simply because they don’t need to discount. That reverses the
                  direction: more demand → higher prices, not the other way
                  around. So the choice about discounting less in busy months
                  most directly weakens the claim.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Profit/margin talk and capacity concerns are out of scope;
                    the conclusion is about “more events,” not profit or
                    whether some venues want more bookings.
                  </li>
                  <li>
                    The “higher price signals quality” option would strengthen,
                    not weaken, the claim.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="practice-2" className="pt-2">
          <h3 id="practice-2" className="sr-only">
            Practice Question 2
          </h3>
          <MCQExample
            number={8}
            prompt="Studies find that societies with higher average education levels have fewer children per adult on average. Therefore, expanding access to education should slow population growth. Which option most supports this conclusion?"
            options={[
              "Parents with many children often struggle to cover school costs.",
              "More educated people tend to know more about effective child‑rearing.",
              "Governments that strongly promote education are not the same ones that strongly promote small families.",
              "Better‑educated children tend to cause fewer problems for their parents.",
              "People who have kids as teenagers are likelier to leave school and to have more children than those who start later.",
            ]}
            correct="Governments that strongly promote education are not the same ones that strongly promote small families."
            solution={
              <>
                <p>
                  The conclusion assumes education itself helps lower fertility.
                  A common alternative explanation is a confounder such as
                  government policy that drives both outcomes—more education and
                  smaller families. The correct choice rules out that confound:
                  it says the governments pushing education are not the same
                  ones pushing small families. Eliminating a plausible third
                  factor makes the causal story (education → fewer children)
                  more credible.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Statements about cost burdens for larger families or about
                    teen parenthood introduce alternative causes or reverse
                    causation, which would weaken rather than strengthen.
                  </li>
                  <li>
                    Benefits of education (e.g., better child‑rearing or easier
                    parenting) don’t directly show that education itself reduces
                    fertility.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: correlation is about co‑movement, not cause. To argue
          causation, rule out reverse causality and confounders, and look for
          additional evidence that links the proposed cause to the effect.
        </p>
      </article>
    </main>
  );
}