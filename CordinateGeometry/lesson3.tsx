import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "18.2.2 Points on the Coordinate Plane | Coordinate Geometry",
  description:
    "Learn how ordered pairs (x, y) identify points on the xy-plane, what the origin (0, 0) represents, and how to plot points. Includes a quick multiple‑choice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.2.2 Points on the Coordinate Plane
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Cartesian plane contains infinitely many locations, and each one can
          be labeled with an ordered pair <InlineMath math="(x, y)" />. The first value,
          <InlineMath math="x" />, gives the horizontal position (left/right), and the
          second value, <InlineMath math="y" />, gives the vertical position (down/up).
        </p>

        <p>
          By convention, coordinates are always written as <InlineMath math="(x, y)" />,
          in that order. The origin—the point where the axes cross—is{" "}
          <InlineMath math="(0, 0)" />.
        </p>

        <MustKnow>
          The position of any point in the plane is uniquely determined by its
          ordered pair <InlineMath math="(x, y)" />. Two distinct points cannot share
          the same coordinates, and the x‑coordinate always precedes the
          y‑coordinate.
        </MustKnow>

        <section aria-labelledby="plotting-a-point" className="space-y-3">
          <h3 id="plotting-a-point" className="text-xl font-semibold text-white">
            Plotting a Point
          </h3>
          <p>
            To plot <InlineMath math="(4, 6)" />, move 4 units to the right from the origin,
            then go 6 units up. Place a dot at that location.
          </p>

          <figure className="rounded-lg bg-gray-800/40 p-3">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl">
              <Image
                src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/content_asset/asset/1847/New_Diagrams_-_Ch._17_Geometry__4_.svg"
                alt="A coordinate grid illustrating the point (4, 6) located 4 units right and 6 units up from the origin."
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              Plotting a point: example with <InlineMath math="(4, 6)" />.
            </figcaption>
          </figure>
        </section>

        <MCQExample
          number={1}
          prompt='Which ordered pair represents the point that is 4 units to the right of the origin and 6 units above it?'
          options={["(6, 4)", "(-4, 6)", "(4, 6)", "(4, -6)", "(-6, 4)"]}
          correct="(4, 6)"
          solution={
            <>
              <p>
                The first coordinate is horizontal movement from the origin:
                “4 units to the right” means <InlineMath math="x = 4" />. The second
                coordinate is vertical movement: “6 units above” means{" "}
                <InlineMath math="y = 6" />. So the correct ordered pair is{" "}
                <InlineMath math="(4, 6)" />.
              </p>
            </>
          }
        />

        <section aria-labelledby="quick-notes" className="space-y-3">
          <h3 id="quick-notes" className="text-xl font-semibold text-white">
            Quick Notes
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Always write coordinates as <InlineMath math="(x, y)" />.
            </li>
            <li>
              The origin is <InlineMath math="(0, 0)" />—no horizontal or vertical
              displacement.
            </li>
            <li>
              Positive <InlineMath math="x" /> is to the right; negative{" "}
              <InlineMath math="x" /> is to the left. Positive{" "}
              <InlineMath math="y" /> is up; negative <InlineMath math="y" /> is down.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}