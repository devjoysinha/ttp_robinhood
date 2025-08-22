import type { Metadata } from "next";
import Script from "next/script";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "2.9.6 Assumption Type 6: Time‑Shift Changes | Critical Reasoning",
  description:
    "Learn the time‑shift assumption for GMAT Critical Reasoning: when evidence from one time period is used to support a conclusion about another. Includes a quick CEO example and a full multiple‑choice drill with explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX CSS/JS (lightweight, only when needed) */}
      <Script
        id="katex-css"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var l=document.createElement('link');
              l.rel='stylesheet';
              l.href='https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
              document.head.appendChild(l);
            })();
          `,
        }}
      />
      <Script
        id="katex-js"
        src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="katex-auto-render"
        src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js"
        strategy="afterInteractive"
        onLoad={`
          if (window.renderMathInElement) {
            window.renderMathInElement(document.body, {
              delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
              ]
            });
          }
        `}
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.6 Assumption Type 6: When Changes Over Time Can Break the Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many arguments blend time frames: they use yesterday’s facts to predict tomorrow’s outcomes,
          or today’s observations to explain what happened long ago. Whenever a conclusion about one
          time period rests on evidence from a different time period, a hidden time‑consistency assumption
          is in play.
        </p>

        <p>
          Put more formally, if the evidence and the conclusion sit in different time slots,
          the author is assuming that any relevant conditions didn’t change in a way that would
          disconnect that evidence from the conclusion.
        </p>

        <MustKnow>
          When evidence is drawn from one time period and the claim targets another, the argument
          relies on stability over time. If a key factor could have shifted in the interim, the
          reasoning may no longer hold.
        </MustKnow>

        <p>
          A useful way to see this is to separate what is measured from what really matters.
          For example, suppose we care about the true number of events $N_t$ at time $t$,
          but we only observe reports:
        </p>

        <p className="text-gray-200">
          $$\\text{Reports}_t = r_t \\cdot N_t$$
        </p>

        <p>
          Here $r_t$ is the reporting rate at time $t$. If $r_t$ changes across time,
          then equal numbers of reports across years do not guarantee equal underlying events.
          In particular, if $r_{t_1} &gt; r_{t_0}$ and $\\text{Reports}_{t_1} \\approx \\text{Reports}_{t_0}$,
          then $N_{t_1} &lt; N_{t_0}$. That’s the essence of the time‑shift trap.
        </p>

        <p>
          Consider a simple illustration: A researcher in 1970 notes that no one has built a car‑worthy battery yet
          and concludes that all future cars will run on gasoline. To make that leap, she’s assuming nothing
          substantial will change about battery tech. If future innovation overturns that premise, the conclusion
          doesn’t stand.
        </p>

        <MCQExample
          number={26}
          prompt="Automaker CEO: Our large sedans stopped selling when fuel prices rose last year. Historically, when fuel prices go up, buyers shift to smaller, more efficient cars, and when prices fall, they come back to bigger cars. So once fuel prices drop, our large sedans will sell strongly again. Which assumption underlies the CEO’s prediction?"
          options={[
            "A. Most consumers have not recently made a permanent switch away from large cars due to environmental concerns.",
            "B. Competing manufacturers will not release any new small cars before fuel prices fall.",
            "C. Fuel prices will decline steadily for at least six consecutive months.",
            "D. Government fuel‑efficiency standards will remain unchanged next year.",
            "E. Advertising spending on the large sedans will double when fuel prices drop.",
          ]}
          correct="A. Most consumers have not recently made a permanent switch away from large cars due to environmental concerns."
          solution={
            <>
              <p>
                The CEO projects the future from a past pattern. That projection fails if a new,
                lasting reason to avoid large cars has emerged. If many buyers have now sworn off big cars
                for environmental reasons, falling fuel prices would not bring them back. Thus, choice A
                states the needed time‑consistency assumption.
              </p>
            </>
          }
        />

        <MustKnow>
          In necessary‑assumption questions, the correct choice often says, in effect,
          “nothing essential changed.” If the factor linking evidence to conclusion might have shifted,
          the argument collapses.
        </MustKnow>

        <MCQExample
          number={27}
          prompt="Ten years ago, Verdantville launched a major anti‑violence initiative. Yet the city’s annual number of reported violent incidents is about the same now as it was a decade ago. Therefore, the campaign is not affecting the amount of violence occurring in Verdantville. Which of the following must be true for this conclusion to be valid?"
          options={[
            "A. Residents were not generally less inclined to report violent incidents ten years ago than they are today.",
            "B. Similar campaigns in nearby cities have not lowered the number of reported violent incidents.",
            "C. The early‑childhood education program started five years ago has not yet had time to reduce violence.",
            "D. The number of officers patrolling Verdantville’s streets is roughly what it was ten years ago.",
            "E. Without the campaign, the number of reported violent incidents would have increased over the last decade.",
          ]}
          correct="A. Residents were not generally less inclined to report violent incidents ten years ago than they are today."
          solution={
            <>
              <p className="font-semibold text-gray-200">Structure</p>
              <ul className="list-disc pl-5">
                <li>Premise 1: The city started a violence‑reduction campaign ten years ago.</li>
                <li>Premise 2: Reported violent incidents per year are about the same now as then.</li>
                <li>Conclusion: The campaign has no effect on violence occurring.</li>
              </ul>

              <p className="mt-3">
                The evidence is about reports, not actual incidents. Using the notation
                $$\\text{Reports}_t = r_t \\cdot N_t,$$
                equal reports across time imply equal underlying violence only if the reporting rate
                $r_t$ stayed stable. If people are more willing to report now, then equal reports could
                mask a real decline in $N_t$.
              </p>

              <p className="mt-3">
                Choice A captures that requirement: reporting wasn’t lower a decade ago. If we negate A
                (people were less likely to report ten years ago), then today’s similar report counts could
                coexist with a drop in actual violence—breaking the argument. Hence A is necessary.
              </p>

              <p className="mt-3">
                Why the others are not required:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  B adds outside evidence about other cities; it’s not a needed link in this argument.
                </li>
                <li>
                  C explains why one specific program might not show results yet; the conclusion does not depend on that explanation.
                </li>
                <li>
                  D mentions policing levels; again, not a necessary bridge between “reports” and “violence occurring.”
                </li>
                <li>
                  E discusses a hypothetical counterfactual trend; the author need not take a position on what would have happened without the campaign to argue “no effect.”
                </li>
              </ul>
            </>
          }
        />

        <p>
          Takeaway: time matters. If the key driver that connects your evidence to your conclusion could have shifted
          between the time periods, the argument needs an assumption that it did not shift in a relevant way.
          When that “no meaningful change” condition is required, it’s the correct necessary assumption.
        </p>
      </article>
    </main>
  );
}