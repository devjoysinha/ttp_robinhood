import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.4 Strategy for Weaken-the-Argument Questions | Critical Reasoning",
  description:
    "A practical 6‑step playbook for Weaken-the-Argument questions: lock the conclusion, analyze support, prune strengtheners/irrelevancies, and pick the clearest weakener. Includes a fully worked example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.4 A Step‑by‑Step Strategy for Weaken Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Use this concise, repeatable process to select the best weakener. Your
          goal is not to prove the argument false, but to give a strong reason
          to doubt that the conclusion is well‑supported by the stated
          premises.
        </p>

        <section aria-labelledby="strategy-steps">
          <h3 id="strategy-steps" className="text-xl font-semibold text-white">
            The 6‑Step Playbook
          </h3>

          <MustKnow>
            Deep comprehension of the stimulus comes first. If you don’t truly
            grasp what’s being argued, you won’t know what to undermine.
          </MustKnow>

          <ol className="list-decimal space-y-4 pl-6">
            <li>
              Read for meaning. Work through the passage slowly enough to
              understand what each sentence contributes. Note definitions,
              quantifiers, and any contrasts or causal claims.
            </li>

            <li>
              Check the question stem. Confirm it’s a “weaken/undermine/call
              into question” task so you know the direction of attack.
            </li>

            <li>
              Pin down the exact conclusion. Quote it to yourself in full. Being
              vague here is the fastest way to pick a trap that weakens a
              different claim than the author’s actual conclusion.
            </li>

            <li>
              Map the support. Identify the key premises and how they’re
              supposed to get you to the conclusion. This is where hidden
              assumptions usually live.
            </li>

            <li>
              Triage the choices. First remove clear strengtheners and
              statements that don’t move the needle on the argument. Some
              choices will feel “related” but still leave the core logic
              untouched—discard those too.
            </li>

            <li>
              From the finalists, choose the one that most clearly weakens the
              link between the stated premises and the conclusion. Prefer direct,
              unambiguous hits over speculative or roundabout ones.
            </li>
          </ol>

          <MustKnow>
            Eliminate answer choices that either bolster the conclusion or have
            no material impact on the argument’s support.
          </MustKnow>

          <MustKnow>
            Stay flexible. If the last two choices feel close, revisit earlier
            eliminations. It’s common to initially toss the real weakener for
            looking “off topic” at first glance.
          </MustKnow>

          <MustKnow>
            When you’re torn between two contenders, pick the option that most
            explicitly damages the support for the exact conclusion—not a nearby
            claim.
          </MustKnow>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 font-semibold text-white">Summary (memorize):</h4>
            <ul className="list-disc space-y-2 pl-6">
              <li>Understand the passage.</li>
              <li>Verify it’s a Weaken task.</li>
              <li>Lock the conclusion exactly.</li>
              <li>Trace the stated support and assumptions.</li>
              <li>Remove strengtheners and irrelevancies.</li>
              <li>Pick the clearest weakener to that conclusion.</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Worked Example
          </h3>

          <p>
            Follow the 6 steps deliberately. Label what the conclusion is,
            identify the support, then evaluate choices against that link.
          </p>

          <MCQExample
            number={5}
            prompt={
              <>
                Three years ago, the town of Amity redeveloped two waterfront
                blocks—replacing derelict warehouses with parks, shops, and
                restaurants. Sales tax revenue from the new businesses has been
                substantial. Two additional blocks on the waterfront are still
                available for redevelopment. Therefore, if Amity renews those
                two remaining blocks, it can double the sales tax it collects
                from businesses in the waterfront renewal areas. Which option,
                if true, most undermines this reasoning?
              </>
            }
            options={[
              "Raising property tax rates slightly would yield more additional revenue than the sales taxes currently collected from the renewed area.",
              "Most waterfront restaurants are at capacity on weekends.",
              "Retail and restaurant activity declines during national economic slowdowns.",
              "In a nearby town, Friendship, retail and restaurant businesses have historically been weak.",
              "Since the first project finished, streets leading to and within Amity’s waterfront are commonly jammed with slow‑moving traffic.",
            ]}
            correct="Since the first project finished, streets leading to and within Amity’s waterfront are commonly jammed with slow‑moving traffic."
            solution={
              <>
                <p className="mb-2">
                  Step 1–2: We’re weakening the argument.
                </p>
                <p className="mb-2">
                  Step 3: The conclusion is specific: by redeveloping two more
                  blocks, Amity can double sales tax revenue from businesses in
                  the renewal areas.
                </p>
                <p className="mb-2">
                  Step 4: Support is a before–after comparison: two blocks were
                  renewed and yielded substantial sales tax; two similar blocks
                  remain; so repeating the plan should double revenue. The
                  assumption is that conditions relevant to generating sales
                  (e.g., access, demand, capacity) are sufficiently similar now.
                </p>
                <p className="mb-2">
                  Step 5: Triage choices.
                </p>
                <ul className="mb-2 list-disc pl-6">
                  <li>
                    A compares a different revenue source (property tax) and is
                    off‑scope. It doesn’t address whether renewal doubles sales
                    tax.
                  </li>
                  <li>
                    B suggests strong demand—if anything, a mild strengthener.
                  </li>
                  <li>
                    C is a general statement about recessions; it doesn’t say
                    one is happening now or that it uniquely affects the second
                    project versus the first. Too conditional to undercut the
                    extrapolation.
                  </li>
                  <li>
                    D talks about another town’s long‑standing weakness. That
                    was also true when the first project succeeded; no new
                    tension introduced.
                  </li>
                  <li>
                    E introduces a concrete, new constraint: chronic traffic
                    congestion in and to the area. If access has become a
                    bottleneck, scaling business to “double” is doubtful even if
                    new storefronts open. This directly challenges the
                    “same-results-by-repeating” assumption.
                  </li>
                </ul>
                <p className="mb-2">
                  Step 6: Pick E. It most clearly breaks the link between the
                  earlier success and the projected doubling by showing that a
                  critical condition—access—has worsened since the first
                  project.
                </p>
                <div className="mt-3 rounded-md border border-gray-700 bg-gray-900/40 p-3">
                  Correct answer: E
                </div>
              </>
            }
          />
        </section>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big Picture
          </h3>
          <p>
            Great weakeners don’t merely sound negative—they puncture the bridge
            from the stated premises to the stated conclusion. Lock the exact
            conclusion, test how the premises are meant to support it, and then
            select the choice that most directly undercuts that connection.
          </p>
        </section>
      </article>
    </main>
  );
}