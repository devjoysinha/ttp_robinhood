import "katex/dist/katex.min.css";
import katex from "katex";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function Math({ expr }: { expr: string }) {
  return (
    <span
      className="katex"
      aria-label={expr}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, { throwOnError: false }),
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "16.3.13 Items That Can’t Be Adjacent | Permutations",
  description:
    "Learn to count arrangements when certain items can’t sit next to each other by using the complement approach and the block method. Includes two worked multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.13 When Certain Items Cannot Be Next to Each Other
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the previous lesson, we handled arrangements where some items must
          stay together by bundling them as a single “block.” We can flip that
          idea to tackle the opposite restriction: when particular items must
          not be adjacent. The fastest path is usually to count all possible
          arrangements and subtract the cases that violate the rule.
        </p>

        <MustKnow>
          <>
            <p className="mb-3">
              Block method for “must be together”:
              {" "}
              if T distinct items are arranged in a line and exactly g of them
              are required to be consecutive, treat those g items as one block.
              The count is
              {" "}
              <Math expr="(T - g + 1)! \times g!" />.
            </p>
            <p>
              “Can’t be together” via complement:
              {" "}
              count valid arrangements as
              {" "}
              <Math expr="\text{valid} = T! - \text{(arrangements with the restricted items together)}" />
              . This works because “together” and “not together” are mutually
              exclusive and collectively exhaustive outcomes.
            </p>
          </>
        </MustKnow>

        <p>
          This complement strategy is powerful: partition the outcomes into
          “together” vs. “not together,” compute both totals easily, and
          subtract.
        </p>

        <MCQExample
          number={44}
          prompt="A radio station must schedule 6 songs in a row. Two of the songs are heavy‑metal, and the station refuses to play them back‑to‑back. In how many orders can the 6 songs be arranged while respecting the policy?"
          options={["120", "240", "360", "480", "600"]}
          correct="480"
          solution={
            <>
              <p>
                Start with all possible orders:
                {" "}
                <Math expr="6! = 720" />.
              </p>
              <p>
                Count the “bad” cases where the two metal tracks are adjacent by
                linking them as a block. Then we arrange the block plus the
                other 4 songs:
                {" "}
                <Math expr="(6 - 2 + 1)! \times 2! = 5! \times 2 = 240" />.
              </p>
              <p>
                Subtract the bad cases:
                {" "}
                <Math expr="720 - 240 = 480" />.
                {" "}
                Therefore, 480 valid schedules.
              </p>
            </>
          }
        />

        <p>
          The same approach scales to three or more items: count “all together”
          as one block of size g, then subtract from the total if that block is
          disallowed.
        </p>

        <MCQExample
          number={45}
          prompt="At an air show, five different planes (A1, B2, C3, D4, E5) are lined up. In how many orders can they be arranged if A1, C3, and E5 are not allowed to appear as a consecutive block of three?"
          options={["48", "72", "84", "100", "120"]}
          correct="84"
          solution={
            <>
              <p>
                Total linear orders:
                {" "}
                <Math expr="5! = 120" />.
              </p>
              <p>
                Count the arrangements where A1, C3, and E5 are all consecutive.
                Treat them as a single block. We then arrange the block with the
                two remaining planes:
                {" "}
                <Math expr="(5 - 3 + 1)! \times 3! = 3! \times 3! = 36" />.
              </p>
              <p>
                Exclude those:
                {" "}
                <Math expr="120 - 36 = 84" />.
                {" "}
                Thus, there are 84 allowed lineups.
              </p>
            </>
          }
        />

        <MustKnow>
          Think “position, not brute force.” When adjacency is forbidden,
          compute all arrangements <Math expr="(T!)" />, then subtract the
          arrangements in which the restricted items sit together using the
          block count <Math expr="(T - g + 1)! \times g!" />.