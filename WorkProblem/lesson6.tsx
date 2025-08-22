import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function K({ tex, block = false }: { tex: string; block?: boolean }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  return (
    <span
      aria-label={tex}
      dangerouslySetInnerHTML={{ __html: html }}
      className={block ? "block my-2" : ""}
    />
  );
}

export const metadata: Metadata = {
  title: "10.6.1 Single‑Worker Problems with Variables | Work/Rate",
  description:
    "Solve single‑worker rate problems when variables appear in the answers. Convert units cleanly, keep Rate × Time = Work, and interpret “% faster” correctly. Includes three practice MCQs with full explanations.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.6.1 Single‑Worker Problems with Variables in the Choices
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When answer choices contain variables, stick to fundamentals:
          express a clear rate, keep units consistent, and apply
          Rate × Time = Work. If time units differ (minutes, seconds, hours),
          convert before you multiply.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              Core identity: <K tex="\,\text{Work} = \text{Rate} \times \text{Time}\," />.
            </li>
            <li className="mb-2">
              Convert units first. For example, <K tex="60 \text{ minutes} = 1 \text{ hour}" /> and{" "}
              <K tex="3600 \text{ seconds} = 1 \text{ hour}" />.
            </li>
            <li className="mb-2">
              “50% faster” means the rate is multiplied by <K tex="1.5=\tfrac{3}{2}" />, not that time is halved
              (halving time is “100% faster”).
            </li>
          </ul>
        </MustKnow>

        <MCQExample
          number={1}
          prompt="Riley can finish x sodas in y minutes. At the same pace, how many sodas can Riley drink in z hours?"
          options={["(60xz)/y", "(xz)/(60y)", "(60y)/z", "z/60", "(xz)/y"]}
          correct="(60xz)/y"
          solution={
            <>
              <p>
                From the statement, Riley’s rate is{" "}
                <K tex="\dfrac{x}{y}" /> sodas per minute. Convert to hours:
                <K tex="\quad \dfrac{x}{y}\ \frac{\text{sodas}}{\text{minute}}\ \times\ \dfrac{60\ \text{minutes}}{1\ \text{hour}}\ =\ \dfrac{60x}{y}\ \frac{\text{sodas}}{\text{hour}}" />
              </p>
              <p>
                In <K tex="z" /> hours, the total sodas are{" "}
                <K tex="\left(\dfrac{60x}{y}\right)\cdot z \ =\ \dfrac{60xz}{y}" />.
              </p>
              <p>Answer: (60xz)/y.</p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt="A machine makes x light bulbs in y hours. Working at the same constant rate, how many bulbs can it make in p minutes and q seconds?"
          options={[
            "x(60p+q)/(3600y)",
            "(60p+q)/(3600y)",
            "x(60p+q)/(360y)",
            "x(60p+q)/(60y)",
            "x(p+q)/(60y)",
          ]}
          correct="x(60p+q)/(3600y)"
          solution={
            <>
              <p>
                Rate per hour: <K tex="\dfrac{x}{y}" /> bulbs/hour.
              </p>
              <p>
                Convert the time to hours. Minutes portion:{" "}
                <K tex="\dfrac{p}{60}" /> hours. Seconds portion:{" "}
                <K tex="\dfrac{q}{3600}" /> hours. Total time:
                <K tex="\ \dfrac{p}{60}+\dfrac{q}{3600}\ =\ \dfrac{60p+q}{3600}\ \text{ hours}" />
              </p>
              <p>
                Work = Rate × Time:
                <K tex="\ \dfrac{x}{y}\cdot \dfrac{60p+q}{3600}\ =\ \dfrac{x(60p+q)}{3600\,y}" />
              </p>
              <p>Answer: x(60p+q)/(3600y).</p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt="Machine A requires t hours to build 40 widgets at a constant rate. If Machine B works 50% faster than A, how many hours will B need to build y widgets?"
          options={["ty/60", "60y/t", "20/(ty)", "4ty/3", "ty/20"]}
          correct="ty/60"
          solution={
            <>
              <p>
                Machine A’s rate:
                <K tex="\ \dfrac{40}{t}\ \text{ widgets/hour}" />
              </p>
              <p>
                50% faster means multiply the rate by{" "}
                <K tex="1.5=\dfrac{3}{2}" />. So Machine B’s rate is:
                <K tex="\ \dfrac{3}{2}\cdot \dfrac{40}{t}=\dfrac{60}{t}\ \text{ widgets/hour}" />
              </p>
              <p>
                Time for B to make <K tex="y" /> widgets:
                <K tex="\ \text{Time}=\dfrac{\text{Work}}{\text{Rate}}=\dfrac{y}{\frac{60}{t}}=\dfrac{t\,y}{60}" />
              </p>
              <p>Answer: ty/60 hours.</p>
            </>
          }
        />

        <section aria-label="Key takeaways" className="mt-8">
          <h3 className="text-lg font-semibold text-white">Big picture</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              Anchor every setup with <K tex="\ \text{Work}=\text{Rate}\times\text{Time}\ " /> and align units before multiplying.
            </li>
            <li>
              Percent‑faster language affects rate directly. For example, 50% faster →{" "}
              <K tex="\ 1.5\times \text{original rate}\ " />.
            </li>
            <li>
              Converting minutes/seconds to hours prevents algebraic errors and messy cancellations.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}