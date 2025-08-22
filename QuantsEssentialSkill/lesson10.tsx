import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// KaTeX (SSR-friendly)
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const Eq = ({ children }: { children: string }) => <InlineMath math={children} />;
const EqBlock = ({ children }: { children: string }) => <BlockMath math={children} />;

export const metadata: Metadata = {
  title: "2.1.10 Complex Fractions | Essential GMAT Quant Skills",
  description:
    "Learn what complex fractions are and how to simplify them efficiently. Master two core strategies, see fully worked examples, and practice with multiple‑choice questions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">2.1.10 Complex fractions</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A complex fraction is a fraction whose numerator, denominator, or both contain one or more
          fractions. For example, <Eq>4 \big/ \left(\tfrac{1}{2}\right)</Eq>, <Eq>\left(\tfrac{1}{7}\right)\big/3</Eq>, and{" "}
          <Eq>{String.raw`\dfrac{\tfrac{2}{3}}{\tfrac{5}{7}-\tfrac{3}{4}}`}</Eq> are all complex fractions.
          You’ll also encounter nested versions such as <Eq>{String.raw`\dfrac{9}{2+\dfrac{1}{\,3-\tfrac{4}{7}\,}}`}</Eq> or even symbolic ones like{" "}
          <Eq>{String.raw`\dfrac{\tfrac{x}{y}+\tfrac{2x}{y}}{\tfrac{y}{z}-\tfrac{2y}{z}}`}</Eq>.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Method 1: First turn the numerator and the denominator into single fractions, then divide (i.e.,
              multiply by the reciprocal).
            </li>
            <li>
              Method 2: Multiply the big fraction (top and bottom) by a common denominator (LCD) that clears all
              the small denominators in one move, then simplify.
            </li>
          </ul>
        </MustKnow>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Mini‑example</h3>
          <p>Simplify <Eq>{String.raw`\dfrac{8}{\tfrac{2}{3}+\tfrac{1}{2}}`}</Eq>.</p>

          <p className="font-semibold text-white">Method 1 (combine then divide)</p>
          <div className="space-y-2">
            <EqBlock>{String.raw`\tfrac{2}{3}+\tfrac{1}{2}=\tfrac{4}{6}+\tfrac{3}{6}=\tfrac{7}{6}`}</EqBlock>
            <EqBlock>{String.raw`\dfrac{8}{\,\tfrac{7}{6}\,}=8\cdot\tfrac{6}{7}=\tfrac{48}{7}`}</EqBlock>
          </div>

          <p className="font-semibold text-white">Method 2 (clear the small denominators)</p>
          <div className="space-y-2">
            <p>
              The small denominators are 3 and 2, so multiply the entire fraction by{" "}
              <Eq>{String.raw`\tfrac{6}{6}`}</Eq>:
            </p>
            <EqBlock>
              {String.raw`\dfrac{8}{\tfrac{2}{3}+\tfrac{1}{2}}\cdot \dfrac{6}{6}=\dfrac{8\cdot 6}{\tfrac{6\cdot 2}{3}+\tfrac{6\cdot 1}{2}}=\dfrac{48}{4+3}=\dfrac{48}{7}`}
            </EqBlock>
          </div>

          <p>Either way, the result is <Eq>48/7</Eq>.</p>
        </section>

        <section className="space-y-4">
          <MCQExample
            number={31}
            prompt={
              <>
                <span>Evaluate </span>
                <Eq>{String.raw`\dfrac{\tfrac{1}{3}+\tfrac{1}{5}}{\tfrac{1}{3}+\tfrac{1}{4}}`}</Eq>
                <span>.</span>
              </>
            }
            options={["1/2", "2/3", "32/35", "2 2/5", "3 2/5"]}
            correct="32/35"
            solution={
              <>
                <p>
                  Combine each part:{" "}
                  <Eq>{String.raw`\tfrac{1}{3}+\tfrac{1}{5}=\tfrac{8}{15}`}</Eq> and{" "}
                  <Eq>{String.raw`\tfrac{1}{3}+\tfrac{1}{4}=\tfrac{7}{12}`}</Eq>. Then divide:
                </p>
                <EqBlock>{String.raw`\dfrac{\tfrac{8}{15}}{\tfrac{7}{12}}=\tfrac{8}{15}\cdot\tfrac{12}{7}=\tfrac{32}{35}`}</EqBlock>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Nested complex fraction</h3>
          <p>Consider the expression</p>
          <EqBlock>{String.raw`\dfrac{2}{\,3+\dfrac{2}{\tfrac{1}{4}+\tfrac{1}{2}}\,}`}</EqBlock>

          <p className="font-semibold text-white">Work from the inside out (Method 1)</p>
          <div className="space-y-2">
            <EqBlock>{String.raw`\tfrac{1}{4}+\tfrac{1}{2}=\tfrac{3}{4}\;\;\Rightarrow\;\; \dfrac{2}{\tfrac{3}{4}}=\tfrac{8}{3}`}</EqBlock>
            <EqBlock>{String.raw`3+\tfrac{8}{3}=\tfrac{17}{3}`}</EqBlock>
            <EqBlock>{String.raw`\dfrac{2}{\tfrac{17}{3}}=2\cdot\tfrac{3}{17}=\tfrac{6}{17}`}</EqBlock>
          </div>

          <p className="font-semibold text-white">Or clear denominators (Method 2)</p>
          <p>
            Inside <Eq>{String.raw`\tfrac{1}{4}+\tfrac{1}{2}`}</Eq>, multiply by <Eq>{String.raw`\tfrac{4}{4}`}</Eq> to get{" "}
            <Eq>{String.raw`\tfrac{3}{4}`}</Eq>, then proceed as above. The result is still{" "}
            <Eq>6/17</Eq>.
          </p>
        </section>

        <section className="space-y-4">
          <MCQExample
            number={32}
            prompt={
              <>
                <span>Evaluate </span>
                <Eq>{String.raw`\dfrac{1}{\,2+\dfrac{4}{\,3+\tfrac{1}{4}\,}}`}</Eq>
                <span>.</span>
              </>
            }
            options={["3/7", "4/9", "13/42", "45/32", "54/37"]}
            correct="13/42"
            solution={
              <>
                <p>
                  Inside first: <Eq>{String.raw`3+\tfrac{1}{4}=\tfrac{13}{4}`}</Eq>, so{" "}
                  <Eq>{String.raw`\dfrac{4}{\,3+\tfrac{1}{4}\,}=\dfrac{4}{\,\tfrac{13}{4}\,}= \tfrac{16}{13}`}</Eq>. Then{" "}
                  <Eq>{String.raw`2+\tfrac{16}{13}=\tfrac{42}{13}`}</Eq>. Finally, take the reciprocal:
                </p>
                <EqBlock>{String.raw`\dfrac{1}{\,\tfrac{42}{13}\,}=\tfrac{13}{42}`}</EqBlock>
              </>
            }
          />
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Two core strategies (recap)</h3>
          <p>
            Regardless of the form, you can always simplify complex fractions methodically by either combining
            the parts to single fractions first, or by clearing every small denominator with one well‑chosen LCD.
            Try both and keep the one that feels faster and safer for you on test day.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Algebraic example</h3>
          <p>
            Which expression is equivalent to{" "}
            <Eq>{String.raw`\dfrac{1}{\,x+\dfrac{y}{\,z+\tfrac{q}{p}\,}}`}</Eq> for all values where the
            expression is defined?
          </p>

          <MCQExample
            number={33}
            prompt={
              <>
                <span>Find an equivalent form of </span>
                <Eq>{String.raw`\dfrac{1}{\,x+\dfrac{y}{\,z+\tfrac{q}{p}\,}}`}</Eq>
                <span>.</span>
              </>
            }
            options={[
              "(zp + q) / (x(zp + q) + yp)",
              "(x(zp + q) + yp) / (zp + q)",
              "y / ((zp + q)/p)",
              "x + (yp)/(zp + q)",
            ]}
            correct="(zp + q) / (x(zp + q) + yp)"
            solution={
              <>
                <p>
                  Combine the inner sum: <Eq>{String.raw`z+\tfrac{q}{p}=\tfrac{zp+q}{p}`}</Eq>. Then{" "}
                  <Eq>{String.raw`\dfrac{y}{z+\tfrac{q}{p}}=\dfrac{y}{\,\tfrac{zp+q}{p}\,}= \dfrac{yp}{zp+q}`}</Eq>. The denominator
                  becomes <Eq>{String.raw`x+\dfrac{yp}{zp+q}=\dfrac{x(zp+q)+yp}{zp+q}`}</Eq>. Taking the reciprocal gives:
                </p>
                <EqBlock>{String.raw`\dfrac{1}{\,x+\dfrac{y}{\,z+\tfrac{q}{p}\,}}=\dfrac{zp+q}{\,x(zp+q)+yp\,}`}</EqBlock>
              </>
            }
          />
        </section>

        <MustKnow>
          <ul className="list-disc pl-5">
            <li>
              Work “inside‑out” for nested structures. Reduce the deepest fraction, then move outward.
            </li>
            <li>
              When many small denominators appear, multiply the big fraction by an LCD such as{" "}
              <Eq>{String.raw`\tfrac{\text{LCD}}{\text{LCD}}`}</Eq> to remove them in one step.
            </li>
            <li>
              Swap division for “multiply by the reciprocal” as soon as the numerator/denominator are single
              fractions.
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}