import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Helper to render KaTeX (ensure katex CSS is loaded globally in your app layout)
function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  if (display) {
    return (
      <div
        className="my-2 overflow-x-auto"
        aria-label={ariaLabel ?? expr}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.8 Addition Rules | Probability",
  description:
    "Learn the addition rules for probabilities: when to add directly for mutually exclusive events and how to subtract overlap when events can occur together. Includes worked multiple‑choice and Data Sufficiency examples with clear reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.8 Addition Rules: Mutually Exclusive vs. Overlapping Events
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Problems that ask for the probability of “A or B” require an addition
          rule. The exact formula depends on whether A and B can happen at the
          same time.
        </p>

        <h3 className="text-xl font-semibold text-white">1) Mutually exclusive events</h3>
        <p>
          If two events cannot occur together, we add their probabilities
          directly:
        </p>
        <K expr={"P(A\\;\\text{or}\\;B)=P(A)+P(B)"} display />

        <MustKnow>
          For events that are mutually exclusive (disjoint), the “or” probability is just the sum:
          <K expr={"P(A\\cup B)=P(A)+P(B)"} />. No overlap term is needed because the
          intersection is zero.
        </MustKnow>

        <MCQExample
          number={8}
          prompt="A room contains 4 cats, 5 dogs, and 2 birds. If one animal is chosen at random for a photo, what is the probability that it is a cat or a dog?"
          options={["20/121", "10/11", "9/11", "1/11", "1/121"]}
          correct="9/11"
          solution={
            <>
              <p>
                There are 11 animals in total. Cats or dogs account for 4 + 5 = 9 animals. Since being a cat and being a dog are mutually exclusive,
                <K expr={"P(\\text{cat or dog})=\\frac{9}{11}"} />.
              </p>
              <p>
                Contrast this with a sequential “and” scenario (not asked here): pick a cat and then a dog without replacement:
                <K expr={"P(\\text{cat then dog})=\\tfrac{4}{11}\\cdot\\tfrac{5}{10}=\\tfrac{2}{11}"} />.
              </p>
            </>
          }
        />

        <h3 className="text-xl font-semibold text-white">2) Events that can overlap</h3>
        <p>
          When events are not mutually exclusive, we must subtract the overlap to avoid double counting:
        </p>
        <K expr={"P(A\\;\\text{or}\\;B)=P(A)+P(B)-P(A\\;\\text{and}\\;B)"} display />

        <MustKnow>
          If A and B can occur together, subtract the intersection once:
          <K expr={"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)"} />. Without the overlap correction, you would overcount outcomes in both A and B.
        </MustKnow>

        <MCQExample
          number={9}
          prompt="A number is selected uniformly at random from 1 to 50, inclusive. What is the probability that it is a perfect cube or an even number?"
          options={["22 percent", "42 percent", "54 percent", "56 percent", "60 percent"]}
          correct="54 percent"
          solution={
            <>
              <p>
                Even numbers from 1 to 50: 25 out of 50 ⇒ <K expr={"P(\\text{even})=\\tfrac{25}{50}"} />.
                Perfect cubes in 1..50 are 1, 8, 27 ⇒ <K expr={"P(\\text{cube})=\\tfrac{3}{50}"} />.
                The only even cube in this range is 8 ⇒ <K expr={"P(\\text{even}\\cap\\text{cube})=\\tfrac{1}{50}"} />.
              </p>
              <p>
                Therefore,
                <K expr={"P(\\text{even or cube})=\\tfrac{25}{50}+\\tfrac{3}{50}-\\tfrac{1}{50}=\\tfrac{27}{50}=54\\%"} />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={10}
          title="Probability with overlap (Data Sufficiency)"
          statements={[
            "In a group, some students like math, some like science, some like both, and some like neither. What is the probability that a randomly selected student likes math or science?",
            "1) The probability that a student likes both math and science is 1/4.",
            "2) The probability that a student likes math is 2/5.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We need <K expr={"P(\\text{math or science})"} />. Since there is overlap, use
                <K expr={"P(M\\cup S)=P(M)+P(S)-P(M\\cap S)"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> <K expr={"P(M\\cap S)=\\tfrac{1}{4}"} />. Without values for <K expr={"P(M)"} /> and <K expr={"P(S)"} />, the result is not fixed. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <K expr={"P(M)=\\tfrac{2}{5}"} />. No information about <K expr={"P(S)"} /> or the overlap. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> We have <K expr={"P(M)=\\tfrac{2}{5}"} /> and <K expr={"P(M\\cap S)=\\tfrac{1}{4}"} />, but still no value for <K expr={"P(S)"} />. Different groups can satisfy both statements while producing different values of <K expr={"P(M\\cup S)"} />. Not sufficient ⇒ Answer E.
              </p>
              <p>
                Important note: Do not assume <K expr={"P(M\\cap S)=P(M)\\cdot P(S)"} /> unless M and S are independent. Here, independence is not given.
              </p>
            </>
          }
        />

        <p>
          Summary: Use direct addition only when events are mutually exclusive. If there is any chance of overlap, subtract the intersection exactly once.
        </p>
      </article>
    </main>
  );
}