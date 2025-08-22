import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "16.2.14 Layered Combination Problems | Combinations & Permutations",
  description:
    "Tackle layered combination problems by breaking them into simpler steps. Includes a GMAT‑style multiple‑choice example with full reasoning and KaTeX‑rendered math.",
};

function Math({
  expr,
  block = false,
  ariaLabel,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      role="img"
      aria-label={ariaLabel ?? "mathematical expression"}
      className={block ? "my-2" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.14 Layered Combination Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Advanced counting questions often stack multiple simple ideas into one
          prompt. The fastest path is to separate the layers, solve each piece,
          and then combine your results in order.
        </p>

        <MustKnow>
          Many “hard” combination problems are just a blend of basic moves.
          Identify the groups, apply any restrictions first, compute each group’s
          count, and then multiply when choices are independent.
        </MustKnow>

        <section aria-labelledby="example-22">
          <h3 id="example-22" className="sr-only">
            Example 22
          </h3>

          <MCQExample
            number={22}
            prompt="A manager must form a team of 7 people: 2 portfolio managers, 2 assistants, and 3 analysts. There are 4 eligible portfolio managers, 4 eligible assistants, and 5 eligible analysts. If two specific analysts are already guaranteed spots on the team, how many distinct team configurations are possible?"
            options={["108", "152", "200", "252", "302"]}
            correct="108"
            solution={
              <>
                <p className="mb-3">
                  Treat each role separately, honoring the constraint first.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Portfolio managers: choose 2 of 4
                    <span className="ml-2 inline-block">
                      <Math expr="{}^{4}C_{2}=6" ariaLabel="4 choose 2 equals 6" />
                    </span>
                  </li>
                  <li>
                    Assistants: choose 2 of 4
                    <span className="ml-2 inline-block">
                      <Math expr="{}^{4}C_{2}=6" ariaLabel="4 choose 2 equals 6" />
                    </span>
                  </li>
                  <li>
                    Analysts: two are already fixed; choose the remaining 1 from
                    the other 3 analysts
                    <span className="ml-2 inline-block">
                      <Math expr="{}^{3}C_{1}=3" ariaLabel="3 choose 1 equals 3" />
                    </span>
                  </li>
                </ul>

                <p className="mt-4">
                  Since these choices are independent across roles, multiply:
                </p>
                <Math
                  block
                  expr="{}^{4}C_{2}\times{}^{4}C_{2}\times{}^{3}C_{1}=6\times6\times3=108"
                  ariaLabel="4 choose 2 times 4 choose 2 times 3 choose 1 equals 108"
                />

                <details className="mt-4 rounded-md border border-gray-700 bg-gray-900/40 p-4">
                  <summary className="cursor-pointer text-gray-200">
                    Why 4 choose 2 equals 6 (factorial form)
                  </summary>
                  <div className="mt-3">
                    <Math
                      block
                      expr="{}^{n}C_{k}=\dfrac{n!}{k!(n-k)!}\quad\Rightarrow\quad{}^{4}C_{2}=\dfrac{4!}{2!\,2!}=6"
                      ariaLabel="n choose k equals n factorial over k factorial times n minus k factorial; four choose two equals six"
                    />
                  </div>
                </details>

                <p className="mt-4">Correct answer: 108.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap-up">
          <h3 id="wrap-up" className="sr-only">
            Wrap-up
          </h3>
          <p>
            Strategy recap: apply restrictions first (here, two analysts are
            fixed), reduce each group to a straightforward combination, and then
            multiply the counts across independent groups.
          </p>
        </section>
      </article>
    </main>
  );
}