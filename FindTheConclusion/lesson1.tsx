import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "8.1.1 Find the Conclusion of an Argument | Critical Reasoning",
  description:
    "Learn how to identify the author’s main point in Find the Conclusion questions. Use the ‘therefore test,’ avoid outside information, and practice with a targeted multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          8. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.1.1 Finding the Conclusion of an Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Find the Conclusion prompts present a short argument that always
          includes premises (evidence) and may include context or a partial,
          interim claim. Your job is to state the author’s main point—the
          conclusion that is justified by the stated evidence.
        </p>

        <MustKnow>
          The correct conclusion must be tightly linked to the author’s
          premises and any stated assumptions or intermediate conclusions. It
          should reflect the point the author is driving toward, not just
          repeat facts.
        </MustKnow>

        <p>
          Importantly, the right answer cannot rely on facts or ideas that do
          not appear in, or logically follow from, the passage.
        </p>

        <MustKnow>
          Do not introduce outside information. A valid conclusion must be
          supported only by what the passage states or clearly implies.
        </MustKnow>

        <p>
          Also remember that the best choice is the one that most directly
          captures the author’s main point among the options, even if other
          choices sound smart or reuse familiar wording from the passage.
        </p>

        <MustKnow>
          Among the choices, prefer the option that best expresses the
          author’s overall claim—the main takeaway—not an interesting detail
          from the premises.
        </MustKnow>

        <section aria-labelledby="library-example" className="space-y-4">
          <h3 id="library-example" className="text-xl font-semibold text-white">
            A quick warm‑up example
          </h3>
          <p className="italic text-gray-300">
            A town library faces a budget shortfall. The staff plans a donation
            drive in which residents give unwanted books to the library. Any
            donated title that the library already has will be sold. Because
            people like buying inexpensive books, the drive will eliminate the
            budget gap.
          </p>

          <div className="rounded-md border border-gray-700/60 bg-gray-900/40 p-4">
            <p className="mb-2 font-semibold text-gray-200">Shorthand:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Premise 1: Library has a deficit</li>
              <li>Premise 2: Will sell duplicate donated books</li>
              <li>Premise 3: Shoppers buy cheap books</li>
              <li>Conclusion: The drive closes the deficit</li>
            </ul>
          </div>

          <p>
            If we remove the last sentence, the passage becomes a list of facts
            without a stated main point. That “missing final step” is typical of
            Find the Conclusion questions: you’re expected to supply it.
          </p>

          <MustKnow>
            In Find the Conclusion questions, the argument often “stops short.”
            Your task is to articulate the unstated but logically warranted
            conclusion.
          </MustKnow>

          <p>
            A fast way to locate the conclusion is to apply the therefore test:
            append a clear “therefore” to the end of the premises and see what
            statement naturally completes the thought.
          </p>

          <div className="rounded-md border border-indigo-700/40 bg-indigo-900/20 p-4">
            <p className="mb-2 text-gray-200">The “therefore” test, visually:</p>
            <BlockMath math={`\\text{Premises} \\;\\Rightarrow\\; \\text{Conclusion}`} />
            <p className="mt-2">
              Read the argument as “premises … <InlineMath math="\\therefore" /> conclusion.”
              Whatever best fits after <InlineMath math="\\therefore" /> is your target.
            </p>
          </div>

          <MustKnow>
            Use the “therefore” test: read the evidence, then ask, “Therefore,
            what follows?” The sentence that fits cleanly is the intended
            conclusion.
          </MustKnow>
        </section>

        <section aria-labelledby="mcq" className="space-y-4">
          <h3 id="mcq" className="text-xl font-semibold text-white">
            Try one
          </h3>

          <MCQExample
            number={1}
            prompt="Smithtown Roast is the top‑selling coffee brand in supermarkets. Yet coffee experts consistently rate Smithtown Roast poorly, and expert reviews define what counts as high‑quality coffee. The most reasonable conclusion is that:"
            options={[
              "most supermarket coffee buyers choose the least expensive brand.",
              "most coffee drinkers shop at supermarkets rather than specialty stores.",
              "experts’ flavor preferences differ from the general public’s preferences.",
              "experts tend to rate every bestselling coffee brand poorly.",
              "the bestselling coffee brand is not necessarily the highest‑quality coffee.",
            ]}
            correct="the bestselling coffee brand is not necessarily the highest‑quality coffee."
            solution={
              <>
                <p className="mb-2">
                  Breakdown of the argument:
                </p>
                <ul className="mb-3 list-inside list-disc space-y-1">
                  <li>Premise 1: Smithtown Roast is the supermarket bestseller.</li>
                  <li>Premise 2: Experts rate Smithtown Roast poorly.</li>
                  <li>
                    Premise 3: Expert ratings determine what is considered
                    quality coffee.
                  </li>
                </ul>
                <p className="mb-3">
                  Apply the therefore test: “Smithtown sells the most; experts
                  rate it poorly; experts define quality; therefore …”
                </p>

                <p className="mb-2">
                  A) Mentions price, which the passage never addresses. Adds new
                  information → eliminate.
                </p>
                <p className="mb-2">
                  B) Shifts the topic to where people shop (scope shift). Not
                  supported → eliminate.
                </p>
                <p className="mb-2">
                  C) Suggests a preference gap, but other reasons (e.g., price,
                  marketing) could explain sales vs. ratings. Goes beyond the
                  evidence → eliminate.
                </p>
                <p className="mb-2">
                  D) Overgeneralizes from one brand to “all” bestsellers. Not
                  supported → eliminate.
                </p>
                <p className="mb-2 font-semibold text-gray-200">
                  E) Matches the logic: being the top seller does not guarantee
                  expert‑defined quality. This conclusion follows from the three
                  premises.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              State the author’s main point that follows from the given
              premises—no outside facts.
            </li>
            <li>
              Beware of choices that restate evidence, add new assumptions, or
              make broad claims not warranted by the passage.
            </li>
            <li>
              Use the therefore test: Premises <InlineMath math="\\Rightarrow" /> Conclusion.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}