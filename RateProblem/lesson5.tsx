import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// Load KaTeX on the client for math rendering
const InlineMath = dynamic(async () => (await import("react-katex")).InlineMath, { ssr: false });
const BlockMath = dynamic(async () => (await import("react-katex")).BlockMath, { ssr: false });

export const metadata: Metadata = {
  title: "9.6 Elementary Rate Questions | Rate–Time–Distance",
  description:
    "Master the basics of rate problems: use the R–T–D relationship, set up quick tables, and convert units cleanly. Includes a warm‑up example and an MCQ with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">9. Rate Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">9.6 Elementary Rate Questions</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Basic rate problems revolve around one relationship and careful unit handling. You’ll typically be
          asked to find one of three quantities—rate, time, or distance—given the other two.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              Core identity:{" "}
              <InlineMath math={"\\;\\text{Rate} = \\dfrac{\\text{Distance}}{\\text{Time}}\\;"} />. Rearrangements:
              <InlineMath math={"\\;\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Rate}}\\;"} /> and{" "}
              <InlineMath math={"\\;\\text{Distance} = \\text{Rate} \\times \\text{Time}.\\;"} />
            </li>
            <li className="mb-2">Use a quick table to keep information organized.</li>
            <li>Always convert units before computing (e.g., minutes to seconds, hours to minutes).</li>
          </ul>
        </MustKnow>

        <section aria-labelledby="warm-up-example" className="space-y-4">
          <h3 id="warm-up-example" className="text-xl font-semibold text-white">
            Mini Example (Warm‑up)
          </h3>
          <p>
            A boat moves at a constant speed of 10 miles per hour. How long will it take to travel 45 miles?
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full border-collapse text-sm" role="table" aria-label="Rate–Time–Distance table: Boat">
              <caption className="sr-only">Rate–Time–Distance setup for the boat</caption>
              <thead>
                <tr className="bg-gray-800 text-left text-gray-200">
                  <th scope="col" className="px-4 py-2"></th>
                  <th scope="col" className="px-4 py-2">Rate</th>
                  <th scope="col" className="px-4 py-2">Time</th>
                  <th scope="col" className="px-4 py-2">Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <th scope="row" className="px-4 py-2 font-semibold text-gray-200">
                    Boat
                  </th>
                  <td className="px-4 py-2">
                    <InlineMath math={"10\\;\\tfrac{\\text{miles}}{\\text{hour}}"} />
                  </td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">
                    <strong>45 miles</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-gray-900/40 p-4">
            <BlockMath math={"\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Rate}} = \\dfrac{45\\,\\text{miles}}{10\\,\\tfrac{\\text{miles}}{\\text{hour}}} = 4.5\\,\\text{hours}"} />
          </div>

          <p>So at 10 mph, the boat needs 4.5 hours to go 45 miles.</p>
        </section>

        <section aria-labelledby="mcq-skydiver" className="space-y-4">
          <MCQExample
            number={1}
            prompt="Skydiver Bob falls 100 meters in 10 seconds. Skydiver Sam jumps from another plane and falls for 3 minutes at the same constant rate as Bob. How far does Sam fall?"
            options={["300 meters", "600 meters", "1,000 meters", "1,200 meters", "1,800 meters"]}
            correct="1,800 meters"
            solution={
              <>
                <p className="mb-3">
                  First compute Bob’s rate using <InlineMath math={"\\text{Rate} = \\dfrac{\\text{Distance}}{\\text{Time}}"} />:
                </p>
                <div className="rounded-lg bg-gray-900/40 p-4">
                  <BlockMath math={"\\text{Bob's rate} = \\dfrac{100\\,\\text{m}}{10\\,\\text{s}} = 10\\;\\tfrac{\\text{m}}{\\text{s}}"} />
                </div>

                <p className="mt-4 mb-3">Sam falls for 3 minutes, which is:</p>
                <div className="rounded-lg bg-gray-900/40 p-4">
                  <BlockMath math={"3\\,\\text{minutes} \\times 60\\,\\dfrac{\\text{seconds}}{\\text{minute}} = 180\\,\\text{seconds}"} />
                </div>

                <p className="mt-4 mb-3">Using Sam’s time with the same rate:</p>
                <div className="rounded-lg bg-gray-900/40 p-4">
                  <BlockMath math={"\\text{Distance} = \\text{Rate} \\times \\text{Time} = 10\\;\\tfrac{\\text{m}}{\\text{s}} \\times 180\\,\\text{s} = 1{,}800\\,\\text{m}"} />
                </div>

                <p className="mt-4">Therefore, Sam falls 1,800 meters.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up" className="space-y-2">
          <h3 id="wrap-up" className="text-xl font-semibold text-white">
            Takeaways
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Anchor your work with the identity{" "}
              <InlineMath math={"\\text{R} = \\dfrac{\\text{D}}{\\text{T}}"} /> and its rearrangements.
            </li>
            <li>Organize givens in a small table to prevent mixing units or values.</li>
            <li>Convert units before you calculate—this prevents arithmetic mistakes later.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}