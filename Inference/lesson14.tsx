import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.6.5 Real‑World‑True Answers Not Backed by the Passage | Inference",
  description:
    "Learn to spot answer choices that are true in real life but not supported by the prompt. Includes two must‑infer multiple‑choice examples with full reasoning and a quick math check rendered with KaTeX.",
};

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className="whitespace-nowrap"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. Inference</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.5 Answers That Are True in the Real World but Not Supported by the Stimulus
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Inference questions, a common trap is an answer that sounds sensible in everyday life
          yet isn’t actually guaranteed by what the passage says. Your job is not to pick what’s
          plausible or likely; it’s to select what must follow from the given statements alone.
        </p>

        <MustKnow>
          Don’t reward “truthy” answers that lean on outside knowledge. An option is correct only if
          it’s entailed by the stimulus. If you need real‑world assumptions to make it work, it’s a trap.
        </MustKnow>

        <section aria-labelledby="ex-21">
          <h3 id="ex-21" className="sr-only">
            Example 21
          </h3>

          <MCQExample
            number={21}
            prompt={
              <>
                Fitness Factory, a local gym, recently began advertising to office workers in the
                neighboring high‑rises. Since then, its sales revenue has risen substantially, while
                its profits have dropped sharply. If all of the above is true, which of the following
                must be true?
              </>
            }
            options={[
              "New members from the outreach use far more free amenities than the typical member.",
              "The gym’s expenses have increased since it launched the outreach.",
              "Most of the new revenue has been from selling personal‑training packages.",
              "Management recently made several poor decisions that caused profits to collapse.",
              "After starting the outreach, the gym stopped every other form of marketing.",
            ]}
            correct="The gym’s expenses have increased since it launched the outreach."
            solution={
              <>
                <p className="mb-2">
                  Translate the financial relationship using the identity{" "}
                  <MathInline expr="\\text{profit} = \\text{revenue} - \\text{expenses}" ariaLabel="profit equals revenue minus expenses" />.
                  We’re told revenue increased but profit decreased. For profit to fall while revenue rises,
                  expenses must have gone up by enough to more than offset the revenue gain. Therefore,
                  the statement about higher expenses must be true.
                </p>
                <p className="mb-2">
                  Why the others are out:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Heavy amenity usage by new members could be a factor, but the stimulus doesn’t say so.
                  </li>
                  <li>
                    Personal training might drive revenue in real life, but the source of the revenue increase isn’t specified.
                  </li>
                  <li>
                    “Bad decisions” is mere speculation; no cause is given.
                  </li>
                  <li>
                    We’re told nothing about the fate of other marketing channels.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Notice how tempting real‑world narratives can be. We often “fill in the blanks” with what
          we’ve seen or experienced. For Inference, resist that impulse—stick to what’s locked down by
          the text.
        </p>

        <section aria-labelledby="ex-22">
          <h3 id="ex-22" className="sr-only">
            Example 22
          </h3>

          <MCQExample
            number={22}
            prompt={
              <>
                A “Use by” date indicates the last calendar day on which a food item should be eaten.
                A “Sell by” date is the last day a store should offer the item for sale, and in most
                cases the food remains fine to consume for some time after that date. Still, many
                shoppers who don’t understand this distinction throw out food as soon as they notice
                that its “Sell by” date has passed. If the statements above are true, which of the
                following can be properly inferred?
              </>
            }
            options={[
              "Often, foods with a “Use by” date remain good for consumption after that date.",
              "Whenever both dates appear, the “Sell by” date always precedes the “Use by” date.",
              "People generally pay more attention to “Use by” dates than to “Sell by” dates.",
              "Applying “Sell by” labels sometimes causes edible food to be discarded.",
              "Shoppers frequently rely on “Sell by” dates to judge freshness while buying.",
            ]}
            correct="Applying “Sell by” labels sometimes causes edible food to be discarded."
            solution={
              <>
                <p className="mb-2">
                  The passage tells us that in most cases food is still OK after the “Sell by” date,
                  and that many people discard such food when that date has passed. That combination
                  implies that, at least in some instances, edible food is thrown away because of the
                  “Sell by” labeling. So the statement that this sometimes leads to waste must be true.
                </p>
                <p className="mb-2">
                  Why the others are out:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    The passage doesn’t claim “Use by” foods are often fine after that date.
                  </li>
                  <li>
                    “Always precedes” is too strong; edge cases could tie or differ.
                  </li>
                  <li>
                    Relative attention to the two labels isn’t discussed.
                  </li>
                  <li>
                    Shoppers may use dates for freshness, but that behavior isn’t established here.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <MustKnow>
          The correct inference must be inevitable given the text. “Often” implies “sometimes,” but
          not vice versa; be precise about quantifiers. When in doubt, test whether an answer still
          holds if you imagine edge cases consistent with the stimulus.
        </MustKnow>

        <p className="pt-2">
          Up next, we’ll look at Inference questions that include the word “Except,” and how to adjust
          your strategy when four choices must be supported and one is not.
        </p>
      </article>
    </main>
  );
}