import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title:
    "3.7.1 Weaken: False Dichotomy (Offer a Third Alternative) | Critical Reasoning",
  description:
    "Learn how to weaken arguments that force an either/or choice by presenting a third alternative. Includes two multiple‑choice drills and full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.1 Weakening Type 1: Expose a False Either/Or by Offering a Third Option
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common flaw in arguments is to pretend there are only two possible
          outcomes and then claim that ruling one out proves the other. This is
          the classic “false dichotomy.” When you see an argument boxed into an
          either/or, try to weaken it by surfacing another reasonable path the
          author didn’t consider.
        </p>

        <MustKnow>
          A false dichotomy limits the conclusion to two choices without
          justification. Showing a feasible third alternative weakens the link
          between the premise and the conclusion.
        </MustKnow>

        <p className="leading-relaxed">
          In logical terms:
          <span className="mx-2 inline-block rounded bg-gray-800/60 px-2 py-1 text-sm text-gray-100">
            <InlineMath math={"\\text{Assume } (A \\lor B) \\text{ and } \\neg A \\;\\centernot\\Rightarrow\\; B"} />
          </span>
          If another option C is viable, then “not A” does not force B.
        </p>

        <p>
          Everyday illustration: “You don’t want a burger tonight, so you must
          be vegan.” Declining one dinner choice doesn’t prove a specific
          identity or belief—you might prefer pasta, had a burger for lunch, or
          simply aren’t hungry.
        </p>

        <MustKnow>
          Don’t adopt the author’s either/or frame. Ask: what else could explain
          the same facts? If you can name a credible third possibility, the
          argument’s conclusion loses support.
        </MustKnow>

        <MCQExample
          number={1}
          prompt={
            <>
              Inspectors report that three school buses require a week of
              repairs. The school currently has just enough buses to cover all
              existing routes, and administrators claim there’s no practical way
              to redesign routes to use fewer buses. Therefore, families on
              three routes will need to drive students to school for a week.
              Which option, if true, most weakens the conclusion?
            </>
          }
          options={[
            "Public transit that high schoolers can safely use runs along routes that substantially overlap several school-bus routes.",
            "The district has a policy discouraging students from using ride-sharing services.",
            "Reassigning drivers across routes would require union approval.",
            "Some routes are longer than others, so shifting stops would be complex.",
            "The school has previously rented buses during field trips.",
          ]}
          correct="Public transit that high schoolers can safely use runs along routes that substantially overlap several school-bus routes."
          solution={
            <>
              <p>
                The author treats the situation as binary: either redesign
                routes (claimed infeasible) or have parents drive. A public
                transit option creates a third way to get students to school,
                directly undercutting the either/or frame. That weakens the
                conclusion.
              </p>
            </>
          }
        />

        <MustKnow>
          A strong “third alternative” should be plausible and address the same
          goal as the author’s conclusion. It doesn’t need to be perfect—just
          credible enough to show the conclusion isn’t forced.
        </MustKnow>

        <MCQExample
          number={2}
          prompt={
            <>
              In 1932, René Magritte’s painting “La Pose Enchantée” vanished,
              only five years after it was completed. Since this well-regarded
              artwork has never resurfaced, it must have been accidentally
              destroyed by staff at the last gallery where it was offered for
              sale. Which of the following, if true, most undermines the
              conclusion?
            </>
          }
          options={[
            "Analyses of Magritte’s surviving canvases show that he sometimes painted new works on top of older ones.",
            "Public disclosure that a gallery accidentally ruined a famous work would severely damage that gallery’s reputation.",
            "In certain respects, “La Pose Enchantée” resembles some paintings by Picasso.",
            "There are no definitive records that pinpoint the exact location where the work was last seen.",
            "Although the painting had been shown at several galleries, it had not yet been sold when it disappeared.",
          ]}
          correct="Analyses of Magritte’s surviving canvases show that he sometimes painted new works on top of older ones."
          solution={
            <>
              <p>
                The argument assumes that because the painting hasn’t been
                found, destruction at the last gallery is the only reasonable
                explanation. If Magritte sometimes painted over prior works,
                then “the painting was overpainted” is a credible third
                possibility, weakening the claim that gallery destruction is the
                must‑be explanation.
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Choice B doesn’t introduce a new explanation for the
                  disappearance; it speaks to reputation, not outcome. The
                  painting could still have been destroyed accidentally.
                </li>
                <li>
                  Choice C is irrelevant: similarity to Picasso’s works doesn’t
                  bear on what happened to the missing painting.
                </li>
                <li>
                  Choice D is merely “absence of records,” which is not positive
                  evidence of an alternate outcome.
                </li>
                <li>
                  Choice E actually trims one alternative (a completed sale) and
                  thus tends to strengthen the gallery‑destruction story.
                </li>
              </ul>
            </>
          }
        />

        <p>
          Takeaway: when an argument treats “not this” as proof of “that,” try
          to break the false either/or by surfacing a reasonable third
          alternative. If that third path could also fit the premises, the
          conclusion becomes less certain.
        </p>
      </article>
    </main>
  );
}