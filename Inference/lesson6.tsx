import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is imported once in your root layout (app/layout.tsx):
// import "katex/dist/katex.min.css";
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "7.5.2 Inference Answers Backed by Small Portions of a Passage | Verbal",
  description:
    "Learn why a correct Inference answer can be fully supported by just a line or two of the passage. Includes a worked reading example and a multiple‑choice drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.2 Answers Fully Supported by Small Portions of the Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A correct response to an Inference question doesn’t have to be stitched
          together from the entire passage. If a sentence or short span of text
          in the passage is enough to prove an answer, that answer is valid—even
          if the rest of the passage is irrelevant to it.
        </p>

        <MustKnow>
          A correct inference can be justified by a small slice of the passage.
          Your job is to check whether any part of the text, by itself, fully
          supports an answer choice.
        </MustKnow>

        <p>
          In fact, it’s common for the right choice to rely on a single line.
          Don’t assume you must aggregate every statement to reach the correct
          conclusion.
        </p>

        <MustKnow>
          Frequently, the best answer is anchored to one sentence or a short
          fragment of the passage rather than the entire text.
        </MustKnow>

        <section aria-labelledby="utrandinia-example" className="space-y-3">
          <h3
            id="utrandinia-example"
            className="text-xl font-semibold text-white"
          >
            Mini example: one line is enough
          </h3>
          <p className="italic text-gray-300">
            Ever since Utrandia installed its first solar plant, people have
            hoped for cleaner air. Because burning coal is the main source of
            air pollution, achieving cleaner air would require replacing
            coal‑fired plants with solar facilities. In the last year, electricity
            produced by solar panels in Utrandia surpassed that produced by
            coal—for the first time.
          </p>

          <p className="font-semibold text-gray-200">
            Which statement is directly supported by the passage?
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Trap: Air quality in Utrandia is now cleaner because most coal
              plants were shut down and replaced by solar facilities.
            </li>
            <li>
              Correct: Two years ago, coal generation in Utrandia exceeded
              electricity produced by solar panels.
            </li>
          </ul>

          <p>
            The last sentence alone settles it: “for the first time” last year,
            solar output was higher than coal. Therefore, in any prior year,
            solar had not exceeded coal. That directly supports the idea that two
            years ago coal’s output was at least as large as solar’s—and in this
            context, greater.
          </p>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-3">
            <p className="mb-2 text-sm text-gray-400">
              Logical snapshot (rendered with KaTeX):
            </p>
            <div aria-label="If last year solar was greater than coal for the first time, then two years ago solar was not greater than coal">
              <InlineMath math={"\\text{If } (\\text{Solar}_{\\text{LY}} > \\text{Coal}_{\\text{LY}} \\text{ for the first time}) \\Rightarrow (\\text{Solar}_{\\text{Y-2}} \\le \\text{Coal}_{\\text{Y-2}})"} />
            </div>
          </div>

          <p>
            The trap choice sounds comprehensive but adds claims the passage
            never makes: it doesn’t say any plants were closed, nor that air is
            cleaner now.
          </p>
        </section>

        <MustKnow>
          Keep an open mind: the correct answer may look smaller or simpler than
          you expect. On your first pass, eliminate only choices that are clearly
          not supported; keep “maybes” until you can prove or disprove them.
        </MustKnow>

        <section aria-labelledby="bp-example" className="space-y-4">
          <h3 id="bp-example" className="text-xl font-semibold text-white">
            Practice: supported by a small portion
          </h3>

          <p>
            Many physicians prescribe blood‑pressure medication to any patient
            whose pressure crosses a threshold and offer little guidance on
            non‑drug approaches. Yet many people with dangerously high readings
            have brought their pressure down to safe levels using non‑pharmaceutical
            methods such as reducing sodium intake.
          </p>

          <MCQExample
            number={46}
            prompt="If the statements above are true, which conclusion is properly supported?"
            options={[
              "Non‑drug approaches are just as effective as doctor‑prescribed medication.",
              "When blood pressure is dangerously high, non‑drug methods are more likely to work.",
              "Some non‑pharmaceutical methods do successfully lower at least some people’s blood pressure.",
              "Everyone who is prescribed blood‑pressure medication should lower sodium to reach safe levels.",
              "Many physicians would rather patients stay on medication than try non‑drug methods."
            ]}
            correct="Some non‑pharmaceutical methods do successfully lower at least some people’s blood pressure."
            solution={
              <>
                <p>
                  The second sentence says many people with very high readings
                  have succeeded in lowering blood pressure via non‑drug methods.
                  That single sentence is enough to prove that at least some
                  non‑drug methods work for at least some people—precisely what
                  choice C states.
                </p>
                <p>
                  Why the others fail:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A compares effectiveness of drugs vs. non‑drug methods—
                    no such comparison appears.
                  </li>
                  <li>
                    B claims non‑drug methods are more likely to work when
                    pressure is “dangerously high”—the passage never discusses
                    relative likelihood across groups.
                  </li>
                  <li>
                    D makes a universal recommendation for all patients on
                    medication—far broader than the evidence.
                  </li>
                  <li>
                    E speculates about doctors’ preferences—the text only
                    mentions what many doctors do, not what they prefer.
                  </li>
                </ul>
                <p className="font-semibold text-gray-200">Answer: C</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: don’t over‑engineer inferences. A single sentence can be
          decisive. If a choice is fully proven by even a small stretch of the
          passage, it’s a contender—no synthesis required.
        </p>
      </article>
    </main>
  );
}