import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Ensure katex/dist/katex.min.css is imported once globally (e.g., in app/layout.tsx)
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "3.10 Tricky Weaken Stems: EXCEPT and NOT | Critical Reasoning",
  description:
    "Learn how to tackle Weaken questions with EXCEPT/NOT stems using quick YES/NO labeling and structured checklists. Includes two practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.10 EXCEPT/NOT Weaken Stems: How to Read and Solve Them
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some Weaken question stems flip the usual task by adding the words
          “except” or “not.” These stems often feel tricky at first because
          they ask you to find the one option that does not weaken the argument.
          With a simple labeling approach, they become very manageable.
        </p>

        <MustKnow>
          In an EXCEPT/NOT Weaken stem, four choices undermine the argument and
          are therefore wrong. The correct answer is the single choice that does
          not weaken the argument.
        </MustKnow>

        <p>
          A fast way to avoid confusion is to label each option as you read:
          write “Yes” if it weakens the argument and “No” if it does not. The
          lone “No” is your answer.
        </p>

        <p className="text-gray-300">
          You might also see more layered stems that demand careful unpacking.
          For instance:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            “Each of the following, if true, would counter the objection to the
            interpretation advanced above EXCEPT:”
          </li>
        </ul>
        <p className="text-gray-300">Use this 4‑step plan:</p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>Identify the interpretation presented by the author.</li>
          <li>Identify the objection raised against that interpretation.</li>
          <li>
            For each option, ask: “Does this counter (i.e., weaken support for)
            the objection?” Label YES or NO.
          </li>
          <li>The one NO is correct (because of EXCEPT).</li>
        </ul>

        <p className="text-gray-300">
          Another variant asks for a single statement that simultaneously helps
          one claim while hurting another:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            “Which of the following, if discovered in experiments, would support
            one of the two hypotheses and undermine the other?”
          </li>
        </ul>
        <p className="text-gray-300">Apply this quick checklist:</p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>Write down the two competing hypotheses.</li>
          <li>For each choice, test support for H1 (H1‑YES or H1‑NO).</li>
          <li>Then test support for H2 (H2‑YES or H2‑NO).</li>
          <li>
            The correct option is the unique choice with one YES and one NO.
          </li>
        </ul>

        <MustKnow>
          When stems get wordy, reduce them to a clear, mechanical task (e.g.,
          YES/NO grids). This keeps you aligned with what the question actually
          asks rather than what it seems to ask at first glance.
        </MustKnow>

        <MCQExample
          number={32}
          prompt={
            <>
              <p className="mb-3">
                Caps and Crowns Dentistry plans to attract new patients by
                offering a complimentary exam, cleaning, and X‑rays to new
                patients. Nationwide, an average dental patient spends $2,500
                on procedures over any two‑year window. Therefore, over the
                next two years, revenue from the new patients will exceed the
                cost of running this promotion.
              </p>
              <p className="font-semibold">
                All of the following, if true, weaken the argument, EXCEPT:
              </p>
            </>
          }
          options={[
            "People who visit a practice solely for free services rarely return there for paid care.",
            "Providing the free exam, cleaning, and X‑rays costs Caps and Crowns $2,600.",
            "Caps and Crowns employs some of the most highly credentialed dentists within a 50‑mile radius.",
            "Most patients drawn by this offer take excellent care of their teeth and spend very little on procedures over any two‑year period.",
            "Because of a local economic downturn, potential patients are unlikely to spend on dental work for at least three years.",
          ]}
          correct="Caps and Crowns employs some of the most highly credentialed dentists within a 50‑mile radius."
          solution={
            <>
              <p>
                Structure: The practice offers free services to bring in new
                patients; a national average of $2,500 per patient over two
                years is cited to justify the claim that revenue will beat the
                promo’s cost.
              </p>
              <p>
                Since this is an EXCEPT stem, four choices must weaken. The one
                that does not weaken is correct.
              </p>
              <p>
                A) If freebie seekers don’t return for paid services, projected
                revenue falls short. Weakens.
              </p>
              <p>
                B) Free bundle costs $2,600 while the average revenue cited is
                $2,500. Costs exceed the presumed revenue. Weakens.
              </p>
              <p>
                C) Top‑tier dentists could plausibly improve retention or paid
                follow‑ups. This does not undercut the claim; if anything, it
                might help it. Does not weaken. Correct.
              </p>
              <p>
                D) If the offer attracts low‑spending patients, revenue likely
                won’t cover the promo cost. Weakens.
              </p>
              <p>
                E) If spending is delayed beyond the two‑year window, revenue
                within that period won’t cover the cost. Weakens.
              </p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt={
            <>
              <p className="mb-3">
                Bans on indoor smoking have been shown to reduce per‑capita
                cigarette sales more in cold climates than in warm ones.
                Boselton, located on a large lake, is much colder than other
                cities in its county due to lake‑effect weather. Therefore,
                Boselton will see the biggest per‑capita drop in cigarette sales
                in the county after a pending county‑wide indoor smoking ban
                takes effect.
              </p>
              <p className="font-semibold">
                All of the following, if true, weaken the argument, EXCEPT:
              </p>
            </>
          }
          options={[
            "Boselton has already persuaded nearly all but the most committed smokers to quit via a local program.",
            "A substantial county‑wide cigarette tax increase will start at the same time as the ban.",
            "Compared with residents of other county cities, Boselton residents spend a much smaller share of their time in public venues.",
            "In Boselton, unlike elsewhere in the county, the people who smoke are generally not the same people who spend time in public venues.",
            "Unlike most cities in the county, few Boselton establishments currently allow smoking indoors.",
          ]}
          correct="A substantial county‑wide cigarette tax increase will start at the same time as the ban."
          solution={
            <>
              <p>
                The conclusion leans on “colder → larger effect.” We’re looking
                for the one choice that does not reduce confidence in that claim.
              </p>
              <p>
                A) If most non‑diehards have already quit, there’s little room
                left for a large decline. Weakens.
              </p>
              <p>
                B) A tax applied across all cities equally doesn’t single out
                Boselton or counter the climate‑based comparison. Does not
                weaken. Correct.
              </p>
              <p>
                C) If Boselton residents rarely use public venues, a ban in
                public venues affects them less. Weakens.
              </p>
              <p>
                D) If smokers in Boselton don’t frequent public venues, the ban
                won’t change their behavior much. Weakens.
              </p>
              <p>
                E) If indoor smoking is already rare in Boselton, the new ban
                won’t move the needle much there. Weakens.
              </p>
              <p className="mt-3">
                Reminder: “Per‑capita” means a ratio. For clarity:
                {" "}
                <span className="inline-block align-middle">
                  <InlineMath math={`\\text{per‑capita cigarette sales} = \\dfrac{\\text{total cigarette sales}}{\\text{population}}`} />
                </span>
                . If the numerator is already low (e.g., due to prior quit
                rates or existing indoor bans), further drops may be limited.
              </p>
            </>
          }
        />

        <MustKnow>
          When a stem asks you to find the “one that does not weaken,” convert
          the task into a quick YES/NO pass over the choices. This reduces
          misreads and speeds you to the single non‑weakener.
        </MustKnow>
      </article>
    </main>
  );
}