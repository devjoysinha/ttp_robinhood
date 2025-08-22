import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

function KInline({ tex, aria }: { tex: string; aria?: string }) {
  const html = katex.renderToString(tex, { throwOnError: false });
  return <span aria-label={aria ?? tex} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "9.20 DS Rate Questions with Inequalities | Rate-Time-Distance",
  description:
    "A structured method for Data Sufficiency rate questions involving inequalities. Convert the stem to a single measure, align units, and test sufficiency. Includes four DS examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Rate Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.20 Data Sufficiency: Rate Inequalities
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          DS rate questions often ask whether a traveler’s distance, rate, or time is greater or
          less than a threshold. The statements may talk about a different measurement than the
          question stem. Your first job is to rewrite the question so everything speaks the same
          “language,” typically via the relationship{" "}
          <KInline tex="d = r \cdot t" aria="distance equals rate times time" />.
        </p>

        <MustKnow>
          If the question asks about one measure (distance, rate, or time) but the statements give
          another, rewrite the question using the defining formula so that the target matches the
          statements. Keep units consistent before checking sufficiency.
        </MustKnow>

        <section aria-labelledby="six-step">
          <h3 id="six-step" className="text-xl font-semibold text-white">
            A reliable 6-step playbook
          </h3>
          <ol className="list-inside list-decimal space-y-1 text-gray-300">
            <li>Write the exact inequality the question wants you to decide.</li>
            <li>
              If the target measure differs from the statements, replace it using{" "}
              <KInline tex="d=r t" /> or equivalent (e.g., <KInline tex="t=\dfrac{d}{r}" />,{" "}
              <KInline tex="r=\dfrac{d}{t}" />).
            </li>
            <li>Substitute any fixed values from the stem.</li>
            <li>Algebraically isolate the unknown in the same measure used by the statements.</li>
            <li>Convert all units so they match what the statements use.</li>
            <li>Evaluate each statement (alone, then together) for sufficiency.</li>
          </ol>
        </section>

        <section aria-labelledby="mini-example">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Warm‑up: convert the question to rate
          </h3>
          <p>
            Quinn drove for 4.5 hours. Was the trip’s distance less than 270 miles? Suppose the
            statements describe Quinn’s average speed.
          </p>
          <ul className="list-inside list-disc">
            <li>Statement (1): average speed was less than 55 mph.</li>
            <li>Statement (2): average speed was greater than 45 mph.</li>
          </ul>
          <p className="mt-2">
            Rephrase the stem using <KInline tex="d=r t" />: “Was{" "}
            <KInline tex="r \cdot 4.5 \lt 270" aria="r times 4.5 is less than 270" />?” This is
            equivalent to “Was <KInline tex="r \lt 60" aria="r is less than 60" /> mph?”
          </p>
          <ul className="list-inside list-disc">
            <li>
              (1) says <KInline tex="r \lt 55" /> → definitely YES to <KInline tex="r \lt 60" />.
              Sufficient.
            </li>
            <li>
              (2) says <KInline tex="r \gt 45" /> → could be 50 (YES) or 70 (NO). Not sufficient.
            </li>
          </ul>
          <p className="mt-1">Answer: A.</p>
        </section>

        <MustKnow>
          Keep your eye on the exact inequality you derive after rewriting. Once everything is in
          one measure and one unit system, sufficiency checks become quick comparisons.
        </MustKnow>

        <section aria-labelledby="ex35">
          <ExampleCard
            number={35}
            title="Distance limit with mixed units"
            statements={[
              "Kate ran a 120‑kilometer ultramarathon. Did she finish in less than 600 minutes? (1 mile = 1.6 kilometers)",
              "1) Her average speed was less than 9 miles per hour.",
              "2) Her average speed was greater than 8 miles per hour.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  Goal: “Was time &lt; 600 minutes?” Rewrite time via{" "}
                  <KInline tex="t = \dfrac{d}{r}" />. Plug in distance and convert units to mph:
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    <KInline tex="120\text{ km} = 75\text{ miles}" />
                  </li>
                  <li>
                    <KInline tex="600\text{ min} = 10\text{ hours}" />
                  </li>
                </ul>
                <p>
                  So, “Was <KInline tex="\dfrac{75\text{ mi}}{r} \lt 10\text{ h}" />?” ⇔ “Was{" "}
                  <KInline tex="r \gt 7.5\ \text{mph}" />?”
                </p>
                <p>
                  (1) <KInline tex="r \lt 9" /> mph → could be 6 (NO) or 8.5 (YES). Not sufficient.
                </p>
                <p>
                  (2) <KInline tex="r \gt 8" /> mph → definitely greater than 7.5 mph. Sufficient.
                </p>
                <p>Answer: B.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex36">
          <ExampleCard
            number={36}
            title="Fish crossing a pond"
            statements={[
              "A fish swims straight across a pond in 30 minutes. Was the distance more than 1 mile? (1 mile = 1.6 kilometers)",
              "1) The fish’s constant speed was less than 4 km/h.",
              "2) The fish’s constant speed was greater than 3 km/h.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Let <KInline tex="d=r t" />. We ask: “Is{" "}
                  <KInline tex="d \gt 1\text{ mile}" />?” Convert the threshold to km:{" "}
                  <KInline tex="1\text{ mile} = 1.6\text{ km}" />. Also{" "}
                  <KInline tex="30\text{ min} = 0.5\text{ h}" />. So the question becomes “Is{" "}
                  <KInline tex="r \cdot 0.5 \gt 1.6" />?” ⇔ “Is{" "}
                  <KInline tex="r \gt 3.2\ \text{km/h}" />?”
                </p>
                <p>
                  (1) <KInline tex="r \lt 4" /> → could be 3.1 (NO) or 3.9 (YES). Not sufficient.
                </p>
                <p>
                  (2) <KInline tex="r \gt 3" /> → could be 3.1 (NO) or 3.9 (YES). Not sufficient.
                </p>
                <p>
                  Together: <KInline tex="3 \lt r \lt 4" /> still straddles 3.2. Not sufficient.
                </p>
                <p>Answer: E.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex37">
          <ExampleCard
            number={37}
            title="Speed threshold across unit systems"
            statements={[
              "During his commute, was Lin’s average speed greater than 72 km/h? (Note: 1,000 meters = 1 kilometer)",
              "1) His average speed was less than 25 meters per second.",
              "2) His average speed was greater than 15 meters per second.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  Convert the target to m/s. We have{" "}
                  <KInline tex="72\ \text{km/h} = \dfrac{72{,}000\text{ m}}{3{,}600\text{ s}} = 20\ \text{m/s}" />
                  . So we are asking: “Is <KInline tex="v \gt 20\ \text{m/s}" />?”
                </p>
                <p>
                  (1) <KInline tex="v \lt 25\ \text{m/s}" /> → could be 18 (NO) or 24 (YES). Not
                  sufficient.
                </p>
                <p>
                  (2) <KInline tex="v \gt 15\ \text{m/s}" /> → could be 18 (NO) or 24 (YES). Not
                  sufficient.
                </p>
                <p>
                  Together: <KInline tex="15 \lt v \lt 25" /> still includes values on both sides of{" "}
                  <KInline tex="20" />. Not sufficient.
                </p>
                <p>Answer: E.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex38">
          <ExampleCard
            number={38}
            title="Back‑solving a distance threshold"
            statements={[
              "Mark finished a race in 45 minutes. Was his average speed greater than 3 m/s? (Note: 1,000 meters = 1 kilometer)",
              "1) The race distance was more than 9 kilometers.",
              "2) The race distance was more than 10 kilometers.",
            ]}
            correctLetter="D"
            solution={
              <>
                <p>
                  Turn the rate check into a distance threshold. With{" "}
                  <KInline tex="r \gt 3\ \text{m/s}" /> and <KInline tex="t=45\text{ min}" />, first
                  convert time to seconds and meters to kilometers:
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    <KInline tex="45\text{ min} = 2{,}700\text{ s}" />
                  </li>
                  <li>
                    <KInline tex="3\ \text{m} = 0.003\ \text{km}" />
                  </li>
                </ul>
                <p>
                  The threshold distance is{" "}
                  <KInline tex="(0.003\ \text{km/s})\cdot(2{,}700\ \text{s})=8.1\ \text{km}" />. So
                  the stem asks: “Was Mark’s distance &gt; 8.1 km?”
                </p>
                <p>(1) Distance &gt; 9 km ⇒ definitely &gt; 8.1 km. Sufficient.</p>
                <p>(2) Distance &gt; 10 km ⇒ also definitely &gt; 8.1 km. Sufficient.</p>
                <p>Each statement alone suffices. Answer: D.</p>
              </>
            }
          />
        </section>

        <p className="pt-2">
          Takeaway: translate the question into the measure used by the statements, normalize units,
          and compare against a single clean threshold. Most of the work is in the setup; the
          sufficiency checks then become simple.
        </p>
      </article>
    </main>
  );
}