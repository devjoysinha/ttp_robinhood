import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.2.1 Pure Logical Flaw Questions | Critical Reasoning",
  description:
    "Learn what pure Logical Flaw questions test, why correct answers don’t add new facts, and how to spot correlation-versus-causation errors. Includes a multiple‑choice practice item with full solution.",
};

// Lightweight KaTeX renderer (server-safe). Assumes KaTeX CSS is loaded globally.
function TeX({
  expression,
  display = false,
  sr,
}: {
  expression: string;
  display?: boolean;
  sr?: string;
}) {
  const html = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span className={display ? "block" : "inline-block align-middle"}>
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      {sr ? <span className="sr-only">{sr}</span> : null}
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2.1 Pure Logical Flaw Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A pure Logical Flaw question asks you to evaluate the argument’s
          internal structure: how the claims are stitched together and where the
          reasoning goes wrong. Crucially, the credited response describes a
          defect in the author’s logic as written—it does not rely on outside
          facts or fresh assumptions.
        </p>

        <MustKnow>
          Correct answers in pure Logical Flaw items diagnose what’s broken in
          the argument’s logic without importing new evidence. Your job is to
          inspect the chain of reasoning as-is and identify the specific
          misstep.
        </MustKnow>

        <section aria-labelledby="example-flaw" className="space-y-4">
          <h3 id="example-flaw" className="text-xl font-semibold text-white">
            Mini example: spotting correlation vs. causation
          </h3>

          <p className="italic text-gray-300">
            In regions where air pollution rose over the past five years,
            respiratory illnesses also increased. Therefore, exposure to air
            pollution causes respiratory illness.
          </p>

          <p className="font-medium text-gray-200">
            Best description of the error:
          </p>
          <p>
            The reasoning treats a trend that occurs alongside another trend as
            proof of a cause–effect relationship while ignoring other
            explanations. In other words,{" "}
            <TeX
              expression="\,\text{correlation} \,\ne\, \text{causation}\,"
              sr="correlation does not imply causation"
            />
            .
          </p>

          <p>
            What’s missing? Evidence that rules out alternative causes (for
            example, a third factor that raises both pollution and illness) or
            that demonstrates the direction of causality. Noticing this gap is
            enough to pinpoint the flaw—no additional facts are required.
          </p>
        </section>

        <section aria-labelledby="practice" className="space-y-4">
          <h3 id="practice" className="text-xl font-semibold text-white">
            Practice: identify the flaw
          </h3>

          <MCQExample
            number={3}
            prompt="For its first four years, TechCo’s CEO personally handled recruiting and hiring, and company revenue grew by about 50% per year on average. Since then, HR specialists have overseen most hiring tasks, and revenue has grown by only about 20% per year on average. Therefore, the CEO is better at recruiting and hiring than the HR team."
            options={[
              "Assumes, without justification, that the CEO’s greatest strengths are in recruiting and hiring.",
              "Overlooks that a growing company may require the CEO to delegate more responsibilities to operate efficiently.",
              "Fails to note that HR specialists are typically more knowledgeable about employment law than the CEO.",
              "Treats the shift in the hiring process as the cause of slower revenue growth while ignoring other plausible causes.",
              "Does not establish that TechCo’s revenue trend differs meaningfully from that of similar companies.",
            ]}
            correct="Treats the shift in the hiring process as the cause of slower revenue growth while ignoring other plausible causes."
            solution={
              <>
                <p className="mb-2">
                  Let’s map the argument. Background: during the CEO-led hiring
                  period, average annual growth was about 50%. Premise: after HR
                  took over most hiring, growth averaged about 20%. Conclusion:
                  the CEO must be better at hiring than HR.
                </p>

                <p className="mb-2">
                  The logic hinges on a cause–effect claim: “Change in who runs
                  hiring” <TeX expression="\Rightarrow" sr="implies" /> “change
                  in revenue growth.” That leap is vulnerable because other
                  variables could explain the decrease in growth (e.g., market
                  saturation, competitive pressure, macroeconomic shifts).
                </p>

                <p className="mb-2">
                  Choice D states this exact issue: it treats the process change
                  as the cause without ruling out alternatives. That’s the core
                  flaw.
                </p>

                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    A: Whether hiring is the CEO’s “strongest” skill is
                    irrelevant; the conclusion only compares CEO vs. HR at
                    hiring.
                  </li>
                  <li>
                    B: The reason for delegating is beside the point; the flaw
                    is the causal jump, not the CEO’s workload.
                  </li>
                  <li>
                    C: Employment-law expertise doesn’t address the argument’s
                    causal inference about revenue growth.
                  </li>
                  <li>
                    E: Industry comparisons could matter in a different analysis,
                    but the claim here fails even before we compare peers because
                    it rests on{" "}
                    <TeX
                      expression="\text{correlation} \,\ne\, \text{causation}"
                      sr="correlation does not imply causation"
                    />
                    .
                  </li>
                </ul>

                <p className="mt-2 font-medium text-gray-200">Answer: D</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <p>
            Pure Logical Flaw questions are about structure, not new facts. Read
            the argument closely, isolate the assumption doing the heavy lifting,
            and check whether the conclusion would still follow if that
            assumption were false. When you see two things that move together,
            remember:{" "}
            <TeX
              expression="\text{correlation} \,\ne\, \text{causation}"
              sr="correlation does not imply causation"
            />
            .
          </p>
        </section>
      </article>
    </main>
  );
}