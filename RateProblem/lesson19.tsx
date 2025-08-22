import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

// Note: ensure KaTeX CSS is loaded globally (e.g., in app/globals.css):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9.13 Catch‑Up Rate Questions | Rate Problems",
  description:
    "Master catch‑up (pursuit) problems: model head starts, set up distance equations, and solve with relative speed. Includes a quick worked example and two MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.13 Catch‑Up Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a catch‑up (pursuit) scenario, a slower traveler leaves first and a faster
          traveler follows the same path later. Because the faster traveler has a higher
          speed, they eventually close the gap and meet the slower one.
        </p>

        <MustKnow>
          • The driver of a catch‑up is the speed gap (relative speed). The larger the
          difference, the less time it takes to erase the head start.{" "}
          <br />• When two objects move along the same path and eventually meet, they
          have covered the same distance at the catch‑up moment.
        </MustKnow>

        <p>
          Two standard setups capture nearly every pursuit problem:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Same starting point, staggered times: let the later traveler’s time be{" "}
            <InlineMath math={"t"} />. If the other left <InlineMath math={"\\Delta"} /> hours earlier,
            that person’s time is <InlineMath math={"t+\\Delta"} />.
          </li>
          <li>
            At the meeting time, equate distances:{" "}
            <InlineMath math={"\\text{distance}_1 = \\text{distance}_2"} /> with{" "}
            <InlineMath math={"\\text{distance} = \\text{rate} \\times \\text{time}"} />.
          </li>
        </ul>

        <MustKnow>
          With a head start from the same location, the first traveler’s time is longer. If the
          faster traveler moves for <InlineMath math={"t"} /> hours, then the slower traveler with a{" "}
          <InlineMath math={"\\Delta"} />‑hour head start moves for <InlineMath math={"t+\\Delta"} /> hours.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick worked example
          </h3>
          <p>
            Danny walks at 150 m/min. Four minutes later, Jenny runs at 250 m/min along the same
            route. How long after Jenny starts will she catch Danny?
          </p>
          <p>
            Let <InlineMath math={"t"} /> be Jenny’s time (in minutes). Danny travels{" "}
            <InlineMath math={"t+4"} /> minutes. Using <InlineMath math={"D = r\\,t"} /> and equating distances at
            catch‑up:
          </p>
          <BlockMath math={"150\\,(t+4) = 250\\,t"} />
          <BlockMath math={"150t + 600 = 250t \\quad\\Rightarrow\\quad 600 = 100t \\quad\\Rightarrow\\quad t = 6"} />
          <p>Jenny catches Danny after 6 minutes.</p>
        </section>

        <MCQExample
          number={21}
          prompt="From point A, Tom runs at 8 mph. Thirty minutes later, Shandra starts from the same point on the same path at 12 mph. How long does it take Shandra to catch Tom?"
          options={["30 minutes", "45 minutes", "1 hour", "75 minutes", "1.5 hours"]}
          correct="1 hour"
          solution={
            <>
              <p>
                Let <InlineMath math={"t"} /> be Shandra’s time (in hours). Tom runs{" "}
                <InlineMath math={"t+\\tfrac{1}{2}"} /> hours. Set distances equal:
              </p>
              <BlockMath math={"12t = 8\\left(t + \\tfrac{1}{2}\\right)"} />
              <BlockMath math={"12t = 8t + 4 \\quad\\Rightarrow\\quad 4t = 4 \\quad\\Rightarrow\\quad t = 1"} />
              <p>Shandra catches Tom after 1 hour.</p>
            </>
          }
        />

        <MCQExample
          number={22}
          prompt={
            <>
              Ed drives west at <InlineMath math={"j"} /> mph. After{" "}
              <InlineMath math={"h"} /> hours, Ann leaves the same town on the same road at{" "}
              <InlineMath math={"k"} /> mph. If Ann catches Ed after driving for{" "}
              <InlineMath math={"t"} /> hours, what is <InlineMath math={"h"} /> in terms of{" "}
              <InlineMath math={"j,\\ k,\\ t"} />?
            </>
          }
          options={[
            "(kt − jt) / j",
            "(k − j) / j",
            "(jt − kt) / j",
            "(jt − kt) / k",
            "(kt − jt) / k",
          ]}
          correct="(kt − jt) / j"
          solution={
            <>
              <p>
                Ann’s time is <InlineMath math={"t"} />; Ed has been driving{" "}
                <InlineMath math={"t+h"} />. Equal distances at catch‑up:
              </p>
              <BlockMath math={"j\\,(t+h) = k\\,t"} />
              <BlockMath math={"jt + jh = kt \\quad\\Rightarrow\\quad jh = kt - jt \\quad\\Rightarrow\\quad h = \\dfrac{kt - jt}{j}"} />
              <p>
                So <InlineMath math={"h = \\dfrac{kt - jt}{j}"} />.
              </p>
            </>
          }
        />

        <MustKnow>
          A quick alternative: when motion is collinear, catch‑up time also equals “lead distance ÷
          relative speed.” If the lead comes from a head start of <InlineMath math={"\\Delta"} /> hours at speed{" "}
          <InlineMath math={"v_1"} />, the lead distance is <InlineMath math={"v_1\\,\\Delta"} />, and the relative speed is{" "}
          <InlineMath math={"v_2 - v_1"} /> (with <InlineMath math={"v_2 > v_1"} />).
        </MustKnow>

        <p>
          Bottom line: translate the story into times, rates, and distances, then either equate
          distances or use lead ÷ relative speed. Both methods produce the same result.
        </p>
      </article>
    </main>
  );
}