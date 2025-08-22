import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.12 Read High‑Quality Publications for Supplemental Practice | GMAT RC",
  description:
    "Build GMAT Reading Comprehension strength by routinely reading high‑level books, magazines, and newspapers. What to read, how to read for retention and structure, and why it’s supplemental to RC‑specific practice.",
};

const nonfictionHistory = [
  {
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    note: "A sweeping biography of a key U.S. founder and policy thinker.",
  },
  {
    title: "Frederick Douglass: Prophet of Freedom",
    author: "David Blight",
    note: "Life of an influential abolitionist and reformer.",
  },
  {
    title: "Collapse: How Societies Choose to Fail or Succeed",
    author: "Jared Diamond",
    note: "Case studies on societal failures and lessons learned.",
  },
  {
    title: "The Warmth of Other Suns",
    author: "Isabel Wilkerson",
    note: "Narrative history of the Great Migration and its impact.",
  },
];

const nonfictionScience = [
  {
    title:
      "Transcendence: How Humans Evolved through Fire, Language, Beauty, and Time",
    author: "Gaia (Gala) Vince",
    note: "Explores pivotal forces shaping human progress.",
  },
  {
    title: "Einstein’s Unfinished Revolution",
    author: "Lee Smolin",
    note: "A critique of quantum mechanics and alternate viewpoints.",
  },
  {
    title:
      "A World Beyond Physics: The Emergence and Evolution of Life",
    author: "Stuart Kauffman",
    note: "Life’s complexity beyond purely physical explanations.",
  },
  {
    title: "Our Universe: An Astronomer’s Guide",
    author: "Jo Dunkley",
    note: "Clear primer on cosmic structure and history.",
  },
];

const nonfictionBusiness = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    note: "How cognitive systems drive judgment and decisions.",
  },
  {
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    note: "Rare events and why we misread probabilities.",
  },
  {
    title: "This Is Marketing",
    author: "Seth Godin",
    note: "Value creation through empathy and connection.",
  },
  {
    title: "The Innovator’s Dilemma",
    author: "Clayton Christensen",
    note: "Why disruption blinds successful firms and how to respond.",
  },
];

const fiction = [
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    note: "A classic noted for its humor, pathos, and narrative complexity.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    note: "A concise meditation on ambition, identity, and loss.",
  },
  {
    title: "Catch‑22",
    author: "Joseph Heller",
    note: "Satire with layered structure and shifting perspectives.",
  },
];

const publications = [
  "Smithsonian",
  "BBC History",
  "Life Magazine",
  "The Economist",
  "The New York Times",
  "The New Yorker",
  "Archaeology Magazine",
  "Science (AAAS)",
  "Scientific American",
  "ScienceDaily",
  "Astronomy Magazine",
  "American Scientist",
  "The Atlantic",
  "Physics Today",
  "The Wall Street Journal",
  "Harvard Business Review",
  "Harvard Magazine",
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to GMAT Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.12 Read High‑Quality Publications for Supplemental Practice
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Strong Reading Comprehension flows from strong reading. If you regularly
          engage with sophisticated prose, you’ll process passages more quickly, retain
          more, and follow complex arguments with less effort on test day.
        </p>

        <MustKnow>
          Consistent exposure to high‑level, GMAT‑like writing sharpens speed, retention,
          and structural awareness. Start the habit now—the sooner you begin, the more it
          pays off by exam day.
        </MustKnow>

        <section aria-labelledby="how-to-read-well">
          <h3 id="how-to-read-well" className="text-xl font-semibold text-white">
            How to Read for Growth (Not for Distraction)
          </h3>
          <p>
            Quality matters. Put away the phone and choose demanding sources written in
            polished, nuanced English. Read actively and without interruptions.
          </p>
        </section>

        <section aria-labelledby="nonfiction">
          <h3 id="nonfiction" className="text-xl font-semibold text-white">
            Nonfiction: Closest to GMAT RC
          </h3>
          <p>
            RC passages are nonfiction. Stretch yourself by exploring topics that aren’t
            already familiar—science, economics, history, or business. A few ideas:
          </p>

          <div className="grid gap-6 md:grid-cols-2" role="list">
            <div>
              <h4 className="mb-2 font-semibold text-gray-100">History</h4>
              <ul className="list-disc space-y-2 pl-5">
                {nonfictionHistory.map((b) => (
                  <li key={b.title}>
                    <span className="text-gray-100">{b.title}</span> — {b.author}
                    <span className="block text-sm text-gray-400">{b.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-gray-100">Science</h4>
              <ul className="list-disc space-y-2 pl-5">
                {nonfictionScience.map((b) => (
                  <li key={b.title}>
                    <span className="text-gray-100">{b.title}</span> — {b.author}
                    <span className="block text-sm text-gray-400">{b.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-2 mt-4 font-semibold text-gray-100">Business</h4>
              <ul className="list-disc space-y-2 pl-5">
                {nonfictionBusiness.map((b) => (
                  <li key={b.title}>
                    <span className="text-gray-100">{b.title}</span> — {b.author}
                    <span className="block text-sm text-gray-400">{b.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4">
            The goal isn’t to memorize facts, but to build comfort with dense exposition,
            technical vocabulary, and layered argumentation—the same skills RC rewards.
          </p>
        </section>

        <section aria-labelledby="fiction">
          <h3 id="fiction" className="text-xl font-semibold text-white">
            Fiction: Helpful for Inference and Tone
          </h3>
          <p>
            Although GMAT passages are nonfiction, literary reading can still boost your
            comprehension. Complex fiction sharpens sensitivity to tone, perspective, and
            implied meaning—useful for inference and author‑attitude questions.
          </p>

          <MustKnow>
            Literary reading can heighten your ability to detect tone and subtext—both of
            which show up in GMAT RC questions.
          </MustKnow>

          <ul className="mt-3 list-disc space-y-2 pl-5">
            {fiction.map((b) => (
              <li key={b.title}>
                <span className="text-gray-100">{b.title}</span> — {b.author}
                <span className="block text-sm text-gray-400">{b.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="periodicals">
          <h3 id="periodicals" className="text-xl font-semibold text-white">
            Magazines and Newspapers: Daily RC Reps
          </h3>
          <p>
            High‑quality periodicals offer compact, RC‑like articles across science,
            social science, arts, and business. Rotate a few each week to keep content
            varied and challenging.
          </p>

          <ul className="columns-1 gap-6 pl-5 md:columns-2 lg:columns-3">
            {publications.map((p) => (
              <li key={p} className="mb-2 list-disc">
                {p}
              </li>
            ))}
          </ul>

          <MustKnow>
            Treat these readings as a supplement—not a replacement—for targeted GMAT RC
            practice. You still need dedicated work on question types and timing.
          </MustKnow>
        </section>

        <section aria-labelledby="how-to-practice">
          <h3 id="how-to-practice" className="text-xl font-semibold text-white">
            How to Read Like a Test‑Taker
          </h3>
          <p className="mb-2">
            Use every article as a mini RC drill. Focus on structure, purpose, and key
            takeaways—not just the topic.
          </p>
          <ul className="list-decimal space-y-2 pl-6">
            <li>
              Retention check: after each paragraph, say one clear sentence that captures
              what it did.
            </li>
            <li>
              Purpose check: explain why the author included that paragraph and how it
              connects to what came before.
            </li>
            <li>
              Synthesis: when you finish, state the main point and the author’s stance in
              your own words.
            </li>
          </ul>
          <p className="mt-2">
            Level up by “teaching” what you read—summarize it to a friend or record a
            quick voice note and play it back. If your explanation is fuzzy, revisit the
            text and refine.
          </p>
        </section>

        <section aria-labelledby="getting-started">
          <h3 id="getting-started" className="text-xl font-semibold text-white">
            Getting Started This Week
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Pick 2–3 periodicals and read one article from each per day.</li>
            <li>
              Add one nonfiction book in a weaker subject area and read a short section
              nightly.
            </li>
            <li>
              Practice the retention–purpose–synthesis routine and summarize out loud.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}