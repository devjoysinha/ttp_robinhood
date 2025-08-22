import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.4 Information Finding — One of the Most Important RC Skills | Verbal",
  description:
    "A practical framework for quickly locating the right lines in Reading Comprehension passages. Learn to identify a question’s focus, pick high-signal keywords, and scan efficiently, with a worked example and must‑know tips.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Verbal Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.4 Information Finding — One of the Most Important RC Skills
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          For detail questions in Reading Comprehension, the right answer lives
          in the passage. The real skill is locating the exact sentence or two
          that answer the question—fast and reliably.
        </p>

        <MustKnow>
          Strong RC performance hinges on finding the precise lines that matter.
          You don’t need to “remember” the passage; you need to know how to
          navigate back to the correct spot on demand.
        </MustKnow>

        <p>At a high level, RC success leans on four pillars:</p>
        <ul className="ml-5 list-disc space-y-2 text-gray-300">
          <li>Grasp the passage’s structure and main ideas</li>
          <li>Understand what each question is truly asking</li>
          <li>Return to the passage to find the relevant lines</li>
          <li>Differentiate tempting traps from supported answers</li>
        </ul>

        <MustKnow>
          Everything you need to answer a detail question is in the passage.
          Building a repeatable way to find it is non‑negotiable.
        </MustKnow>

        <section aria-labelledby="step-1" className="space-y-3">
          <h3 id="step-1" className="text-xl font-semibold text-white">
            Step 1: Identify the focus of the question
          </h3>
          <p>
            Every detail-style question points to a target—an entity (person,
            group), a time, an event, a phenomenon, or some specific concept.
            Your first job is to name that target from the stem.
          </p>
          <p>Examples of identifying the focus:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              “According to the passage, which of the following is true of Asian
              elephants?” → Focus: Asian elephants
            </li>
            <li>
              “The passage suggests that mitochondria serve which purpose?” →
              Focus: the function(s) of mitochondria
            </li>
            <li>
              “According to the author, an astronomer gets the clearest images
              when…?” → Focus: conditions under which astronomers obtain the
              clearest images; look for the overlap of “astronomer” and
              “clearest images”
            </li>
          </ul>

          <MustKnow>
            Pinpoint the focus in the stem. If multiple ideas are named, aim for
            their intersection—the place where those ideas meet in the passage.
          </MustKnow>
        </section>

        <section aria-labelledby="step-2" className="space-y-3">
          <h3 id="step-2" className="text-xl font-semibold text-white">
            Step 2: Choose high-signal keywords to scan for
          </h3>
          <p>
            After naming the focus, pick the best keyword(s) to hunt for in the
            passage. The best keywords are narrow, distinctive, and easy to
            spot. Often you’ll find them in the stem; occasionally, a specific
            answer choice gives you the better keyword.
          </p>

          <MustKnow>
            Prefer keywords that are unique to the focus. Generic words (e.g.,
            “opinion,” “effect”) often appear everywhere and won’t take you to a
            single location.
          </MustKnow>

          <p>Reliable keyword types to prioritize:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Proper nouns: A capitalized name like “Barbara Brennan” is easy to
              scan and usually points to one tight region.
            </li>
            <li>
              Dates and years: A specific year (e.g., “1929”) zeroes in on the
              correct time slice.
            </li>
            <li>
              Technical terms: Domain language like “ribosomes” or “surface
              topography” often appears in only one section.
            </li>
          </ul>

          <MustKnow>
            Proper nouns, dates, and technical terms are high‑visibility
            keywords. Use them to land on the right paragraph quickly.
          </MustKnow>
        </section>

        <section aria-labelledby="step-3" className="space-y-3">
          <h3 id="step-3" className="text-xl font-semibold text-white">
            Step 3: Scan to the passage location and read precisely
          </h3>
          <p>
            With your keywords selected, scan the passage to the first relevant
            hit, then read closely. Let the local context confirm exactly what
            is—and isn’t—being claimed.
          </p>

          <MustKnow>
            Scan to your keyword, then zoom out a line or two as needed to get
            the full claim. Precision beats speed here—you’re gathering proof.
          </MustKnow>
        </section>

        <section aria-labelledby="example" className="space-y-4">
          <h3 id="example" className="text-xl font-semibold text-white">
            Worked example
          </h3>
          <p>
            Consider a passage that describes how, in the mid‑20th century,
            researchers frowned on anthropomorphism in animal studies. Jane
            Goodall, starting fieldwork in 1960, observed chimpanzees crafting
            simple tools to fish for termites. At that time, the prevailing
            belief was that only humans made tools. Later, in 1970, she reported
            behavior that suggested awe in front of a waterfall. Some critics
            called her conclusions anecdotal, but more recent empirical studies
            have supported many of her insights.
          </p>

          <MCQExample
            number={1}
            prompt="According to the passage, Goodall’s observation that chimpanzees make simple tools:"
            options={[
              "was recorded during her fieldwork in 1970",
              "established for the first time that termites are a major food source for chimpanzees",
              "was rejected by most scientists at the time",
              "overturned a widely accepted belief",
              "confirmed what many of her colleagues had long suspected",
            ]}
            correct="overturned a widely accepted belief"
            solution={
              <>
                <p>
                  Focus: “Goodall’s observation that chimpanzees make simple
                  tools.” Best keyword: “tools” (paired with “chimpanzees”).
                </p>
                <p>
                  In context, the passage explains that the scientific “common
                  wisdom” then was that humans alone made tools. Her finding
                  contradicted that belief. So the observation overturned a
                  widely accepted idea.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    1970 is linked to a later observation (waterfall/awe), not
                    toolmaking.
                  </li>
                  <li>
                    The text doesn’t claim the finding was about the importance
                    of termites in the diet.
                  </li>
                  <li>
                    The discovery “stunned” the scientific world; that’s not the
                    same as “most disputed it.”
                  </li>
                  <li>
                    It didn’t confirm prior suspicions; it showed the common
                    wisdom was wrong.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-3">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Wrap‑up
          </h3>
          <p>
            Treat detail questions as a navigation task: identify the focus,
            pick the best keywords, scan to the right lines, and read with care.
            With that workflow, you’ll consistently find the evidence you need
            and avoid trap answers that sound right but aren’t supported.
          </p>
        </section>
      </article>
    </main>
  );
}