import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.17 Pseudo‑Strengtheners | Strengthen the Argument",
  description:
    "Learn to spot GMAT Strengthen answer choices that look helpful but don’t actually support the conclusion. Includes two worked multiple‑choice examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.17 Pseudo‑Strengtheners: Choices That Seem Helpful but Don’t Actually Help
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some answer choices in Strengthen questions are crafted to sound persuasive,
          but they don’t really increase the credibility of the conclusion. These
          “pseudo‑strengtheners” often feel relevant while failing to move the argument forward.
        </p>

        <MustKnow>
          Beware choices that look supportive on the surface but do not actually make
          the conclusion more likely. Common culprits:
          - Information that doesn’t compare the conclusion against the alternative at issue.
          - A path to strengthening that the argument’s own facts already block.
        </MustKnow>

        <section aria-labelledby="vinyl-wrap-example" className="space-y-3">
          <h3 id="vinyl-wrap-example" className="text-xl font-semibold text-white">
            Mini example 1: Looks exciting, adds no support
          </h3>
          <p>
            Suppose a company predicts that most drivers who want unconventional car colors
            will choose vinyl wraps instead of repainting. A tempting answer says the vinyl
            is made using cutting‑edge manufacturing techniques developed only recently.
          </p>
          <p>
            That detail may make vinyl sound new and flashy, but it doesn’t compare vinyl to
            repainting or indicate why drivers would favor vinyl over paint. It’s style, not substance.
          </p>
          <p>
            A genuinely helpful choice would explain a practical advantage over repainting,
            such as: vinyl can be removed easily, so a seller can restore the original (and
            more marketable) color before listing the car. That tangible benefit directly
            supports the prediction that vinyl will be chosen over repainting.
          </p>
        </section>

        <section aria-labelledby="electric-truck-example" className="space-y-3">
          <h3 id="electric-truck-example" className="text-xl font-semibold text-white">
            Mini example 2: A path that the stimulus already rules out
          </h3>
          <p>
            Imagine a logistics firm says it will move shipments faster as it upgrades to
            new electric trucks. The stimulus also tells us the current trucks already travel
            at the legal speed limit on highways. A tempting answer says the new trucks can
            reach higher top speeds because of stronger batteries.
          </p>
          <p>
            That doesn’t help: top speed is irrelevant if trucks already go as fast as the law allows.
            The argument itself blocks that route to strengthening.
          </p>
          <p>
            A helpful answer would offer a different time‑saver, for example: the new trucks can fully
            recharge in minutes rather than an hour at highway stops. Less charging downtime means
            shorter total trip time, which truly supports the “faster” claim.
          </p>
        </section>

        <MustKnow>
          When evaluating Strengthen choices, ask: Does this information make the conclusion
          more likely in this specific scenario? If it doesn’t compare against alternatives
          or is neutralized by the stimulus, it’s a pseudo‑strengthener.
        </MustKnow>

        <MCQExample
          number={18}
          prompt="Casinos currently use pastel tones (light greens, purples, blues) on digital game screens because those hues are calming, and soothed players tend to play longer. Since vivid, non‑pastel colors grab attention better than pastels do, casinos that switch to vivid colors will maximize revenue from digital games. Which option most strengthens this argument?"
          options={[
            "Commercial airplanes rarely use vivid on‑screen colors during safety briefings.",
            "Casino technicians know how to change the color settings on digital game displays.",
            "On average, players place significantly higher wagers on games with attention‑grabbing colors than on games with calming colors.",
            "Casinos often rely on bright, showy décor to catch the eyes of passersby.",
            "Traffic signals use bright colors because they quickly capture drivers’ attention.",
          ]}
          correct="On average, players place significantly higher wagers on games with attention‑grabbing colors than on games with calming colors."
          solution={
            <>
              <p>
                Breakdown: Pastels soothe → players stay longer. Premise: vivid colors attract
                attention more than pastels. Conclusion: switching to vivid colors maximizes revenue.
              </p>
              <p>
                The missing link is that attracting attention should translate into more money.
                The correct choice states that eye‑catching colors lead to higher wagering,
                directly connecting “attention” to “revenue,” and thus bolstering the conclusion.
              </p>
              <p>
                The other options are irrelevant, support the wrong claim (e.g., feasibility
                of switching), or merely restate that vivid colors draw attention without tying
                that fact to earnings.
              </p>
            </>
          }
        />

        <MCQExample
          number={19}
          prompt="Last year, a network doubled its ad spending for the hit show Who Wants to Win the Most?, yet average weekly TV viewership stayed about the same as the prior year. Executives still insist the extra ad spend paid off. Which option best supports their claim?"
          options={[
            "Two competing networks launched well‑made copycat shows last year.",
            "The network makes old episodes of Who Wants to Win the Most? available to stream online.",
            "Who Wants to Win the Most? was the network’s most‑watched show last year.",
            "A greater share of people knew the show’s airtime last year than the year before.",
            "TV ratings are estimates derived from samples, not exact headcounts.",
          ]}
          correct="Two competing networks launched well‑made copycat shows last year."
          solution={
            <>
              <p>
                Viewership didn’t rise, so how could the spending still be valuable?
                If strong competitors debuted, the show might have lost viewers without the extra ads.
                Maintaining the audience in the face of that new competition is a plausible payoff.
              </p>
              <p>
                The other choices don’t tie the spend to a benefit: online availability is off‑scope,
                “most‑watched” is relative, more people knowing the airtime didn’t raise viewership,
                and sampling in ratings doesn’t imply inaccuracy or a hidden uptick.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: A real strengthener makes the conclusion more probable by addressing the
          central comparison or causal link. If a choice is flashy but fails to move the middle
          of the argument—because it’s off‑point or already ruled out—it’s a pseudo‑strengthener.
        </p>
      </article>
    </main>
  );
}