import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "4.4 Even and Odd Numbers | Properties of Numbers",
  description:
    "Understand even vs. odd integers, their forms using 2n, 2n+1, and 2n−1, and how parity behaves with consecutive integers. Includes a must‑know summary and a quick multiple‑choice drill.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.4 Even and Odd Numbers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Every integer falls into exactly one of two categories: even or odd.
          An integer is even when it’s divisible by 2 with no remainder; if it
          isn’t, then it’s odd. You can also spot parity from the units digit:
          even integers end in 0, 2, 4, 6, or 8, while odd integers end in 1, 3,
          5, 7, or 9.
        </p>

        <p>
          It’s often helpful to write integers in algebraic form. Any even
          integer can be written as $2n$, and any odd integer can be written as
          either $2n+1$ or $2n-1$, where $n$ is an integer. For instance, with
          $n=0$, we get $2n=0$ (even), $2n-1=-1$ (odd), and $2n+1=1$ (odd).
          Consecutive integers always alternate parity: even, odd, even, odd, and
          so on.
        </p>

        <MustKnow>
          Even integers have the form $2n$. Odd integers have the form $2n+1$ or
          $2n-1$. Consecutive integers alternate parity. The last digit reveals
          parity: 0, 2, 4, 6, 8 → even; 1, 3, 5, 7, 9 → odd.
        </MustKnow>

        <MCQExample
          number={1}
          prompt="If j and k are integers, which of the following expressions MUST be odd?
          
I. k + 5
II. 2j + 1
III. j − k"
          options={[
            "I only",
            "II only",
            "III only",
            "I and III only",
            "II and III only",
          ]}
          correct="II only"
          solution={
            <>
              <p>
                Check each expression using parity.
              </p>
              <p>
                I. k + 5: If k is even, k + 5 is odd; if k is odd, k + 5 is even. Not always odd.
              </p>
              <p>
                II. 2j + 1: Since 2j is even for any integer j, adding 1 makes it odd. Always odd.
              </p>
              <p>
                III. j − k: If j and k have the same parity, the difference is even; if they have different parity, it’s odd. Not always odd.
              </p>
              <p>Therefore, only II must be odd.</p>
            </>
          }
        />
      </article>
    </main>
  );
}