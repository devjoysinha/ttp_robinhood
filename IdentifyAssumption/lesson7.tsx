import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.8 The Negation Technique | Critical Reasoning",
  description:
    "Master the Negation Technique for GMAT Critical Reasoning. Learn how to test answer choices by negating them, spot required assumptions, and avoid traps. Includes two practice questions with full solutions.",
};

function MathInline({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    trust: true,
  });

  if (display) {
    return (
      <div
        role="math"
        aria-label={ariaLabel}
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="math"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.8 The Negation Technique
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An assumption is an unstated fact the author needs to be true so the
          evidence can justify the conclusion. A powerful way to confirm a
          required assumption is to flip it: imagine the assumption is false and
          check whether the argument collapses. That move is the Negation
          Technique.
        </p>

        <MustKnow>
          If an argument relies on an assumption, making that assumption false
          breaks the argument. That’s because a required missing fact must be
          true for the logic to hold.
        </MustKnow>

        <p>
          Here’s the working rule of thumb you’ll use on answer choices in
          Assumption questions:
        </p>

        <MustKnow>
          Negate a choice. If the negated version seriously undercuts the
          conclusion, then the original statement is necessary. If negating a
          choice leaves the argument essentially unchanged, that choice is not
          required.
        </MustKnow>

        <section aria-labelledby="how-to-use">
          <h3 id="how-to-use" className="text-xl font-semibold text-white">
            How to apply the Negation Technique
          </h3>
          <ol className="mt-3 list-decimal space-y-3 pl-6">
            <li>
              Break down the argument. Identify the conclusion and the support.
            </li>
            <li>
              Negate each answer choice precisely. Keep it minimal—shorthand is
              fine. Common patterns:
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  Negate the main verb:
                  <span className="ml-2">
                    <em>“x causes y”</em> → <em>“x does not cause y.”</em>{" "}
                    Or using math:
                    <span className="ml-2 inline-block align-middle">
                      <MathInline expr={"x\\to y"} ariaLabel="x implies y" />{" "}
                      becomes{" "}
                      <MathInline
                        expr={"\\neg(x\\to y)"}
                        ariaLabel="not x implies y"
                      />
                    </span>
                  </span>
                </li>
                <li>
                  Flip quantity words:
                  <span className="ml-2">
                    <em>“All apples are red”</em> →{" "}
                    <em>“Not all apples are red.”</em>
                  </span>
                </li>
                <li>
                  Remove a “not”:
                  <span className="ml-2">
                    <em>“x is not required”</em> → <em>“x is required.”</em>
                  </span>
                </li>
                <li>
                  Use a wrapper:
                  <span className="ml-2">
                    <em>“It is not the case that …”</em>
                  </span>
                </li>
              </ul>
            </li>
            <li>
              Eliminate choices whose negations do not harm the argument.
            </li>
            <li>
              If two are close, revisit the gap between evidence and conclusion
              and pick the one whose negation most clearly wrecks the link.
            </li>
          </ol>
        </section>

        <section aria-labelledby="mini-demo">
          <h3 id="mini-demo" className="text-xl font-semibold text-white">
            Quick demo
          </h3>
          <p className="mt-2">
            Suppose the author concludes that everyone in a specific house
            should be quarantined because two residents got disease X yesterday,
            and the author’s general rule is “if a communicable disease is in a
            house, quarantine everyone there.” What must be true? That disease X
            is communicable. Negate it—“X is not communicable”—and the
            conclusion loses its basis. By contrast, negating “People should be
            quarantined only when they themselves have a communicable disease”
            doesn’t necessarily weaken the conclusion in this context, so it’s
            not required.
          </p>
        </section>

        <MustKnow>
          On Assumption questions, the correct answer—when negated—should
          destroy the argument’s support for its conclusion.
        </MustKnow>

        <section aria-labelledby="monica">
          <h3 id="monica" className="text-xl font-semibold text-white">
            Another quick check
          </h3>
          <p className="mt-2">
            Argument: “A TV show is holding a singing contest. Monica has an
            excellent soprano voice, so she’ll likely make the show.” Hidden
            requirement: Monica is eligible to apply. Negate it—“Monica is not
            eligible”—and the conclusion no longer follows.
          </p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={14}
          prompt="MowGreen, a lawn-care firm that emphasizes sustainable methods, has grown quickly and now serves many regions. Given current economic conditions in Drawnville, the company would not be profitable there. Therefore, MowGreen certainly won’t expand into Drawnville in the near future. Which statement must be true for this conclusion to be valid?"
          options={[
            "When deciding where to enter, MowGreen’s leaders factor in profitability.",
            "Residents of Drawnville are uninterested in sustainable lawn care.",
            "There are profitable markets where MowGreen has not yet expanded.",
            "MowGreen earns profits in every region it currently serves.",
            "Eco‑friendly lawn care generally costs more than conventional methods.",
          ]}
          correct="When deciding where to enter, MowGreen’s leaders factor in profitability."
          solution={
            <>
              <p>
                The evidence says Drawnville wouldn’t be profitable; the
                conclusion says MowGreen won’t expand there. The bridge is that
                the company uses profitability as a deciding factor for
                expansion. Negate choice (A): “Management does not consider
                profitability when expanding.” That breaks the link—now the
                conclusion no longer follows from the premise. The other
                statements, when negated, don’t collapse the argument.
              </p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt="If campaign donations were prohibited, only wealthy candidates would have the funds needed to win elections, and candidates of modest means would rarely win. Therefore, donations must be allowed so that candidates who will protect the interests of citizens of modest means can be elected. Which assumption is necessary?"
          options={[
            "Wealthy people usually enjoy unfair financial advantages.",
            "People of modest means never become wealthy enough to self‑fund.",
            "Officeholders who are wealthy will not protect the interests of citizens of modest means.",
            "Campaign costs have been rising over time.",
            "A corrupt candidate of modest means would still protect the interests of citizens of modest means.",
          ]}
          correct="Officeholders who are wealthy will not protect the interests of citizens of modest means."
          solution={
            <>
              <p>
                The premise is about who can win without donations (mostly the
                wealthy). The conclusion is about electing people who will
                defend the interests of citizens of modest means. The gap is
                whether wealthy winners would safeguard those interests. Negate
                (C): “Wealthy officeholders will safeguard those interests.” If
                that’s true, donations are not necessary to get such defenders
                elected, and the argument falls apart. Thus, (C) is required.
              </p>
            </>
          }
        />

        <hr className="border-gray-700" />

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <p className="mt-2">
            Use the negation test to separate must‑have assumptions from nice‑to
            have statements. If the negated choice doesn’t harm the argument,
            it’s not required. If the negation wrecks the conclusion’s support,
            you’ve found the assumption the author depends on.
          </p>
        </section>

        <section aria-labelledby="reference-examples">
          <h3
            id="reference-examples"
            className="text-xl font-semibold text-white"
          >
            Quick negation reference
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Causal claim: <em>“A causes B”</em> → <em>“A does not cause B.”</em>{" "}
              or <MathInline expr={"A\\to B"} ariaLabel="A implies B" /> →{" "}
              <MathInline
                expr={"\\neg(A\\to B)"}
                ariaLabel="not A implies B"
              />
            </li>
            <li>
              Universal: <em>“All S are P”</em> → <em>“Not all S are P.”</em>
            </li>
            <li>
              Existential: <em>“Some S are P”</em> →{" "}
              <em>“No S are P.”</em> (or “It is not the case that some S are
              P”)
            </li>
            <li>
              Modal/necessity: <em>“X is required”</em> ↔{" "}
              <em>“X is not required.”</em>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}