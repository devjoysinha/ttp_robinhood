import type { Metadata } from "next";
import katex from "katex";
// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "7.12 Mixture Word Problems | General Word Problems",
  description:
    "Understand the two key mixture problem types on the GMAT—dry and wet. Learn core ideas, terminology, and the weighted‑average formula for solution concentration.",
};

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });

  return (
    <span className={display ? "block my-3" : ""}>
      <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: html }} />
      <span className="sr-only">{ariaLabel ?? expr}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.12 Mixture Word Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Mixture questions revolve around blending two or more parts to create a
          single combined product. Depending on the prompt, you may be asked
          about the ingredients that go into the blend or about the properties
          of the final mixture itself.
        </p>

        <MustKnow>
          Mixture problems are about combining components to form one final
          mixture. You’ll either solve for details of the inputs or for the
          characteristics of the result.
        </MustKnow>

        <p>On the GMAT, you’ll typically see two categories of mixtures:</p>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            <span className="font-semibold text-white">Dry mixtures.</span>{" "}
            These involve “pure” solid ingredients (each made of a single
            item). For instance, you might combine only peanuts with only
            raisins to make a snack mix. Each input is a single ingredient, so
            the total quantity is just the sum of the parts.
          </li>
          <li>
            <span className="font-semibold text-white">Wet mixtures.</span>{" "}
            These involve liquids with specified concentrations (such as salt
            solutions). When you pour solutions together, the amount of solute
            adds, and the total volume adds, producing a new concentration for
            the final solution.
          </li>
        </ul>

        <MustKnow>
          GMAT mixture problems come in two forms: dry (pure solids) and wet
          (solutions with concentrations).
        </MustKnow>

        <section aria-labelledby="wet-mixture-basics" className="space-y-4">
          <h3
            id="wet-mixture-basics"
            className="text-xl font-semibold text-white"
          >
            Wet Mixtures: Core Relationships
          </h3>
          <p>
            It’s helpful to capture wet mixtures with a few simple
            relationships. Treat percents as decimals (for example, 30% is
            0.30).
          </p>

          <div className="rounded-md bg-slate-800/70 p-4">
            <p className="mb-2 font-semibold text-white">Key identities:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Amount of solute in a solution:
                <Math
                  expr=" \ \text{solute} = (\text{concentration}) \times (\text{volume}) "
                  ariaLabel="solute equals concentration times volume"
                />
              </li>
              <li>
                When mixing two solutions with concentrations c1 and c2 and
                volumes v1 and v2, the total solute is:
                <Math
                  display
                  expr=" \ \text{total solute} = c_1 v_1 + c_2 v_2 "
                  ariaLabel="total solute equals c1 times v1 plus c2 times v2"
                />
              </li>
              <li>
                The final concentration is a weighted average:
                <Math
                  display
                  expr="\ c_{\text{final}} = \dfrac{c_1 v_1 + c_2 v_2}{v_1 + v_2} "
                  ariaLabel="c final equals open parenthesis c1 v1 plus c2 v2 close parenthesis divided by open parenthesis v1 plus v2 close parenthesis"
                />
              </li>
            </ul>
          </div>
        </section>

        <p>
          We’ll begin with dry mixtures next, where each component is a single
          ingredient and the total amount is the straightforward sum of the
          parts.
        </p>
      </article>
    </main>
  );
}