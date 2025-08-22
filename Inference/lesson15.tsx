import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout) for proper rendering.
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: '7.7 “Except” Inference Questions | Critical Reasoning',
  description:
    'Learn how EXCEPT/NOT inference prompts flip the task: four choices must follow from the stimulus; the correct choice does not. Includes two GMAT-style examples with full reasoning.',
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, output: "html" });
  return (
    <span
      aria-label={ariaLabel}
      className="inline-block align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  const options23 = [
    "Manufacturer W’s average selling price per unit went down relative to the prior year.",
    "The profit ratio (T’s profit ÷ W’s profit) was higher last year than the year before.",
    "The units-sold ratio (W’s units ÷ T’s units) was higher last year than two years prior.",
    "The revenue ratio (T’s revenue ÷ W’s revenue) was higher last year than two years prior.",
    "Manufacturer T’s average selling price per unit went up relative to the prior year.",
  ];

  const options24 = [
    "A large package delivered uptown by van had to be handled by Boxrunners.",
    "A small package delivered to midtown by bicycle might have been delivered by Delivereez.",
    "A large package delivered to midtown by van was delivered by Delivereez.",
    "A medium package delivered to midtown by pedicab was handled by Delivereez.",
    "A large package delivered downtown by van was not handled by Boxrunners.",
  ];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. Inference</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.7 EXCEPT/NOT Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test writers often raise the difficulty of Inference questions by placing EXCEPT or
          not in the stem. When that happens, your job flips: four choices must follow from
          the passage and are therefore wrong, while the correct answer is the one that is not guaranteed by the text.
        </p>

        <MustKnow>
          For EXCEPT/NOT inference prompts, exactly four options must be supported by the
          stimulus. Those four are incorrect. The correct choice is the one that is not
          compelled by the passage—i.e., it could be false or is not necessarily true.
        </MustKnow>

        <p>
          These items frequently hinge on quantifiers and scope words such as “always,” “never,”
          and “sometimes.” Keep your attention on what the premises require—and nothing more.
        </p>

        <MustKnow>
          A reliable tactic is the negation test: ask whether the stimulus can remain true while
          a choice is false. If a choice can be false without contradicting any premise, it is a valid EXCEPT/NOT answer.
        </MustKnow>

        <section aria-labelledby="ex23">
          <h3 id="ex23" className="sr-only">
            Example 23
          </h3>

          <MCQExample
            number={23}
            prompt={
              <>
                Last year, Manufacturer W sold more units than the year before, yet its total
                revenue was unchanged. In the same period, Manufacturer T sold fewer units than
                the prior year, but its total revenue increased. Which of the following can be
                properly inferred from this information EXCEPT?
              </>
            }
            options={options23}
            correct={options23[1]}
            solution={
              <>
                <p>
                  Let U represent units sold, P the average price per unit, and R total revenue.
                  Revenue factors as{" "}
                  <KInline ariaLabel="R equals U times P" expr={"R = U \\times P"} />.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>W: U increases, R stays the same ⇒ P must decrease.</li>
                  <li>T: U decreases, R increases ⇒ P must increase.</li>
                </ul>

                <p className="mt-4">
                  Choice A: “W’s average unit price decreased.” Must be true because W’s revenue
                  held steady while units rose. True ⇒ incorrect for EXCEPT.
                </p>
                <p>
                  Choice B: “The profit ratio T/W rose vs. the year before.” Profit depends on
                  costs, not just revenue. We have no cost data, so this need not be true. This is
                  the only option not guaranteed by the premises. Correct answer.
                </p>
                <p>
                  Choice C: “The units ratio W/T increased.” Numerator up, denominator down ⇒ the
                  ratio must increase. True ⇒ incorrect for EXCEPT.
                </p>
                <p>
                  Choice D: “The revenue ratio T/W increased.” T’s R went up while W’s R stayed
                  flat ⇒ the ratio must rise. True ⇒ incorrect for EXCEPT.
                </p>
                <p>
                  Choice E: “T’s average unit price increased.” With U down and R up, P must rise.
                  True ⇒ incorrect for EXCEPT.
                </p>
                <p className="mt-2">Answer: B.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex24">
          <h3 id="ex24" className="sr-only">
            Example 24
          </h3>

          <MCQExample
            number={24}
            prompt={
              <>
                Delivereez and Boxrunners are the only delivery companies in town. Delivereez uses
                bicycles for small packages, pedicabs for medium packages, and vans for large
                packages, and serves only downtown and midtown. Boxrunners uses bicycles for small
                packages and vans for all other sizes, and serves only midtown and uptown. If the
                statements above are true, which of the following is not an inference that must hold?
              </>
            }
            options={options24}
            correct={options24[2]}
            solution={
              <>
                <p>
                  Map the rules:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Only Delivereez goes downtown; only Boxrunners goes uptown; both cover midtown.</li>
                  <li>Both use bikes for small. Only Delivereez uses pedicabs (medium). Both use vans for large.</li>
                </ul>

                <p className="mt-4">
                  Choice A: Large, uptown, van ⇒ only Boxrunners serves uptown ⇒ must be Boxrunners. True.
                </p>
                <p>
                  Choice B: Small, midtown, bike ⇒ both firms deliver small by bike in midtown ⇒ could be Delivereez. True.
                </p>
                <p>
                  Choice C: Large, midtown, van ⇒ both firms deliver large by van in midtown ⇒ could be either, so it is not forced to be Delivereez. Not necessarily true. Correct.
                </p>
                <p>
                  Choice D: Medium, midtown, pedicab ⇒ only Delivereez uses pedicabs ⇒ must be Delivereez. True.
                </p>
                <p>
                  Choice E: Large, downtown, van ⇒ only Delivereez serves downtown ⇒ cannot be Boxrunners. True.
                </p>
                <p className="mt-2">Answer: C.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in EXCEPT/NOT inference prompts, verify which statements are compelled by the
          premises. The four “musts” are traps—the outlier is the choice that isn’t guaranteed.
        </p>
      </article>
    </main>
  );
}