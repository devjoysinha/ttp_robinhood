import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KaTeXInline({ expr, ariaLabel = "math" }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return <span aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title:
    "12.5.7 Boldface traps: wording and placement can mislead | GMAT Verbal",
  description:
    "Learn how boldfaced statements can be phrased or positioned to mimic roles they don't actually play. Includes two role-identification MCQs with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.7 Bold text can be phrased and placed to imitate roles they don’t actually play
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test writers know our habits: we tend to treat the final sentence as “the conclusion” and
          any clause that starts with because/since as “a reason.” In Boldface questions, they exploit
          those habits by wording and positioning the boldfaced portions so they look like one role,
          even when, within the full argument, they serve another.
        </p>

        <MustKnow>
          The role of a boldfaced statement is determined by how it relates to the entire passage,
          not by where it appears or how it’s phrased. A last sentence in bold is not automatically
          the main conclusion, and a bold segment that begins with “because” is not automatically
          evidence for the author’s view.
        </MustKnow>

        <section aria-labelledby="why-tricky">
          <h3 id="why-tricky" className="text-xl font-semibold text-white">
            Why this is tricky
          </h3>
          <p>
            A common trap is to bold the final line so it looks like the author’s claim, and bold
            another sentence that seems to feed into it. If you read those two lines in isolation,
            they can appear to form a tidy mini‑argument. But once you reconnect them to the rest of
            the passage, you may find that the first bold part actually supports a view the author rejects,
            and the second supports the author’s real conclusion.
          </p>
          <p>
            Keep the whole structure in mind. Many arguments flow like
            {" "}
            <KaTeXInline expr="P_1,\, P_2 \;\Rightarrow\; C_{\mathrm{intermediate}} \;\Rightarrow\; C_{\mathrm{main}}" ariaLabel="argument flow P1, P2 imply intermediate conclusion implies main conclusion" />
            . Your job is to map each boldfaced statement to its true spot in that flow.
          </p>
        </section>

        <MCQExample
          number={15}
          prompt={
            'There is a widespread belief that, since unusually warm seawater can destroy coral reefs, and ' +
            'because emissions tied to climate change are heating the oceans, little can be done to save reefs besides cutting those emissions. ' +
            'That belief is mistaken. Problems such as overfishing and nutrient runoff harm reefs even more than heat does, and ' +
            'those issues can be mitigated through local policy actions.\n\n' +
            'In the passage, the two boldfaced portions play which roles?'
          }
          options={[
            // A trap
            "The first supplies support for the argument’s main conclusion; the second states that conclusion.",
            // Correct
            "The first advances a consideration favoring a view the author opposes; the second offers support for the author’s main conclusion.",
            // Other decoys
            "The first provides neutral background; the second restates that background as a conclusion.",
            "Both the first and the second are used to justify the author’s main conclusion.",
            "The first is a subsidiary conclusion; the second is an example that backs the first.",
          ]}
          correct="The first advances a consideration favoring a view the author opposes; the second offers support for the author’s main conclusion."
          solution={
            <>
              <p>
                The passage opens by summarizing a commonly held position about reefs; the author then says that position is wrong and
                gives reasons. The <strong>first</strong> boldfaced clause belongs to the commonly held position, so it supports a view
                the author aims to overturn—not the author’s conclusion. The <strong>second</strong> boldfaced clause (“those issues can be mitigated through local policy actions”)
                directly bolsters the author’s claim that the popular view is mistaken.
              </p>
              <p>
                If you splice only the two bold parts together, they look like “reason → conclusion,” which is exactly the trap.
                Always read boldfaced statements in the full context of the passage.
              </p>
            </>
          }
        />

        <section aria-labelledby="pro-tip">
          <h3 id="pro-tip" className="text-xl font-semibold text-white">
            Pro tip
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ask: does the author endorse this bold statement, or relay it as something to challenge?</li>
            <li>Locate the author’s main conclusion first; then classify each bold part relative to it.</li>
            <li>Beware “final sentence bias” and “because/since bias.” Placement and cue words can mislead.</li>
          </ul>
        </section>

        <MCQExample
          number={16}
          prompt={
            'Conventional wisdom holds that, because most plant foods lack vitamin B12, ' +
            'to keep B12 at healthy levels, people must either eat animal products or take supplements. ' +
            'This claim may be wrong. When lifelong vegetarians from India moved abroad, some developed B12 deficiencies. ' +
            'Since their diets did not change, it appears they were getting B12 from non‑food sources in India.\n\n' +
            'The two boldfaced portions play which roles?'
          }
          options={[
            // Correct (paraphrased A)
            "The first states a conclusion the author questions; the second is evidence used to support the author’s stance.",
            // B paraphrase
            "The first is a position the author argues against; the second presents evidence that favors that position.",
            // C paraphrase
            "The first is a factual setup for context; the second is merely an illustration of the first.",
            // D paraphrase
            "Both the first and the second are reasons the author provides for the main conclusion.",
            // E paraphrase
            "The first is one of multiple conclusions in the passage; the second is an example supporting the first.",
          ]}
          correct="The first states a conclusion the author questions; the second is evidence used to support the author’s stance."
          solution={
            <>
              <p>
                Map the argument:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Background belief (bold 1): “You must eat animal products or supplement to maintain B12.”</li>
                <li>Author’s main conclusion: that belief might be false.</li>
                <li>Evidence (bold 2): some Indian vegetarians developed deficiencies only after moving, despite unchanged diets → suggests a non‑food B12 source in India.</li>
              </ul>
              <p>
                Therefore, the <strong>first</strong> bold segment is a conclusion the author doubts,
                and the <strong>second</strong> is evidence supporting the author’s position. That matches the correct choice.
              </p>
              <p>
                Eliminations:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  If the second bold portion supported the opposing view, it would undercut the author’s stance—but it actually supports it.
                </li>
                <li>
                  The first bold segment isn’t neutral context; it’s the very claim under scrutiny.
                </li>
                <li>
                  Only the second bold portion is used as evidence by the author; the first is what the author challenges.
                </li>
              </ul>
            </>
          }
        />

        <section aria-labelledby="takeaway">
          <h3 id="takeaway" className="text-xl font-semibold text-white">
            Big takeaway
          </h3>
          <p>
            Don’t let wording or placement “tell” you the role. Determine the main conclusion, then label each
            boldfaced statement by how it interacts with that conclusion: supports it, opposes it, or is neutral background.
            When in doubt, test whether the bold piece strengthens the author’s claim or a competing one.
          </p>
        </section>
      </article>
    </main>
  );
}