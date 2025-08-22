import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "3.2 Two‑Part Analysis: One Equation, Two Variables | GMAT Quant",
  description:
    "Master Two‑Part Analysis items that boil down to a single equation in two variables. Learn the table‑driven trial strategy, how to prune choices using structure (parity, perfect squares), and work through three quick examples with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Two‑Part Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.2 Two‑Part Analysis Questions: One Equation With Two Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common Two‑Part Analysis setup gives a short word problem that
          translates to one equation linking two unknowns. Even though the stem
          alone doesn’t pin down unique values, the table of answer choices
          effectively does the rest: only one pair across the two columns will
          satisfy the equation.
        </p>

        <p>
          Your plan: pick a candidate from one column, compute the matching
          value via the equation, and verify that its partner appears in the
          other column. Because the test guarantees a unique solution, you can
          stop as soon as you find a consistent pair.
        </p>

        <MustKnow>
          In Two‑Part Analysis with a single equation, the choices act as your
          search space. Test a value from one column, derive the partner from
          the equation, and check whether that partner is listed in the other
          column. Uniqueness means exactly one pair will work—stop when you find
          it.
        </MustKnow>

        <section aria-labelledby="ex1" className="space-y-4">
          <h3 id="ex1" className="text-xl font-semibold text-white">
            Worked Example 1: Linear equation with integer choices
          </h3>
          <p>
            Suppose the stem yields{" "}
            <InlineMath math={"x + 8y = 42"} /> with both <InlineMath math={"x"} /> and{" "}
            <InlineMath math={"y"} /> restricted to positive integers. The table
            offers <InlineMath math={"y \\in \\{1,2,3,4,5\\}"} /> and{" "}
            <InlineMath math={"x \\in \\{1,2,3,4,5\\}"} />. We can quickly test
            each <InlineMath math={"y"} /> until a listed <InlineMath math={"x"} /> appears.
          </p>

          <MCQExample
            number={1}
            prompt={
              <>
                Which ordered pair satisfies <InlineMath math={"x + 8y = 42"} />?
              </>
            }
            options={[
              "y = 1 and x = 34",
              "y = 2 and x = 26",
              "y = 3 and x = 18",
              "y = 4 and x = 10",
              "y = 5 and x = 2",
            ]}
            correct="y = 5 and x = 2"
            solution={
              <>
                <p>
                  Compute <InlineMath math={"x = 42 - 8y"} />:
                </p>
                <BlockMath math={"y=1\\Rightarrow x=34"} />
                <BlockMath math={"y=2\\Rightarrow x=26"} />
                <BlockMath math={"y=3\\Rightarrow x=18"} />
                <BlockMath math={"y=4\\Rightarrow x=10"} />
                <BlockMath math={"y=5\\Rightarrow x=2"} />
                <p>
                  Among the listed <InlineMath math={"x"} /> values, only{" "}
                  <InlineMath math={"x=2"} /> appears. Therefore the valid pair
                  is <strong>y = 5 and x = 2</strong>.
                </p>
              </>
            }
          />
        </section>

        <p>
          Structure helps you prune the table before you start testing. For
          example, radicals suggest trying perfect squares first; parity and
          divisibility can narrow options instantly.
        </p>

        <MustKnow>
          Use structure to cut work. With square roots, test perfect squares
          first. With linear equations, reduce and use parity or divisibility
          to eliminate impossibilities before you plug in.
        </MustKnow>

        <section aria-labelledby="ex2" className="space-y-4">
          <h3 id="ex2" className="text-xl font-semibold text-white">
            Worked Example 2: Square‑root model
          </h3>
          <p>
            A process sets belt speed <InlineMath math={"b"} /> by{" "}
            <InlineMath math={"b = 5\\sqrt{g}"} />, where{" "}
            <InlineMath math={"g"} /> is the number of pallets. Choose the pair
            that is consistent.
          </p>

          <MCQExample
            number={2}
            prompt={
              <>
                Which pair <InlineMath math="(g,b)" /> satisfies{" "}
                <InlineMath math={"b = 5\\sqrt{g}"} />?
              </>
            }
            options={[
              "(g = 36, b = 36)",
              "(g = 49, b = 40)",
              "(g = 64, b = 40)",
              "(g = 8, b = 20)",
              "(g = 80, b = 40)",
            ]}
            correct="(g = 64, b = 40)"
            solution={
              <>
                <p>
                  Try perfect squares first. For{" "}
                  <InlineMath math={"g=64"} />,{" "}
                  <InlineMath math={"\\sqrt{64}=8"} />, so{" "}
                  <InlineMath math={"b=5\\cdot 8=40"} />. That pair matches an
                  option. The others don’t satisfy the formula (e.g.,{" "}
                  <InlineMath math={"g=36"} /> would give{" "}
                  <InlineMath math={"b=30"} />, not 36).
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex3" className="space-y-4">
          <h3 id="ex3" className="text-xl font-semibold text-white">
            Worked Example 3: Earnings equation and parity
          </h3>
          <p>
            Julia earns $20 per indoor chore and $60 per outdoor chore. If she
            completes <InlineMath math={"s"} /> indoor and{" "}
            <InlineMath math={"d"} /> outdoor chores for $420 total, then
            <BlockMath math={"20s + 60d = 420 \\;\\Rightarrow\\; s + 3d = 21"} />
            Pick the only pair that works.
          </p>

          <MCQExample
            number={3}
            prompt={
              <>
                Which pair <InlineMath math="(s,d)" /> satisfies{" "}
                <InlineMath math={"s + 3d = 21"} /> with nonnegative integers?
              </>
            }
            options={[
              "(s = 4, d = 5)",
              "(s = 6, d = 4)",
              "(s = 3, d = 6)",
              "(s = 9, d = 5)",
              "(s = 8, d = 4)",
            ]}
            correct="(s = 3, d = 6)"
            solution={
              <>
                <p>
                  Rearranging gives{" "}
                  <InlineMath math={"s = 21 - 3d"} />, so{" "}
                  <InlineMath math={"s"} /> must be a multiple of 3. Checking
                  the options, only <strong>(3, 6)</strong> satisfies{" "}
                  <InlineMath math={"3 + 3\\cdot 6 = 21"} />.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex4" className="space-y-4">
          <h3 id="ex4" className="text-xl font-semibold text-white">
            Worked Example 4: Quick elimination by parity
          </h3>
          <p>
            Alice took 16 advanced courses with <InlineMath math={"m"} /> tasks
            each and 4 intermediate courses with <InlineMath math={"n"} /> tasks
            each, for 220 total tasks:
          </p>
          <BlockMath math={"16m + 4n = 220 \\;\\Rightarrow\\; 4m + n = 55"} />
          <p>
            Since <InlineMath math={"4m"} /> is even and 55 is odd,{" "}
            <InlineMath math={"n"} /> must be odd. Choose the only pair that
            works.
          </p>

          <MCQExample
            number={4}
            prompt={
              <>
                Which pair <InlineMath math="(m,n)" /> satisfies{" "}
                <InlineMath math={"4m + n = 55"} /> with positive integers?
              </>
            }
            options={[
              "(m = 12, n = 13)",
              "(m = 10, n = 11)",
              "(m = 9, n = 15)",
              "(m = 13, n = 2)",
              "(m = 11, n = 11)",
            ]}
            correct="(m = 11, n = 11)"
            solution={
              <>
                <p>
                  Test each option: only{" "}
                  <InlineMath math={"4\\cdot 11 + 11 = 55"} /> hits the target.
                  It also satisfies the parity requirement (odd <InlineMath math={"n"} />).
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: treat the table as a guided search. Use the equation to map
          one column to the other, lean on structure to eliminate nonstarters,
          and stop as soon as you hit the unique consistent pair.
        </p>
      </article>
    </main>
  );
}