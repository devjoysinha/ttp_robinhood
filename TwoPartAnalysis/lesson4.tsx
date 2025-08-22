import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.3 Two‑Part Analysis: Rates | GMAT Math",
  description:
    "Two‑Part Analysis rate problems ask for two answers from one scenario. Learn core rate formulas, common setups (round trip, catch‑up, converging), and work through 3 examples with clear solutions.",
};

function TeX({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    fleqn: false,
    trust: false,
    output: "html",
  });

  const Wrapper = display ? "div" : "span";
  return (
    <Wrapper
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-lg font-semibold text-white" id={`ex-${number}`}>
      {children}
    </h3>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Two‑Part Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.3 Two‑Part Analysis Questions: Rates
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <p>
          In rate problems, we lean on the classic relationship
          <TeX
            expr="\,\text{rate}\times\text{time}=\text{distance}\,"
            ariaLabel="rate times time equals distance"
            className="mx-1"
          />
          . In Two‑Part Analysis, you’ll answer two linked questions about a
          single situation (for example, two times, two distances, or two
          speeds).
        </p>

        <MustKnow>
          In Two‑Part Analysis rate questions, solve one coherent scenario that
          yields two outputs. Keep your equations organized and align units:
          hours with miles per hour, minutes with miles per minute, etc.
        </MustKnow>

        <section aria-labelledby="core-tools" className="space-y-4">
          <h3 id="core-tools" className="text-lg font-semibold text-white">
            Core tools you’ll use
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li className="leading-relaxed">
              Time and speed:
              <TeX
                expr="\ \ \text{time}=\dfrac{\text{distance}}{\text{rate}}"
                ariaLabel="time equals distance over rate"
                className="mx-2"
              />
              and
              <TeX
                expr="\ \ \text{speed}=\dfrac{\text{distance}}{\text{time}}"
                ariaLabel="speed equals distance over time"
                className="mx-2"
              />
            </li>
            <li className="leading-relaxed">
              Average speed over a trip:
              <TeX
                expr="\ \ \text{average speed}=\dfrac{\text{total distance}}{\text{total time}}"
                ariaLabel="average speed equals total distance over total time"
                className="mx-2"
              />
            </li>
            <li className="leading-relaxed">
              Converging or diverging motion:
              <span className="mx-2 inline text-gray-200">
                distance 1 + distance 2 = total distance
              </span>
            </li>
            <li className="leading-relaxed">
              Round trip or catch‑up setups often rely on
              <span className="mx-1 inline text-gray-200">distance out = distance back</span>
              or
              <TeX
                expr="\ \ \text{catch‑up time}=\dfrac{\Delta \text{distance}}{\Delta \text{rate}}"
                ariaLabel="catch-up time equals change in distance over change in rate"
                className="mx-2"
              />
            </li>
          </ul>
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="ex-1" className="space-y-3">
          <SectionHeading number="1">Quick warm‑up</SectionHeading>
          <p className="leading-relaxed">
            A runner goes out 2 miles at a constant{" "}
            <span className="whitespace-nowrap">10 mph</span> and returns the
            same 2 miles at{" "}
            <span className="whitespace-nowrap">4 mph</span>. How long was each
            leg?
          </p>
          <div className="space-y-1">
            <p className="leading-relaxed">
              Outbound time:
              <TeX
                expr="\ \ \text{time}=\dfrac{2}{10}=\dfrac{1}{5}\ \text{hour}"
                ariaLabel="time equals two over ten equals one fifth hour"
                className="mx-2"
              />
            </p>
            <p className="leading-relaxed">
              Return time:
              <TeX
                expr="\ \ \text{time}=\dfrac{2}{4}=\dfrac{1}{2}\ \text{hour}"
                ariaLabel="time equals two over four equals one half hour"
                className="mx-2"
              />
            </p>
          </div>
          <p className="text-gray-200">
            Answer: out
            <TeX expr="\ \tfrac{1}{5}\ \text{hour}" ariaLabel="one fifth hour" className="mx-1" />
            and back
            <TeX expr="\ \tfrac{1}{2}\ \text{hour}" ariaLabel="one half hour" className="mx-1" />
            .
          </p>
        </section>

        <section aria-labelledby="ex-2" className="space-y-3">
          <SectionHeading number="2">
            Split‑driving distances (Two answers)
          </SectionHeading>
          <p className="leading-relaxed">
            A 440‑mile drive is split between Joe and Charlotte. Joe starts at
            60 mph for <TeX expr="t" ariaLabel="t" /> hours. Charlotte completes
            the rest at 70 mph and drove 3 hours less than Joe. How many miles
            did each person cover?
          </p>
          <div className="space-y-1">
            <p>
              Joe:
              <TeX
                expr="\ \ \text{distance}=60t"
                ariaLabel="distance equals sixty t"
                className="mx-2"
              />
            </p>
            <p>
              Charlotte:
              <TeX
                expr="\ \ \text{distance}=70(t-3)"
                ariaLabel="distance equals seventy times parentheses t minus three"
                className="mx-2"
              />
            </p>
            <p>
              Total:
              <TeX
                expr="\ \ 60t+70(t-3)=440\ \Rightarrow\ 130t=650\ \Rightarrow\ t=5"
                ariaLabel="sixty t plus seventy times t minus three equals four hundred forty; therefore one hundred thirty t equals six hundred fifty; therefore t equals five"
                className="mx-2"
                display
              />
            </p>
          </div>
          <p>
            Joe’s distance:
            <TeX expr="\ 60\cdot 5=300" ariaLabel="sixty times five equals three hundred" className="mx-1" />
            miles. Charlotte’s distance:
            <TeX expr="\ 70\cdot 2=140" ariaLabel="seventy times two equals one hundred forty" className="mx-1" />
            miles.
          </p>
          <p className="text-gray-400">Answer pair: (Joe, Charlotte) = (300, 140).</p>
        </section>

        <section aria-labelledby="ex-3" className="space-y-3">
          <SectionHeading number="3">
            Round trip: unknown return speed + overall average
          </SectionHeading>
          <p className="leading-relaxed">
            David commutes 30 miles to work at an average of 50 mph. The entire
            round trip takes 1 hour 21 minutes. Find his speed heading home and
            the round‑trip average speed (nearest tenth as needed).
          </p>
          <div className="space-y-1">
            <p className="leading-relaxed">
              Time to work:
              <TeX
                expr="\ \ \dfrac{30}{50}=\dfrac{3}{5}\ \text{hour}=36\ \text{minutes}"
                ariaLabel="thirty over fifty equals three fifths hour equals thirty six minutes"
                className="mx-2"
              />
            </p>
            <p className="leading-relaxed">
              Total time:
              <TeX
                expr="\ 1\ \text{hour}\ 21\ \text{minutes}=81\ \text{minutes}"
                ariaLabel="one hour twenty one minutes equals eighty one minutes"
                className="mx-2"
              />
              ⇒ time home:
              <TeX
                expr="\ 81-36=45\ \text{minutes}=\dfrac{3}{4}\ \text{hour}"
                ariaLabel="eighty one minus thirty six equals forty five minutes equals three quarters hour"
                className="mx-2"
              />
            </p>
            <p className="leading-relaxed">
              Home speed:
              <TeX
                expr="\ \ \dfrac{30}{3/4}=40\ \text{mph}"
                ariaLabel="thirty divided by three quarters equals forty miles per hour"
                className="mx-2"
              />
            </p>
            <p className="leading-relaxed">
              Round‑trip average:
              <TeX
                expr="\ \ \dfrac{60}{81/60}\approx 44.4\ \text{mph}"
                ariaLabel="sixty divided by eighty one over sixty is approximately forty four point four miles per hour"
                className="mx-2"
              />
            </p>
          </div>
          <p className="text-gray-200">Answer pair: (home speed, round‑trip average) = (40 mph, 44.4 mph).</p>
        </section>

        <section aria-labelledby="ex-4" className="space-y-3">
          <SectionHeading number="4">
            Linearly changing speed over time
          </SectionHeading>
          <p className="leading-relaxed">
            From 12:00 pm to 12:20 pm, an object’s speed decreases at a constant
            rate (a straight‑line drop in speed versus time). At 12:00 pm the
            speed is <TeX expr="x" ariaLabel="x" /> yards/min, and at 12:20 pm it’s{" "}
            <TeX expr="y" ariaLabel="y" /> yards/min. Across those 20 minutes,
            it travels 4,000 yards. Find a relation between{" "}
            <TeX expr="x" ariaLabel="x" /> and <TeX expr="y" ariaLabel="y" /> and
            identify a valid pair with <TeX expr="x>y" ariaLabel="x greater than y" />.
          </p>
          <div className="space-y-1">
            <p className="leading-relaxed">
              With a linear change in speed, the average speed over the interval is the
              midpoint:
              <TeX
                expr="\ \ \text{avg speed}=\dfrac{x+y}{2}\ \text{yards/min}"
                ariaLabel="average speed equals x plus y over two yards per minute"
                className="mx-2"
              />
            </p>
            <p className="leading-relaxed">
              Distance in 20 minutes:
              <TeX
                expr="\ \ 4{,}000=\dfrac{x+y}{2}\cdot 20\ \Rightarrow\ x+y=400"
                ariaLabel="four thousand equals x plus y over two times twenty; therefore x plus y equals four hundred"
                className="mx-2"
                display
              />
            </p>
          </div>
          <p className="text-gray-200">
            Any pair with sum 400 and decreasing speed (x &gt; y) works; for example,{" "}
            <TeX expr="(x,y)=(210,190)" ariaLabel="x equals two hundred ten, y equals one hundred ninety" />.
          </p>
        </section>

        <hr className="border-gray-700" />

        <section aria-labelledby="wrap" className="space-y-3">
          <h3 id="wrap" className="text-lg font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Start with one clear diagram or set of equations. Keep both
              requested answers visible so you don’t forget the second part.
            </li>
            <li>
              For piecewise travel, add distances and times carefully; compute
              averages only with
              <TeX
                expr="\ \text{avg}=\dfrac{\text{total distance}}{\text{total time}}"
                ariaLabel="average equals total distance over total time"
                className="mx-1"
              />
              —not by averaging the two speeds.
            </li>
            <li>
              When speeds change at a constant rate over time, the average speed
              is the midpoint of the endpoints.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}