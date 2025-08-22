import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.11 Common Wrong Answers in Assumption Questions | Critical Reasoning",
  description:
    "Spot the most common trap choices in Identify-the-Assumption questions. Learn patterns such as “supports a different conclusion,” “reverses the task,” and more—with quick drills and explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11 Common Incorrect Answer Choices in Assumption Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In the previous section, we contrasted correct answers with common traps.
          Here, we’ll catalog the frequent wrong‑answer patterns that appear in Identify‑the‑Assumption questions so you can eliminate them quickly and confidently.
        </p>

        <MustKnow>
          Fast eliminations come from recognizing the role an option plays relative to the author’s conclusion.
          If a choice backs a different conclusion, reverses the task, merely explains background,
          states its own conclusion, proposes an alternative plan, or helps but isn’t required, it’s not a necessary assumption.
        </MustKnow>

        <section aria-labelledby="trap-types">
          <h3 id="trap-types" className="text-xl font-semibold text-white">
            Frequent trap patterns
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Supports the wrong conclusion: The choice helps a claim different from the author’s main conclusion.
            </li>
            <li>
              Does the reverse of the task: It weakens when you need an assumption, or strengthens when you’re asked for something that undermines.
            </li>
            <li>
              Explains a premise or scenario detail: It clarifies context without being something the argument depends on.
            </li>
            <li>
              Draws a new conclusion: It makes an inference from the stimulus rather than stating a requirement for the author’s reasoning.
            </li>
            <li>
              Mentions a better or alternative plan: It changes the goalposts instead of addressing the author’s logic.
            </li>
            <li>
              Supports but isn’t necessary: It could help the argument, but the argument would still stand if the statement were false (fails the negation test).
            </li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt="A city plans to subsidize ride‑share fares to ease rush‑hour traffic. The proposal argues that making ride‑share cheaper will reduce the number of single‑occupancy vehicles and therefore congestion. Which option is a classic trap because it supports a different conclusion rather than the author’s?"
          options={[
            "At peak times, most cars on the road carry only one person.",
            "Without subsidies, ride‑share prices typically rise each year.",
            "The subsidy will increase disposable income for frequent riders.",
            "The city cannot add highway lanes in the next five years.",
            "If average car occupancy rises, vehicles on the road can decrease.",
          ]}
          correct="The subsidy will increase disposable income for frequent riders."
          solution={
            <>
              <p>
                The author’s conclusion is about reducing congestion. The option about
                increasing riders’ disposable income supports a different conclusion
                (affordability or equity), not traffic reduction. That makes it a
                “supports the wrong conclusion” trap.
              </p>
              <p>
                In contrast, statements about single‑occupancy vehicles or occupancy
                rising are aligned to the traffic‑reduction logic.
              </p>
            </>
          }
        />

        <ExampleCard
          number={22}
          title="Trap Type: Does the Reverse of the Task"
          statements={[
            "An editor concludes that a new fact‑checking workflow reduced factual errors last quarter.",
            "Question: Which choice is an assumption the editor’s conclusion depends on?",
            "A) Last quarter, the magazine published more articles than usual.",
            "B) If the workflow had increased errors, the editor’s conclusion would be false.",
            "C) The drop in errors was not primarily caused by fewer articles being written.",
            "D) The workflow is expensive and slows publication by several days.",
            "E) Rival magazines also reported fewer errors last quarter.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need a necessary assumption that preserves the link from “new workflow”
                to “fewer errors.” If errors fell simply because fewer articles were produced,
                the conclusion could be mistaken. Choice C rules out that main alternative cause,
                so it’s required.
              </p>
              <p>
                Choice D “does the reverse” of the task: it weakens feasibility/cost rather than
                supplying a needed condition. That’s a classic reverse‑polarity trap, not an
                assumption.
              </p>
            </>
          }
        />

        <p>
          Bottom line: Label what each option actually does. If it doesn’t protect the author’s
          conclusion by stating something the reasoning must rely on, it’s not an assumption—no
          matter how reasonable it sounds.
        </p>
      </article>
    </main>
  );
}