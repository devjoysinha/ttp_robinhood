import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.2.1 Solve for an Unknown Term from a Known Average | Statistics",
  description:
    "Learn how to find an unknown value in a set when the average is given. Includes three multiple‑choice examples with step‑by‑step reasoning using the mean formula.",
};

function Math({ expr, display = false, ariaLabel }: { expr: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
    trust: false,
  });
  if (display) {
    return (
      <div
        role="img"
        aria-label={ariaLabel || "mathematical expression"}
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label={ariaLabel || "mathematical expression"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.2.1 Solve for an Unknown Term from a Known Average
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many average problems feature a list that includes one or more unknowns. When the mean is provided,
          you can recover the missing value(s) by translating the mean definition into an equation.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Core idea</p>
            <p>
              The average (arithmetic mean) is sum divided by number of terms:
              {" "}
              <Math expr="\text{mean}=\dfrac{\text{sum of terms}}{\text{number of terms}}" ariaLabel="mean equals sum over number of terms" />
            </p>
            <ul className="list-disc pl-5">
              <li>
                If a term is unknown, include it both in the sum and in the count of terms.
              </li>
              <li>
                With exactly one unknown x in an n‑term set and known mean m:
                {" "}
                <Math expr="x = n\cdot m - \text{(sum of known terms)}" ariaLabel="x equals n times m minus the sum of known terms" />
              </li>
              <li>
                If a value is removed to achieve a new mean, compare totals before and after removal.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="In an astronomy class, the average score on a midterm is 82. There are 5 students. If four scores are 76, 90, 88, and 84, what was the fifth score?"
          options={["68", "70", "72", "75", "78"]}
          correct="72"
          solution={
            <>
              <p>
                Let x be the missing score. Using mean = sum ÷ count:
              </p>
              <Math
                display
                expr="\dfrac{76+90+88+84+x}{5}=82"
                ariaLabel="(76 plus 90 plus 88 plus 84 plus x) over 5 equals 82"
              />
              <p>
                Total needed is <Math expr="5\times 82=410" ariaLabel="five times eighty-two equals four hundred ten" />.
                The known scores sum to <Math expr="76+90+88+84=338" ariaLabel="sum of known scores equals three hundred thirty-eight" />.
              </p>
              <Math display expr="x=410-338=72" ariaLabel="x equals four hundred ten minus three hundred thirty-eight equals seventy-two" />
              <p>Answer: 72.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="Which number should be removed from 4, 8, 12, 16, 20, 24, 28, 32, 36 so that the average of the remaining numbers is 18?"
          options={["20", "24", "28", "32", "36"]}
          correct="36"
          solution={
            <>
              <p>
                The list has 9 equally spaced terms (multiples of 4), so its mean is the middle value, 20. The original total is:
              </p>
              <Math display expr="20\times 9=180" ariaLabel="twenty times nine equals one hundred eighty" />
              <p>
                After removing one value x, 8 numbers remain with mean 18, so the new total must be:
              </p>
              <Math display expr="18\times 8=144" ariaLabel="eighteen times eight equals one hundred forty-four" />
              <p>
                Therefore the removed value is the difference:
              </p>
              <Math display expr="x=180-144=36" ariaLabel="x equals one hundred eighty minus one hundred forty-four equals thirty-six" />
              <p>Answer: 36.</p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="A set of machines averaged 10 cars per day for the past 10 days. For how many additional days must they average 20 cars per day to raise the overall average to 12 cars per day?"
          options={["2", "2.5", "3", "3.5", "4"]}
          correct="2.5"
          solution={
            <>
              <p>
                Let x be the number of additional days. Total cars after 10 + x days:
                {" "}
                <Math expr="100+20x" ariaLabel="one hundred plus twenty x" />.
                The overall average target is 12:
              </p>
              <Math
                display
                expr="\dfrac{100+20x}{10+x}=12"
                ariaLabel="(one hundred plus twenty x) over (ten plus x) equals twelve"
              />
              <Math display expr="100+20x=12(10+x)=120+12x" ariaLabel="one hundred plus twenty x equals one hundred twenty plus twelve x" />
              <Math display expr="8x=20\;\Rightarrow\;x=2.5" ariaLabel="eight x equals twenty therefore x equals two point five" />
              <p>Answer: 2.5 days.</p>
            </>
          }
        />

        <p>
          Takeaway: translate the mean into an equation, account for every term in the count, and compare totals when items are added or removed.
        </p>
      </article>
    </main>
  );
}