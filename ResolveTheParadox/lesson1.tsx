import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.2 Common Resolve the Paradox Question Stems | Critical Reasoning",
  description:
    "Quickly recognize Resolve the Paradox questions by their common stems, understand the core task—reconciling conflicting facts—and practice with a GMAT‑style multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Resolve the Paradox
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.2 Common Resolve the Paradox Question Stems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The faster you can identify the task a Critical Reasoning problem
          is asking you to perform, the faster you can solve it. Resolve the
          Paradox prompts follow recognizable patterns—once you spot them,
          you’ll know your job is to explain how two seemingly conflicting
          facts can both be true.
        </p>

        <p>Typical stems include phrasing such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Which of the following, if true, best resolves the discrepancy described above?
          </li>
          <li>
            Which option, if true, would most plausibly explain the contradiction?
          </li>
          <li>
            Which of the following, if true, most justifies this apparently paradoxical claim?
          </li>
          <li>
            Which choice, if true, best reconciles the apparent conflict?
          </li>
          <li>
            Which of the following, if true, does the most to resolve the apparent paradox?
          </li>
          <li>
            Which hypothesis best explains the contrast described above?
          </li>
          <li>
            Which of the following, if true, most helps to account for …?
          </li>
          <li>
            Which of the following, if true, would be the best explanation for the results of …?
          </li>
          <li>
            Which of the following, if true, most helps to explain the apparent inconsistency?
          </li>
        </ul>

        <MustKnow>
          Resolve the Paradox questions ask you to add a fact that makes two
          clashing statements compatible. You’re not proving a conclusion—you’re
          supplying a reason the two facts can coexist.
        </MustKnow>

        <p>Try a quick example to see this in action.</p>

        <MCQExample
          number={2}
          prompt={
            <>
              To reduce pollution from gasoline engines, the country of Rantala
              began offering substantial tax incentives for zero‑emission electric
              vehicles five years ago. Since then, the number of electric cars on
              the road has risen, and the number of gasoline cars has declined.
              Yet over the same period, air pollution attributable to gasoline
              engines has increased in Rantala. Which of the following, if true,
              best resolves this paradox?
            </>
          }
          options={[
            "Rantala’s approach to tracking air pollution from gasoline engines has long been highly reliable.",
            "Neighboring countries that introduced similar incentives saw significant drops in gasoline‑engine pollution.",
            "Many residents have traditionally used emission‑free transportation, such as walking, cycling, and the electric subway.",
            "Around the same time, large gasoline‑powered mining equipment began operating continuously in Rantala to extract metals used in electric‑vehicle batteries.",
            "Along with the EV incentives, Rantala introduced an air‑quality surcharge on gasoline‑powered cars.",
          ]}
          correct="Around the same time, large gasoline‑powered mining equipment began operating continuously in Rantala to extract metals used in electric‑vehicle batteries."
          solution={
            <>
              <p>
                What we know:
              </p>
              <ul className="list-disc pl-6">
                <li>Fewer gas cars and more EVs are on the roads.</li>
                <li>Despite that, gasoline‑engine pollution has increased.</li>
              </ul>
              <p>
                The correct answer must show how both statements can be true. If
                a new, substantial source of gasoline‑engine emissions appeared,
                that would reconcile the facts.
              </p>
              <p>
                Choice D provides exactly that: a surge in heavy, gasoline‑powered
                mining machinery running around the clock would raise gasoline‑engine
                emissions even if there are fewer gas cars. This explains the increase
                in pollution while keeping the decline in gas vehicles intact.
              </p>
              <p>
                Why the others fall short:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  A confirms measurement quality but doesn’t explain why pollution rose.
                </li>
                <li>
                  B cites results in other countries; it doesn’t reconcile Rantala’s outcome.
                </li>
                <li>
                  C is background that doesn’t address the rise in gasoline‑engine pollution.
                </li>
                <li>
                  E helps explain why gas cars decreased, which we already know; it doesn’t explain the pollution increase.
                </li>
              </ul>
              <p>Therefore, D resolves the paradox.</p>
            </>
          }
        />

        <p>
          Bottom line: scan for stems that ask you to explain a conflict between
          facts, then look for an additional piece of information that allows both
          to stand without contradiction.
        </p>
      </article>
    </main>
  );
}