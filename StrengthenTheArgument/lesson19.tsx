import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.19 EXCEPT / NOT / LEAST in Strengthen Stems | Critical Reasoning",
  description:
    "Learn how to handle tricky Strengthen question stems that use EXCEPT, NOT, or LEAST. Includes a worked multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.19 How to Read Tricky Stems: “EXCEPT,” “NOT,” and “LEAST”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some Strengthen question stems add a twist by using words such as
          “except,” “not,” or “least.” These stems flip the usual task, so it’s
          important to slow down and translate what the question is truly asking
          you to find.
        </p>

        <section aria-labelledby="stems">
          <h3 id="stems" className="text-xl font-semibold text-white">
            Common stem phrasings (paraphrased)
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Each of the following, if true, strengthens the conclusion,
              except:
            </li>
            <li>
              If all of the following are true, which one does not add support
              for the claim?
            </li>
            <li>
              Assuming the statements are true, which choice does the least to
              reinforce the argument?
            </li>
          </ul>
        </section>

        <p>
          For a stem like “All of the following strengthen the argument,
          except,” your job is to cross off four answers that do strengthen.
          The remaining answer—the correct one—fails to strengthen. It either
          weakens the argument or is irrelevant.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p>
              Do not equate “does not strengthen” with “must weaken.” The
              correct choice on these stems is any option that fails to add
              support: it could slightly undermine the argument or simply have
              no impact.
            </p>
            <p className="text-sm text-gray-400">
              Using logic shorthand: we want “not strengthen,” which can be
              read as either “weakens” or “neutral.” In symbols:
              <span
                className="ml-2 rounded bg-gray-800 px-2 py-1 font-mono"
                aria-label="not S equals W or N"
              >
                ¬S = W ∨ N
              </span>
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="example-setup">
          <h3 id="example-setup" className="text-xl font-semibold text-white">
            What to look for in cause–effect strengthens
          </h3>
          <p>
            When an argument claims a cause leads to an effect, strengtheners
            typically:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Rule out other plausible causes.</li>
            <li>Show the effect appears when the cause is present.</li>
            <li>Show the effect is absent when the cause is absent.</li>
          </ul>
        </section>

        <MCQExample
          number={21}
          prompt={
            <>
              Once common on mainland Australia but now found only on islands,
              Tasmanian devils remained abundant until about 1990, when their
              numbers began to fall. Around that time, many devils were observed
              with Devil Facial Tumor Disease (DFTD), a contagious condition
              that can cause starvation and death. Biologists concluded that
              DFTD likely triggered the population drop.
              <br />
              <br />
              All of the following, if true, would support the biologists’
              conclusion, except:
            </>
          }
          options={[
            "Dingoes—the devils’ main mainland predator—have never established populations on the islands where devils live.",
            "On the islands inhabited by devils, there has been little to no loss of natural habitat since 1990.",
            "On an island where no cases of DFTD have been recorded, the devil population is thriving.",
            "Over time, devils have become more successful at avoiding hunters’ traps and snares.",
            "Some devils that contract DFTD are still able to reproduce and raise their young.",
          ]}
          correct="Some devils that contract DFTD are still able to reproduce and raise their young."
          solution={
            <>
              <p className="mb-2">
                The argument claims a cause (DFTD) led to an effect (population
                decline). Strengtheners either link DFTD more tightly to the
                decline or remove competing explanations. The correct answer,
                because this is an EXCEPT stem, is the one that does not
                strengthen.
              </p>

              <p className="mb-1">
                A. If dingoes are not present on the islands, dingo predation
                is unlikely to explain the decline there. This eliminates an
                alternative cause and thus supports the DFTD explanation.
              </p>
              <p className="mb-1">
                B. If habitat hasn’t meaningfully shrunk since 1990, habitat
                loss is unlikely to be the cause of the decline. That again
                removes a competing cause and strengthens the conclusion.
              </p>
              <p className="mb-1">
                C. If devils flourish where DFTD is absent, that absence of the
                suspected cause correlates with the absence of the effect—good
                evidence for the causal story.
              </p>
              <p className="mb-1">
                D. If devils increasingly avoid traps and snares, hunting is
                less likely to have driven the decline. Another alternate cause
                ruled out; this supports the conclusion.
              </p>
              <p className="mb-1">
                E. If some infected devils still manage to reproduce and rear
                offspring, then DFTD does not necessarily reduce population as
                strongly as claimed; this either slightly weakens the argument
                or at best fails to add support. Because the stem is an EXCEPT,
                this is the correct choice.
              </p>

              <p className="mt-2 font-semibold">Answer: E</p>
            </>
          }
        />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaway
          </h3>
          <p>
            For EXCEPT/NOT/LEAST strengthen stems, eliminate the four choices
            that do add support. The correct answer is the one that fails to
            strengthen—either because it weakens or because it’s irrelevant.
          </p>
        </section>
      </article>
    </main>
  );
}