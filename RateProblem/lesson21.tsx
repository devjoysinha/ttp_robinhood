import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Make sure you import KaTeX CSS once in your root layout (app/layout.tsx):
// import "katex/dist/katex.min.css";

function TeX({
  expr,
  block = false,
  className = "",
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return (
    <span
      className={className}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.15 Catch‑Up and Wait Questions | Rate Problems",
  description:
    "Learn the catch‑up and wait setup: the faster traveler stops and waits while distances match. Includes a worked example, a multiple‑choice problem, and a variables‑in‑answers drill using KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.15 Catch‑Up and Wait Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In a catch‑up and wait scenario, a faster traveler goes by a slower
          one, continues for some time, then stops and waits until the slower
          traveler reaches the same spot. Since both start from the same place
          and stop when they are together again, their total distances are
          identical at the moment they meet.
        </p>

        <MustKnow>
          If two travelers start at the same location and stop when they are at
          the same location again, their distances traveled are equal at that
          meeting point:{" "}
          <TeX expr="d_\text{fast} = d_\text{slow}" ariaLabel="distance fast equals distance slow" />.
        </MustKnow>

        <p>
          A second hallmark of this setup is that the travel times are not the
          same. The faster traveler stops after a fixed number of hours, while
          the slower traveler keeps going until the meeting occurs.
        </p>

        <MustKnow>
          Let <TeX expr="x" /> be the number of hours the faster traveler moves
          after passing the slower one, and let <TeX expr="t" /> be how long the
          slower traveler continues after that stop until they meet. Then the
          faster traveler’s time is <TeX expr="x" />, while the slower
          traveler’s time is <TeX expr="x + t" />.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3
            id="worked-example"
            className="text-xl font-semibold text-white"
          >
            Worked example
          </h3>
          <p>
            At noon, Car X passes Car Y, both moving in the same direction.
            Car X drives at a constant <TeX expr="70~\text{mph}" /> and stops at{" "}
            4:00 pm. Car Y drives at a constant <TeX expr="50~\text{mph}" />.
            How long, in minutes, does Car X wait for Car Y to arrive?
          </p>

          <p>
            Car X drives for 4 hours, so by{" "}
            <TeX expr="d = r \times t" ariaLabel="distance equals rate times time" />{" "}
            it covers{" "}
            <TeX expr="70 \times 4 = 280~\text{miles}" ariaLabel="70 times 4 equals 280 miles" />.
          </p>

          <p>
            Let <TeX expr="t" /> be the number of hours after 4:00 pm that Car Y
            needs to reach Car X. Car Y’s total time is{" "}
            <TeX expr="4 + t" />, so its distance is{" "}
            <TeX expr="50(4 + t) = 200 + 50t~\text{miles}" />.
          </p>

          <p>
            At the meeting point, distances match:
            <br />
            <TeX
              block
              expr="280 = 200 + 50t \;\Rightarrow\; 80 = 50t \;\Rightarrow\; t = \tfrac{8}{5}\text{ hr}"
              ariaLabel="280 equals 200 plus 50t, therefore 80 equals 50t, therefore t equals eight fifths hours"
            />
            Convert to minutes:
            <TeX block expr="\tfrac{8}{5}\cdot 60 = 96~\text{minutes}" />
          </p>

          <p>So Car X waits 96 minutes.</p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={25}
          prompt="A driver traveling at 45 mph passes a cyclist going 20 mph in the same direction. Two hours after passing, the driver stops and waits for the cyclist. How many minutes does the driver wait?"
          options={["90", "120", "150", "200", "270"]}
          correct="150"
          solution={
            <>
              <p>
                Let <TeX expr="t" /> be the waiting time in hours. The driver
                travels for <TeX expr="2" /> hours, so distance is{" "}
                <TeX expr="45 \cdot 2 = 90" /> miles. The cyclist’s time is{" "}
                <TeX expr="2 + t" /> hours, so distance is{" "}
                <TeX expr="20(2 + t) = 40 + 20t" />.
              </p>
              <p>
                Set distances equal:{" "}
                <TeX expr="90 = 40 + 20t \Rightarrow 50 = 20t \Rightarrow t = 2.5" />{" "}
                hours. Convert to minutes:{" "}
                <TeX expr="2.5 \cdot 60 = 150" /> minutes.
              </p>
              <p>Answer: 150.</p>
            </>
          }
        />

        <MCQExample
          number={26}
          prompt="A jogger passes a hiker moving in the same direction. After passing, the jogger continues for h hours and then waits t hours for the hiker to arrive. The hiker’s constant speed is r mph, and the jogger’s constant speed is x mph faster than the hiker’s. What is x in terms of r, t, and h?"
          options={[
            "rth",
            String.raw`\dfrac{rt}{h}`,
            String.raw`\dfrac{hr}{t}`,
            String.raw`\dfrac{th}{r}`,
            String.raw`\dfrac{t}{rh}`,
          ]}
          correct={String.raw`\dfrac{rt}{h}`}
          renderOption={(opt) => <TeX expr={opt} />}
          solution={
            <>
              <p>
                The jogger’s speed is <TeX expr="r + x" />, and the jogger moves
                for <TeX expr="h" /> hours, so distance is{" "}
                <TeX expr="(r + x)h = rh + xh" />.
              </p>
              <p>
                The hiker moves at <TeX expr="r" /> mph for{" "}
                <TeX expr="h + t" /> hours, so distance is{" "}
                <TeX expr="r(h + t) = rh + rt" />.
              </p>
              <p>
                Equal distances at the meeting point give{" "}
                <TeX expr="rh + xh = rh + rt" />. Cancel <TeX expr="rh" /> to
                get <TeX expr="xh = rt" />, so{" "}
                <TeX expr="x = \dfrac{rt}{h}" />.
              </p>
              <p>Answer: B.</p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-3">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use <TeX expr="d = r \times t" /> for each traveler independently.
            </li>
            <li>
              At the meeting, set distances equal:{" "}
              <TeX expr="d_\text{fast} = d_\text{slow}" />.
            </li>
            <li>
              Times differ: faster goes for a fixed span, slower goes for that
              span plus the wait.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}