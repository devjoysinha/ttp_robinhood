import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { Math } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "19.7 Graphs of Functions | Functions & Sequences",
  description:
    "See how inputs map to points on the coordinate plane and graph y = x^2 + 10. Evaluate sample inputs, locate the minimum, and determine the function’s range with clear reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.7 Graphs of Functions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every function can be shown visually on the coordinate plane. When you
          plot a function, the input goes on the horizontal axis (x), and the
          output of the function is the vertical coordinate (y). In other words,
          each input x and its corresponding output f(x) form an ordered pair
          (x, y).
        </p>

        <MustKnow>
          A graph is a picture of the rule “x goes to f(x).” Points on the graph
          are exactly the pairs (x, f(x)). If you know how f(x) behaves, you can
          predict the shape, key points, and features such as intercepts and
          extrema.
        </MustKnow>

        <section aria-labelledby="quad-example">
          <h3 id="quad-example" className="sr-only">
            Example: y = x^2 + 10
          </h3>
          <p className="mt-4">
            Consider the quadratic function{" "}
            <Math display={false}>f(x) = x^2 + 10</Math>. Since{" "}
            <Math display={false}>y = f(x)</Math>, the graph satisfies{" "}
            <Math display={false}>y = x^2 + 10</Math>.
          </p>

          <figure className="my-6" aria-describedby="fig-y-equals-x2-plus-10">
            <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-md ring-1 ring-white/10">
              <Image
                src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/content_asset/asset/333/image004.jpg"
                alt="Parabola opening upward with vertex at (0, 10), representing y = x^2 + 10"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                priority
                className="object-contain"
              />
            </div>
            <figcaption
              id="fig-y-equals-x2-plus-10"
              className="mt-2 text-center text-sm text-gray-400"
            >
              Graph of y = x² + 10: an upward-opening parabola shifted up by 10.
            </figcaption>
          </figure>

          <p>
            Let’s evaluate a few inputs to anchor points on the graph:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <Math display={false}>f(-3) = (-3)^2 + 10 = 19</Math>
            </li>
            <li>
              <Math display={false}>f(-2) = (-2)^2 + 10 = 14</Math>
            </li>
            <li>
              <Math display={false}>f(-1) = (-1)^2 + 10 = 11</Math>
            </li>
            <li>
              <Math display={false}>f(0) = 0^2 + 10 = 10</Math>
            </li>
            <li>
              <Math display={false}>f(1) = 1^2 + 10 = 11</Math>
            </li>
            <li>
              <Math display={false}>f(2) = 2^2 + 10 = 14</Math>
            </li>
            <li>
              <Math display={false}>f(3) = 3^2 + 10 = 19</Math>
            </li>
          </ul>

          <p>
            Notice the smallest output occurs at{" "}
            <Math display={false}>x = 0</Math>. Because{" "}
            <Math display={false}>x^2 ≥ 0</Math> for all real x, the function’s
            minimum value is{" "}
            <Math display={false}>0 + 10 = 10</Math>, achieved at{" "}
            <Math display={false}>x = 0</Math>. Therefore the range is
            all real numbers y such that{" "}
            <Math display={false}>y ≥ 10</Math>.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="What is the range of h(x) = x^2 + 4?"
          options={[
            "All real numbers",
            "y ≥ 0",
            "y ≥ 4",
            "y ≤ 4",
            "y > 4",
          ]}
          correct="y ≥ 4"
          solution={
            <>
              <p>
                Since <Math display={false}>x^2 ≥ 0</Math> for any real x, the
                smallest value of <Math display={false}>x^2 + 4</Math> is{" "}
                <Math display={false}>4</Math>, at{" "}
                <Math display={false}>x = 0</Math>. Thus the range is all y with{" "}
                <Math display={false}>y ≥ 4</Math>.
              </p>
            </>
          }
        />

        <MustKnow>
          For vertical shifts of a basic parabola{" "}
          <Math display={false}>y = x^2</Math>, the graph of{" "}
          <Math display={false}>y = x^2 + k</Math> has the same shape, its
          vertex at <Math display={false}>(0, k)</Math>, and range{" "}
          <Math display={false}>y ≥ k</Math> when it opens upward.
        </MustKnow>

        <p className="pt-2">
          Takeaway: to read a function’s graph, match each input to its output
          as an ordered pair. For quadratics like{" "}
          <Math display={false}>y = x^2 + 10</Math>, the vertex gives the
          minimum, so you can state the range immediately as{" "}
          <Math display={false}>y ≥ 10</Math>.
        </p>
      </article>
    </main>
  );
}