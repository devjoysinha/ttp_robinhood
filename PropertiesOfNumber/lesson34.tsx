import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";
// Note: Ensure KaTeX CSS is imported once globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title:
    "4.10.3 LCM of Multiple Integers: Watch Repeated Prime Factors | Properties of Numbers",
  description:
    "Learn how to compute the LCM of three or more integers by tracking repeated prime factors. Includes three GMAT-style multiple‑choice examples with detailed solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.10.3 LCM of More Than Two Integers: Be Careful with Repeated Prime Factors
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you compute the least common multiple for three or more positive integers,
          pay close attention to how prime factors repeat across the set. A prime factor
          counts as “repeated” as soon as it shows up in at least two of the numbers—there’s
          no requirement that it appear in all of them. The LCM is built by taking each prime
          that appears anywhere in the set and using the largest exponent with which it appears.
        </p>

        <MustKnow>
          For LCM with multiple integers:
          - A prime factor is considered repeated if it appears in at least two numbers in the set (not necessarily all).
          - To form the LCM, include every prime that appears and raise it to the highest power found in any single number’s factorization.
        </MustKnow>

        <MCQExample
          number={31}
          prompt="What is the least common multiple of 15, 18, and 24?"
          options={["60", "120", "240", "360", "720"]}
          correct="360"
          solution={
            <>
              <p>
                Factor each number:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  15 = <InlineMath math={"3\\cdot 5"} />
                </li>
                <li>
                  18 = <InlineMath math={"2\\cdot 3^{2}"} />
                </li>
                <li>
                  24 = <InlineMath math={"2^{3}\\cdot 3"} />
                </li>
              </ul>
              <p className="mt-2">
                Across the set, the largest power of 2 is <InlineMath math={"2^{3}"} />, the largest
                power of 3 is <InlineMath math={"3^{2}"} />, and we also need a factor of 5:
                <InlineMath math={"\\;5^{1}"} />. Thus the LCM is
                <InlineMath math={"\\;2^{3}\\cdot 3^{2}\\cdot 5=360"} />.
              </p>
            </>
          }
        />

        <p>
          Don’t assume an unseen factor is irrelevant just because it isn’t shared by every
          number. If that factor repeats in at least two numbers (or is needed once because it
          appears in any number at all), it can impact the LCM’s prime‑power selection.
        </p>

        <MCQExample
          number={32}
          prompt="A 5th‑grade class can be grouped evenly into teams of 12, 15, or 24 students. What is the smallest possible class size?"
          options={["60", "120", "360", "1,250", "4,320"]}
          correct="120"
          solution={
            <>
              <p>
                We need the smallest positive integer divisible by 12, 15, and 24, i.e.,
                <InlineMath math={"\\mathrm{LCM}(12,15,24)"} />.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  12 = <InlineMath math={"2^{2}\\cdot 3"} />
                </li>
                <li>
                  15 = <InlineMath math={"3\\cdot 5"} />
                </li>
                <li>
                  24 = <InlineMath math={"2^{3}\\cdot 3"} />
                </li>
              </ul>
              <p className="mt-2">
                Highest powers across the set: <InlineMath math={"2^{3}"} />,{" "}
                <InlineMath math={"3^{1}"} />, and <InlineMath math={"5^{1}"} />. So
                <InlineMath math={"\\;\\mathrm{LCM}=2^{3}\\cdot 3\\cdot 5=120"} />.
              </p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt="The least common multiple of 8, 10, and x is 120. Which value of x is NOT possible?"
          options={["3", "6", "9", "12", "15"]}
          correct="9"
          solution={
            <>
              <p>
                Since <InlineMath math={"\\mathrm{LCM}(8,10,x)=120"} />, first note the prime form of 120:
                <InlineMath math={"\\;120=2^{3}\\cdot 3\\cdot 5"} />.
              </p>
              <p>
                Also, <InlineMath math={"8=2^{3}"} /> and <InlineMath math={"10=2\\cdot 5"} />. To keep the LCM at 120,
                we need at most <InlineMath math={"3^{1}"} /> from x. If x were 9
                (<InlineMath math={"3^{2}"} />), the required power of 3 in the LCM would rise to{" "}
                <InlineMath math={"3^{2}"} />, making the LCM{" "}
                <InlineMath math={"2^{3}\\cdot 3^{2}\\cdot 5=360"} />, not 120. Therefore, 9 is not possible.
              </p>
              <p>
                All other options supply a factor of 3 without forcing a larger exponent than needed, so they keep the LCM at 120.
              </p>
            </>
          }
        />

        <p>
          Bottom line: build the LCM by collecting every prime that appears and using the largest
          exponent seen in the set. A factor repeated in any two numbers still counts—track those
          prime powers carefully.
        </p>
      </article>
    </main>
  );
}