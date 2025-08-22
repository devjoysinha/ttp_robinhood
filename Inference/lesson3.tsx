import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KaTeXMath({
  expr,
  ariaLabel,
  block = false,
}: {
  expr: string;
  ariaLabel?: string;
  block?: boolean;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  if (block) {
    return (
      <div
        role="img"
        aria-label={ariaLabel || "mathematical expression"}
        className="my-2"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={ariaLabel || "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.4 Inference Strategy | Critical Reasoning",
  description:
    "A step‑by‑step approach to GMAT Critical Reasoning Inference questions: read precisely, identify what must be true, eliminate traps, and confirm the logically forced answer. Includes a fully worked MCQ example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.4 Strategy for Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inference prompts ask for a statement that has to be true given the
          passage. The bigger your precision in reading, the fewer traps you’ll
          entertain. Start by understanding exactly what the text asserts, not
          what it hints at or what might be true in the real world.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              The correct inference must be logically forced by the passage.
            </p>
            <ul className="list-disc pl-5">
              <li>
                Separate must‑be‑true claims from could‑be‑true claims. A choice
                that “seems reasonable” is not enough.
              </li>
              <li>
                Watch quantifiers and qualifiers: words such as all, every,
                none, only, most, some, few, at least, at most, and exactly.
              </li>
              <li>
                Don’t add outside knowledge. Work only with what the text
                guarantees.
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="four-step-strategy" className="space-y-4">
          <h3
            id="four-step-strategy"
            className="text-xl font-semibold text-white"
          >
            A four‑step game plan
          </h3>
          <p>
            Step 1: Read the passage carefully. Misreading one phrase can make a
            trap look attractive.
          </p>
          <p>
            Step 2: Read the question stem to confirm it’s an Inference task
            (phrases like “properly inferred,” “must be true,” “most properly
            drawn”).
          </p>
          <p>
            Step 3: Eliminate choices that do not have to be true. Many traps:
            possibly true, consistent with the passage, or broadly plausible in
            real life.
          </p>
          <p>
            Step 4: From the survivors, select the statement that is guaranteed
            by the given information.
          </p>
        </section>

        <section aria-labelledby="micro-notation" className="space-y-2">
          <h3 id="micro-notation" className="text-xl font-semibold text-white">
            Tiny logic notation (optional)
          </h3>
          <p>
            You can summarize causal rules succinctly. For example, “If hotel
            room demand drops, hotel rates drop” can be written as{" "}
            <KaTeXMath
              expr="D_h \downarrow \;\Rightarrow\; R_h \downarrow"
              ariaLabel="If hotel demand decreases then hotel rates decrease"
            />
            . If later we’re told{" "}
            <KaTeXMath
              expr="R_h \text{ did not decrease}"
              ariaLabel="Hotel rates did not decrease"
            />{" "}
            over a period, we can infer{" "}
            <KaTeXMath
              expr="\lnot(D_h \downarrow)"
              ariaLabel="it is not the case that hotel demand decreased"
            />
            .
          </p>
        </section>

        <MCQExample
          number={4}
          prompt={
            <>
              In Melverton, whenever demand for hotel rooms falls, the prices
              hotels charge fall as well. Over the last three years, the number
              of places to stay has grown because short‑term apartment hosts
              have taken in many travelers who otherwise would have booked
              hotels. During the same three‑year period, hotel prices have
              remained unchanged.
              <br />
              <br />
              Which of the following is most strongly supported by the
              information above?
            </>
          }
          options={[
            "Concerns from Melverton hoteliers about short‑term rentals harming hotels turned out to be baseless.",
            "Hotel vacancy in Melverton has been higher in the last three years than before.",
            "Total demand for accommodations in Melverton has increased.",
            "Apartment hosts in Melverton have been charging roughly the same nightly rates as hotels.",
            "The number of operating hotels in Melverton has declined in the last three years.",
          ]}
          correct="Total demand for accommodations in Melverton has increased."
          solution={
            <>
              <p className="mb-2">
                Translate the key rule: if hotel demand drops, hotel rates drop.
                Using compact notation:
              </p>
              <KaTeXMath
                block
                expr="D_h \downarrow \;\Rightarrow\; R_h \downarrow"
                ariaLabel="If hotel demand decreases, hotel rates decrease"
              />
              <p className="mt-2">
                We’re told hotel rates did not change over the period, so they
                did not decrease:
              </p>
              <KaTeXMath
                block
                expr="\lnot(R_h \downarrow) \;\Rightarrow\; \lnot(D_h \downarrow)"
                ariaLabel="If hotel rates did not decrease, hotel demand did not decrease"
              />
              <p className="mt-2">
                Meanwhile, many travelers chose apartments instead of hotels, so
                demand for apartments went up. If hotel demand did not decrease
                and apartment demand increased, then overall lodging demand
                increased:
              </p>
              <KaTeXMath
                block
                expr="D_{\text{total}} = D_h + D_{\text{apts}} \;\;\Rightarrow\;\; D_{\text{total}} \uparrow"
                ariaLabel="Total demand equals hotel demand plus apartment demand; therefore total demand increased"
              />
              <p className="mt-2">
                Now evaluate choices:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  A: Could be true, but the passage doesn’t prove fears were
                  baseless; hotel demand might have been propped up by growth in
                  travelers.
                </li>
                <li>
                  B: If vacancies had increased (i.e., hotel demand decreased),
                  rates would have dropped—contradicting the statement that
                  rates were unchanged.
                </li>
                <li className="font-semibold">
                  C: Must be true, as shown above.
                </li>
                <li>
                  D: No pricing data for apartments is given; travelers may pick
                  apartments for reasons other than price.
                </li>
                <li>
                  E: The passage says nothing about hotel closures or counts.
                </li>
              </ul>
              <p className="mt-2 font-semibold">Correct answer: C.</p>
            </>
          }
        />

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Quick elimination heuristics</p>
            <ul className="list-disc pl-5">
              <li>
                “Could be true” ≠ “must be true.” If you can build a counter‑
                scenario consistent with the passage, eliminate it.
              </li>
              <li>
                Beware scope jumps—adding assumptions about causes, counts, or
                prices not stated in the stimulus.
              </li>
              <li>
                Use short notation to lock in implications, especially with
                conditionals and trends.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Bottom line: read precisely, trim away anything not guaranteed by the
          text, and select the statement that remains true in every allowable
          scenario the passage permits.
        </p>
      </article>
    </main>
  );
}