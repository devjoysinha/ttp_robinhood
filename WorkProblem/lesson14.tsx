import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "10.9 Opposing Worker Problems | Work & Rate",
  description:
    "Learn how to solve opposing worker problems by subtracting rates. Includes a worked multiple‑choice example with KaTeX-rendered steps.",
};

function TeX({ expr, block = false }: { expr: string; block?: boolean }) {
  return (
    <span
      aria-label={expr}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          displayMode: block,
          output: "htmlAndMathml",
        }),
      }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.9 Opposing worker problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes two processes push in opposite directions: one makes
          progress, the other undoes it. These show up less often than
          “working‑together” problems, but they’re solved with the same
          rate–time–work logic.
        </p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Faucet fills a basin while the drain lets water out</li>
          <li>One person digs a hole while another refills it</li>
          <li>A pool is being filled while evaporation removes water</li>
          <li>One investment gains while another loses value</li>
        </ul>

        <MustKnow>
          When two actions oppose each other, use a difference of rates, not a
          sum. Net work comes from subtracting the smaller rate from the larger
          one. If the net rate is{" "}
          <TeX expr="r_{\text{net}} = r_{\text{fill}} - r_{\text{drain}}" />, then time to
          finish one job is{" "}
          <TeX expr="t = \dfrac{1}{r_{\text{net}}}" />.
        </MustKnow>

        <MCQExample
          number={18}
          prompt="A faucet alone can fill an empty tank in 20 minutes. A drain alone can empty a full tank in 36 minutes. If the faucet starts filling an empty tank while the drain is open, how long will it take to fill the tank completely?"
          options={["40 minutes", "45 minutes", "50 minutes", "54 minutes", "64 minutes"]}
          correct="45 minutes"
          solution={
            <>
              <p>
                Convert each time into a per‑minute rate (in tanks per minute):
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Faucet: <TeX expr="r_f = \dfrac{1}{20}" /> tank/min
                </li>
                <li>
                  Drain: <TeX expr="r_d = \dfrac{1}{36}" /> tank/min
                </li>
              </ul>
              <p>
                Because they oppose each other, the net rate is the difference:
              </p>
              <p>
                <TeX
                  block
                  expr="r_{\text{net}} = r_f - r_d = \frac{1}{20} - \frac{1}{36}
= \frac{9 - 5}{180} = \frac{4}{180} = \frac{1}{45}"
                />
              </p>
              <p>
                At a net rate of <TeX expr="\tfrac{1}{45}" /> tank per minute, the time
                to fill one tank is{" "}
                <TeX expr="t = \dfrac{1}{r_{\text{net}}} = 45" /> minutes.
              </p>
              <p>Answer: 45 minutes.</p>
            </>
          }
        />

        <p>
          Final takeaway: treat opposing processes exactly like normal work
          problems, but subtract the rates. Any twist you see in “combined
          worker” questions can also appear here—just keep the subtract‑the‑rates
          idea front and center.
        </p>
      </article>
    </main>
  );
}