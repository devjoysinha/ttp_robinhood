import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "6.3 Note Where Different Types of Information Appear | Data Insights (MSR)",
  description:
    "Learn how to quickly locate information across tabs in Multi‑Source Reasoning. Use labels, titles, and intros to map content. Includes two MSR practice questions with full, step‑by‑step solutions.",
};

// Simple SSR KaTeX helper.
// Make sure to include KaTeX CSS globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
function K(props: { math: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(props.math, {
    throwOnError: false,
    displayMode: !!props.block,
    strict: "ignore",
  });
  return (
    <span
      role="img"
      aria-label={props.ariaLabel || props.math}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.3 Note Where Different Types of Information Appear (Multi‑Source Reasoning)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Multi‑Source Reasoning (MSR), speed comes from knowing exactly where to look.
          Each question typically pulls facts from different places, so your first job is
          to build a quick mental map of what lives on each tab or panel.
        </p>

        <MustKnow>
          Efficient MSR work starts with location, not calculation. If you can point to
          the tab or section that contains a given fact without hunting, you’ll protect
          your time and reduce mistakes.
        </MustKnow>

        <p>
          You don’t need to memorize every detail on the first pass. Instead, scan for
          structure and anchors that tell you what type of content each tab holds.
        </p>

        <MustKnow>
          As you skim the prompt, pay attention to how information is labeled or introduced:
          tab titles, section headers, table/graph titles, and opening sentences. These cues
          quickly tell you where definitions, counts, rules, and results are stored.
        </MustKnow>

        <p>Common anchors to notice as you preview:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Tab titles and subtitles that signal purpose (e.g., Overview, Participants, Results)
          </li>
          <li>Chart/table titles that reveal the exact measure being reported</li>
          <li>Introductory blurbs that summarize scope, timing, or constraints</li>
        </ul>

        <MustKnow>
          After your initial scan, you should be able to say something like:
          “Background on the study? Overview tab. Who’s in the sample? Participants tab.
          Outcomes or proportions? Results tab.”
        </MustKnow>

        <p>Now, put the approach to work on two practice items.</p>

        <MCQExample
          number={4}
          prompt="According to the prompt about the volpins study, which value is the largest?"
          options={[
            "The greatest weight of meat eaten by any single volpin",
            "The unrelated male’s combined weight of meat and blueberries",
            "The greatest weight of blueberries eaten by any single volpin",
            "The female offspring’s weight of water consumed",
            "The unrelated female’s combined weight of meat and blueberries",
          ]}
          correct="The female offspring’s weight of water consumed"
          // Paraphrased, step-by-step solution with KaTeX where calculations are shown.
          solution={
            <>
              <p className="mb-2">
                Map the data first: quantities offered (1 kg blueberries, 1 kg meat,
                2 kg water) live on the experiment/setup tab, while the proportions by
                participant live on the results tab. We’ll combine those.
              </p>

              <p className="mt-3 font-semibold text-white">Option A</p>
              <p>
                Meat total is 1 kg. The largest single share of meat is 39.2%.
                So the max meat by one volpin is{" "}
                <K math="39.2\% \times 1\,\text{kg} = 0.392\,\text{kg}" ariaLabel="39.2 percent times 1 kilogram equals 0.392 kilograms" />.
              </p>

              <p className="mt-3 font-semibold text-white">Option B</p>
              <p>
                Unrelated male: meat 11.9% of 1 kg and blueberries 19.4% of 1 kg.
                Total is{" "}
                <K math="0.119 + 0.194 = 0.313\,\text{kg}" ariaLabel="0.119 plus 0.194 equals 0.313 kilograms" />.
                This is less than 0.392 kg from option A.
              </p>

              <p className="mt-3 font-semibold text-white">Option C</p>
              <p>
                Blueberries total is 1 kg. The largest single share of blueberries
                is 30.2%, which is{" "}
                <K math="30.2\% \times 1\,\text{kg} = 0.302\,\text{kg}" ariaLabel="30.2 percent times 1 kilogram equals 0.302 kilograms" />.
                Still below 0.392 kg.
              </p>

              <p className="mt-3 font-semibold text-white">Option D</p>
              <p>
                Water total is 2 kg. The female offspring drinks 24.2% of it:
                {" "}
                <K math="24.2\% \times 2\,\text{kg} = 0.484\,\text{kg}" ariaLabel="24.2 percent times 2 kilograms equals 0.484 kilograms" />.
                This exceeds 0.392 kg, so D is now the leader.
              </p>

              <p className="mt-3 font-semibold text-white">Option E</p>
              <p>
                Unrelated female: blueberries 22.5% of 1 kg and meat 17.4% of 1 kg.
                Total is{" "}
                <K math="0.225 + 0.174 = 0.399\,\text{kg}" ariaLabel="0.225 plus 0.174 equals 0.399 kilograms" />{" "}
                which is less than 0.484 kg.
              </p>

              <p className="mt-3">
                The greatest value is the female offspring’s water intake. Answer: D.
              </p>
            </>
          }
        />

        <MCQExample
          number={5}
          prompt="After 4 weeks in the cold‑shower study, how many people in Group Y said they were likely to take a cold shower the next day?"
          options={["25", "30", "36", "49", "147"]}
          correct="49"
          solution={
            <>
              <p className="mb-2">
                From the initial tab, Group Y has 60 people. The subgroups tab says
                Group Y was split evenly into three subgroups, so each subgroup has{" "}
                <K math="60 \div 3 = 20" ariaLabel="sixty divided by three equals twenty" /> participants.
              </p>

              <p>
                The results table gives the “Yes” percentages for the three Group Y
                subgroups:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cold showers only:{" "}
                  <K math="75\% \times 20 = 15" ariaLabel="seventy five percent of twenty equals fifteen" />.
                </li>
                <li>
                  Articles only:{" "}
                  <K math="90\% \times 20 = 18" ariaLabel="ninety percent of twenty equals eighteen" />.
                </li>
                <li>
                  Cold showers + articles:{" "}
                  <K math="80\% \times 20 = 16" ariaLabel="eighty percent of twenty equals sixteen" />.
                </li>
              </ul>

              <p className="mt-2">
                Total who said “Yes” in Group Y is{" "}
                <K math="15 + 18 + 16 = 49" ariaLabel="fifteen plus eighteen plus sixteen equals forty nine" />.
                Answer: 49.
              </p>
            </>
          }
        />

        <p>
          Takeaway: build a quick index of the prompt on your first read. Titles and
          intros tell you where things live. Then, when the question arrives, jump
          straight to the relevant tab(s) and combine details with minimal scrolling.
        </p>
      </article>
    </main>
  );
}