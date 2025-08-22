import type { Metadata } from "next";
import katex from "katex";
import "server-only";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Ensure KaTeX stylesheet is loaded globally in your app layout:
// import "katex/dist/katex.min.css";

function K({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={block ? "katex-block" : "katex-inline"}
      aria-label={ariaLabel}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "18.9.1 Using a Right Triangle to Calculate the Length of a Line Segment | Coordinate Geometry",
  description:
    "Learn how to turn any slanted segment into the hypotenuse of a right triangle and compute its length with the Pythagorean theorem. Includes three worked multiple‑choice examples with step‑by‑step reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.9.1 Using a Right Triangle to Calculate the Length of a Line
          Segment
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A fast way to measure the distance between two points in the{" "}
          <em>xy</em>-plane is to treat the segment connecting them as the
          hypotenuse of a right triangle. Draw one horizontal and one vertical
          leg from the endpoints; those legs have lengths equal to the changes
          in x and y. Then apply the Pythagorean theorem to get the length of
          the hypotenuse (the original segment).
        </p>

        <section aria-labelledby="pythagorean-theorem">
          <h3 id="pythagorean-theorem" className="sr-only">
            Pythagorean Theorem Refresher
          </h3>
          <p className="leading-relaxed">
            For a right triangle with legs a and b and hypotenuse c:
          </p>
          <K
            block
            expr="c^2 = a^2 + b^2"
            ariaLabel="c squared equals a squared plus b squared"
          />
          <p className="mt-2">
            Therefore,
            {" "}
            <K expr="c=\sqrt{a^2+b^2}" ariaLabel="c equals the square root of a squared plus b squared" />
            .
          </p>
        </section>

        <section aria-labelledby="distance-formula">
          <h3 id="distance-formula" className="sr-only">
            Distance Formula
          </h3>
          <p>
            If the endpoints are
            {" "}
            <K expr="(x_1,y_1)" ariaLabel="x one, y one" /> and{" "}
            <K expr="(x_2,y_2)" ariaLabel="x two, y two" />, then the horizontal
            leg has length
            {" "}
            <K expr="|x_2-x_1|" ariaLabel="absolute value of x two minus x one" />{" "}
            and the vertical leg has length{" "}
            <K expr="|y_2-y_1|" ariaLabel="absolute value of y two minus y one" />.
            The segment length is:
          </p>
          <K
            block
            expr="d=\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}"
            ariaLabel="d equals the square root of open parenthesis x two minus x one close parenthesis squared plus open parenthesis y two minus y one close parenthesis squared"
          />
        </section>

        <MustKnow>
          To find the length of any non‑horizontal, non‑vertical segment,
          complete a right triangle using legs parallel to the axes and then
          apply the Pythagorean theorem. The distance formula is exactly this
          idea written in coordinates.
        </MustKnow>

        <section aria-labelledby="example-35">
          <h3 id="example-35" className="sr-only">
            Example 35
          </h3>
          <MCQExample
            number={35}
            prompt={
              <>
                A circle in the coordinate plane has center{" "}
                <K expr="(3,2)" ariaLabel="three, two" /> and passes through the
                origin. What is its circumference? (Use{" "}
                <K expr="C=2\pi r" ariaLabel="C equals two pi r" />.)
              </>
            }
            options={[
              <span key="o1">
                <K expr="2\pi\sqrt{5}" />
              </span>,
              <span key="o2">
                <K expr="5\pi" />
              </span>,
              <span key="o3">
                <K expr="2\pi\sqrt{13}" />
              </span>,
              <span key="o4">
                <K expr="10\pi" />
              </span>,
              <span key="o5">
                <K expr="6\pi\sqrt{13}" />
              </span>,
            ]}
            correct="2π√13"
            solution={
              <>
                <p>
                  The radius is the distance from the center to the origin:
                </p>
                <K
                  block
                  expr={`r=\\sqrt{(3-0)^2+(2-0)^2}=\\sqrt{9+4}=\\sqrt{13}`}
                  ariaLabel="r equals the square root of open parenthesis three minus zero close parenthesis squared plus open parenthesis two minus zero close parenthesis squared equals the square root of nine plus four equals the square root of thirteen"
                />
                <p>
                  Then the circumference is{" "}
                  <K expr="C=2\pi r=2\pi\sqrt{13}" ariaLabel="C equals two pi times r equals two pi times square root of thirteen" />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-36">
          <h3 id="example-36" className="sr-only">
            Example 36
          </h3>
          <MCQExample
            number={36}
            prompt={
              <>
                The vertices of a right triangle are{" "}
                <K expr="(10,4)" />, <K expr="(10,-6)" />, and{" "}
                <K expr="(2,-6)" />. What is the length of the hypotenuse?
              </>
            }
            options={[
              <span key="o1">
                <K expr="2\sqrt{41}" />
              </span>,
              <span key="o2">
                <K expr="4\sqrt{41}" />
              </span>,
              <span key="o3">
                <K expr="6\sqrt{41}" />
              </span>,
              <span key="o4">
                <K expr="8\sqrt{41}" />
              </span>,
              <span key="o5">
                <K expr="10\sqrt{41}" />
              </span>,
            ]}
            correct="2√41"
            solution={
              <>
                <p>
                  From <K expr="(10,4)" /> to <K expr="(10,-6)" /> is a vertical
                  leg of length <K expr="|4-(-6)|=10" />. From{" "}
                  <K expr="(10,-6)" /> to <K expr="(2,-6)" /> is a horizontal
                  leg of length <K expr="|10-2|=8" />.
                </p>
                <K
                  block
                  expr="c=\sqrt{10^2+8^2}=\sqrt{100+64}=\sqrt{164}=2\sqrt{41}"
                  ariaLabel="c equals the square root of ten squared plus eight squared equals the square root of one hundred plus sixty four equals the square root of one hundred sixty four equals two times square root of forty one"
                />
              </>
            }
          />
        </section>

        <section aria-labelledby="example-37">
          <h3 id="example-37" className="sr-only">
            Example 37
          </h3>
          <MCQExample
            number={37}
            prompt={
              <>
                For positive real numbers <K expr="a" /> and{" "}
                <K expr="b" />, the vertices of a right triangle are{" "}
                <K expr="(1,2)" />, <K expr="(1,6a+2)" />, and{" "}
                <K expr="(b+1,2)" />. If the area of the triangle is{" "}
                <K expr="24a^2" />, what is the length of the hypotenuse in
                terms of <K expr="a" />? (Use{" "}
                <K expr="\text{Area}=\tfrac12\cdot\text{base}\cdot\text{height}" />
                .)
              </>
            }
            options={["6a", "8a", "10a", "12a", "14a"]}
            correct="10a"
            solution={
              <>
                <p>
                  The vertical leg runs from <K expr="y=2" /> to{" "}
                  <K expr="y=6a+2" />, so its length is{" "}
                  <K expr="6a" />. The horizontal leg runs from{" "}
                  <K expr="x=1" /> to <K expr="x=b+1" />, so its length is{" "}
                  <K expr="b" />.
                </p>
                <p>Use the area to find b:</p>
                <K
                  block
                  expr="\frac12\cdot b\cdot 6a=24a^2 \;\;\Rightarrow\;\; 3ab=24a^2 \;\;\Rightarrow\;\; b=8a"
                  ariaLabel="one half times b times six a equals twenty four a squared, therefore three a b equals twenty four a squared, therefore b equals eight a"
                />
                <p>Now apply the Pythagorean theorem:</p>
                <K
                  block
                  expr="c=\sqrt{(6a)^2+(8a)^2}=\sqrt{36a^2+64a^2}=\sqrt{100a^2}=10a"
                  ariaLabel="c equals the square root of open parenthesis six a close parenthesis squared plus open parenthesis eight a close parenthesis squared equals the square root of thirty six a squared plus sixty four a squared equals the square root of one hundred a squared equals ten a"
                />
              </>
            }
          />
        </section>

        <p>
          Takeaway: When you can anchor the legs to the axes, a slanted segment
          becomes a hypotenuse. Measure the horizontal and vertical changes,
          then compute the length with{" "}
          <K expr="c=\sqrt{a^2+b^2}" ariaLabel="c equals square root of a squared plus b squared" />.
        </p>
      </article>
    </main>
  );
}