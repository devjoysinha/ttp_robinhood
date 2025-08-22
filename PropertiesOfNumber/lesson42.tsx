import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (client-only) inline/block components
const InlineMath = dynamic(() => import("react-katex").then(m => m.InlineMath), { ssr: false });
const BlockMath = dynamic(() => import("react-katex").then(m => m.BlockMath), { ssr: false });

export const metadata: Metadata = {
  title: "4.11.6 Using the LCM to Solve Repeating Pattern Questions | Number Properties",
  description:
    "Learn how to use least common multiples (LCM) to synchronize repeating events. Includes two quick walk‑throughs and four practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">4. Properties of Numbers</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.11.6 Using the LCM to Solve Repeating Pattern Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many number‑properties problems involve events that occur again and again on a fixed cycle
          (laps, flashes, beats, rotations, and so on). When you’re asked for the earliest moment
          that multiple cycles line up, you’re looking for a least common multiple.
        </p>

        <section aria-labelledby="mini-example-1" className="space-y-3">
          <h3 id="mini-example-1" className="text-white font-semibold text-xl">
            Mini‑example: Two cyclists
          </h3>
          <p>
            Two riders start together on a circular track. Rider H completes a lap every 40 seconds,
            and rider I completes a lap every 48 seconds. What is the first time they’ll be back at
            the start at the same instant?
          </p>
          <p>
            The return times are multiples of 40 for rider H and multiples of 48 for rider I. The
            first shared return time is the LCM of 40 and 48. Using prime factorizations:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"40 = 2^3 \\cdot 5"} />
            </li>
            <li>
              <InlineMath math={"48 = 2^4 \\cdot 3"} />
            </li>
          </ul>
          <p className="mt-1">
            Therefore,
            {" "}
            <InlineMath math={"\\operatorname{LCM}(40,48) = 2^4 \\cdot 3 \\cdot 5 = 240"} /> seconds.
            They’ll next coincide at 240 seconds.
          </p>
        </section>

        <MustKnow>
          If several things repeat on different schedules but start together, the earliest moment
          they all align again is the LCM of their individual repeat times. Compute the LCM via
          prime factorization by taking each prime to the highest exponent that appears in any
          factorization.
        </MustKnow>

        <section aria-labelledby="mini-example-2" className="space-y-3">
          <h3 id="mini-example-2" className="text-white font-semibold text-xl">
            Mini‑example: Two blinking lights
          </h3>
          <p>
            Lights L and M flash together at 8:00:00 PM. Light L flashes every 32 seconds; light M
            flashes every 12 seconds. When is the next simultaneous flash?
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"32 = 2^5"} />
            </li>
            <li>
              <InlineMath math={"12 = 2^2 \\cdot 3"} />
            </li>
          </ul>
          <p>
            Thus,
            {" "}
            <InlineMath math={"\\operatorname{LCM}(32,12) = 2^5 \\cdot 3 = 96"} /> seconds. The next
            time both flash together is 96 seconds after 8:00:00 PM, i.e., 8:01:36 PM.
          </p>
        </section>

        <hr className="border-gray-700" />

        <MCQExample
          number={37}
          prompt="In a trampoline routine, Maria lands every 12 seconds, and Jamilah lands every 15 seconds. If they jump together to start, after how many seconds will they next land at the same time?"
          options={["30", "45", "60", "120", "180"]}
          correct="60"
          solution={
            <>
              <p>
                We need the LCM of 12 and 15. Factor:
                {" "}
                <InlineMath math={"12 = 2^2 \\cdot 3"} /> and <InlineMath math={"15 = 3 \\cdot 5"} />.
              </p>
              <p>
                So
                {" "}
                <InlineMath math={"\\operatorname{LCM}(12,15) = 2^2 \\cdot 3 \\cdot 5 = 60"} />.
                They next land together after 60 seconds.
              </p>
            </>
          }
        />

        <MCQExample
          number={38}
          prompt="Three metronomes start in unison at noon. A beats every 45 s, B every 50 s, and C every 30 s. When will all three next click at the same instant?"
          options={[
            "12:07:10 pm",
            "12:07:20 pm",
            "12:07:30 pm",
            "12:07:40 pm",
            "12:07:50 pm",
          ]}
          correct="12:07:30 pm"
          solution={
            <>
              <p>Compute the LCM of 45, 50, and 30.</p>
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath math={"45 = 3^2 \\cdot 5"} />
                </li>
                <li>
                  <InlineMath math={"50 = 2 \\cdot 5^2"} />
                </li>
                <li>
                  <InlineMath math={"30 = 2 \\cdot 3 \\cdot 5"} />
                </li>
              </ul>
              <p>
                Therefore,
                {" "}
                <InlineMath math={"\\operatorname{LCM} = 2 \\cdot 3^2 \\cdot 5^2 = 450"} /> seconds
                = 7 minutes 30 seconds. Starting from 12:00:00 pm, that’s 12:07:30 pm.
              </p>
            </>
          }
        />

        <MCQExample
          number={39}
          prompt="Starting together, Gil completes a lap in 64 seconds and Bijan completes a lap in 80 seconds. How many laps will Gil have finished when they first return to the starting line together?"
          options={["4", "5", "64", "80", "320"]}
          correct="5"
          solution={
            <>
              <p>
                First find the LCM of 64 and 80. Factor:
                {" "}
                <InlineMath math={"64 = 2^6"} /> and <InlineMath math={"80 = 2^4 \\cdot 5"} />.
              </p>
              <p>
                Thus,
                {" "}
                <InlineMath math={"\\operatorname{LCM}(64,80) = 2^6 \\cdot 5 = 320"} /> seconds.
              </p>
              <p>
                In 320 seconds, Gil finishes
                {" "}
                <InlineMath math={"320/64 = 5"} /> laps. Answer: 5.
              </p>
            </>
          }
        />

        <MCQExample
          number={40}
          prompt="Seventeen people sit at three circular tables: 4 at one, 5 at another, and 8 at the last. At each toast, everyone moves one seat to the left at their own table. After how many toasts will everyone be back in their original seats together for the first time?"
          options={["40", "60", "80", "90", "120"]}
          correct="40"
          solution={
            <>
              <p>
                Each table cycles back to its starting arrangement after a number of toasts equal to
                its size: 4, 5, and 8 toasts, respectively. We need the LCM of
                {" "}
                <InlineMath math={"4, 5, 8"} />.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <InlineMath math={"4 = 2^2"} />
                </li>
                <li>
                  <InlineMath math={"5 = 5"} />
                </li>
                <li>
                  <InlineMath math={"8 = 2^3"} />
                </li>
              </ul>
              <p>
                Therefore,
                {" "}
                <InlineMath math={"\\operatorname{LCM}(4,5,8) = 2^3 \\cdot 5 = 40"} /> toasts.
              </p>
            </>
          }
        />

        <p className="pt-2">
          Takeaway: whenever multiple repeating schedules must align, translate the question into an
          LCM. Prime‑factorize, pick the highest exponent for each prime, and you’re done.
        </p>
      </article>
    </main>
  );
}