import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "18.6 The Slope–Intercept Equation | Coordinate Geometry",
  description:
    "Understand the slope–intercept form y = mx + b: what each symbol means, how to find slope, y‑intercept, and x‑intercept, plus three quick multiple‑choice drills with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.6 The Slope–Intercept Equation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every non‑vertical line can be written in slope–intercept form:
          {" "}
          <InlineMath math={"y = mx + b"} />. This compact equation tells you the
          steepness of the line and where it crosses the y‑axis.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <div>
              <InlineMath math={"y = mx + b"} /> where:
            </div>
            <ul className="ml-5 list-disc">
              <li>
                <InlineMath math={"m"} /> is the slope (rise over run).
              </li>
              <li>
                <InlineMath math={"b"} /> is the y‑intercept, the point where the line meets the y‑axis.
              </li>
              <li>
                <InlineMath math={"x"} /> and <InlineMath math={"y"} /> are the coordinates of any point on the line.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="slope">
          <h3 id="slope" className="text-xl font-semibold text-white">
            1) The slope m
          </h3>
          <p>
            In <InlineMath math={"y = mx + b"} />, the slope <InlineMath math={"m"} /> measures how fast{" "}
            <InlineMath math={"y"} /> changes as <InlineMath math={"x"} /> changes. For instance, in
            {" "}
            <InlineMath math={"y = \\tfrac{3}{4}x + 3"} />, the line goes up 3 units for every 4 units you move to the right.
          </p>
        </section>

        <section aria-labelledby="xvar">
          <h3 id="xvar" className="text-xl font-semibold text-white">
            2) The x‑coordinate (x)
          </h3>
          <p>
            If you know the slope <InlineMath math={"m"} /> and the intercept <InlineMath math={"b"} />, plugging any{" "}
            <InlineMath math={"x"} /> into <InlineMath math={"y = mx + b"} /> gives the matching{" "}
            <InlineMath math={"y"} /> on the line. Conversely, a known{" "}
            <InlineMath math={"y"} /> lets you solve for <InlineMath math={"x"} />.
          </p>
        </section>

        <MCQExample
          number={17}
          prompt="Point (v, 4) lies on line p with equation y = (3/4)x + 8. What is v?"
          options={["-16/3", "-8/3", "-1/3", "1/3", "8/3"]}
          correct="-16/3"
          solution={
            <>
              <p>Substitute y = 4 and solve for v.</p>
              <BlockMath math={"4 = \\tfrac{3}{4}v + 8"} />
              <BlockMath math={"4 - 8 = \\tfrac{3}{4}v"} />
              <BlockMath math={"-4 = \\tfrac{3}{4}v"} />
              <BlockMath math={"v = -4 \\cdot \\tfrac{4}{3} = -\\tfrac{16}{3}"} />
            </>
          }
        />

        <section aria-labelledby="yvar">
          <h3 id="yvar" className="text-xl font-semibold text-white">
            3) The y‑coordinate (y)
          </h3>
          <p>
            With the slope and intercept known, insert an <InlineMath math={"x"} /> value to compute the corresponding{" "}
            <InlineMath math={"y"} /> via <InlineMath math={"y = mx + b"} />.
          </p>
        </section>

        <MCQExample
          number={18}
          prompt="Point (16, t) lies on line y = (3/4)x + 8. What is t?"
          options={["5", "12", "16", "20", "24"]}
          correct="20"
          solution={
            <>
              <p>Plug x = 16 into the equation.</p>
              <BlockMath math={"t = \\tfrac{3}{4}(16) + 8 = 12 + 8 = 20"} />
            </>
          }
        />

        <section aria-labelledby="yint">
          <h3 id="yint" className="text-xl font-semibold text-white">
            4) The y‑intercept b
          </h3>
          <p>
            The y‑intercept is where the line meets the y‑axis, so{" "}
            <InlineMath math={"x = 0"} />. That point is always of the form{" "}
            <InlineMath math={"(0, b)"} />.
          </p>

          <MustKnow>
            At the y‑axis crossing, x = 0. So the intercept point is always
            {" "}
            <InlineMath math={"(0,\\, b)"} />.
          </MustKnow>
        </section>

        <MCQExample
          number={19}
          prompt="A point (x, 4) lies on line p, the slope of p is 3/4, and 2^x = 1. What is the y‑intercept of line p?"
          options={["4", "3", "2", "1", "0"]}
          correct="4"
          solution={
            <>
              <p>Since 2^x = 1, we must have x = 0.</p>
              <p>Thus (0, 4) lies on the line, which is exactly the y‑intercept. So b = 4.</p>
              <p>Check with the equation y = mx + b:</p>
              <BlockMath math={"4 = \\tfrac{3}{4}\\cdot 0 + b \\;\\Rightarrow\\; b = 4"} />
            </>
          }
        />

        <section aria-labelledby="xint">
          <h3 id="xint" className="text-xl font-semibold text-white">
            5) The x‑intercept
          </h3>
          <p>
            The x‑intercept is where the graph crosses the x‑axis, so{" "}
            <InlineMath math={"y = 0"} />. Solve <InlineMath math={"y = mx + b"} /> for{" "}
            <InlineMath math={"x"} />, then set <InlineMath math={"y = 0"} />:
          </p>
          <BlockMath math={"y = mx + b"} />
          <BlockMath math={"y - b = mx"} />
          <BlockMath math={"x = \\dfrac{y - b}{m}"} />
          <BlockMath math={"\\text{At the x‑intercept } (y=0):\\quad x = -\\dfrac{b}{m}"} />
          <MustKnow>
            At the x‑axis crossing, y = 0, so the intercept point is always
            {" "}
            <InlineMath math={"(x,\\, 0)"} /> and numerically <InlineMath math={"x = -\\dfrac{b}{m}"} />.
          </MustKnow>
        </section>

        <p className="pt-2">
          Summary: memorize the template <InlineMath math={"y = mx + b"} />, know what each symbol means, and use{" "}
          <InlineMath math={"x=0"} /> for the y‑intercept and <InlineMath math={"y=0"} /> for the x‑intercept.
        </p>
      </article>
    </main>
  );
}