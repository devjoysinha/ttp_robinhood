import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title:
    "2.9.4 Assumption Type 4: The Plan Doesn’t Recreate the Problem | Critical Reasoning",
  description:
    "Identify the hidden assumption that a proposed plan will not bring back the same problem (or a similar one). Includes 3 MCQ drills with full reasoning.",
};

// Simple KaTeX inline component (ensure KaTeX CSS is loaded globally in your app layout)
function MathInline({ children }: { children: string }) {
  const html = renderToString(children, { throwOnError: false });
  return (
    <span
      className="katex"
      aria-label={`math: ${children}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Identify the Assumption
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.9.4 Assumption Type 4: A Plan Won’t Recreate the Same Problem
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Critical Reasoning prompts recommend a plan: do X to fix
          problem Y. When an author proposes a course of action, an often‑needed
          hidden premise is that the plan will not bring back the same problem
          (or a close cousin) through side effects of the plan itself.
        </p>

        <MustKnow>
          In plan‑based arguments, a common necessary assumption is that carrying
          out the plan won’t regenerate the original problem or create a similar
          one. If following the plan could cause the same issue to persist or
          worsen in a new way, the argument’s conclusion is not supported.
        </MustKnow>

        <p>
          Here’s a quick illustration. Suppose a city wants to switch from
          catching wild fish to offshore fish farming to protect wild stocks.
          For that recommendation to be sound, the argument assumes fish farms
          won’t introduce conditions (for example, disease spread) that
          ultimately damage wild populations anyway. If the plan itself risks
          the same harm it aims to prevent, the reasoning collapses.
        </p>

        <MCQExample
          number={22}
          prompt="Homeowners Association member: Some neighbors are worried about the number of mice on our properties. Because mice dislike cayenne pepper, if everyone sprinkles cayenne around home foundations, the mouse population in our community will certainly drop. Which statement must be true for this argument to work?"
          options={[
            "Mice are more dangerous disease carriers than most other rodents.",
            "If mice ingest cayenne pepper, they won’t become seriously ill.",
            "There are more mice now than there were several years ago.",
            "Predators that help keep mice in check would not entirely avoid areas that smell like cayenne pepper.",
            "Cayenne pepper keeps ants away as well as mice.",
          ]}
          correct="Predators that help keep mice in check would not entirely avoid areas that smell like cayenne pepper."
          solution={
            <>
              <p>
                The conclusion is that spreading cayenne lowers mouse numbers.
                The evidence is that mice dislike cayenne. For the plan to work,
                it must not inadvertently remove a natural control on mice.
                If predators avoid the cayenne‑scented areas, mice could grow in
                number, defeating the plan’s purpose. So it’s necessary to
                assume predators do not completely stay away from the treated
                zones.
              </p>
              <p>
                The other answers talk about disease, trends over time, or
                repelling other pests—none of which is required for the plan to
                succeed in reducing mice.
              </p>
            </>
          }
        />

        <MCQExample
          number={23}
          prompt="Rowenton city council member: Although crime in Rowenton is falling overall, we still get many reports of nighttime theft from parked cars on streets that are unlit. If we add streetlights to those dark blocks, nighttime car break‑ins will decline. Which of the following is a necessary assumption?"
          options={[
            "People feel safer walking on streets that are well lit.",
            "Public service announcements telling people not to leave items in cars at night would, at best, produce only short‑lived changes in behavior.",
            "The only reason to install more streetlights is to deter theft from parked cars.",
            "The drop in nighttime car break‑ins has not kept pace with declines in other crimes in Rowenton.",
            "Thieves do not rely on streetlight illumination to determine whether valuables are inside a parked car.",
          ]}
          correct="Thieves do not rely on streetlight illumination to determine whether valuables are inside a parked car."
          solution={
            <>
              <p>
                If thieves use lighting to see what’s inside, extra lighting
                could help them target cars and actually raise break‑ins. Thus,
                the plan requires the assumption that streetlight illumination
                is not what thieves rely on to decide whether to break in.
              </p>
              <p>
                The other options introduce feelings of safety, alternative
                plans, exclusivity of reasons, or crime‑trend comparisons—none
                is required for the specific causal claim that more lighting
                will reduce break‑ins.
              </p>
            </>
          }
        />

        <MCQExample
          number={24}
          prompt="On Dolya’s Coastal Highway, traffic jams are frequent, yet the peak‑hour vehicle count is slightly below the highway’s estimated jam‑free capacity. Most slow‑downs occur at toll booths spaced along the road. Therefore, removing the toll booths would eliminate most congestion on Coastal Highway. Which assumption is required?"
          options={[
            "The city can balance its budget even without the toll revenue.",
            "The congestion near toll areas is caused by cars merging from nearby on‑ramps rather than the toll booths themselves.",
            "Most drivers who travel to destinations served by Coastal Highway are not avoiding the road because of the tolls.",
            "Toll booths also cause significant delays outside of peak hours.",
            "Eliminating tolls would cause an increase in speeding on the highway.",
          ]}
          correct="Most drivers who travel to destinations served by Coastal Highway are not avoiding the road because of the tolls."
          solution={
            <>
              <p>
                The plan is to remove toll booths to reduce jams. A key risk is
                that removing tolls invites many new drivers who currently avoid
                the highway, pushing volume above the jam‑free threshold. The
                argument needs the assumption that most drivers are not staying
                away because of tolls.
              </p>
              <p>
                In symbols, the premise says the current peak load satisfies{" "}
                <MathInline>n_{{peak}} &lt; C_{{free}}</MathInline>. If removing
                tolls pulls in many additional cars, the new load could violate{" "}
                <MathInline>n_{{peak}} &lt; C_{{free}}</MathInline>, recreating
                congestion. So we must assume the increase would not be large
                (i.e., most people aren’t avoiding the road due to tolls).
              </p>
              <p>
                Budget concerns, off‑peak effects, speeding, or blaming on‑ramps
                either miss the point or weaken the plan; they aren’t necessary
                for the specific claim about fixing congestion by removing
                booths.
              </p>
            </>
          }
        />

        <p>
          Bottom line: when you see a plan, test whether any side effect could
          put the problem right back in the middle of the stage. If not, the
          assumption that “the plan won’t recreate the problem” is likely in
          play.
        </p>
      </article>
    </main>
  );
}