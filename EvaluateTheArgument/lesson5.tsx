import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "9.5.1 Evaluate the Argument: Answer Choices You Can Test Two Ways (Not Yes/No)",
  description:
    "Learn how to handle Evaluate‑the‑Argument answer choices that aren’t yes/no by using two contrasting answers. Includes two practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Evaluate the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.5.1 Answer Choices That Aren’t Yes/No but Can Still Be Tested Two Ways
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Evaluate‑the‑Argument choices lend themselves to a simple Yes/No
          test. But some answers ask about quantities, proportions, likelihoods,
          or degrees rather than a binary fact. You can still vet those choices
          by answering them in two sharply different ways and seeing whether the
          argument’s strength meaningfully changes.
        </p>

        <p>
          For example, suppose a city considers charging drivers an entrance fee
          to Manhattan and using the proceeds to upgrade subway service. The
          mayor claims the fee would hurt lower‑income residents. If an answer
          choice asks, “What fraction of lower‑income residents travel to
          Manhattan by subway rather than by car?”, you could test two
          reasonable extremes:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Nearly all lower‑income residents take the subway (the fee likely
            helps them if it funds better service).
          </li>
          <li>
            Very few lower‑income residents take the subway (the fee likely
            harms them if most drive and won’t benefit from subway upgrades).
          </li>
        </ul>
        <p>
          Since these opposing answers lead to different assessments of the
          claim, that choice would be highly useful for evaluating the argument.
        </p>

        <MustKnow>
          If an answer choice isn’t a Yes/No, answer it in two contrasting ways
          (plausible “high” vs “low,” “common” vs “rare,” etc.). If those
          answers push the argument in opposite directions, the choice is
          valuable for evaluation. If not, it’s likely irrelevant.
        </MustKnow>

        <section aria-labelledby="patterns" className="space-y-3">
          <h3 id="patterns" className="text-lg font-semibold text-white">
            Common non–Yes/No question forms and contrasting answers
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              What proportion…? → Very small vs very large (e.g., 10% vs 90%)
            </li>
            <li>
              How common…? → Very rare vs very common
            </li>
            <li>
              How likely…? → Very unlikely vs very likely
            </li>
            <li>
              What ratio…? → Skewed one way vs skewed the other (e.g., 100:1 vs 1:100)
            </li>
            <li>
              How different…? → Essentially the same vs fundamentally different
            </li>
            <li>
              How much stronger…? → Not stronger at all vs much stronger
            </li>
            <li>
              How close…? → Extremely close vs very far
            </li>
            <li>
              To what extent…? → Very little vs to a great extent
            </li>
          </ul>
          <p className="text-gray-400">
            Tip: Avoid impossible 0/100 extremes that break the scenario. Use
            sharp but realistic contrasts (for instance, 10% vs 90%).
          </p>
        </section>

        <MCQExample
          number={7}
          prompt="For years, students at Dearborn High have scored below the national average in math and science on standardized tests. The school has now launched free after‑school tutoring led by highly regarded subject‑matter experts. The principal concludes that the program will raise many students’ math and science scores. To best evaluate this conclusion, which of the following would be most useful to know?"
          options={[
            "What share of students are currently enrolled in math or science classes?",
            "Whether English and history teachers also offer free after‑school tutoring.",
            "How far below the national average Dearborn’s scores have historically been.",
            "Whether the expert tutors will eventually be hired as full‑time teachers.",
            "What percentage of Dearborn’s math and science students can actually attend the free tutoring.",
          ]}
          correct="What percentage of Dearborn’s math and science students can actually attend the free tutoring."
          solution={
            <>
              <p>
                We want information that could strengthen or weaken the claim
                that the tutoring will improve many students’ scores. Access is
                the bottleneck.
              </p>
              <p>
                Testing extremes for the attendance question:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  If around 90% can attend, the plan is much more likely to
                  move scores.
                </li>
                <li>
                  If only about 10% can attend, the plan is unlikely to shift
                  scores for “many” students.
                </li>
              </ul>
              <p>
                The other choices are peripheral to whether the tutoring itself
                will noticeably affect math/science outcomes.
              </p>
            </>
          }
        />

        <MCQExample
          number={8}
          prompt="Some cities with “food deserts” are offering incentives to attract supermarkets that sell fresh, nutritious food, hoping to improve residents’ health. Which question would be most useful for evaluating whether these programs are likely to succeed?"
          options={[
            "What proportion of the total city population lives in food deserts?",
            "How many studies have examined the effectiveness of these incentives?",
            "Do supermarket operators cite lack of demand as their main reason for not opening stores in these areas?",
            "Can the cities with the most food deserts afford these incentives?",
            "How frequently does the average resident in a food desert shop for groceries?",
          ]}
          correct="Do supermarket operators cite lack of demand as their main reason for not opening stores in these areas?"
          solution={
            <>
              <p>
                We need to probe an assumption that links the plan to the
                goal—namely, that stores will open and people will shop there.
              </p>
              <p>
                Apply the two‑ways test to demand:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Yes, operators cite weak demand → undermines success (even
                  with incentives, shoppers may not come).
                </li>
                <li>
                  No, operators cite other obstacles → supports success (incentives
                  could solve the real barriers).
                </li>
              </ul>
              <p>
                The other choices don’t clearly change the likelihood that the
                plan will improve health outcomes.
              </p>
            </>
          }
        />

        <p>
          Bottom line: Even when an answer choice isn’t a Yes/No, you can still
          “split” it into two contrasting, plausible answers. If those answers
          drive the argument in opposite directions, you’ve found a powerful
          evaluation lever.
        </p>
      </article>
    </main>
  );
}