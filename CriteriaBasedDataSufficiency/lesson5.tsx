import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
// If you already have a shared Math component, use that instead.
import katex from "katex";

function Math({
  expr,
  display = false,
  ariaLabel,
  className = "",
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={className}
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title:
    "4.3 Considering Outside Factors | Criteria‑Based DS",
  description:
    "How to tell whether a criteria‑based Data Sufficiency question requires outside factors. Learn to distinguish restricted vs. unrestricted groups, spot key words, and practice with a DS example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Criteria‑Based Data Sufficiency
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.3 Do We Need to Consider Outside Factors?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In criteria‑driven DS problems, your first job is to decide whether the situation limits the choices to a specific set or leaves them open. That single decision tells you whether outside factors can change the conclusion.
        </p>

        <MustKnow>
          The question of “outside factors” is really a question about the universe of possibilities.
          - Restricted group: the options are confined to a stated set → ignore outside factors.
          - Unrestricted group: the options are not confined → account for outside factors.
        </MustKnow>

        <p>
          Here, the term “group” simply means the collection you’re choosing from in the DS setup. It might be people, companies, objects, or even a set of conditions.
        </p>

        <MustKnow>
          In criteria‑based DS, a “group” can be any collection named or implied by the stem—entities, objects, or the criteria themselves. The key is whether that collection is restricted or not.
        </MustKnow>

        <section aria-labelledby="cars-example">
          <h3 id="cars-example" className="text-xl font-semibold text-white">
            Quick contrast: open versus closed group
          </h3>
          <p>
            Suppose Phil is car shopping.
          </p>
          <p className="ml-4">
            1) “Phil will buy a used car this weekend. His must‑haves are price under $4,000 and not green. Will he buy his neighbor’s car?” — Because Phil could pick any seller whose car fits, the pool isn’t limited to the neighbor. That’s an unrestricted group, so other possibilities matter.
          </p>
          <p className="ml-4">
            2) “Phil will buy a used car from his neighbor this weekend. His must‑haves are price under $4,000 and not green. Will he buy his neighbor’s car?” — Now the choice is confined to one seller (the neighbor). That’s a restricted group, so outside options are irrelevant.
          </p>
        </section>

        <MustKnow>
          Summary rule:
          - If the stem restricts the choice to a specific entity or list, do not consider outside options.
          - If the stem does not restrict the choice, you must consider outside options.
        </MustKnow>

        <section aria-labelledby="keywords">
          <h3 id="keywords" className="text-xl font-semibold text-white">
            Helpful keywords to spot
          </h3>
          <p>These words and phrases often flag whether the group is restricted or not:</p>
          <ul className="list-disc pl-6">
            <li>only — typically restricted</li>
            <li>exactly — typically restricted</li>
            <li>include — typically unrestricted</li>
            <li>or neither — typically unrestricted</li>
          </ul>
        </section>

        <section aria-labelledby="sara-example">
          <h3 id="sara-example" className="text-xl font-semibold text-white">
            Example phrases in action
          </h3>
          <p className="ml-4">
            “Sara’s <strong>only</strong> criteria for attending a campus lecture are: dark matter and black holes must be covered; if stellar lifecycles are covered, the Big Bang must be covered. Will Sara attend?” — “only” signals a restricted set of criteria; ignore any extra, unstated preferences.
          </p>
          <p className="ml-4">
            “Sara’s criteria for attending a campus lecture <strong>include</strong>: dark matter and black holes must be covered; if stellar lifecycles are covered, the Big Bang must be covered. Will Sara attend?” — “include” leaves room for additional requirements. That’s unrestricted; extra, unstated criteria could change the outcome.
          </p>
        </section>

        <section aria-labelledby="neither-example">
          <h3 id="neither-example" className="text-xl font-semibold text-white">
            “Or neither” hints the pool isn’t closed
          </h3>
          <p className="ml-4">
            “Jerome needs a kitchen remodel within 3 weeks and at most $25,000. Will he hire Sure Thing, NewLook, <strong>or neither</strong>?” — The phrase “or neither” implies the decision is not confined to those two companies; another option (or no hire) could satisfy the criteria better. That’s an unrestricted group.
          </p>
        </section>

        <MustKnow>
          You won’t always see a keyword. Even without “only,” “include,” or “or neither,” the stem will give enough context to infer whether the group is restricted. Read carefully and decide before testing statements.
        </MustKnow>

        <section aria-labelledby="practice-ds">
          <h3 id="practice-ds" className="text-xl font-semibold text-white">
            Practice: Data Sufficiency (Criteria‑Based)
          </h3>

          <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
            <p>
              Kumar plans a 5‑day trip to Mexico. His must‑have resort criteria include:
            </p>
            <ul className="ml-5 list-disc">
              <li className="flex items-center gap-2">
                <Math expr={`\\text{cost} \\le 3000`} ariaLabel="cost less than or equal to 3000" />
                USD
              </li>
              <li>
                <Math expr={`T_{\\text{daily}} \\ge 75^{\\circ}\\!F`} ariaLabel="daily temperature at least 75 degrees Fahrenheit" />
              </li>
            </ul>
          </div>

          <ExampleCard
            number={46}
            title="Resort choice with unrestricted group"
            statements={[
              "A travel agent recommends two resorts: Gran Cielo and Sol y Mar. Did Kumar most likely book Gran Cielo, Sol y Mar, or neither?",
              "1) Gran Cielo costs $2,500 and is in a warmer location than Sol y Mar.",
              "2) Sol y Mar’s daily temperature exceeds 77°F and it charges more than Gran Cielo.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  The stem says Kumar’s must‑haves <em>include</em> the two listed items and asks whether he booked one of the two named resorts <em>or neither</em>. Both “include” and “or neither” indicate an unrestricted group: Kumar may have other required criteria, and he might book a different resort.
                </p>
                <p>
                  Statement (1): We learn Gran Cielo meets the price cap and is warmer than Sol y Mar, but we still don’t know either location’s exact temperatures relative to the 75°F threshold. Also, because other resorts could fit his (possibly longer) list, we cannot decide which option is more likely. Not sufficient.
                </p>
                <p>
                  Statement (2): We learn Sol y Mar satisfies the temperature requirement and is pricier than Gran Cielo, but we do not know whether either resort meets the price cap. Other, unmentioned resorts could also qualify. Not sufficient.
                </p>
                <p>
                  Together: Now we know Gran Cielo satisfies the price cap and Sol y Mar satisfies the temperature minimum; Gran Cielo may also satisfy temperature, and Sol y Mar may or may not satisfy price. Even so, the group remains unrestricted: Kumar might have additional must‑haves (e.g., ocean view), and he could book a different resort altogether. Still not sufficient.
                </p>
                <p>
                  Answer: E — Even together, the information does not determine which option he most likely chose.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: Decide restricted vs. unrestricted first. If the set is closed, ignore outside options; if it’s open, you must account for them before judging sufficiency.
        </p>
      </article>
    </main>
  );
}