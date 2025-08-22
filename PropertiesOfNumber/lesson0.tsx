import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
  return <span role="math" aria-label={ariaLabel ?? expr} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "4. Properties of Numbers — 4.1 Introduction",
  description:
    "A concise roadmap to the Properties of Numbers chapter: integers, zero and one, parity, absolute value, signed numbers, factors and multiples, primes, LCM and GCF, divisibility, remainders, zeros, factorials, squares and cubes, terminating decimals, patterns, and evenly spaced sets.",
};

const topics: string[] = [
  "Integers",
  "Zero and one: what makes them special",
  "Even and odd numbers",
  "Absolute value",
  "Positive and negative numbers",
  "Factors and multiples",
  "Prime numbers",
  "Least common multiple (LCM) and greatest common factor (GCF)",
  "Divisibility",
  "Remainders and modular thinking",
  "Counting leading and trailing zeros in integers",
  "Factorials",
  "Perfect squares and perfect cubes",
  "Terminating decimals",
  "Common number patterns",
  "Evenly spaced sets and consecutive integers",
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12" aria-labelledby="page-title">
      <header className="mb-8">
        <h1 id="page-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">4.1 Introduction</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          This chapter serves as your map to foundational number concepts used throughout problem solving.
          We’ll briefly outline each focus area before diving deeper in later sections.
        </p>

        <MustKnow>
          Throughout this chapter we’ll use standard math notation. For example, the product of{" "}
          <Math expr="n" ariaLabel="n" /> consecutive integers is divisible by{" "}
          <Math expr="n!" ariaLabel="n factorial" />; and powers such as{" "}
          <Math expr="10^n" ariaLabel="ten to the n" /> appear in place-value and remainder discussions. If these
          symbols are new, don’t worry—we’ll introduce them as we go.
        </MustKnow>

        <section aria-labelledby="topics-title" className="space-y-4">
          <h3 id="topics-title" className="text-xl font-semibold text-white">
            What you’ll study in this chapter
          </h3>

          <ul className="list-disc space-y-2 pl-6">
            {topics.map((t) => (
              <li key={t} className="leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="how-to-use-title" className="space-y-3">
          <h3 id="how-to-use-title" className="text-xl font-semibold text-white">
            How to use this chapter
          </h3>
          <p>
            Skim the list above to locate any weak spots, then work through those sections first. Keep notes of
            definitions, small examples, and any rules you want handy—especially for topics such as divisibility,
            LCM/GCF, and remainders. As you progress, try to explain each idea in your own words to confirm true
            understanding.
          </p>
        </section>
      </article>
    </main>
  );
}