import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX SSR helper
import katex from "katex";
import "katex/dist/katex.min.css";

function KInline({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    output: "html",
  });
  return (
    <div
      role="math"
      aria-label={children}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: '17.10.1 The "At Least One" Shortcut | Probability',
  description:
    'Master the fastest way to compute “at least one” probabilities using complements. Includes a quick coin‑flip walkthrough and two multiple‑choice practice problems with full solutions.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.10.1 The special case of “at least one”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Problems that ask for the chance that something happens “at least one” time
          can explode into many cases if you try to count 1, or 2, or 3, … successes directly.
          A faster route is to count the opposite event—“none”—and subtract from 1.
        </p>

        <p>
          For example, suppose a fair coin is tossed 5 times. What’s the probability
          of getting at least one head? Instead of summing five separate scenarios,
          compute the complement:
        </p>

        <KBlock>
          {String.raw`P(\text{at least one head in 5}) \;=\; 1 - P(\text{zero heads in 5})`}
        </KBlock>

        <p>
          The only way to get zero heads in five fair flips is to get tails every time:
          <KInline>{String.raw`P(\text{all tails}) = \left(\tfrac{1}{2}\right)^5 = \tfrac{1}{32}`}</KInline>.
          Therefore,
        </p>

        <KBlock>
          {String.raw`
            P(\text{at least one head in 5})
            \;=\; 1 - \left(\tfrac{1}{2}\right)^5
            \;=\; 1 - \tfrac{1}{32}
            \;=\; \tfrac{31}{32}
          `}
        </KBlock>

        <MustKnow>
          When a problem asks for “at least 1,” think complements first:
          <span className="ml-2 font-semibold">
            <KInline>
              {String.raw`P(\text{at least one}) = 1 - P(\text{none})`}
            </KInline>
          </span>
          . This avoids summing many cases and is usually the quickest, cleanest path.
        </MustKnow>

        <p className="pt-2">
          Below are two quick checks to practice the complement shortcut. Each solution
          shows how to convert “at least one” into “none” and finish in one line.
        </p>

        <MCQExample
          number={46}
          prompt={
            <>
              A jar holds 10 blue, 5 yellow, and 5 red marbles. One marble is drawn,
              replaced, and this repeats for 3 draws. What is the probability that
              at least one red marble is selected?
            </>
          }
          options={[
            String.raw`\tfrac{1}{4}`,
            String.raw`\tfrac{3}{4}`,
            String.raw`\tfrac{37}{64}`,
            String.raw`\tfrac{35}{64}`,
            String.raw`\tfrac{27}{64}`,
          ]}
          correct={String.raw`\tfrac{37}{64}`}
          renderOption={(opt) => <KInline>{opt}</KInline>}
          solution={
            <>
              <p>
                With replacement, the probability of red on any draw is
                <KInline>{String.raw`\; \tfrac{5}{20} = \tfrac{1}{4}`}</KInline>,
                so “not red” is
                <KInline>{String.raw`\; \tfrac{3}{4}`}</KInline>.
              </p>
              <p>
                “At least one red” equals
                <KInline>{String.raw`\; 1 - P(\text{no red in 3 draws})`}</KInline>.
                Since draws are independent:{" "}
                <KInline>
                  {String.raw`P(\text{no red}) = \left(\tfrac{3}{4}\right)^3 = \tfrac{27}{64}`}
                </KInline>
                . Thus,
                <KInline>
                  {String.raw`\; P(\ge 1\text{ red}) = 1 - \tfrac{27}{64} = \tfrac{37}{64}`}
                </KInline>
                .
              </p>
            </>
          }
        />

        <MCQExample
          number={47}
          prompt={
            <>
              A student is absent on any given day with probability
              <KInline>{String.raw`\; \tfrac{1}{5}`}</KInline>. Over 4 days,
              what is the probability the student is absent on at least one day?
            </>
          }
          options={[
            String.raw`\tfrac{101}{625}`,
            String.raw`\tfrac{128}{625}`,
            String.raw`\tfrac{256}{625}`,
            String.raw`\tfrac{331}{625}`,
            String.raw`\tfrac{369}{625}`,
          ]}
          correct={String.raw`\tfrac{369}{625}`}
          renderOption={(opt) => <KInline>{opt}</KInline>}
          solution={
            <>
              <p>
                Let “absent” be
                <KInline>{String.raw`\; \tfrac{1}{5}`}</KInline>, so “not absent” is
                <KInline>{String.raw`\; \tfrac{4}{5}`}</KInline>.
              </p>
              <p>
                “At least one absence” equals
                <KInline>{String.raw`\; 1 - P(\text{no absences in 4 days})`}</KInline>.
                Independence gives{" "}
                <KInline>
                  {String.raw`P(\text{no absences}) = \left(\tfrac{4}{5}\right)^4 = \tfrac{256}{625}`}
                </KInline>
                , so
                <KInline>
                  {String.raw`\; P(\ge 1\text{ absence}) = 1 - \tfrac{256}{625} = \tfrac{369}{625}`}
                </KInline>
                .
              </p>
            </>
          }
        />

        <p>
          Takeaway: whenever you see “at least one,” first check whether counting the
          complement “none” is straight‑forward—if it is, you’ll finish in a single step.
        </p>
      </article>
    </main>
  );
}