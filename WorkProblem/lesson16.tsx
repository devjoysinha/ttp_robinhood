import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Be sure KaTeX CSS is loaded once in your app (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import katex from "katex";

function Math({
  expr,
  display = false,
  className = "",
  ariaLabel = "mathematical expression",
}: {
  expr: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "10.10.1 Rate as a Multiple | Work Problems",
  description:
    "Learn how to model work-rate problems when one worker’s rate is a multiple of another’s. Includes a must‑know tip and a fully worked multiple‑choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.10.1 When one rate is a multiple of another rate
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a problem tells you that one worker is a certain multiple as fast
          as another, anchor one rate with a variable and write the other as a
          multiple of that variable. For instance, if Person A works x times as
          fast as Person B, assign B a baseline rate and scale A by x. Either
          direction works—choose the version that keeps the algebra simple.
        </p>

        <MustKnow>
          If object A works x times as fast as object B and B’s rate is
          <Math expr="r" ariaLabel="r" />, then A’s rate is{" "}
          <Math expr="x\,r" ariaLabel="x r" />. You could also set A’s rate to{" "}
          <Math expr="r" ariaLabel="r" /> and B’s to{" "}
          <Math expr="r/x" ariaLabel="r divided by x" />; both describe the same
          relationship.
        </MustKnow>

        <section aria-labelledby="modeling-rates" className="space-y-3">
          <h3 id="modeling-rates" className="text-xl font-semibold text-white">
            Modeling the relationship
          </h3>
          <p>
            Suppose Tom’s rate is four times Joe’s. Two equivalent setups are:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Let Joe be <Math expr="r" /> fish/hour and Tom be{" "}
              <Math expr="4r" /> fish/hour.
            </li>
            <li>
              Or let Tom be <Math expr="r" /> fish/hour and Joe be{" "}
              <Math expr="r/4" /> fish/hour.
            </li>
          </ul>
          <p>
            Use whichever makes the combined-rate equation and arithmetic more
            direct for the problem at hand.
          </p>
        </section>

        <MCQExample
          number={19}
          prompt="Joe catches fish at 4 times Mark’s rate. Together they catch 60 fish per hour. If Mark increases his speed to match Joe’s (and both then keep constant rates), how many fish will they catch in two hours?"
          options={["60", "72", "96", "120", "192"]}
          correct="192"
          solution={
            <>
              <p className="mb-2">
                Let Mark’s original rate be <Math expr="r" /> fish/hour. Then
                Joe’s rate is <Math expr="4r" />. The combined rate is:
              </p>
              <Math expr="4r + r = 60 \;\;\Rightarrow\;\; 5r = 60 \;\;\Rightarrow\;\; r = 12" display />
              <p className="mt-2">
                So Mark catches 12 fish/hour and Joe catches{" "}
                <Math expr="4\cdot 12 = 48" /> fish/hour.
              </p>
              <p className="mt-2">
                After Mark speeds up to match Joe, both work at{" "}
                <Math expr="48" /> fish/hour. Their new combined rate is{" "}
                <Math expr="48 + 48 = 96" /> fish/hour. Over two hours:
              </p>
              <Math expr="96 \times 2 = 192" display />
              <p className="mt-2">Answer: 192.</p>
            </>
          }
        />

        <section aria-labelledby="takeaways" className="space-y-2">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Translate “A is x times as fast as B” into rates using a single
              variable and a multiplier.
            </li>
            <li>
              Add rates to get a team’s combined rate when they work
              simultaneously.
            </li>
            <li>
              Once you have a combined rate, multiply by time to get total
              output.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}