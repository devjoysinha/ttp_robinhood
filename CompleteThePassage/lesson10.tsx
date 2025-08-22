import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.7.4 Explains vs. Completes | Critical Reasoning",
  description:
    "Learn to spot trap answers in Complete-the-Passage questions: choices that merely explain a detail from the passage but don’t actually complete the author’s reasoning. Includes two multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Complete the Passage
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7.4 A Choice that Explains Something in the Passage but Doesn’t Complete It
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One frequent trap in Complete‑the‑Passage questions is an answer that
          explains a fact mentioned in the passage rather than finishing the author’s line
          of reasoning. Such answers can sound persuasive because they clarify a detail,
          but they fail to provide the missing idea that ties the passage together.
        </p>

        <MustKnow>
          In Complete‑the‑Passage items, the correct answer must complete the author’s argument.
          Be wary of choices that merely explain something already stated; those do not
          advance the logic to the conclusion the author is driving toward.
        </MustKnow>

        <p>
          A reliable tactic: turn the final sentence with the blank into a “Why?” or “What?”
          question. Then look for the option that directly answers that question and connects
          the dots in the author’s reasoning.
        </p>

        <MCQExample
          number={1}
          prompt="Which option best completes the passage?
          
Overfishing near Seatown has caused a notable drop in local wild fish populations.
To reduce pressure on wild stocks, the government proposes building coastal fish farms so that
more fish for human consumption are raised rather than caught. But fish farms often harbor large
numbers of parasites. Therefore, the plan may fail to achieve its goal because __________."
          options={[
            "fish farms can experience explosive parasite growth due to dense, genetically similar stocks",
            "fish farms will increase local employment for coastal communities",
            "enforcing stricter limits on wild catches would help reduce overfishing",
            "fish farms require ongoing investment and careful monitoring",
            "parasites originating in fish farms infect nearby juvenile wild fish, undermining wild stock recovery",
          ]}
          correct="parasites originating in fish farms infect nearby juvenile wild fish, undermining wild stock recovery"
          solution={
            <>
              <p>
                Convert the blank to a question: Why might the plan not allow wild stocks to rebound?
                We need a statement that links fish farms to continued harm to wild fish.
              </p>
              <p>
                The choice “fish farms can experience explosive parasite growth …” only explains a detail
                we already know (farms harbor parasites). It doesn’t connect that fact to wild populations.
                The correct choice states that parasites from farms infect wild juveniles, directly showing
                why wild stocks may not recover. That completes the argument.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Which of the following best completes the passage?

Claims from major movie studios about losing millions in ticket sales to bootleg copies are overstated.
People who create those copies typically buy tickets to record films, so the studio still earns that ticket revenue.
Studios further contend that they lose ticket sales when consumers buy bootlegs instead of going to the theater.
However, the loss is small because __________."
          options={[
            "some moviegoers who would have paid for a ticket choose bootlegs because they are cheaper",
            "theaters can eject patrons who record films and are not required to refund their tickets",
            "rising visual‑effects budgets are the main source of studios’ financial problems",
            "pirates purchase tickets so they can record movies before home release",
            "most people who buy bootlegs would not have gone to the theater to see those films anyway",
          ]}
          correct="most people who buy bootlegs would not have gone to the theater to see those films anyway"
          solution={
            <>
              <p>
                The blank should supply a reason the loss is minimal. That means we’re
                looking for a statement that reduces the number of truly “lost” ticket sales.
              </p>
              <p>
                Option A weakens the claim by saying ticket sales are lost. Option B mentions ejections,
                but doesn’t show that overall losses are small. Option C is off‑topic (costs vs. piracy losses).
                Option D explains a detail we already have (pirates buy tickets to record) without showing
                why the losses are minimal. Option E is the only one that directly supports the conclusion:
                if most bootleg buyers wouldn’t have purchased tickets anyway, the studio’s lost ticket
                revenue must be small.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <p>
          Bottom line: the right completion moves the argument forward. If a choice simply clarifies a
          statement the author already made, it’s likely a trap—look for the option that resolves the
          specific “Why?” or “What?” posed by the blank.
        </p>
      </article>
    </main>
  );
}