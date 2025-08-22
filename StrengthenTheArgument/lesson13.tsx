import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
// If not already included globally, ensure KaTeX CSS is imported in your root layout:
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "4.13 Premise‑Confirmation Traps | Strengthen the Argument | Critical Reasoning",
  description:
    "Learn to spot Strengthen answers that merely corroborate a given premise (and thus don’t help). Includes one quick illustrative vignette plus two MCQ drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.13 Premise‑Confirmation Traps: Why “Verifying a Premise” Doesn’t
          Strengthen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Strengthen questions, some tempting choices simply restate or
          validate a premise that’s already given. Because premises on Critical
          Reasoning are treated as facts, confirming them adds no new support to
          the conclusion. To truly strengthen, an answer must tighten the link
          from the given evidence to the author’s claim—usually by connecting
          cause to effect, ruling out alternatives, or otherwise reinforcing the
          reasoning.
        </p>

        <MustKnow>
          On CR, premises are accepted as true. Answers that merely
          “double‑check” or elaborate those premises don’t boost the
          argument—they leave the inference to the conclusion unchanged. Favor
          choices that shore up the leap from premise(s) to conclusion.
        </MustKnow>

        <section aria-labelledby="mini-vignette" className="space-y-4">
          <h3 id="mini-vignette" className="text-xl font-semibold text-white">
            Quick vignette: spotting the trap
          </h3>
          <p>
            Suppose a prompt concludes that eating fresh fruit helps prevent
            heart disease. The passage notes that fruit intake increased and, at
            the same time, heart disease fell. An answer stating that{" "}
            <InlineMath math="80\\%"/> of residents increased fruit intake only
            corroborates a premise (“most people ate more fruit”). That doesn’t
            make the conclusion any stronger.
          </p>
          <p>
            In contrast, an answer showing that in areas where people did{" "}
            <em>not</em> increase fruit consumption, heart disease rates did{" "}
            <em>not</em> decline, connects the hypothesized{" "}
            <InlineMath math="\\text{cause} \\to \\text{effect}"/> and thus
            strengthens the conclusion.
          </p>
        </section>

        <MCQExample
          number={13}
          prompt="About 65 million years ago, Earth experienced its largest mass extinction. Researchers claim that a massive asteroid impact caused the die‑off because the impact hurled soot and debris into the atmosphere, sharply cutting sunlight. Which option best supports the researchers’ claim?"
          options={[
            "Roughly three‑quarters of species disappeared during that extinction event.",
            "Fossils show that species capable of surviving on minimal sunlight did not die out at the time of the impact.",
            "Evidence indicates the asteroid’s diameter was about 81 kilometers, comparable to the length of Luxembourg.",
            "Around the same period, huge volcanic eruptions in present‑day India also injected large amounts of soot and debris into the air.",
            "Even small quantities of atmospheric soot or dust can measurably reduce the sunlight reaching Earth’s surface.",
          ]}
          correct="Fossils show that species capable of surviving on minimal sunlight did not die out at the time of the impact."
          solution={
            <>
              <p className="mb-2">
                The argument is causal: asteroid impact → soot and debris → less
                sunlight → mass extinction{" "}
                <InlineMath math="(\\text{cause} \\to \\text{effect})" />. A
                strong answer will connect reduced sunlight to which species
                perished.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A confirms how large the extinction was, which is already
                  known. Premise‑confirmation trap.
                </li>
                <li className="text-green-300">
                  B links the proposed mechanism to outcomes: species requiring
                  little light survived while light‑dependent species did not.
                  This directly supports the causal story.
                </li>
                <li>
                  C adds asteroid size detail—again, premise confirmation with
                  no added inference to the conclusion.
                </li>
                <li>
                  D introduces an alternate cause (volcanism) for the soot/dim
                  sunlight, which weakens the argument rather than strengthens
                  it.
                </li>
                <li>
                  E reiterates that soot can reduce sunlight, which the passage
                  already assumes. Another premise‑confirmation trap.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="The Mayan city of Tikal collapsed relatively quickly after more than a millennium of prosperity. Residents had cleared roughly two‑thirds of local forests to build and farm. Researchers hypothesize that deforestation led to severe, sustained drought, which caused the collapse. Which option most strengthens this hypothesis?"
          options={[
            "The Mayans did not understand that clearing forests could affect weather patterns and lead to prolonged drought.",
            "From its founding through its decline, Mayan urban development commonly required clearing forests.",
            "Tikal’s exceptional growth relied on infrastructure that captured and used rainfall at scale.",
            "Archaeological evidence suggests that, to maintain their way of life, Tikal’s residents would have needed to fell most trees in the area.",
            "A nearby city, El Zotz, remained prosperous after Tikal’s decline.",
          ]}
          correct="Tikal’s exceptional growth relied on infrastructure that captured and used rainfall at scale."
          solution={
            <>
              <p className="mb-2">
                The hypothesis has a two‑step chain: deforestation → extreme
                drought → city collapse{" "}
                <InlineMath math="(\\text{cause} \\to \\text{effect})" />. A
                good strengthener can reinforce either (i) that deforestation
                plausibly drives drought, or (ii) that drought would have been
                catastrophic for Tikal.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A says the Mayans didn’t realize the risk. That’s about their
                  knowledge, not the causal truth of the hypothesis.
                </li>
                <li>
                  B merely reiterates that forest clearing occurred (and was
                  common). Premise‑confirmation trap.
                </li>
                <li className="text-green-300">
                  C shows Tikal depended heavily on rainfall. If rainfall
                  failed, Tikal would be highly vulnerable—so drought plausibly
                  leads to collapse. This strengthens the second link in the
                  chain.
                </li>
                <li>
                  D again confirms extensive tree‑felling. That corroborates the
                  premise but doesn’t tighten the causal link to collapse.
                </li>
                <li>
                  E is about a neighboring city’s trajectory and doesn’t
                  establish how drought from deforestation affected Tikal.
                </li>
              </ul>
              <p className="mt-2">
                Note: In Strengthen, you don’t always need to support the{" "}
                <em>entire</em> causal chain. Firmly backing a critical link is
                enough to make the conclusion more believable.
              </p>
            </>
          }
        />

        <p>
          Bottom line: if a choice only reaffirms what the stimulus already
          guarantees—i.e., a premise—it doesn’t strengthen. Look for answers
          that bridge the gap from evidence to conclusion, rule out competing
          explanations, or otherwise sharpen{" "}
          <InlineMath math={'\\text{premise} \\Rightarrow \\text{conclusion}'}/> .
        </p>
      </article>
    </main>
  );
}