import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "19.9 Word Problems with Quadratic Max/Min | Functions & Sequences",
  description:
    "Apply vertex tools to maximize or minimize real‑world quadratic models: revenue, cost, and area. Includes a quick walkthrough and four practice MCQs with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.9 Word Problems with Maximum and Minimum Values of a Quadratic Function
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the last section, you learned how to locate the extreme (maximum or minimum) value of a quadratic. We’ll now put that skill to work in common word‑problem settings such as profit/revenue, cost, and geometric area. The playbook is the same: model the situation with a quadratic in one variable, then use the vertex.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              Any quadratic can be written as <InlineMath math={"f(x) = ax^2 + bx + c"} />.
            </p>
            <ul className="list-disc pl-6">
              <li>
                If <InlineMath math={"a < 0"} />, the graph opens downward and the vertex gives the maximum.
              </li>
              <li>
                If <InlineMath math={"a > 0"} />, the graph opens upward and the vertex gives the minimum.
              </li>
              <li>
                The x‑coordinate of the vertex is <InlineMath math={"x = -\\tfrac{b}{2a}"} />. Plug this x back into the function to get the extreme value.
              </li>
            </ul>
            <p>
              Typical steps: define the variable, build the quadratic, identify the sign of <InlineMath math={"a"} />, use <InlineMath math={"x = -\\tfrac{b}{2a}"} />, and evaluate.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Profit at its peak
          </h3>
          <p>
            A manufacturer’s profit (in dollars) from producing and selling <InlineMath math={"x"} /> units is
            <InlineMath math={"\\;P(x) = -3x^2 + 1200x - 20000."} />
          </p>
          <p>
            Since <InlineMath math={"a=-3 < 0"} />, the profit is maximized at
            <InlineMath math={"\\;x^* = -\\tfrac{b}{2a} = -\\tfrac{1200}{2(-3)} = 200."} />
          </p>
          <p>
            The maximum profit is <InlineMath math={"P(200) = -3(200)^2 + 1200(200) - 20000 = 100{,}000."} /> So the company should make and sell 200 units to achieve a $100,000 profit.
          </p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={18}
          prompt="At Funorama, the weekly profit (in dollars) from selling x swing sets is given by P(x) = -50x^2 + 600x. What is the greatest possible weekly profit?"
          options={["$6", "$600", "$1,200", "$1,800", "$3,600"]}
          correct="$1,800"
          solution={
            <>
              <p>
                Profit is quadratic with <InlineMath math={"a=-50<0"} />, so the peak occurs at
                <InlineMath math={"\\;x^* = -\\tfrac{b}{2a} = -\\tfrac{600}{2(-50)} = 6."} />
              </p>
              <p>
                Evaluate: <InlineMath math={"P(6) = -50(6)^2 + 600(6) = -1800 + 3600 = 1800."} />
                Thus, the maximum weekly profit is $1,800.
              </p>
            </>
          }
        />

        <MCQExample
          number={19}
          prompt={
            <>
              The shipping cost (in dollars) for sending <InlineMath math={"x>0"} /> items is
              <InlineMath math={"\\;C(x) = 10x^2 - 320x + 2600."} /> How many items minimize the shipping cost?
            </>
          }
          options={["4", "16", "40", "260", "2,600"]}
          correct="16"
          solution={
            <>
              <p>
                Since <InlineMath math={"a=10>0"} />, the minimum occurs at
                <InlineMath math={"\\;x^* = -\\tfrac{b}{2a} = -\\tfrac{-320}{2\\cdot 10} = 16."} />
                So shipping 16 items yields the lowest cost.
              </p>
              <p className="text-gray-400">
                Optional check: <InlineMath math={"C(16)=10(256)-320(16)+2600=2560-5120+2600=40."} />
              </p>
            </>
          }
        />

        <section aria-labelledby="derive-first" className="space-y-3">
          <h3 id="derive-first" className="text-xl font-semibold text-white">
            When the function isn’t given, build it first
          </h3>
          <p>
            Many questions don’t hand you the quadratic directly. Translate the scenario into algebra, simplify to a quadratic, and then use the vertex.
          </p>
        </section>

        <MCQExample
          number={20}
          prompt={
            <>
              A store currently sells 700 widgets per month at $40 each. For every $1 price increase, monthly sales drop by 10 units. At what price should the store sell to maximize monthly revenue?
            </>
          }
          options={["$15", "$45", "$55", "$65", "$75"]}
          correct="$55"
          solution={
            <>
              <p>
                Let <InlineMath math={"x"} /> be the price increase (in dollars). Then price =
                <InlineMath math={"\\;40 + x"} />, quantity =
                <InlineMath math={"\\;700 - 10x"} />. Revenue:
              </p>
              <BlockMath math={"R(x) = (700 - 10x)(40 + x) = -10x^2 + 300x + 28000"} />
              <p>
                With <InlineMath math={"a=-10<0"} />, maximize at
                <InlineMath math={"\\;x^* = -\\tfrac{b}{2a} = -\\tfrac{300}{2(-10)} = 15."} />
                Optimal price = <InlineMath math={"40 + 15 = 55"} /> dollars.
              </p>
            </>
          }
        />

        <MCQExample
          number={21}
          prompt={
            <>
              Chad has 200 feet of fencing to form a rectangular pen along a straight brick wall. The wall serves as one side; fencing is used for the other three sides. Using all of the fencing, what is the largest possible area (in square feet)?
            </>
          }
          options={[
            "100 square feet",
            "1,000 square feet",
            "5,000 square feet",
            "10,000 square feet",
            "50,000 square feet",
          ]}
          correct="5,000 square feet"
          solution={
            <>
              <p>
                Let <InlineMath math={"x"} /> be the side parallel to the wall (the wall provides the opposite side). The remaining two sides share the remaining fencing:
                each is <InlineMath math={"\\tfrac{200 - x}{2}"} />.
              </p>
              <BlockMath math={"A(x) = x\\cdot\\tfrac{200 - x}{2} = -\\tfrac{1}{2}x^2 + 100x"} />
              <p>
                Since <InlineMath math={"a=-\\tfrac{1}{2}<0"} />, the maximum occurs at
                <InlineMath math={"\\;x^* = -\\tfrac{b}{2a} = -\\tfrac{100}{2(-1/2)} = 100."} />
              </p>
              <p>
                Maximum area: <InlineMath math={"A(100) = -\\tfrac{1}{2}(100)^2 + 100(100) = -5000 + 10000 = 5000"} /> square feet.
              </p>
            </>
          }
        />

        <p>
          Bottom line: convert the story to a quadratic, check the direction of opening, use the vertex formula <InlineMath math={"x = -\\tfrac{b}{2a}"} />, and evaluate. That’s the fastest path to max/min answers on test day.
        </p>
      </article>
    </main>
  );
}