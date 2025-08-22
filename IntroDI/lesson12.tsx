import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.13 Build a Guessing Strategy | Data Insights",
  description:
    "Learn how to plan smart guesses in Data Insights so you can invest time where it matters most. Includes practical heuristics and a quick timing math check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.13 Build a Guessing Strategy
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Data Insights items can be dense and multi‑layered. If you try to hold a strict pace of about
          2 minutes and 15 seconds per question from start to finish, you may run out of time on tougher
          prompts or feel forced to move on before you’ve reached a confident answer.
        </p>

        <p>
          A better approach is to plan a few intentional guesses. By identifying a small set of
          questions to skip quickly, you free up extra minutes to solve the remaining problems
          more carefully—and you may even have time at the end to revisit one or two you marked.
        </p>

        <MustKnow>
          Strategic guessing is part of good time management. It’s reasonable to guess on a few
          questions so you can devote more time to the rest. If time remains at the end and it’s
          advantageous, return to any items you flagged.
        </MustKnow>

        <p>
          How do you decide which problems to guess on? Start with self‑awareness. If certain
          skills or formats tend to slow you down, use that knowledge. For instance, if percent
          calculations in Quant or a cluttered Table Analysis layout often trip you up, a fast
          scan may be enough to conclude, “This one’s a strategic pass.”
        </p>

        <p>
          This doesn’t mean guessing at random. Give each question a quick look. If it appears
          complicated and centers on an area that’s not your strength, it’s usually wise to move on.
          If you later finish early, you can come back and invest more time where it’s warranted.
        </p>

        <MustKnow>
          Pick your guess targets using two signals:
          1) your personal strengths and weaknesses, and
          2) the initial visual complexity of the question. Messy, multi‑step prompts in weak areas
          are prime candidates to skip quickly; clean, single‑goal items are often worth finishing.
        </MustKnow>

        <section aria-labelledby="quick-heuristics" className="space-y-3">
          <h3 id="quick-heuristics" className="text-lg font-semibold text-white">
            Quick heuristics for when to guess
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The prompt looks like a “hairball” with many moving parts and cross‑references.
            </li>
            <li>
              The question relies on a topic you consistently find time‑consuming (e.g., intricate percentage
              chains or complex sorting/filtering in a large table).
            </li>
            <li>
              You can’t identify a clear pathway to the answer after a brief scan.
            </li>
            <li>
              There’s a simpler, single‑question item available right after this one.
            </li>
          </ul>
        </section>

        <section aria-labelledby="time-math" className="space-y-3">
          <h3 id="time-math" className="text-lg font-semibold text-white">
            Time math you can use
          </h3>
          <p>
            If you plan to guess on g questions in a section with Q total questions and T total minutes,
            your working time per attempted question is approximately:
          </p>
          <p className="rounded-md bg-slate-800/60 px-4 py-3 font-mono text-sm text-sky-200">
            time per worked question ≈ T / (Q − g)
          </p>
          <p className="text-sm text-gray-400">
            This quick calculation helps you see how a few planned guesses can meaningfully increase
            your average time on the questions you do attempt.
          </p>
        </section>

        <MCQExample
          number={13}
          prompt="A section has 20 questions and lasts 45 minutes. If you decide in advance to guess on 4 questions, about how much time can you spend on each of the remaining questions?"
          options={[
            "2 minutes 15 seconds",
            "2 minutes 30 seconds",
            "2 minutes 45 seconds",
            "3 minutes 00 seconds",
            "3 minutes 15 seconds",
          ]}
          correct="2 minutes 49 seconds"
          solution={
            <>
              <p>
                You will work on Q − g = 20 − 4 = 16 questions. Distribute the 45 minutes across those:
              </p>
              <p className="rounded-md bg-slate-800/60 px-4 py-3 font-mono text-sm text-sky-200">
                45 minutes ÷ 16 ≈ 2.8125 minutes ≈ 2 minutes 49 seconds
              </p>
              <p>
                So, planning four quick guesses boosts your average time to roughly 2:49 per worked item.
              </p>
            </>
          }
        />

        <p>
          Bottom line: make timing a deliberate part of your plan. Choose a small number of strategic guesses,
          lean into problems that play to your strengths, and use your quick scan to detect questions that are
          not worth the time right now. If the clock allows, loop back later.
        </p>
      </article>
    </main>
  );
}