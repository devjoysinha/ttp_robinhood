```tsx
// app/(math)/statistics/14/6/4/page.tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Optional: ensure KaTeX CSS is globally imported in your root layout:
// import "katex/dist/katex.min.css";
import { renderToString } from "katex";

function K({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="mx-0.5 inline align-middle"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "14.6.4 Median with Unknown Values | Statistics",
  description:
    "See when a median is locked in even with unknown entries—and when it isn’t. Includes a quick multiple‑choice and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6.4 Pinning Down the Median with Unknown Terms
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To find a median, you only care about the middle item of an ordered list with an odd count
          or the two middle items when the count is even. Because the median depends purely on
          position, it can sometimes be determined even if some values are unknown—so long as those
          unknowns can’t shift which item(s) sit in the middle.
        </p>

        <MustKnow>
          The median is governed solely by the center of the ordered list. If unknown values can move
          around without dislodging the item(s) at the middle position, the median is fixed. If they
          can push different values into the middle, the median can’t be determined.
        </MustKnow>

        <MCQExample
          number={43}
          prompt="If S = {x, 4, 3, 12, 11, 10, 10}, what is the median of set S?"
          options={["3", "5", "10", "11", "12"]}
          correct="10"
          solution={
            <>
              <p>
                Sort what you know: 3, 4, 10, 10, 11, 12. Including x gives 7 total items, so the
                median is the 4th item after sorting.
              </p>
              <p>
                No matter where x lands, the two 10s straddle the center, keeping the 4th spot at 10.
                Therefore, the median is 10.
              </p>
            </>
          }
        />

        <p>
          Don’t assume unknowns never matter. Always test whether the variables can crowd the center
          from either side and change what ends up in the middle.
        </p>

        <ExampleCard
          number={44}
          title="Median of S with two unknown integers"
          statements={[
            "S = {3, 5, 8, 20, 20, 20, 15, A, B}, where A and B are integers. What is the median?",
            "1) A &lt; 11 and B &lt; 11",
            "2) B &gt; 8",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>There are 9 values in total; the median is the 5th value once sorted.</p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <K expr="A<11" /> and <K expr="B<11" />. Try A = 2, B = 0 → the ordered list has
                median 8. Try A = 9, B = 9 → the ordered list has median 9. Different medians ⇒ not
                sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> <K expr="B>8" />, A unrestricted. Try A = 6, B = 10
                → median 10. Try A = 50, B = 10 → median 15. Different medians ⇒ not sufficient.
              </p>
              <p>
                <strong>Together:</strong> <K expr="A<11" /> and <K expr="8<B<11" /> so B ∈ {9, 10}.
                With A = 2, B = 9 → median 9. With A = 2, B = 10 → median 10. Still not unique.
              </p>
              <p>Even combined, the data don’t lock down a single median. Answer: E.</p>
            </>
          }
        />

        <ExampleCard
          number={45}
          title="Median of S with two unknowns"
          statements={[
            "S = {2, 4, 6, 10, 10, 10, 11, A, B}. What is the median?",
            "1) A &gt; 11",
            "2) B = 6",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>With 9 total values, the median is the 5th term after sorting.</p>
              <p>
                <strong>Statement (1):</strong> <K expr="A>11" />. The three 10s form a block in the
                middle, so regardless of where B falls, the 5th item stays 10. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> B = 6. Now A can tug the middle left or right: if A =
                6, the center can slide to 6; if A = 11, the middle stays at 10. Not sufficient.
              </p>
              <p>Thus, (1) alone is sufficient while (2) alone isn’t. Answer: A.</p>
            </>
          }
        />

        <p>
          Big picture: the median is positional, not computational. If unknowns can’t budge the
          middle, the median is set. If they can, the median is not uniquely determined.
        </p>
      </article>
    </main>
  );
}
```