import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "4.3 Outside Factors in Criteria‑Based Data Sufficiency | GMAT",
  description:
    "Learn how to decide whether a criteria‑based Data Sufficiency scenario is restricted or unrestricted—and when outside factors must be considered. Includes clear rules, keyword cues, and a DS practice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Deciding Whether to Consider Outside Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In criteria‑driven DS problems, start by asking a single question:
          does the situation limit us to a specific, closed group, or is the
          group open‑ended? That decision tells you whether outside factors
          must be part of your analysis.
        </p>

        <MustKnow>
          If the scenario restricts the choice to a fixed group (for example, a
          single person, one store, a named company), you don’t bring in
          outside possibilities. If the scenario is not restricted, you must
          account for alternatives that meet the stated criteria but aren’t
          explicitly listed.
        </MustKnow>

        <p>
          Here, the word “group” is broad. It can refer to people, companies,
          objects, destinations, or even the criteria themselves—any collection
          relevant to the decision in the stem.
        </p>

        <MustKnow>
          “Group” in criteria‑based DS can mean any collection: objects,
          entities, people, places, or a set of stated requirements—not just a
          literal group of people.
        </MustKnow>

        <section aria-labelledby="examples-heading" className="space-y-4">
          <h3 id="examples-heading" className="text-xl font-semibold text-white">
            Restricted vs. Unrestricted: Quick Contrasts
          </h3>

          <p className="text-gray-300">
            • Unrestricted example: “Phil will buy a used car this weekend if it
            costs under $4,000 and isn’t green. Will Phil buy his neighbor’s
            car?” Even if the neighbor’s car fits, other cars might also fit,
            so you must consider outside options.
          </p>

          <p className="text-gray-300">
            • Restricted example: “Phil will buy a used car <em>from his neighbor</em> this
            weekend if it costs under $4,000 and isn’t green. Will Phil buy his
            neighbor’s car?” Now the group is a single source (the neighbor), so
            outside sellers are irrelevant.
          </p>
        </section>

        <section aria-labelledby="keyword-cues" className="space-y-3">
          <h3 id="keyword-cues" className="text-xl font-semibold text-white">
            Keyword cues that often signal the group type
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <em>only</em> → usually restricted
            </li>
            <li>
              <em>exactly</em> → usually restricted
            </li>
            <li>
              <em>include</em> → usually unrestricted (more items can be present)
            </li>
            <li>
              <em>or neither</em> → usually unrestricted (an outside option may win)
            </li>
          </ul>
        </section>

        <section aria-labelledby="mini-scenarios" className="space-y-4">
          <h3 id="mini-scenarios" className="text-xl font-semibold text-white">
            Mini‑scenarios using the cues
          </h3>

          <p>
            “Sara’s <strong>only</strong> criteria for attending a campus guest lecture are
            that both dark matter and black holes are discussed, and if stellar
            life cycles are covered, the Big Bang is also covered. Will Sara
            attend a lecture?” The word “only” restricts the criteria, so you
            don’t add extra, unstated conditions.
          </p>

          <p>
            “Sara’s criteria for attending a campus guest lecture <strong>include</strong> that
            both dark matter and black holes are discussed, and if stellar life
            cycles are covered, the Big Bang is also covered. Will Sara attend
            a lecture?” “Include” suggests additional requirements may exist, so
            outside factors can affect the outcome.
          </p>

          <p>
            “Jerome will hire a contractor to remodel his kitchen if it meets
            his budget and timeline. Will he hire Sure Thing, NewLook, <strong>or
            neither</strong>?” The phrase “or neither” implies his choice isn’t limited to
            just those two—another firm could satisfy the criteria—so the group
            is unrestricted.
          </p>
        </section>

        <MustKnow>
          Presence of cues like “only/exactly” often means you can ignore
          outside options (restricted). Cues like “include/or neither” usually
          mean you must allow for additional possibilities (unrestricted). If
          no cue appears, read carefully—the stem should still let you infer
          whether the group is restricted.
        </MustKnow>

        <section aria-labelledby="practice" className="space-y-4">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Practice: Criteria‑Based DS
          </h3>

          <ExampleCard
            number={3}
            title="Vacation choice with unrestricted group language"
            statements={[
              "Kumar plans a 5‑day trip to Mexico. His must‑have resort requirements include a maximum total price and a minimum daily temperature. If his agent proposes two options—Gran Cielo and Sol y Mar—did he most likely book Gran Cielo, Sol y Mar, or neither?",
              `1) Gran Cielo costs $2,500 and is located in a warmer spot than Sol y Mar.`,
              `2) Sol y Mar stays above 77°F each day and charges more than Gran Cielo.`,
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Translate the two stated requirements as math:
                  {" "}
                  <InlineMath math={"\\text{price} \\le 3000"} /> and{" "}
                  <InlineMath math={"\\text{temperature} \\ge 75^\\circ\\!\\text{F}"} />.
                  Notice the stem&rsquo;s language: it says the must‑haves{" "}
                  <em>include</em> those two conditions and asks whether he booked one
                  of the two named resorts <em>or neither</em>. Both are strong
                  signals the group is unrestricted—Kumar may have additional
                  requirements, and a different resort could be chosen.
                </p>

                <p>
                  Statement (1) confirms Gran Cielo meets the price cap
                  (<InlineMath math={"2500 \\le 3000"} />) and is warmer than Sol y
                  Mar, but gives no actual temperature for either resort. With
                  an unrestricted group, other resorts might also satisfy his
                  criteria. Not sufficient.
                </p>

                <p>
                  Statement (2) tells us Sol y Mar satisfies the temperature
                  minimum (<InlineMath math={"77^\\circ\\!\\text{F} > 75^\\circ\\!\\text{F}"} />)
                  and is pricier than Gran Cielo, but we still don’t know the
                  actual price of either relative to the{" "}
                  <InlineMath math={"\\$3000"} /> cap. Other resorts could also
                  qualify. Not sufficient.
                </p>

                <p>
                  Together, (1) and (2) imply Gran Cielo meets both stated
                  must‑haves, and Sol y Mar meets the temperature must‑have but
                  may fail the price cap. In a restricted setting, that might
                  be enough to prefer Gran Cielo. But the stem’s wording
                  (“include” and “or neither”) keeps the group open: Kumar may
                  have other must‑haves, and a different resort could satisfy
                  everything. Therefore, we still cannot conclude which he
                  booked.
                </p>

                <p>
                  Answer: <strong>E</strong> (even together, the statements are not sufficient).
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: determine whether the group is locked or open. If the
          middle of the decision set is fixed by the stem (restricted), ignore
          outside possibilities. If not (unrestricted), bring them into your
          sufficiency analysis.
        </p>
      </article>
    </main>
  );
}