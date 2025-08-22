import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

const InlineMath = dynamic(
  async () => {
    const m = await import("react-katex");
    await import("katex/dist/katex.min.css");
    return m.InlineMath;
  },
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "4.12 No‑Effect Information (Strengthen Trap Type 1) | Critical Reasoning",
  description:
    "Learn to spot Strengthen answer choices that don’t move the argument at all. See why they’re tempting, how to avoid them, and practice with two fully‑explained examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Strengthen The Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.12 Strengthen Trap Type 1: Information That Doesn’t Affect the Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          One of the most obvious trap answers in Strengthen questions is the choice that leaves the argument exactly as it was—no stronger, no weaker. These choices often feel related to the topic, but they don’t improve the link between the premises and the conclusion.
        </p>

        <MustKnow>
          Some incorrect Strengthen answers are “no‑impact” facts: either tangential to the conclusion or not tied tightly enough to the core of the argument to change its support.
        </MustKnow>

        <p>
          Consider a quick scenario. A country raises taxes on alcohol and expects this policy to narrow its budget deficit. A tempting but irrelevant fact would compare alcohol taxes to cigarette taxes. That comparison might sound on‑topic, but it fails to say anything about whether the higher alcohol tax improves the government’s finances. In contrast, a truly strengthening fact would show that lower alcohol consumption (caused by higher taxes) reduces government spending—for instance, if the state pays for alcohol‑related healthcare and those costs drop.
        </p>

        <MustKnow>
          Don’t let a choice “feel” relevant just because it mentions the same subject. To strengthen an argument, the information must tighten the premise‑to‑conclusion link.
        </MustKnow>

        <section aria-labelledby="logic-link" className="mt-8">
          <h3 id="logic-link" className="text-xl font-semibold text-white">
            The missing link example
          </h3>
          <p className="mt-2">
            In many arguments, the gap you need to bridge is a simple chain. For instance, an author might rely on the unstated connection that impulsive actions hurt relationships:
          </p>
          <p className="mt-1">
            <InlineMath math={'\\text{alcohol lowers self-control} \\;\\Rightarrow\\; \\text{impulsivity} \\;\\Rightarrow\\; \\text{relationship harm}'} />
          </p>
          <p className="mt-2">
            A strong Strengthen choice will confirm one of the missing arrows in that chain.
          </p>
        </section>

        <MCQExample
          number={11}
          prompt="Heavy alcohol use harms relationships. Alcohol is known to reduce self‑control; for example, someone normally even‑tempered may act rashly in conflict when drinking. Which option, if true, most strengthens the claim?"
          options={[
            "Mindfulness and guided meditation can markedly improve self‑control.",
            "Spending a lot of time on social media can damage relationships.",
            "Robust research indicates that impulsive behavior can harm relationships.",
            "Most people who act impulsively while drunk would behave impulsively even when sober in the same situation.",
            "Not everyone who drinks heavily acts impulsively during interpersonal conflicts.",
          ]}
          correct="Robust research indicates that impulsive behavior can harm relationships."
          solution={
            <>
              <p>
                Breakdown of the argument:
              </p>
              <ul className="list-disc pl-6">
                <li>Premise: Alcohol lowers self‑control.</li>
                <li>Example: While drinking, even calm people might act rashly.</li>
                <li>Conclusion: Therefore, heavy drinking harms relationships.</li>
              </ul>
              <p className="mt-2">
                The argument leans on a missing assumption: impulsivity damages relationships. The correct choice directly supplies that link.
              </p>
              <p className="mt-2">
                Choice C states that impulsive behavior can harm relationships, confirming the needed bridge from “alcohol → impulsivity” to “relationship harm.” The other options are off‑topic (A, B, E) or even undercut the causal role of alcohol (D).
              </p>
            </>
          }
        />

        <MustKnow>
          Avoid “story‑spinning.” If you have to invent a long, speculative narrative to make a choice seem helpful, it probably isn’t. Good Strengthen support should be direct and grounded in the given information plus common sense.
        </MustKnow>

        <p>
          Note: Difficult Strengthen problems can require multi‑step reasoning. Complex doesn’t mean speculative—sound logic is still the standard.
        </p>

        <MCQExample
          number={12}
          prompt="Fuel costs are a small share of the total cost of bringing cornflakes to market, unlike the cost of corn itself. Still, economists predict that if fuel prices stay at their recently elevated level, the wholesale price of cornflakes will rise sharply. Which statement best supports this prediction?"
          options={[
            "When fuel is expensive, converting corn to ethanol becomes more profitable.",
            "Cornflakes’ wholesale prices have been relatively flat for several years.",
            "When fuel prices rise, consumers typically have less money to spend on other goods.",
            "Among cereals, cornflakes have remained consistently popular.",
            "Before last year’s spike, both fuel and cornflakes prices were below recent averages.",
          ]}
          correct="When fuel is expensive, converting corn to ethanol becomes more profitable."
          solution={
            <>
              <p>
                We’re told fuel is a small cost component, so higher fuel prices alone don’t explain a big jump in cornflakes prices. To support the prediction, look for a mechanism that pushes up a major cost input—corn.
              </p>
              <p className="mt-2">
                If high fuel prices make corn‑to‑ethanol conversion more lucrative (choice A), demand for corn rises, likely increasing corn’s price. Since corn is a significant cost driver for cornflakes, that supports a sizable increase in cornflakes’ price.
              </p>
              <p className="mt-2">
                The other choices don’t create a cost‑increase mechanism for corn: B and D are background facts that can be spun either way, C suggests weaker demand for non‑fuel goods, and E relies on a mean‑reversion story not warranted by the prompt.
              </p>
            </>
          }
        />

        <MustKnow>
          Sophisticated Strengthen answers can involve multiple steps, but those steps should be logical and well‑supported—no leaps, no conjecture.
        </MustKnow>

        <p>
          Bottom line: If a choice doesn’t tighten the argument’s core link(s), it doesn’t strengthen the conclusion—no matter how related it sounds.
        </p>
      </article>
    </main>
  );
}