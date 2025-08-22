import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "12.5.6 Hidden Conclusions in Boldface | Critical Reasoning",
  description:
    "In Boldface Method of Reasoning prompts, the main conclusion is often understated, mid‑passage, and not signposted. Learn how to find it and practice with a roles‑of‑boldface example and full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Method of Reasoning and Boldface Method of Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.5.6 When the Main Conclusion Is Easy to Miss
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In most Critical Reasoning prompts, the conclusion shows up near the
          end and is flagged by cue words such as “therefore” or “thus.” Boldface
          questions break that pattern: the main conclusion is often tucked into
          the middle of the passage and stated in a way that doesn’t draw much
          attention.
        </p>

        <MustKnow>
          In Boldface stimuli, the main conclusion is frequently not introduced
          by indicator words and can be phrased very subtly.
        </MustKnow>

        <MustKnow>
          The main conclusion may appear before the end of the argument, not
          after all the supporting statements.
        </MustKnow>

        <MustKnow>
          Strategy: scan the entire passage and identify the claim that the
          other statements are trying to support or challenge—that claim is the
          main conclusion, even if it’s short and low‑key.
        </MustKnow>

        <section aria-labelledby="demo" className="space-y-3">
          <h3 id="demo" className="text-xl font-semibold text-white">
            Quick demo: a low‑profile conclusion in the middle
          </h3>
          <p className="italic text-gray-300">
            People often think that because warming oceans harm coral, and
            climate emissions raise ocean temperatures, little can be done to
            protect reefs aside from cutting emissions.{" "}
            <strong className="font-semibold">That belief is wrong.</strong> In
            fact, local stressors—such as overfishing and agricultural runoff—do
            greater damage and can be reduced through community policies.
          </p>
          <p>
            Here the bolded sentence is the main conclusion. It’s brief,
            appears mid‑passage, and isn’t introduced by a linking word like
            “therefore.” The next sentence supplies support for that conclusion.
          </p>
        </section>

        <MCQExample
          number={14}
          prompt={
            <>
              <p>
                Blending gasoline with ethanol derived from corn is often
                promoted as a way to lessen the environmental harms of internal
                combustion engines. Still, as appealing as it is to decide that{" "}
                <strong>this strategy is sound</strong>, it is not. Although it
                is true that{" "}
                <strong>
                  corn‑based ethanol produces substantially fewer direct tailpipe
                  emissions than gasoline
                </strong>
                , the indirect environmental costs, including land‑use impacts,
                outweigh the benefits.
              </p>
              <p className="mt-3">
                Which choice best describes the roles of the two boldfaced
                portions?
              </p>
            </>
          }
          options={[
            "The first states the author’s main conclusion; the second is evidence supporting that conclusion.",
            "The first is a consideration favoring a view the author opposes; the second is evidence the author uses for his own position.",
            "The first presents a claim the author merely questions; the second proves that claim is indisputable.",
            "The first is a view the author endorses; the second is evidence for the author’s principal conclusion.",
            "The first expresses a conclusion the author rejects; the second presents a reason offered in support of that rejected conclusion.",
          ]}
          correct="The first expresses a conclusion the author rejects; the second presents a reason offered in support of that rejected conclusion."
          solution={
            <>
              <p>
                Map the argument. The author’s overall claim is that the
                “strategy is not sound.” The first boldface—“this strategy is
                sound”—is the opposite of the author’s position, i.e., a
                conclusion the author argues against. The second boldface (lower
                direct emissions) is a favorable consideration that could be
                used to support that opposed conclusion. The author then
                counters by citing larger indirect harms, leading to the
                author’s conclusion that the strategy isn’t sound. Therefore,
                the correct description is the option stating that the first is
                a conclusion the author rejects and the second is a point in
                favor of that rejected conclusion.
              </p>
            </>
          }
        />

        <p>
          Bottom line: in Boldface questions, don’t hunt only at the end of the
          passage for a loudly signposted conclusion. Instead, identify which
          claim the rest of the text is organized to support or weaken—even if
          that claim is brief and sits quietly in the middle.
        </p>
      </article>
    </main>
  );
}