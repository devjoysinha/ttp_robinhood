import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "8.4.1 Unit Conversions with Variables | Quant Skills",
  description:
    "Learn how to convert measurements when variables replace numbers. Use unit fractions to cancel units, and see three worked multiple‑choice examples with full solutions using KaTeX.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { displayMode: false, throwOnError: false });
  return (
    <span aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { displayMode: true, throwOnError: false });
  return (
    <div
      className="my-2 overflow-x-auto"
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Unit Conversions
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.4.1 Unit Conversions with Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Unit‑conversion problems sometimes use symbols instead of concrete numbers. The method doesn’t change:
          build a conversion fraction that equals 1 and arrange it so the starting units cancel, leaving the target units.
        </p>

        <MustKnow>
          Treat variables just like numbers when converting. Multiply by unit fractions (ratios equal to 1) so that
          unwanted units cancel and the desired units remain. Keep track of the position of each unit in the numerator
          or denominator to ensure proper cancellation.
        </MustKnow>

        <p>
          Let’s walk through a few quick examples to see the process with variables.
        </p>

        <MCQExample
          number={9}
          prompt="25x + 10 nickels is equivalent to how many dollars? (Note: 20 nickels = 1 dollar)"
          options={[
            "25x + 1/2",
            "(5x + 2) / 4",
            "(25x + 10) / 4",
            "500x + 10",
            "500x + 20",
          ]}
          correct="(5x + 2) / 4"
          solution={
            <>
              <p>
                Convert nickels to dollars by multiplying by the unit fraction 1 dollar / 20 nickels so that
                “nickels” cancels:
              </p>
              <KBlock
                ariaLabel="Conversion from nickels to dollars"
                expr={String.raw`
                  \big(25x + 10\big)\ \text{nickels}\times\frac{1\ \text{dollar}}{20\ \text{nickels}}
                  \ =\ \frac{25x + 10}{20}\ \text{dollars}
                `}
              />
              <p>Simplify the fraction:</p>
              <KBlock
                ariaLabel="Simplified dollars expression"
                expr={String.raw`
                  \frac{25x + 10}{20}
                  \ =\
                  \frac{5(5x + 2)}{20}
                  \ =\
                  \frac{5x + 2}{4}
                `}
              />
              <p>Therefore, the correct choice is (5x + 2) / 4.</p>
            </>
          }
        />

        <MCQExample
          number={10}
          prompt="Rena rides at R meters per minute, which equals Troy’s T kilometers per hour. Express R in terms of T. (Note: 1 kilometer = 1,000 meters)"
          options={["1,500T", "(50T) / 3", "(3T) / 50", "50 / (3T)", "3 / (50T)"]}
          correct="(50T) / 3"
          solution={
            <>
              <p>
                First, convert Rena’s rate from meters per minute to kilometers per hour. Convert meters → kilometers
                and minutes → hours:
              </p>
              <KBlock
                ariaLabel="Convert meters per minute to kilometers per hour"
                expr={String.raw`
                  R\ \frac{\text{meters}}{\text{minute}}
                  \times
                  \frac{1\ \text{kilometer}}{1000\ \text{meters}}
                  \times
                  \frac{60\ \text{minutes}}{1\ \text{hour}}
                  \ =\
                  \frac{60R}{1000}\ \frac{\text{kilometers}}{\text{hour}}
                  \ =\
                  \frac{3R}{50}\ \frac{\text{kilometers}}{\text{hour}}
                `}
              />
              <p>Set this equal to Troy’s speed T km/h and solve for R:</p>
              <KBlock
                ariaLabel="Solve for R in terms of T"
                expr={String.raw`
                  \frac{3R}{50}\ =\ T
                  \quad\Longrightarrow\quad
                  3R\ =\ 50T
                  \quad\Longrightarrow\quad
                  R\ =\ \frac{50T}{3}.
                `}
              />
              <p>The value of R is (50T) / 3.</p>
            </>
          }
        />

        <MCQExample
          number={11}
          prompt="A fence runs along a property line of y yards. Each plank is f feet tall and i inches wide, with no gaps between planks. How many planks are needed? (Note: 1 yard = 3 feet, 1 foot = 12 inches)"
          options={["(36y) / i", "(36y) / f", "(36y) / (f + i)", "(3y) / f", "(12y) / i"]}
          correct="(36y) / i"
          solution={
            <>
              <p>
                We only need the horizontal coverage. Convert the property length to feet and the plank width to feet:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Property length: <KInline expr={String.raw`y\ \text{yards}\times\frac{3\ \text{feet}}{1\ \text{yard}}=3y\ \text{feet}`} />
                </li>
                <li>
                  Plank width: <KInline expr={String.raw`i\ \text{inches}\times\frac{1\ \text{foot}}{12\ \text{inches}}=\frac{i}{12}\ \text{feet}`} />
                </li>
              </ul>
              <p>Number of planks equals total length divided by plank width:</p>
              <KBlock
                ariaLabel="Compute number of planks"
                expr={String.raw`
                  \frac{3y\ \text{feet}}{\ \tfrac{i}{12}\ \text{feet}\ }\
                  =\
                  3y\cdot\frac{12}{i}
                  =\
                  \frac{36y}{i}.
                `}
              />
              <p>So the fence requires (36y) / i planks.</p>
            </>
          }
        />

        <p>
          Bottom line: variables don’t change the conversion playbook. Keep units organized, multiply by the right unit
          fractions, and simplify.
        </p>
      </article>
    </main>
  );
}