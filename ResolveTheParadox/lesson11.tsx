import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.8.4 Paradox Wrong Answer Type 4 | Critical Reasoning",
  description:
    "Resolve the Paradox: why choices that appear to contradict a stated fact are always wrong. Learn the rule, see a moon‑rocks mini‑example, and practice with two MCQs (diet/France and rent control).",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.8.4 Wrong Answer Type 4: A choice that seems to contradict one of the two facts
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Resolve the Paradox problems, the two statements in the prompt are
          granted as true, even if they clash. Your job is to supply a bridge
          that shows how both can hold at the same time—not to attack either
          statement.
        </p>

        <MustKnow>
          Treat both facts in the setup as nonnegotiable. An answer that disputes,
          questions, or undermines either fact cannot resolve the paradox.
        </MustKnow>

        <p>
          Put differently: we need extra information that reconciles both facts.
          If a choice merely hints that one of the facts might be false, it is
          off‑mission. The resolution must make both facts live together peacefully.
        </p>

        <section aria-labelledby="moon-example" className="space-y-3">
          <h3 id="moon-example" className="text-xl font-semibold text-white">
            Mini‑example: the “older than the Moon” rocks
          </h3>
          <p>
            Suppose we accept both of these as true:
          </p>
          <ul className="list-disc pl-6">
            <li>The Moon formed roughly 4.5 billion years ago.</li>
            <li>Apollo astronauts brought back rocks dated to more than 5 billion years old.</li>
          </ul>
          <p>
            At first glance, that looks contradictory—how can rocks on the Moon be older than the Moon?
            We do not fix this by rejecting either claim. The following do not resolve the paradox:
          </p>
          <ul className="list-disc pl-6">
            <li>“Astronauts didn’t actually find any rocks.”</li>
            <li>“Those rocks weren’t really over 5 billion years old.”</li>
            <li>“The Moon is older than 4.5 billion years.”</li>
          </ul>
          <p>
            Instead, a true resolution would explain how both statements can stand together. For example:
          </p>
          <p className="rounded-md bg-slate-800/50 p-4">
            The “ancient” rocks originated elsewhere in space and struck the Moon after the Moon had already formed.
            Under that story, it’s perfectly reasonable for some Moon‑surface rocks to predate the Moon itself.
          </p>
        </section>

        <MustKnow>
          Any option that appears to contradict a given fact is wrong—even if it feels tempting. The correct answer
          reconciles the facts; it doesn’t refute them.
        </MustKnow>

        <MCQExample
          number={15}
          prompt="It’s widely accepted that diets high in saturated fat increase the risk of heart disease. Yet France—where saturated‑fat intake is generally high—reports a lower incidence of heart disease than many countries with lower saturated‑fat consumption. Which option best helps explain this outcome?"
          options={[
            "Some people who eat lots of saturated fat do end up diagnosed with heart disease.",
            "Some nutritionists who favor higher‑fat eating patterns rely on information not widely known.",
            "Compared with residents of many countries, people in France typically consume less sugar and exercise more, both of which reduce heart‑disease risk.",
            "Most experts agree that diets high in saturated fat can cause multiple health issues.",
            "Diets with a lot of fat often also include other substances linked to heart disease.",
          ]}
          correct="Compared with residents of many countries, people in France typically consume less sugar and exercise more, both of which reduce heart‑disease risk."
          solution={
            <>
              <p>
                We must reconcile two facts: high saturated‑fat intake in France and a comparatively lower rate of heart disease. The right answer supplies a reason both can be true.
              </p>
              <p>
                Option C adds offsetting factors—less sugar and more exercise—both of which reduce risk and can more than balance out the elevated risk from saturated fat. Thus, C directly explains the result.
              </p>
              <p>
                A and D effectively re‑assert that saturated fat is harmful, which does not explain why France’s rate is lower; they intensify the tension instead of resolving it. B is about what nutritionists know or recommend—irrelevant to the observed outcome. E suggests additional harmful co‑travelers with fat, which would predict higher, not lower, heart‑disease rates—so it deepens the paradox.
              </p>
            </>
          }
        />

        <MCQExample
          number={16}
          prompt="To improve rental affordability, the city of Coastal West passed a law preventing rent increases on occupied units. Soon afterward, rental affordability fell to its lowest point in city history. Which option best explains this result?"
          options={[
            "Rents in Coastal West are still lower than in many peer cities.",
            "In response to the law, some owners converted rental units to commercial spaces, sharply reducing the supply of rentals.",
            "For decades before the new law, Coastal West allowed rent increases on occupied units.",
            "Coastal West occasionally passes laws that have unexpected effects.",
            "After the rent law, the city issued a stimulus payment of $2,000 annually to all renters.",
          ]}
          correct="In response to the law, some owners converted rental units to commercial spaces, sharply reducing the supply of rentals."
          solution={
            <>
              <p>
                We need a mechanism that makes affordability worse despite the rent‑freeze rule on occupied units. A significant drop in available rental supply (owners converting units to non‑residential use) increases competition for the remaining units and drives up effective market prices for new leases, hurting overall affordability. So B resolves the paradox.
              </p>
              <p>
                A compares cities and doesn’t address the change in affordability. C is background history, not an explanation for the new outcome. D is a generic observation, not a causal link. E could boost demand power, which would tend to raise market prices further—making the paradox worse, not better.
              </p>
            </>
          }
        />

        <p>
          Bottom line: in paradox questions, look for a connecting fact that makes both statements
          simultaneously reasonable. If a choice challenges a stated fact—or makes the clash sharper—it’s not your answer.
        </p>
      </article>
    </main>
  );
}