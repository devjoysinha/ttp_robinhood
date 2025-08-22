import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "11.7.3 Don’t Pick a Choice That Addresses the Wrong Issue | Critical Reasoning",
  description:
    "Complete the Passage strategy: avoid choices that discuss a material but off‑focus issue. See a quick mini‑example and a full multiple‑choice drill with explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Critical Reasoning — Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7.3 Avoid Choices That Address a Different Material Issue
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Complete the Passage questions that outline a plan or action, it’s
          common to see attractive answers that tackle an issue related to the
          topic, yet not the issue the blank is trying to resolve. Your task is
          to finish the author’s line of reasoning, not to discuss every
          interesting consideration raised by the scenario.
        </p>

        <p>
          Real‑world situations can involve several important threads at once. A
          workplace initiative designed to boost morale might also reduce sick
          days, for instance. But if the author’s focus is morale, a tempting
          choice about sick days—even if reasonable—doesn’t complete the exact
          point being made.
        </p>

        <MustKnow>
          When a passage presents a plan, complete it with the point that
          addresses the author’s specific focus. Answers that shift to a
          different material issue—however relevant they seem—do not logically
          complete the passage.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example
          </h3>
          <p className="italic text-gray-200">
            Riverbend Nuts sells two products: bags of in‑shell nuts and bags of
            shelled nuts. The company’s shelling machine has failed and will be
            replaced with a newer, more efficient unit instead of being
            repaired. Delivery and installation will take about a week, during
            which no new shelled nuts will be produced. Still, all orders are
            expected to be fulfilled that week because ________.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Off‑focus choice: the long‑term gains from the new machine will
              outweigh the costs of the temporary disruption.
            </li>
            <li>
              Correct focus: the company already has enough shelled‑nut
              inventory to cover at least a week of orders.
            </li>
          </ul>
          <p>
            The first statement might be appealing, but it evaluates costs and
            benefits of replacing the machine. The blank, however, needs a fact
            that explains how orders will be filled during the week with no
            shelling—inventory does that job directly.
          </p>
        </section>

        <p>
          Keep this lens as you evaluate answer choices: does the option
          directly resolve the author’s targeted question in the final sentence,
          or does it pivot to a separate concern?
        </p>

        <MCQExample
          number={9}
          prompt="Which of the following most logically completes the passage? Rising global temperatures are expected to intensify drought in already arid regions. Some propose reducing temperatures by dispersing particles in the atmosphere to block a portion of incoming sunlight. However, even if the plan succeeds at cooling the planet, it could exacerbate drought because ________."
          options={[
            "temperature is not the only determinant of drought severity",
            "reduced sunlight could impair the growth of staple native plants in affected regions",
            "most rain begins as moisture evaporated from sun‑warmed ocean surfaces",
            "the plan treats symptoms rather than the underlying causes of the problem",
            "many drought‑stricken nations lack funds to implement the plan",
          ]}
          correct="most rain begins as moisture evaporated from sun‑warmed ocean surfaces"
          solution={
            <>
              <p>
                The passage sets up an apparent tension: blocking sunlight could
                lower global temperatures—a good thing for drought—but might at
                the same time worsen drought. To complete the thought, we need a
                mechanism that links blocking sunlight to less rainfall.
              </p>
              <p>
                Choice C supplies the missing link. Sunlight drives evaporation
                from the oceans, which feeds atmospheric moisture and ultimately
                precipitation. Blocking sunlight reduces that evaporation, so
                there’s less moisture available to fall as rain in dry regions.
                In simple terms, evaporation scales with incoming solar energy{" "}
                <InlineMath math={"E \\propto I"} />, and rainfall opportunities
                scale with evaporation{" "}
                <InlineMath math={"R \\propto E"} />. Cutting sunlight lowers{" "}
                <InlineMath math={"I"} />, which lowers{" "}
                <InlineMath math={"E"} /> and thus{" "}
                <InlineMath math={"R"} />, worsening drought.
              </p>
              <p>
                Why the others fail:
                <br />
                A concedes other factors matter but doesn’t explain why drought
                would get worse. B addresses plant growth, not rainfall. D
                criticizes the type of solution (symptom vs. cause) but doesn’t
                show a worsening effect. E discusses feasibility, not the
                outcome if the plan is used. Only C directly connects the plan
                to reduced precipitation.
              </p>
            </>
          }
        />

        <p>
          Bottom line: target the exact hole the author leaves. If a choice
          shifts to a different issue—costs, feasibility, or general critiques—it
          may be reasonable, but it won’t complete the passage’s specific line
          of reasoning.
        </p>
      </article>
    </main>
  );
}