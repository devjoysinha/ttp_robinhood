import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.29 Inference Trap 8: Wrong Comparison | Reading Comprehension",
  description:
    "Avoid the Wrong Comparison trap in RC inference questions: learn to spot unsupported comparisons and confirm what the passage actually allows you to compare. Includes a quick check and a full passage example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.29 Inference Trap 8: Wrong Comparison
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Wrong Comparison” answers show up often in inference questions. These
          choices present a comparison the passage doesn’t actually justify.
          They often feel plausible because they echo words or ideas we just
          read—but the text never gives a solid basis to compare the two things
          in the way the choice claims.
        </p>

        <MustKnow>
          • Treat any comparison in an inference answer as a yellow flag.
          Before choosing it, verify that the passage explicitly (1) gives you a
          basis to compare the items, and (2) supports the exact comparison made
          in the choice—rather than a different, nearby comparison.
        </MustKnow>

        <MustKnow>
          • If the passage is silent about how likely, how frequent, or how much
          more/less one thing is than another, you can’t infer that comparison.
          Impressions aren’t evidence—stick to what’s actually stated or
          necessarily implied by the text.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Quick check: spotting an unsupported comparison
          </h3>
          <p>
            Passage (paraphrased): For years, many scientists assumed that all
            animal brains rely on the same set of chemical messengers. Later
            research identified ctenophores, whose neural signaling uses a
            different set of chemicals; despite this difference, they can still
            perform certain spatial and memory tasks similar to other animals.
            The similarity in skills may reflect similar environmental demands
            during evolution.
          </p>

          <MCQExample
            number={23}
            prompt={
              'Which inference is supported by the passage?\n\nA) Ctenophore brains rely on fewer chemical messengers than other animal brains.\nB) Environmental pressures can influence which abilities a brain develops.\nC) Ctenophores and other animals share the exact same signaling chemicals.\nD) Ctenophores have superior memory compared to most animals.\nE) All animals with similar abilities must share the same neural chemicals.'
            }
            options={[
              "Ctenophore brains rely on fewer chemical messengers than other animal brains.",
              "Environmental pressures can influence which abilities a brain develops.",
              "Ctenophores and other animals share the exact same signaling chemicals.",
              "Ctenophores have superior memory compared to most animals.",
              "All animals with similar abilities must share the same neural chemicals.",
            ]}
            correct="Environmental pressures can influence which abilities a brain develops."
            solution={
              <>
                <p>
                  Choice B is supported: the passage links similar abilities to
                  similar environments. Choice A is a Wrong Comparison—the text
                  only says “different,” not “fewer.” Choices C, D, and E go
                  beyond what’s stated.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="full-example" className="space-y-4">
          <h3 id="full-example" className="text-xl font-semibold text-white">
            Full example with analysis
          </h3>
          <p>
            Passage (paraphrased): Absolutism, common in seventeenth- and
            eighteenth-century Europe, vests unchecked authority in a monarch or
            single ruler. Some absolutist rulers appealed to “divine right” and
            consolidated control by heading both church and state. Thinkers such
            as Thomas Hobbes argued that order and security are best preserved
            when one will commands obedience.
          </p>
          <p>
            Constitutionalism, by contrast, limits government via a written
            constitution. Under constitutionalism, no one is above the law; judges
            decide cases using enacted statutes and legal precedent. John Locke,
            a defender of this principle, warned that where law ends, tyranny
            begins. Constitutional systems also check a leader’s dominance by
            balancing powers; while abuses can still occur, no leader may
            legally rule without the assent of at least one other person or
            body (for example, a legislature or the judiciary).
          </p>

          <MCQExample
            number={24}
            prompt="It can be inferred that a government grounded in constitutionalism is less likely than an absolutist government to suffer abuse of power by a leader primarily because constitutionalism is"
            options={[
              "more likely to be endorsed by influential political theorists",
              "less inclined to emphasize order and security",
              "less likely to allow a single leader to act without agreement",
              "more likely to include a judiciary branch",
              "more likely to keep church and state institutionally separate",
            ]}
            correct="less likely to allow a single leader to act without agreement"
            solution={
              <>
                <p>
                  Correct: “less likely to allow a single leader to act without
                  agreement.” The passage explicitly contrasts absolutism with
                  constitutionalism by stating that, under constitutionalism, no
                  one is legally permitted to rule without agreement from at
                  least one other individual or body. That structural check
                  explains the lower risk of abuse.
                </p>
                <p>
                  Why the others are traps (Wrong Comparison):
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    “More likely to be endorsed by theorists” is unsupported;
                    the passage mentions support for both systems but never
                    compares likelihood of support.
                  </li>
                  <li>
                    “Less inclined to emphasize order and security” is
                    unsupported; the text links Hobbes’s view to absolutism but
                    doesn’t compare how much each system emphasizes order and
                    security.
                  </li>
                  <li>
                    “More likely to include a judiciary branch” is not
                    established; the passage gives a judiciary as an example of
                    a checking body but doesn’t compare prevalence across
                    systems.
                  </li>
                  <li>
                    “More likely to separate church and state” overreaches; the
                    passage notes some absolutist rulers headed both, but it
                    doesn’t quantify how likely separation is under
                    constitutionalism.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: if a choice makes a comparison, slow down. Confirm the
          passage gives you (a) permission to compare those items and (b) the
          exact direction of the comparison. If either piece is missing, it’s a
          Wrong Comparison trap—eliminate it. When in doubt, pick the answer
          that simply restates or tightly extends what the author directly
          supports.
        </p>
      </article>
    </main>
  );
}