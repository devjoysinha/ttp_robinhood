import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.3.2 Non‑Flaw Descriptions in Logical Flaw Answers | Critical Reasoning",
  description:
    "Learn to spot trap answers that describe something the argument does but that isn’t actually a flaw. Includes a quick mini‑example and a multiple‑choice drill with full reasoning.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    output: "html",
  });
  return <span aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Logical Flaw</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3.2 Incorrect Choices That Mention Real Features—but Not Real Flaws
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A correct Logical Flaw answer must do two things: accurately describe something the passage
          actually does and identify a genuine defect in its reasoning. Many tempting wrong answers
          satisfy only the first part—they call out something that is truly present in the argument—
          but that thing is irrelevant to the argument’s support and therefore isn’t a flaw.
        </p>

        <MustKnow>
          To be correct, a flaw answer must both (1) match the passage and (2) expose faulty logic.
          Answers that merely describe a true but irrelevant omission or detail are not flaws.
          In symbols:
          {" "}
          <MathInline
            expr={`\\text{“Describes what happens”} \\wedge \\neg\\text{“shows bad reasoning”} \\;\\Rightarrow\\; \\text{Incorrect choice}`}
            ariaLabel='Describes what happens and does not show bad reasoning implies incorrect choice'
          />
        </MustKnow>

        <p>
          One common trap is confusing “absence of evidence” with “evidence of absence.”
          Formally,{" "}
          <MathInline
            expr={`\\text{no evidence for }P\\; \\not\\Rightarrow\\; \\neg P`}
            ariaLabel="No evidence for P does not imply not P"
          />
          .
        </p>

        <ExampleCard
          number={14}
          title="Mini example: calling out a true detail that isn’t a flaw"
          statements={[
            "Insurance premiums are higher in big cities than in small towns. Data also show that city residents are no less healthy than those in small towns. Therefore, insurers make more profit from city residents than from small‑town residents.",
            "(A) Assumes, without support, that the cost of providing care is not substantially higher in cities than in small towns.",
            "(B) Does not determine whether people in cities earn more than people in small towns.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                Choice (B) correctly notes something the passage doesn’t establish (a comparison of
                incomes), but that point doesn’t matter to the conclusion about insurer profits and so
                isn’t a flaw. Choice (A) flags a critical missing assumption—if city care costs are
                higher, the profit claim can fail—so (A) identifies the actual flaw.
              </p>
            </>
          }
        />

        <MustKnow>
          Expect trap answers that mention true but nonessential facts about the passage
          (e.g., popularity, unrelated comparisons, side effects). If the item doesn’t affect
          whether the evidence supports the conclusion, it’s not a flaw.
        </MustKnow>

        <MCQExample
          number={15}
          prompt={
            "Emotional Freedom Techniques (EFT) involves tapping on parts of the body and is promoted as a remedy for many health issues. Although EFT has grown in popularity, there are no rigorous studies that present strong evidence of healing benefits. Thus, EFT does not work."
          }
          options={[
            "rules out EFT’s effectiveness without comparing it to studies showing other therapies work",
            "criticizes EFT despite not explaining why it’s become popular",
            "treats the current lack of solid evidence for EFT’s effectiveness as proof that EFT is ineffective",
            "fails to show that no one who used EFT ever experienced better health",
            "offers no data that EFT’s tapping has caused harm",
          ]}
          correct="treats the current lack of solid evidence for EFT’s effectiveness as proof that EFT is ineffective"
          solution={
            <>
              <p>
                The argument equates “no solid evidence yet” with “ineffective.” That’s the classic
                absence‑of‑evidence fallacy:
                {" "}
                <MathInline
                  expr={`\\neg\\text{evidence}(\\text{effective})\\;\\not\\Rightarrow\\;\\neg\\text{effective}`}
                  ariaLabel="No evidence of effective does not imply not effective"
                />
                . Therefore, choice (C) is correct.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  (A) Other therapies’ results are irrelevant to whether EFT works—describes a true
                  omission, not a flaw.
                </li>
                <li>
                  (B) Popularity doesn’t bear on the logic of effectiveness—again a non‑flaw detail.
                </li>
                <li>
                  (D) You don’t need to prove that no user ever improved to conclude the study support
                  is insufficient; isolated improvements could be due to other factors (e.g., placebo).
                </li>
                <li>
                  (E) The claim concerns effectiveness, not safety; lack of harm evidence is beside the
                  point.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: Verify that a proposed “flaw” both happens in the passage and undermines the
          link between its evidence and conclusion. If it doesn’t change the support, it isn’t a flaw.
        </p>
      </article>
    </main>
  );
}