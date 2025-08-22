import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.6 Assumptions Can Be Inconspicuous | Critical Reasoning",
  description:
    "Learn why many CR arguments hinge on simple, easy-to-miss assumptions. Includes two quick mini‑examples and a GMAT‑style multiple‑choice question with full explanation.",
};

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: false,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      className="align-baseline"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <div
      className="my-4 overflow-x-auto"
      role="img"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify The Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.6 Assumptions Can Be Inconspicuous
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Test‑takers are often surprised by how “quiet” an argument’s missing
          piece can be. The key assumption is frequently so ordinary that our
          brains supply it without noticing.
        </p>

        <p>
          Consider this short argument:
        </p>

        <blockquote className="rounded-md border border-white/10 bg-white/5 p-4 text-gray-200">
          Henrietta bakes the best apple pies in the county. The entries judged
          “best” win the Southern Charm bake‑off every year. Therefore,
          Henrietta’s pie will win this year’s contest.
        </blockquote>

        <p className="mt-2">
          What’s missing? The author never states that Henrietta will actually
          submit a pie. Without that, the conclusion can’t follow.
        </p>

        <div className="rounded-md border border-white/10 bg-white/5 p-4">
          <h3 className="mb-2 font-semibold text-white">Skeleton of the argument</h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>Premise: Henrietta makes the best apple pies.</li>
            <li>Premise: The best apple‑pie entry always wins.</li>
            <li>Assumption: Henrietta enters the contest this year.</li>
            <li>Conclusion: Henrietta will win the contest.</li>
          </ul>
          <KBlock
            expr={`\\text{Best pies}~(P)~\\land~\\text{“best” always wins}~(Q)~\\land~\\text{she enters}~(R)~\\Rightarrow~\\text{she wins}~(C)`}
            ariaLabel="P and Q and R imply C"
          />
        </div>

        <p>
          That assumption may feel obvious—of course she has to enter to win!—
          but “obvious” doesn’t mean “stated.” On Critical Reasoning questions,
          the essentials are often left unsaid and must be supplied by you.
          Note that there may even be reasons she wouldn’t enter (e.g., it’s an
          amateurs‑only contest; she’s ineligible).
        </p>

        <p>Try another quick one:</p>

        <blockquote className="rounded-md border border-white/10 bg-white/5 p-4 text-gray-200">
          A televised talent show features eligible singers. Monica has a lovely
          soprano voice. So, she will likely appear on the show.
        </blockquote>

        <p>
          The conclusion is a prediction that Monica will make the show. The
          missing piece is that Monica is actually eligible. If eligibility
          requires (say) tenors or altos, the reasoning collapses.
        </p>

        <MustKnow>
          Assumptions in CR are often straightforward and easy to overlook. Don’t
          hunt only for exotic logic—watch for the plain, necessary facts the
          author left out.
        </MustKnow>

        <p>
          One more angle: if the premise and conclusion are connected only when
          a simple preference or eligibility holds, that preference or
          eligibility is often the assumption. Symbolically, you’re checking if{" "}
          <KInline expr={`\\text{Premises}~\\Rightarrow~\\text{Conclusion}`} ariaLabel="Premises imply Conclusion" />{" "}
          requires some additional condition to be true.
        </p>

        <MCQExample
          number={11}
          prompt={
            "The surge in demand for Krztanzian‑style freshly brewed tea will end when consumers learn that a single serving often has as much caffeine as eight cans of a popular energy drink and as many calories as a typical lunch. Packaged teas have less caffeine and fewer calories than Krztanzian‑style freshly brewed tea and are widely available in grocery stores and many coffee shops. Which of the following is an assumption on which the argument depends?"
          }
          options={[
            "People in Krztanza don’t object to high caffeine and high calorie counts in their freshly brewed coffee.",
            "Although Krztanzian‑style freshly brewed tea is less healthful than packaged teas, it has nevertheless become very popular.",
            "Consumers in Krztanza generally do not prefer drinks that are both high in calories and high in caffeine.",
            "Krztanzian‑style freshly brewed tea could be improved by reducing its calories and caffeine.",
            "Overall tea consumption in Krztanza will eventually fall because packaged teas have fewer calories and less caffeine.",
          ]}
          correct="Consumers in Krztanza generally do not prefer drinks that are both high in calories and high in caffeine."
          solution={
            <>
              <p>
                Structure the reasoning:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Premise: Packaged teas are lower in caffeine and calories than
                  Krztanzian‑style freshly brewed tea and are easy to find.
                </li>
                <li>
                  Conclusion: Once consumers learn how caffeinated and
                  calorie‑dense Krztanzian‑style tea is, the boom in that
                  business will end.
                </li>
              </ul>
              <p className="mt-2">
                For the premise to support the conclusion, the argument needs the
                idea that people don’t want beverages that are both
                high‑caffeine and high‑calorie. That missing preference is the
                assumption.
              </p>
              <p>
                If, instead, consumers favor high‑caffeine, high‑calorie drinks, the
                evidence about packaged teas being “lighter” wouldn’t show that
                the boom will end. Thus the correct choice states that consumers
                do not prefer such heavy, high‑caffeine beverages.
              </p>
              <p className="mt-2">
                Common traps here include:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Restatements of the passage (they don’t supply a missing link).
                </li>
                <li>
                  Points about other categories (e.g., coffee) or about total tea
                  consumption rather than this one segment.
                </li>
                <li>
                  Irrelevant improvement claims (the tea could be better) that don’t
                  address current preferences.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Big picture: assumptions are often basic conditions that make an
          argument’s bridge hold. Train yourself to ask, “What simple fact has
          to be true for these premises to imply that conclusion?”
        </p>
      </article>
    </main>
  );
}