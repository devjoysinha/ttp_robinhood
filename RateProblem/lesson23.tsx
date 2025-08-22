import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
// NOTE: Ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9.17 If/Then Rate Questions | Rate Problems",
  description:
    "A structured approach to 'if/then' rate problems: translate the scenario, set up equations with D = r·t, and solve. Includes a fully worked mini‑example and two practice questions with solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.17 If/Then Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In “if/then” rate problems, you’re told what actually happened and also
          how the trip would have changed under different conditions (for
          example, a different speed). The key is to write equations for the
          actual trip and for the hypothetical trip, both using the same
          distance.
        </p>

        <MustKnow>
          If/then rate statements compare two versions of the same trip:
          - the actual version, with rate <InlineMath math="r" /> and time{" "}
          <InlineMath math="t" />, and
          - a hypothetical version, often with a changed rate and a time gain or
          loss.
          Use <InlineMath math="D = r \cdot t" /> for both, then solve the
          system. Because the distance is the same in both scenarios, you can
          equate or substitute to isolate the unknown.
        </MustKnow>

        <section aria-labelledby="pattern">
          <h3 id="pattern" className="text-xl font-semibold text-white">
            The recurring statement pattern
          </h3>
          <p className="mt-2">
            You’ll often see phrasing like:
          </p>
          <p className="italic">
            “If the object had traveled at [new rate], it would have finished
            [k hours sooner/later].”
          </p>
          <p className="mt-2">
            That translates to a new rate and an adjusted time for the same
            distance.
          </p>
        </section>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example (fully worked)
          </h3>
          <p>
            A car covers 24 miles at a constant rate. If it had gone 1 mph
            faster, it would have saved 2 hours. What was its actual speed?
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Let <InlineMath math="r" /> be the actual rate (mph) and{" "}
                <InlineMath math="t" /> be the actual time (hours).
              </li>
              <li>
                Actual trip: <InlineMath math="D = r t = 24" /> so{" "}
                <InlineMath math="t = \dfrac{24}{r}" />.
              </li>
              <li>
                Hypothetical trip: rate <InlineMath math="r + 1" />, time{" "}
                <InlineMath math="t - 2" />, same distance 24:
                <BlockMath math="(r+1)(t-2) = 24" />
              </li>
              <li>
                Substitute <InlineMath math="t = \dfrac{24}{r}" />:
                <BlockMath math="(r+1)\!\left(\dfrac{24}{r} - 2\right)=24" />
              </li>
              <li>
                Simplify:
                <BlockMath math="\dfrac{24(r+1)}{r} - 2(r+1) = 24" />
                Multiply by <InlineMath math="r" />:
                <BlockMath math="24(r+1) - 2r(r+1) = 24r" />
                <BlockMath math="-2r^2 - 2r + 24 = 0" />
                Divide by <InlineMath math=" -2" />:
                <BlockMath math="r^2 + r - 12 = 0" />
                <BlockMath math="(r+4)(r-3)=0 \Rightarrow r=3 \text{ (reject } r=-4\text{)}" />
              </li>
            </ul>
            <p className="mt-2">
              Therefore, the car’s speed was 3 mph.
            </p>
          </div>
        </section>

        <section aria-labelledby="tips">
          <h3 id="tips" className="text-xl font-semibold text-white">
            Setup tips
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Use a quick table to keep the two trips straight (actual vs.
              hypothetical).
            </li>
            <li>
              Always apply <InlineMath math="D = r \cdot t" />; distance is the
              same in both scenarios.
            </li>
            <li>
              Substitute to get a single equation in one variable and solve.
            </li>
          </ul>
        </section>

        <section aria-labelledby="examples" className="space-y-8">
          <h3 id="examples" className="text-xl font-semibold text-white">
            Practice examples
          </h3>

          <MCQExample
            number={29}
            prompt="A taxi traveled at a constant speed to a destination 30 miles away. If the taxi had instead driven 4 mph faster, it would have arrived 2 hours sooner. What was the taxi’s actual speed (in mph)?"
            options={["4", "6", "8", "10", "12"]}
            correct="6"
            solution={
              <>
                <p>
                  Let <InlineMath math="r" /> be the actual rate and{" "}
                  <InlineMath math="t" /> the actual time.
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Actual: <InlineMath math="rt=30" /> so{" "}
                    <InlineMath math="t=\dfrac{30}{r}" />.
                  </li>
                  <li>
                    Hypothetical: rate <InlineMath math="r+4" />, time{" "}
                    <InlineMath math="t-2" />, distance 30:
                    <BlockMath math="(r+4)(t-2)=30" />
                  </li>
                  <li>
                    Substitute <InlineMath math="t=\dfrac{30}{r}" />:
                    <BlockMath math="(r+4)\!\left(\dfrac{30}{r}-2\right)=30" />
                    <BlockMath math="\dfrac{30(r+4)}{r} - 2(r+4)=30" />
                    Multiply by <InlineMath math="r" />:
                    <BlockMath math="30(r+4) - 2r(r+4)=30r" />
                    <BlockMath math="-2r^2 - 8r + 120 = 0" />
                    Divide by <InlineMath math="-2" />:
                    <BlockMath math="r^2 + 4r - 60 = 0" />
                    <BlockMath math="(r+10)(r-6)=0 \Rightarrow r=6" />
                  </li>
                </ul>
                <p className="mt-2">Answer: 6 mph.</p>
              </>
            }
          />

          <MCQExample
            number={30}
            prompt="Thomas biked 60 miles at a constant speed. If he had ridden 2 mph faster, he would have arrived 1 hour earlier. What was Thomas’s actual speed?"
            options={["6 mph", "10 mph", "12 mph", "15 mph", "18 mph"]}
            correct="10 mph"
            solution={
              <>
                <p>
                  Let <InlineMath math="r" /> be the actual rate and{" "}
                  <InlineMath math="t" /> the actual time.
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Actual: <InlineMath math="rt=60" /> so{" "}
                    <InlineMath math="t=\dfrac{60}{r}" />.
                  </li>
                  <li>
                    Hypothetical: rate <InlineMath math="r+2" />, time{" "}
                    <InlineMath math="t-1" />, distance 60:
                    <BlockMath math="(r+2)(t-1)=60" />
                  </li>
                  <li>
                    Substitute <InlineMath math="t=\dfrac{60}{r}" />:
                    <BlockMath math="(r+2)\!\left(\dfrac{60}{r}-1\right)=60" />
                    <BlockMath math="\dfrac{60(r+2)}{r} - (r+2)=60" />
                    Multiply by <InlineMath math="r" />:
                    <BlockMath math="60(r+2) - r(r+2)=60r" />
                    <BlockMath math="-r^2 + 120 - 2r = 0" />
                    Rearrange:
                    <BlockMath math="r^2 + 2r - 120 = 0" />
                    <BlockMath math="(r+12)(r-10)=0 \Rightarrow r=10" />
                  </li>
                </ul>
                <p className="mt-2">Answer: 10 mph.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            Write the actual and hypothetical versions of{" "}
            <InlineMath math="D = r \cdot t" />, use the same distance in both,
            and substitute to get a single equation. The algebra is routine once
            the translation is correct.
          </p>
        </section>
      </article>
    </main>
  );
}