import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: '3.19 Detail "EXCEPT" Questions | Reading Comprehension',
  description:
    'Learn how to approach RC Detail stems that contain "EXCEPT": why four answers are supported by the passage (and therefore wrong) and how to find the only unsupported statement. Includes a full example with explanation.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.19 Detail “EXCEPT” Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Detail stems sometimes flip the task by including the word “EXCEPT.” In these
          problems, your job is to locate the one choice that is not stated in the passage
          or not directly supported by it.
        </p>

        <MustKnow>
          When a Detail stem contains “EXCEPT,” four choices will be statements that the
          passage explicitly supports, and those four are incorrect. The only correct
          answer is the statement that is not backed by the passage.
        </MustKnow>

        <p>
          Because “EXCEPT” reverses the usual Detail-task, keep that constraint front and
          center. Do not lapse into picking something you can find in the text—those are
          the traps.
        </p>

        <section
          aria-labelledby="rc-passage-title"
          className="rounded-lg border border-gray-700 bg-gray-900 p-4 md:p-5"
        >
          <h3
            id="rc-passage-title"
            className="mb-3 text-base font-semibold text-white"
          >
            Passage
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Conventional cars create greenhouse gases while running because their
              engines burn fossil fuels. Electric vehicles (EVs), by contrast, draw power
              from the grid and do not release exhaust while in motion.
            </p>
            <p>
              Building a midsize gas-powered car generates a few tons of emissions during
              production: aluminum is smelted, chips are fabricated, parts are installed,
              and the car is assembled. Constructing a comparably sized EV typically
              produces more emissions up front because, in addition to those same factory
              steps, the metals used in EV lithium‑ion batteries must be mined and
              processed using heavy equipment that runs on fossil fuels. As a result, by
              the time the vehicles reach the showroom, manufacturing an EV has produced
              roughly $70\\%$ more greenhouse gases than manufacturing the traditional car.
            </p>
            <p>
              During ownership, the balance shifts. On average, generating electricity to
              power an EV accounts for about $35\\%$ of the emissions associated with
              producing and burning the fuel that powers a typical gas car. After about
              $20{,}000$ miles, the totals are about even. By $100{,}000$ miles, the gas
              car is associated with roughly $80\\%$ more cumulative emissions than the EV,
              and by $200{,}000$ miles, the totals are near $80$ tons for the gas car and
              about $40$ tons for the EV.
            </p>
          </div>
        </section>

        <MCQExample
          number={15}
          prompt="All of the following are explicitly cited in the passage as sources of greenhouse gas emissions during the manufacture of EVs EXCEPT:"
          options={[
            "smelting aluminum",
            "fabricating electronic chips",
            "mining and processing metals",
            "installing components",
            "burning fuel to generate electricity",
          ]}
          correct="burning fuel to generate electricity"
          solution={
            <>
              <p>
                The question asks for the item that is not presented as a contributor to
                emissions during EV manufacturing.
              </p>
              <p>
                The passage states that EVs undergo the same production steps as
                traditional cars—aluminum smelting, chip fabrication, component
                installation, and final assembly—and adds the mining/processing of battery
                metals with fossil‑fuel‑powered heavy machinery. Each of those steps is
                linked to greenhouse gas emissions during manufacturing. Therefore,
                “smelting aluminum,” “fabricating electronic chips,” “installing
                components,” and “mining and processing metals” all appear as
                manufacturing emissions sources.
              </p>
              <p>
                “Burning fuel to generate electricity,” however, is mentioned in the
                context of vehicle operation, not manufacturing. The discussion of grid
                electricity and the $35\\%$ figure pertains to powering an EV after it’s
                built. Since the prompt is limited to emissions during the manufacture of
                EVs, this item is not expressly cited as a manufacturing factor and is
                thus the correct EXCEPT choice.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: in “EXCEPT” Detail problems, confirm that each tempting statement
          is actually asserted in the relevant portion of the passage. If four options are
          text‑supported, the remaining, unsupported one is your answer.
        </p>
      </article>
    </main>
  );
}