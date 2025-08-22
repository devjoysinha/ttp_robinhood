import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Minimal server-side KaTeX renderer (no CSS dependency required for SSR markup)
function renderKatex(tex: string, displayMode = false) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const katex = require("katex");
    return katex.renderToString(tex, { throwOnError: false, displayMode });
  } catch {
    // Fallback to plain text if katex isn't available at build time
    return tex;
  }
}

function K({ tex }: { tex: string }) {
  const html = renderKatex(tex);
  return <span aria-label={tex} dangerouslySetInnerHTML={{ __html: html }} />;
}

function KBlock({ tex }: { tex: string }) {
  const html = renderKatex(tex, true);
  return (
    <div
      className="my-2"
      aria-label={tex}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "13.2.4 Integrating Algebra Into Overlapping Set Problems | Overlapping Sets",
  description:
    "Learn how to translate worded constraints into variables inside a 2×2 set‑matrix, and solve percent/fraction statements with algebra. Includes one MCQ and two Data Sufficiency drills, plus a challenging practice question.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.2.4 Integrating Algebra Into Overlapping Set Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Tough overlapping‑set questions often hinge on assigning the right variables to
          the right cells of a 2×2 matrix. Any time the prompt gives relationships in
          words, percents, or fractions, translate them carefully into algebra inside
          the table, then use row/column totals to build equations.
        </p>

        <MustKnow>
          Read the stem precisely and place variables in the correct cells of the set‑matrix.
          When the statements involve percents, fractions, or “times as many,” convert them
          directly into algebraic equalities between the relevant cells or totals.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-4">
          <h3 id="mini-example" className="text-xl font-semibold text-white">
            Mini‑example: Dogs and cats
          </h3>
          <p>
            In a group, the number of dog owners is twice the number of cat owners. If{" "}
            <K tex="\,\tfrac{1}{8}\," /> of dog owners also own a cat and there are 150 cat owners who do not own a dog, how many people own a dog?
          </p>

          <p>
            Let x be the number of cat owners, so the number of dog owners is 2x. Since{" "}
            <K tex="\tfrac{1}{8}" /> of the dog owners also own a cat, the overlap is{" "}
            <K tex="\tfrac{1}{8}\cdot 2x=\tfrac{x}{4}" />.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="w-36 border-b border-gray-700 px-3 py-2" />
                  <th className="border-b border-gray-700 px-3 py-2">Own cat</th>
                  <th className="border-b border-gray-700 px-3 py-2">Don’t own cat</th>
                  <th className="border-b border-gray-700 px-3 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <th scope="row" className="border-b border-gray-800 px-3 py-2 font-semibold">
                    Own dog
                  </th>
                  <td className="border-b border-gray-800 px-3 py-2">
                    <K tex="\tfrac{x}{4}" />
                  </td>
                  <td className="border-b border-gray-800 px-3 py-2">—</td>
                  <td className="border-b border-gray-800 px-3 py-2">
                    <span className="font-semibold">2x</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <th scope="row" className="border-b border-gray-800 px-3 py-2 font-semibold">
                    Don’t own dog
                  </th>
                  <td className="border-b border-gray-800 px-3 py-2">
                    <span className="font-semibold">150</span>
                  </td>
                  <td className="border-b border-gray-800 px-3 py-2">—</td>
                  <td className="border-b border-gray-800 px-3 py-2">—</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2 font-semibold">
                    Total
                  </th>
                  <td className="px-3 py-2">
                    <span className="font-semibold">x</span>
                  </td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            From the “Own cat” column, cat owners are split into dog‑owners (
            <K tex="\tfrac{x}{4}" />) and non‑dog‑owners (150), so:
          </p>

          <KBlock tex="\tfrac{x}{4} + 150 = x \;\;\Rightarrow\;\; 150 = \tfrac{3x}{4} \;\;\Rightarrow\;\; x = 200" />

          <p>
            Therefore, the number of dog owners is <K tex="2x=400" />, so 400 people own a dog.
          </p>
        </section>

        <MCQExample
          number={6}
          prompt="At a dinner party, 40% of guests wore both jackets and ties. If 50% of the jacket‑wearers did not wear ties, what percent of all guests wore jackets?"
          options={["20%", "40%", "60%", "70%", "80%"]}
          correct="80%"
          solution={
            <>
              <p>
                Assume 100 guests. Then 40 wore both a jacket and a tie. Let J be the
                number who wore jackets. The statement “50% of the jacket‑wearers did not
                wear ties” means the count in Jacket ∩ No‑Tie is <K tex="0.5J" />. The jacket
                column total gives:
              </p>
              <KBlock tex="40 + 0.5J = J \;\;\Rightarrow\;\; 40 = 0.5J \;\;\Rightarrow\;\; J=80" />
              <p>Thus, 80% of guests wore jackets.</p>
              <MustKnow className="mt-4">
                Don’t apply the 50% to all guests. It applies only to those who wore jackets.
              </MustKnow>
            </>
          }
        />

        <ExampleCard
          number={7}
          title="How many male students attend the school?"
          statements={[
            "There are s students in total. Exactly 40 female students are on the science team.",
            "1) 20% of the students are not on the science team.",
            "2) 40% of the students are females on the science team.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                From the stem, “female on team” is fixed at 40. With (1), we only know team total is{" "}
                <K tex="0.8s" />, but we don’t know how many of those are male vs. female, so male total is indeterminate.
              </p>
              <p>
                With (2), <K tex="0.4s=40" /> implies <K tex="s=100" />, but again we don’t know the split of total
                males and females overall. Together, we still lack the overall gender breakdown. Not sufficient.
              </p>
              <p>Answer: E.</p>
            </>
          }
        />

        <ExampleCard
          number={8}
          title="Costumes at a party"
          statements={[
            "There are 100 people at a party. Exactly 15 females are not in costume. How many people are in costume?",
            "1) The number of females in costume exceeds the number of males not in costume by 5.",
            "2) There are 50 males at the party.",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                Let x be the count of males with no costume. From (1), females in costume = <K tex="x+5" />. From the stem,
                females with no costume = 15.
              </p>
              <p>
                With (2), there are 50 males and thus 50 females. Combining both statements allows solving:
                males with no costume = <K tex="x" />, so males in costume = <K tex="50-x" />. Females in costume ={" "}
                <K tex="50-15=35" />, and (1) gives <K tex="35=x+5\Rightarrow x=30" />. Therefore, total in costume is{" "}
                <K tex="(50-x) + 35 = 20 + 35 = 55" />. Sufficient together; each alone is not.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <MCQExample
          number={9}
          prompt="At a restaurant there are m workers in total, all of whom are either cooks or waiters. Of these, n are cooks and (5n/4) workers have college degrees. If (3n/4) cooks have degrees, (m/4) waiters do not have degrees, and 30 workers have no degree, how many workers are there?"
          options={["20", "40", "80", "100", "120"]}
          correct="80"
          solution={
            <>
              <p>
                Degree‑holders total: <K tex="\tfrac{5n}{4}" />. Cook degree‑holders: <K tex="\tfrac{3n}{4}" />. Therefore,
                waiter degree‑holders: <K tex="\tfrac{5n}{4}-\tfrac{3n}{4}=\tfrac{n}{2}" />.
              </p>
              <p>
                Let waiter no‑degree count be <K tex="\tfrac{m}{4}" /> (given), and total no‑degree is 30. Thus,
                no‑degree cooks = <K tex="30 - \tfrac{m}{4}" />. But the cook total is n, so:
              </p>
              <KBlock tex="\text{Cook degrees}+\text{Cook no-degree}=n \;\;\Rightarrow\;\; \tfrac{3n}{4} + \Big(30-\tfrac{m}{4}\Big)=n" />
              <KBlock tex="\Rightarrow\; 30-\tfrac{m}{4} = \tfrac{n}{4} \;\;\Rightarrow\;\; 120 - m = n" />
              <p>
                Also, total waiters = <K tex="m-n" />, which equals waiter degrees plus waiter no‑degrees:
              </p>
              <KBlock tex="m-n = \tfrac{n}{2} + \tfrac{m}{4}" />
              <KBlock tex="\Rightarrow\; 4m-4n = 2n + m \;\Rightarrow\; 3m = 6n \;\Rightarrow\; m = 2n" />
              <p>
                Substitute into <K tex="120 - m = n" /> to get <K tex="120 - 2n = n \Rightarrow 3n=120 \Rightarrow n=40" /> and{" "}
                <K tex="m=80" />. Therefore, there are 80 workers.
              </p>
              <p>Answer: 80.</p>
            </>
          }
        />

        <p>
          Bottom line: model the language precisely in a set‑matrix, assign variables to
          the correct cells, and use row/column totals to write equations. With practice,
          the algebra becomes routine and the logic becomes the main driver.
        </p>
      </article>
    </main>
  );
}