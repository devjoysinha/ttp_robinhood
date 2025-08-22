import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.33 Strategy for Application Questions | Reading Comprehension",
  description:
    "A concise 4‑step method for GMAT RC Application questions. Learn how to map ideas from the passage to new situations, avoid word‑matching traps, and practice with a fully worked example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.33 A Method for Tackling Application Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Application questions ask you to use an idea from the passage in a new
          setting. The correct option won’t be a sentence quoted from the
          passage; instead, it will show the same logic, mechanism, or
          relationship applied elsewhere.
        </p>

        <section aria-labelledby="four-step-method">
          <h3 id="four-step-method" className="text-xl font-semibold text-white">
            A compact 4‑step method
          </h3>
          <ol className="ml-5 list-decimal space-y-2">
            <li>
              Read the question stem to find the focal idea (a person, concept,
              process, or claim) the answer must connect to.
            </li>
            <li>
              Identify how the answer must relate to that focus (example,
              consequence, analogous relationship, etc.).
            </li>
            <li>
              Revisit the passage to understand what’s true about that focus:
              how it works, what it causes, what it requires, or how it’s
              defined.
            </li>
            <li>
              Choose the option that matches the required relationship and
              preserves the passage’s meaning—no more, no less.
            </li>
          </ol>
        </section>

        <MustKnow>
          Application questions reward idea‑matching, not word‑matching. Lock
          onto what the passage says about the focus, then select the choice
          that shows that same idea operating in a new scenario. If the
          relationship can’t be mapped cleanly, or it’s one‑sided when the
          passage requires two‑sided, eliminate it.
        </MustKnow>

        <section aria-labelledby="mini-demo">
          <h3 id="mini-demo" className="text-xl font-semibold text-white">
            Mini demo: mapping a definition to an example
          </h3>
          <p>
            Suppose a passage defines mutualism as a biological interaction in
            which each species benefits from the other. The correct application
            will show a two‑way benefit: both partners gain. A tempting but
            wrong option would show only one species gaining while the other is
            unaffected.
          </p>
        </section>

        <MCQExample
          number={27}
          prompt="Which option best illustrates intercropping as described in a passage that defines it as planting multiple crops together so that each crop’s traits help the others grow and reduce land damage?"
          options={[
            "Planting garlic between fruit trees; the garlic deters pests that harm trees, and the trees' canopy moderates soil moisture, helping the garlic thrive.",
            "Bordering crop fields with wildflowers to attract pollinators that boost yields.",
            "Packing a single large‑leaf crop tightly so its leaves shade the ground and reduce evaporation.",
            "Growing a different crop in the same field each year to maintain soil quality.",
            "Planting tall trees as windbreaks along a field’s perimeter to protect the crops from strong winds.",
          ]}
          correct="Planting garlic between fruit trees; the garlic deters pests that harm trees, and the trees' canopy moderates soil moisture, helping the garlic thrive."
          solution={
            <>
              <p>
                We’re asked to find an application of the passage’s intercropping
                idea: multiple crops grown together, where characteristics of
                each crop actively help the others.
              </p>
              <p>
                The first option shows two crops planted together with
                reciprocal benefits: garlic repels pests that would damage the
                trees, and the trees help manage the micro‑environment (shade /
                moisture) to support the garlic. This mirrors the defined
                two‑way synergy, so it fits.
              </p>
              <p>
                The other options fail one or more requirements: they either
                don’t plant multiple crops together (single‑crop shading),
                aren’t truly interplanted (border plantings / perimeter
                windbreaks), or don’t describe mutual, crop‑to‑crop assistance
                (benefit goes only one way or relies on animals/tools rather than
                crop traits helping each other).
              </p>
              <p>
                Thus, the interplanted garlic and fruit trees scenario is the
                best example of intercropping as defined.
              </p>
            </>
          }
        />

        <section aria-labelledby="pitfalls">
          <h3 id="pitfalls" className="text-xl font-semibold text-white">
            Common pitfalls to avoid
          </h3>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Word‑match traps: Shared phrases with the passage but missing the
              required relationship.
            </li>
            <li>
              One‑way help when a two‑way interaction is required (e.g., mutual
              benefit).
            </li>
            <li>
              Outside‑scope add‑ons: Details that go beyond what the passage
              authorizes about the focus.
            </li>
            <li>
              Ignoring the stem’s instruction (example vs. result vs. analogy).
            </li>
          </ul>
        </section>

        <p className="text-gray-300">
          Bottom line: extract the passage’s idea precisely, then carry that
          idea into the answer choices. The right choice won’t look like the
          passage—it will behave like it.
        </p>
      </article>
    </main>
  );
}