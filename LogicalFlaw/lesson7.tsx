import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "10.2.5 Cause-and-Effect Logical Flaws | Critical Reasoning",
  description:
    "Spot and avoid cause–effect reasoning traps: correlation vs. causation, reverse causality, and hidden-variable confounds. Includes two GMAT-style multiple‑choice drills with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.5 Cause–and–Effect Errors in Reasoning
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Argument writers frequently misread how causes and effects relate.
          A common misstep is to treat things that happen together—or one after
          the other—as if one must have produced the other.
        </p>

        <MustKnow>
          Co‑occurrence or sequence alone does not prove causation. The fact
          that two events happen together, or that one follows another, does not
          by itself show that one event caused the other.
        </MustKnow>

        <p>
          These mistakes show up often in Logical Flaw questions. Train yourself
          to probe alternative explanations before accepting a cause–effect
          claim.
        </p>

        <MustKnow>
          In Logical Flaw prompts, cause–effect claims are frequently wrong
          because they overlook competing explanations or misidentify what
          causes what.
        </MustKnow>

        <section aria-labelledby="three-pitfalls" className="space-y-3">
          <h3 id="three-pitfalls" className="text-xl font-semibold text-white">
            Three classic cause–effect pitfalls
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Mere correlation: The link could be a coincidence; no causal
              relationship exists.
            </li>
            <li>
              Reverse causality: The direction could be flipped. Instead of{" "}
              <InlineMath math={"X \\to Y"} /> it may be{" "}
              <InlineMath math={"Y \\to X"} />.
            </li>
            <li>
              Hidden variable: A third factor drives both variables—think{" "}
              <InlineMath math={"Z \\to X"} /> and{" "}
              <InlineMath math={"Z \\to Y"} />—so <InlineMath math={"X"} /> and{" "}
              <InlineMath math={"Y"} /> rise and fall together without a direct
              causal link.
            </li>
          </ul>
        </section>

        <MCQExample
          number={7}
          prompt="The transportation chief notices that neighborhoods with more bike-repair shops also have more cyclists. To boost cycling, she proposes tax breaks to open additional repair shops. Which criticism best identifies a flaw?"
          options={[
            "It assumes a correlation cannot be a coincidence.",
            "It fails to consider that more cyclists may be what attracts more repair shops (the direction of causality could be reversed).",
            "It presumes the current number of shops is insufficient to meet demand.",
            "It overlooks that new shops might charge higher prices.",
            "It ignores potential seasonal variation in cycling rates.",
          ]}
          correct="It fails to consider that more cyclists may be what attracts more repair shops (the direction of causality could be reversed)."
          solution={
            <>
              <p>
                The argument observes a correlation and leaps to a policy based
                on the causal claim “more shops cause more cyclists.” A key
                alternative is the reverse: areas with many cyclists attract
                shops. If the causality is actually{" "}
                <InlineMath math={"\\text{cyclists} \\to \\text{shops}"} />, the
                plan may not raise ridership. Thus, the best criticism points to
                reverse causation.
              </p>
            </>
          }
        />

        <section aria-labelledby="example-setup" className="space-y-3">
          <h3 id="example-setup" className="text-xl font-semibold text-white">
            Another example
          </h3>
          <p>
            An author argues that because regions with fluoridated water report
            higher rates of childhood attention and learning issues than regions
            without fluoridation, adding fluoride to public water is unsafe and
            the Dental Association’s safety claim is false.
          </p>
        </section>

        <MCQExample
          number={8}
          prompt="Which of the following is the best criticism of the argument above?"
          options={[
            "It overlooks that some people might accept a higher risk of attention and learning issues to avoid cavities.",
            "It assumes, without basis, that fluoridated water affects everyone in exactly the same way.",
            "It ignores that regions with fluoridated water may share other features tied to attention and learning issues.",
            "It neglects that dentists may have incentives that conflict with endorsing fluoridation.",
            "It fails to show that, prior to fluoridation, no child in those regions had attention or learning issues.",
          ]}
          correct="It ignores that regions with fluoridated water may share other features tied to attention and learning issues."
          solution={
            <>
              <p>
                The argument treats a correlation as proof that fluoridation
                causes the reported issues. A strong counter is the possibility
                of a confound: regions that fluoridate may also share other
                characteristics—environmental, demographic, or policy related—
                that lead to higher rates of these issues. If such a{" "}
                <InlineMath math={"Z"} /> factor exists (
                <InlineMath math={"Z \\to \\text{fluoridation}"} /> and{" "}
                <InlineMath math={"Z \\to \\text{issues}"} />), the causal
                conclusion falls apart.
              </p>
              <p>
                The other choices miss the core logical flaw: they raise value
                judgments (A), require uniform effects (B), speculate about
                incentives unrelated to the author’s claim (D), or demand an
                unnecessary absolute (E).
              </p>
            </>
          }
        />

        <p>
          Bottom line: don’t accept cause–effect claims on correlation alone.
          Always check whether the direction could be reversed or whether a
          third variable could be driving both trends. If those alternatives
          plausibly hold, the causal conclusion is not justified.
        </p>
      </article>
    </main>
  );
}