import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lazy-load KaTeX components (assumes KaTeX CSS is included globally)
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "10.1.1 Assumptions and Logical Flaws | Critical Reasoning",
  description:
    "See how unstated assumptions underpin flawed arguments. Learn to spot the hidden link between premises and conclusions, and practice with four multiple‑choice examples with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.1.1 How Assumptions Create (or Break) an Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Any persuasive argument leans on more than what’s stated. It also
          relies on at least one unstated idea that must be true for the
          conclusion to legitimately follow from the evidence. That hidden idea
          is the assumption. When the assumption is doubtful or false, the
          reasoning collapses.
        </p>

        <MustKnow>
          <p className="mb-2">
            Think of an argument as: premises + assumption ⇒ conclusion.
          </p>
          <p className="mb-2">
            In symbols:{" "}
            <InlineMath math={"P + A \\implies C"} />. If the assumption A is
            not true, the move from P to C breaks:{" "}
            <InlineMath math={"P \\not\\implies C"} />.
          </p>
          <p className="mb-0">
            Flaw questions often hide the weak link (the assumption). Your job
            is to surface it.
          </p>
        </MustKnow>

        <p>
          Many assumptions are innocuous and go unnoticed. Logical Flaw
          questions, however, are built around assumptions that are debatable.
          Spotting those questionable assumptions is often the fastest path to
          the correct answer.
        </p>

        <section aria-labelledby="quick-check-1" className="space-y-6">
          <h3 id="quick-check-1" className="sr-only">
            Quick Check Examples
          </h3>

          <MCQExample
            number={1}
            prompt="Insurance in major cities costs more than in small towns. Data show city residents are no less healthy than small‑town residents. Therefore, insurers must earn higher profits on city customers."
            options={[
              "It assumes, without basis, that providing care is not more expensive in large cities than in small towns.",
              "It ignores the possibility that city residents are actually healthier than small‑town residents.",
              "It treats profit and revenue as though they were the same thing.",
              "It concludes about profitability without considering the size of the insurance market.",
              "It assumes insurers offer identical plans in cities and small towns.",
            ]}
            correct="It assumes, without basis, that providing care is not more expensive in large cities than in small towns."
            solution={
              <>
                <p>
                  The conclusion equates similar health outcomes with higher
                  profits in cities. But profits depend on costs as well as
                  claims. If medical services (e.g., hospital stays, imaging,
                  office visits) cost more in cities, payouts could be higher,
                  which weakens or reverses the profit claim. That’s the missing
                  assumption identified by the correct answer.
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt="Blitz Auto makes only electric cars, which are easier to maintain, cheaper to power, and better for the environment. Thus, Blitz will soon drive all other carmakers out of business."
            options={[
              "It overlooks that government incentives for electric cars might expire.",
              "It fails to consider that other manufacturers could pivot to producing electric cars.",
              "It assumes that consumers care only about maintenance and fuel costs.",
              "It presumes that electric vehicle technology will not change further.",
              "It ignores that some drivers prefer traditional powertrains for performance.",
            ]}
            correct="It fails to consider that other manufacturers could pivot to producing electric cars."
            solution={
              <>
                <p>
                  The prediction depends on rivals staying fossil‑fuel only. If
                  other manufacturers shift to EVs, Blitz loses its decisive
                  advantage. The argument’s critical assumption is that
                  competitors won’t adapt.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          In flaw questions, scan answer choices for statements that expose a
          necessary but uncertain link between the evidence and the conclusion.
          Those choices often begin with language like “assumes,” “presupposes,”
          or “fails to consider.”
        </MustKnow>

        <MCQExample
          number={3}
          prompt="A new state education plan sets aside nearly $50 million for programs serving high‑performing students. Since the state must provide a quality education for all students, the proposal is unreasonable and voters should reject it."
          options={[
            "It never defines the criteria used to classify students by achievement level.",
            "It ignores that equal funding across groups might be unpopular with voters.",
            "It presupposes that funding these programs requires neglecting the needs of other students.",
            "It provides no proof that test scores measure achievement accurately.",
            "It assumes without support that a majority of voters can be persuaded to oppose the plan.",
          ]}
          correct="It presupposes that funding these programs requires neglecting the needs of other students."
          solution={
            <>
              <p>
                The conclusion treats spending on one group as if it necessarily
                shortchanges everyone else. But we’re told only that $50M is
                earmarked for high achievers, not that the rest of the budget is
                inadequate. Without evidence that other students are deprived,
                the leap to “vote it down” rests on a shaky assumption of either‑or
                budgeting.
              </p>
              <p>
                Other choices miss the logical bridge. For example, defining
                the exact criteria (A) or proving test accuracy (D) isn’t needed
                to assess whether funding one program prevents supporting others.
                And (E) confuses “should vote” with “can be convinced to vote.”
              </p>
            </>
          }
        />

        <MCQExample
          number={4}
          prompt="A columnist notes a dramatic rise in the share of young listeners who play modern jazz—up more than 600%. Therefore, radio stations that focus on pop music are headed for a substantial drop in audience."
          options={[
            "It overlooks that most young people may never take up modern jazz.",
            "It assumes that the current decline in pop listenership is caused by jazz.",
            "It ignores that increases in jazz listenership are typically temporary.",
            "It presupposes that the rise in jazz listeners is not due to growth in total music listening.",
            "It overlooks similarities between modern jazz and pop music.",
          ]}
          correct="It presupposes that the rise in jazz listeners is not due to growth in total music listening."
          solution={
            <>
              <p>
                The forecast implies a zero‑sum shift: more jazz must mean less
                pop. But if total listening time or the overall audience is
                growing, jazz could rise without cutting into pop at all. The
                argument assumes the pie is fixed rather than expanding.
              </p>
              <p>
                Choices (A), (B), and (C) don’t address the key link between
                jazz’s increase and pop’s decrease. Choice (E) is irrelevant—
                similarity between genres doesn’t determine whether one audience
                cannibalizes another.
              </p>
            </>
          }
        />

        <p>
          Bottom line: arguments fail when their hidden hinges don’t hold. Find
          the assumption that must be true to get from the evidence to the
          conclusion. If that assumption is questionable, you’ve found the flaw.
        </p>
      </article>
    </main>
  );
}