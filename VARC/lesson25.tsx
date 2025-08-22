import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.26 Inference Trap 5: Half‑Right | Reading Comprehension",
  description:
    "Learn to spot Half‑Right answer traps in GMAT inference questions: why they look tempting, how to test them, and how to confirm what the passage truly supports. Includes a full worked example with explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Reading Comprehension
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.26 Inference Trap 5: Half‑Right
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A Half‑Right answer includes one part that the passage truly supports
          and another part that goes beyond the text. These choices are designed
          to feel compelling because the “good half” sounds familiar. Your job
          is to verify that the entire choice is warranted—not just the portion
          that echoes the passage.
        </p>

        <MustKnow>
          Half‑Right answers combine a supported idea with an unsupported add‑on.
          Read every choice to the end and confirm that all claims are warranted
          by the passage. If any piece is not supported, the choice is out.
        </MustKnow>

        <p>
          Strategy checkpoint:
        </p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>
            Don’t stop evaluating once you see something the passage said—keep
            testing the rest of the statement.
          </li>
          <li>
            Distinguish “sounds plausible” from “is directly supported.” In an
            inference question, plausibility is not enough.
          </li>
        </ul>

        <MCQExample
          number={21}
          prompt="The passage describes Indigenous agricultural practices across North America (e.g., careful harvesting that keeps trees alive, intercropping such as the Three Sisters, and fertilizing with nutrient‑rich materials). Which statement is most clearly supported about their approach to plants?"
          options={[
            "They valued plants primarily to set an example for future farmers.",
            "Their respect for plants definitely extended to all other aspects of nature.",
            "They knew enough about plant biology to remove portions of a plant while keeping the plant alive.",
            "The Iroquois intercropped corn, beans, and squash chiefly to display their reverence for those plants.",
            "They outperformed most contemporary societies in agriculture because they embraced perennial cultivation.",
          ]}
          correct="They knew enough about plant biology to remove portions of a plant while keeping the plant alive."
          solution={
            <>
              <p>
                We’re asked what the passage supports about the people’s{" "}
                attitude and practices regarding plants. Scan for statements that
                are actually stated or that follow directly from the text.
              </p>

              <p>
                <strong>(A) Half‑Right trap.</strong> It’s true they valued
                plants, but the passage doesn’t claim their motivation was “to
                set an example for future farmers.” The purpose is invented.
              </p>

              <p>
                <strong>(B) Speculation.</strong> It might be true that their
                respect extended to all of nature, but the passage doesn’t make
                that claim. Inference questions require explicit support.
              </p>

              <p>
                <strong>(C) Correct.</strong> The text describes harvesting wood
                and bark in amounts that kept trees alive—clear evidence that
                they understood how to take from a plant without killing it.
              </p>

              <p>
                <strong>(D) Half‑Right trap.</strong> The Iroquois did plant
                corn, beans, and squash together, but the stated reason was
                agronomic synergy (support, nitrogen, shade)—not to showcase
                appreciation.
              </p>

              <p>
                <strong>(E) Half‑Right trap.</strong> The passage says they used
                perennial cultivation, but it never compares their overall
                agricultural success to “most other people of their time.”
              </p>

              <p>
                Therefore, the best supported statement is (C).
              </p>
            </>
          }
        />

        <p>
          Takeaway: Half‑Right choices work because the supported portion lowers
          your guard. Stay disciplined—check that every clause is justified by
          the passage before you commit.
        </p>
      </article>
    </main>
  );
}