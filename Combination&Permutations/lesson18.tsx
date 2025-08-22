import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.17 Choosing “At Least 1” From a Group | Combinations",
  description:
    "Master the complement strategy for “at least one” selection problems: total minus none. Includes a timed GMAT‑style example and a quick pitfall check.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: false,
  });
  return (
    <span
      aria-label={ariaLabel ?? expr}
      className="align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "htmlAndMathml",
    displayMode: true,
  });
  return (
    <div
      role="img"
      aria-label={ariaLabel ?? expr}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.17 The special case: choosing at least one item from a group
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In “at least one” selection problems, listing every allowed case (one,
          two, three, …) is slow and error‑prone. A faster, cleaner approach is
          to use the complement: count all possible selections, subtract the
          selections that violate the constraint (i.e., the ones with none of
          the required items), and what remains is the number of selections with
          at least one required item.
        </p>

        <MustKnow>
          To count teams with “at least one” from a particular group, use:
          <MathInline
            expr={`\\text{At least one} = \\text{Total} - \\text{None}`}
            ariaLabel="At least one equals total minus none"
          />
          . In combination form, choose totals with
          <MathInline expr={`\\binom{n}{k}`} ariaLabel="n choose k" /> and
          subtract the cases that include zero from the specified group.
        </MustKnow>

        <MCQExample
          number={29}
          prompt="A 4‑person international rugby team is formed from 5 players from Turkey and 6 players from Iran. If the team must include at least one Iranian player, how many distinct teams are possible?"
          options={["150", "225", "265", "325", "375"]}
          correct="325"
          solution={
            <>
              <p className="mb-2">
                Use the complement method. First, count all 4‑person teams from
                the 11 available players:
              </p>
              <MathBlock
                expr={`\\binom{11}{4} = 330`}
                ariaLabel="11 choose 4 equals 330"
              />
              <p className="mb-2">
                Next, subtract teams with no Iranians. That means all 4 players
                are chosen from the 5 Turkish players:
              </p>
              <MathBlock
                expr={`\\binom{5}{4} = 5`}
                ariaLabel="5 choose 4 equals 5"
              />
              <p className="mb-2">Therefore, the desired count is</p>
              <MathBlock
                expr={`\\binom{11}{4} - \\binom{5}{4} = 330 - 5 = 325`}
                ariaLabel="330 minus 5 equals 325"
              />
              <p className="mt-4">
                Caution: An approach like
                <MathInline
                  expr={`\\binom{6}{1}\\binom{10}{3}`}
                  ariaLabel="6 choose 1 times 10 choose 3"
                />{" "}
                overcounts because the same final team with multiple Iranians is
                counted once for each Iranian you choose as the “designated” one.
                The complement method avoids that double counting.
              </p>
            </>
          }
        />

        <section aria-labelledby="why-it-works" className="space-y-3">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why the complement works
          </h3>
          <p>
            The outcomes “no required items included” and “at least one required
            item included” are mutually exclusive and collectively exhaustive:
            every valid selection falls into exactly one of the two. Thus,
          </p>
          <MathBlock
            expr={`\\text{Total} = \\text{None} + \\text{At least one} \\;\\;\\Rightarrow\\;\\; \\text{At least one} = \\text{Total} - \\text{None}`}
            ariaLabel="Total equals none plus at least one; hence at least one equals total minus none"
          />
        </section>

        <p className="text-gray-300">
          Bottom line: when you see “at least one,” think “total minus none.”
          It’s faster, safer, and ideal for test timing.
        </p>
      </article>
    </main>
  );
}