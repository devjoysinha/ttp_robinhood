import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.14 Catch‑Up and Pass Rate Questions | Rate Problems",
  description:
    "Learn how to set up and solve catch‑up‑and‑pass rate problems using the core distance relationship and the quick ΔDistance/ΔRate shortcut. Includes two worked multiple‑choice examples.",
};

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap align-baseline"
      aria-label="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: true,
    strict: "ignore",
  });
  return (
    <div
      className="my-3 overflow-x-auto"
      role="img"
      aria-label="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.14 Catch‑Up and Pass Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a classic catch‑up scenario, a faster traveler leaves later (or
          starts behind), then eventually meets the slower traveler. For
          “catch‑up and pass” questions, the faster traveler doesn’t just meet
          the slower one—they must end some positive distance ahead. That small
          twist changes the equation you set up.
        </p>

        <p className="text-gray-300">
          Two common variations you’ll see:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>
            Both start from the same point, but the faster one must not only
            catch the slower one, but also finish a specified distance beyond.
          </li>
          <li>
            The faster traveler begins behind the slower traveler’s starting
            point and must either catch up or finish a set distance past the
            slower traveler.
          </li>
        </ul>

        <p>
          The setup mirrors standard rate problems, except you must account for
          that extra “lead” the faster object needs at the end.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>Use this distance relationship for catch‑up and pass:</p>
            <MathBlock expr="\text{distance}_{\text{fast}}=\text{distance}_{\text{slow}}+\text{additional distance}" />
            <p className="text-sm text-gray-300">
              The “additional distance” is the target lead the faster traveler
              must have at the end (plus any initial gap they start behind when
              appropriate).
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example (walkthrough)
          </h3>
          <p>
            Tara walks at{" "}
            <MathInline expr="80\ \frac{\text{meters}}{\text{minute}}" /> and
            Howard at{" "}
            <MathInline expr="120\ \frac{\text{meters}}{\text{minute}}" />.
            Howard starts{" "}
            <MathInline expr="30\ \text{meters}" /> behind Tara and must end{" "}
            <MathInline expr="20\ \text{meters}" /> ahead. Let the common time
            be <MathInline expr="t" /> minutes.
          </p>

          <p>
            Distances after <MathInline expr="t" /> minutes:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Tara: <MathInline expr="80t\ \text{meters}" />
            </li>
            <li>
              Howard: <MathInline expr="120t\ \text{meters}" />
            </li>
          </ul>

          <p>
            Howard’s total distance must exceed Tara’s by{" "}
            <MathInline expr="30+20=50\ \text{meters}" />:
          </p>
          <MathBlock expr="120t=80t+50\quad\Rightarrow\quad 40t=50\quad\Rightarrow\quad t=\frac{50}{40}=\frac{5}{4}=1.25\ \text{minutes}" />
          <p>So Howard needs 1.25 minutes to catch up and lead by 20 meters.</p>
        </section>

        <MCQExample
          number={23}
          prompt="Sarah and Joon run on the same circular track. Sarah’s speed is 800 feet per minute, and Joon’s speed is 1,200 feet per minute. Joon is currently 80 feet behind Sarah and must finish 40 feet ahead. How many seconds will that take?"
          options={[
            "5 seconds",
            "10 seconds",
            "18 seconds",
            "40 seconds",
            "50 seconds",
          ]}
          correct="18 seconds"
          solution={
            <>
              <p>
                Required lead change:{" "}
                <MathInline expr="80+40=120\ \text{feet}" />.
              </p>
              <p>
                Rate difference:{" "}
                <MathInline expr="1{,}200-800=400\ \frac{\text{feet}}{\text{minute}}" />
                .
              </p>
              <MathBlock expr="\text{Time}=\frac{\Delta\text{Distance}}{\Delta\text{Rate}}=\frac{120}{400}=\frac{3}{10}\ \text{minute}=18\ \text{seconds}" />
              <p>Answer: 18 seconds.</p>
            </>
          }
        />

        <MustKnow>
          <div className="space-y-2">
            <p>Shortcut for catch‑up and pass time:</p>
            <MathBlock expr="\text{Time}=\dfrac{\Delta \text{Distance}}{\Delta \text{Rate}}" />
            <ul className="list-disc space-y-1 pl-6 text-gray-300">
              <li>
                <MathInline expr="\Delta \text{Distance}" /> is how much farther
                the faster traveler must go relative to the slower one (initial
                gap plus required finishing lead).
              </li>
              <li>
                <MathInline expr="\Delta \text{Rate}" /> is the difference
                between their speeds (faster minus slower).
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={24}
          prompt="Motorcycle M travels at 40 mph and starts 8 miles behind moped P, which travels at 20 mph. How many minutes until M is 6 miles ahead of P on the same route?"
          options={["42", "45", "48", "54", "60"]}
          correct="42"
          solution={
            <>
              <p>
                The faster vehicle must cover the initial{" "}
                <MathInline expr="8" /> miles plus the final{" "}
                <MathInline expr="6" />‑mile lead:{" "}
                <MathInline expr="\Delta\text{Distance}=8+6=14\ \text{miles}" />.
              </p>
              <p>
                Rate gap: <MathInline expr="40-20=20\ \text{mph}" />.
              </p>
              <MathBlock expr="\text{Time}=\frac{14}{20}=\frac{7}{10}\ \text{hour}= \frac{7}{10}\cdot 60=42\ \text{minutes}" />
              <p>Answer: 42.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            For catch‑up and pass questions, anchor your setup with the distance
            relationship or jump straight to the shortcut{" "}
            <MathInline expr="\text{Time}=\dfrac{\Delta \text{Distance}}{\Delta \text{Rate}}" />
            . Carefully compute both the total distance advantage the faster
            mover needs and the rate difference. Convert units at the end.
          </p>
        </section>
      </article>
    </main>
  );
}