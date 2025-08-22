import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "3.7.3 Weaken CR: Faulty Generalizations (Sampling) | Critical Reasoning",
  description:
    "How to weaken arguments that leap from a sample to a population. Learn to spot unrepresentative samples (volunteer bias, publication bias) and practice with two GMAT-style multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.3 Weakening Answer Type 3: Undermining Faulty Generalizations
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Authors often support broad conclusions about a whole group by citing
          results from a subset of that group. That move only works when the subset
          mirrors the larger population. If the sample is skewed or special in some
          way, the generalization can crumble.
        </p>

        <MustKnow>
          Generalizations drawn from a sample are only as reliable as the sample
          itself. If the sample is biased (too small, self‑selected, unusually
          motivated, or otherwise unrepresentative), then the leap from
          “some” to “most/all” is suspect.
        </MustKnow>

        <p>
          A common trap is to treat the behavior of a convenient sample as if it
          reflects everyone. On test day, ask: Who’s in the sample? How were they
          selected? Would typical members of the broader group act the same way?
        </p>

        <MustKnow>
          Representative sample = the sample’s relevant characteristics match those
          of the target population closely enough to support the conclusion. Without
          representativeness, sample‑based evidence doesn’t travel.
        </MustKnow>

        <p>
          You’ll also see “file‑drawer” or publication bias: the body of available
          evidence is skewed because null or unexciting findings are less likely to
          be published. A conclusion built on that record can be shaky even if “most
          published studies” point the same way.
        </p>

        <MustKnow>
          If the available evidence is filtered (e.g., only eye‑catching studies get
          published), then “most studies show X” may not reflect the true state of
          the world. That’s a classic way to weaken a generalization.
        </MustKnow>

        <MCQExample
          number={14}
          prompt={
            "Fitness startup’s executive: Our new plan was built to be easy to maintain. In typical programs, fewer than half of beginners stick with it for a year. Among volunteers who tried our new plan, nearly 90 percent stayed with it for at least a year. Once we offer it to all customers, close to 90 percent will stay on it for at least a year. Which choice most weakens the executive’s conclusion?"
          }
          options={[
            "People who stop a program often keep some benefits for a long time.",
            "Folks who volunteer to pilot new exercise plans tend to be more motivated than the average customer.",
            "In a separate pilot of a different plan, only half the volunteers stayed for at least a year.",
            "Many people notice meaningful results within about six weeks of starting a plan.",
            "A large share of the volunteers had little prior experience with structured exercise plans.",
          ]}
          correct="Folks who volunteer to pilot new exercise plans tend to be more motivated than the average customer."
          solution={
            <>
              <p>
                The claim extends a result from volunteers to the entire customer base.
                To weaken, show that volunteers aren’t representative. If pilot
                participants are unusually motivated, their adherence will overstate
                what typical customers will do—so the 90 percent figure won’t carry
                over.
              </p>
              <p>
                The other choices don’t attack the jump from sample to population:
                keeping benefits after quitting (A), performance of a different plan
                (C), early visible results (D), and volunteers’ prior experience (E)
                don’t establish a relevant difference that undermines the
                generalization.
              </p>
              <p className="text-sm text-gray-400">
                Note: On an ordered‑choice test, this is “volunteer bias” (a
                self‑selected sample).
              </p>
              <p className="text-sm text-gray-400">
                Percentages mentioned (e.g., 50% and 90%) matter only if the sample
                reflects the same population the conclusion targets.
              </p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt={
            "Presentiment is described as bodily responses (e.g., heart rate changes) kicking in before a stressful event occurs. A research team surveyed all studies on presentiment from the last fifty years. Because the great majority of those published studies statistically confirmed the effect, the team concluded that presentiment is real. Which choice most seriously undermines the team’s conclusion?"
          }
          options={[
            "Across the supportive studies, the reported statistical significance levels were not identical.",
            "Participants in parapsychology research are often compensated for taking part.",
            "In many trials, people showing the effect were unaware of it, even though equipment detected bodily changes.",
            "Most of the reviewed studies used sufficiently rigorous methods to be considered reliable.",
            "Researchers frequently decline to publish studies when the results are not exciting.",
          ]}
          correct="Researchers frequently decline to publish studies when the results are not exciting."
          solution={
            <>
              <p>
                The team relies on “most published studies” to draw a population‑level
                conclusion. If unexciting or null results are routinely not published,
                then the available set of studies is biased toward positive findings.
                That’s publication bias and it directly undercuts the generalization.
              </p>
              <p>
                The other options don’t show a biased record or a mismatch between
                sample and population: differing significance levels (A) don’t imply
                insignificance, compensation (B) doesn’t show distortion here,
                awareness (C) is irrelevant to whether the effect exists, and (D)
                would strengthen, not weaken, the claim.
              </p>
            </>
          }
        />

        <p>
          Bottom line: whenever a conclusion about a whole population is drawn from a
          subset, interrogate the sampling. If the middle step—“this sample stands in
          for everyone”—fails, the argument weakens immediately.
        </p>
      </article>
    </main>
  );
}