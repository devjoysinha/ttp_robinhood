import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr, className }: { expr: string; className?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr, className }: { expr: string; className?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
    displayMode: true,
  });
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "14.10.5 Compare Standard Deviations Without Computing Them | Statistics",
  description:
    "Learn a fast method to compare standard deviations when sets have the same size: compare sums of absolute deviations from the mean. Includes two worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10.5 Comparing Standard Deviations Without Fully Calculating
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On test day, you rarely need the full standard deviation formula. When two or more data sets
          contain the same number of values, you can compare their spread quickly by looking at how far
          the data sit from each set’s mean.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Quick compare rule (equal‑sized sets):</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Find each set’s mean.</li>
              <li>
                Within a set, compute absolute distances from the mean and add them up:
                <MathInline expr="S=\sum\limits_{i=1}^{n}\lvert x_i-\bar{x}\rvert" className="ml-2" />
              </li>
              <li>The set with the larger sum has the larger standard deviation; the smaller sum means a smaller standard deviation.</li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="walkthrough" className="space-y-3">
          <h3 id="walkthrough" className="text-xl font-semibold text-white">Quick walkthrough</h3>
          <p>
            Compare Set A and Set B (both have 4 values):
          </p>
          <p className="font-mono text-sm text-gray-200">
            A = {"{2, 5, 6, 7}"} &nbsp;&nbsp;&nbsp; B = {"{7, 10, 12, 15}"}
          </p>
          <p>
            Means:
            <span className="ml-2">
              <MathInline expr="\bar{x}_A=\frac{2+5+6+7}{4}=5" />
            </span>
            ,{" "}
            <span className="ml-1">
              <MathInline expr="\bar{x}_B=\frac{7+10+12+15}{4}=11" />
            </span>
          </p>
          <p>
            Sum of absolute distances:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Set A:
              <span className="ml-2">
                <MathInline expr="|2-5|+|5-5|+|6-5|+|7-5|=3+0+1+2=6" />
              </span>
            </li>
            <li>
              Set B:
              <span className="ml-2">
                <MathInline expr="|7-11|+|10-11|+|12-11|+|15-11|=4+1+1+4=10" />
              </span>
            </li>
          </ul>
          <p>Because 10 &gt; 6, Set B has the greater standard deviation.</p>
          <p className="text-sm text-gray-400">
            FYI: Computing the actual standard deviations gives roughly 1.9 for A and 2.9 for B, consistent with the comparison above.
          </p>
        </section>

        <MCQExample
          number={66}
          prompt="Which of the following sets has the smallest standard deviation?"
          options={[
            "{3, 5, 8, 12}",
            "{9, 10, 11, 14}",
            "{0, 10, 20, 22}",
            "{1, 0, 0, 43}",
            "{2, 2, 4, 8}",
          ]}
          correct="{9, 10, 11, 14}"
          solution={
            <>
              <p>
                All answer choices have 4 values, so we can compare sums of absolute distances from the mean.
              </p>

              <p className="mt-3 font-semibold">Choice A: {"{3, 5, 8, 12}"}</p>
              <p>
                <MathInline expr="\bar{x}=\frac{3+5+8+12}{4}=7" />; distances sum to
                <span className="ml-1"><MathInline expr="|3-7|+|5-7|+|8-7|+|12-7|=4+2+1+5=12" /></span>.
              </p>

              <p className="mt-3 font-semibold">Choice B: {"{9, 10, 11, 14}"}</p>
              <p>
                <MathInline expr="\bar{x}=\frac{9+10+11+14}{4}=11" />; distances sum to
                <span className="ml-1"><MathInline expr="|9-11|+|10-11|+|11-11|+|14-11|=2+1+0+3=6" /></span>.
              </p>

              <p className="mt-3 font-semibold">Choice C: {"{0, 10, 20, 22}"}</p>
              <p>
                <MathInline expr="\bar{x}=\frac{0+10+20+22}{4}=13" />; sum =
                <span className="ml-1"><MathInline expr="|0-13|+|10-13|+|20-13|+|22-13|=13+3+7+9=32" /></span>.
              </p>

              <p className="mt-3 font-semibold">Choice D: {"{1, 0, 0, 43}"}</p>
              <p>
                <MathInline expr="\bar{x}=\frac{1+0+0+43}{4}=11" />; sum =
                <span className="ml-1"><MathInline expr="|1-11|+|0-11|+|0-11|+|43-11|=10+11+11+32=64" /></span>.
              </p>

              <p className="mt-3 font-semibold">Choice E: {"{2, 2, 4, 8}"}</p>
              <p>
                <MathInline expr="\bar{x}=\frac{2+2+4+8}{4}=4" />; sum =
                <span className="ml-1"><MathInline expr="|2-4|+|2-4|+|4-4|+|8-4|=2+2+0+4=8" /></span>.
              </p>

              <p className="mt-3">
                The smallest sum is 6 (Choice B), so Choice B has the least standard deviation.
              </p>
            </>
          }
        />

        <MCQExample
          number={67}
          prompt={
            <>
              <div>Set X = {"{30, 35, 40, 45, 50}"}</div>
              <div className="mt-1">Which of the following sets has a standard deviation greater than Set X?</div>
              <div className="mt-2">
                I. {"{12, 16, 20, 24, 28}"}<br />
                II. {"{20, 26, 32, 38, 44}"}<br />
                III. {"{0, 10, 20, 30, 40}"}
              </div>
            </>
          }
          options={["I only", "II only", "III only", "II and III", "I, II, and III"]}
          correct="II and III"
          solution={
            <>
              <p className="font-semibold">Baseline (Set X)</p>
              <p>
                Evenly spaced by 5; median equals mean: <MathInline expr="\bar{x}_X=40" />.
                Sum of absolute distances:
                <span className="ml-1">
                  <MathInline expr="|30-40|+|35-40|+|40-40|+|45-40|+|50-40|=10+5+0+5+10=30" />
                </span>
              </p>

              <p className="mt-3 font-semibold">I. {"{12, 16, 20, 24, 28}"}</p>
              <p>
                Evenly spaced by 4; <MathInline expr="\bar{x}=20" />; sum =
                <span className="ml-1"><MathInline expr="|12-20|+|16-20|+|20-20|+|24-20|+|28-20|=8+4+0+4+8=24" /></span>
                , which is less than 30 ⇒ SD smaller than Set X.
              </p>

              <p className="mt-3 font-semibold">II. {"{20, 26, 32, 38, 44}"}</p>
              <p>
                Evenly spaced by 6; <MathInline expr="\bar{x}=32" />; sum =
                <span className="ml-1"><MathInline expr="|20-32|+|26-32|+|32-32|+|38-32|+|44-32|=12+6+0+6+12=36" /></span>
                , which is greater than 30 ⇒ SD larger than Set X.
              </p>

              <p className="mt-3 font-semibold">III. {"{0, 10, 20, 30, 40}"}</p>
              <p>
                Evenly spaced by 10; <MathInline expr="\bar{x}=20" />; sum =
                <span className="ml-1"><MathInline expr="|0-20|+|10-20|+|20-20|+|30-20|+|40-20|=20+10+0+10+20=60" /></span>
                , which is greater than 30 ⇒ SD larger than Set X.
              </p>

              <p className="mt-3">Therefore, only II and III have greater standard deviation than Set X.</p>
            </>
          }
        />

        <p>
          Takeaway: when sets are the same size, compare{" "}
          <MathInline expr="\sum |x_i-\bar{x}|" /> instead of calculating standard deviation directly. It’s faster and gives you the correct ordering of spreads.
        </p>
      </article>
    </main>
  );
}