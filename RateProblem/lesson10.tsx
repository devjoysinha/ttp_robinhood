import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "9.9 Converging Rate Questions | Rate Problems",
  description:
    "Understand motion toward each other: why the distances add to the original separation, how to express it with equations, and what stays constant when objects meet.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.9 Converging Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Converging scenarios involve two movers heading toward one another. As
          soon as they meet, the path covered by the first plus the path covered
          by the second equals the initial distance that separated them.
        </p>

        <MustKnow>
          When two objects travel toward each other and eventually meet, the total
          distance between their starting points is exactly the sum of the
          distances each has traveled. This is true regardless of where they meet
          or how their speeds compare.
        </MustKnow>

        <p>
          A helpful way to think about it: the meeting point can slide anywhere
          along the segment between the start positions, but no matter where the
          meeting occurs, the two traveled distances always “fill” that segment
          completely.
        </p>

        <section aria-labelledby="formula" className="space-y-3">
          <h3 id="formula" className="text-lg font-semibold text-white">
            Core relationship
          </h3>
          <p>
            If we let <InlineMath options={{ output: "htmlAndMathml" }}>d_1</InlineMath> and{" "}
            <InlineMath options={{ output: "htmlAndMathml" }}>d_2</InlineMath> be the distances
            traveled by object 1 and object 2 up to the moment they meet, then:
          </p>
          <BlockMath options={{ output: "htmlAndMathml" }}>
            d_1 + d_2 = D_{\text{initial}}
          </BlockMath>
          <p>
            Here, <InlineMath options={{ output: "htmlAndMathml" }}>D_{\text{initial}}</InlineMath>{" "}
            is the initial separation between the two objects. Also remember{" "}
            <InlineMath options={{ output: "htmlAndMathml" }}>d = r \times t</InlineMath> for each
            traveler, where <InlineMath options={{ output: "htmlAndMathml" }}>r</InlineMath> is rate
            and <InlineMath options={{ output: "htmlAndMathml" }}>t</InlineMath> is time in motion.
          </p>
        </section>

        <section aria-labelledby="example" className="space-y-3">
          <h3 id="example" className="text-lg font-semibold text-white">
            Quick intuition check
          </h3>
          <p>
            Suppose two cars begin 100 miles apart and drive toward each other at
            constant speeds. One possible outcome is that each car travels 50
            miles before they meet. Another is that one travels 99.9 miles while
            the other travels only 0.1 mile. In both cases, the distances add to
            100 miles—the original gap—so the relationship above holds in every
            converging case.
          </p>
        </section>

        <MustKnow>
          The equation for a meet-up is additive: the distances covered by both
          travelers sum to the original separation. In symbols:
          <BlockMath options={{ output: "htmlAndMathml" }}>
            \text{distance}_{1} + \text{distance}_{2} = \text{initial distance}
          </BlockMath>
          Combine this with <InlineMath options={{ output: "htmlAndMathml" }}>d = rt</InlineMath> to
          build equations for unknown times, rates, or the meeting point.
        </MustKnow>

        <section aria-labelledby="whats-next" className="space-y-2">
          <h3 id="whats-next" className="text-lg font-semibold text-white">
            What’s next
          </h3>
          <p>
            In the next section, we’ll apply this idea to common variations:
            leaving at the same time, leaving at different times, unequal speeds,
            and relative speed shortcuts.
          </p>
        </section>
      </article>
    </main>
  );
}