import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Lightweight inline KaTeX helper with a screen‑reader fallback
function KInline(props: { latex: string; sr?: string; className?: string }) {
  const { latex, sr, className } = props;
  const html = katex.renderToString(latex, {
    throwOnError: false,
    output: "html",
    displayMode: false,
  });
  return (
    <span className={className}>
      <span
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: html }}
        className="whitespace-nowrap align-baseline"
      />
      {sr ? <span className="sr-only">{sr}</span> : null}
    </span>
  );
}

export const metadata: Metadata = {
  title: "11.12 Adjusting Ratios with Multiplication and Division | Ratios",
  description:
    "Learn how to scale ratios by multiplying or dividing, and practice with a GMAT-style problem. Includes clear steps, fraction arithmetic, and an answer explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.12 Adjusting ratios with multiplication and division
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some problems ask you to tweak an existing ratio by scaling it up or
          down. You can do this by multiplying or dividing the ratio itself.
          For instance, if an engine mixes fuel and oxygen in a{" "}
          <KInline latex="4:3" sr="4 to 3" /> ratio, then halving the
          fuel-to-oxygen ratio means multiplying that fraction by{" "}
          <KInline latex="\tfrac{1}{2}" sr="one half" />:
          {" "}
          <KInline latex="\frac{\text{fuel}}{\text{oxygen}}=\frac{4}{3}\times\frac{1}{2}=\frac{2}{3}" sr="fuel over oxygen equals four thirds times one half equals two thirds" />.
        </p>

        <MustKnow>
          To adjust a ratio multiplicatively, scale the ratio as a fraction.
          Halving a ratio multiplies it by 1/2; tripling multiplies it by 3,
          and so on. For multipart ratios, align on a common part (using LCM if
          needed) so all pieces are consistent before reading off the final
          combined ratio.
        </MustKnow>

        <section aria-labelledby="worked-example">
          <h3 id="worked-example" className="sr-only">
            Worked example: adjusting a multipart ratio
          </h3>

          <MCQExample
            number={19}
            prompt={
              <>
                A dessert uses sugar, vanilla, and eggs in the ratio{" "}
                <KInline latex="12:6:3" sr="twelve to six to three" />. To improve the
                flavor, the chef halves the sugar-to-vanilla ratio and triples
                the sugar-to-eggs ratio. If the finished dessert contains{" "}
                <KInline latex="4" sr="four" /> ounces of sugar, how many total ounces of
                dessert did the chef make?
              </>
            }
            options={[
              "4 1/3 ounces",
              "5 ounces",
              "6 1/3 ounces",
              "7 2/3 ounces",
              "8 1/3 ounces",
            ]}
            correct="8 1/3 ounces"
            solution={
              <>
                <p className="mb-2">
                  Start by writing the two pairwise ratios from{" "}
                  <KInline latex="12:6:3" sr="twelve to six to three" />:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    <KInline
                      latex="\dfrac{\text{sugar}}{\text{vanilla}}=\dfrac{12}{6}=2"
                      sr="sugar over vanilla equals twelve over six equals two"
                    />
                  </li>
                  <li>
                    <KInline
                      latex="\dfrac{\text{sugar}}{\text{eggs}}=\dfrac{12}{3}=4"
                      sr="sugar over eggs equals twelve over three equals four"
                    />
                  </li>
                </ul>

                <p className="mt-4">
                  Apply the adjustments:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    Halve sugar-to-vanilla:{" "}
                    <KInline
                      latex="\dfrac{\text{sugar}}{\text{vanilla}}=2\times\dfrac{1}{2}=1"
                      sr="sugar over vanilla equals two times one half equals one"
                    />
                    , so sugar and vanilla must be equal.
                  </li>
                  <li>
                    Triple sugar-to-eggs:{" "}
                    <KInline
                      latex="\dfrac{\text{sugar}}{\text{eggs}}=4\times 3=12"
                      sr="sugar over eggs equals four times three equals twelve"
                    />
                    .
                  </li>
                </ul>

                <p className="mt-4">
                  Now align the two results using the common part “sugar.”
                  The first gives sugar = 1 unit; the second gives sugar = 12
                  units. The least common multiple is 12, so scale the first
                  relationship by 12:
                </p>

                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    From <KInline latex="\dfrac{\text{sugar}}{\text{vanilla}}=1" sr="sugar over vanilla equals one" />,
                    multiply both parts by 12: sugar = 12, vanilla = 12.
                  </li>
                  <li>
                    From{" "}
                    <KInline
                      latex="\dfrac{\text{sugar}}{\text{eggs}}=12"
                      sr="sugar over eggs equals twelve"
                    />
                    , we already have sugar = 12, eggs = 1.
                  </li>
                </ul>

                <p className="mt-4">
                  Therefore, the adjusted combined ratio is{" "}
                  <KInline latex="12:12:1" sr="twelve to twelve to one" /> (sugar : vanilla : eggs).
                </p>

                <p className="mt-4">
                  Let the ratio multiplier be{" "}
                  <KInline latex="x" sr="x" />. Given sugar is{" "}
                  <KInline latex="12x=4" sr="twelve x equals four" />, we get{" "}
                  <KInline latex="x=\tfrac{1}{3}" sr="x equals one third" />.
                </p>

                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    Sugar: <KInline latex="12x=12\times\tfrac{1}{3}=4" sr="twelve times one third equals four" /> oz
                  </li>
                  <li>
                    Vanilla: <KInline latex="12x=4" sr="four" /> oz
                  </li>
                  <li>
                    Eggs: <KInline latex="1x=\tfrac{1}{3}" sr="one third" /> oz
                  </li>
                </ul>

                <p className="mt-4">
                  Total = <KInline latex="4+4+\tfrac{1}{3}=8\tfrac{1}{3}" sr="four plus four plus one third equals eight and one third" /> ounces.
                  Correct choice: 8 1/3 ounces.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: when you scale pairwise ratios, express them as fractions,
          apply the multiplicative change, and then synchronize the shared
          quantity so all parts agree. Once the combined ratio is set, use the
          ratio multiplier to compute actual amounts.
        </p>
      </article>
    </main>
  );
}