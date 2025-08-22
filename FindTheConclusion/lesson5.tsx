import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath, BlockMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '8.3.2 Inference vs. Find the Conclusion | Critical Reasoning',
  description:
    'See how Inference questions differ from Find‑the‑Conclusion questions: truth requirements, where the support comes from, how to spot stems, and what assumptions are allowed. Includes two quick practice examples.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Find the Conclusion
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.3.2 How Inference Questions Differ from Find‑the‑Conclusion Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Both Inference and Find‑the‑Conclusion (FTC) questions ask you to extract a takeaway from a short argument. However, they measure different things: how certain your takeaway must be, where the support comes from, and how the question stem is phrased.
        </p>

        <MustKnow>
          <>
            <p className="mb-3">
              Truth requirement:
            </p>
            <div className="rounded-md bg-gray-900/40 p-3">
              <div className="mb-2">
                <strong className="text-white">Inference</strong> must be guaranteed by the premises:
              </div>
              <BlockMath math="P \Rightarrow C \quad\text{(C must be true if P are true)}" />
              <div className="mt-4 mb-2">
                <strong className="text-white">Find‑the‑Conclusion</strong> is the conclusion best supported by the passage (it need not be certain):
              </div>
              <BlockMath math="P \Rightarrow \text{best‑supported } C \quad\text{(C is strongly suggested by P)}" />
            </div>
          </>
        </MustKnow>

        <section aria-labelledby="truth-requirement" className="space-y-4">
          <h3 id="truth-requirement" className="text-xl font-semibold text-white">
            1) Must it be true, or just strongly supported?
          </h3>
          <p>
            For an Inference question, the correct answer cannot be false if the stimulus is true. In contrast, an FTC answer is the option that follows most naturally from the overall passage, even though another scenario could still make it false.
          </p>

          <MCQExample
            number={1}
            prompt="A bakery’s total number of cakes this morning equals yesterday’s total. Today there are more chocolate cakes than yesterday. Which choice must be true?"
            options={[
              'There are more cakes in the shop today.',
              'There are fewer non‑chocolate cakes today.',
              'There are fewer cakes in the shop today.',
              'There are fewer chocolate cakes today.',
              'There is not enough information.',
            ]}
            correct="There are fewer non‑chocolate cakes today."
            solution={
              <>
                <p>
                  Let T be total cakes and C be chocolate cakes. We know <InlineMath math="T_{\text{today}} = T_{\text{yesterday}}" /> and <InlineMath math="C_{\text{today}} > C_{\text{yesterday}}" />. Since totals are equal, the non‑chocolate portion must decrease to offset the increase in chocolate cakes. Thus, non‑chocolate cakes are fewer today.
                </p>
                <p className="mt-2">
                  This is an Inference because it must be true given the facts.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ftc-example" className="space-y-4">
          <h3 id="ftc-example" className="text-xl font-semibold text-white">
            2) A “best supported” conclusion can still be wrong
          </h3>
          <p>
            If most football attendees in a town are under 35 and that age group is leaving the town rapidly (with the trend expected to continue), what should we predict? The most sensible conclusion is that attendance will likely fall—yet it’s not guaranteed if new fans replace them.
          </p>

          <MCQExample
            number={2}
            prompt="In Boselton, most football attendees are under 35. Many under‑35 residents have started moving away and are expected to keep leaving. Which option is most strongly supported?"
            options={[
              'Attendance at football games will likely decline.',
              'Attendance will certainly increase.',
              'Attendance cannot change.',
              'Only people 35+ will attend going forward.',
              'All teams in Boselton will relocate.',
            ]}
            correct="Attendance at football games will likely decline."
            solution={
              <>
                <p>
                  If the bulk of attendees is shrinking and that outflow continues, the supported prediction is that attendance will drop. Still, it’s not guaranteed: older residents might start attending more, or departing fans could travel back for games. That uncertainty is why this is an FTC answer, not an Inference.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          The correct Inference answer must be true if the stimulus is true. The correct FTC answer is the choice the passage supports best, even if it could turn out false in some reasonable scenarios.
        </MustKnow>

        <section aria-labelledby="where-support" className="space-y-4">
          <h3 id="where-support" className="text-xl font-semibold text-white">
            3) Where does the support come from?
          </h3>
          <p>
            An Inference answer can be derived from any single sentence or part of the passage. An FTC answer is typically the main takeaway that the entire passage points to.
          </p>
          <p>
            Consider this argument (paraphrased): Wolves once kept the deer population below the land’s capacity. Two years ago, wolves were driven away. Now the deer population exceeds the area’s long‑term capacity.
          </p>
          <p className="mt-2">Valid inferences include:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>The deer are currently eating vegetation faster than it can regrow.</li>
            <li>There are more deer now than the area can support long term.</li>
            <li>There are fewer wolves now than two years ago.</li>
            <li>Wolves can suppress a deer population compared with no wolves.</li>
          </ul>
          <p className="mt-2">
            All of these are valid inferences, yet none is necessarily the passage’s primary conclusion. In an FTC question, the correct answer is usually the main conclusion supported by the argument as a whole.
          </p>
        </section>

        <MustKnow>
          Inference answers may come from any part of the text; FTC answers are usually the overall argument’s main point.
        </MustKnow>

        <section aria-labelledby="stems" className="space-y-4">
          <h3 id="stems" className="text-xl font-semibold text-white">
            4) How stems signal the task
          </h3>
          <p>
            Stems for Inference often ask what can be properly inferred or what conclusion can be properly drawn from the statements. The tone is strict—hinting that the correct answer must be entailed by the text.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>If the statements above are true, which of the following can be properly inferred?</li>
            <li>If the statements above are true, which conclusion can be properly drawn?</li>
          </ul>
          <p>
            Stems for FTC usually ask what is most strongly supported, best supported, or most logically supported by the passage—signaling that we seek the option with the strongest support, not certainty.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Which of the following is most strongly supported by the statements?</li>
            <li>Which hypothesis is best supported by the information given?</li>
            <li>The considerations above most strongly support which of the following claims?</li>
          </ul>
        </section>

        <MustKnow>
          Inference stems emphasize what follows from the statements. FTC stems emphasize what is supported by the statements (often “most strongly” or “best”).
        </MustKnow>

        <section aria-labelledby="assumptions" className="space-y-4">
          <h3 id="assumptions" className="text-xl font-semibold text-white">
            5) Assumptions: allowed or not?
          </h3>
          <p>
            Inferences cannot rely on new assumptions: if an Inference answer needs an extra premise, it’s out. FTC answers, however, may rest on reasonable background assumptions because we’re picking what the passage supports best, not what is ironclad.
          </p>

          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-white">Revisiting the examples:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Bakery example (Inference): Given equal totals and more chocolate today, it must be that non‑chocolate decreased. No extra assumptions are needed.
              </li>
              <li>
                Boselton example (FTC): The prediction that attendance will fall assumes, among other things, that 35+ residents won’t fully replace under‑35 attendees and that departing residents won’t return just to attend games. Those are plausible—but not guaranteed—assumptions.
              </li>
            </ul>
          </div>
        </section>

        <MustKnow>
          Inference = no new assumptions; FTC = reasonable assumptions are allowed because we want the most supported conclusion, not absolute truth.
        </MustKnow>

        <section aria-labelledby="summary" className="space-y-3">
          <h3 id="summary" className="text-xl font-semibold text-white">
            Quick wrap‑up
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Inference: must be true if the stimulus is true <InlineMath math="(P \Rightarrow C)" />.
            </li>
            <li>
              FTC: pick the conclusion best supported by the entire passage (may still be false).
            </li>
            <li>Inference can come from any part of the text; FTC is typically the passage’s main point.</li>
            <li>Stem language is your friend—“properly inferred” vs. “most strongly supported.”</li>
            <li>Inference forbids added assumptions; FTC can lean on reasonable ones.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}