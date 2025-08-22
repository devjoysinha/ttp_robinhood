import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX for math rendering (server-safe)
import { renderToString } from "katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "9.16 Relative Motion Rate Questions | Rate Problems",
  description:
    "Learn how external forces like wind and current affect relative speed. See how to set up equations with equal travel times and practice with two GMAT-style problems, fully explained.",
};

// Lightweight KaTeX helper
function K({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "warn",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? `math: ${expr}`}
      className={display ? "block my-2 overflow-x-auto" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Rate Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">9.16 Relative Motion Rate Questions</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In relative motion questions, something outside the object—such as wind or a water current—changes how
          fast that object moves relative to the ground. Your job is to adjust the object’s speed by adding or
          subtracting the effect of that external force, then use standard rate-time-distance relationships.
        </p>

        <MustKnow>
          - When an object moves with the external force, speeds add, so it travels faster.{" "}
          <br />- When it moves against the external force, speeds subtract, so it travels slower.
          <div className="mt-2">
            <K expr="v_{\text{with}} = v_{\text{object}} + v_{\text{force}}" />
            <K expr="v_{\text{against}} = v_{\text{object}} - v_{\text{force}}" />
          </div>
        </MustKnow>

        <p>Common examples include:</p>
        <ul className="list-disc pl-6">
          <li>Planes with a tailwind or headwind change ground speed.</li>
          <li>Boats in a current move faster downstream and slower upstream.</li>
        </ul>

        <p>
          We’ll also use the core relationship between distance, rate, and time:
          <span className="ml-2">
            <K expr="t=\dfrac{d}{r}" ariaLabel="time equals distance divided by rate" />
          </span>
        </p>

        <section aria-labelledby="ex27">
          <MCQExample
            number={27}
            prompt="A plane flies 200 mph in still air. It can travel 800 miles with a steady tailwind in the same time it travels 600 miles against the same wind. What is the wind's speed?"
            options={["200 mph", "200/7 mph", "400 mph", "400/7 mph", "500 mph"]}
            correct="200/7 mph"
            solution={
              <>
                <p>
                  Let the wind speed be <K expr="w" /> mph. With a tailwind, the plane’s ground speed is{" "}
                  <K expr="200 + w" />; into a headwind, it’s <K expr="200 - w" />. We’re told the travel times are
                  equal:
                </p>
                <K display expr="\frac{800}{200+w}=\frac{600}{200-w}" />
                <p>Cross-multiply and solve:</p>
                <K display expr="800(200-w)=600(200+w)" />
                <K display expr="160{,}000-800w=120{,}000+600w" />
                <K display expr="1{,}400w=40{,}000\quad\Rightarrow\quad w=\frac{40{,}000}{1{,}400}=\frac{200}{7}\text{ mph}" />
                <p>Therefore, the wind’s speed is 200/7 mph.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex28">
          <MCQExample
            number={28}
            prompt="A moving walkway is 350 feet long and runs at 1.5 ft/s. A child walks at 2 ft/s. The child walks with the walkway to the end, immediately turns, and walks back against the walkway. How long to return to the starting point?"
            options={["200 seconds", "350 seconds", "600 seconds", "700 seconds", "800 seconds"]}
            correct="800 seconds"
            solution={
              <>
                <p>
                  With the walkway, the child’s ground speed is <K expr="2+1.5=3.5" /> ft/s. Time to reach the end:
                </p>
                <K display expr="t_1=\frac{350}{3.5}=100\text{ s}" />
                <p>
                  Against the walkway, the ground speed is <K expr="2-1.5=0.5" /> ft/s. Time to return:
                </p>
                <K display expr="t_2=\frac{350}{0.5}=700\text{ s}" />
                <p>Total time: 100 + 700 = 800 seconds.</p>
              </>
            }
          />
        </section>

        <MustKnow>
          The workflow is consistent:
          <br />1) Adjust speed by adding/subtracting the external force.{" "}
          <br />2) Use <K expr="t=\dfrac{d}{r}" /> for each leg.{" "}
          <br />3) If times are equal, set them equal and solve. Keep units consistent throughout.
        </MustKnow>
      </article>
    </main>
  );
}