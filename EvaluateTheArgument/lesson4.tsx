import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "9.5 Handling Four Answer‑Choice Formats | Evaluate the Argument (CR)",
  description:
    "Learn how to approach the four common answer‑choice formats in Evaluate‑the‑Argument questions. Includes two targeted multiple‑choice drills with complete solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.5 How to Handle the Four Answer‑Choice Formats
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Evaluate‑the‑Argument questions, the correct choice identifies what
          piece of information would help you judge whether the reasoning is
          strong or weak. Those choices usually show up in one of four formats:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Questions that can be answered “Yes” or “No.”</li>
          <li>
            Questions that have two possible answers that are not “Yes/No” (for
            example, Option A vs. Option B).
          </li>
          <li>Questions of other types (ranges, quantities, comparisons, etc.).</li>
          <li>Statements rather than questions.</li>
        </ul>

        <p>
          You may already be familiar with the classic Yes/No test. Below we’ll
          focus on practical ways to handle the other formats as well, while
          keeping the same core idea in mind.
        </p>

        <MustKnow>
          A choice is useful for evaluation only if different plausible answers
          push the argument in opposite directions—one makes it look better,
          the other worse. In short, look for a split outcome:
          <span className="ml-1 inline-block font-semibold text-white">
            <InlineMath math={"\\Delta_{\\text{answer 1}} \\cdot \\Delta_{\\text{answer 2}} < 0"} />
          </span>
          . If both answers would either help, hurt, or do nothing, the choice
          doesn’t evaluate the argument.
        </MustKnow>

        <section aria-labelledby="format-handling" className="space-y-4">
          <h3 id="format-handling" className="text-xl font-semibold text-white">
            How to work each format
          </h3>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Yes/No questions: Apply the Yes/No test. If “Yes” strengthens while
              “No” weakens (or vice versa), it’s a strong contender.
            </li>
            <li>
              Two non–Yes/No answers (A vs. B): Treat the two outcomes like
              “Yes” and “No.” If outcome A helps while outcome B hurts, the
              choice is doing real evaluative work.
            </li>
            <li>
              Other question types (how many, how much, which is higher, etc.):
              Identify high/low or alternative outcomes and check whether
              opposite ends of the scale would help versus hurt the argument.
            </li>
            <li>
              Statements (not phrased as questions): Convert the statement into
              two competing possibilities (true vs. false, present vs. absent,
              high vs. low) and test whether those possibilities move the
              argument’s strength in opposite directions.
            </li>
          </ul>
        </section>

        <MCQExample
          number={61}
          prompt="City officials claim that expanding the downtown bike‑lane network will meaningfully reduce weekday traffic congestion. Which of the following would be most useful to determine in order to evaluate the claim?"
          options={[
            "Whether local retailers near existing bike lanes employ more full‑time staff than those in other parts of the city",
            "Whether a majority of current car commuters could switch to biking for their typical commute distances",
            "Whether the average weekend tourist spends more money downtown than the average weekday worker",
            "Whether ride‑share drivers support the plan to expand the bike‑lane network",
            "Whether the city’s total population is expected to increase next year",
          ]}
          correct="Whether a majority of current car commuters could switch to biking for their typical commute distances"
          solution={
            <>
              <p>
                We need information that would change how convincing the claim
                is, depending on how the information turns out. If many
                car‑commuters can feasibly switch to biking (distances, safety,
                access), the proposal looks stronger; if few can, it looks
                weaker. That split makes the second choice evaluative.
              </p>
              <p>
                The other options don’t create a help‑vs‑hurt split about weekday
                traffic: staff counts, tourist spending, driver opinions, and
                population trend all fail to directly test whether car traffic
                will drop due to bike‑lane expansion.
              </p>
            </>
          }
        />

        <MCQExample
          number={62}
          prompt="A nutrition company asserts that its new high‑protein snack increases afternoon productivity for office workers. Which question would best help you evaluate this argument?"
          options={[
            "Do workers like the taste of the new snack?",
            "Were workers who ate the snack assigned easier tasks in the afternoon than those who did not?",
            "How many flavors of the snack are currently available?",
            "Are the snacks packaged in recyclable materials?",
            "Do the snacks cost less than the company’s previous snack options?",
          ]}
          correct="Were workers who ate the snack assigned easier tasks in the afternoon than those who did not?"
          solution={
            <>
              <p>
                If snack‑eaters were given easier tasks, higher productivity
                might be due to task difficulty rather than the snack. If tasks
                were comparable, the snack explanation gets stronger. These
                opposite outcomes make this the best evaluative question.
              </p>
              <p>
                Taste, flavors, packaging, and price are not tied to whether the
                snack itself causes a productivity change.
              </p>
            </>
          }
        />

        <section aria-labelledby="quick-checklist" className="space-y-3">
          <h3 id="quick-checklist" className="text-xl font-semibold text-white">
            Quick checklist for Evaluate choices
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Identify the exact conclusion you’re judging.</li>
            <li>
              For the choice, isolate two plausible outcomes (Yes/No, A/B,
              high/low, true/false).
            </li>
            <li>
              Ask: Would one outcome make the argument better and the other make
              it worse? If not, eliminate.
            </li>
            <li>
              Prefer choices that directly affect the causal link or key
              assumption—not just background facts.
            </li>
          </ul>
        </section>

        <MustKnow>
          The right evaluate choice creates a clear fork in the road: one answer
          increases confidence in the conclusion; the other reduces it. If both
          answers point the same way, it’s not evaluating the argument.
        </MustKnow>
      </article>
    </main>
  );
}