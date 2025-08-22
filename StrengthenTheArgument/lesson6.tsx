import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.6 State the Needed Assumption | Strengthen the Argument",
  description:
    "Learn how explicitly stating a required assumption can fortify an argument. Includes intuitive examples and a practice multiple‑choice question with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6 Make the Argument’s Assumption Explicit
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An assumption is an unstated piece of information the author needs in
          order for the conclusion to be properly supported. In other words, it
          functions like a missing premise that bridges the stated evidence to
          the stated conclusion.
        </p>

        <p>
          Every argument leaves things unsaid. When those background assumptions
          are common‑sense or universally accepted, they don’t change the
          argument’s strength. Trouble arises when an argument leans on a
          debatable assumption—one that might not be true.
        </p>

        <MustKnow>
          Uncontroversial assumptions (things virtually everyone accepts) have
          no meaningful effect on an argument’s strength. Controversial
          assumptions create vulnerability: if such an assumption is false, the
          conclusion loses support.
        </MustKnow>

        <p>
          Because an assumption behaves like a hidden premise, if that
          assumption is false, the argument is not sound. A reliable way to
          strengthen an argument is to state the required assumption outright,
          converting it from an implicit link into an explicit premise.
        </p>

        <MustKnow>
          Since assumptions act as unwritten premises, explicitly asserting a
          required assumption strengthens the argument by shoring up the link
          between evidence and conclusion.
        </MustKnow>

        <section aria-labelledby="socrates-example" className="space-y-3">
          <h3 id="socrates-example" className="text-xl font-semibold text-white">
            A simple illustration
          </h3>
          <p className="italic text-gray-200">
            All humans are mortal. Therefore, Socrates is mortal.
          </p>
          <p>
            The argument implicitly assumes that Socrates is human. That’s not
            guaranteed by the text; he could be a dog, a robot, or a cartoon
            character. If we add the missing assumption as a stated premise:
          </p>
          <p className="italic text-gray-200">
            All humans are mortal. Socrates is human. Therefore, Socrates is
            mortal.
          </p>
          <p>
            By making the underlying assumption explicit, we’ve removed the weak
            link and strengthened the argument.
          </p>
        </section>

        <MustKnow>
          One effective way to strengthen an argument: identify a necessary (but
          unstated) assumption and add it as a premise.
        </MustKnow>

        <section aria-labelledby="science-example" className="space-y-3">
          <h3 id="science-example" className="text-xl font-semibold text-white">
            A slightly richer example
          </h3>
          <p className="italic text-gray-200">
            Chemical X contains hormone‑like compounds that reduce the fertility
            of several fish species. Researchers warn that if Chemical X enters
            Lake Garda, the lake’s fish populations will be wiped out
            permanently.
          </p>
          <p>
            The prediction rests on at least two assumptions: (1) the lake’s
            fish are all vulnerable species, and (2) the fish cannot adapt in a
            way that avoids long‑term collapse. If the lake also contains
            unaffected species—or if the affected species adapt—then the
            “wipe‑out” conclusion may not hold.
          </p>
          <p>
            A strong answer choice for a Strengthen question could explicitly
            confirm one of those assumptions, for example:
          </p>
          <p className="italic text-gray-200">
            Studies show that every fish species currently inhabiting Lake Garda
            suffers significant fertility loss when exposed to Chemical X.
          </p>
          <p>
            By turning a required assumption into a stated fact, the argument’s
            conclusion gains substantial support.
          </p>
        </section>

        <MCQExample
          number={4}
          prompt="A study reports that CEOs facing negative situations are far more likely to act when the consequences of inaction are presented to them. The researchers conclude that, in such situations, CEOs should always be made aware of the costs of doing nothing. Which of the following, if true, most supports the researchers’ conclusion?"
          options={[
            "Many CEOs consult advisors when confronting adverse situations.",
            "At times, choosing not to act can be reasonable because waiting allows conditions to improve.",
            "In challenging situations, taking action generally leads to better outcomes than remaining passive.",
            "Executives tend to act more quickly when the information comes from trusted sources.",
            "It is common for executives to make decisions based on secondhand information.",
          ]}
          correct="In challenging situations, taking action generally leads to better outcomes than remaining passive."
          solution={
            <>
              <p>
                Outline: Premise—showing the downside of inaction nudges CEOs
                to act. Conclusion—therefore, CEOs should always be told the
                consequences of doing nothing.
              </p>
              <p>
                The argument assumes that action typically produces better
                results than inaction. If that’s true, then encouraging action
                (by highlighting the costs of doing nothing) is sensible.
              </p>
              <p>
                Choice C directly confirms that underlying assumption—action is
                usually better than inaction—so it strengthens the conclusion.
              </p>
              <p>
                Choice B undercuts the “always” in the conclusion by describing
                cases where inaction can be a good strategy, so it weakens the
                argument. Choices A, D, and E provide side details about how or
                from whom information is delivered, but they don’t establish
                that taking action is preferable to doing nothing; thus, they
                don’t strengthen the core claim.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: find the missing link the author needs, decide whether
          it’s contentious, and—if you want to strengthen the argument—state it
          outright as a premise. Doing so removes a major source of doubt and
          tightens the logic from evidence to conclusion.
        </p>
      </article>
    </main>
  );
}