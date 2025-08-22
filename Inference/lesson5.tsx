import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "7.5.1 Entire-Passage Conclusions | Inference (Critical Reasoning)",
  description:
    "Learn the inference answer type that requires combining most or all statements in a passage. Includes a quick warm‑up and three multiple‑choice examples with complete explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. Inference
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.5.1 Conclusions Supported by the Entire Passage
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One common correct answer type in Inference questions is a conclusion
          that only emerges when you synthesize most or all of the statements in
          the passage. You’re not summarizing; you’re connecting the dots the
          author provided to reach a statement that must be true.
        </p>

        <MustKnow>
          Sometimes the right inference is justified only by combining nearly
          all the information presented. If an option requires the full set of
          given facts and must be true as a result, it’s a strong candidate. Be
          wary of choices that feel plausible but go beyond, distort, or
          overstate what the passage actually supports.
        </MustKnow>

        <section aria-labelledby="warmup-title" className="space-y-3">
          <h3 id="warmup-title" className="text-xl font-semibold text-white">
            Quick warm‑up
          </h3>

          <p>
            Read the mini‑passage, then decide what can be concluded. Notice how
            the correct option is grounded in the totality of the statements,
            while the trap overreaches.
          </p>

          <MCQExample
            number={1}
            prompt={
              'Scientists initially took certain clay minerals on Mars—thought to form only in water—as evidence that life might once have existed there. Later work showed the clay formed in water present within molten magma. Because magma is extremely hot, such water would have been far too hot to support life. Which statement follows from these facts?'
            }
            options={[
              "Life has never existed on Mars.",
              "The presence of water‑formed clay on Mars is not, by itself, a reason to think life existed there.",
            ]}
            correct="The presence of water‑formed clay on Mars is not, by itself, a reason to think life existed there."
            solution={
              <>
                <p>
                  Both choices relate to all the statements. However, the claim
                  that life has never existed on Mars is stronger than the
                  passage supports. The safer conclusion is that these clay
                  minerals do not justify inferring past life, since the water
                  involved was too hot for life to survive.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex5-title" className="space-y-3">
          <h3 id="ex5-title" className="text-xl font-semibold text-white">
            Example 5
          </h3>
          <MCQExample
            number={5}
            prompt={
              "When work requires deep concentration or learning, instrumental (no‑lyrics) music can boost productivity, whereas music with lyrics generally distracts and hurts productivity. For repetitive tasks, either music with lyrics or without lyrics can improve productivity. What can be inferred?"
            }
            options={[
              "If most people in an office are doing repetitive tasks, instrumental music will increase the group’s productivity.",
              "A single background track could help some workers be more productive while making others less productive.",
              "Instrumental music makes everyone more productive, regardless of the work.",
              "For repetitive jobs, music with lyrics is more helpful than instrumental music.",
              "Managers who want maximum productivity should prioritize choosing the right background music.",
            ]}
            correct="A single background track could help some workers be more productive while making others less productive."
            solution={
              <>
                <p>
                  Key facts: (1) For focus/learning work, lyrics generally harm
                  productivity, while instrumental can help. (2) For repetitive
                  work, either type can help. Combining these, the same music
                  (for example, with lyrics) could aid workers doing repetitive
                  tasks yet hinder those doing focus/learning work. So it’s
                  reasonable to infer that one track might raise productivity
                  for some and reduce it for others. That matches the correct
                  choice.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Choice A says “will,” but the passage only says “may.” Too
                    strong.
                  </li>
                  <li>
                    Choice C universally overstates instrumental music’s
                    benefits.
                  </li>
                  <li>
                    Choice D compares effectiveness between types for repetitive
                    work, which the passage doesn’t quantify.
                  </li>
                  <li>
                    Choice E prescribes managerial focus beyond the given
                    evidence.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex6-title" className="space-y-3">
          <h3 id="ex6-title" className="text-xl font-semibold text-white">
            Example 6
          </h3>
          <MCQExample
            number={6}
            prompt={
              "Crop rotation alternates which crops are grown in a field. Since many crop‑damaging organisms can live only on a specific crop, rotating deprives them of a suitable host and can reduce their presence. What follows from this information?"
            }
            options={[
              "If crop rotation isn’t used, crop‑damaging organisms will never decline.",
              "If crops are badly damaged for two straight seasons, crop rotation must not have been used.",
              "Crop rotation is just as effective as chemical treatments.",
              "Rotation wouldn’t reduce organisms that can thrive equally well on any crop type.",
              "Farms that rotate crops always get higher yields than farms that don’t.",
            ]}
            correct="Rotation wouldn’t reduce organisms that can thrive equally well on any crop type."
            solution={
              <>
                <p>
                  The mechanism relies on host specificity: when organisms can
                  only live on one crop, switching crops removes their host. If
                  an organism survives on any crop, rotation doesn’t deprive it
                  of a host and thus wouldn’t reduce its presence. That is
                  precisely what the correct option states.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    A: Other methods could reduce organisms; “never decline” is
                    too strong.
                  </li>
                  <li>
                    B: Rotation can reduce but not necessarily eliminate
                    organisms; damage could persist.
                  </li>
                  <li>
                    C: No comparison to chemicals is given.
                  </li>
                  <li>
                    E: No claim about yields appears in the passage.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex7-title" className="space-y-3">
          <h3 id="ex7-title" className="text-xl font-semibold text-white">
            Example 7
          </h3>
          <MCQExample
            number={7}
            prompt={
              "Smoking’s harm is tied to how much harmful substance a smoker inhales. Some cigarettes add features intended to lower the amount of such substances in inhaled smoke, and marketing implies smokers who choose these will largely avoid smoking’s ill effects. But many smokers compensate by inhaling more smoke, defeating those features. What can be concluded?"
            }
            options={[
              "Many people who choose reduced‑substance cigarettes aren’t genuinely concerned about health risks.",
              "Companies that market reduced‑substance cigarettes deliberately intend to mislead.",
              "It’s hard to design any cigarette that would let every smoker largely avoid the harms of smoking.",
              "Certain marketing implications about reduced‑substance cigarettes don’t hold for all smokers.",
              "There’s no real difference between regular and reduced‑substance cigarettes.",
            ]}
            correct="Certain marketing implications about reduced‑substance cigarettes don’t hold for all smokers."
            solution={
              <>
                <p>
                  Because many smokers inhale more and neutralize the
                  features—and harm relates to the amount inhaled—the implied
                  benefit (“you’ll largely avoid the ill effects”) won’t apply
                  to everyone. Thus, at least some implications in the marketing
                  are not true for all smokers. That’s exactly what the correct
                  answer says.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    A: The passage doesn’t address smokers’ motivations.
                  </li>
                  <li>
                    B: No evidence of intent to mislead is provided.
                  </li>
                  <li>
                    C: “Hard to design” is broader than the facts given.
                  </li>
                  <li>
                    E: The products differ in both design and behavior; the
                    passage doesn’t claim “no difference.”
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Takeaway: when an answer requires weaving together most of the
          passage—and it must be true given those statements—it’s a strong
          entire‑passage conclusion. Watch out for choices that merely sound
          plausible, overstate (“will” vs. “may”), or import outside
          assumptions.
        </p>
      </article>
    </main>
  );
}