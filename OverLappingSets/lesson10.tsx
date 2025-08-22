import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "13.3 Three Overlapping Sets | GMAT Quant",
  description:
    "A clear guide to three-set Venn diagrams: regions, ‘only’ vs. intersections, the neither region, and key formulas (exactly one, two, three, none). Includes a quick MCQ and a Data Sufficiency drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.3 Three Overlapping Sets
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, we focused on problems with two overlapping sets. Many GMAT
          questions push that a step further: three sets that can overlap in
          multiple ways. To reason cleanly about these, we use a three‑circle
          Venn diagram plus a separate “neither” region (for items in none of
          the sets).
        </p>

        <section aria-labelledby="groups-abc">
          <h3 id="groups-abc" className="text-xl font-semibold text-white">
            The three circles: Groups A, B, and C
          </h3>
          <p>
            Each circle stands for all members of one set: A, B, or C. Because
            people or items can belong to more than one set, simply adding the
            three circle totals usually overcounts the true number of distinct
            members.
          </p>

          <MustKnow>
            The total in a circle equals the size of that set. Adding the three
            circle totals double‑counts shared members, so it doesn’t give the
            overall population size.
          </MustKnow>
        </section>

        <section aria-labelledby="only-regions">
          <h3 id="only-regions" className="text-xl font-semibold text-white">
            “Only” regions: A only, B only, C only
          </h3>
          <p>
            The “only” part of a circle contains members that are in one set and
            not in the other two. These three regions together account for the
            items that belong to exactly one set.
          </p>

          <MustKnow>
            <span className="sr-only">Exactly one formula:</span>
            <InlineMath math="\,\text{Exactly one} = |A\text{ only}| + |B\text{ only}| + |C\text{ only}|\," />
          </MustKnow>
        </section>

        <section aria-labelledby="all-three">
          <h3 id="all-three" className="text-xl font-semibold text-white">
            Center overlap: (A and B and C) only
          </h3>
          <p>
            The central sliver where all three circles overlap is the set of
            members who belong to A, B, and C simultaneously.
          </p>

          <MustKnow>
            <span className="sr-only">Exactly three formula:</span>
            <InlineMath math="\,\text{Exactly three} = |A \cap B \cap C \text{ (only)}|\, " />
          </MustKnow>
        </section>

        <section aria-labelledby="neither">
          <h3 id="neither" className="text-xl font-semibold text-white">
            The “neither” region
          </h3>
          <p>
            Items in the separate “neither” region do not fall into A, B, or C
            at all.
          </p>

          <MustKnow>
            <span className="sr-only">None formula:</span>
            <InlineMath math="\,\text{None} = |\text{neither A nor B nor C}|\," />
          </MustKnow>
        </section>

        <section aria-labelledby="intersections">
          <h3 id="intersections" className="text-xl font-semibold text-white">
            Intersections vs. “only” intersections
          </h3>
          <p>
            A statement such as “A and B” includes everyone in A ∩ B, which
            itself has two parts: those in exactly A and B, and those in all
            three sets. The phrase “(A and B) only” refers to the A ∩ B portion
            that excludes C.
          </p>

          <ul className="list-inside list-disc space-y-1">
            <li>
              A and B region includes: (A and B) only and (A and B and C) only.
            </li>
            <li>
              Likewise for A and C, and for B and C: each contains its “only”
              part plus the center triple‑overlap.
            </li>
          </ul>

          <MustKnow>
            <div className="space-y-2">
              <div>
                <span className="sr-only">Exactly two formula:</span>
                <InlineMath math="\text{Exactly two} = |(A\cap B)\text{ only}| + |(A\cap C)\text{ only}| + |(B\cap C)\text{ only}|" />
              </div>
              <div>
                <span className="sr-only">
                  Converting pairwise totals to pairwise‑only:
                </span>
                <InlineMath math="|(A\cap B)\text{ only}| = |A\cap B| - |A\cap B\cap C|" />
              </div>
            </div>
          </MustKnow>
        </section>

        <section aria-labelledby="incl-excl">
          <h3 id="incl-excl" className="text-xl font-semibold text-white">
            Inclusion–exclusion refresher (three sets)
          </h3>
          <p>
            When the problem gives set sizes and pairwise/triple overlaps, the
            count in at least one set is:
          </p>
          <BlockMath math="|A\cup B\cup C| = |A|+|B|+|C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|" />
          <p>
            If a total population N is known, the “neither” count is N − |A ∪ B
            ∪ C|.
          </p>
        </section>

        <MCQExample
          number={31}
          prompt="In a group of 200 students, |A|=120, |B|=110, |C|=100, |A∩B|=70, |A∩C|=60, |B∩C|=50, and |A∩B∩C|=30. How many students are in none of the three sets?"
          options={["10", "15", "20", "25", "30"]}
          correct="20"
          solution={
            <>
              <p>Use inclusion–exclusion to find those in at least one set:</p>
              <BlockMath math="|A\cup B\cup C| = 120+110+100 - (70+60+50) + 30 = 330 - 180 + 30 = 180" />
              <p>Therefore, neither = 200 − 180 = 20.</p>
            </>
          }
        />

        <ExampleCard
          number={32}
          title="Exactly two groups from partial information (Data Sufficiency)"
          statements={[
            "What is the number of students who belong to exactly two of the sets A, B, and C?",
            "1) |A∩B|=70, |A∩C|=60, |B∩C|=50, and |A∩B∩C|=30",
            "2) |A only|=40, |B only|=30, and |C only|=20",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We need |(A∩B) only| + |(A∩C) only| + |(B∩C) only|, the “exactly
                two” total.
              </p>
              <p>
                Statement (1): Convert each pairwise total to its “only” part by
                subtracting the triple overlap:
              </p>
              <BlockMath math="|(A\cap B)\text{ only}|=70-30=40,\quad |(A\cap C)\text{ only}|=60-30=30,\quad |(B\cap C)\text{ only}|=50-30=20" />
              <p>Sum = 40 + 30 + 20 = 90. Sufficient.</p>
              <p>
                Statement (2): Knowing the three “only” singles does not fix any
                pairwise overlap, so “exactly two” cannot be determined.
                Insufficient.
              </p>
              <p>Answer: A.</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <p>
            Three‑set Venns are straightforward once you keep the regions
            straight: singles (“only”), pairwise‑only, the triple‑only center,
            and the neither region. Translate any totals into the exact regions
            you need and apply inclusion–exclusion or the pairwise‑only
            subtraction as appropriate.
          </p>
        </section>
      </article>
    </main>
  );
}