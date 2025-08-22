import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

function K({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? "math expression"}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "15.2 Measurement Changes Expressed as Percents | Formula Logic",
  description:
    "See how percent changes to inputs affect a formula’s output. Work a mini‑example two ways (algebraic and testing numbers), then try two practice questions with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          15. Formula Logic
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          15.2 Measurement Changes Expressed as Percents
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many formula‑logic problems, you’re told that one or more variables
          increase or decrease by a certain percent, and you’re asked how the
          result of the formula changes. Your goal is to translate those percent
          tweaks on the inputs into a single percent change on the output.
        </p>

        <MustKnow>
          <p className="font-semibold text-white">Algebraic game plan</p>
          <ol className="ml-5 list-decimal space-y-1">
            <li>Represent the original variables and compute the initial output.</li>
            <li>Apply the stated percent changes to those variables.</li>
            <li>Plug the adjusted variables back into the formula to get the new output.</li>
            <li>
              Use
              <K expr="\text{percent change}=\dfrac{\text{new}-\text{old}}{\text{old}}\times 100\%" ariaLabel="percent change equals (new minus old) divided by old times 100 percent" />
              to answer the question.
            </li>
          </ol>
        </MustKnow>

        <p>Quick mini‑example:</p>
        <p className="pl-4 text-gray-200">
          If the surface area of a cube is{" "}
          <K expr="6e^{2}" ariaLabel="six e squared" /> where e is edge length,
          by what percent does the surface area drop if each edge is cut by 70%?
        </p>

        <p className="font-semibold text-white">Algebraic approach</p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            Let the original edge length be x. Then the original surface area is{" "}
            <K expr="6x^{2}" ariaLabel="six x squared" />.
          </li>
          <li>
            Reducing each edge by 70% leaves 30% of the original, so the new edge
            is <K expr="0.3x" ariaLabel="zero point three x" />.
          </li>
          <li>
            New surface area:
            <K expr="6(0.3x)^2=6(0.09x^2)=0.54x^{2}" display ariaLabel="six times zero point three x squared equals zero point five four x squared" />
          </li>
          <li>
            Percent change:
            <K
              display
              expr="\dfrac{0.54x^{2}-6x^{2}}{6x^{2}}\times 100\%=\dfrac{-5.46}{6}\times 100\%=-91\%"
              ariaLabel="(0.54x squared minus 6x squared) over 6x squared times 100 percent equals minus 91 percent"
            />
            The surface area decreases by 91%.
          </li>
        </ol>

        <p className="font-semibold text-white">Testing numbers approach</p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            Pick a convenient edge, say x = 10. Then{" "}
            <K expr="S_{\text{orig}}=6\cdot 10^{2}=600" ariaLabel="six times ten squared equals six hundred" />.
          </li>
          <li>
            New edge <K expr="=0.3\cdot 10=3" ariaLabel="zero point three times ten equals three" />.
          </li>
          <li>
            <K expr="S_{\text{new}}=6\cdot 3^{2}=54" ariaLabel="six times three squared equals fifty four" />.
          </li>
          <li>
            Percent change:
            <K
              display
              expr="\dfrac{54-600}{600}\times 100\%=-91\%"
              ariaLabel="(54 minus 600) over 600 times 100 percent equals minus 91 percent"
            />
            Same result: a 91% drop.
          </li>
        </ol>

        <MustKnow>
          <p className="font-semibold text-white">Key reminders</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Percent changes on 1‑D, 2‑D, or 3‑D measures often scale differently
              because formulas involve powers, e.g.,{" "}
              <K expr="\pi r^2" ariaLabel="pi r squared" /> or{" "}
              <K expr="\pi r^2 h" ariaLabel="pi r squared h" />.
            </li>
            <li>Testing numbers is a fast cross‑check on your algebra.</li>
          </ul>
        </MustKnow>

        <section aria-label="Practice questions" className="space-y-6">
          <MCQExample
            number={1}
            prompt={
              <>
                If the radius of a circle is reduced by 10%, by what percent does
                the circle’s area decrease? (Area of a circle:{" "}
                <K expr="\pi r^{2}" ariaLabel="pi r squared" />)
              </>
            }
            options={[
              "10 percent",
              "11 percent",
              "19 percent",
              "22 percent",
              "25 percent",
            ]}
            correct="19 percent"
            solution={
              <>
                <p>
                  Let the original radius be x. Original area:{" "}
                  <K expr="\pi x^{2}" ariaLabel="pi x squared" />.
                  A 10% decrease gives a new radius of{" "}
                  <K expr="0.9x" ariaLabel="zero point nine x" />.
                </p>
                <p>
                  New area:
                  <K
                    display
                    expr="\pi(0.9x)^{2}=0.81\pi x^{2}"
                    ariaLabel="pi times zero point nine x squared equals zero point eight one pi x squared"
                  />
                </p>
                <p>
                  Percent change:
                  <K
                    display
                    expr="\dfrac{0.81\pi x^{2}-\pi x^{2}}{\pi x^{2}}\times 100\%=-19\%"
                    ariaLabel="(0.81 pi x squared minus pi x squared) over pi x squared times 100 percent equals minus 19 percent"
                  />
                  So the area decreases by 19%.
                </p>
                <p className="text-gray-400">
                  Pitfall check: a 10% cut to a 1‑D measure (radius) doesn’t mean a
                  10% cut to a 2‑D measure (area).
                </p>
              </>
            }
          />

          <MCQExample
            number={2}
            prompt={
              <>
                A right cylinder’s radius increases by 50%, and its height is
                doubled. By what percent does the cylinder’s volume increase?
                (Volume of a right cylinder:{" "}
                <K expr="\pi r^{2}h" ariaLabel="pi r squared h" />)
              </>
            }
            options={[
              "125 percent",
              "350 percent",
              "450 percent",
              "800 percent",
              "900 percent",
            ]}
            correct="350 percent"
            solution={
              <>
                <p>
                  Let the original dimensions be radius r and height h, so the
                  original volume is <K expr="\pi r^{2}h" ariaLabel="pi r squared h" />.
                </p>
                <p>
                  The new radius is <K expr="1.5r" ariaLabel="one point five r" /> and
                  the new height is <K expr="2h" ariaLabel="two h" />. Thus:
                  <K
                    display
                    expr="V_{\text{new}}=\pi(1.5r)^{2}(2h)=\pi\cdot 2.25r^{2}\cdot 2h=4.5\pi r^{2}h"
                    ariaLabel="V new equals pi times one point five r squared times two h equals four point five pi r squared h"
                  />
                  The volume is 4.5 times the original.
                </p>
                <p>
                  A factor of 4.5 corresponds to a 350% increase because{" "}
                  <K expr="4.5=1+3.5" ariaLabel="four point five equals one plus three point five" />.
                </p>
              </>
            }
          />
        </section>

        <p className="text-gray-300">
          Bottom line: convert input changes into algebra or test friendly
          numbers, recompute, then apply the percent change formula. Powers and
          products in the formula determine how strongly the output moves.
        </p>
      </article>
    </main>
  );
}