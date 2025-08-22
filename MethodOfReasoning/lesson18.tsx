import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "12.5.8 Multiple Conclusions in Boldface Arguments | Critical Reasoning",
  description:
    "Boldface arguments often pack more than one conclusion. Learn how to separate conclusions from premises, see which claims support which positions, and avoid tempting trap descriptions. Includes a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.8 Boldface passages often include several conclusions (plus the
          premises that back them up)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Boldface questions can be tricky because they usually weave together
          multiple argumentative parts: background facts, premises, and more
          than one conclusion. Keeping those roles straight is the whole game.
        </p>

        <div>
          To read these efficiently, make sure you can:
          <ul className="ml-5 list-disc space-y-1">
            <li>tell premises apart from conclusions,</li>
            <li>
              identify which conclusion the author supports and which conclusion
              the author pushes back against, and
            </li>
            <li>match each premise to the conclusion it actually supports.</li>
          </ul>
        </div>

        <p>Here’s a quick illustrative boldface setup:</p>

        <blockquote
          className="rounded-md border border-gray-700 bg-gray-900/40 p-4"
          aria-label="Illustrative boldface argument"
        >
          <em className="text-gray-200">
            Many people think that because{" "}
            <strong>elevated ocean temperatures can harm coral reefs</strong>,
            and because climate change is warming the oceans, there’s little we
            can do beyond cutting emissions to protect reefs. That view is
            mistaken.{" "}
            <strong>
              Local factors such as overfishing and fertilizer runoff damage
              reefs even more than heat does
            </strong>
            , and local policies can address those causes.
          </em>
        </blockquote>

        <p>
          In that passage, the first bold portion backs a conclusion the author
          ultimately rejects, while the second bold portion supports the
          author’s main point. A tempting trap is to assume both bold parts
          support the same conclusion simply because they sound similar in tone.
        </p>

        <MustKnow>
          Boldface questions often contain several conclusions. Anchor yourself
          on the author’s main conclusion first, then classify each boldface
          portion by asking:
          <br />
          1) Is it a premise, background, or conclusion?
          <br />
          2) If it’s support, which conclusion does it actually favor—the
          author’s or a competing one?
        </MustKnow>

        <section aria-labelledby="wine-passage" className="space-y-4">
          <h3
            id="wine-passage"
            className="text-xl font-semibold text-white md:text-2xl"
          >
            Worked Example
          </h3>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p className="mb-0">
              A recent analysis found a relationship between wine quality and
              price. Although those results suggest that{" "}
              <strong>
                a winery that raises the quality of its wine can charge more
              </strong>
              , it would be a mistake to infer that boosting quality leads to a
              financial win. Improving quality is costly—think better grapes,
              new equipment, and higher salaries for expert winemakers.
              Therefore,{" "}
              <strong>
                wineries that increase quality often earn lower returns on
                investment than wineries producing more modest wines
              </strong>
              .
            </p>
          </div>

          <MCQExample
            number={16}
            prompt="In the passage above, the boldfaced portions play which roles?"
            options={[
              "The first is a conclusion opposed by the passage’s main conclusion; the second is the main conclusion.",
              "The first describes a pattern that could be used to support a conclusion that the author ultimately disputes; the second is the main conclusion.",
              "The first could be used to support a conclusion the author rejects; the second offers support for the author’s main conclusion.",
              "The first is a concrete example used to justify a dubious claim; the second is a broader claim that follows from that dubious claim.",
              "The first is an objection raised to a position defended in the passage; the second states that defended position.",
            ]}
            correct="The first could be used to support a conclusion the author rejects; the second offers support for the author’s main conclusion."
            solution={
              <>
                <p>
                  Map the argument first, then classify the boldface:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Background: quality and price are correlated.</li>
                  <li>
                    Implication: improving quality can justify higher prices
                    (Bold 1).
                  </li>
                  <li>
                    Premise: improving quality incurs substantial costs
                    (grapes, tech, talent).
                  </li>
                  <li>
                    Intermediate conclusion: higher quality often reduces ROI
                    (Bold 2).
                  </li>
                  <li>
                    Main conclusion: it’s wrong to conclude that improving
                    quality boosts financial outcomes.
                  </li>
                </ul>
                <p>
                  Boldface 1 functions as support for a conclusion the author
                  argues against (that improving quality is financially good).
                  Boldface 2 is an intermediate conclusion that supports the
                  author’s main point.
                </p>
                <p className="font-semibold">Evaluate the choices:</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    A: Incorrect. Bold 2 is not the main conclusion; it’s an
                    intermediate conclusion.
                  </li>
                  <li>
                    B: Half-right. The first clause is okay, but again, the
                    second says Bold 2 is the main conclusion—nope.
                  </li>
                  <li>
                    C: Correct. Bold 1 supports a conclusion the author rejects;
                    Bold 2 supports the main conclusion.
                  </li>
                  <li>
                    D: Incorrect. Bold 1 isn’t a specific example; it’s a
                    general implication. Also, Bold 2 doesn’t “follow from” a
                    dubious claim.
                  </li>
                  <li>
                    E: Incorrect. Bold 1 supports an opposing conclusion, but
                    that’s not the same as stating an “objection.” Bold 2 is not
                    the author’s position itself; it supports it.
                  </li>
                </ul>
                <p>Answer: C.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: Don’t let similar-sounding boldface statements trick you
          into assigning them the same role. Start by locking in the author’s
          main conclusion, then trace which pieces support which side.
        </p>
      </article>
    </main>
  );
}