import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Import KaTeX CSS once at the root (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

import katex from "katex";

function K({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  // Server-side KaTeX render with a11y-friendly fallback
  let html = "";
  try {
    html = katex.renderToString(expr, {
      displayMode: display,
      throwOnError: false,
      strict: "ignore",
      output: "html",
      trust: true,
    });
  } catch {
    html = expr; // fallback
  }
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "11.16 Inverse Variation | Ratios",
  description:
    "Understand inverse variation (y = k/x): how changing one quantity by a factor changes the other by the reciprocal factor. Includes a real‑world setup and two practice multiple‑choice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">11.16 Inverse Variation</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Inverse variation captures a “one goes up, the other goes down” relationship. When we say that y varies
          inversely with x, increasing x by some factor forces y to shrink by the same factor, and decreasing x by a
          factor makes y grow by that factor.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="mb-2">
              Inverse variation is modeled by the equation <K expr={"y=\\dfrac{k}{x}"} ariaLabel="y equals k over x" />,
              where k is a positive constant.
            </p>
            <ul className="list-disc pl-6">
              <li>
                If x is multiplied by r, then y is divided by r.
              </li>
              <li>
                If x is divided by r, then y is multiplied by r.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Quick real‑world check: suppose the time <em>d</em> it takes to finish a job varies inversely with the number
          of workers <em>p</em>. Then <K expr={"d=\\dfrac{k}{p}"} ariaLabel="d equals k over p" />. If 3 workers finish
          in 8 days, then <K expr={"8=\\dfrac{k}{3}"} /> so <K expr={"k=24"} />. With 4 workers,
          <K expr={"d=\\dfrac{24}{4}=6"} ariaLabel="d equals 24 divided by 4 equals 6" /> days.
        </p>

        <MCQExample
          number={28}
          prompt="The variable y varies inversely as x. If x = 7 yields y = 3.5, what is y when x = 10?"
          options={["2", "2.45", "3.5", "5.0", "24.5"]}
          correct="2.45"
          solution={
            <>
              <p>
                For inverse variation, <K expr={"y=\\dfrac{k}{x}"} /> so the product <K expr={"xy"} /> is constant. From
                the given pair, <K expr={"k=xy=7\\cdot 3.5=24.5"} ariaLabel="k equals 7 times 3.5 equals 24.5" />. Then
                for x = 10,
                <K expr={"y=\\dfrac{24.5}{10}=2.45"} ariaLabel="y equals 24.5 over 10 equals 2.45" />. Answer: 2.45.
              </p>
            </>
          }
        />

        <MCQExample
          number={29}
          prompt="Two children sit on opposite sides of a seesaw. To balance, the distance from the fulcrum is inversely related to the child’s weight. If Saroya weighs 62 lb and sits 6 ft from the fulcrum, how far from the fulcrum should Nitish (80 lb) sit on the other side to balance the seesaw?"
          options={["4.65", "5.00", "6.45", "8.26", "9.30"]}
          correct="4.65"
          solution={
            <>
              <p>
                Balancing a seesaw means equal torques: weight × distance is the same on each side, so distance varies
                inversely with weight. Let <K expr={"d=\\dfrac{k}{w}"} ariaLabel="d equals k over w" />. Using Saroya’s
                data, <K expr={"6=\\dfrac{k}{62}"} /> gives <K expr={"k=372"} />. For Nitish (<K expr={"w=80"} />),
                <K expr={"d=\\dfrac{372}{80}=4.65"} ariaLabel="d equals 372 over 80 equals 4.65" /> ft. Answer: 4.65.
              </p>
            </>
          }
        />

        <MustKnow>
          When a relationship is inverse, think “product stays constant.” Lock in the constant with one known pair, then
          apply <K expr={"y=\\dfrac{k}{x}"} /> (or the context‑specific version) to find any missing value.
        </MustKnow>

        <p>
          Up next: handling more involved inverse‑variation setups, including constraints and combined variation.
        </p>
      </article>
    </main>
  );
}