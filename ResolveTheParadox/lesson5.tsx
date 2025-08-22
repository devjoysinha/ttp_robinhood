import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "5.6 Don’t Look for a Conclusion in Resolve‑the‑Paradox | Critical Reasoning",
  description:
    "Resolve‑the‑Paradox questions report two clashing facts, not an argument with a conclusion. Learn what the correct answers look like, common traps, and practice with two multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.6 Don’t Look for a Conclusion in a Resolve‑the‑Paradox Question
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Resolve‑the‑Paradox items, the stimulus isn’t making an argument.
          Instead, it presents two statements that seem to clash. Because there’s
          no argument, there’s no author’s conclusion to identify or assess.
          Your task is to find new information that allows both reported facts
          to stand together.
        </p>

        <MustKnow>
          Don’t hunt for a “conclusion” in the stimulus or answers. These
          questions aren’t asking you to evaluate an argument; they’re asking
          you to supply a fact that reconciles two surprising statements.
        </MustKnow>

        <p>
          Consider a simple illustration: antibiotics don’t treat viruses, yet
          physicians sometimes prescribe them to people with viral infections
          that suppress immune function. A reconciling fact is that those
          patients face high risk of secondary bacterial infections—conditions
          for which antibiotics are appropriate. Both original statements become
          compatible once that extra detail is added.
        </p>

        <MustKnow>
          A frequent trap is an answer that sounds like a neat takeaway or
          summary conclusion. Even if it follows from the facts, it doesn’t
          explain how the two facts can both be true. The correct answer adds a
          missing piece that removes the tension.
        </MustKnow>

        <MCQExample
          number={46}
          prompt="In Verdantia, price‑comparison sites increase competition among retailers. Nevertheless, as the number of comparison sites has grown, the prices of goods listed on those sites have also risen. Which option best resolves this?"
          options={[
            "Shoppers get the best deals when only a few comparison sites exist.",
            "Retailers pay substantial listing and marketing costs to appear on many comparison sites, and they raise prices to recover those expenses.",
            "Consumers visit comparison sites mostly for high‑ticket items.",
            "Most merchants featured on comparison sites are small boutiques.",
          ]}
          correct="Retailers pay substantial listing and marketing costs to appear on many comparison sites, and they raise prices to recover those expenses."
          solution={
            <>
              <p>
                We need a new fact that makes higher prices compatible with more
                competition. If appearing on many sites is costly and those
                costs are pushed to consumers, prices can rise even while sites
                compete.
              </p>
              <p>
                The choice about “best deals with few sites” is just a
                conclusion‑like statement; it doesn’t explain the mechanism.
                The remaining distractors might be true but don’t connect the
                dots from “more sites” to “higher prices.”
              </p>
            </>
          }
        />

        <p>
          Next, try a full multiple‑choice example. Focus on whether each option
          supplies a plausible mechanism that makes both given facts co‑exist.
        </p>

        <MCQExample
          number={47}
          prompt="Dating apps make it easy to contact many potential partners. Yet, many users of these apps stay single longer than they would without the apps. Which of the following, if true, best explains this outcome?"
          options={[
            "For many people, offline methods of meeting partners could lead to happier relationships than using dating apps.",
            "Using dating apps helps people connect with like‑minded partners they might otherwise never meet.",
            "When many alternatives are visible, people reject near‑matches over minor flaws and keep browsing rather than committing.",
            "Choosing among many options is about as hard as choosing among a few options when selecting a partner.",
            "Regardless of how people meet, maintaining a relationship requires strong communication skills.",
          ]}
          correct="When many alternatives are visible, people reject near‑matches over minor flaws and keep browsing rather than committing."
          solution={
            <>
              <p>
                The correct answer proposes a mechanism: abundant choice
                encourages continued search, which delays commitment. That
                reconciles “easier to meet many” with “remain single longer.”
              </p>
              <p>
                Option A discusses happiness, not speed to find a partner.
                Option B reinforces the ease of finding matches, which intensifies
                the paradox rather than resolves it. Option D suggests similar
                difficulty, not a reason for longer timelines with apps. Option E
                concerns relationship maintenance, not the time to initiate one.
              </p>
            </>
          }
        />

        <MustKnow>
          Aim for what could be true to reconcile the two facts, not what must
          be true in all cases. A good explanation just needs to plausibly make
          the facts fit together.
        </MustKnow>
      </article>
    </main>
  );
}