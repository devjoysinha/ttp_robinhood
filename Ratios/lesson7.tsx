import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX CSS is loaded globally (e.g., in app/layout.tsx or globals.css):
// import "katex/dist/katex.min.css";
const InlineMath = dynamic(
  () => import("react-katex").then((m) => m.InlineMath),
  { ssr: false, loading: () => <span aria-hidden="true">…</span> }
);

export const metadata: Metadata = {
  title: "11.7 Ratio Multipliers Can Be Fractional | Ratios",
  description:
    "Learn why a ratio’s multiplier doesn’t have to be an integer. See when fractional multipliers make sense and how to compute totals. Includes a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.7 The ratio multiplier doesn’t have to be an integer
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In earlier problems, the multiplier that scales a ratio was a whole
          number. That makes sense in situations where you&apos;re counting
          discrete items that can&apos;t be split, such as people or cars.
          However, many GMAT scenarios involve measurements that can be divided,
          like volume, mass, or length. In those contexts, the ratio multiplier
          can be a fraction.
        </p>

        <p>
          For instance, in a baking scenario you could easily see quantities
          such as 1.5 cups of flour, 0.75 cups of sugar, or 1.25 cups of chips.
          Nothing prevents those amounts from being fractional, so the shared
          scaling factor for the ratio parts can be fractional as well.
        </p>

        <MustKnow>
          A ratio a : b : c can be written as a·k : b·k : c·k for some common
          multiplier k. When the quantities being measured are continuous
          (volume, mass, time, etc.), k may be a fraction. If one part is
          known, solve for k using known = (part coefficient)·k, then scale all
          parts by k. The total is (a + b + c)·k.
        </MustKnow>

        <MCQExample
          number={23}
          prompt="Emma is making pasta sauce. The ratio of cups of cheese : tomatoes : cream is 2 : 3 : 7, respectively. If she has only 5 cups of cream, how many cups of sauce can she make?"
          options={["53/7", "60/7", "70/8", "80/9", "12"]}
          correct="60/7"
          solution={
            <>
              <p>
                Let the common multiplier be k cups per ratio part. Then the
                amounts are:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  cheese = 2k, tomatoes = 3k, cream = 7k
                </li>
              </ul>
              <p>
                Since cream is 5 cups, set 7k = 5, so k ={" "}
                <InlineMath math="5/7" />.
              </p>
              <p>
                Therefore:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  cheese = 2k = <InlineMath math="2 \cdot \frac{5}{7} = \frac{10}{7}" />
                </li>
                <li>
                  tomatoes = 3k ={" "}
                  <InlineMath math="3 \cdot \frac{5}{7} = \frac{15}{7}" />
                </li>
                <li>
                  cream = 7k = 5
                </li>
              </ul>
              <p>
                Total sauce ={" "}
                <InlineMath math="\frac{10}{7} + \frac{15}{7} + 5 = \frac{10 + 15 + 35}{7} = \frac{60}{7}" />
                . So the answer is 60/7.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when parts are measured (not counted), don’t force the ratio
          multiplier to be a whole number. Solve for the common factor directly,
          even if it’s fractional, and scale each part accordingly.
        </p>
      </article>
    </main>
  );
}