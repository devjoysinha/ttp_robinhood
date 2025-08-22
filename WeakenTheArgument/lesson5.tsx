import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.6 New Topics in Weaken Answer Choices | Critical Reasoning",
  description:
    "Learn why correct Weaken answers often introduce new information and may look unlike the passage. Includes two practice questions with complete explanations.",
};

function K({ expr, className }: { expr: string; className?: string }) {
  // Server-side KaTeX render (ensure KaTeX CSS is loaded globally in your layout)
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      className={className}
      aria-label={expr}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.6 New Topics in Weaken Answer Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many test takers mistakenly toss out any choice that brings up a topic
          not mentioned in the passage. That habit is dangerous on Weaken
          questions: the best weakener often introduces a fresh idea that harms
          the author’s reasoning.
        </p>

        <MustKnow>
          All correct Weaken answers add new information. “New topic” does not
          mean “irrelevant.” The right choice is the one that most undercuts the
          conclusion, even if it looks least like the text of the argument.
        </MustKnow>

        <p>
          In fact, the correct weakener frequently looks the most “different”
          from the stimulus. Don’t judge similarity—judge impact on the
          conclusion.
        </p>

        <MustKnow>
          Your sole objective in a Weaken problem is to pick the choice that
          most reduces the credibility of the conclusion. If it weakens, it’s a
          contender—regardless of how familiar it sounds.
        </MustKnow>

        <section aria-labelledby="ex-8">
          <h3 id="ex-8" className="sr-only">
            Example 8
          </h3>

          <MCQExample
            number={8}
            prompt={
              <>
                The island province of Mar de Isla is launching a{" "}
                <K expr={"5\\%"} /> discount on real‑estate taxes. To qualify,
                residents must document at least 100 hours of community service
                during the tax year. Because a <K expr={"5\\%"} /> tax break is
                meaningful, the argument concludes that most residents will take
                part in the program. Which option, if true, most seriously
                weakens the conclusion?
              </>
            }
            options={[
              "Neighbors on Mar de Isla tend to know one another well and are often eager to lend a hand.",
              "Mar de Isla’s property‑tax rate is slightly below those of most nearby islands.",
              "Due to traditional inheritance patterns, fewer than one‑fifth of residents currently own property on the island.",
              "Many residents could find 100 hours to volunteer over the course of a year.",
              "Some residents already spend time on community efforts such as cleanups, tree planting, and meal delivery.",
            ]}
            correct={
              "Due to traditional inheritance patterns, fewer than one‑fifth of residents currently own property on the island."
            }
            solution={
              <>
                <p className="mb-2 font-semibold">Why (C) weakens most</p>
                <p>
                  The conclusion says “most residents will participate.” “Most”
                  means more than <K expr={">50\\%"} />. If under{" "}
                  <K expr={"20\\%"} /> of residents own real estate, then over{" "}
                  <K expr={"80\\%"} /> don’t pay this tax at all and have no
                  incentive to qualify. That makes it highly unlikely that a
                  majority of residents will participate, directly undermining
                  the conclusion.
                </p>

                <p className="mt-4 mb-2 font-semibold">Why the others fail</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    Neighbors helping neighbors could cut either way (might make
                    volunteering easier or consume time that doesn’t qualify).
                    It has no clear weakening effect.
                  </li>
                  <li>
                    A comparison to other islands’ tax rates doesn’t address the
                    incentive on Mar de Isla itself; irrelevant to the
                    conclusion.
                  </li>
                  <li>
                    If many residents can spare 100 hours, that tends to{" "}
                    strengthen—not weaken—the idea that people will
                    participate.
                  </li>
                  <li>
                    “Some” residents already volunteering is too vague—without
                    knowing how many hours or how many people, it doesn’t
                    reliably weaken the claim that “most” will join.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex-9">
          <h3 id="ex-9" className="sr-only">
            Example 9
          </h3>

          <MCQExample
            number={9}
            prompt={
              <>
                Administrators at City Hospital worry that doctors now have less
                time than ever for patient charts, asserting that doctors devote
                more of their shifts to seeing patients than two years ago. This
                skepticism seems unwarranted because the total number of
                patients, length of each shift, and number of on‑shift doctors
                have all remained the same. Which choice most seriously weakens
                the argument?
              </>
            }
            options={[
              "Two years ago, City Hospital adopted an electronic charting platform that made record‑keeping more efficient.",
              "The hospital recently began outsourcing parts of some cases to a satellite clinic using remote video consultations.",
              "A nearby hospital that specialized in complex cases closed two years ago and now refers future complex patients to City Hospital.",
              "City Hospital’s hiring process has become notably more selective in the past two years.",
              "The hospital has long had difficulty matching each case with the most efficient doctor.",
            ]}
            correct={
              "A nearby hospital that specialized in complex cases closed two years ago and now refers future complex patients to City Hospital."
            }
            solution={
              <>
                <p className="mb-2 font-semibold">Why (C) weakens most</p>
                <p>
                  The premises say certain counts didn’t change (patients,
                  shift‑length, doctors on shift). But if the mix of cases
                  shifted toward more complex cases, doctors could spend more
                  time per patient even with the same totals. A specialized
                  hospital’s closure plausibly increases complexity at City
                  Hospital, making it more likely that doctors devote more shift
                  hours to patient care—contradicting the passage’s
                  skepticism.
                </p>

                <p className="mt-4 mb-2 font-semibold">Why the others fail</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    A better charting system suggests doctors could reclaim time
                    from paperwork, which would support, not weaken, the admins’
                    concern.
                  </li>
                  <li>
                    Outsourcing parts of cases reduces the on‑site burden,
                    aligning with the idea that doctors aren’t spending more
                    time—so not a weakener.
                  </li>
                  <li>
                    Tougher hiring standards don’t clearly imply more or less
                    time per patient; effect on the conclusion is ambiguous.
                  </li>
                  <li>
                    A long‑standing matching problem isn’t a new development,
                    so it doesn’t explain a recent change in time spent with
                    patients.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <MustKnow>
          Language tip: On test day, “most” means “more than half”{" "}
          <K expr={">50\\%"} />. Don’t confuse “most” with a specific high
          percentage; any value above 50 is enough.
        </MustKnow>

        <p>
          Bottom line: Don’t auto‑eliminate choices for introducing new
          information. Ask only: Does this make the conclusion less believable?
          If yes, keep it—whether or not it mirrors the passage’s wording.
        </p>
      </article>
    </main>
  );
}