import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "9.9 Evaluate Incorrect Choice Type 3: Misses the Point and Targets the Wrong Conclusion | Critical Reasoning",
  description:
    "Learn to spot Evaluate‑the‑Argument answer choices that sound relevant but actually assess the wrong conclusion. Includes a quick brand‑image mini‑check and a full Evaluate MCQ with detailed reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.9 Wrong‑Answer Type 3: Misses the Point and Affects the Wrong Conclusion
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Evaluate‑the‑Argument questions, tempting traps often address a conclusion
          that’s related to the author’s claim but not the one you must assess. These choices
          typically feel “on topic,” yet they shift the focus away from the precise conclusion at issue.
        </p>

        <p>
          Consider this scenario. A premium chocolatier, Marvelo, historically sold only in boutique shops.
          A year ago, it expanded into some regular groceries while keeping its specialty presence.
          Sales then fell. Marketing analysts concluded that stocking Marvelo in ordinary groceries
          damaged the brand’s allure among its long‑time customers, causing the drop in sales.
        </p>

        <section
          aria-labelledby="marvelo-check"
          className="rounded-md border border-gray-700 bg-gray-900/40 p-4"
        >
          <h3 id="marvelo-check" className="mb-2 text-base font-semibold text-white">
            Mini‑check: What question actually tests the analysts’ claim?
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-gray-700/70 bg-gray-800/50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-300">
                Choice that misses the point
              </p>
              <p className="mt-1 text-sm text-gray-300">
                To what extent do grocery chains prioritize large chocolate brands over smaller,
                high‑end labels?
              </p>
              <p className="mt-2 text-sm text-gray-400">
                This talks about grocery‑store dynamics. But the conclusion we must evaluate is about{" "}
                brand image declining among Marvelo’s traditional base. Preferential treatment in
                groceries could explain weak grocery sales, not a{" "}
                <em className="text-gray-200">drop in total sales due to brand dilution</em>.
              </p>
            </div>

            <div className="rounded-md border border-emerald-700/50 bg-emerald-900/20 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Choice that hits the point
              </p>
              <p className="mt-1 text-sm text-gray-300">
                Do Marvelo’s long‑standing customers even notice which chocolate brands are stocked
                in regular grocery stores?
              </p>
              <p className="mt-2 text-sm text-gray-400">
                If core customers aren’t aware of the grocery placement, the brand‑image mechanism
                collapses and the analysts’ conclusion weakens. If they <em>are</em> aware, the
                brand‑dilution story becomes more plausible.
              </p>
            </div>
          </div>
        </section>

        <MustKnow>
          When evaluating an argument, confirm you’re testing the author’s exact conclusion.
          Choices that spotlight adjacent topics or alternate conclusions “sound right” but leave
          the author’s claim essentially untouched.
        </MustKnow>

        <section aria-labelledby="big-idea">
          <h3 id="big-idea" className="sr-only">
            Core idea
          </h3>
          <p>
            A helpful mental check is: “If I learn ‘Yes’ versus ‘No’ to this choice, does the
            author’s conclusion get stronger or weaker?” If neither direction moves the needle on
            the author’s specific claim, the choice likely targets the wrong conclusion.
          </p>
        </section>

        <MCQExample
          number={14}
          prompt="A study reports that people who use mouthwash at least twice per day are more likely to develop diabetes than those who use mouthwash once per day or less. The author infers that cutting back on mouthwash use would help prevent diabetes. To assess whether this approach is likely to work, it would be most useful to know which of the following?"
          options={[
            "Whether dietary changes could keep someone from developing diabetes even if that person continues to use mouthwash twice daily",
            "Whether persistent halitosis is an early sign that a person is at elevated risk of developing diabetes",
            "Whether regular mouthwash use protects against any health problems that are more severe than diabetes",
            "Whether the majority of people who rinse at least twice daily do not, in fact, develop diabetes",
            "Whether there are alternative products people can use instead of mouthwash that are not linked to a higher risk of diabetes",
          ]}
          correct="Whether persistent halitosis is an early sign that a person is at elevated risk of developing diabetes"
          solution={
            <>
              <p>
                Structure the argument:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-gray-300">
                <li>
                  Premise: Higher mouthwash frequency is correlated with higher diabetes incidence.
                </li>
                <li>
                  Conclusion: Reducing mouthwash use helps prevent diabetes (a cause‑and‑effect claim).
                </li>
              </ul>

              <p className="mt-3">
                The author moves from a correlation to a causal recommendation. A powerful way to
                evaluate this is to test a plausible reverse‑causation or third‑variable story.
              </p>

              <p className="mt-2">
                Correct choice: If chronic bad breath is a{" "}
                potential early marker of diabetes risk, people on the path to diabetes might rinse
                more to manage breath, which would explain the correlation without mouthwash causing diabetes.
                A “Yes” weakens the author’s approach; a “No” removes that concern and strengthens it.
              </p>

              <p className="mt-2">
                Why the others miss the point:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-gray-300">
                <li>
                  Dietary workarounds (A) discuss different ways to avoid diabetes, not whether
                  “rinse less” itself is effective.
                </li>
                <li>
                  Offsetting benefits (C) are about weighing trade‑offs, not about whether rinsing
                  causes diabetes.
                </li>
                <li>
                  Proportions among rinsers (D) don’t address causality; an elevated risk could
                  matter whether it doubles a small risk or a large one.
                </li>
                <li>
                  Substitutes (E) speak to alternatives, not to whether reducing mouthwash use
                  prevents diabetes.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Bottom line: keep your eye on the exact claim. If an answer choice evaluates a different
          conclusion, it’s off target—even if it feels relevant to the general topic.
        </p>
      </article>
    </main>
  );
}