import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title:
    "12.5.9 Partly‑Correct or Look‑Alike Traps | Method of Reasoning (Boldface)",
  description:
    "Boldface CR answers often sound half‑right. Learn to separate premises from conclusions and avoid traps that are close to correct but not exact. Includes a worked boldface example with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.9 Trap answers that are partly correct or closely resemble what’s right
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            Boldface questions can be tricky because a short passage may contain more than one
            conclusion along with supporting statements. Test writers exploit that complexity by
            offering tempting choices that are almost right—statements that capture part of the truth
            or something very close to it, but miss a key detail.
          </p>

          <MustKnow>
            Don’t reward “close enough.” For boldface questions, the correct description must match
            the exact role of each bold portion. Many wrong choices sound plausible because they
            - describe a related role rather than the precise one, or
            - get one role right and the other wrong.
            Keep roles straight: premise vs. conclusion, support vs. opposition.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Warm‑up illustration</h3>
          <p className="italic text-gray-300">
            Many people assume that since{" "}
            <strong>elevated ocean temperatures can harm coral reefs</strong>, and since human
            activity is raising ocean temperatures, there is little to do for reefs besides cutting
            emissions. <strong>That assumption is flawed.</strong> Local stressors—such as
            overfishing and nutrient runoff—cause greater damage than heat alone and can be targeted
            with local policy.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-gray-200">What roles do the bold portions play?</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Trap: The first is a conclusion opposed by the author; the second is the main conclusion.
              </li>
              <li>
                Correct: The first is a consideration supporting a conclusion that the author disputes; the second is the main conclusion.
              </li>
            </ul>
          </div>

          <p>
            Why the trap is appealing: the first bold portion sits inside a commonly held viewpoint
            (which behaves like a conclusion), so it’s easy to blur the support for that viewpoint
            with the viewpoint itself. Still, the first bold is not a conclusion—it's evidence used
            to back a conclusion the author rejects.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Practice: Identify the boldface roles</h3>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-5">
            <div className="space-y-3">
              <p className="text-gray-300">
                The city of Riverton currently funds upkeep of its metro system using tolls on a ring
                road around the city, but{" "}
                <strong>the city council has announced a plan to phase those tolls out</strong> over
                the next few years. Opponents argue that fare revenue alone won’t cover maintenance
                costs. Even so, the plan is unlikely to jeopardize metro maintenance.{" "}
                <strong>
                  Riverton’s population is projected to grow substantially, with many new residents
                  living downtown
                </strong>
                , so metro ridership will likely rise enough to offset revenue lost from ending the
                tolls.
              </p>

              <p className="mt-4 font-semibold text-gray-200">
                In the passage, the two boldfaced portions play which roles?
              </p>

              <ol className="list-[upper-alpha] space-y-3 pl-6">
                <li>
                  The first presents a policy the argument defends against a specific objection; the
                  second states that objection.
                </li>
                <li>
                  The first presents a policy whose consequences are under discussion; the second is
                  the argument’s conclusion about those consequences.
                </li>
                <li>
                  The first gives a reason some people oppose a policy; the second provides evidence
                  that weakens that reason.
                </li>
                <li>
                  The first outlines a policy that faces opposition; the second gives a reason to
                  discount that opposition.
                </li>
                <li>
                  The first describes outcomes of a policy that some oppose; the second describes
                  countervailing outcomes that will offset those outcomes.
                </li>
              </ol>

              <details className="group mt-4 rounded-md border border-gray-700 bg-gray-900/40 p-4">
                <summary className="cursor-pointer list-none font-semibold text-gray-100 group-open:mb-2">
                  Show explanation (Correct answer: D)
                </summary>

                <div className="space-y-3 text-gray-300">
                  <p className="font-semibold text-gray-200">Dissection of the passage</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Background: Riverton uses ring‑road tolls to fund metro maintenance; council
                      plans to eliminate those tolls (Bold 1).
                    </li>
                    <li>Opposition: Fares won’t be enough to fund maintenance.</li>
                    <li>
                      Evidence: Significant population growth focused downtown (Bold 2) → ridership
                      likely rises.
                    </li>
                    <li>
                      Main conclusion: Metro maintenance is unlikely to be affected by the policy.
                    </li>
                  </ul>

                  <p>
                    Choice D accurately labels Bold 1 as the policy under debate and Bold 2 as the
                    reason the objection should carry less weight. The other options each distort one
                    of the roles:
                  </p>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      A: Mislabels Bold 2 as the objection; it’s actually evidence against the
                      objection.
                    </li>
                    <li>
                      B: Mislabels Bold 2 as the ultimate conclusion; the conclusion comes after Bold
                      2, supported by it.
                    </li>
                    <li>
                      C: Claims Bold 1 is a reason for opposition, but Bold 1 is the plan itself; the
                      objection appears after it.
                    </li>
                    <li>
                      E: Says both bold portions describe consequences; Bold 1 is the plan, not a
                      consequence. Bold 2 is evidence leading to a forecasted offset, not the offset
                      itself.
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">How to avoid “almost right” traps</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Label each sentence: background, premise, intermediate conclusion, main conclusion,
              counterclaim, rebuttal. Then map each bold portion to one label.
            </li>
            <li>
              Verify both halves of the choice. If any part misstates a role—even subtly—the choice is
              wrong.
            </li>
            <li>
              Read past the bold portions. Often, what follows clarifies whether a bold part is a
              premise that supports or a conclusion being supported.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}