import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, { throwOnError: false, output: "html", displayMode: false });
  return <span aria-label={`math ${expr}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "3.13 Opposite Trap in Detail Questions | Reading Comprehension",
  description:
    "Learn to spot and avoid the Opposite trap in Reading Comprehension Detail questions. Includes a worked example and step‑by‑step reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">3. Reading Comprehension</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">3.13 Detail Trap 4: The Opposite</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Detail questions ask, “What does the passage say?” One common trap choice repeats familiar
          words from the passage but flips the direction of the claim. This is the Opposite trap.
        </p>

        <MustKnow>
          Opposite trap answers restate the topic but reverse the relationship. If the text says
          something like <MathInline expr={"X>Y"} />, an Opposite answer will assert{" "}
          <MathInline expr={"Y>X"} />.
        </MustKnow>

        <p>
          Because Opposite choices often echo the passage’s wording (for example, both may use phrases
          such as “more than,” “less than,” or “more inclusive than”), it’s easy to get a sense of
          familiarity and select them under time pressure. To avoid this, verify the direction of the
          relationship every time: who is bigger, earlier, stronger, or more likely according to the
          text?
        </p>

        <MustKnow>
          Strategy to avoid Opposites:
          <br />
          1) Find the exact line(s) that match the keyword in the choice.
          <br />
          2) Compare directions. If the passage says <MathInline expr={"A>B"} />, reject any choice
          implying <MathInline expr={"B>A"} />.
          <br />
          3) Prefer statements the passage explicitly supports over ones that merely feel familiar.
        </MustKnow>

        <section aria-label="Worked example" className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Worked Example</h3>

          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <p className="text-gray-200 font-medium">Passage</p>
            <p className="mt-2">
              Absolutism, influential in parts of Europe during the 1600s and 1700s, concentrates
              unchecked authority in a single ruler. Monarchs who favored this model sometimes
              grounded their power in the “divine right of kings,” and some even positioned
              themselves as leaders of both church and state. Thinkers such as Thomas Hobbes argued
              that a unified will, obeyed without question, preserves order and security.
            </p>
            <p className="mt-2">
              Constitutionalism presents a contrasting framework: a written constitution limits what
              officials may do, and no person stands above established law. Decisions are anchored in
              statute and precedent, and power is deliberately divided so that the head of state
              cannot govern without the consent of other branches (for instance, a legislature or the
              courts).
            </p>
          </div>

          <MCQExample
            number={9}
            prompt="According to the passage, absolutism differs from constitutionalism in that absolutism"
            options={[
              "prevents a nation’s leader from making arbitrary decisions",
              "places greater overall emphasis on religion than constitutionalism does",
              "is more likely to prioritize the governed over the ruler",
              "has fewer legal constraints on government action",
              "requires a formal separation and balance of powers",
            ]}
            correct="has fewer legal constraints on government action"
            solution={
              <>
                <p>
                  The question asks for a difference stated in the passage. In the second paragraph,
                  constitutionalism is defined by legal limits and the rule of law. By contrast,
                  absolutism centers power in a single ruler and permits discretionary judgments.
                  Therefore, absolutism has fewer legal checks than constitutionalism. Choice D
                  matches this contrast directly.
                </p>
                <p>
                  Why the others are wrong:
                  <br />
                  A) Opposite. The passage says absolutism permits arbitrary judgments, not that it
                  blocks them.
                  <br />
                  B) Not supported. Religion is mentioned only to describe something some absolutist
                  monarchs did; there is no comparison of religious emphasis with constitutionalism.
                  <br />
                  C) Opposite. The text implies constitutional limits help protect the governed from
                  rulers’ self‑interest, not the other way around.
                  <br />
                  E) Opposite. A balance or separation of powers is a hallmark of constitutionalism,
                  explicitly said to be “unlike absolutism.”
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Opposite traps are about direction. If a choice inverts the passage’s
          comparison—turning <MathInline expr={"A>B"} /> into <MathInline expr={"B>A"} />—it cannot be
          correct for a Detail question.
        </p>
      </article>
    </main>
  );
}