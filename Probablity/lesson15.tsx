import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KInline({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, { throwOnError: false });
  return (
    <span
      className="katex-inline"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function KBlock({ children, ariaLabel }: { children: string; ariaLabel?: string }) {
  const html = katex.renderToString(children, { displayMode: true, throwOnError: false });
  return (
    <div
      className="katex-block my-3 overflow-x-auto"
      role="figure"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.11.1 Probability: When a Fixed Number Must Be Selected",
  description:
    "How to compute probabilities when certain items are required in the selection. Learn the combinations approach, a worked flower example, and a quick MCQ with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.11.1 The Probability That a Certain Number Must Be Included
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          You’ve already seen how combinations count selections. We can use the same idea to
          answer probability questions in which a fixed number of particular items must appear
          in the chosen group.
        </p>

        <p>
          The probability is simply “favorable selections” over “all possible selections”:
        </p>

        <KBlock ariaLabel="Probability equals favorable outcomes over total outcomes">
          {`P = \\dfrac{\\text{favorable outcomes}}{\\text{total outcomes}}`}
        </KBlock>

        <MustKnow>
          To find the probability that a specified number of items must be present in the group:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Treat the required items as already chosen, then count how many choices remain and how
              many spots are left.
            </li>
            <li>
              Use combinations for both the favorable count and the total count, then form the ratio{" "}
              <KInline ariaLabel="favorable over total">{`\\dfrac{\\text{favorable}}{\\text{total}}`}</KInline>.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="flowers-example">
          <h3 id="flowers-example" className="text-xl font-semibold text-white">
            Worked Example: Flowers
          </h3>
          <p>
            A collection has 3 tulips, 3 roses, and 2 daisies. If 5 flowers are chosen at random,
            what is the probability that both daisies are in the bouquet?
          </p>

          <p className="font-semibold text-gray-200">Favorable selections</p>
          <p>
            If both daisies must be included, visualize them as already placed. That leaves 6
            non‑daisies available to fill the remaining 3 spots. So the number of favorable
            outcomes is:
          </p>
          <KBlock ariaLabel="Favorable equals 6 choose 3 equals 20">
            {`\\binom{6}{3} = 20`}
          </KBlock>

          <p className="font-semibold text-gray-2">Total selections</p>
          <p>
            We are choosing any 5 out of the total 8 flowers:
          </p>
          <KBlock ariaLabel="Total equals 8 choose 5 equals 56">
            {`\\binom{8}{5} = 56`}
          </KBlock>

          <p className="font-semibold text-gray-2">Probability</p>
          <KBlock ariaLabel="Probability equals 20 over 56 equals 5 over 14">
            {`P = \\dfrac{\\binom{6}{3}}{\\binom{8}{5}} = \\dfrac{20}{56} = \\dfrac{5}{14}`}
          </KBlock>
        </section>

        <MustKnow>
          Combinations vs. “one‑order probability × number of orders”
          <p className="mt-2">
            Another valid path is to compute the probability of one specific draw order and then
            multiply by the number of distinct orders. In many cases, this yields the same arithmetic
            as the combinations method. As sets get larger, the combinations approach usually keeps
            the work simpler.
          </p>
        </MustKnow>

        <MCQExample
          number={20}
          prompt="A chest contains 6 flawed diamonds and 3 perfect diamonds. If a pirate randomly selects 5 diamonds, what is the probability that all 3 perfect diamonds are selected?"
          options={["3/42", "5/42", "1/6", "23/126", "14/63"]}
          correct="5/42"
          solution={
            <>
              <p className="mb-2">
                If all 3 perfect diamonds must appear, they’re “locked in,” so we only need to
                choose the remaining 2 from the 6 flawed diamonds:
              </p>
              <KBlock ariaLabel="Favorable equals 6 choose 2 equals 15">
                {`\\text{Favorable} = \\binom{6}{2} = 15`}
              </KBlock>

              <p className="mb-2">Total ways to choose any 5 from all 9 diamonds:</p>
              <KBlock ariaLabel="Total equals 9 choose 5 equals 126">
                {`\\text{Total} = \\binom{9}{5} = 126`}
              </KBlock>

              <p className="mb-2">Therefore, the probability is:</p>
              <KBlock ariaLabel="Probability equals 15 over 126 equals 5 over 42">
                {`P = \\dfrac{15}{126} = \\dfrac{5}{42}`}
              </KBlock>

              <p className="mt-4">
                Alternative check (order‑based): compute one draw order with 3 perfect and 2 flawed,
                then multiply by the number of distinct arrangements{" "}
                <KInline ariaLabel="5 factorial over 3 factorial 2 factorial">
                  {`\\dfrac{5!}{3!\\,2!} = 10`}
                </KInline>
                . Both methods agree.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Bottom line: lock in the required items, count the remaining choices with combinations,
          and form the probability as favorable over total.
        </p>
      </article>
    </main>
  );
}