import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.9 Exponential Decay Problems | General Word Problems",
  description:
    "Learn how exponential decay works and why the amount removed gets smaller each period. Includes a worked multiple‑choice example with clear, KaTeX‑rendered steps.",
};

function K({
  children,
  display = false,
  ariaLabel,
}: {
  children: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  if (display) {
    return (
      <div
        className="my-2 overflow-x-auto"
        aria-label={ariaLabel || "math"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className="inline-block align-middle"
      aria-label={ariaLabel || "math"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.9 Exponential Decay Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Exponential decay describes a repeated percentage decrease. You start
          with an initial amount and, during each period, the amount is reduced
          by the same fraction (for example, “drops by 50% each week”). Even
          though the rate is constant, the absolute decrease gets smaller over
          time because the base you’re reducing is shrinking.
        </p>

        <p>
          For instance, if you begin with $1{,}000{,}000$ and remove half, you
          lose $500{,}000$. Halving again removes $250{,}000$, and another half
          removes $125{,}000$. The percentage removed is the same, but the raw
          amount declines each period.
        </p>

        <MustKnow>
          In exponential decay, each period removes the same fraction of the
          current amount, so the actual amount removed decreases over time. The
          largest drop happens in the very first period.
        </MustKnow>

        <MCQExample
          number={48}
          prompt="An investment account loses 50% of its value every week. The amount lost during week 3 is what fraction of the balance remaining at the end of week 1?"
          options={["1/32", "1/16", "1/8", "1/4", "1/2"]}
          correct="1/4"
          solution={
            <>
              <p>
                Let the initial balance be <K>x</K>. After one week, the account
                holds <K ariaLabel='x over 2'>{"\\dfrac{x}{2}"}</K>. After two
                weeks, it holds <K ariaLabel='x over 4'>{"\\dfrac{x}{4}"}</K>.
              </p>
              <p>
                The loss in week 3 is 50% of the week‑2 balance:
                <K display ariaLabel='one half times x over 4 equals x over 8'>
                  {"\\dfrac{1}{2}\\left(\\dfrac{x}{4}\\right)=\\dfrac{x}{8}"}
                </K>
              </p>
              <p>
                We’re comparing that week‑3 loss to the balance at the end of
                week 1:
                <K display ariaLabel='ratio (x over 8) divided by (x over 2) equals 1 over 4'>
                  {
                    "\\dfrac{\\dfrac{x}{8}}{\\dfrac{x}{2}}=\\dfrac{1}{8}\\cdot\\dfrac{2}{1}=\\dfrac{1}{4}"
                  }
                </K>
                So, the fraction is <K>{"\\dfrac{1}{4}"}</K>.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when a quantity decays by a fixed percentage each period,
          write the sequence or use the decay factor directly. Ratios often
          simplify nicely because the starting value cancels.
        </p>
      </article>
    </main>
  );
}