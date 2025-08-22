import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "3.20 Inference Questions | Reading Comprehension",
  description:
    "Understand what an inference means in RC, how it differs from CR, and how to recognize common inference stems. Learn to pick answers that are logically supported by the passage without being explicitly stated.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken, and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.20 Inference Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inference questions appear frequently in Reading Comprehension. Your
          task is to choose a statement that follows logically from what the
          passage communicates, even though that statement is not written verbatim.
        </p>

        <p>
          Put another way, an inference is a reasonable conclusion that the
          passage points to. Since it’s not quoted in the text, you must combine
          what’s stated and then read between the lines—carefully.
        </p>

        <p>
          Keep in mind that you won’t find the correct answer copied from the
          passage. You’ll use the author’s words as evidence to support an
          unstated, but justified, takeaway.
        </p>

        <MustKnow>
          The right answer in an RC Inference question is supported by the
          passage but is not explicitly written in the passage.
        </MustKnow>

        <p>
          If you’ve studied Critical Reasoning (CR) inference questions, note a
          subtle difference. In CR, correct inferences generally must be true
          given the premises. In RC, the correct answer is often the option that
          is best supported by the passage—strongly suggested, even if not
          absolutely guaranteed by formal logic.
        </p>

        <MustKnow>
          For RC, prioritize what the text logically supports, not what must be
          true beyond any doubt. Look for the option most consistent with the
          author’s statements.
        </MustKnow>

        <p>
          Inference stems are highly predictable. They often use verbs like
          “infer,” “suggest,” or “imply,” and they all ask what conclusion
          sensibly follows from the passage. Examples include:
        </p>

        <ul className="ml-6 list-disc space-y-2">
          <li>
            Which of the following is most supported by the passage regarding
            people who exercise at least 60 minutes per day on five or more days
            a week?
          </li>
          <li>
            Based on the passage, which statement about the process powering the
            Sun is most reasonable?
          </li>
          <li>
            The passage suggests which of the following about animals’ capacity
            to keep track of quantities?
          </li>
          <li>
            The author implies that if Komodo dragons had lived on additional
            islands, their salivary microbiome would most likely resemble which
            of the following?
          </li>
          <li>
            As presented, Miller’s research most strongly supports which view of
            educational technology in elementary classrooms?
          </li>
          <li>
            The author’s discussion indicates that which factor best explains
            the divergence of views between certain southern governors and
            northern senators?
          </li>
          <li>
            The author implies that Ritter’s portrayal of Shaka Zulu is best
            described as which of the following?
          </li>
          <li>
            It can be inferred that the author holds which belief about the
            roots of the Protestant work ethic?
          </li>
        </ul>

        <p>
          Notice that some stems avoid the word “infer” entirely. Whether they
          say “suggests,” “implies,” or use similar phrasing, they all want the
          same thing: a conclusion that follows from what the author has told
          you.
        </p>

        <MustKnow>
          Regardless of the wording, all inference stems ask: What conclusion is
          warranted by the passage?
        </MustKnow>

        <p>
          Up next, we focus on recognizing what correct inference answers look
          like and how to eliminate common traps.
        </p>
      </article>
    </main>
  );
}