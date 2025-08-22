import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.3.2 Word Problems with Differing Unit Prices and Quantities | GMAT Quant",
  description:
    "Translate price-and-quantity word problems into equations and solve them efficiently. Includes core formulas, a worked example, and three practice MCQs with full solutions rendered using KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3.2 Word Problems with Differing Unit Prices and Quantities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many real‑world questions compare how price and quantity interact.
          Typical prompts ask you to find a missing unit price, determine how many items fit a budget,
          or relate two different pricing schemes. The fastest path is to translate the words
          into one of a few standard equations.
        </p>

        <div className="space-y-2">
          <p>Three interchangeable forms you’ll use often:</p>
          <BlockMath math="\text{total cost} \;=\; (\text{cost per item}) \times (\#\text{ of items})" />
          <BlockMath math="\text{cost per item} \;=\; \dfrac{\text{total cost}}{\#\text{ of items}}" />
          <BlockMath math="\#\text{ of items} \;=\; \dfrac{\text{total cost}}{\text{cost per item}}" />
        </div>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick worked example
          </h3>
          <p>
            A watermelon at store A costs 2 dollars more than at store B. With $120,
            a shopper can buy 10 more watermelons at store B than at store A. What is
            the price per watermelon at store B?
          </p>
          <div className="space-y-3">
            <p>
              Let <InlineMath math="x" /> be the dollar price at store B, so store A charges{" "}
              <InlineMath math="x+2" />. Using{" "}
              <InlineMath math="\#\text{ items}=\dfrac{\text{total}}{\text{price}}" />:
            </p>
            <BlockMath math="\dfrac{120}{x} \;=\; \dfrac{120}{x+2} \;+\; 10" />
            <p>Solve:</p>
            <BlockMath math="\begin{aligned}
              \dfrac{120}{x} - \dfrac{120}{x+2} &= 10 \\
              \dfrac{120(x+2) - 120x}{x(x+2)} &= 10 \\
              \dfrac{240}{x(x+2)} &= 10 \\
              x(x+2) &= 24 \\
              x^2 + 2x - 24 &= 0 \\
              (x+6)(x-4) &= 0 \;\;\Rightarrow\;\; x=4 \;(\text{reject } x=-6)
            \end{aligned}" />
            <p>The price at store B is $4; at store A it is $6.</p>
          </div>
        </section>

        <MustKnow>
          <div className="space-y-3">
            <p>
              For different unit‑price setups, translate directly to equations using:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <InlineMath math="\text{total cost} \;=\; (\text{cost per item})\times(\#\text{ of items})" />
              </li>
              <li>
                <InlineMath math="\text{cost per item} \;=\; \dfrac{\text{total cost}}{\#\text{ of items}}" />
              </li>
              <li>
                <InlineMath math="\#\text{ of items} \;=\; \dfrac{\text{total cost}}{\text{cost per item}}" />
              </li>
            </ul>
            <p>
              Most such prompts simplify to a linear or quadratic equation. If factoring looks messy,
              divide out common factors first, try answer choices, or use the quadratic formula.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={14}
          prompt="Hat Mart sells all hats at one price. If raising that price by $5 would cause a $200 budget to buy exactly two fewer hats, what is the current price per hat (in dollars)?"
          options={["10", "15", "20", "25", "30"]}
          correct="20"
          solution={
            <>
              <p>
                Let <InlineMath math="c" /> be the current price. Then the number of hats purchasable
                with $200 is <InlineMath math="200/c" />. After a $5 increase, it becomes{" "}
                <InlineMath math="200/(c+5)" />, which is two fewer:
              </p>
              <BlockMath math="\dfrac{200}{c+5} \;=\; \dfrac{200}{c} \;-\; 2" />
              <BlockMath math="\begin{aligned}
                \dfrac{200}{c+5} &= \dfrac{200-2c}{c} \\
                200c &= (200-2c)(c+5) \\
                200c &= 200c + 1000 - 2c^2 - 10c \\
                0 &= -2c^2 - 10c + 1000 \\
                c^2 + 5c - 500 &= 0 \\
                (c+25)(c-20) &= 0 \Rightarrow c=20
              \end{aligned}" />
              <p>Thus the current price is $20.</p>
            </>
          }
        />

        <section aria-labelledby="non-discrete" className="space-y-4">
          <h3 id="non-discrete" className="text-xl font-semibold text-white">
            Beyond “price per item”
          </h3>
          <p>
            The same translation works for rates such as dollars per hour or dollars per kilogram. For example,
            hourly pay rate:
          </p>
          <BlockMath math="\text{pay rate per hour} \;=\; \dfrac{\text{total dollars earned}}{\text{hours worked}}" />
        </section>

        <MustKnow>
          Price‑and‑quantity questions may use continuous measures (hours, pounds) instead of discrete items. The setup is identical—just swap in the appropriate unit for “item.”
        </MustKnow>

        <MCQExample
          number={15}
          prompt="Jackson was prepaid $280 for a babysitting job. The parents returned 2 hours earlier than planned, so his actual hourly rate was $7 more than the planned rate. How long did Jackson actually work?"
          options={["8 hours", "10 hours", "28 hours", "35 hours", "40 hours"]}
          correct="8 hours"
          solution={
            <>
              <p>
                Let <InlineMath math="h" /> be the originally planned hours, so actual hours were{" "}
                <InlineMath math="h-2" />. Using rate = total / time:
              </p>
              <BlockMath math="\dfrac{280}{h-2} \;=\; \dfrac{280}{h} \;+\; 7" />
              <BlockMath math="\begin{aligned}
                \dfrac{280}{h-2} - \dfrac{280}{h} &= 7 \\
                \dfrac{280h - 280(h-2)}{h(h-2)} &= 7 \\
                \dfrac{560}{h(h-2)} &= 7 \\
                h(h-2) &= 80 \\
                h^2 - 2h - 80 &= 0 \\
                (h-10)(h+8) &= 0 \Rightarrow h=10
              \end{aligned}" />
              <p>
                Jackson actually worked <InlineMath math="h-2 = 8" /> hours.
              </p>
            </>
          }
        />

        <MCQExample
          number={16}
          prompt="Hanna pays $20 weekly for wash‑and‑fold laundry at Hank’s, which charges a fixed price per pound. One week she tried Mike’s, where the price per pound was $0.50 less, and for $20 she got 2 more pounds done. How many pounds did she get done at Mike’s?"
          options={["2.5", "40", "20", "8", "10"]}
          correct="10"
          solution={
            <>
              <p>
                Let <InlineMath math="p" /> be the pounds at Hank’s for $20. Then the price per pound at Hank’s is{" "}
                <InlineMath math="20/p" />, and at Mike’s it is{" "}
                <InlineMath math="20/(p+2)" />. Mike’s is $0.50 cheaper:
              </p>
              <BlockMath math="\dfrac{20}{p+2} \;=\; \dfrac{20}{p} \;-\; 0.5" />
              <BlockMath math="\begin{aligned}
                \dfrac{20}{p+2} &= \dfrac{20-0.5p}{p} \\
                20p &= (20-0.5p)(p+2) \\
                20p &= 20p + 40 - 0.5p^2 - p \\
                0.5p^2 + p - 40 &= 0 \\
                p^2 + 2p - 80 &= 0 \\
                (p-8)(p+10) &= 0 \Rightarrow p=8
              \end{aligned}" />
              <p>
                Mike’s processed <InlineMath math="p+2 = 10" /> pounds for $20.
              </p>
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Translate the language to one of the three core equations, align quantities to a single budget or
            rate, and solve. Many problems reduce to a simple quadratic—don’t hesitate to factor, test choices,
            or use the quadratic formula when needed.
          </p>
        </section>
      </article>
    </main>
  );
}