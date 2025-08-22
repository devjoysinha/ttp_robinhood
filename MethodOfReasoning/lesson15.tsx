import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title:
    "12.5.5 Why Boldface Questions Are Tricky | Critical Reasoning",
  description:
    "Learn the common traits that make Boldface Critical Reasoning questions difficult: hidden conclusions, misleading bolded text, multiple conclusions, and tempting partial‑credit answers. Get a clear checklist to navigate them.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12" id="main-content">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.5 Common Traits of Boldface Questions That Make Them Hard to Answer
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          If Boldface prompts were arranged like straightforward “Weaken” arguments—
          background, a couple of premises, and a tidy conclusion at the end—pinpointing
          the role of each sentence would be simple. But Boldface passages rarely follow
          that predictable flow. Their wording and structure often disguise what each
          statement is doing, and the answer choices are crafted to blur the lines even more.
          To get these right, you have to track details carefully, read in context,
          and keep a precise map of how each part functions within the argument.
        </p>

        <MustKnow>
          Success on Boldface questions hinges on labeling roles, not just content.
          Keep a running map of premises, intermediate conclusions, and the author’s
          main conclusion. Expect the wording and placement of bolded text to mislead,
          and verify each answer choice against your role map—every part must match.
        </MustKnow>

        <section aria-labelledby="why-tricky">
          <h3 id="why-tricky" className="text-xl font-semibold text-white">
            Why Boldface questions feel tricky
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Conclusions are easy to miss. They may be understated, embedded mid‑passage,
              or phrased without classic conclusion markers.
            </li>
            <li>
              The bolded segments can be worded or positioned to resemble a different role
              (for example, sounding like evidence when they’re actually a counterclaim).
            </li>
            <li>
              Passages often include more than one conclusion, sometimes with separate
              support, which makes role‑labeling more delicate.
            </li>
            <li>
              Wrong answers frequently include statements that are partially correct or closely
              related to the truth, but not a perfect description of the roles.
            </li>
          </ul>
        </section>

        <p>
          We’ll break down each of these pitfalls in the next sections. As you read, keep
          practicing the habit of marking what each sentence is doing in the argument—
          claim, support, opposing view, author’s judgment, and so on. That role map is your
          compass for picking the one answer that matches every detail.
        </p>
      </article>
    </main>
  );
}