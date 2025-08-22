import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.13 Catch‑Up Rate Questions | Rate Problems",
  description:
    "Understand catch‑up scenarios in rate problems: how the speed gap closes distance, how to model start‑time offsets, and how to set up equal‑distance equations. Includes a quick worked example plus two multiple‑choice drills with full reasoning.",
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
          In a catch‑up situation, a slower traveler heads out first, and a faster
          traveler starts later on the same path. Because the faster speed closes the
          gap over time, the faster traveler eventually draws even with the slower one
          (assuming constant speeds).
        </p>

        <MustKnow>
          The gap closes at the speed difference. When both travelers begin from the
          same location and the faster one catches the slower one, their traveled
          distances are equal:
          <span className="ml-2 inline-block align-middle">
            <InlineMath math={"\\text{distance}_1 = \\text{distance}_2"} />
          </span>
        </MustKnow>

        <p>
          Often, what we need is the time it takes for the faster traveler to catch up.
          We model that time with consistent units and set the two distances equal.
        </p>

        <MustKnow>
          If one traveler starts later by a fixed amount, say Δ, then at the moment of
          catch‑up:
          <span className="ml-2 inline-block align-middle">
            <InlineMath math={"t_\\text{fast} = t"} />
          </span>
          and
          <span className="ml-2 inline-block align-middle">
            <InlineMath math={"t_\\text{slow} = t + \\Delta"} />
          </span>
          with all times measured in the same unit (hours with mph, minutes with m/min, etc.).
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick Walk‑through
          </h3>
          <p>
            Danny walks at 150 meters per minute. Four minutes later, Jenny starts running
            along the same route at 250 meters per minute. How long after Jenny starts will
            she draw even with Danny?
          </p>
          <p>Let t be Jenny’s travel time in minutes. Then Danny has walked for t + 4 minutes.</p>
          <div className="rounded-md bg-slate-900/50 p-4">
            <BlockMath math={"250t = 150(t + 4)"} />
            <BlockMath math={"250t = 150t + 600"} />
            <BlockMath math={"100t = 600 \\;\\Rightarrow\\; t = 6"} />
          </div>
          <p>Jenny catches Danny in 6 minutes.</p>
        </section>

        <MCQExample
          number={21}
          prompt="From point A, Tom starts running at 8 mph. Thirty minutes later, Shandra leaves the same point running at 12 mph on the same route. How long after Shandra starts will she catch Tom?"
          options={["30 minutes", "45 minutes", "1 hour", "75 minutes", "1.5 hours"]}
          correct="1 hour"
          solution={
            <>
              <p>
                Work in hours to match mph. Let t be Shandra’s running time (hours). Tom’s time
                at catch‑up is t + 1/2. Set distances equal:
              </p>
              <BlockMath math={"12t = 8\\bigl(t + \\tfrac{1}{2}\\bigr)"} />
              <BlockMath math={"12t = 8t + 4 \\;\\Rightarrow\\; 4t = 4 \\;\\Rightarrow\\; t = 1"} />
              <p>So Shandra needs 1 hour.</p>
            </>
          }
        />

        <MCQExample
          number={22}
          prompt="Ed drives west at j mph. After h hours, Ann leaves the same town driving west at k mph. If Ann catches Ed after driving for t hours, what is h in terms of j, k, and t?"
          options={[
            "(kt − jt)/j",
            "(k − j)/j",
            "(jt − kt)/j",
            "(jt − kt)/k",
            "(kt − jt)/k",
          ]}
          correct="(kt − jt)/j"
          solution={
            <>
              <p>
                Ann’s time is t, and Ed’s time is t + h. Equate distances:
              </p>
              <BlockMath math={"kt = j(t + h) = jt + jh"} />
              <BlockMath math={"jh = kt - jt \\;\\Rightarrow\\; h = (kt - jt)/j"} />
            </>
          }
        />

        <p>
          Big picture: in catch‑up problems, you win by modeling time correctly and setting the
          distances equal. The closing speed comes from the difference in rates, and any start‑time
          offset just shifts the slower traveler’s time by a constant amount.
        </p>
      </article>
    </main>
  );
}