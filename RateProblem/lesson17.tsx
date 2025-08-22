import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Load KaTeX on the client for math rendering
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);
const BlockMath = dynamic(
  () => import("react-katex").then((m) => m.BlockMath),
  { ssr: false }
);

// Inject KaTeX stylesheet (kept local to this page for simplicity)
function KatexStyles() {
  return (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
      integrity="sha384-LJ3Z2S1Zl3rD0eXqS9pOwo0qF2x0AmyLhCwxfm2E3f+uCk8r9x66k2Ryc0g7Zt6b"
      crossOrigin="anonymous"
    />
  );
}

export const metadata: Metadata = {
  title: "9.12 Round‑Trip Rate Questions | Rate Problems",
  description:
    "Master round‑trip rate problems: when an object travels out and back along the same path, the one‑way distances match. Learn how to use total time, set up equations, and solve with KaTeX-rendered formulas. Includes one Problem Solving MCQ and one Data Sufficiency drill with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <KatexStyles />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.12 Round‑Trip Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A round‑trip scenario means an object goes to a destination and then
          returns by the same route. Because the path is the same in both
          directions, the one‑way distances are equal even if the travel times
          or speeds differ. This simple fact is the backbone of solving these
          problems efficiently.
        </p>

        <MustKnow>
          The outbound and inbound legs cover the same distance. In symbols:{" "}
          <InlineMath math="D_1 = D_2" />. Combined with{" "}
          <InlineMath math="D = r \times t" />, this lets you create an equation
          that ties together the two legs using rates and times.
        </MustKnow>

        <p>
          Frequently, you’ll be given only the total time for the entire
          journey. A reliable approach is to let one leg take <InlineMath math="t" />{" "}
          hours and the other leg take the remainder of the total, such as{" "}
          <InlineMath math="T - t" /> hours. You then apply{" "}
          <InlineMath math="D = r \times t" /> to each leg and exploit{" "}
          <InlineMath math="D_1 = D_2" /> to solve for the unknown.
        </p>

        <section aria-labelledby="worked-example-title" className="space-y-4">
          <h3 id="worked-example-title" className="text-xl font-semibold text-white">
            Quick Worked Example (Out-and-Back Flight)
          </h3>
          <p className="italic text-gray-200">
            A jet flies from town X to town Y at a constant{" "}
            <InlineMath math="675\ \text{mph}" />. It immediately returns along
            the same route at a constant <InlineMath math="450\ \text{mph}" />.
            The total round trip takes <InlineMath math="5" /> hours. How long
            was the flight from Y back to X?
          </p>
          <p>
            Let <InlineMath math="t" /> be the return time (Y → X). Then the
            outbound time (X → Y) is <InlineMath math="5 - t" />. Using{" "}
            <InlineMath math="D = r \times t" /> and equating the one‑way
            distances:
          </p>
          <BlockMath math="675(5 - t) = 450t" />
          <BlockMath math="3375 - 675t = 450t" />
          <BlockMath math="3375 = 1125t \quad\Rightarrow\quad t = 3" />
          <p>So, the return leg took 3 hours.</p>
        </section>

        <MustKnow>
          When only the total time is known, assign <InlineMath math="t" /> to
          one leg and <InlineMath math="T - t" /> to the other. Then apply{" "}
          <InlineMath math="D = r \times t" /> to each leg and use{" "}
          <InlineMath math="D_1 = D_2" /> to solve.
        </MustKnow>

        <p>
          Let’s lock in the method with a quick multiple‑choice question, then a
          Data Sufficiency drill.
        </p>

        <MCQExample
          number={19}
          prompt="Jack drove to school at 40 mph and came home along the same roads at 60 mph. If his total time driving was 2 hours, what was the total distance he traveled?"
          options={["48 miles", "80 miles", "96 miles", "100 miles", "112 miles"]}
          correct="96 miles"
          solution={
            <>
              <p>
                Let <InlineMath math="t" /> be the time to school. Then the
                return time is <InlineMath math="2 - t" />. Equate one‑way
                distances:
              </p>
              <BlockMath math="40t = 60(2 - t)" />
              <BlockMath math="40t = 120 - 60t \;\Rightarrow\; 100t = 120 \;\Rightarrow\; t = \frac{6}{5}" />
              <p>
                One‑way distance is <InlineMath math="40 \times \frac{6}{5} = 48" />{" "}
                miles. Since the trip out and back covers this distance twice,
                total distance is <InlineMath math="2 \times 48 = 96" /> miles.
              </p>
            </>
          }
        />

        <ExampleCard
          number={20}
          title="Distance between two cities (Data Sufficiency)"
          statements={[
            "Laura cycles from city A to city B at 45 km/h and returns along the same route at 30 km/h. What is the distance from A to B?",
            "1) The entire round trip took 10 hours.",
            "2) The trip from B back to A took 6 hours."
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                Speeds are known in both directions. We need sufficient info to
                pin down the one‑way distance.
              </p>
              <p>
                <strong>Statement (1):</strong> Total time is 10 hours. Let{" "}
                <InlineMath math="t" /> be the time from A → B; then B → A is{" "}
                <InlineMath math="10 - t" />. Equal distances give:
              </p>
              <BlockMath math="45t = 30(10 - t)" />
              <BlockMath math="45t = 300 - 30t \;\Rightarrow\; 75t = 300 \;\Rightarrow\; t = 4" />
              <p>
                Distance A → B is <InlineMath math="45 \times 4 = 180" /> km.
                Statement (1) is sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> The B → A leg took 6 hours at{" "}
                <InlineMath math="30\ \text{km/h}" />, so the one‑way distance is{" "}
                <InlineMath math="30 \times 6 = 180" /> km. Statement (2) is also
                sufficient.
              </p>
              <p>
                Each statement alone determines the distance. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Summary: In round‑trip problems, distances for the two legs match.
          Combine that with <InlineMath math="D = r \times t" /> and, when
          needed, split a total time as <InlineMath math="t" /> and{" "}
          <InlineMath math="T - t" /> to form a solvable equation.
        </p>
      </article>
    </main>
  );
}