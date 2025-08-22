import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "3.6 Tracking Synonyms When Finding Details | Reading Comprehension",
  description:
    "Learn how to spot synonym shifts between a GMAT RC passage and its questions. Includes one practice example with full reasoning and tips for staying anchored to the text.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.6 Tracking Synonymic Shifts When Locating Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On GMAT Reading Comprehension, the wording in a question or choice often
          doesn’t exactly match the wording in the passage. Instead, the test
          swaps in synonyms, near‑synonyms, or paraphrases. Skilled test‑takers
          translate those shifts and still anchor every decision to the text.
        </p>

        <MustKnow>
          The question may say one thing in different words than the passage.
          Your job is to map ideas, not memorize phrasing. Confirm that a choice
          is supported by the passage’s meaning, even when the exact words differ.
        </MustKnow>

        <section aria-labelledby="tips-heading" className="space-y-3">
          <h3 id="tips-heading" className="text-xl font-semibold text-white">
            Practical tips
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Build quick “translation” bridges: focusing ≈ concentrating; explain ≈ account for;
              cause ≈ can be attributed to.
            </li>
            <li>
              Watch for look‑around cues (for example, “such,” “therefore,” “this result”)
              that point you to supporting lines nearby.
            </li>
            <li>
              Keep cause‑and‑effect relationships straight: different verbs can encode the
              same causal link.
            </li>
          </ul>
        </section>

        <section aria-labelledby="katex-note" className="rounded-lg bg-zinc-900/40 p-4">
          <h3 id="katex-note" className="mb-2 text-base font-semibold text-gray-200">
            A quick math lens on “profit potential”
          </h3>
          <p className="text-gray-300">
            When a passage hints that profits are large because the price is high, that’s a
            paraphrase of a simple idea like{" "}
            <InlineMath math="\text{profit per unit} = P - C" />. If the street price is
            approximately{" "}
            <InlineMath math="P \approx 1.5\times 10^{5}\ \text{USD/kg}" /> and costs don’t erase
            that, the margin can remain attractive.
          </p>
        </section>

        <MCQExample
          number={31}
          prompt={
            [
              "Passage:",
              "",
              "Many policymakers share the belief that prohibition is a reliable way to curb the production, distribution, and use of illegal drugs. They contend that as long as enforcement reduces supply—through detection, interdiction, and arrests—availability will fall. Yet, basic market forces make prohibition a poor instrument for disrupting the flow of such goods.",
              "",
              "Consider cocaine. In parts of Colombia, coca cultivation spans hundreds of thousands of acres in remote regions. Even after extensive eradication efforts, enough raw material is processed to produce thousands of tons of cocaine. Because cartels function as the only wholesale buyers, they effectively set what they pay for refined product. On the retail side, the street price has hovered around $150,000 per kilogram for roughly forty years, a level that supports very large profits. With that kind of upside, even severe prison terms fail to deter all sellers—people will continue to accept the risk for the potential gain.",
              "",
              "Question:",
              "According to the passage, which statement about the sizable profit opportunity in the cocaine trade is accurate?"
            ].join("\n")
          }
          options={[
            "Its size has swung dramatically from one decade to the next.",
            "It stems from the high going price on the street.",
            "It isn’t large enough to entice people to participate.",
            "Tough prison sentences generally reduce it.",
            "Coca growers in South America largely determine it.",
          ]}
          correct="It stems from the high going price on the street."
          solution={
            <>
              <p>
                Focus on the lines discussing “profit potential.” The passage says the street
                price has stayed around $150,000/kg for decades and that this price level
                “supports very large profits.” That directly links high price to big profits,
                matching choice B.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Choice A conflicts with “hovered around” (stable price), not wild swings.
                </li>
                <li>
                  Choice C is the opposite of the text, which says people are still willing to
                  accept risks because the profits are so large.
                </li>
                <li>
                  Choice D isn’t supported—the passage notes even harsh sentences don’t keep
                  dealers away; it doesn’t say penalties reduce the profit opportunity.
                </li>
                <li>
                  Choice E doesn’t fit because the cartels (as sole wholesalers) control the
                  purchase price, limiting farmers’ influence over profit potential.
                </li>
              </ul>
              <p className="mt-2">
                In short, the passage attributes the profit potential to the persistently high
                street price. That’s a paraphrase of the idea{" "}
                <InlineMath math="\text{profit} = P - C" /> with a large{" "}
                <InlineMath math="P" />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when wording shifts, translate meaning, not just vocabulary.
          If a choice restates the passage’s idea in different words and the logic still holds,
          it can be correct—even if no single sentence is a word‑for‑word match.
        </p>
      </article>
    </main>
  );
}