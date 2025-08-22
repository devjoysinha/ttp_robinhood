import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });
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
  title: "16.7 Multi-Scenario Digit Questions | Combinations & Permutations",
  description:
    "Learn how to split counting problems into scenarios when a choice depends on an earlier choice. Includes a quick walk‑through and three multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.7 Multi‑Scenario Digit Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many digit‑based counting problems, a later choice can depend on a
          choice you made earlier. When that happens, it’s usually best to break
          the problem into clear scenarios, count each scenario separately, and
          then add the results.
        </p>

        <p>
          Here’s a short illustration. Suppose repeated digits are not allowed:
          How many positive odd three‑digit integers have a hundreds digit of 4
          or 5?
        </p>

        <p>
          Think in order of restriction: hundreds → ones (must be odd) →
          tens. If the hundreds digit is 4, then the ones digit can be 1, 3, 5,
          7, or 9 (five options). The tens digit can be any digit except the two
          already chosen, so <MathInline expr="10-2=8" ariaLabel="ten minus two equals eight" />.
          That scenario gives{" "}
          <MathInline expr="1\\times 5\\times 8=40" ariaLabel="one times five times eight equals forty" /> outcomes.
        </p>

        <p>
          If the hundreds digit is 5, the ones digit must be odd but cannot be 5
          (no repeats), so there are four options: 1, 3, 7, 9. The tens digit is
          again <MathInline expr="10-2=8" ariaLabel="ten minus two equals eight" />, so{" "}
          <MathInline expr="1\\times 4\\times 8=32" ariaLabel="one times four times eight equals thirty two" /> outcomes.
          Adding both scenarios:{" "}
          <MathInline expr="40+32=72" ariaLabel="forty plus thirty two equals seventy two" />.
        </p>

        <p>
          Moral: when “the number of choices” for one position changes based on a
          previous pick, separate the work into scenarios.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Playbook for multi‑scenario digit problems</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Start with the most restrictive position, then move outward.
              </li>
              <li>
                If the count for a later position depends on an earlier pick,
                pause and define the scenarios that produce different counts.
              </li>
              <li>
                Use the Fundamental Counting Principle to count each scenario,
                then add the totals.
              </li>
            </ul>
          </div>
        </MustKnow>

        <MCQExample
          number={55}
          prompt="If digits cannot repeat, how many two‑digit integers are even and have a prime tens digit?"
          options={["16", "17", "18", "19", "20"]}
          correct="19"
          solution={
            <>
              <p>
                The tens digit must be prime: 2, 3, 5, or 7 (four options). The
                ones digit must be even: 0, 2, 4, 6, or 8.
              </p>
              <p>
                Dependence arises: if the tens digit is 2 (even), then the ones
                digit cannot be 2, leaving four choices. If the tens digit is 3,
                5, or 7 (odd), the ones digit can be any of the five even digits.
              </p>
              <p>
                Scenario A (tens = 2):{" "}
                <MathInline expr="1\\times 4=4" ariaLabel="one times four equals four" />.
                Scenario B (tens ∈ {`{3, 5, 7}`})
                : <MathInline expr="3\\times 5=15" ariaLabel="three times five equals fifteen" />.
                Total: <MathInline expr="4+15=19" ariaLabel="four plus fifteen equals nineteen" />.
              </p>
              <p>Answer: 19.</p>
            </>
          }
        />

        <MCQExample
          number={56}
          prompt="How many four‑digit integers contain the digit 7 in exactly three positions?"
          options={["35", "36", "37", "38", "39"]}
          correct="35"
          solution={
            <>
              <p>
                Enumerate where the single non‑7 can go. Use x for “not 7.”
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  777x: x can be any digit except 7 →{" "}
                  <MathInline expr="9" ariaLabel="nine" /> options.
                </li>
                <li>
                  77x7: x ≠ 7 → <MathInline expr="9" ariaLabel="nine" /> options.
                </li>
                <li>
                  7x77: x ≠ 7 → <MathInline expr="9" ariaLabel="nine" /> options.
                </li>
                <li>
                  x777: x cannot be 0 or 7 (leading zero not allowed) →{" "}
                  <MathInline expr="8" ariaLabel="eight" /> options.
                </li>
              </ul>
              <p>
                Sum: <MathInline expr="9+9+9+8=35" ariaLabel="nine plus nine plus nine plus eight equals thirty five" />.
              </p>
              <p>Answer: 35.</p>
            </>
          }
        />

        <MCQExample
          number={57}
          prompt="How many positive four‑digit integers less than 5,000 are odd and have all distinct digits?"
          options={["448", "896", "912", "1,008", "1,120"]}
          correct="1,008"
          solution={
            <>
              <p>
                Numbers are from 1000 to 4999, so the thousands digit is 1, 2, 3,
                or 4. The ones digit must be odd and different from the thousands
                digit. Break by the parity of the thousands digit.
              </p>
              <p>
                Scenario A (thousands is odd: 1 or 3): pick 2 ways for the
                thousands digit; ones digit must be odd but not equal to that
                thousands digit → <MathInline expr="5-1=4" ariaLabel="five minus one equals four" /> ways. The
                hundreds digit then has <MathInline expr="10-2=8" ariaLabel="ten minus two equals eight" /> choices, and the tens digit has{" "}
                <MathInline expr="10-3=7" ariaLabel="ten minus three equals seven" />. Total:{" "}
                <MathInline expr="2\\cdot 4\\cdot 8\\cdot 7=448" ariaLabel="two times four times eight times seven equals four hundred forty eight" />.
              </p>
              <p>
                Scenario B (thousands is even: 2 or 4): pick 2 ways; ones digit
                can be any odd digit (<MathInline expr="5" ariaLabel="five" /> ways). Then{" "}
                <MathInline expr="8" ariaLabel="eight" /> choices for hundreds and{" "}
                <MathInline expr="7" ariaLabel="seven" /> for tens. Total:{" "}
                <MathInline expr="2\\cdot 5\\cdot 8\\cdot 7=560" ariaLabel="two times five times eight times seven equals five hundred sixty" />.
              </p>
              <p>
                Grand total:{" "}
                <MathInline expr="448+560=1{,}008" ariaLabel="four hundred forty eight plus five hundred sixty equals one thousand eight" />.
              </p>
              <p>Answer: 1,008.</p>
            </>
          }
        />

        <MustKnow>
          Multi‑scenario counting is add‑the‑cases. Define the cases when a later
          choice depends on an earlier one, count each cleanly, and then add the
          results.
        </MustKnow>

        <p>
          With practice, you’ll quickly spot when scenario splits are necessary
          and keep your counts precise and fast.
        </p>
      </article>
    </main>
  );
}