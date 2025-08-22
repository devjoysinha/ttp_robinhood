import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "18.10 The Midpoint Formula | Coordinate Geometry",
  description:
    "Master the midpoint formula: average the x’s and average the y’s. Includes three quick multiple‑choice drills and one Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          18. Coordinate Geometry for GMAT
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          18.10 The Midpoint Formula
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On test day, you should be comfortable locating the point that sits exactly halfway
          between two endpoints of a segment. The midpoint just averages the coordinates:
          average the x-values to get the midpoint’s x, and average the y-values to get the
          midpoint’s y.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              Midpoint of the segment with endpoints{" "}
              <InlineMath math="(x_1,y_1)" /> and <InlineMath math="(x_2,y_2)" /> is
              <span className="ml-2">
                <InlineMath math="\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right)" />
              </span>
              .
            </p>
            <ul className="list-disc pl-5">
              <li>
                The midpoint’s x-coordinate is the average of the two x-coordinates.
              </li>
              <li>
                The midpoint’s y-coordinate is the average of the two y-coordinates.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={38}
          prompt="In the coordinate plane, segment AB has endpoints (2, −2) and (4, 2). What is the y‑coordinate of the point halfway between them?"
          options={["0", "1", "2", "3", "4"]}
          correct="0"
          solution={
            <>
              <p>
                Use the midpoint formula for the y‑coordinate:
                <InlineMath math="\ \frac{y_1+y_2}{2}=\frac{-2+2}{2}=0" />.
              </p>
              <p>So the midpoint’s y‑value is 0.</p>
            </>
          }
        />

        <MCQExample
          number={39}
          prompt="Segment ST has one endpoint (a, b) and midpoint (c, d). In terms of a, b, c, and d, what are the coordinates of the other endpoint?"
          options={[
            "(c − a, d − b)",
            "(c + a, d + b)",
            "(2c − a, 2d − b)",
            "(2c + a, 2d + b)",
            "(2c − 2a, 2d − 2b)",
          ]}
          correct="(2c − a, 2d − b)"
          solution={
            <>
              <p>
                From{" "}
                <InlineMath math="\left(\frac{a+x}{2},\ \frac{b+y}{2}\right)=(c,d)" />, we
                get
                <InlineMath math="\ a+x=2c\ \Rightarrow\ x=2c-a" /> and{" "}
                <InlineMath math="\ b+y=2d\ \Rightarrow\ y=2d-b" />. Thus, the missing
                endpoint is <InlineMath math="(2c-a,\ 2d-b)" />.
              </p>
            </>
          }
        />

        <MCQExample
          number={40}
          prompt="The midpoint of segment AB is (2, 5). If the endpoints are (x, 4) and (10, y), what is x + y?"
          options={["0", "1", "2", "3", "4"]}
          correct="0"
          solution={
            <>
              <p>
                Match coordinates using{" "}
                <InlineMath math="\left(\frac{x+10}{2},\ \frac{4+y}{2}\right)=(2,5)" />.
              </p>
              <p>
                For x: <InlineMath math="\ \frac{x+10}{2}=2 \Rightarrow x+10=4 \Rightarrow x=-6" />
              </p>
              <p>
                For y: <InlineMath math="\ \frac{4+y}{2}=5 \Rightarrow 4+y=10 \Rightarrow y=6" />
              </p>
              <p>
                Therefore, <InlineMath math="x+y=-6+6=0" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={41}
          title="Midpoint with a horizontal segment (Data Sufficiency)"
          statements={[
            "Line segment k has slope 0 and endpoints (a, b) and (c, d). The midpoint of k is (10, 2). What is a + b?",
            "1) d = 2",
            "2) a = c − 2",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                Because the slope is 0, the segment is horizontal. So both endpoints share
                the midpoint’s y‑value: <InlineMath math="b=d=2" />. From the midpoint
                formula,
                <InlineMath math="\ \left(\frac{a+c}{2},\ \frac{b+d}{2}\right)=(10,2)" />.
                The y‑equation gives <InlineMath math="\frac{b+d}{2}=2 \Rightarrow b=d=2" />.
                The x‑equation gives <InlineMath math="\frac{a+c}{2}=10 \Rightarrow a+c=20" />.
              </p>
              <p>
                Statement (1): d = 2. This is already implied by the segment being
                horizontal, so it adds nothing new. Not sufficient.
              </p>
              <p>
                Statement (2): <InlineMath math="a=c-2" />. Combine with{" "}
                <InlineMath math="a+c=20" />:
                <InlineMath math="\ (c-2)+c=20\Rightarrow 2c=22\Rightarrow c=11" />, so{" "}
                <InlineMath math="a=9" />. Since <InlineMath math="b=2" /> on a horizontal
                segment, <InlineMath math="a+b=9+2=11" /> is fixed. Sufficient.
              </p>
              <p>Answer: B.</p>
            </>
          }
        />

        <p>
          Takeaway: to find a midpoint, average the x’s and average the y’s. When working
          backwards (given a midpoint and one endpoint), double the midpoint and subtract
          the known endpoint coordinate to recover the missing endpoint coordinate.
        </p>
      </article>
    </main>
  );
}