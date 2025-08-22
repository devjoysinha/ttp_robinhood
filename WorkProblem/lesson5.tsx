import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

function KaTeX({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={display ? "katex-display my-2" : "katex"}
      role="img"
      aria-label={ariaLabel || expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "10.6 Single Worker Problems | Work, Rate, Time",
  description:
    "Master single‑worker rate problems: set up rate = work ÷ time, convert units cleanly, and avoid common traps. Includes two GMAT‑style multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">10. Work Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">10.6 Single worker problems</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Single‑worker problems revolve around one foundational relationship: rate, work, and time. When you keep
          the units consistent, the math is straightforward and the setup tells you exactly what to do.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-medium text-white">Core relationships and units</p>
            <KaTeX display expr="\,\text{Rate} \;=\; \dfrac{\text{Work}}{\text{Time}}, \qquad \text{Time} \;=\; \dfrac{\text{Work}}{\text{Rate}}, \qquad \text{Work} \;=\; (\text{Rate})(\text{Time})\," />
            <ul className="list-inside list-disc text-sm text-gray-200">
              <li>Track units explicitly, e.g., cars/hour, widgets/hour, hours, days.</li>
              <li>Convert units before computing, not after you finish.</li>
              <li>Write what you need, then plug into the matching formula.</li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt='A machine named “Addison” produces 6 toy cars in 12 hours. How many days are needed for Addison to build 36 toy cars?'
          options={["3", "4", "5", "6", "7"]}
          correct="3"
          solution={
            <>
              <p className="mb-2">Compute Addison’s hourly rate and then convert the final time to days.</p>
              <KaTeX display expr="\text{Rate} \;=\; \dfrac{6\ \text{cars}}{12\ \text{hours}} \;=\; \dfrac{1}{2}\ \text{car/hour}" />
              <KaTeX display expr="\text{Time} \;=\; \dfrac{36\ \text{cars}}{\left(\tfrac{1}{2}\ \text{car/hour}\right)} \;=\; 72\ \text{hours}" />
              <KaTeX display expr="72\ \text{hours} \;=\; \dfrac{72}{24}\ \text{days} \;=\; 3\ \text{days}" />
              <p className="mt-2">Answer: 3.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Machine A assembles 40 widgets in 2 hours. Machine B works 50% faster than Machine A. How many hours will Machine B need to assemble 300 widgets?"
          options={["2.5 hours", "3.75 hours", "7.5 hours", "10 hours", "15 hours"]}
          correct="10 hours"
          solution={
            <>
              <p className="mb-2">First find A’s rate, then scale it by 50% to get B’s rate.</p>
              <KaTeX display expr="R_A \;=\; \dfrac{40\ \text{widgets}}{2\ \text{hours}} \;=\; 20\ \text{widgets/hour}" />
              <KaTeX display expr="R_B \;=\; 1.5\,R_A \;=\; 1.5 \times 20 \;=\; 30\ \text{widgets/hour}" />
              <p className="mt-4 mb-2">Now compute the time for B to complete 300 widgets:</p>
              <KaTeX display expr="\text{Time} \;=\; \dfrac{300\ \text{widgets}}{30\ \text{widgets/hour}} \;=\; 10\ \text{hours}" />
              <p className="mt-2">Answer: 10 hours.</p>
            </>
          }
        />

        <p>
          Bottom line: write the relationship you need, keep units aligned, and the arithmetic becomes routine.
        </p>
      </article>
    </main>
  );
}