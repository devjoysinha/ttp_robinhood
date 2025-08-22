import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "4.4 A 4‑Step Strategy for Criteria‑Based Data Sufficiency | GMAT DS",
  description:
    "A clean, reliable 4‑step method for criteria‑based Data Sufficiency. Learn how to identify criteria, infer implications, account for outside factors, and evaluate statements efficiently. Includes practical DS mini‑examples and common pitfalls.",
};

function K({
  expr,
  block = false,
  ariaLabel,
  className,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    output: "html",
    strict: "ignore",
    trust: false,
  });
  const Tag = block ? "div" : ("span" as const);
  return (
    <Tag
      role="math"
      aria-label={ariaLabel || expr}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4 A 4‑Step Strategy for Solving Criteria‑Based DS Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Whether you noticed it or not, the fastest, most consistent way to
          handle criteria‑based DS is to follow a short checklist. The same
          4 steps work across scenarios, keep your notes tidy, and help you see
          sufficiency quickly.
        </p>

        <MustKnow>
          Use this 4‑step process on criteria‑based DS:
          <ol className="mt-2 list-decimal pl-5">
            <li>List every criterion from the stem.</li>
            <li>Work out the implications of each criterion.</li>
            <li>Decide whether outside factors (unstated conditions) matter.</li>
            <li>Evaluate each statement, considering those outside factors if needed.</li>
          </ol>
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Step 1: Extract the criteria clearly</h3>
        <p>
          These stems pack a lot of conditions. Before touching the statements,
          pull out each requirement from the passage and jot them as a short,
          readable list. This prevents mixing details and speeds up checks later.
        </p>

        <MustKnow>
          Identify all criteria from the stem first—only then move to the
          statements. Keep your notes minimal but unambiguous.
        </MustKnow>

        <p>
          Summarizing the criteria in your notes is often the difference between
          a quick solve and a messy one. Short phrases beat full sentences.
        </p>

        <MustKnow>
          Summarize criteria in your own shorthand. Aim for a checklist you can
          scan in seconds instead of copying the stem verbatim.
        </MustKnow>

        <p className="pl-4 text-gray-300">
          Example stem (paraphrased): Farouk is planning a dinner menu. Two
          guests are vegetarian, one is allergic to peanuts, and one is lactose
          intolerant. Can Farouk design a menu that satisfies all these needs?
          A clean notes list could be:
        </p>
        <ul className="pl-8 text-gray-300 list-disc">
          <li>vegetarian options</li>
          <li>no peanuts</li>
          <li>dairy‑free</li>
        </ul>

        <h3 className="text-xl font-semibold text-white">Step 2: Think through each criterion’s implications</h3>
        <p>
          Once the list is set, translate each condition into consequences for
          the scenario. Ask: What does this force? What combinations does it
          allow or forbid?
        </p>

        <p className="pl-4 text-gray-300">
          Mini scenario: Josie wants Bradley and Michal at her party. Bradley
          will attend only if Nina attends. Implication: to guarantee Bradley,
          Nina must be in. That dependency shapes the feasible outcomes.
        </p>

        <MustKnow>
          After listing criteria, derive what each one forces. Focus on
          dependencies and conflicts that drive yes/no outcomes.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">
          Step 3: Account for outside factors when they exist
        </h3>
        <p>
          DS stems don’t always spell out every relevant constraint. Words like
          “include” or broad settings (e.g., travel preferences) can hint that
          more conditions may apply but are not listed. If the group is
          unrestricted or open‑ended, assume outside factors may matter.
        </p>

        <MustKnow>
          Consider all factors that could affect the outcome—even ones the stem
          doesn’t explicitly mention—when the context is open‑ended.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">
          Step 4: Evaluate statements—differently, depending on outside factors
        </h3>
        <p>
          If no outside factors apply, treat it like a standard math DS:
          evaluate each statement for sufficiency and combine only if needed.
        </p>

        <MustKnow>
          No outside factors? Evaluate statements just like a typical math DS
          question.
        </MustKnow>

        <p>
          If outside factors do matter, judge each statement on two axes:
        </p>
        <ul className="pl-8 list-disc">
          <li>Does it address those outside factors?</li>
          <li>Does it force a definitive “No” to the stem’s question?</li>
        </ul>

        <MustKnow>
          With outside factors, a statement can be sufficient by: 
          <ul className="mt-2 list-disc pl-5">
            <li>directly handling those outside conditions, or</li>
            <li>making a “No” inevitable.</li>
          </ul>
        </MustKnow>

        <div className="rounded-md bg-slate-800/40 p-4">
          <p className="mb-2">
            Common heuristic when outside factors are in play:
          </p>
          <K
            expr="(\text{outside factors present}) \Rightarrow \text{ often answer (E)}"
            ariaLabel="outside factors present implies answer often E"
            className="text-lg"
          />
          <p className="mt-2 text-sm text-gray-400">
            It’s a trend, not a rule—use it to stay skeptical, not to guess.
          </p>
        </div>

        <ExampleCard
          number={1}
          title="Flights with multiple requirements (outside factors implied)"
          statements={[
            "Manny and Jamila are flying to the same city. Manny’s requirements include departing before 2:00 p.m. and a price under $500. Jamila’s requirements include in‑flight Wi‑Fi. Will they take the same flight?",
            "(1) All available flights have in‑flight Wi‑Fi.",
            "(2) Every flight that departs before 2:00 p.m. costs less than $500.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                The phrasing “requirements include” suggests they might have
                additional preferences not listed—i.e., outside factors. 
              </p>
              <p>
                Statement (1) speaks only to Jamila’s listed criterion; it says
                nothing about other possible requirements or whether both can
                be satisfied together. Still possible they take the same flight,
                but not guaranteed → not sufficient.
              </p>
              <p>
                Statement (2) ties Manny’s two listed requirements together but
                again ignores any other constraints either traveler may have.
                Same issue: possible but not certain → not sufficient.
              </p>
              <p>
                Together, we still haven’t addressed any outside factors; we
                only verified the listed ones. We can’t ensure they’ll match on
                a single flight. Answer: E.
              </p>
            </>
          }
        />

        <MustKnow>
          A statement yields a definitive “No” if it flatly makes at least one
          required condition impossible to meet. In that case, the statement is
          sufficient by itself for a “No” answer.
        </MustKnow>

        <div className="space-y-3">
          <p className="font-semibold text-white">Contrast case (conflict creates a guaranteed “No”):</p>
          <p className="pl-4">
            Change statement (1) to: “No flights with in‑flight Wi‑Fi depart
            before 2:00 p.m.” That directly conflicts with Manny’s departure
            time and Jamila’s Wi‑Fi requirement—so they cannot take the same
            flight, regardless of any other unstated constraints. Statement (1)
            alone is sufficient → pick A in that version.
          </p>
        </div>

        <div className="rounded-md bg-slate-800/40 p-4">
          <p className="font-semibold text-white">Stopping early to save time:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              If outside factors matter and neither statement alone addresses
              them nor forces a “No,” you can select <strong>E</strong> without
              testing them together.
            </li>
            <li>
              If a statement alone forces “No,” choose by letter:
              <ul className="mt-1 list-disc pl-5">
                <li>A if (1) alone forces “No”</li>
                <li>B if (2) alone forces “No”</li>
                <li>D if each alone forces “No”</li>
              </ul>
            </li>
          </ul>
        </div>

        <p>
          Bottom line: extract criteria, reason through their implications,
          decide whether outside factors matter, and then evaluate statements
          accordingly. When outside factors can swing the outcome and aren’t
          controlled by the statements, you’ll often land on E. When a conflict
          makes “No” unavoidable, a single statement can be enough.
        </p>
      </article>
    </main>
  );
}