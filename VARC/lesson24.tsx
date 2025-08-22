import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// NOTE: Make sure KaTeX CSS is included globally in your app/layout.tsx:
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.25 Inference Trap 4: Opposite | Reading Comprehension",
  description:
    "Learn to spot the Opposite trap in GMAT Reading Comprehension inference questions. Includes a quick illustration and one full RC example with answer walk‑through.",
};

function K({ expr, as = "span", display = false }: { expr: string; as?: "span" | "div"; display?: boolean }) {
  const __html = katex.renderToString(expr, { throwOnError: false, displayMode: display });
  const Tag = as;
  return <Tag className="inline-block align-middle" aria-label={expr} dangerouslySetInnerHTML={{ __html }} />;
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Detail, Inference, Application, Assumption, Weaken and Strengthen
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.25 Inference Trap 4: Opposite
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          An Opposite trap flips the meaning of what the passage supports. In inference questions, these
          tempting choices look close to right but push in the reverse direction of the author’s point.
        </p>

        <MustKnow>
          In inference questions, an Opposite answer asserts the reverse of what the passage backs up.
          Watch for subtle polarity changes (for example, “not,” “never,” “cannot”) that turn a supported
          claim into its negation.
        </MustKnow>

        <section aria-labelledby="mini-illustration">
          <h3 id="mini-illustration" className="text-white font-semibold">
            A quick illustration
          </h3>
          <p className="mt-2">
            Suppose a passage says that a group of organisms performs certain memory and spatial tasks{" "}
            without using the same chemical messengers that most animals use. A common Opposite trap would be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-red-300">
              Opposite trap: “It’s impossible for an animal brain to carry out memory or spatial tasks
              without those messengers.” This contradicts the passage’s point.
            </li>
            <li className="text-green-300">
              Supported inference: “An animal’s environment can shape which abilities its brain develops.”
              This aligns with the idea that different biological setups can yield similar abilities if
              they adapt to similar conditions.
            </li>
          </ul>
          <p className="mt-2">
            The trap hinges on a tiny shift in direction—often just adding or removing a negation word.
          </p>
        </section>

        <MustKnow>
          To avoid the Opposite trap, check that the answer moves in the same direction as the text:
          if the passage points toward “can,” “sometimes,” or “less,” an option that says “cannot,” “never,”
          or “more” is likely the wrong way.
        </MustKnow>

        <section aria-labelledby="rc-example">
          <h3 id="rc-example" className="text-white font-semibold">
            Example: Reading Comprehension (Inference)
          </h3>

          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4 md:p-5">
            <h4 className="text-gray-100 font-semibold mb-2">Passage</h4>
            <div className="space-y-3 leading-relaxed">
              <p>
                Unlike conventional cars, which burn fossil fuels in an engine and thereby release carbon dioxide
                and other greenhouse gases, electric vehicles (EVs) draw power from the grid and do not emit those gases
                while being driven.
              </p>
              <p>
                Building a mid‑size gas vehicle typically generates roughly two to three tons of greenhouse gases
                (from smelting metals, fabricating chips, and assembling components). Producing an EV of comparable size
                tends to start higher because, beyond the usual manufacturing steps, the metals used in an EV’s
                lithium‑ion battery must be mined and processed using heavy equipment that burns fuel. As a result,
                the EV’s manufacturing footprint is about <K expr="70\%" /> larger than that of a similar gas vehicle
                before either car reaches buyers.
              </p>
              <p>
                After production, the balance shifts. On average, generating electricity to move an EV produces about{" "}
                <K expr="35\%" /> of the greenhouse gases associated with producing and burning gasoline to move a
                traditional car the same distance. Consequently, with each mile, totals tilt toward the EV. The two
                vehicles are roughly even at about{" "}
                <K expr="20{,}000" /> miles. By <K expr="100{,}000" /> miles, the gas car has accumulated around{" "}
                <K expr="80\%" /> more emissions overall than the EV. At <K expr="200{,}000" /> miles, the conventional
                car’s total sits near <K expr="80" /> tons, while the EV’s is about <K expr="40" /> tons.
              </p>
            </div>
          </div>

          <MCQExample
            number={20}
            prompt="The passage suggests that, relative to a comparable gas vehicle, the total greenhouse gas emissions tied to an EV are generally:"
            options={[
              "lower once both vehicles have reached 20,000 miles",
              "higher during day‑to‑day operation",
              "larger until the 20,000‑mile mark",
              "twice as large at 200,000 miles",
              "lower during the manufacturing stage",
            ]}
            correct="larger until the 20,000‑mile mark"
            solution={
              <>
                <p>
                  We’re comparing total emissions for the EV versus the gas vehicle at different points in the
                  life cycle.
                </p>

                <p>
                  Option A: The passage says totals are “about the same” at <K expr="20{,}000" /> miles,
                  not that the EV is lower. So A doesn’t match the text.
                </p>

                <p>
                  Option B (Opposite): While operating, the EV’s per‑mile impact comes from electricity
                  generation, which is about <K expr="35\%" /> of the per‑mile greenhouse gases for the
                  gas car’s fuel. So EV operation is lower, not higher. Opposite trap.
                </p>

                <p>
                  Option C: Early on, the EV starts behind because manufacturing its battery increases the initial
                  footprint by roughly <K expr="70\%" />. The totals equalize around <K expr="20{,}000" /> miles.
                  Therefore, before that point, the EV’s total is larger. This matches the passage and is correct.
                </p>

                <p>
                  Option D (Opposite): At <K expr="200{,}000" /> miles, the gas car is about <K expr="80" /> tons
                  versus the EV at about <K expr="40" /> tons—meaning the gas car is roughly 100% higher, not the EV.
                  Opposite direction.
                </p>

                <p>
                  Option E (Opposite): Manufacturing is where the EV starts out higher (about <K expr="70\%" /> more),
                  not lower. Again, opposite.
                </p>

                <p className="font-semibold text-green-300">Answer: C</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: in inference questions, confirm that the choice’s direction matches the passage. If the option
          flips the claim—especially with a small negation—it’s an Opposite trap.
        </p>
      </article>
    </main>
  );
}