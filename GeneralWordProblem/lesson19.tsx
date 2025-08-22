import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: false });
  return <span role="math" aria-label={ariaLabel ?? expr} dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, displayMode: true });
  return (
    <div className="my-3 overflow-x-auto">
      <span role="math" aria-label={ariaLabel ?? expr} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "7.4 Equalization of Rates | General Word Problems",
  description:
    "Learn how to equalize rates by transferring a fixed amount: set up equations for wages and unit prices, solve symbolically, and practice with two GMAT‑style multiple‑choice questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. General Word Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">7.4 The Equalization of Rates</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          This lesson focuses on “rate equalization” problems, where two rates are made the same by shifting a fixed
          amount from one side to the other. We’ll frame the idea with hourly wages, then extend it to other per‑unit
          contexts such as price per pound.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Core definition of a wage</p>
            <MathBlock expr="\\text{wage} \\,=\\, \\dfrac{\\text{total amount paid}}{\\text{total time worked}}" ariaLabel="wage equals total amount paid divided by total time worked" />
            <p className="mt-4">
              Example: If a worker earns $100 for 10 hours, then hourly wage is{" "}
              <MathInline expr="\\dfrac{100}{10} = 10" ariaLabel="100 over 10 equals 10" /> dollars per hour.
            </p>
          </div>
        </MustKnow>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Why equalization works</h3>
          <p>
            When two people’s rates need to match, you can often “take x from one and give x to the other,” then set the
            resulting rates equal. Because each person’s rate is a ratio, the equality happens after we add or subtract
            the same fixed amount from the numerators (the totals), while the denominators (the times) stay put.
          </p>
        </section>

        <section className="rounded-lg border border-gray-800 bg-gray-900/40 p-4 md:p-5">
          <h4 className="mb-2 text-lg font-semibold text-white">Worked example (transfer to equalize wages)</h4>
          <p>
            Fernando is paid $100 for 5 hours. Marco is paid $140 for 10 hours. How much should Fernando give Marco so
            their hourly wages become equal?
          </p>
          <p>
            Let <MathInline expr="x" /> be the dollars transferred from Fernando to Marco. After the transfer, Fernando’s
            hourly wage is <MathInline expr="\\dfrac{100 - x}{5}" />, and Marco’s hourly wage is{" "}
            <MathInline expr="\\dfrac{140 + x}{10}" />. Set them equal and solve:
          </p>
          <MathBlock expr="\\dfrac{100 - x}{5} = \\dfrac{140 + x}{10}" />
          <MathBlock expr="10(100 - x) = 5(140 + x)" />
          <MathBlock expr="1000 - 10x = 700 + 5x" />
          <MathBlock expr="300 = 15x \\quad \\Rightarrow \\quad x = 20" />
          <p>
            A $20 transfer equalizes the wages. Each new hourly wage is{" "}
            <MathInline expr="\\dfrac{100 - 20}{5} = 16" /> dollars and{" "}
            <MathInline expr="\\dfrac{140 + 20}{10} = 16" /> dollars, respectively.
          </p>
        </section>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">General transfer setup for equalization</p>
            <p>
              Suppose two people are each initially paid <MathInline expr="n" /> dollars, but they worked different
              amounts of time: <MathInline expr="h_A" /> and <MathInline expr="h_B" /> hours. If person A gives{" "}
              <MathInline expr="x" /> dollars to person B and their hourly wages become equal, then:
            </p>
            <MathBlock expr="\\dfrac{n - x}{h_A} = \\dfrac{n + x}{h_B}" ariaLabel="(n minus x over h_A) equals (n plus x over h_B)" />
            <p>Solve this equation for the unknown as needed.</p>
          </div>
        </MustKnow>

        <MCQExample
          number={23}
          prompt="Paula and Jonah were each paid n dollars to complete a job. Paula worked for 6 hours; Jonah worked for 2 hours. Jonah gave Paula x dollars, and then they earned the same hourly wage. In terms of x, how much was Jonah originally paid?"
          options={["0.5x", "x", "2x", "3x", "4x"]}
          correct="2x"
          solution={
            <>
              <p>
                After giving <MathInline expr="x" /> to Paula, Jonah’s hourly wage is{" "}
                <MathInline expr="\\dfrac{n - x}{2}" />, and Paula’s hourly wage is{" "}
                <MathInline expr="\\dfrac{n + x}{6}" />. Set them equal:
              </p>
              <MathBlock expr="\\dfrac{n - x}{2} = \\dfrac{n + x}{6}" />
              <MathBlock expr="6(n - x) = 2(n + x)" />
              <MathBlock expr="6n - 6x = 2n + 2x" />
              <MathBlock expr="4n = 8x \\quad \\Rightarrow \\quad n = 2x" />
              <p>Jonah was originally paid n = 2x dollars.</p>
            </>
          }
        />

        <section className="space-y-3">
          <p>
            This “equalize by transferring” logic isn’t limited to wages. The same idea works for any per‑unit rate,
            like dollars per pound, miles per hour, or widgets per day—whenever you can add to one total and subtract
            from the other and then equate the resulting rates.
          </p>
        </section>

        <MCQExample
          number={24}
          prompt="Kam’s Candies sells 5‑lb boxes for c dollars per box; Dan’s sells 3‑lb boxes for c dollars per box. Kam’s increases its price per box by d dollars and Dan’s decreases its price per box by d dollars. After the change, the two shops charge the same price per pound. In terms of d, what was the original price of a 5‑lb box at Kam’s?"
          options={["2d", "4d", "7d", "8d", "10d"]}
          correct="4d"
          solution={
            <>
              <p>
                Original price per pound at Kam’s is <MathInline expr="\\dfrac{c}{5}" />, and at Dan’s is{" "}
                <MathInline expr="\\dfrac{c}{3}" />. After changes, price per pound becomes{" "}
                <MathInline expr="\\dfrac{c + d}{5}" /> for Kam’s and <MathInline expr="\\dfrac{c - d}{3}" /> for Dan’s.
                Set them equal:
              </p>
              <MathBlock expr="\\dfrac{c + d}{5} = \\dfrac{c - d}{3}" />
              <MathBlock expr="3(c + d) = 5(c - d)" />
              <MathBlock expr="3c + 3d = 5c - 5d" />
              <MathBlock expr="8d = 2c \\quad \\Rightarrow \\quad c = 4d" />
              <p>Thus, Kam’s original 5‑lb box cost c = 4d dollars.</p>
            </>
          }
        />

        <section className="space-y-2">
          <h4 className="text-lg font-semibold text-white">Takeaways</h4>
          <ul className="list-inside list-disc space-y-1">
            <li>Translate “equal rates after a transfer” into an equation by adjusting only the totals (numerators).</li>
            <li>Keep times or quantities (denominators) fixed and solve the resulting proportion.</li>
            <li>The same framework works for any per‑unit rate: money, distance, production, and more.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}