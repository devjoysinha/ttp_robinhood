import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.27 Inference Trap: Nearby | Reading Comprehension",
  description:
    "Learn to avoid the 'Nearby' trap in RC inference questions—choices that echo wording near the relevant lines but don’t actually answer the question. Includes a worked example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.27 Inference Trap 6: The “Nearby” Choice
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In inference questions, a frequent trap is a choice that borrows language
          that appears close to the relevant lines in the passage but doesn’t
          actually address the question. These “nearby” choices feel familiar
          because the words look right, yet they miss the logical target.
        </p>

        <MustKnow>
          Don’t pick an option just because its wording mirrors text found near the
          keywords you located. Confirm that the choice directly answers the question
          and follows from the author’s point, not merely from proximate phrasing.
        </MustKnow>

        <section aria-labelledby="mini-passage" className="space-y-4">
          <h3 id="mini-passage" className="text-xl font-semibold text-white">
            Mini‑passage
          </h3>
          <p>
            Daylight Saving Time (DST) moves clocks forward in the spring and back
            in the fall. It was adopted in the United States in 1918 to conserve
            fuel by reducing artificial lighting. Today, though, the author argues
            that the drawbacks now outweigh the benefits, so the policy should be
            ended. Research indicates that even a one‑hour disruption to routine
            sleep can harm circadian rhythms and health; one study reports a
            short‑term uptick in heart‑attack risk after the spring shift. Experts
            who study how light affects the body—including chronobiologist Till
            Roenneberg—also point to reduced worker productivity. While supporters
            claim people adapt quickly, Roenneberg contends that our internal
            clocks fail to sync with the DST “social clock” even after months.
            Separately, there’s a nontrivial time cost to changing hundreds of
            millions of clocks each year, estimated at a large annual figure. Public
            sentiment has shifted as well: in a recent poll, only a minority wanted
            to keep changing clocks twice a year.
          </p>
        </section>

        <MCQExample
          number={22}
          prompt="Based on the passage, which outcome would Roenneberg most likely predict if the U.S. stopped observing DST?"
          options={[
            "The proportion of people who suffer a springtime heart attack would decline.",
            "No one would ever again struggle with the body’s light‑dark cycle.",
            "The time spent changing clocks would no longer impose an opportunity cost.",
            "People’s internal clocks would more often align with official (social) time.",
            "Supporters of DST would stop believing people adjust quickly to time changes.",
          ]}
          correct="People’s internal clocks would more often align with official (social) time."
          solution={
            <>
              <p>
                The question asks specifically what Roenneberg would expect if DST
                were eliminated. The relevant lines are the ones that discuss his
                view: he says the body clock does not adjust to DST social time
                even after months. If DST is removed, the cause of that mismatch
                goes away more often, so the body clock would align with social time
                more frequently. That matches choice D.
              </p>

              <p>
                Why the others are wrong:
              </p>
              <p>
                A — Tempting but “nearby.” The heart‑attack statistic comes from a
                different study mentioned earlier, not from Roenneberg’s claim. The
                choice isn’t tied to what Roenneberg would predict.
              </p>
              <p>
                B — Too extreme. Saying “never” is broader than anything in the passage.
                Roenneberg argues DST disrupts alignment; he doesn’t claim it’s the
                sole cause of all light‑dark problems.
              </p>
              <p>
                C — Another “nearby” lure. The opportunity‑cost point is a separate
                factor discussed later and isn’t presented as Roenneberg’s position.
              </p>
              <p>
                E — Also “nearby.” The passage contrasts supporters’ assumptions with
                Roenneberg’s view, but it doesn’t say he believes supporters would
                change their minds.
              </p>

              <p>
                Therefore, the only choice that directly reflects Roenneberg’s view is D.
              </p>
            </>
          }
        />

        <MustKnow>
          Beat the “Nearby” trap with a quick checklist:
          1) Is this the right speaker or viewpoint? 2) Does the choice answer the
          exact question? 3) Is it supported by the relevant lines, not just the
          lines above or below?
        </MustKnow>
      </article>
    </main>
  );
}