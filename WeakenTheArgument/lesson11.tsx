import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { renderToString } from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function MathInline({ expr }: { expr: string }) {
  const html = renderToString(expr, { throwOnError: false, displayMode: false });
  return <span aria-label={expr} dangerouslySetInnerHTML={{ __html: html }} />;
}

function MathBlock({ expr }: { expr: string }) {
  const html = renderToString(expr, { throwOnError: false, displayMode: true });
  return <div role="img" aria-label={expr} dangerouslySetInnerHTML={{ __html: html }} />;
}

export const metadata: Metadata = {
  title: "3.7.5 Weaken: Confusing Numbers and Percentages | Critical Reasoning",
  description:
    "Learn how to weaken arguments that mix up percentages with raw counts. See why a larger rate doesn’t always mean a larger number, and practice with a multiple‑choice example and full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          3. Weaken the Argument
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          3.7.5 Weakening Type 5: When the Author Confuses Numbers and Percentages
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Arguments that lean on statistics usually assume two things: the data actually supports
          the claim, and the author has interpreted that data correctly. In Weaken questions,
          either assumption can fail—especially when rates and counts get mixed up.
        </p>

        <MustKnow>
          Percentages and raw numbers are not interchangeable. A larger percentage does not
          necessarily imply a larger number, and a smaller percentage does not necessarily imply
          a smaller number. To weaken, show that the rate–count swap is invalid for the sets in
          question.
        </MustKnow>

        <p>
          Keep these contrasts in mind:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-gray-300">
          <li>
            A tiny set with a huge rate can still yield a small count. For instance,
            <MathInline expr={"90\\% \\times 0.01 = 0.009"} /> dollars (that’s less than one cent).
          </li>
          <li>
            A massive set with a small rate can produce a large count. For example,
            <MathInline expr={"1\\% \\times 10^{12} = 10^{10}"} />; that’s 10 billion when the base is one trillion.
          </li>
        </ul>

        <MustKnow>
          Never conclude “more” or “fewer” cases from percentage data alone. To compare counts,
          you need the base sizes. Without them, the conclusion can flip.
        </MustKnow>

        <MCQExample
          number={18}
          prompt={
            <>
              A safety review reports that at a local hospital,{" "}
              <MathInline expr={"10\\%"} /> of cardiac bypass patients suffered serious complications,
              whereas at a nearby hospital, <MathInline expr={"30\\%"} /> did. The report concludes that
              the nearby hospital had more patients with serious complications from cardiac bypasses than
              the local hospital had. Which of the following, if true, most seriously undermines that conclusion?
            </>
          }
          options={[
            "For liver transplants, the nearby hospital has fewer serious complications than the local hospital.",
            "Because bypasses are complex, any complication rate under 35% is considered excellent.",
            "Last year, the nearby hospital performed more than twice as many bypass surgeries as in any prior year.",
            "The local hospital performed eight times as many cardiac bypass surgeries as the nearby hospital.",
            "The nearby hospital is internationally recognized for high‑quality surgical care.",
          ]}
          correct="The local hospital performed eight times as many cardiac bypass surgeries as the nearby hospital."
          solution={
            <>
              <p className="mb-3">
                The author infers a bigger number of complication cases from a bigger{" "}
                percentage. That leap only works if the hospitals treated roughly the same
                number of bypass patients—an assumption we’re not given.
              </p>

              <p className="mb-2">
                Choice (D) directly challenges that hidden assumption by revealing very
                different base sizes. If the local hospital’s volume is eight times higher,
                its smaller rate can still produce a larger count of complications.
              </p>

              <p className="mb-2">Concrete check with simple math:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Suppose the nearby hospital treated 100 patients →
                  complications <MathInline expr={"0.30 \\times 100 = 30"} />.
                </li>
                <li>
                  Then the local hospital treated 800 patients →
                  complications <MathInline expr={"0.10 \\times 800 = 80"} />.
                </li>
              </ul>

              <p className="mt-2">
                Since 80 exceeds 30, the conclusion that the nearby hospital had more patients
                with complications is not supported. The other choices don’t address the
                rate–count mismatch for the relevant procedure.
              </p>

              <div className="mt-4">
                <MathBlock expr={"0.30\\times 100 = 30\\quad\\text{and}\\quad 0.10\\times 800 = 80"} />
              </div>
            </>
          }
        />

        <p>
          Bottom line: to weaken arguments that compare percentages, bring the base sizes into
          focus. If the denominators differ, a bigger rate can easily correspond to a smaller count,
          and vice versa.
        </p>
      </article>
    </main>
  );
}