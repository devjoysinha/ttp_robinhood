import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';
import { InlineMath, BlockMath } from 'react-katex';
import { MustKnow } from '@/components/ui/MustKnow';
import { MCQExample } from '@/components/ui/MCQExample';

export const metadata: Metadata = {
  title: '3.9.5 Choices That Seem to Attack Premises | Critical Reasoning',
  description:
    'Learn why “attacking a premise” never weakens on GMAT Weaken questions, how trap answers are crafted, and what real weakeners look like. Includes two multiple‑choice drills with full reasoning.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">3. Weaken the Argument</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.9.5 Answer Choices That Appear to Attack Premises
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On Weaken questions, premises are facts you must accept. So a choice that tries to poke a hole in a
          stated premise is never the correct weakener—even if it feels contrary to the real world. Good weakeners
          go after the link from the given facts to the author’s prediction, not the facts themselves.
        </p>

        <MustKnow>
          Premises are off‑limits on the GMAT: you take them as true. A choice that looks like it contradicts a
          premise does not weaken the argument. The right move is to reduce confidence in the step from premise to
          conclusion—by adding an alternative explanation, a missing obstacle, a counterexample, or a new factor the
          author ignored.
          <div className="mt-4 rounded-md border border-gray-700 bg-gray-900/40 p-3 text-sm text-gray-200">
            <div className="sr-only" id="logic-equation-desc">
              Logical form reminder: We accept the premise as true; we question whether the conclusion follows.
            </div>
            <BlockMath aria-describedby="logic-equation-desc">
              {\`\\text{Premise} \\Rightarrow \\text{Conclusion} \\quad\\;\\;\\text{(challenge the arrow, not the premise)}\`}
            </BlockMath>
          </div>
        </MustKnow>

        <section aria-labelledby="demo-1" className="space-y-3">
          <h3 id="demo-1" className="text-xl font-semibold text-white">Quick demo 1</h3>
          <p className="italic text-gray-300">
            FleetStride makes gear for distance runners. The number of marathon entrants has been climbing for years
            and is expected to keep rising. Therefore, FleetStride’s sales will continue to grow.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Trap that seems to attack a premise: “No more marathons were held last year than the year before.” This
              appears to clash with rising participation, but the premise says the number of runners is increasing; we
              must accept that. Event count is irrelevant to the forecasted sales.
            </li>
            <li>
              Real weakener: “PacePro, which sells nearly identical gear, just cut prices far below FleetStride’s.” This
              introduces a competitive factor that undermines the prediction that sales must rise.
            </li>
          </ul>
        </section>

        <section aria-labelledby="demo-2" className="space-y-3">
          <h3 id="demo-2" className="text-xl font-semibold text-white">Quick demo 2</h3>
          <p className="italic text-gray-300">
            A new technique for harvesting fruit has clear advantages over commonly used methods. So, it will soon
            become the most widely adopted.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Trap that seems to attack a premise: “With a top‑tier crew, the new method is only slightly better.” The
              premise already asserts the new method is clearly superior overall; we don’t dispute that on test day.
            </li>
            <li>
              Real weakener: “The equipment required to switch is too expensive for most farms.” This adds a blocking
              cost the author ignored, undercutting the prediction.
            </li>
          </ul>
        </section>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="text-gray-200">
            Heuristic:
            <InlineMath className="mx-2">{'\\;\\text{If a choice says “the premise is wrong,” discard it.}\\;'}</InlineMath>
            Look instead for information that makes the conclusion less likely given the (accepted) facts.
          </p>
        </div>

        <MCQExample
          number={30}
          prompt="When firms in expanding industries experience profit growth, they generally increase headcount. VoltCore, a battery maker, has recently seen a sharp rise in profits while the industry grows overall. Therefore, VoltCore is expected to hire soon. Which of the following, if true, most calls the prediction into question?"
          options={[
            'Until three years ago, VoltCore had never posted an annual profit.',
            'Growth in the battery sector is slower than growth in some other industries.',
            "VoltCore's profit growth last year was smaller (in percentage terms) than the year before.",
            'Engineers at VoltCore recently automated one of the company’s most labor‑intensive manufacturing steps.',
            'Only one of VoltCore’s five divisions is currently showing strong profit gains.',
          ]}
          correct="Engineers at VoltCore recently automated one of the company’s most labor‑intensive manufacturing steps."
          solution={
            <>
              <p>
                We accept the premise that profits are rising. To weaken, show hiring may still be unnecessary. If a
                major labor‑heavy process was automated, the company can expand output without adding people—directly
                undercutting the hiring prediction. The other choices are irrelevant history (A), comparisons to other
                industries (B), slower but still positive growth (C), or distribution of growth across divisions (E);
                none of these breaks the link from “profit growth” to “must hire now.”
              </p>
            </>
          }
        />

        <MCQExample
          number={31}
          prompt="Electric motorcycles used to be heavy, underpowered, and short‑range. Now they’re nearly as light as gas bikes, perform exceptionally, and are expected to soon match gas bikes for range. They’re also simpler to maintain and cheaper to run. Hence, electric models will outsell gas motorcycles by a wide margin within the next decade. Which statement, if true, most strongly undermines the prediction?"
          options={[
            'By choosing a smaller, basic gas motorcycle, a rider can come close to the low operating costs of an electric bike.',
            'Matching the range of gas motorcycles will require significant innovation in battery design.',
            'A substantial share of riders choose bikes for sensory qualities, such as the distinctive exhaust sound some gas engines produce.',
            'Some of the simplest gas motorcycles are not much harder to maintain than electric ones.',
            'Past sales show electric motorcycles have not been popular with younger riders.',
          ]}
          correct="A substantial share of riders choose bikes for sensory qualities, such as the distinctive exhaust sound some gas engines produce."
          solution={
            <>
              <p>
                The argument leans on quantifiable advantages (weight, performance, range, upkeep, cost). If many buyers
                prioritize non‑quantitative sensory appeal unique to gas bikes, those numeric advantages may not drive
                purchases—reducing confidence in the “far outsell” prediction. Choices (A) and (D) nibble at premises
                but still concede electrics retain an advantage; (B) questions feasibility yet the premise declares
                parity will occur; (E) relies on past taste when the product is changing, so it doesn’t reliably predict
                future demand.
              </p>
            </>
          }
        />

        <MustKnow>
          Beware of “premise‑attackers.” If a choice contradicts a stated fact, it cannot be the correct weakener on the
          GMAT. Favor answers that reveal an overlooked complication, alternative cause, cost, incentive, or preference
          that loosens the connection from the accepted facts to the conclusion.
        </MustKnow>
      </article>
    </main>
  );
}