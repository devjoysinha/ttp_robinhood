import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.3 How to Handle Details When Reading a Passage | Reading Comprehension",
  description:
    "Learn a step‑by‑step approach for handling details in Reading Comprehension: what not to memorize, what to track, and how to use details to answer questions. Includes a quick RC example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.3 How to Handle Details When Reading a Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Reading Comprehension is not a memory contest. If the test truly wanted perfect recall,
          it wouldn’t show you the passage when you answer. What matters is understanding:
          grasp the author’s purpose, the structure, and how pieces of information support the
          bigger picture.
        </p>

        <MustKnow>
          Don’t read to memorize every fact. Read to understand the author’s aim, the passage’s
          organization, and the role each detail plays.
        </MustKnow>

        <p>Why trying to memorize details backfires:</p>
        <ul className="list-disc pl-6">
          <li>
            Passages often include far more specifics than anyone can retain accurately under time
            pressure.
          </li>
          <li>
            Only a subset of those details will show up in questions, and you can’t reliably predict
            which ones in advance—memorizing is wasted effort.
          </li>
          <li>
            Focusing on rote recall pulls attention away from the high‑value takeaways: primary
            purpose, tone, structure, and the general storyline.
          </li>
        </ul>

        <MustKnow>
          Keep your attention on the “forest” (purpose, tone, structure). Treat details as tools that
          support comprehension, not as facts to stockpile.
        </MustKnow>

        <p>So, what do we actually do with details as we read?</p>
        <ul className="list-disc pl-6">
          <li>
            Use specifics to clarify meaning. Each fact should help you understand an argument,
            an example, or a contrast the author is making.
          </li>
          <li>
            Track location. Make a light mental (or brief written) map of where facts live
            (e.g., “dates early in paragraph 2,” “counterexample at the end of paragraph 3”),
            so you can find them instantly when a question asks.
          </li>
        </ul>

        <MustKnow>
          Two‑step detail process: (1) use details to understand; (2) note where they appear so you
          can look them up quickly when needed.
        </MustKnow>

        <p>
          Example: If a passage mentions that an organization was established in a specific month and
          year, your job while reading isn’t to memorize the date. Instead, ask: Why did the author
          bring up this date? Does it mark a turning point, support a claim, or frame a comparison?
          Meanwhile, remember where that date was mentioned so you can revisit it if a question
          targets it.
        </p>

        <p>
          Similarly, if a science passage contrasts two forms of radiation, don’t fixate on which
          type is blocked by which material. Focus on the author’s purpose: Is the contrast illustrating
          a broader principle? Then keep a quick mental note of where the contrast appears so you can
          verify specifics later.
        </p>

        <p>
          Some passages try to overwhelm with jargon or dense lists. Avoid getting stuck in the weeds.
          Keep asking, “What’s this doing here?” If a detail’s function is clear, you already know how
          to use it on a question—and you can always scan back for the exact wording.
        </p>

        <MustKnow>
          RC is “comprehension first.” Treat the passage as an open book: verify details in context
          when a question demands precision.
        </MustKnow>

        <section aria-labelledby="rc-mini-example">
          <h3 id="rc-mini-example" className="text-xl font-semibold text-white">
            Mini RC Example
          </h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
            <h4 className="mb-2 text-base font-semibold text-gray-100">Passage</h4>
            <p className="mb-3">
              Researchers have long noticed that some people who score well on traditional intelligence
              tests still make choices that are far from rational in everyday life. One explanation is
              that standard IQ tests don’t fully capture how people actually make decisions. In this view,
              a person can have ample intellectual horsepower yet depend on decision routines that don’t
              consistently produce sound outcomes.
            </p>
            <p className="mb-0">
              According to this account, the brain has multiple “routes” for processing information.
              Some routes are slow, effortful, and better aligned with rational thinking; others are quicker
              and feel easier to use but are less reliable for good decision‑making. Because the high‑effort
              routes demand concentration and can feel uncomfortable, people often default to the low‑effort
              routes—what some psychologists describe as taking the path of least resistance—which can lead
              to suboptimal choices. A second driver of poor decisions is a lack of the right know‑how
              (sometimes called “mindware”), such as basic probability tools, without which people are more
              likely to slip into faulty reasoning.
            </p>
          </div>

          <MCQExample
            number={1}
            prompt="According to the passage, which statement best describes the lower‑effort routes for processing information?"
            options={[
              "They are more comfortable to use than certain other processing routes.",
              "People who prefer the path of least resistance tend to avoid using them.",
              "Using them causes low scores on standard intelligence tests.",
              "They were first identified by the same psychologists who coined the term for the path of least resistance.",
              "They always result in poor decisions.",
            ]}
            correct="They are more comfortable to use than certain other processing routes."
            solution={
              <>
                <p>
                  In paragraph two, the author contrasts “slow, effortful” routes (better for rational
                  thinking) with “quicker,” “easier” routes (less reliable). The passage explains that people
                  often choose the easier routes because the effortful ones feel uncomfortable. That supports
                  the idea that lower‑effort routes are more comfortable to use than some alternatives, so
                  choice (A) is correct.
                </p>
                <p>
                  Choice (B) is the opposite of what’s stated—those who take the path of least resistance are
                  the ones who often use the easier routes. There’s no support for (C) about IQ scores, nor does
                  the passage say the same psychologists who coined the “path of least resistance” term discovered
                  the routes (D). Finally, “always” in (E) is too absolute—the passage says the routes are less
                  reliable or “suboptimal,” not invariably wrong.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Verify, don’t guess. When a question asks about a detail, scan back to the relevant lines and match
          language carefully—watch for extreme words such as “always,” “never,” or “only.”
        </MustKnow>

        <p>
          Bottom line: read for purpose and structure, use details to deepen understanding, and rely on a quick
          lookup to nail the exact wording when a question targets a specific fact.
        </p>
      </article>
    </main>
  );
}