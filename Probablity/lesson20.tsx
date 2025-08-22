import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "17.14 Probability as a Ratio | Probability",
  description:
    "Understand probability as a ratio of favorable to total outcomes. See how ratio multipliers work, use complements, and practice with a Data Sufficiency example.",
};

// Lightweight KaTeX renderer (server-safe)
function Math({
  expr,
  block = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={className}
      role="img"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.14 Probability as a Ratio
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A probability is a fraction: the numerator counts favorable outcomes and
          the denominator counts all possible outcomes in the experiment. In other
          words, probability is a ratio linking “successes” to the overall sample
          space.
        </p>

        <MustKnow>
          Probability scales. If P(event) = a/b, then outcomes can occur in any
          multiples ax out of bx total for some positive multiplier x. Never assume
          absolute counts from a single probability alone. The complement follows
          immediately: P(not event) = 1 − P(event).
        </MustKnow>

        <section aria-labelledby="ratio-example">
          <h3 id="ratio-example" className="sr-only">
            Interpreting a probability ratio
          </h3>
          <p className="mt-2">
            Suppose the chance of drawing a blue candy is{" "}
            <Math expr="\\tfrac{1}{4}" ariaLabel="one fourth" />. This means the
            counts must fit the pattern “1 out of 4” after scaling:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              Blue candies: <Math expr="x" ariaLabel="x" />; total candies:{" "}
              <Math expr="4x" ariaLabel="four x" />.
            </li>
            <li>
              Non‑blue candies: <Math expr="4x - x = 3x" ariaLabel="three x" />.
            </li>
          </ul>
          <p className="mt-2">
            So you could have 1 blue out of 4, 10 blue out of 40, 100 blue out of
            400, and so on. You cannot conclude there are exactly 4 candies unless
            you also know the multiplier <Math expr="x" ariaLabel="x" />.
          </p>
          <p className="mt-2">
            The complement is immediate: P(not blue) ={" "}
            <Math expr="1 - \\tfrac{1}{4} = \\tfrac{3}{4}" ariaLabel="three fourths" />.
            Interpreting the ratio with a multiplier, non‑blue candies number{" "}
            <Math expr="3x" ariaLabel="three x" /> out of{" "}
            <Math expr="4x" ariaLabel="four x" /> total.
          </p>
        </section>

        <MCQExample
          number={27}
          prompt={
            <>
              If P(red) = <Math expr="\\tfrac{2}{5}" ariaLabel="two fifths" />, what
              is P(not red)?
            </>
          }
          options={[
            <span key="a">
              <Math expr="\\tfrac{2}{5}" ariaLabel="two fifths" />
            </span>,
            <span key="b">
              <Math expr="\\tfrac{3}{5}" ariaLabel="three fifths" />
            </span>,
            <span key="c">
              <Math expr="\\tfrac{2}{3}" ariaLabel="two thirds" />
            </span>,
            <span key="d">
              <Math expr="\\tfrac{5}{2}" ariaLabel="five halves" />
            </span>,
            "Cannot be determined",
          ]}
          correct={
            <span>
              <Math expr="\\tfrac{3}{5}" ariaLabel="three fifths" />
            </span>
          }
          solution={
            <>
              <p>
                Use complements: P(not red) = 1 − P(red) ={" "}
                <Math expr="1 - \\tfrac{2}{5} = \\tfrac{3}{5}" ariaLabel="three fifths" />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={28}
          title="Sharks and surfers: determining a count from a ratio"
          statements={[
            "In a certain ocean zone, there are w great white sharks and s surfers. If an observation results in either a surfer or a shark being found, what is the value of s?",
            "1) w + s = 400",
            "2) The probability of finding a great white shark is 1/40",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need the number of surfers, s.
              </p>
              <p>
                Statement (1): w + s = 400. Without the split between sharks and
                surfers, s is not fixed (e.g., s could be 10 or 390). Not sufficient.
              </p>
              <p>
                Statement (2): P(shark) ={" "}
                <Math expr="\\tfrac{1}{40}" ariaLabel="one fortieth" />. This gives
                only a ratio; many pairs (w, s) fit{" "}
                <Math
                  expr="\\dfrac{w}{w+s} = \\tfrac{1}{40}"
                  ariaLabel="w over w plus s equals one fortieth"
                />
                . Not sufficient.
              </p>
              <p>
                Together: from{" "}
                <Math
                  expr="\\dfrac{w}{w+s} = \\tfrac{1}{40}"
                  ariaLabel="w over w plus s equals one fortieth"
                />{" "}
                and <Math expr="w+s=400" ariaLabel="w plus s equals 400" />, we have{" "}
                <Math expr="40w = w + s" ariaLabel="forty w equals w plus s" />. With{" "}
                <Math expr="w+s=400" ariaLabel="w plus s equals 400" />, substitute to
                get <Math expr="40w = 400" ariaLabel="forty w equals 400" />, so{" "}
                <Math expr="w=10" ariaLabel="w equals ten" /> and{" "}
                <Math expr="s=390" ariaLabel="s equals three hundred ninety" />. A
                unique value for s is determined. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Key takeaway: probabilities encode proportions, not absolute counts. To
          pin down exact numbers from a ratio, you need an additional piece of
          information (such as a total). Otherwise, any common multiplier is
          possible.
        </p>
      </article>
    </main>
  );
}