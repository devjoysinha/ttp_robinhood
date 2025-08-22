import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "4.10 Trap Answers vs. Correct Answers in Strengthen Questions | Critical Reasoning",
  description:
    "Learn how to tell tempting trap answers from real strengtheners in Critical Reasoning. Includes a clear definition, one illustrative mini‑example, three targeted drills, and two full five‑option examples with reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10 Telling Trap Choices from Correct Answers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Strengthen questions, you’ll often see choices that sound helpful
          but don’t actually push the conclusion forward. The skill is spotting
          the difference between “sounds nice” and “adds real support.”
        </p>

        <p>
          A trap choice typically feels on‑topic and favorable yet fails to make
          the conclusion more likely. A correct answer might seem less obvious at
          first, but once analyzed, it introduces information that directly
          connects the dots and raises the credibility of the conclusion.
        </p>

        <MustKnow>
          Don’t reward choices that only praise a plan or mention related
          details. Prefer the option that gives a concrete reason the conclusion
          should be true—by adding a cause, eliminating an alternate cause,
          confirming a needed link, or otherwise increasing the argument’s
          probability.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini example: plan vs. mechanism
          </h3>

          <MCQExample
            number={71}
            prompt={
              <>
                A city council aims to reduce pedestrian collisions. Their plan
                is to swap the white stone borders around the busiest crosswalks
                for borders made of flashing lights. Which statement most
                supports the idea that the plan will meet the goal?
              </>
            }
            options={[
              "Installing the new borders during scheduled repaving will avoid major traffic disruptions.",
              <>
                Local engineers found that crosswalks with flashing‑light
                borders are <InlineMath math={"220\\%"} /> more effective at
                catching the attention of speeding or distracted drivers than
                those with white stone borders.
              </>,
            ]}
            correct="Local engineers found that crosswalks with flashing‑light borders are 220\\% more effective at catching the attention of speeding or distracted drivers than those with white stone borders."
            solution={
              <>
                <p>
                  Traffic flow during installation is about convenience, not
                  safety outcomes. In contrast, the research directly ties the
                  plan’s mechanism—making drivers notice crosswalks—to the
                  desired result—fewer people getting hit. That’s real support.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          If a choice tells you “why this plan should work,” it’s a strong
          candidate. If it only tells you “this plan won’t be a hassle” or
          “people like this plan,” be skeptical.
        </MustKnow>

        <section aria-labelledby="targeted-practice" className="space-y-4">
          <h3 id="targeted-practice" className="text-xl font-semibold text-white">
            Targeted practice: pick the real strengthener
          </h3>

          <MCQExample
            number={72}
            prompt={
              <>
                Sturdy Crafts sells boats between 3 and 10 meters and plans to
                add a 16‑meter luxury cruiser. Management expects neither big
                margins nor high volume on the new model, yet predicts overall
                profits will rise. Which most supports that prediction?
              </>
            }
            options={[
              "Buyers of 15+ meter boats are typically wealthy and can afford purchase and upkeep costs.",
              "Boat‑buyer publications often feature companies that offer large, high‑end models in their cover stories.",
            ]}
            correct="Boat‑buyer publications often feature companies that offer large, high‑end models in their cover stories."
            solution={
              <>
                <p>
                  Wealthy buyers don’t help if the firm doesn’t expect many
                  sales or large per‑unit profit. Media exposure tied to adding
                  a flagship model, however, can boost brand visibility and lift
                  profits across the lineup.
                </p>
              </>
            }
          />

          <MCQExample
            number={73}
            prompt={
              <>
                Children whose mothers took paracetamol during pregnancy have a
                higher asthma rate than the general population; therefore,
                prenatal paracetamol exposure causes asthma. Which provides the
                best confirmation?
              </>
            }
            options={[
              "Children whose mothers had fevers but did not take paracetamol during pregnancy have the same asthma rate as the general population.",
              "Paracetamol relieves pain and fever but does not reduce the specific airway inflammation seen in asthma.",
            ]}
            correct="Children whose mothers had fevers but did not take paracetamol during pregnancy have the same asthma rate as the general population."
            solution={
              <>
                <p>
                  Showing that fever alone doesn’t elevate asthma isolates
                  paracetamol as the likely driver, strengthening the causal
                  claim. The inflammation statement is tangential to causation.
                </p>
              </>
            }
          />

          <MCQExample
            number={74}
            prompt={
              <>
                Suppliers report far fewer plywood orders from homebuilders than
                at the same time last year. Analysts conclude that builders
                expect housing demand to cool. Which most supports the
                conclusion?
              </>
            }
            options={[
              "Homebuilders’ current plywood inventories are, on average, the same as at this time last year.",
              "Plywood is used extensively in houses, including exterior walls, roofs, and interior floors.",
            ]}
            correct="Homebuilders’ current plywood inventories are, on average, the same as at this time last year."
            solution={
              <>
                <p>
                  If inventories are unchanged but orders are down, total
                  near‑term supply will fall—consistent with planning to build
                  fewer homes. The second choice just reiterates relevance, not
                  intent.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="full-examples" className="space-y-6">
          <h3 id="full-examples" className="text-xl font-semibold text-white">
            Full examples
          </h3>

          <MCQExample
            number={75}
            prompt={
              <>
                Mayor: “We should ban cash at local businesses and allow only
                contactless payments (cards, phones). Doing so would protect
                residents’ health.” Which, if true, most strongly indicates that
                the plan would work as intended?
              </>
            }
            options={[
              "Some residents do not have credit cards or smartphones.",
              "The mayor holds no stock in contactless‑payment providers.",
              "Most people scrub their hands right after handling cash.",
              "Scientists have shown that paper currency can readily transmit disease among those who handle it.",
              "Most businesses in the city already accept contactless payments.",
            ]}
            correct="Scientists have shown that paper currency can readily transmit disease among those who handle it."
            solution={
              <>
                <p>
                  The scientific finding supplies the missing link: if cash
                  spreads illness, removing cash reduces transmission. The other
                  options discuss access, motives, habits, or feasibility—not
                  the health mechanism.
                </p>
              </>
            }
          />

          <MCQExample
            number={76}
            prompt={
              <>
                Grendania plans to cover up to <InlineMath math={"15\\%"} /> of
                tuition for any full‑time student. The claim: the policy won’t
                make college more affordable for students; it will just raise
                university revenues. Which most clearly supports that claim?
              </>
            }
            options={[
              "Existing government funding for professors’ research will remain in place.",
              "Universities in Grendania set tuition based on what people are willing to pay.",
              "When college is cheaper, more people attend full time.",
              "College costs have been rising faster than general inflation in Grendania.",
              "Even with a 15% lower sticker price, many would still struggle to afford college.",
            ]}
            correct="Universities in Grendania set tuition based on what people are willing to pay."
            solution={
              <>
                <p>
                  If pricing tracks willingness to pay, a government top‑up
                  effectively increases what payers (students + government) are
                  willing to pay. Schools can raise tuition to capture the
                  subsidy: student out‑of‑pocket need not fall, while university
                  revenue increases. The other choices don’t tie the plan to
                  both “no extra affordability” and “higher revenue.”
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          When torn between a choice that compliments the plan and one that
          supplies the missing causal or probabilistic link, pick the one that
          actually moves the conclusion’s likelihood.
        </MustKnow>

        <p>
          Summary: A real strengthener tightens the argument’s logic. A trap
          choice is merely adjacent to the discussion.
        </p>
      </article>
    </main>
  );
}