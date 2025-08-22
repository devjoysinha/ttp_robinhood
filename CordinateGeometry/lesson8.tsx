import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { Katex } from "@/components/ui/Katex";

export const metadata: Metadata = {
  title: "18.5.1 Slope Types | Coordinate Geometry",
  description:
    "Learn rise over run and the four slope cases—positive, negative, zero, and undefined. Includes one quick multiple‑choice check and a Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.5.1 A Line’s Slope Can Be Positive, Negative, Zero, or Undefined
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The slope of a line measures how y changes as x changes. In symbols,
          slope is “rise over run.”
        </p>

        <p aria-live="polite">
          <Katex math={"m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}"} block />
        </p>

        <p>
          Here, Δy is the vertical change between two points on the line, and Δx
          is the horizontal change between those points.
        </p>

        <p>
          Depending on how the line tilts, the slope can be:
          - positive: the line goes up as you move left to right
          - negative: the line goes down as you move left to right
          - zero: a horizontal line
          - undefined: a vertical line
        </p>

        <figure className="mt-6">
          <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/content_asset/asset/2890/image1.png"
              alt="Four mini-graphs showing positive, negative, zero, and undefined slopes on labeled axes."
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority={false}
              className="object-contain"
            />
          </div>
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Four common slope types: positive, negative, zero, and undefined
          </figcaption>
        </figure>

        <MustKnow>
          Slope describes the direction and steepness of a line:
          - m > 0: the line rises left to right
          - m < 0: the line falls left to right
          - m = 0: the line is horizontal
          - undefined slope: the line is vertical (Δx = 0, so division by zero)
        </MustKnow>

        <p>
          You can often infer the sign of the slope just from how the line moves
          across the plane. Later lessons connect slope to the quadrants a line
          passes through, but the core idea remains the same: it’s all about how
          y changes with x.
        </p>

        <MCQExample
          number={1}
          prompt="Which equation represents a line with undefined slope?"
          options={["y = 3", "x = -2", "y = 2x + 5", "y = 0", "y = -x + 4"]}
          correct="x = -2"
          solution={
            <>
              <p>
                An undefined slope corresponds to a vertical line, which has an
                equation of the form <Katex math={"x = a"} />. Among the choices,
                <Katex math={"x = -2"} /> is the only vertical line, so it has undefined slope.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Identifying the slope type from points"
          statements={[
            "What is the slope of line ℓ?",
            "1) ℓ passes through (1, 2) and (1, −3).",
            "2) ℓ passes through (0, 5).",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want the slope of line ℓ. Use the definition
                <Katex math={"m = \\dfrac{y_2 - y_1}{x_2 - x_1}"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> Two points on ℓ share the same x-value,
                so <Katex math={"x_2 - x_1 = 0"} />. That makes the denominator zero, which means the
                line is vertical and the slope is undefined. This statement alone is sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing a single point, (0, 5), does not
                determine the slope because infinitely many lines pass through that point.
                Not sufficient.
              </p>
              <p>
                Therefore, statement (1) alone is sufficient while statement (2) alone is not. Answer: A.
              </p>
            </>
          }
        />

        <p>
          Big picture: slope is a ratio of changes. Once you recognize how a line
          moves across the plane, you can quickly classify its slope as positive, negative,
          zero, or undefined—often without computing anything.
        </p>
      </article>
    </main>
  );
}