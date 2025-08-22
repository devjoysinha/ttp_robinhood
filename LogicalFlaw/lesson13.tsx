import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.3.1 Incorrect Choices: Things the Argument Didn’t Do | Logical Flaw",
  description:
    "Learn to eliminate answer choices that accuse an argument of doing things it never actually does. Includes two multiple‑choice drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Logical Flaw
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.3.1 Incorrect Choices That Claim the Argument Did Something It Didn’t
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some of the fastest eliminations on Logical Flaw questions are answer choices that
          accuse the passage of moves it never makes. If a choice says, for example, that the
          author “relies on a distinction” that the passage never draws, or “assumes” something
          that isn’t actually assumed, then that choice is out.
        </p>

        <MustKnow>
          Before judging an answer’s logic, verify its premise: Did the author actually do what
          the choice claims? If not, the choice is wrong—no further analysis required.
        </MustKnow>

        <section aria-labelledby="auto-argument">
          <h3 id="auto-argument" className="text-xl font-semibold text-white">
            Quick illustration
          </h3>
          <p className="mt-2">
            Consider this argument:
          </p>
          <blockquote className="rounded-md border border-gray-700 bg-gray-900/40 p-4 text-gray-200">
            Unlike other large automakers, which mostly sell gas-powered cars, Blitz Auto makes
            only electric vehicles. Electric cars are cheaper to power, easier to maintain, and
            better for the environment, so they’re superior to gas cars. Therefore, Blitz Auto
            will soon drive its competitors out of business.
          </blockquote>
          <p className="mt-3">
            Suppose a correct answer points out that the argument ignores the possibility that
            other companies could switch to making EVs. Now look at two tempting but incorrect
            eliminations:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              “The argument draws an arbitrary distinction among products that doesn’t match
              market realities.” That’s not what happened—the passage only distinguishes EVs from
              gas cars, a real and relevant difference.
            </li>
            <li>
              “The evidence presented conflicts internally.” It doesn’t—the premises are
              compatible.
            </li>
          </ul>
          <p className="mt-2">
            The takeaway: choices B and C are invalid because they describe actions the argument
            never took.
          </p>
        </section>

        <p>
          One more warning: spotting an obviously bad choice can make a less-obvious wrong
          answer feel safer by comparison. Don’t pick an answer just because it looks better than
          the worst option—make sure it actually diagnoses something the argument does and that
          the diagnosis is a flaw.
        </p>

        <MCQExample
          number={13}
          prompt="An independent consumer organization concludes that, despite being difficult to install and operate, Smart Suite—an advanced antivirus package—provides users with the strongest protection against computer viruses available. The group cites multiple independent surveys showing that Smart Suite users’ machines have the lowest infection rates of any set of users. The organization’s reasoning is most vulnerable to which criticism?"
          options={[
            "It assumes, without justification, that computer viruses actually create problems for users.",
            "It draws a causal conclusion without providing any evidence at all for that conclusion.",
            "It ignores the possibility that people capable of installing and using complex software are also more skilled at avoiding viruses.",
            "It depends on an arbitrary contrast between Smart Suite’s interface and the interfaces of other antivirus products.",
            "It fails to allow that other antivirus programs can also help prevent infections.",
          ]}
          correct="It ignores the possibility that people capable of installing and using complex software are also more skilled at avoiding viruses."
          solution={
            <>
              <p>
                Structure:
              </p>
              <ul className="list-inside list-disc">
                <li>Premise: Surveys show Smart Suite users have the lowest infection rates.</li>
                <li>Conclusion: Smart Suite provides the most protection.</li>
              </ul>
              <p className="mt-2">
                The argument treats a correlation as proof of cause. A key alternative
                explanation is that users who can handle complicated software are also the kinds
                of users who habitually avoid risky behavior online, maintain updates, and spot
                suspicious files.
              </p>
              <p className="mt-2">
                Why the other choices fail:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  A: Whether viruses cause problems is irrelevant to comparing how much
                  protection software provides.
                </li>
                <li>
                  B: There is evidence—the surveys. The flaw is not “no evidence” but “ignoring
                  alternative causes.”
                </li>
                <li>
                  D: The passage never mentions user interfaces.
                </li>
                <li>
                  E: The conclusion is “most protection,” not “only protection.” Other tools can
                  help and the conclusion could still stand.
                </li>
              </ul>
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="People with kidney stones can be treated with lithotripsy (shock waves that break up stones) or with medication. A recent study reports that patients treated with lithotripsy are more likely to develop very high blood pressure afterward than patients treated with drugs. Therefore, lithotripsy must damage the kidneys in a way that causes high blood pressure. The argument is most vulnerable to which criticism?"
          options={[
            "It presents evidence for the conclusion that contradicts other evidence it cites.",
            "It overlooks the possibility that the drugs used to treat kidney stones reduce blood pressure.",
            "It draws a conclusion about lithotripsy’s side effects without surveying the side effects of other treatments.",
            "It generalizes about the entire population from a small group consisting only of kidney‑stone patients.",
            "It assumes, without support, that there is no way to perform lithotripsy without harming the kidneys.",
          ]}
          correct="It overlooks the possibility that the drugs used to treat kidney stones reduce blood pressure."
          solution={
            <>
              <p>
                The passage infers cause from a correlation: more hypertension after lithotripsy
                than after drug therapy. But perhaps the drug therapy actively lowers blood
                pressure, creating the observed difference without requiring that lithotripsy
                raises it.
              </p>
              <p className="mt-2">
                Why the other choices fail:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  A: There’s only one piece of evidence; it doesn’t conflict with itself.
                </li>
                <li>
                  C: Not comparing other side effects isn’t a flaw when the specific claim is
                  about blood pressure.
                </li>
                <li>
                  D: The argument’s scope stays within kidney‑stone patients.
                </li>
                <li>
                  E: The passage doesn’t assert that every possible use of lithotripsy harms
                  kidneys; it claims lithotripsy causes damage in practice.
                </li>
              </ul>
            </>
          }
        />

        <MustKnow>
          Final check: eliminate any answer that cannot point to a real move in the passage.
          If an answer says the author makes a distinction, assumption, or comparison that isn’t
          actually present, it’s out.
        </MustKnow>
      </article>
    </main>
  );
}