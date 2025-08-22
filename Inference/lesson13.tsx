import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "7.6.4 Seems Supported but Needs Outside Info | Inference",
  description:
    "Learn to spot inference answers that look supported but actually rely on unstated assumptions. Includes a quick illustration and a multiple‑choice example with a full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.4 Answers That Seem Supported but Actually Depend on Extra Information
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For Inference questions, the correct choice must be guaranteed by what the passage states. If a choice needs any outside facts, beliefs, or assumptions to work, it can’t be the right answer—even if it feels reasonable.
        </p>

        <MustKnow>
          In Inference problems, an option that requires support from information not presented in the stimulus is invalid. The right answer follows from the text alone—no new premises allowed.
        </MustKnow>

        <section aria-labelledby="illustration" className="rounded-lg bg-gray-900/40 p-4 ring-1 ring-white/10">
          <h3 id="illustration" className="mb-2 text-base font-semibold text-white">
            Quick illustration
          </h3>
          <p className="mb-3">
            Cataract surgery restores clear vision quickly but costs more than non‑surgical, low‑cost holistic approaches that can also restore vision within a reasonable period. Still, even eligible patients who could succeed with the holistic route generally choose surgery.
          </p>
          <p className="mb-1 font-medium text-gray-200">Question:</p>
          <p className="mb-3 italic">
            Which statement can be properly inferred from the information above?
          </p>

          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-200">Trap choice</p>
              <p className="text-gray-300">
                People care more about speed than about cost when dealing with cataracts.
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Why it fails: the passage describes what people choose, not what motivates them. Perhaps they don’t even know the holistic options exist. The claim introduces a new premise about preferences that the stimulus never states.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-200">Correct inference</p>
              <p className="text-gray-300">
                More money is being spent to address cataracts than strictly necessary to resolve the issue.
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Why it works: since a less expensive, sufficiently effective option exists for many people who still choose the pricier option, total spending exceeds the minimum required to solve the problem.
              </p>
            </div>
          </div>
        </section>

        <MustKnow>
          If a choice explains “why” or adds mechanisms, incentives, or preferences that the passage never mentions, it’s relying on extra information. The correct answer sticks to what must be true from the given statements.
        </MustKnow>

        <MCQExample
          number={20}
          prompt={
            <>
              A country’s population has grown since the 1950s, while the number of public‑library users there has steadily decreased. A recent survey reports that residents aged 65 and older are the most frequent library users, and those under age 25 are the least frequent users.
              <br />
              <br />
              Which of the following can be properly inferred?
            </>
          }
          options={[
            "Among younger residents, online and mobile access has largely replaced public‑library use.",
            "Public funds now devoted to libraries would be better directed toward infrastructure projects.",
            "Library use among people under 25 has declined more than it has among people 65 and older.",
            "People 65 and older prefer printed materials to digital media.",
            "In the 1950s, a larger share of the population used public libraries than does today.",
          ]}
          correct="In the 1950s, a larger share of the population used public libraries than does today."
          solution={
            <>
              <p className="mb-2">
                Break down the facts:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Population increased since the 1950s.</li>
                <li>The number of library users decreased over that period.</li>
                <li>65+ use libraries most; under‑25 use them least (current cross‑section).</li>
              </ul>

              <p className="mb-2">
                From “population up” and “number of users down,” it follows that the fraction of the population using libraries has dropped. In symbols, letting p₁₉₅₀s be the proportion then and pₜₒdₐy be the proportion now, we have p₁₉₅₀s > pₜₒdₐy.
              </p>

              <p className="mt-4 font-semibold text-gray-200">Why each wrong option fails:</p>
              <ul className="mt-2 list-disc pl-6">
                <li className="mb-1">
                  Online/mobile replacing libraries (A) adds new causes not stated. Could be true, but not guaranteed.
                </li>
                <li className="mb-1">
                  Reallocating funds (B) asserts a policy judgment outside the passage.
                </li>
                <li className="mb-1">
                  A bigger decline for under‑25s (C) compares trends by age that were never provided.
                </li>
                <li className="mb-1">
                  Media preference of seniors (D) introduces new preference data.
                </li>
              </ul>

              <p className="mt-3">
                Only the share‑comparison in (E) must be true given the population increase and user count decrease.
              </p>
            </>
          }
        />

        <p className="text-gray-300">
          Bottom line: a valid inference is compelled by the text. If a choice leans on added assumptions—motivations, causes, preferences, or policy views—it’s out.
        </p>
      </article>
    </main>
  );
}