import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.4 Creating Codes | Combinations and Permutations",
  description:
    "Use the Fundamental Counting Principle to count codes with and without repetition. Includes three multiple‑choice practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.4 Creating Codes
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          The Fundamental Counting Principle (FCP) says that if a process
          breaks into independent steps, the total number of outcomes is the
          product of the choices at each step. If one step can occur in m ways
          and another step in n ways, then together they can occur in m × n
          ways. This extends to any number of independent steps: multiply the
          options per step.
        </p>

        <MustKnow>
          Independence means that your choice for one position does not affect
          how many choices you have for another position. To count outcomes:
          - Identify each “slot” or step.
          - Determine how many choices fit each slot (adjust for any
          restrictions like “no repeats”).
          - Multiply the counts across all slots.
        </MustKnow>

        <p>
          Example with repetition allowed: suppose you build a three‑letter
          product code from the 26 capital letters, and letters may repeat.
          There are 26 choices for each of the three positions, so the total is
          26 × 26 × 26 = \\(26^3\\). Since \\(26^3\\) is greater than \\(20^3 = 8{,}000\\), you’d have more than
          enough unique codes to label 5,000 items.
        </p>

        <p>
          If repetition is not allowed, the count changes: 26 options for the
          first letter, 25 for the second, and 24 for the third, for a total of
          26 × 25 × 24. Fewer outcomes result because each choice removes an
          option from later slots.
        </p>

        <MCQExample
          number={47}
          prompt="A store assigns a six‑letter code to each product. Codes are formed from the English alphabet but the letters h and d are not allowed. How many distinct codes are possible?"
          options={["6^24", "24^6", "360", "120", "60"]}
          correct="24^6"
          solution={
            <>
              <p>
                Each of the 6 positions can be any letter except h or d:
                26 − 2 = 24 options per position. By the FCP:
                24 × 24 × 24 × 24 × 24 × 24 = \\(24^6\\).
              </p>
            </>
          }
        />

        <MCQExample
          number={48}
          prompt="A state’s license plates use three digits followed by three letters. If neither the digits nor the letters may repeat, what is the maximum number of plates?"
          options={[
            "26^6",
            "10^3 × 26^3",
            "10^3 × 26 × 25 × 24",
            "720 × 26 × 25 × 24",
            "6!",
          ]}
          correct="720 × 26 × 25 × 24"
          solution={
            <>
              <p>
                Digits (no repeats): 10 choices for the first, then 9, then 8:
                10 × 9 × 8 = 720.
              </p>
              <p>
                Letters (no repeats): 26 × 25 × 24.
              </p>
              <p>
                Multiply independent blocks: 720 × 26 × 25 × 24.
              </p>
            </>
          }
        />

        <MCQExample
          number={49}
          prompt="A phone number has a three‑digit area code, then a three‑digit county code, then a four‑digit line code. The 1st and 4th digits cannot be 0; all other digits can be 0–9. Which expression equals the total number of possible phone numbers?"
          options={[
            "10^10",
            "9^10",
            "8.1 × 10^9",
            "8.1 × 10^8",
            "7 × 10^7",
          ]}
          correct="8.1 × 10^9"
          solution={
            <>
              <p>
                Area code (ABC): A has 9 options (1–9), B and C have 10 each
                ⇒ 9 × 10 × 10 = 900.
              </p>
              <p>
                County code (DEF): D has 9 options (1–9), E and F have 10 each
                ⇒ 9 × 10 × 10 = 900.
              </p>
              <p>
                Line code (GHIJ): each digit has 10 options ⇒ \\(10^4 = 10{,}000\\).
              </p>
              <p>
                Total: 900 × 900 × 10,000 = 8,100,000,000 = 8.1 × \\(10^9\\).
              </p>
            </>
          }
        />

        <p>
          Bottom line: model code‑building as a sequence of independent slots.
          Apply restrictions per slot (such as banned characters or no
          repetition), then multiply the slot counts.
        </p>
      </article>
    </main>
  );
}