import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

function TeX({
  children,
  display = false,
  ariaLabel,
}: {
  children: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      aria-label={ariaLabel ?? children}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.8 Exponential Growth Problems | General Word Problems",
  description:
    "Understand exponential growth as repeated multiplication by a constant factor. Learn the core formula, see step‑by‑step builds, and practice with multiple examples including a Data Sufficiency problem.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.8 Exponential Growth Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Exponential growth occurs when a quantity is repeatedly multiplied by
          the same factor during each period of growth. Instead of adding a fixed
          amount each time, we scale the current amount by a constant multiplier,
          so the effect compounds from one period to the next.
        </p>

        <p>
          Suppose the starting value is <TeX>v</TeX> and the growth factor per
          period is <TeX>n</TeX>. Over consecutive periods, the total amount
          evolves as follows:
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>
            Growth period 1: <TeX>v \times n</TeX>
          </li>
          <li>
            Growth period 2: <TeX>v \times n \times n = v \times n^{2}</TeX>
          </li>
          <li>
            Growth period 3: <TeX>v \times n^{2} \times n = v \times n^{3}</TeX>
          </li>
          <li>
            Growth period 4: <TeX>v \times n^{3} \times n = v \times n^{4}</TeX>
          </li>
        </ul>

        <MustKnow>
          In exponential growth, the quantity is multiplied by the same constant
          factor each period. The increase per period is not constant; it grows
          because each new amount is based on the previous amount.
        </MustKnow>

        <p>
          Here’s a quick example. A tree starts at 10 feet and doubles in height
          each day. After four days:
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>
            Day 1: <TeX>10 \times 2</TeX>
          </li>
          <li>
            Day 2: <TeX>10 \times 2^{2}</TeX>
          </li>
          <li>
            Day 3: <TeX>10 \times 2^{3}</TeX>
          </li>
          <li>
            Day 4: <TeX>10 \times 2^{4} = 10 \times 16 = 160</TeX>
          </li>
        </ul>

        <MustKnow>
          General formula for exponential growth after t periods:
          {" "}
          <TeX ariaLabel="amount equals initial times growth factor to the t">
            \text{amount} = (\text{initial}) \times (\text{growth factor})^{t}
          </TeX>
          . This lets you jump directly to any period without listing every
          intermediate step.
        </MustKnow>

        <p>We’ll apply this formula in a few quick problems.</p>

        <MCQExample
          number={43}
          prompt="A baby’s receptive vocabulary triples each month starting at age 3 months. If the baby understands 5 words at 3 months, how many words will the baby understand 4 months later?"
          options={[
            "5 × 3 × 4",
            "5^4",
            "5 × 3^4",
            "5^4 × 3^4",
            "5^12",
          ]}
          correct="5 × 3^4"
          solution={
            <>
              <p>
                Use the exponential growth formula:
                {" "}
                <TeX>
                  (\text{initial}) \times (\text{growth factor})^{t}
                </TeX>
                . Here, initial = <TeX>5</TeX>, growth factor = <TeX>3</TeX>,
                and <TeX>t=4</TeX> months.
              </p>
              <p>
                So the total is <TeX>5 \times 3^{4}</TeX>. That matches option C.
              </p>
            </>
          }
        />

        <MCQExample
          number={44}
          prompt="A certain broker multiplies a client’s money by a factor of 100 each year. If the initial investment is 5 dollars, what is the value after 4 years?"
          options={[
            "5,000,000,000",
            "500,000,000",
            "50,000,000",
            "5,000,000",
            "500,000",
          ]}
          correct="500,000,000"
          solution={
            <>
              <p>
                Apply the formula with initial <TeX>5</TeX>, growth factor
                <TeX>100</TeX>, and <TeX>t=4</TeX>:
                {" "}
                <TeX>5 \times 100^{4} = 5 \times 100{,}000{,}000 = 500{,}000{,}000</TeX>.
              </p>
              <p>Therefore, the correct answer is 500,000,000 (choice B).</p>
            </>
          }
        />

        <MCQExample
          number={45}
          prompt="A pond starts with 2 lily pads. The colony grows by the same factor each day. After 7 days there are 256 lily pads. What is the daily growth factor?"
          options={["1/2", "3/2", "2", "4", "8"]}
          correct="2"
          solution={
            <>
              <p>
                Let the daily factor be <TeX>g</TeX>. Then after 7 days:
                {" "}
                <TeX>2 \cdot g^{7} = 256</TeX>, so
                {" "}
                <TeX>g^{7} = 128 = 2^{7}</TeX>, which gives <TeX>g = 2</TeX>.
              </p>
              <p>The colony doubles each day. Correct answer: 2 (choice C).</p>
            </>
          }
        />

        <ExampleCard
          number={46}
          title="When was the jar one-quarter full?"
          statements={[
            "A colony of bacteria in a jar increases between 7 AM and 11 AM. At what time was the jar one-quarter full?",
            "1) The colony doubles every hour.",
            "2) The jar is completely full at 11 AM.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We’re asked for the time when the jar is
                {" "}
                <TeX>\tfrac{1}{4}</TeX>
                {" "}
                full.
              </p>
              <p>
                <strong>Statement (1):</strong> The growth factor per hour is 2.
                This alone doesn’t identify the moment the jar hits
                {" "}
                <TeX>\tfrac{1}{4}</TeX>
                {" "}
                capacity because we don’t know a reference level (such as when it
                was full).
                Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> The jar is full at 11 AM, but we
                have no growth rate. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> Full at 11 AM and doubling each hour
                implies the contents halve each hour when working backward. Thus,
                at 10 AM the jar was half full, and at 9 AM it was
                {" "}
                <TeX>\tfrac{1}{4}</TeX>
                {" "}
                full. Sufficient.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <p>
          Takeaway: exponential growth is about multiplying by a constant factor
          per period. If you know the starting amount, the growth factor, and the
          number of periods, you can jump straight to the result with
          {" "}
          <TeX>
            (\text{initial}) \times (\text{growth factor})^{\text{periods}}
          </TeX>
          .
        </p>
      </article>
    </main>
  );
}