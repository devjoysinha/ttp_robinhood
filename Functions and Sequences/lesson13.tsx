```tsx
// app/functions/word-problems/page.tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "19.13 Word Problems with Functions | Functions and Sequences",
  description:
    "Translate real‑world stories into function inputs and evaluate. Practice with exponential growth and vertical motion models. Includes three quick multiple‑choice drills with full, step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.13 Word Problems with Functions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many GMAT prompts describe a real situation and give you a function
          that models it. Your job is to identify the correct inputs from the
          story—paying close attention to units and the reference time—and then
          evaluate the function.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>Map quantities in the story to the function’s variables.</li>
            <li>Confirm units and the starting point for time.</li>
            <li>
              Substitute carefully and simplify step by step. When possible,
              leverage structure (e.g., powers of 2 or simple fractions).
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={32}
          prompt="A town’s population t years from now is modeled by P(t) = 100 × 2^t. What will the population be 3 years from today?"
          options={["200", "300", "400", "600", "800"]}
          correct="800"
          solution={
            <>
              <p>
                Substitute t = 3 into the function:
              </p>
              <BlockMath math={"P(3) = 100\\cdot 2^{3} = 100\\cdot 8 = 800"} />
              <p>The population in 3 years is 800.</p>
            </>
          }
        />

        <MCQExample
          number={33}
          prompt="A culture has 512 bacteria at noon and is modeled by P(t) = 512 × (5/4)^t, where t is the number of minutes after noon. How many bacteria are there at 12:04 pm?"
          options={["640", "800", "1,000", "1,250", "1,563"]}
          correct="1,250"
          solution={
            <>
              <p>At 12:04 pm, t = 4. Compute:</p>
              <BlockMath math={"P(4) = 512\\left(\\tfrac{5}{4}\\right)^4"} />
              <BlockMath math={"=\\; 512\\cdot \\tfrac{625}{256} \\,=\\, 2\\cdot 625 \\,=\\, 1{,}250"} />
              <p>So the population is 1,250.</p>
            </>
          }
        />

        <MCQExample
          number={34}
          prompt="An object thrown straight up has height h(t), in feet, given by h(t) = –16t^2 + v0 t + h0. A ball is thrown from a height of 4 feet with initial speed 18 ft/s. What is the height after 1 second?"
          options={["8 feet", "7 feet", "6 feet", "5 feet", "4 feet"]}
          correct="6 feet"
          solution={
            <>
              <p>Use <InlineMath math={"h(t) = -16t^2 + v_0 t + h_0"} /> with <InlineMath math={"v_0 = 18"} /> and <InlineMath math={"h_0 = 4"} />:</p>
              <BlockMath math={"h(1) = -16(1)^2 + 18(1) + 4 = -16 + 18 + 4 = 6"} />
              <p>The ball is 6 feet high after 1 second.</p>
            </>
          }
        />

        <p>
          Bottom line: decode what each symbol represents, keep units consistent,
          and substitute with care. When the algebra has friendly bases or
          fractions, simplify strategically to save time.
        </p>
      </article>
    </main>
  );
}
```