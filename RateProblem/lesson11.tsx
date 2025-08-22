import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "9.10 Variations of Converging Rate Questions | Rate Problems",
  description:
    "Understand the main variations in converging rate problems: simultaneous starts, delayed starts, unequal speeds, and relative-speed descriptions. Includes KaTeX formulas, one quick multiple‑choice drill, and a Data Sufficiency example with full reasoning.",
};

// Server-rendered KaTeX helper (assumes KaTeX CSS is included globally)
function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
    output: "html",
  });

  if (display) {
    return (
      <div
        role="math"
        aria-label={ariaLabel}
        className="my-3 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className="inline-block align-middle"
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
          9.10 Variations of Converging Rate Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When two movers head toward each other, you’re dealing with a
          converging motion scenario. These problems often look different on the
          surface, but the same core ideas drive them. The most common twists
          you’ll see are:
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>Both travelers depart at the same moment.</li>
          <li>They leave at different times, creating a head start for one.</li>
          <li>One traveler’s speed is greater (or smaller) than the other’s.</li>
          <li>
            A relative description is used, such as “A is k% faster than B,”
            rather than absolute speeds.
          </li>
        </ul>

        <p>
          These variations show up across many rate problems, not just
          converging ones. Below we frame them in the converging context and set
          up the formulas you’ll use over and over.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="text-gray-200 font-semibold">Key formulas</p>
            <p className="text-gray-300">
              Base relationship: <Math expr="r = \dfrac{d}{t}" ariaLabel="rate equals distance over time" />.
            </p>
            <p className="text-gray-300">
              When two objects move toward each other, their{" "}
              <em>relative speed</em> is the sum of their individual speeds:{" "}
              <Math
                expr="r_{\text{rel}} = r_1 + r_2"
                ariaLabel="relative speed equals r1 plus r2"
              />
              .
            </p>
            <p className="text-gray-300">
              Meeting time with simultaneous starts and fixed initial distance{" "}
              <Math expr="D" ariaLabel="D" />:
              <Math
                display
                expr="t_{\text{meet}} = \dfrac{D}{r_1 + r_2}"
                ariaLabel="meeting time equals D over r1 plus r2"
              />
            </p>
            <p className="text-gray-300">
              If one leaves earlier, account for the head start. Let B leave
              first and travel for <Math expr="\Delta t" ariaLabel="delta t" />{" "}
              hours before A departs. Then at A’s start, the remaining gap is{" "}
              <Math
                expr="D' = D - r_B \,\Delta t"
                ariaLabel="D prime equals D minus r sub B times delta t"
              />
              , and the meeting time after A starts is{" "}
              <Math
                expr="t' = \dfrac{D'}{r_A + r_B}"
                ariaLabel="t prime equals D prime over r A plus r B"
              />
              . Total time for B is <Math expr="t_B = \Delta t + t'" ariaLabel="t B equals delta t plus t prime" />.
            </p>
            <p className="text-gray-300">
              “A is k% faster than B” translates to{" "}
              <Math
                expr="r_A = \left(1 + \dfrac{k}{100}\right) r_B"
                ariaLabel="r A equals one plus k over 100 times r B"
              />
              .
            </p>
          </div>
        </MustKnow>

        <p>
          In short, identify the timing pattern (same start vs. delayed start),
          determine individual speeds, convert any relative wording into
          algebra, and then apply{" "}
          <Math
            expr="r_{\text{rel}} = r_1 + r_2"
            ariaLabel="relative speed equals r1 plus r2"
          />{" "}
          to find the meeting time or distances.
        </p>

        <MCQExample
          number={31}
          prompt="Two runners start from opposite ends of a 900-meter track at the same moment. Their constant speeds are 6 m/s and 4 m/s. After how many seconds will they meet?"
          options={["45", "60", "90", "120", "225"]}
          correct="90"
          solution={
            <>
              <p>
                For converging motion with simultaneous starts, use{" "}
                <Math
                  expr="t_{\text{meet}} = \dfrac{D}{r_1 + r_2}"
                  ariaLabel="meeting time equals D over r1 plus r2"
                />
                .
              </p>
              <Math
                display
                expr="\displaystyle t_{\text{meet}} = \frac{900}{6 + 4} = \frac{900}{10} = 90 \text{ seconds}"
                ariaLabel="t meet equals 900 over 10 equals 90 seconds"
              />
              <p>Answer: 90.</p>
            </>
          }
        />

        <p>
          Be careful when departures are staggered. A head start reduces the
          remaining gap before the second traveler even begins, and that changes
          the time calculation.
        </p>

        <ExampleCard
          number={32}
          title="Meeting point location with unequal speeds and a delayed start"
          statements={[
            "Two cars start toward each other from points P and Q on a straight road. The distance PQ is D kilometers. Is the meeting point closer to P than to Q?",
            "1) Car A (from P) travels 25% faster than Car B.",
            "2) Car B leaves 20 minutes before Car A, and they meet 2 hours after B departs.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We want to know whether the distance from P to the meeting
                point, <Math expr="d_A" ariaLabel="d A" />, is less than the
                distance from Q to the meeting point,{" "}
                <Math expr="d_B" ariaLabel="d B" />. Equivalently, decide
                whether <Math expr="d_A &lt; d_B" ariaLabel="d A less than d B" />{" "}
                or <Math expr="d_A &gt; d_B" ariaLabel="d A greater than d B" />.
              </p>
              <p>
                Let speeds be <Math expr="r_A" ariaLabel="r A" /> and{" "}
                <Math expr="r_B" ariaLabel="r B" />, and travel times be{" "}
                <Math expr="t_A" ariaLabel="t A" /> and{" "}
                <Math expr="t_B" ariaLabel="t B" />. Distances are{" "}
                <Math expr="d_A = r_A t_A" ariaLabel="d A equals r A t A" /> and{" "}
                <Math expr="d_B = r_B t_B" ariaLabel="d B equals r B t B" />.
              </p>
              <p>
                Statement (1): <Math expr="r_A = 1.25\, r_B" ariaLabel="r A equals 1.25 r B" />. We know the speed
                ratio, but we don’t know the relative times, so{" "}
                <Math
                  expr="d_A/d_B = \dfrac{r_A t_A}{r_B t_B}"
                  ariaLabel="d A over d B equals r A t A over r B t B"
                />{" "}
                is not fixed. Not sufficient.
              </p>
              <p>
                Statement (2): B leaves 20 minutes early and they meet 2 hours
                after B departs. Then{" "}
                <Math
                  expr="t_B = 2 \text{ hr},\quad t_A = 2 - \tfrac{1}{3} = \tfrac{5}{3} \text{ hr}"
                  ariaLabel="t B equals 2 hours; t A equals 5 thirds hours"
                />
                . Without the speed ratio,{" "}
                <Math
                  expr="d_A/d_B = \dfrac{r_A t_A}{r_B t_B}"
                  ariaLabel="d A over d B equals r A t A over r B t B"
                />{" "}
                is still undetermined. Not sufficient.
              </p>
              <p>
                Together:{" "}
                <Math
                  expr="\dfrac{d_A}{d_B} = \dfrac{r_A t_A}{r_B t_B} = 1.25 \cdot \dfrac{5/3}{2} = 1.25 \cdot \dfrac{5}{6} = \dfrac{25}{24} &gt; 1"
                  ariaLabel="d A over d B equals 25 over 24 greater than 1"
                />
                . So <Math expr="d_A &gt; d_B" ariaLabel="d A greater than d B" />, meaning the meeting
                point is closer to Q than to P. Sufficient together.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <MustKnow>
          - For simultaneous starts, add speeds and use{" "}
          <Math
            expr="t = \dfrac{D}{r_1 + r_2}"
            ariaLabel="t equals D over r1 plus r2"
          />
          .
          <br />
          - For staggered starts, reduce the initial gap by the head start
          distance before applying the relative-speed formula.
          <br />- Translate relative phrasing (e.g., “k% faster”) into an
          equation before solving.
        </MustKnow>

        <p>
          As you practice, always map the scenario to timing, speeds, and the
          remaining gap. That habit keeps the algebra simple and avoids
          off-by-one timing errors.
        </p>
      </article>
    </main>
  );
}