import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "13.3.1 Three‑Circle Venn Diagrams (Distinct Regions Known) | Overlapping Sets",
  description:
    "Learn the go-to formula for three‑set Venn diagrams when region counts are known. Work a guided mini‑example and a quick multiple‑choice problem with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.3.1 Three‑Circle Venn Diagrams when the Distinct Regions Are Known
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem gives counts for the distinct regions of a three‑set Venn diagram
          (the “only” regions, the pairwise overlaps that exclude the third set, the triple
          overlap, and possibly the “neither” group), the total number of unique elements is just
          the sum of those pieces. In practice, you’ll often sketch the diagram, fill in what you
          know from the middle outward, and then use the total to solve for whatever is missing.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-gray-100">Master formula (three sets A, B, C):</p>
            <BlockMath math="\text{Total} \;=\; |A_{\text{only}}| + |B_{\text{only}}| + |C_{\text{only}}| \;+\; |(A\cap B)_{\text{only}}| + |(A\cap C)_{\text{only}}| + |(B\cap C)_{\text{only}}| \;+\; |A\cap B\cap C| \;+\; |\text{Neither}|"/>
            <p className="text-sm text-gray-300">
              Read “only” as “excluding the third set.” Work from the center (the triple overlap)
              to the pairwise overlaps, then to the single‑set regions, and finally to the neither
              region if needed.
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Exactly one group
          </h3>
          <p>
            In a group of 80 people, 11 speak all three languages Spanish (S), French (F), and
            German (G). Five speak none of the three. If 14 speak French and Spanish, 16 speak
            German and Spanish, and 13 speak French and German, how many speak exactly one of the three?
          </p>

          <div className="space-y-2">
            <p className="font-medium text-gray-200">Step 1: Fill the triple overlap.</p>
            <p>Place 11 in S ∩ F ∩ G.</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-200">Step 2: Compute the pairwise “only” regions.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                French and Spanish only: <InlineMath math="14 - 11 = 3" />
              </li>
              <li>
                German and Spanish only: <InlineMath math="16 - 11 = 5" />
              </li>
              <li>
                French and German only: <InlineMath math="13 - 11 = 2" />
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-200">Step 3: Use the total to find the single‑only sum.</p>
            <BlockMath math="80 \;=\; (\text{S only}+\text{F only}+\text{G only}) \;+\; (3+5+2) \;+\; 11 \;+\; 5"/>
            <BlockMath math="80 \;=\; (\text{S only}+\text{F only}+\text{G only}) \;+\; 26"/>
            <BlockMath math="\text{S only}+\text{F only}+\text{G only} \;=\; 54"/>
          </div>

          <p className="font-semibold text-gray-100">
            So, 54 people speak exactly one of the three languages.
          </p>
        </section>

        <MCQExample
          number={19}
          prompt="Out of 72 rock stars, 20 play guitar (G), 22 play drums (D), and 30 sing (S). If 5 both play guitar and sing, 4 both play drums and guitar, 3 both play drums and sing, and 2 do all three, how many do none of the three?"
          options={["10", "12", "14", "16", "18"]}
          correct="10"
          solution={
            <>
              <p className="mb-2">
                Work from the center out. Place 2 in G ∩ D ∩ S. Then get the pairwise “only” counts
                by subtracting the triple overlap:
              </p>
              <ul className="mb-2 list-disc pl-6">
                <li>
                  <span className="font-medium">Drums &amp; Guitar only:</span>{" "}
                  <InlineMath math="4 - 2 = 2" />
                </li>
                <li>
                  <span className="font-medium">Guitar &amp; Sing only:</span>{" "}
                  <InlineMath math="5 - 2 = 3" />
                </li>
                <li>
                  <span className="font-medium">Drums &amp; Sing only:</span>{" "}
                  <InlineMath math="3 - 2 = 1" />
                </li>
              </ul>

              <p className="mb-2">Now compute each single‑only region using its set total:</p>
              <ul className="mb-2 list-disc pl-6">
                <li>
                  <InlineMath math="G_{\text{only}} = 20 - (2 + 3 + 2) = 13" />
                </li>
                <li>
                  <InlineMath math="D_{\text{only}} = 22 - (2 + 1 + 2) = 17" />
                </li>
                <li>
                  <InlineMath math="S_{\text{only}} = 30 - (3 + 1 + 2) = 24" />
                </li>
              </ul>

              <p className="mb-2">Apply the master formula to get “neither”:</p>
              <BlockMath math="72 \;=\; (13+17+24) \;+\; (2+3+1) \;+\; 2 \;+\; |\text{Neither}|"/>
              <BlockMath math="72 \;=\; 62 \;+\; |\text{Neither}| \;\;\Rightarrow\;\; |\text{Neither}| = 10"/>

              <p className="font-semibold">Answer: 10.</p>
            </>
          }
        />

        <ExampleCard
          number={20}
          title="Checklist: Filling a three‑set Venn diagram efficiently"
          statements={[
            "Start at the center: put the triple overlap first.",
            "Back out pairwise “only” regions by subtracting the triple overlap from each given pair total.",
            "Use set totals to compute single‑only regions.",
            "Finish with the “neither” region using the master formula for the grand total."
          ]}
          correctLetter=""
          solution={
            <>
              <p>
                This workflow minimizes double counting and helps you solve directly for what the problem
                asks—often a sum of regions such as “exactly one” or “neither.”
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Big picture: once the distinct regions are identified, the total is a straightforward sum.
          Build the diagram from the middle out, subtract carefully to avoid over‑counting, and then
          use the grand total to nail the remaining unknowns.
        </p>
      </article>
    </main>
  );
}