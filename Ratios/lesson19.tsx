import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className="whitespace-nowrap align-baseline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({
  expr,
  ariaLabel,
}: {
  expr: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    strict: "ignore",
    displayMode: true,
  });
  return (
    <div
      role="math"
      aria-label={ariaLabel}
      className="my-3 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "11.17 Combined and Joint Variation | Ratios",
  description:
    "Learn how to model combined and joint variation with constants of proportionality. Includes two worked multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.17 Combined and Joint Variation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section className="space-y-4">
          <p>
            A quantity can depend on multiple variables at the same time. In a
            combined variation setting, one variable is directly proportional to
            one input and inversely proportional to another. For instance, if y
            grows with x but shrinks as z grows, we capture that with
            <span className="mx-1">
              <MathInline expr="y=\dfrac{kx}{z}" ariaLabel="y equals k x over z" />
            </span>
            where k is a constant for the situation.
          </p>

          <MustKnow>
            A combined variation has the form
            <span className="mx-1">
              <MathInline expr="y=\dfrac{kx}{z}" ariaLabel="y equals k x over z" />
            </span>
            (direct in x, inverse in z). The constant of proportionality k is
            fixed for all valid triples in the same context and can be found by
            plugging in any one data point.
          </MustKnow>

          <div className="space-y-2">
            <p className="font-semibold text-white">Mini‑example</p>
            <p>
              Suppose y varies directly with x and inversely with z. When
              <MathInline expr="x=2" ariaLabel="x equals 2" />,{" "}
              <MathInline expr="z=6" ariaLabel="z equals 6" />, we have{" "}
              <MathInline expr="y=8" ariaLabel="y equals 8" />. First find k:
            </p>
            <MathBlock
              expr={`y=\\dfrac{kx}{z}\\quad\\Rightarrow\\quad 8=\\dfrac{k\\cdot 2}{6}\\;\\Rightarrow\\;48=2k\\;\\Rightarrow\\;k=24`}
              ariaLabel="Compute k equals 24"
            />
            <p>
              Then for <MathInline expr="x=3" /> and <MathInline expr="z=8" />:
            </p>
            <MathBlock
              expr={`y=\\dfrac{24\\cdot 3}{8}=9`}
              ariaLabel="y equals 9"
            />
          </div>
        </section>

        <MCQExample
          number={32}
          prompt="The pressure P of a gas varies directly with its absolute temperature T and inversely with its volume V. A 100‑L sample exerts P = 33.2 kPa at T = 400 K. If the temperature becomes 500 K and the volume becomes 80 L, what is the new pressure (nearest kPa)?"
          options={["1", "11", "52", "482", "519"]}
          correct="52"
          solution={
            <>
              <p>
                Model the relationship as{" "}
                <MathInline
                  expr="P=\dfrac{kT}{V}"
                  ariaLabel="P equals k T over V"
                />
                . Use the given data to determine k:
              </p>
              <MathBlock
                expr={`33.2=\\dfrac{k\\cdot 400}{100} \\;\\Rightarrow\\; 33.2=4k \\;\\Rightarrow\\; k=8.3`}
                ariaLabel="k equals 8.3"
              />
              <p>Now compute the new pressure:</p>
              <MathBlock
                expr={`P=\\dfrac{8.3\\cdot 500}{80}=51.875\\approx 52\\,\\text{kPa}`}
                ariaLabel="P approximately 52 kilopascals"
              />
              <p>Answer: 52.</p>
            </>
          }
        />

        <section className="space-y-4">
          <p>
            In a joint variation, one variable is directly proportional to the
            product of two others:
            <span className="mx-1">
              <MathInline expr="y=kxz" ariaLabel="y equals k x z" />
            </span>
            . Similarly, inverse joint variation uses the reciprocal of a
            product:
            <span className="mx-1">
              <MathInline
                expr="y=\dfrac{k}{xz}"
                ariaLabel="y equals k over x z"
              />
            </span>
            .
          </p>

          <MustKnow>
            Examples of common translations:
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                “y varies jointly with x and z” →{" "}
                <MathInline expr="y=kxz" ariaLabel="y equals k x z" />
              </li>
              <li>
                “y varies inversely jointly with x and z” →{" "}
                <MathInline
                  expr="y=\dfrac{k}{xz}"
                  ariaLabel="y equals k over x z"
                />
              </li>
              <li>
                “A varies inversely with the square of B and the fourth root of
                C” →{" "}
                <MathInline
                  expr="A=\dfrac{k}{B^{2}\,\\sqrt[4]{C}}"
                  ariaLabel="A equals k over B squared times fourth root of C"
                />
              </li>
            </ul>
          </MustKnow>
        </section>

        <MCQExample
          number={33}
          prompt="The volume V of a pyramid varies jointly with its height h and the area A of its base. A pyramid with h = 12 ft and A = 23 ft² has V = 92 ft³. What is the volume, in ft³, of a pyramid with h = 13 ft and A = 24 ft²?"
          options={["48", "104", "192", "276", "312"]}
          correct="104"
          solution={
            <>
              <p>
                Write{" "}
                <MathInline expr="V=khA" ariaLabel="V equals k h A" />, then
                solve for k using the first pyramid:
              </p>
              <MathBlock
                expr={`92=k\\cdot 12\\cdot 23\\;\\Rightarrow\\;k=\\dfrac{92}{276}=\\dfrac{1}{3}`}
                ariaLabel="k equals one third"
              />
              <p>Now find V for h = 13 and A = 24:</p>
              <MathBlock
                expr={`V=\\dfrac{1}{3}\\cdot 13\\cdot 24=104`}
                ariaLabel="V equals one hundred four"
              />
              <p>Answer: 104.</p>
            </>
          }
        />

        <section className="space-y-2">
          <p>
            Bottom line: pick the right proportional model, find the constant
            k from any complete data point, and then evaluate the target
            scenario with that same k.
          </p>
        </section>
      </article>
    </main>
  );
}