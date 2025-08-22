import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.2.3 Handshake Questions | Combinations & Permutations",
  description:
    "Learn to recognize and solve handshake-style counting problems using combinations and the handshake formula nk/2. Includes worked examples and multiple‑choice practice.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.3 Handshake Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Handshake” problems ask you to count all the one‑to‑one connections
          between members of a group (or between their stand‑ins: teams,
          cities, vertices, etc.). Every connection involves exactly two
          entities—just like a handshake.
        </p>

        <MustKnow>
          A handshake problem counts distinct 2‑way connections within a group,
          possibly under restrictions (for example, “everyone meets everyone”
          or “each person meets only k others”).
        </MustKnow>

        <section aria-labelledby="examples-intro" className="space-y-4">
          <h3 id="examples-intro" className="text-xl font-semibold text-white">
            Two standard ways to count
          </h3>

          <p>
            When everyone connects with everyone else, there are two reliable
            approaches.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 font-semibold text-gray-100">
              Method 1: Count 2‑person groups with combinations
            </h4>
            <p>
              Since each connection is a pair, the total number of connections
              among n entities is <InlineMath math="\binom{n}{2}" />.
              For instance, with 20 people:
            </p>
            <BlockMath math={String.raw`\binom{20}{2}=\frac{20\cdot 19}{2\cdot 1}=190`} />
            <p>So there would be 190 handshakes.</p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 font-semibold text-gray-100">
              Method 2: The handshake formula
            </h4>
            <p>
              If each entity makes exactly k connections, then across n entities
              you first count all “handshakes from each person’s perspective,”
              which is <InlineMath math="n\cdot k" />. Because every connection
              is counted twice (once from each endpoint), divide by 2:
            </p>
            <BlockMath math={String.raw`\text{Total connections}=\frac{n\cdot k}{2}`} />
            <p>
              This works for the “everyone meets everyone” case (where{" "}
              <InlineMath math="k=n-1" />) and also for restricted cases where
              each entity connects to only some others.
            </p>
          </div>
        </section>

        <MustKnow>
          Handshake formula: if there are n entities and each connects to k
          others, the total number of distinct connections is{" "}
          <InlineMath math="\dfrac{n\cdot k}{2}" />. When “everyone meets
          everyone,” you can also use <InlineMath math="\binom{n}{2}" />.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Cityville’s baseball league has 12 teams. If each team plays each of the other teams exactly once, how many games are played in total?"
          options={["66", "96", "121", "132", "144"]}
          correct="66"
          solution={
            <>
              <p>
                Each game is a two‑team matchup, so this is{" "}
                <InlineMath math="\binom{12}{2}" /> or use the handshake
                formula with <InlineMath math="n=12" /> and{" "}
                <InlineMath math="k=11" />:
              </p>
              <BlockMath math={String.raw`\frac{12\cdot 11}{2}=66`} />
              <p>Therefore, 66 games are played.</p>
            </>
          }
        />

        <section aria-labelledby="partial-connections" className="space-y-4">
          <h3 id="partial-connections" className="text-xl font-semibold text-white">
            When each entity connects to only some others
          </h3>
          <p>
            If connections are limited (for example, “each person greets exactly
            3 people”), combinations <InlineMath math="\binom{n}{2}" /> no
            longer apply directly. Use the handshake formula.
          </p>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <h4 className="mb-2 font-semibold text-gray-100">Mini‑example</h4>
            <p>
              In a room of 20 people, each person shakes hands with exactly 3
              others. The total number of handshakes is:
            </p>
            <BlockMath math={String.raw`\frac{n\cdot k}{2}=\frac{20\cdot 3}{2}=30`} />
          </div>
        </section>

        <MustKnow>
          If not everyone connects with everyone, do not use{" "}
          <InlineMath math="\binom{n}{2}" />. Instead, use{" "}
          <InlineMath math="\dfrac{n\cdot k}{2}" />, where k is the exact number
          of connections per entity.
        </MustKnow>

        <MCQExample
          number={2}
          prompt="A state mileage chart lists the shortest driving distance between any two of its 25 cities. How many entries does the chart contain?"
          options={["150", "300", "450", "600", "625"]}
          correct="300"
          solution={
            <>
              <p>
                Each entry corresponds to an unordered pair of cities:
                <InlineMath math="\binom{25}{2}" />.
              </p>
              <BlockMath math={String.raw`\binom{25}{2}=\frac{25\cdot 24}{2}=300`} />
              <p>So the chart has 300 distinct entries.</p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="Five volleyball teams participate in a tournament. Each team has 7 players. Every player shakes hands exactly once with every player not on their team. How many handshakes occur?"
          options={["490", "595", "630", "980", "1190"]}
          correct="490"
          solution={
            <>
              <p>
                Total players: <InlineMath math="5\cdot 7=35" /> so{" "}
                <InlineMath math="n=35" />. Each player meets all players on the
                other 4 teams: <InlineMath math="k=4\cdot 7=28" />.
              </p>
              <BlockMath math={String.raw`\frac{n\cdot k}{2}=\frac{35\cdot 28}{2}=490`} />
            </>
          }
        />

        <MCQExample
          number={4}
          prompt="A diagonal of a polygon connects two non‑adjacent vertices. How many diagonals can be drawn in a regular octagon?"
          options={["16", "20", "24", "28", "30"]}
          correct="20"
          solution={
            <>
              <p>
                Each of the <InlineMath math="n=8" /> vertices connects via a
                diagonal to all but itself and its two neighbors, so{" "}
                <InlineMath math="k=n-3=5" />. Using the handshake idea for
                diagonals:
              </p>
              <BlockMath math={String.raw`\text{Diagonals}=\frac{n(n-3)}{2}=\frac{8\cdot 5}{2}=20`} />
            </>
          }
        />

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Handshake questions are pairing problems. If everyone connects with
            everyone, use <InlineMath math="\binom{n}{2}" />. If each entity
            connects to exactly k others, use{" "}
            <InlineMath math="\dfrac{n\cdot k}{2}" />. Always watch for
            double‑counting—then divide by 2.
          </p>
        </section>
      </article>
    </main>
  );
}