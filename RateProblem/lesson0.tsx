import type { Metadata } from "next";
import katex from "katex";
// NOTE: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({
  children,
  ariaLabel,
}: {
  children: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({
  children,
  ariaLabel,
}: {
  children: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.1 Introduction to Rates | Quantitative Reasoning",
  description:
    "Understand what a rate is, see common unit examples, and learn the distance–rate–time relationship. Includes a quick MCQ and a data sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.1 Introduction to Rates
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A rate compares two quantities with different units. In everyday math,
          we read a rate as “per,” meaning “for each.” A few familiar examples:
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            Miles per hour:{" "}
            <KInline ariaLabel="miles per hour">
              {\`\\\\dfrac{\\text{miles}}{\\text{hour}}\`}
            </KInline>
          </li>
          <li>
            Calories per mile:{" "}
            <KInline ariaLabel="calories per mile">
              {\`\\\\dfrac{\\text{calories}}{\\text{mile}}\`}
            </KInline>
          </li>
          <li>
            Chocolate bars per week:{" "}
            <KInline ariaLabel="chocolate bars per week">
              {\`\\\\dfrac{\\text{chocolate\\ bars}}{\\text{week}}\`}
            </KInline>
          </li>
          <li>
            Gallons per second:{" "}
            <KInline ariaLabel="gallons per second">
              {\`\\\\dfrac{\\text{gallons}}{\\text{second}}\`}
            </KInline>
          </li>
        </ul>

        <p>
          When a process runs at a constant rate, the two units move together in
          lockstep. Saying a car travels at 4 miles per hour guarantees that
          whenever 1 hour passes, 4 miles are covered—and vice versa.
        </p>

        <MustKnow>
          <div>
            Keep the core relationship front and center:
            <KBlock ariaLabel="distance equals rate times time">
              {"d = r\\,t"}
            </KBlock>
            From this, the other forms follow:{" "}
            <KInline ariaLabel="rate equals distance over time">
              {"r = \\dfrac{d}{t}"}
            </KInline>{" "}
            and{" "}
            <KInline ariaLabel="time equals distance over rate">
              {"t = \\dfrac{d}{r}"}
            </KInline>
            . Always carry the units through your work and convert minutes,
            seconds, and hours as needed.
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="A cyclist rides at a constant speed of 18 kilometers per hour. How far does the cyclist travel in 50 minutes?"
          options={["12", "14", "15", "16", "18"]}
          correct="15"
          solution={
            <>
              <p>
                Convert 50 minutes to hours:{" "}
                <KInline ariaLabel="fifty minutes equals five sixths hour">
                  {"50\\text{ min} = \\dfrac{50}{60}\\text{ hr} = \\dfrac{5}{6}\\text{ hr}"}
                </KInline>
                .
              </p>
              <p>
                Apply{" "}
                <KInline ariaLabel="distance equals rate times time">
                  {"d = r\\,t"}
                </KInline>
                :{" "}
                <KInline ariaLabel="distance equals eighteen times five sixths equals fifteen kilometers">
                  {"d = 18\\cdot \\dfrac{5}{6} = 15\\ \\text{km}"}
                </KInline>
                . Answer: 15.
              </p>
            </>
          }
        />

        <p>
          The numerator and denominator of a rate travel together. For example,
          if a faucet flows at 2 gallons per minute, then every minute adds 2
          gallons, every half minute adds 1 gallon, and so on. This “for each”
          interpretation is what makes unit conversions straightforward.
        </p>

        <ExampleCard
          number={2}
          title="Data Sufficiency: Converting rates"
          statements={[
            "Water flows through a hose at a constant rate. What is the flow in gallons per second (gps)?",
            "1) The hose delivers 36 gallons in 3 minutes.",
            "2) The hose delivers 2 gallons in 10 seconds.",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                We need the flow in gps, i.e.,{" "}
                <KInline ariaLabel="gallons per second">
                  {"\\dfrac{\\text{gallons}}{\\text{second}}"}
                </KInline>
                .
              </p>
              <p>
                <strong>Statement (1):</strong> 36 gallons in 3 minutes gives{" "}
                <KInline ariaLabel="twelve gallons per minute">
                  {"\\dfrac{36\\ \\text{gal}}{3\\ \\text{min}} = 12\\ \\text{gpm}"}
                </KInline>
                . Convert minutes to seconds:{" "}
                <KInline ariaLabel="twelve divided by sixty equals zero point two gallons per second">
                  {"12\\ \\text{gpm} = \\dfrac{12}{60}\\ \\text{gps} = 0.2\\ \\text{gps}"}
                </KInline>
                . Unique value → sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> 2 gallons in 10 seconds gives{" "}
                <KInline ariaLabel="two tenths gallons per second equals zero point two">
                  {"\\dfrac{2\\ \\text{gal}}{10\\ \\text{s}} = 0.2\\ \\text{gps}"}
                </KInline>
                . Unique value → sufficient.
              </p>
              <p>
                Each statement alone is sufficient. Answer: D.
              </p>
            </>
          }
        />

        <MustKnow>
          Quick unit tactics:
          <ul className="ml-5 mt-2 list-disc">
            <li>
              Convert time to hours for mph or to seconds for per‑second rates
              before multiplying or dividing.
            </li>
            <li>
              Treat units like algebraic symbols—cancel what repeats to end with
              the target unit.
            </li>
          </ul>
        </MustKnow>

        <p>
          Up next, we’ll apply the{" "}
          <KInline ariaLabel="distance equals rate times time">
            {"d = r\\,t"}
          </KInline>{" "}
          relationship to classic rate–time–distance problems and common
          variations.
        </p>
      </article>
    </main>
  );
}