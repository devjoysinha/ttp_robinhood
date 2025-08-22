import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

function MathInline({ expression, ariaLabel }: { expression: string; ariaLabel?: string }) {
  const html = katex.renderToString(expression, { throwOnError: false, displayMode: false });
  return (
    <span className="inline-block align-baseline">
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      <span className="sr-only">{ariaLabel ?? expression}</span>
    </span>
  );
}

export const metadata: Metadata = {
  title: "14.6.4 Median with Unknown Values | Statistics",
  description:
    "Learn when the median can be pinned down even with unknown terms in the set—and when it can't. Includes one quick multiple‑choice example and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6.4 Finding the Median When Some Values Are Unknown
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To locate a median, you only need the center of the sorted list: the single middle
          term for an odd count, or the two middle terms for an even count. Because of that,
          you can sometimes determine the median even if some entries are unspecified. The
          deciding factor is whether the middle position(s) stay put no matter where those
          unknowns land after sorting.
        </p>

        <MustKnow>
          The median is determined purely by position in the ordered list. If the unknown
          entries cannot push the middle position(s) to a different value, the median is
          fixed without knowing the exact unknowns. If the middle could shift, the median
          cannot be pinned down.
        </MustKnow>

        <MCQExample
          number={43}
          prompt="If S = {x, 4, 3, 12, 11, 10, 10}, what is the median of set S?"
          options={["3", "5", "10", "11", "12"]}
          correct="10"
          solution={
            <>
              <p>
                First sort what we know: 3, 4, 10, 10, 11, 12. Including x, there are 7 total values,
                so the median is the 4th term after sorting.
              </p>
              <p>
                No matter where x falls (below 3, between 3 and 4, between the 10s, or above 12),
                the center of the list remains at one of the two adjacent 10s. Thus, the 4th term
                is 10, and the median is 10.
              </p>
            </>
          }
        />

        <p>
          Don’t generalize too far: unknowns do not always leave the middle intact. When in doubt,
          consider how the variables could slide relative to the center and whether that movement
          could change the value at the middle position(s).
        </p>

        <ExampleCard
          number={44}
          title="Median of S with two unknown integers"
          statements={[
            "S = {3, 5, 8, 20, 20, 20, 15, A, B}, where A and B are integers. What is the median?",
            "1) A < 11 and B < 11",
            "2) B > 8",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>We need the middle value of a 9‑term ordered list. Test each statement for sufficiency.</p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <MathInline expression={"A<11"} ariaLabel="A less than 11" /> and{" "}
                <MathInline expression={"B<11"} ariaLabel="B less than 11" />. Try A = 2, B = 0 → after sorting,
                the median is 8. Try A = 9, B = 9 → after sorting, the median is 9. Different results mean
                statement (1) is not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <MathInline expression={"B>8"} ariaLabel="B greater than 8" /> (A unrestricted). Try A = 6, B = 10 → median 10.
                Try A = 50, B = 10 → median 15. Again, different medians, so statement (2) is not sufficient.
              </p>
              <p>
                <strong>Together:</strong> From both,{" "}
                <MathInline expression={"A<11"} ariaLabel="A less than 11" /> and{" "}
                <MathInline expression={"8<B<11"} ariaLabel="B strictly between 8 and 11" />, so B must be 9 or 10 (integers).
                With A = 2 and B = 9 → median 9. With A = 2 and B = 10 → median 10. Still not unique, so the
                two statements together are not sufficient.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <ExampleCard
          number={45}
          title="Median of S with two unknowns"
          statements={[
            "S = {2, 4, 6, 10, 10, 10, 11, A, B}. What is the median?",
            "1) A > 11",
            "2) B = 6",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>There are 9 values total, so the median is the 5th term when sorted.</p>
              <p>
                <strong>Statement (1):</strong>{" "}
                <MathInline expression={"A>11"} ariaLabel="A greater than 11" />. The three 10s occupy the middle of the list
                regardless of where B ends up, so the 5th term is always 10. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong>{" "}
                <MathInline expression={"B=6"} ariaLabel="B equals 6" />. Now A can move the middle: if A = 6, the center can
                drop to 6; if A = 11, the center stays at 10. Not sufficient.
              </p>
              <p>Thus, (1) alone works; (2) alone does not. Answer: A.</p>
            </>
          }
        />

        <p>
          Big picture: the median is positional, not computational. If unknowns cannot dislodge the middle,
          the median is locked. If they can, you can’t name a single value.
        </p>
      </article>
    </main>
  );
}