import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "11.15.1 More Complicated Direct Variation | Ratios",
  description:
    "Go beyond y = kx and learn how to handle direct variation with powers and other expressions. Includes a worked mini‑example and a practice multiple‑choice question with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">11. Ratios</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.15.1 More Complicated Direct Variation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now we’ve focused on direct variation in its simplest form,{" "}
          <InlineMath math="y = kx" />, where a single variable scales the other. Direct
          variation, however, also appears with powers or other expressions. The same
          playbook still works: translate “varies directly” into an equation with a constant
          of proportionality, solve for that constant, then answer the question.
        </p>

        <p>
          Consider this quick example: “y varies directly with the square of x. If{" "}
          <InlineMath math="x = 2" /> gives <InlineMath math="y = 20" />, what is y when{" "}
          <InlineMath math="x = 9" />?”
        </p>

        <p>
          “Varies directly with the square of x” means{" "}
          <InlineMath math="y = kx^2" /> for some constant k. Use the given pair to find k:
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math="y = kx^2" />
          <BlockMath math="20 = k(2)^2" />
          <BlockMath math="20 = 4k" />
          <BlockMath math="k = 5" />
        </div>

        <p>
          So the model is <InlineMath math="y = 5x^2" />. Plug in{" "}
          <InlineMath math="x = 9" />:
        </p>

        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math="y = 5(9)^2 = 5 \cdot 81 = 405" />
        </div>

        <MustKnow>
          <p className="mb-2">
            Direct variation isn’t limited to single variables. If{" "}
            <InlineMath math="y" /> varies directly with <InlineMath math="x^2" />, then{" "}
            <InlineMath math="y = kx^2" /> for some constant <InlineMath math="k" />.
          </p>
          <p className="mb-0">
            Scaling rule: if <InlineMath math="x" /> is multiplied by{" "}
            <InlineMath math="c" />, then <InlineMath math="y" /> is multiplied by{" "}
            <InlineMath math="c^2" />. More generally, if{" "}
            <InlineMath math="y \propto g(x)" />, then{" "}
            <InlineMath math="y = k \, g(x)" />.
          </p>
        </MustKnow>

        <MCQExample
          number={27}
          prompt="In a video game, a player’s score S varies directly with the square of the number of targets hit T. A player who hit 3 targets scored 72 points. What would the score be if she hit 6 targets?"
          options={["144", "288", "432", "576", "720"]}
          correct="288"
          solution={
            <>
              <p>
                Because the score varies directly with the square of the targets hit, set up{" "}
                <InlineMath math="S = kT^2" />. Use the given data point{" "}
                <InlineMath math="(T,S) = (3,72)" /> to find <InlineMath math="k" />:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4 my-3">
                <BlockMath math="72 = k(3)^2" />
                <BlockMath math="72 = 9k" />
                <BlockMath math="k = 8" />
              </div>
              <p>
                Now evaluate at <InlineMath math="T = 6" />:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4 my-3">
                <BlockMath math="S = 8(6)^2 = 8 \cdot 36 = 288" />
              </div>
              <p className="mb-0">
                Note the trap: doubling <InlineMath math="T" /> does not double{" "}
                <InlineMath math="S" /> here; it multiplies the score by{" "}
                <InlineMath math="2^2 = 4" /> because the relationship involves a square.
              </p>
            </>
          }
        />

        <p>
          Takeaway: translate the wording into a model with a constant of proportionality,
          solve for that constant, and apply the model. Next, we’ll look at inverse
          variation, where increasing one quantity reduces the other.
        </p>
      </article>
    </main>
  );
}