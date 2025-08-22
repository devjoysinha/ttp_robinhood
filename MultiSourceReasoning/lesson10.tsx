import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "6.11 Execution Strategy #4: Be a Detail‑Hunter | Multi‑Source Reasoning",
  description:
    "MSR is a detail game. Learn a clean, repeatable approach to capture the right data from multiple tabs and prompts, avoid misses, and execute with precision. Includes two fully worked, exam‑style examples.",
};

function KMath({ expr, label }: { expr: string; label?: string }) {
  // Server-side KaTeX to MathML for accessible, CSS‑free math
  const mathml = katex.renderToString(expr, { output: "mathml", throwOnError: false });
  return (
    <span
      role="math"
      aria-label={label ?? expr}
      dangerouslySetInnerHTML={{ __html: mathml }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.11 Execution Strategy #4: Be a Detail‑Hunter
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Multi‑Source Reasoning problems live and die on small details. Every question
          asks you to pull the correct facts from multiple places, keep them straight,
          and combine them the right way. Winning here is less about difficult math and
          more about disciplined information capture.
        </p>

        <MustKnow>
          To answer MSR questions reliably, you must gather two things: the right details
          and all of the details you need. Missing either one can derail an otherwise
          correct approach.
        </MustKnow>

        <p>
          Treat each prompt as a scavenger hunt. Track where every needed fact lives
          (tabs, charts, tables, footnotes) and confirm that nothing critical is missing
          before you compute or compare.
        </p>

        <MustKnow>
          MSR is detail‑driven. Make “find every required data point” your primary mission,
          then execute step by step.
        </MustKnow>

        <p>
          Execution improves when your process is explicit. Note your objective, list the
          data you must collect, and check off each step as you go. When a question has many
          moving parts, sketch a quick, tidy “mini‑table” on your scratch pad to organize
          the numbers you’ll need.
        </p>

        <MustKnow>
          When many figures or steps are involved, use your notepad strategically to keep
          data organized and prevent omissions.
        </MustKnow>

        <p>
          The more you practice staying alert and methodical as you navigate between tabs
          and representations, the more consistent your MSR results will be.
        </p>

        <MustKnow>
          Vigilance pays. Train yourself to be focused and systematic when scanning prompts,
          tables, and graphs.
        </MustKnow>

        <section aria-labelledby="examples" className="pt-2">
          <h3 id="examples" className="sr-only">
            Practice Examples
          </h3>

          <MCQExample
            number={12}
            prompt="A school board will fund exactly one high‑school curriculum area: Environmental Science, Robotics, or Drama. The PTA wants the area with the strongest overall ratings in (i) current student participation and interest and (ii) projected growth of associated career pathways. According to the board’s ratings table, Environmental Science scored 9 and 10 in those two categories, Robotics scored 7 and 9, and Drama scored 9 and 5. What existing‑infrastructure rating corresponds to the PTA’s preferred curriculum area?"
            options={["1", "3", "5", "6", "10"]}
            correct="5"
            solution={
              <>
                <p>
                  Per the PTA’s rule, choose the curriculum that leads in both categories:
                  Environmental Science has the top pair (9 for participation/interest and 10 for
                  projected career growth). From the ratings table, Environmental Science’s
                  existing‑infrastructure score is 5. So the answer is 5.
                </p>
              </>
            }
          />

          <MCQExample
            number={13}
            prompt="Villageton has 35,000 eligible voters. A pre‑vote poll found 20,000 in favor and 15,000 opposed to a 17% property‑tax increase. Historically, 50% of voters aged 40–59 turn out. Of those who favored the increase, 30% were 40–59; of those who opposed, 40% were 40–59. On election day, there were 8,000 Yes votes and 7,500 No votes. Among actual voters, 35% of the Yes votes and 40% of the No votes were from ages 40–59. What fraction of the 40–59 voters who were expected to vote (based on history) actually voted?"
            options={["23/60", "29/60", "23/30", "23/29", "29/30"]}
            correct="29/30"
            solution={
              <>
                <p>
                  First, estimate how many 40–59 voters were expected to show up. The eligible 40–59
                  group is 30% of the 20,000 who favored plus 40% of the 15,000 who opposed:
                </p>
                <ul className="list-disc pl-6">
                  <li>Favor 40–59: 0.30 × 20,000 = 6,000</li>
                  <li>Oppose 40–59: 0.40 × 15,000 = 6,000</li>
                </ul>
                <p>Total eligible 40–59 = 6,000 + 6,000 = 12,000.</p>
                <p>Historical turnout for 40–59 is 50%, so expected voters = 0.50 × 12,000 = 6,000.</p>
                <p>
                  Now compute actual 40–59 turnout. Among actual voters, 35% of the 8,000 Yes votes
                  and 40% of the 7,500 No votes were 40–59:
                </p>
                <ul className="list-disc pl-6">
                  <li>Yes, 40–59: 0.35 × 8,000 = 2,800</li>
                  <li>No, 40–59: 0.40 × 7,500 = 3,000</li>
                </ul>
                <p>Actual 40–59 voters = 2,800 + 3,000 = 5,800.</p>
                <p className="mt-2">
                  Fraction who actually voted vs. expected =
                  {" "}
                  <KMath expr="5800/6000" label="5,800 over 6,000" /> =
                  {" "}
                  <KMath expr="29/30" label="29 over 30" />.
                </p>
                <p>Answer: 29/30.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: MSR success is about position and process, not complicated computation.
          If your steps lock down the right details from the right places, the answer falls out.
        </p>
      </article>
    </main>
  );
}