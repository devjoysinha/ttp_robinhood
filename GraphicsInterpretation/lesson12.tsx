import type { Metadata } from "next";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.13 y‑Axis That Doesn’t Start at Zero | Graphics Interpretation",
  description:
    "Why truncated y‑axes can visually exaggerate differences, how to read such charts correctly, and four quick practice checks with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.13 Charts Whose y‑Axis Does Not Start at Zero
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a graph uses an x‑ and y‑axis, check the y‑axis scale immediately.
          If the vertical scale doesn’t begin at zero, the visual height of bars or
          lines can make differences look much larger than they truly are.
        </p>

        <MustKnow>
          If the y‑axis is truncated (doesn’t start at 0), lengths and gaps are not
          reliable for judging size. Read the labeled values and compute differences
          or percentages instead of trusting the picture.
        </MustKnow>

        <p>
          Consider a simple price example. A drone costs $100 in 2018 and $110 in 2019.
          The true percent change is
        </p>
        <BlockMath math={`\\frac{110 - 100}{100} = 0.10 = 10\\%`} />

        <figure className="mt-4">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/517/content_Lesson_-_Graphs_in_Which_the_y-Axis_Does_Not_Start_at_Zero.png"
            alt="Bar chart with y-axis starting at $0 showing $100 and $110"
            width={700}
            height={400}
            className="h-auto w-full rounded-md border border-gray-700"
            sizes="(max-width: 768px) 100vw, 700px"
            unoptimized
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            With a y‑axis starting at zero, the 2019 bar looks about 10% taller, which matches the actual change.
          </figcaption>
        </figure>

        <p>
          Now show the same bars with the y‑axis starting at $90. The 2019 bar may appear around twice as tall,
          even though the true increase is only 10%.
        </p>

        <figure>
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/518/content_Lesson_2_-_Graphs_in_Which_the_y-Axis_Does_Not_Start_at_Zero.png"
            alt="Bar chart with y-axis starting at $90, visually exaggerating difference between $100 and $110"
            width={700}
            height={400}
            className="h-auto w-full rounded-md border border-gray-700"
            sizes="(max-width: 768px) 100vw, 700px"
            unoptimized
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Truncating the y‑axis makes the difference look far larger than it is.
          </figcaption>
        </figure>

        <p>
          Push the lower bound even closer to the smaller value (e.g., start at $98) and the
          visual distortion becomes extreme: the taller bar can look several times higher,
          even though the numeric change is still only 10%.
        </p>

        <figure>
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/519/content_Lesson_3_-_Graphs_in_Which_the_y-Axis_Does_Not_Start_at_Zero.png"
            alt="Bar chart with y-axis starting at $98, further exaggerating the 10% difference"
            width={700}
            height={400}
            className="h-auto w-full rounded-md border border-gray-700"
            sizes="(max-width: 768px) 100vw, 700px"
            unoptimized
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            The closer the axis baseline is to the smallest value, the more exaggerated the bars appear.
          </figcaption>
        </figure>

        <MustKnow>
          A non‑zero baseline inflates perceived differences. Always compare the actual numbers;
          don’t infer ratios or percentages from bar heights when the axis is truncated.
        </MustKnow>

        <p className="mt-8 text-gray-200 font-semibold">Example 17</p>

        <figure className="mt-2">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/520/content_Example_17.png"
            alt="Column chart of the top five finishing times in men’s 100m freestyle, 2020 Olympics"
            width={900}
            height={423}
            className="h-auto w-full rounded-md border border-gray-700"
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Finishing times for the first five swimmers in the men’s 100‑meter freestyle (2020 Olympics).
          </figcaption>
        </figure>

        <MCQExample
          number={21301}
          prompt="Based on the chart, Miressi’s time was ____ half of Kolesnikov’s time."
          options={["greater than", "less than", "equal to"]}
          correct="greater than"
          solution={
            <>
              <p>
                Don’t trust the bar heights because the y‑axis is truncated. Read values:
                Kolesnikov is just under 48 s, so <InlineMath math={"\\tfrac{1}{2}\\times 48\\text{ s}\\approx 24\\text{ s}"} />.
                Miressi is around 47.8 s, which is clearly greater than 24 s.
              </p>
              <p>
                Therefore, Miressi’s time is greater than half of Kolesnikov’s time.
              </p>
            </>
          }
        />

        <MCQExample
          number={21302}
          prompt="If Chalmers had swum the same distance in half the time shown, he would have been ____ among the five swimmers."
          options={[
            "the fastest",
            "the second fastest",
            "the slowest",
            "the second slowest",
          ]}
          correct="the fastest"
          solution={
            <>
              <p>
                Halving time halves duration, not bar height on a truncated axis. Chalmers is about
                47.75–47.8 s, so half is roughly <InlineMath math={"\\sim 24\\text{ s}"} />, which is less
                than any recorded time on the chart.
              </p>
              <p>He would be the fastest.</p>
            </>
          }
        />

        <p className="mt-10 text-gray-200 font-semibold">Example 18</p>

        <figure className="mt-2">
          <Image
            src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/778/content_Example_18.png"
            alt="Bar charts of Alex’s net income and total expenses, 2012–2015"
            width={900}
            height={423}
            className="h-auto w-full rounded-md border border-gray-700"
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption className="mt-2 text-sm text-gray-400">
            Net (after‑tax) income and expenses for Alex by year; savings = net − expenses.
          </figcaption>
        </figure>

        <MCQExample
          number={21303}
          prompt="In 2015, the amount Alex saved was ____ the amount she saved in 2012."
          options={["greater than", "less than", "the same as"]}
          correct="greater than"
          solution={
            <>
              <p>Compute approximate savings from the charted values:</p>
              <BlockMath math={`\\text{2012 savings} \\approx 40{,}000 - 38{,}500 = 1{,}500`} />
              <BlockMath math={`\\text{2015 savings} \\approx 44{,}000 - 40{,}100 = 3{,}900`} />
              <p>So 2015 savings were greater than 2012 savings.</p>
            </>
          }
        />

        <MCQExample
          number={21304}
          prompt="If income over $25,000 is taxed at 40% and Alex’s 2012 net income was about $40,000, her gross income in 2012 was approximately:"
          options={["$53,000", "$50,000", "$47,000", "$44,000"]}
          correct="$50,000"
          solution={
            <>
              <p>
                Let <InlineMath math={"x"} /> be Alex’s 2012 gross income. Tax applies only to the amount above $25,000:
              </p>
              <BlockMath math={`\\text{net} = x - 0.40\\,(x - 25{,}000) = 40{,}000`} />
              <BlockMath math={`x - 0.4x + 10{,}000 = 40{,}000 \\quad \\Rightarrow \\quad 0.6x = 30{,}000 \\quad \\Rightarrow \\quad x = 50{,}000`} />
              <p>Thus, her gross income was about $50,000.</p>
            </>
          }
        />

        <MustKnow>
          Big picture: a truncated y‑axis changes the way bars look, not the actual numbers. Verify
          conclusions using the labeled values and calculations, not just visual impressions.
        </MustKnow>
      </article>
    </main>
  );
}