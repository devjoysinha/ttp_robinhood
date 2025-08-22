import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.14 |a − b| vs |a| − |b| | Inequalities & Absolute Value",
  description:
    "Understand the reverse triangle inequality |a − b| ≥ |a| − |b| and precisely when equality holds. Includes two MCQ drills with full, step‑by‑step reasoning.",
};

function K({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      role="math"
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Inequalities and Absolute Values
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.14 When |a − b| compares to |a| − |b|
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A foundational fact about absolute value is the reverse triangle
          inequality:
          <span className="ms-2">
            <K expr="\,\lvert a-b\rvert \;\ge\; \lvert a\rvert \;-\; \lvert b\rvert" />
          </span>
          .
          It always holds for real numbers a and b. In many situations, the
          inequality is strict; in some, we get equality. Knowing exactly when
          each occurs is extremely useful on test day.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="m-0">
              Reverse triangle inequality:
              <span className="ms-2">
                <K expr="\lvert a-b\rvert \;\ge\; \lvert a\rvert - \lvert b\rvert" />
              </span>
            </p>
            <p className="m-0">
              Equality
              <span className="ms-2">
                <K expr="\lvert a-b\rvert \;=\; \lvert a\rvert - \lvert b\rvert" />
              </span>
              happens if and only if either
            </p>
            <ul className="list-disc ps-5">
              <li>
                <K expr="b=0" />; or
              </li>
              <li>
                a and b share the same sign and
                <span className="ms-2">
                  <K expr="\lvert a\rvert \;\ge\; \lvert b\rvert" />
                </span>
                .
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-label="Quick numeric checks" className="space-y-3">
          <p className="m-0">
            Quick checks with numbers illustrate when we get equality vs. a
            strict inequality:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-semibold text-gray-200">a = 5, b = 4</p>
              <K
                display
                expr="\lvert 5-4\rvert \;=\; 1 \;=\; \lvert 5\rvert - \lvert 4\rvert"
              />
              <p className="text-sm text-gray-400">Equality (same sign, |a| ≥ |b|).</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-semibold text-gray-2 00">a = 5, b = -4</p>
              <K display expr="\lvert 5-(-4)\rvert \;=\; 9 \;>\; 5-4 \;=\; 1" />
              <p className="text-sm text-gray-400">Strict inequality (opposite signs).</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-semibold text-gray-200">a = -5, b = 4</p>
              <K display expr="\lvert -5-4\rvert \;=\; 9 \;>\; 5-4 \;=\; 1" />
              <p className="text-sm text-gray-400">Strict inequality (opposite signs).</p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4">
              <p className="font-semibold text-gray-200">a = -5, b = -4</p>
              <K
                display
                expr="\lvert -5-(-4)\rvert \;=\; 1 \;=\; \lvert -5\rvert - \lvert -4\rvert"
              />
              <p className="text-sm text-gray-400">Equality (same sign, |a| ≥ |b|).</p>
            </div>
          </div>
        </section>

        <MCQExample
          number={42}
          prompt={
            <>
              If <K expr="\lvert p-q\rvert \;\ge\; \lvert p\rvert - \lvert q\rvert" />{" "}
              holds, which of the following could be true?
              <br />
              I. <K expr="p &lt; q" ariaLabel="p less than q" />
              <br />
              II. <K expr="pq &lt; 0" ariaLabel="p q less than 0" />
              <br />
              III. <span>p + q &gt; 0</span>
            </>
          }
          options={["I only", "II only", "I and II", "II and III", "I, II, and III"]}
          correct="I, II, and III"
          solution={
            <>
              <p>
                The inequality is universally true for real numbers, so we just
                need to show each statement can happen under it.
              </p>
              <p>
                I. Let <K expr="p=-1" /> and <K expr="q=1" />. Then
                <span className="ms-2">
                  <K expr="\lvert p-q\rvert=\lvert-2\rvert=2" />
                </span>{" "}
                and{" "}
                <span className="ms-1">
                  <K expr="\lvert p\rvert-\lvert q\rvert=1-1=0" />
                </span>
                , so the inequality holds and <K expr="p&lt;q" />. Possible.
              </p>
              <p>
                II. Using the same pair <K expr="(-1,1)" />, we have{" "}
                <K expr="pq=-1&lt;0" />. Possible.
              </p>
              <p>
                III. Let <K expr="p=1" /> and <K expr="q=3" />. Then{" "}
                <K expr="\lvert p-q\rvert=\lvert -2\rvert=2" /> and{" "}
                <K expr="\lvert p\rvert-\lvert q\rvert=1-3=-2" />, so the
                inequality holds and <K expr="p+q=4&gt;0" />. Possible.
              </p>
              <p>All three can occur. Answer: E.</p>
            </>
          }
        />

        <section aria-label="Equality cases">
          <h3 className="mb-2 text-lg font-semibold text-gray-200">
            When does |a − b| equal |a| − |b|?
          </h3>
          <p>
            Equality
            <span className="ms-2">
              <K expr="\lvert a-b\rvert = \lvert a\rvert - \lvert b\rvert" />
            </span>{" "}
            occurs exactly in these scenarios:
          </p>
          <ul className="list-disc ps-5">
            <li>
              <K expr="b=0" />, since then{" "}
              <K expr="\lvert a-b\rvert=\lvert a\rvert" /> and{" "}
              <K expr="\lvert a\rvert-\lvert b\rvert=\lvert a\rvert" />.
            </li>
            <li>
              a and b are on the same side of 0 and{" "}
              <K expr="\lvert a\rvert \ge \lvert b\rvert" />. In that case,
              removing{" "}
              <span className="whitespace-nowrap">
                <K expr="\lvert b\rvert" />
              </span>{" "}
              from{" "}
              <span className="whitespace-nowrap">
                <K expr="\lvert a\rvert" />
              </span>{" "}
              matches the gap between a and b on the number line.
            </li>
          </ul>
        </section>

        <MustKnow>
          If <K expr="b\neq 0" /> and{" "}
          <K expr="\lvert a-b\rvert = \lvert a\rvert - \lvert b\rvert" />, then a
          and b must have the same sign and{" "}
          <K expr="\lvert a\rvert \ge \lvert b\rvert" />.
        </MustKnow>

        <MCQExample
          number={43}
          prompt={
            <>
              If <K expr="\lvert p\rvert - \lvert q\rvert \;=\; \lvert p-q\rvert" />{" "}
              and <K expr="\lvert p\rvert &lt; 5" />, which of the following could be
              a value of q?
              <br />
              I. −4
              <br />
              II. 0
              <br />
              III. 5
            </>
          }
          options={["I only", "II only", "I and II", "II and III", "I, II, and III"]}
          correct="I and II"
          solution={
            <>
              <p>
                For <K expr="\lvert p\rvert - \lvert q\rvert = \lvert p-q\rvert" />{" "}
                with <K expr="q\neq 0" />, equality forces p and q to share a sign
                and <K expr="\lvert p\rvert \ge \lvert q\rvert" />.
              </p>
              <p>
                I. <K expr="q=-4" /> works by choosing <K expr="p=-4" />. Then both
                sides are 0, and <K expr="\lvert p\rvert=4&lt;5" />. Valid.
              </p>
              <p>
                II. <K expr="q=0" /> always gives{" "}
                <K expr="\lvert p\rvert-\lvert 0\rvert=\lvert p\rvert=\lvert p-0\rvert" />
                , so any <K expr="\lvert p\rvert&lt;5" /> works. Valid.
              </p>
              <p>
                III. <K expr="q=5" /> would require{" "}
                <K expr="\lvert p\rvert \ge 5" /> if <K expr="q\neq 0" /> (same sign
                and at least as large in magnitude), which contradicts{" "}
                <K expr="\lvert p\rvert&lt;5" />. Not possible.
              </p>
              <p>Therefore, I and II only. Answer: C.</p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: the inequality is guaranteed, but the equality is delicate—it
          hinges on sign alignment and relative magnitudes (or a zero term).
        </p>
      </article>
    </main>
  );
}