import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.4.1 Reverse the Causal Direction | Critical Reasoning",
  description:
    "Learn how to weaken a cause‑and‑effect claim by showing the arrow can point the other way. Two GMAT‑style multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Cause and Effect Arguments
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.4.1 Weakening a Cause–and–Effect Argument by Reversing the Relationship
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quick way to undermine a causal claim is to argue that the direction might be flipped:
          instead of <InlineMath math={"A\\ \\to\\ B"} /> (A causes B), perhaps{" "}
          <InlineMath math={"B\\ \\to\\ A"} /> (B causes A). If the evidence is only that A and B
          occur together, then either direction could plausibly explain the pattern.
        </p>

        <MustKnow>
          To weaken a causal conclusion drawn from a correlation, show that the arrow of causation
          could run in the opposite direction. If the reverse story{" "}
          <InlineMath math={"B\\ \\to\\ A"} /> is viable, the original claim{" "}
          <InlineMath math={"A\\ \\to\\ B"} /> loses force.
        </MustKnow>

        <p>
          Example of the idea: suppose a therapist observes that clients with higher self‑confidence
          tend to beat personal challenges more often. The argument “confidence causes success”
          can be shaken by proposing the reverse: overcoming challenges builds confidence, which
          explains why confident clients are the ones succeeding.
        </p>

        <MustKnow>
          Any author who concludes “X causes Y” is assuming there isn’t another reasonable
          explanation for the observed association. Questioning that assumption—by proposing a
          reversed direction or another mechanism—weakens the claim.
        </MustKnow>

        <MCQExample
          number={9}
          prompt="A biology professor notices that students who drink the most coffee also seem the most anxious and concludes that caffeine increases anxiety. Which option most weakens the professor’s conclusion?"
          options={[
            "People commonly respond to anxiety by drinking warm beverages such as coffee.",
            "Coffee contains no ingredients other than caffeine that could raise anxiety.",
            "Students who drank decaffeinated coffee reported less anxiety.",
            "Biology majors generally drink more coffee than students in other departments.",
            "Biology majors generally report higher anxiety than students in other departments.",
          ]}
          correct="People commonly respond to anxiety by drinking warm beverages such as coffee."
          solution={
            <>
              <p>
                The conclusion asserts caffeine causes anxiety. A strong way to weaken is to suggest
                the reverse direction: anxiety leads to increased coffee consumption.
              </p>
              <p>
                Choice A does exactly that—people may drink coffee when they feel anxious—so the
                observed correlation could be explained by <InlineMath math={"\\text{anxiety}\\ \\to\\ \\text{coffee}"} /> rather than{" "}
                <InlineMath math={"\\text{coffee}\\ \\to\\ \\text{anxiety}"} />. That undermines the
                causal claim.
              </p>
              <p>
                Choice B removes a competing ingredient and thus bolsters the caffeine‑causes‑anxiety
                story, not weaken it. Choice C suggests caffeine matters and therefore supports the
                original claim. Choices D and E bring up other groups without tying both variables
                together; they don’t address the causal direction within the biology group.
              </p>
            </>
          }
        />

        <MCQExample
          number={10}
          prompt="An urban planner observes that the city’s most congested areas also have the most crashes and recommends reducing congestion to lower crash counts. Which finding most calls into question the recommendation’s effectiveness?"
          options={[
            "Many crashes are caused by driver distraction.",
            "Reducing congestion in large cities is costly.",
            "Many of the most severe crashes occur late at night.",
            "Traffic tie‑ups often form after crashes occur.",
            "Another city widened roads, reduced congestion, and then saw fewer crashes.",
          ]}
          correct="Traffic tie‑ups often form after crashes occur."
          solution={
            <>
              <p>
                The recommendation treats congestion as the cause of crashes. To weaken, show the
                causal arrow may point the other way: crashes trigger congestion. If{" "}
                <InlineMath math={"\\text{crashes}\\ \\to\\ \\text{congestion}"} /> rather than{" "}
                <InlineMath math={"\\text{congestion}\\ \\to\\ \\text{crashes}"} />, then cutting
                congestion wouldn’t necessarily reduce crashes.
              </p>
              <p>
                Choice D provides precisely that reverse‑direction story, undercutting the plan’s
                rationale. Choice A names a different cause but doesn’t address the observed pairing.
                Choice B is about cost, not effect. Choice C doesn’t rebut the given correlation,
                and Choice E actually supports the recommendation.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when a conclusion leans on “they occur together,” pressure‑test the direction
          of causality. If the middle step still makes sense when you flip{" "}
          <InlineMath math={"A\\ \\leftrightarrow\\ B"} />, the original causal claim is on shaky
          ground.
        </p>
      </article>
    </main>
  );
}