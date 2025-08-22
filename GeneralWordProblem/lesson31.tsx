import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "7.8.1 Know the Growth Driver | General Word Problems",
  description:
    "Why you can’t predict growth without the rule that drives it. Learn the idea with quick patterns, a colony example, and a Data Sufficiency drill—plus the right growth formulas.",
};

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      className="whitespace-nowrap"
      role="math"
      aria-label="mathematical expression"
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
      className="my-4 overflow-x-auto"
      role="math"
      aria-label="mathematical equation"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX stylesheet (ideally include once in app/layout.tsx) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.8.1 To Determine Growth, Identify the Driver
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In earlier growth problems, the “how it grows” rule was provided up
          front, so projecting values was straightforward. When the growth rule
          is explicit—such as “add 10 each week” or “triple every week”—the
          outcome at any future time is determined.
        </p>

        <p>
          For instance, a weekly deposit of $10 means a fixed additive change of{" "}
          <MathInline expr="+10" /> per week (linear growth). If a quantity
          triples weekly, that’s a multiplicative change by a factor of{" "}
          <MathInline expr="3" /> each period (exponential growth).
        </p>

        <p>
          Trouble starts when a problem mentions that something “grew” but
          doesn’t tell you what controls that growth. Without the driver, you
          can’t pin down what happens next.
        </p>

        <p>
          Consider the sequence 2, 4, 6, 8, … What comes next? Many people say
          10, but that assumes the rule is “add 2.” If the actual rule isn’t
          stated, the next term could be 10, 40, or even a non-integer. Only if
          you’re told the pattern is evenly spaced (add 2) does “10” become
          certain.
        </p>

        <MustKnow>
          You can only compute growth when the growth driver is known. Stating
          that a quantity “increased” is not enough—you need the rule (e.g.,
          constant add, constant percent, or another explicit pattern).
        </MustKnow>

        <section aria-labelledby="growth-formulas">
          <h3 id="growth-formulas" className="text-xl font-semibold text-white">
            The two canonical drivers
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Linear (additive) growth:{" "}
              <MathInline expr="V_t = V_0 + k \cdot t" />.
            </li>
            <li>
              Exponential (multiplicative) growth:{" "}
              <MathInline expr="V_t = V_0 \cdot r^{\,t}" />.
            </li>
          </ul>
        </section>

        <section aria-labelledby="colony-example">
          <h3 id="colony-example" className="text-xl font-semibold text-white">
            Quick colony check
          </h3>
          <p>
            A colony starts with 100 ants and “grows each week.” You’re told the
            counts after week 1, 2, and 3 are 200, 400, and 800. What about
            week 4?
          </p>
          <p>
            Without the rule, the week‑4 value isn’t locked. If, however, the
            stem explicitly says the population doubles weekly, then:
          </p>
          <MathBlock expr="V_4 = 100 \cdot 2^{4} = 1600" />
          <p className="text-sm text-gray-400">
            Note: “doubles weekly” is the driver; that’s what makes week‑4
            computable.
          </p>
        </section>

        <ExampleCard
          number={47}
          title="Bacteria growth from 7 AM to 11 AM"
          statements={[
            "A colony of bacteria increased in size between 7 AM and 11 AM. If there were 1,000 bacteria at 7 AM, how many were there at 11 AM?",
            "1) At 8 AM, the count was 1,500.",
            "2) At 9 AM, the count was 2,000.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We need the 11 AM count. The prompt tells us the colony grew,
                but it doesn’t specify how. Be careful not to assume a fixed
                hourly increment or a fixed percentage growth.
              </p>

              <p>
                <strong>Statement (1) alone:</strong> Knowing only the 8 AM
                count (1,500) doesn’t reveal the driver. The change from 7 → 8
                could be additive, multiplicative, or irregular. We can’t
                project to 11 AM uniquely. Insufficient.
              </p>

              <p>
                <strong>Statement (2) alone:</strong> Similarly, 2,000 at 9 AM
                doesn’t lock the rule. Many different growth paths from 7 → 9
                fit this data, and they imply different outcomes by 11 AM.
                Insufficient.
              </p>

              <p>
                <strong>Together (1) and (2):</strong> It’s tempting to infer a
                +500‑per‑hour pattern (1000 → 1500 → 2000), but nothing in the
                stem guarantees constant hourly change. From 9 → 11, the colony
                could stop growing, grow slowly, or accelerate—each yields a
                different 11 AM count. Still insufficient.
              </p>

              <p>
                Without an explicit driver (e.g., “constant amount per hour” or
                “grows by a fixed factor each hour”), you cannot compute a
                single value for 11 AM. Answer: <strong>E</strong>.
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Always locate the growth driver first. If the rule fixes how the
            quantity changes per step—additive (
            <MathInline expr="V_t = V_0 + k t" />) or multiplicative (
            <MathInline expr="V_t = V_0 r^{t}" />)—you can forecast confidently.
            If the rule is missing, the future value is not determined.
          </p>
        </section>
      </article>
    </main>
  );
}