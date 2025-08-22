import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "3.7.7 Weaken: When a ‘Plan Won’t Work’ Actually Will | Critical Reasoning",
  description:
    "Learn the weaken-answer pattern that shows a plan the argument dismisses can, in fact, succeed. Includes two fully explained multiple‑choice examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.7 Weakening Type 7: Showing a Supposedly Doomed Plan Can Work
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Weaken questions sometimes feature an author who concludes a plan will
          fail because of a specific obstacle. The best weakener often doesn’t
          fight the facts. Instead, it introduces new information that removes,
          reduces, or bypasses the cited obstacle—thereby making the plan
          workable after all.
        </p>

        <MustKnow>
          To weaken “this plan won’t work” conclusions, look for answers that
          add an offset or workaround to the very barrier the author cites. You
          are not disproving the premises; you are showing that, with the new
          information, the plan can still succeed despite those premises.
        </MustKnow>

        <section aria-label="Pattern insight" className="rounded-lg bg-slate-900/40 p-4">
          <h3 className="mb-2 text-base font-semibold text-white">
            The pattern at a glance
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Plan presented with a clear goal.</li>
            <li>Author cites a practical obstacle.</li>
            <li>Conclusion: “Therefore, the plan won’t achieve the goal.”</li>
            <li>
              Strong weakener: introduces a factor that neutralizes that exact
              obstacle.
            </li>
          </ul>
        </section>

        <MCQExample
          number={22}
          prompt="Travel analyst: To attract new affluent guests, the Royal Sunset Resort began offering free international business‑class airfare for two with any weeklong beachfront‑suite reservation. But most customers who can afford such suites prefer to fly privately, not on commercial airlines. So this promotion is unlikely to bring in those customers."
          options={[
            "The resort operates its own private airfield that accommodates guests arriving by private jet.",
            "Over the past three years, beachfront‑suite bookings at the resort have grown faster than in any previous three‑year period.",
            "Most people who reserve a beachfront suite invite two or more companions who live far away, often in other countries.",
            "Competing luxury hotels nearby now include complimentary dinners and hot‑stone massages with suite bookings.",
            "The resort was recently renovated and is now considerably more visually appealing.",
          ]}
          correct="Most people who reserve a beachfront suite invite two or more companions who live far away, often in other countries."
          solution={
            <>
              <p>
                The author argues the plan won’t work because wealthy customers
                won’t personally use commercial airfare. A good weakener shows
                the offer can still entice these customers for another reason.
              </p>
              <p>
                If most suite bookers bring two or more guests who live far
                away, those guests are unlikely to fly on the host’s private
                plane. The included round‑trip tickets become genuinely valuable
                to those companions. That benefit can still motivate the wealthy
                host to book the suite, undermining the conclusion that the plan
                won’t attract them.
              </p>
              <p>
                The other choices don’t reduce the stated obstacle or are
                off‑topic: a private airfield (A) doesn’t make commercial
                airfare appealing; historical booking growth (B) doesn’t address
                this promotion’s effectiveness; competitor perks (D) can even
                strengthen the original concern; renovations (E) are unrelated
                to airfare usage.
              </p>
              <p className="mt-2 font-semibold text-white">Answer: C</p>
            </>
          }
        />

        <MCQExample
          number={23}
          prompt="City council member: The administration wants to improve health outcomes in the South Ward by bringing in a grocery chain that sells only healthy foods. However, nutritious items cost more than the low‑quality foods residents currently buy, and most residents are already at their financial limits. Thus, most residents would be unable to shop at a store that sells only healthy food."
          options={[
            "The proposal also includes subsidies that make public transportation—currently a major expense for most South Ward residents—free.",
            "Many South Ward residents receive government benefits that supplement their incomes.",
            "Many low‑quality foods are formulated to encourage overconsumption.",
            "One chain considering a South Ward location sells both healthy and unhealthy options.",
            "The administration can fast‑track permits and otherwise simplify opening a healthy‑food store in the South Ward.",
          ]}
          correct="The proposal also includes subsidies that make public transportation—currently a major expense for most South Ward residents—free."
          solution={
            <>
              <p>
                The conclusion is that residents can’t afford a healthy‑only
                store. A strong weakener offsets the affordability issue without
                disputing the premises.
              </p>
              <p>
                If transit becomes free and it was a substantial recurring
                cost, residents effectively gain room in their budgets—money
                that could be spent on healthier groceries. This directly
                reduces the cited obstacle (cost), undercutting the conclusion.
              </p>
              <p>
                By contrast, government benefits (B) don’t change the premise
                that residents are already at their limits; palatability of
                unhealthy foods (C) is off‑point to affordability; a store that
                sells both types (D) doesn’t address a healthy‑only store; and
                easier permitting (E) impacts opening the store, not whether
                residents can afford it.
              </p>
              <p className="mt-2 font-semibold text-white">Answer: A</p>
            </>
          }
        />

        <section aria-label="Takeaway" className="rounded-lg bg-slate-900/40 p-4">
          <h3 className="mb-2 text-base font-semibold text-white">
            Big picture
          </h3>
          <p>
            Don’t try to knock down reliable premises. Instead, add a new,
            realistic factor that neutralizes the very barrier the author uses
            to predict failure. If that barrier fades or is bypassed, the plan
            may well succeed—so the argument is weakened.
          </p>
        </section>
      </article>
    </main>
  );
}