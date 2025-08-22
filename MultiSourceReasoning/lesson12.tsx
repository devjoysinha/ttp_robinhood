import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.13 The Math in MSR Is About Detail‑Finding | Data Insights",
  description:
    "In Multi‑Source Reasoning, the math is basic—the challenge is finding, organizing, and applying details across tabs. Learn the mindset, see a quick calculator reversal, and walk through two case studies step by step.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.13 The Math in MSR Is About Detail‑Finding
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You will see math in Multi‑Source Reasoning, but it’s rarely advanced.
          What actually separates correct from incorrect answers is how well you
          locate, combine, and interpret the information scattered across tabs,
          charts, tables, and the question stem.
        </p>

        <MustKnow>
          Most MSR calculations are straightforward. Success hinges on finding
          the right facts, understanding how they interact, and only then doing
          the light arithmetic they require.
        </MustKnow>

        <p>Typical MSR math you might do includes:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Basic multiplication or division</li>
          <li>Percent change and averages</li>
          <li>Median/mean identification</li>
          <li>Simple rate relationships</li>
        </ul>

        <MustKnow>
          Don’t overvalue the calculator. After you pull the needed facts, the
          math is often quick enough to do by hand on your scratchpad.
        </MustKnow>

        <p>When solving a quant‑flavored MSR, ask yourself:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Did I read the graph/table correctly and grab the right entries?</li>
          <li>Am I applying any provided formula or rule exactly as stated?</li>
          <li>Did I miss a small condition in the prompt or the stem?</li>
          <li>Did I merge the stem’s new info with the correct tab(s)?</li>
        </ul>

        <MustKnow>
          MSR traps often come from overlooked details, not hard math. Be a
          detail‑hunter first, a calculator second.
        </MustKnow>

        <section aria-labelledby="quick-check" className="space-y-4">
          <h3 id="quick-check" className="text-xl font-semibold text-white">
            Quick Check: Reverse a Percentage Discount
          </h3>
          <p className="text-gray-300">
            If a fare shows a 28% discount from its peak price, then
            discounted = 72% of peak. In symbols:
          </p>
          <div className="rounded-md bg-gray-800/60 p-4">
            <TeX
              block
              strut={false}
            >{`\\text{discounted} = (1 - 0.28)\\cdot \\text{peak} = 0.72\\cdot \\text{peak}`}</TeX>
            <TeX block strut={false}>{`\\Rightarrow\\quad \\text{peak} = \\dfrac{\\text{discounted}}{0.72}`}</TeX>
          </div>

          <MCQExample
            number={1}
            prompt="A ticket shows a discounted price of $950 after a 28% markdown from peak. What is the peak price (nearest dollar)?"
            options={["$1,250", "$1,306", "$1,319", "$1,322", "$1,340"]}
            correct="$1,319"
            solution={
              <>
                <p>
                  Use peak = discounted ÷ 0.72. So peak = 950 ÷ 0.72 ≈ 1319.44,
                  which rounds to $1,319.
                </p>
                <div className="rounded-md bg-gray-800/60 p-3">
                  <TeX>{`\\text{peak} = \\dfrac{950}{0.72} \\approx 1319.44 \\to \\$1{,}319`}</TeX>
                </div>
              </>
            }
          />
        </section>

        <section aria-labelledby="case-1" className="space-y-4">
          <h3 id="case-1" className="text-xl font-semibold text-white">
            Case Study A: Airline Red‑Eye Discounts
          </h3>
          <p>
            An airline runs seasonal discounts on red‑eye flights for a few
            low‑traffic routes. Discount percentages depend on the day‑type:
            less popular departure days (P1) or more popular days (P2). For
            economy, the markdowns are:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>P1: 28% off the peak (average high‑demand) price</li>
            <li>P2: 25% off the peak price</li>
          </ul>
          <p>
            Goal: Decide whether each listed ticket costs less than the
            EWR→OPO economy peak price.
          </p>

          <ExampleCard
            number={16}
            title="Which tickets are below the EWR–OPO economy peak price?"
            statements={[
              "Compute the EWR–OPO economy peak price by reversing the P1 economy discount using a known P1 discounted value of $950.",
              "Compare each listed discounted fare to the computed peak: (a) ORD–FRA, Thu red‑eye, economy; (b) PHL–GLA, Sun red‑eye, business; (c) IAH–MAN, Wed red‑eye, business.",
              "Mark Yes if a listed ticket is cheaper than the EWR–OPO economy peak, otherwise mark No.",
            ]}
            correctLetter="—"
            solution={
              <>
                <p>
                  First, find the EWR–OPO economy peak price by reversing a 28%
                  P1 discount:
                </p>
                <div className="rounded-md bg-gray-800/60 p-3">
                  <TeX>{`\\text{discounted} = 0.72\\cdot \\text{peak} \\quad\\Rightarrow\\quad \\text{peak} = \\dfrac{950}{0.72} \\approx \\$1{,}319`}</TeX>
                </div>
                <p>Now compare each ticket’s discounted fare to $1,319.</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    ORD–FRA, Thu red‑eye, economy: $1,292 → below $1,319 →
                    Yes.
                  </li>
                  <li>
                    PHL–GLA, Sun red‑eye, business: $1,203 → below $1,319 →
                    Yes.
                  </li>
                  <li>
                    IAH–MAN, Wed red‑eye, business: $2,002 → above $1,319 →
                    No.
                  </li>
                </ul>
                <p>
                  Answer pattern: Yes, Yes, No. The key step was locating the
                  right tabs, reversing the discount correctly, and then making
                  clean comparisons.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="case-2" className="space-y-4">
          <h3 id="case-2" className="text-xl font-semibold text-white">
            Case Study B: Feeders Needed by Alligator Enclosure
          </h3>
          <p>
            A sanctuary groups alligators by weight class. Each enclosure has a
            minimum feeder:alligator ratio and must use the smallest whole
            number of feeders that meets or exceeds that ratio. You’re given
            the enclosure counts on three months: April, May, and June.
          </p>

          <div className="rounded-md bg-gray-800/60 p-4">
            <p className="font-medium text-white">Feeder ratios:</p>
            <ul className="list-disc pl-6">
              <li>Flyweight: 1:12</li>
              <li>Lightweight: 1:10</li>
              <li>Bantamweight: 1:8</li>
              <li>Welterweight: 1:6</li>
              <li>Middleweight: 1:4</li>
              <li>Heavyweight: 1:3</li>
            </ul>
            <p className="mt-3">
              For an enclosure with population n and ratio 1:k, feeders needed =
              ceiling(n ÷ k).
            </p>
            <div className="mt-2 rounded bg-gray-900/60 p-3">
              <TeX>{`\\text{feeders} = \\left\\lceil \\dfrac{n}{k} \\right\\rceil`}</TeX>
            </div>
          </div>

          <ExampleCard
            number={17}
            title="Was the total number of required feeders below 11?"
            statements={[
              "Compute required feeders per enclosure via ceiling(n ÷ k) for each month.",
              "Sum across all six enclosures for April, May, and June.",
              "Report whether the total is under 11 (Fewer) or 11+ (Same/more).",
            ]}
            correctLetter="—"
            solution={
              <>
                <p className="font-semibold text-white">April</p>
                <ul className="list-disc pl-6">
                  <li>Fly 15 → ⌈15/12⌉ = 2</li>
                  <li>Light 11 → ⌈11/10⌉ = 2</li>
                  <li>Bantam 7 → ⌈7/8⌉ = 1</li>
                  <li>Welter 8 → ⌈8/6⌉ = 2</li>
                  <li>Middle 10 → ⌈10/4⌉ = 3</li>
                  <li>Heavy 6 → ⌈6/3⌉ = 2</li>
                </ul>
                <p>Total = 2 + 2 + 1 + 2 + 3 + 2 = 12 → Same/more.</p>

                <p className="mt-4 font-semibold text-white">May</p>
                <ul className="list-disc pl-6">
                  <li>Fly 11 → ⌈11/12⌉ = 1</li>
                  <li>Light 12 → ⌈12/10⌉ = 2</li>
                  <li>Bantam 8 → ⌈8/8⌉ = 1</li>
                  <li>Welter 7 → ⌈7/6⌉ = 2</li>
                  <li>Middle 11 → ⌈11/4⌉ = 3</li>
                  <li>Heavy 2 → ⌈2/3⌉ = 1</li>
                </ul>
                <p>Total = 1 + 2 + 1 + 2 + 3 + 1 = 10 → Fewer.</p>

                <p className="mt-4 font-semibold text-white">June</p>
                <ul className="list-disc pl-6">
                  <li>Fly 10 → ⌈10/12⌉ = 1</li>
                  <li>Light 12 → ⌈12/10⌉ = 2</li>
                  <li>Bantam 7 → ⌈7/8⌉ = 1</li>
                  <li>Welter 6 → ⌈6/6⌉ = 1</li>
                  <li>Middle 9 → ⌈9/4⌉ = 3</li>
                  <li>Heavy 4 → ⌈4/3⌉ = 2</li>
                </ul>
                <p>Total = 1 + 2 + 1 + 1 + 3 + 2 = 10 → Fewer.</p>

                <p className="mt-4">
                  Final selections by month: April → Same/more; May → Fewer;
                  June → Fewer. The arithmetic was easy—identifying the correct
                  ratios and applying ceiling logic precisely was the real task.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: In MSR, accuracy comes from disciplined detail‑gathering.
          Once the pieces are in place, the math is usually short and simple.
        </p>
      </article>
    </main>
  );
}