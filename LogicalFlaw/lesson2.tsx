import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.2 Common Logical Flaw Question Stems | Critical Reasoning",
  description:
    "Learn to spot Logical Flaw question stems quickly. See rephrased, high‑frequency stems, a quick multiple‑choice check, and practical tips to save time on test day.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2 Common Logical Flaw Question Stems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Question stems in Critical Reasoning follow recognizable patterns. The
          faster you identify that a prompt is asking for the flaw in the
          reasoning, the more time you’ll have to analyze the argument itself.
        </p>

        <p>Here are frequent ways Logical Flaw questions are phrased (paraphrased):</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Which choice most accurately identifies the mistake in the
            argument’s reasoning?
          </li>
          <li>Which option best captures a weakness in the argument?</li>
          <li>The argument is defective because it overlooks the possibility that…</li>
          <li>
            The reasoning is unsound because it assumes—without support—that…
          </li>
          <li>The argument is easiest to challenge on the grounds that it…</li>
          <li>The author’s conclusion relies on the mistaken assumption that…</li>
          <li>Which option highlights the most significant logical defect?</li>
          <li>
            The CFO’s reply is an inadequate rebuttal of the COO’s claim because it…
          </li>
          <li>
            Of the following, the strongest critique is that the argument fails to
            account for…
          </li>
          <li>A major problem with the argument’s logic is that…</li>
        </ul>

        <MustKnow>
          Logical Flaw stems ask you to diagnose what’s wrong with the move from
          evidence to conclusion—why the conclusion doesn’t actually follow. In
          shorthand, the task is to explain why the premises do not justify the
          conclusion.
        </MustKnow>

        <p>
          Tip: Distinguish flaw‑finding stems from other tasks. For example,
          weaken questions ask which new fact would hurt the argument, while flaw
          questions ask what is inherently wrong with the reasoning already on
          the page.
        </p>

        <MCQExample
          number={41}
          prompt="Which stem most clearly signals a Logical Flaw question (as opposed to weaken, strengthen, or evaluate)?"
          options={[
            "Which of the following, if true, most undermines the argument?",
            "Which of the following would be most helpful to evaluate the conclusion?",
            "Which choice best identifies a defect in the argument’s reasoning?",
            "Which of the following, if true, most strengthens the author’s conclusion?",
            "Which additional fact would help explain the evidence?",
          ]}
          correct="Which choice best identifies a defect in the argument’s reasoning?"
          solution={
            <>
              <p>
                Logical Flaw stems ask you to diagnose an error already present in the
                argument. Choice C explicitly says “identifies a defect in the
                argument’s reasoning,” which is the hallmark of a flaw task.
              </p>
              <p>
                The other options are classic stems for weaken (A), evaluate (B),
                strengthen (D), or explain/discrepancy (E), not flaw.
              </p>
            </>
          }
        />

        <p>
          As you practice, skim the stem first and label the task. If it’s a flaw
          question, immediately think: What assumption is being made? What key
          possibility is ignored? Where does the argument overreach?
        </p>

        <section aria-labelledby="big-picture">
          <h3 id="big-picture" className="text-lg font-semibold text-gray-200">
            Big picture
          </h3>
          <p>
            Recognizing Logical Flaw stems quickly turns CR into a targeted task:
            name the faulty reasoning. With the stem identified, you can focus on
            the argument’s leap—from evidence to conclusion—and articulate exactly
            why that leap fails.
          </p>
        </section>
      </article>
    </main>
  );
}