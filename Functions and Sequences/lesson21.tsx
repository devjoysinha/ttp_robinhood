import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

function Eq({
  tex,
  block = false,
  sr,
}: {
  tex: string;
  block?: boolean;
  sr?: string;
}) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  if (block) {
    return (
      <div
        role="img"
        aria-label={sr ?? tex}
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={sr ?? tex}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "19.20.1 Tick Marks without Consecutive Values | Functions & Sequences",
  description:
    "Learn how to solve equally spaced number-line (tick mark) problems when consecutive values aren’t given. Introduce a step size k, write position equations, and solve quickly. Includes two practice MCQs with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.20.1 Tick Mark Questions When We Are Not Given Consecutive Values
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many equally spaced number‑line problems, you’re told the values of
          two adjacent tick marks, which makes the step size obvious. When you
          aren’t given consecutive labels, the fastest path is to define the
          common difference between ticks as a variable and build equations from
          relative positions.
        </p>

        <MustKnow>
          In tick‑mark problems without consecutive labels, let k denote the
          constant step between adjacent ticks, then express every shown value
          by counting how many steps it is from a convenient reference (often a
          labeled point or 0). Finally, solve the resulting linear relation(s).
        </MustKnow>

        <section aria-labelledby="worked-mini-example" className="space-y-3">
          <h3
            id="worked-mini-example"
            className="text-xl font-semibold text-white"
          >
            Quick warm‑up: solve for the step size
          </h3>
          <p>
            Suppose the marks are equally spaced. A tick labeled 4 lies five
            steps to the left of a tick labeled 7. If k is the common step, then
            moving five steps from 4 to the right lands at 7:
          </p>
          <Eq tex="4 + 5k = 7" block sr="4 plus five k equals 7" />
          <Eq tex="5k = 3 \quad \Rightarrow \quad k = \tfrac{3}{5} = 0.6" block />
          <p>
            If the next tick to the right of 4 is labeled b, then b is one step
            beyond 4:
          </p>
          <Eq tex="b = 4 + k = 4.6" block />
        </section>

        <section aria-labelledby="labeling-directions" className="space-y-3">
          <h3
            id="labeling-directions"
            className="text-xl font-semibold text-white"
          >
            Labeling from either direction
          </h3>
          <p>
            You don’t have to walk left‑to‑right. If a point w is four steps to
            the left of a point labeled 100, then:
          </p>
          <Eq tex="w = 100 - 4k" block />
          <p>
            Whether you add k moving right or subtract k moving left, the logic
            is identical—just count steps and multiply by k.
          </p>
        </section>

        <MustKnow>
          Two equivalent ways to mark the line:
          <ul className="mt-2 list-disc pl-6">
            <li>Left → right: add k for each step.</li>
            <li>Right → left: subtract k for each step.</li>
          </ul>
          Also, any distance on the line equals “number of steps × k.” For
          points v and u with n steps between them:
          <div className="mt-2">
            <Eq tex="v - u = n\,k" block />
          </div>
        </MustKnow>

        <MCQExample
          number={49}
          prompt={
            <>
              On an equally spaced number line:
              <ul className="mt-2 list-disc pl-6">
                <li>u is two tick marks to the right of 0</li>
                <li>v is six tick marks to the right of u</li>
              </ul>
              If v − u = 7.2, what is u?
            </>
          }
          options={["0.9", "1.2", "1.8", "2.4", "3.6"]}
          correct="2.4"
          solution={
            <>
              <p>
                Let k be the common step. Since v is 6 steps to the right of u:
              </p>
              <Eq tex="v - u = 6k" block />
              <p>Given v − u = 7.2, we get:</p>
              <Eq tex="6k = 7.2 \;\Rightarrow\; k = 1.2" block />
              <p>Because u is two steps to the right of 0:</p>
              <Eq tex="u = 2k = 2(1.2) = 2.4" block />
              <p>Answer: 2.4.</p>
            </>
          }
        />

        <MCQExample
          number={50}
          prompt={
            <>
              On an equally spaced number line, q, r, s, and t are one, two, and
              three steps to the right of q, respectively. Point p is one step
              to the left of q. If q = 12, what is 2p + s?
            </>
          }
          options={["12", "15", "18", "30", "36"]}
          correct="36"
          solution={
            <>
              <p>Let k be the step between adjacent ticks. Then:</p>
              <Eq tex="p = q - k = 12 - k" />
              <br />
              <Eq tex="s = q + 2k = 12 + 2k" />
              <p>Compute 2p + s:</p>
              <Eq
                tex="2p + s = 2(12 - k) + (12 + 2k) = 24 - 2k + 12 + 2k = 36"
                block
              />
              <p>The k terms cancel, so 2p + s = 36. Answer: 36.</p>
            </>
          }
        />

        <section aria-labelledby="takeaway" className="space-y-3">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Treat the common step as a variable, count how many steps separate
            labeled points, and translate that count into an equation in k. Once
            k is known—or cancels—you can read off any requested value in a few
            lines of algebra.
          </p>
        </section>
      </article>
    </main>
  );
}