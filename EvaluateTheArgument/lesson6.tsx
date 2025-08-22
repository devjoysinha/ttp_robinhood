import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.5.2 Evaluate the Argument: Open‑Ended Answer Choices",
  description:
    "Learn how to assess Evaluate the Argument choices that ask open‑ended questions. See why the Yes/No test sometimes doesn’t apply, how to test plausible answers, and how to avoid invented stories. Includes two MCQ drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.5.2 Answer Choices That Ask Other Types of Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Most Evaluate the Argument choices invite a straightforward Yes/No
          response or present two clearly opposed outcomes. Occasionally,
          however, a choice asks a different kind of question—one that isn’t
          neatly answered by Yes/No or two extremes. In those cases, you should
          think through a few reasonable answers to the question and check
          whether any of them would change how strongly the evidence supports
          the conclusion.
        </p>

        <MustKnow>
          When an evaluate choice is open‑ended, test it by proposing a few
          plausible answers and asking: Would any of those answers strengthen or
          weaken the conclusion? If not, the choice likely isn’t useful. Be
          careful not to rely on far‑fetched stories to make an irrelevant
          option seem important.
        </MustKnow>

        <section aria-labelledby="how-to-handle">
          <h3 id="how-to-handle" className="text-xl font-semibold text-white">
            How to handle open‑ended evaluate choices
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Propose a few reasonable answers the question might elicit.
            </li>
            <li>
              For each answer, decide whether the conclusion becomes more or
              less believable.
            </li>
            <li>
              If at least one answer strengthens and another weakens, the choice
              is useful for evaluation. If all answers leave the conclusion
              unchanged, it’s not useful.
            </li>
            <li>
              Don’t invent complicated, unsupported scenarios to force an impact
              on the argument.
            </li>
          </ul>
        </section>

        <MCQExample
          number={1}
          prompt={
            <>
              <p className="mb-3">
                City officials in San Alonso report that about 400,000
                fossil‑fuel vehicles are used in the city each day. Within five
                years, they expect 200,000 of the vehicles used daily to be
                electric. Therefore, air pollution in San Alonso will be far
                lower in five years than it is today.
              </p>
              <p className="mb-2">
                Which question would be most helpful for judging the prediction?
              </p>
            </>
          }
          options={[
            "What kinds of motor vehicles do San Alonso residents use?",
            "Is the daily vehicle count in San Alonso projected to exceed 600,000 in five years?",
          ]}
          correct="Is the daily vehicle count in San Alonso projected to exceed 600,000 in five years?"
          solution={
            <>
              <p className="mb-3">
                We want a question whose different answers would pull the
                conclusion in opposite directions.
              </p>
              <p className="mb-2">
                Choice A asks about vehicle types (cars, scooters, trucks).
                Regardless of type, replacing a fossil‑fuel vehicle with an
                electric one reduces emissions per vehicle. This doesn’t tell us
                whether the overall pollution level will drop substantially.
                It’s not the most diagnostic question.
              </p>
              <p className="mb-2">
                Choice B asks about the total number of vehicles used daily in
                five years. Let <InlineMath math="N_{\text{total}}" /> be the
                daily total in five years and{" "}
                <InlineMath math="N_{\text{EV}} = 200{,}000" /> the electric
                share. Then the number of polluting vehicles would be{" "}
                <InlineMath math="N_{\text{fossil}} = N_{\text{total}} - N_{\text{EV}}" />.
              </p>
              <div className="my-3">
                <BlockMath math={"\\text{If } N_{\\text{total}} > 600{,}000\\;\\Rightarrow\\; N_{\\text{fossil}} > 400{,}000"} />
              </div>
              <p className="mb-2">
                That would mean more polluting vehicles than today, which would
                undercut the conclusion. If{" "}
                <InlineMath math="N_{\text{total}} \le 600{,}000" />, then{" "}
                <InlineMath math="N_{\text{fossil}} \le 400{,}000" />, which
                supports lower pollution. Because the answers “Yes, more than
                600k” and “No, not more than 600k” drive the conclusion in
                opposite directions, Choice B is most useful for evaluation.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt={
            <>
              <p className="mb-3">
                Logic Truck Company introduced the TrucaTruk, a battery‑electric
                pickup aimed at rural Atruca. It’s built for rough roads and
                priced within reach of many rural residents. Therefore, once it
                goes on sale, many people in rural Atruca will buy one.
              </p>
              <p className="mb-2">
                Knowing which of the following would be most important for
                gauging the likelihood that this prediction is accurate?
              </p>
            </>
          }
          options={[
            "Why off‑road capability is desirable in rural Atruca",
            "Whether rural Atruca farmers currently sell goods to buyers in cities",
            "Whether anyone in rural Atruca can afford trucks that cost more than the TrucaTruk",
            "What share of rural Atrucans have access to charging for electric vehicles",
            "What kinds of cargo rural Atrucans typically haul in trucks",
          ]}
          correct="What share of rural Atrucans have access to charging for electric vehicles"
          solution={
            <>
              <p className="mb-3">
                The conclusion predicts strong sales. We need a factor whose
                possible answers would increase or decrease that likelihood.
              </p>
              <p className="mb-2">
                A reinforces what we already know (rough‑road capability
                matters) but doesn’t change demand on its own. B and E discuss
                activities or cargo types, which may be interesting but don’t
                directly determine whether people can buy and use an electric
                truck. C notes whether some buyers can afford even pricier
                trucks; that doesn’t affect whether many others can afford the
                TrucaTruk itself.
              </p>
              <p className="mb-2">
                D focuses on charging access. If most rural residents can charge
                EVs, sales prospects improve; if very few can, sales prospects
                drop. Because different answers to D push the conclusion in
                opposite directions, it’s the most informative choice for
                evaluation.
              </p>
            </>
          }
        />

        <MustKnow>
          A choice is “good for evaluation” when different reasonable answers to
          its question would make the conclusion more or less convincing. If all
          plausible answers leave the conclusion unchanged, the choice is not
          helpful—even if it’s on‑topic.
        </MustKnow>

        <p>
          Bottom line: when the Yes/No test doesn’t fit, generate a few
          realistic answers and see whether at least one strengthens and another
          weakens the argument. If so, you’ve found a useful evaluate choice.
        </p>
      </article>
    </main>
  );
}