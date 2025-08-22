import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: Ensure KaTeX CSS is included globally in your app (e.g., in app/layout.tsx)
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.22 Equivalent Fractions | Essential GMAT Quant Skills",
  description:
    "Understand equivalent fractions, reducing to lowest terms, generating equivalents by scaling, and testing equivalence with cross‑products. Includes four quick GMAT‑style checks.",
};

function Math({ tex, display = false, ariaLabel }: { tex: string; display?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: display });
  return (
    <span
      className={display ? "block my-2" : "inline"}
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.22 Equivalent Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Two fractions can look different and still represent the very same quantity. For instance, eating half a pizza
          could be recorded as
          {" "}
          <Math tex="\,\frac{25}{50}\," ariaLabel="twenty five over fifty" />
          {" "}
          of 50 tiny slices or
          {" "}
          <Math tex="\,\frac{1}{2}\," ariaLabel="one half" />
          {" "}
          of 2 big slices—the amount eaten hasn’t changed.
        </p>

        <MustKnow>
          Equivalent fractions name the same value even if their numerators and denominators differ. You can create
          them by multiplying or dividing the numerator and denominator by the same nonzero number.
        </MustKnow>

        <section aria-labelledby="reducing">
          <h3 id="reducing" className="sr-only">Reducing to lowest terms</h3>
          <p>
            To simplify a fraction, divide the numerator and denominator by a common factor until no common factor
            remains (other than 1). For example:
          </p>
          <p>
            <Math tex="\,\frac{7}{56} \;=\; \frac{7\div 7}{56\div 7}\;=\;\frac{1}{8}\," ariaLabel="seven over fifty six equals one over eight" />
          </p>
          <MustKnow>
            A fraction is in lowest terms when the numerator and denominator share no common factor greater than 1.
          </MustKnow>
        </section>

        <section aria-labelledby="generate">
          <h3 id="generate" className="sr-only">Generating equivalents by scaling</h3>
          <p>
            The process also works in reverse: multiply both parts by the same value to get a new—but equivalent—fraction.
          </p>
          <p>
            <Math tex="\,\frac{1}{8}\times\frac{7}{7} \;=\; \frac{1\times 7}{8\times 7}\;=\;\frac{7}{56}\," ariaLabel="one eighth times seven over seven equals seven over fifty six" />
          </p>
          <MustKnow>
            To generate an equivalent fraction, multiply the numerator and denominator by the same nonzero integer
            (or divide by the same common factor).
          </MustKnow>
        </section>

        <section aria-labelledby="cross">
          <h3 id="cross" className="sr-only">Testing equivalence</h3>
          <p>
            A quick way to test if
            {" "}
            <Math tex="\frac{a}{b}" ariaLabel="a over b" />
            {" "}
            equals
            {" "}
            <Math tex="\frac{c}{d}" ariaLabel="c over d" />
            {" "}
            (with
            {" "}
            <Math tex="b\neq 0" ariaLabel="b not equal zero" />
            {" "}
            and
            {" "}
            <Math tex="d\neq 0" ariaLabel="d not equal zero" />
            ) is to compare cross‑products: the fractions are equivalent precisely when
            {" "}
            <Math tex="a\cdot d \;=\; b\cdot c" ariaLabel="a d equals b c" />.
          </p>
          <MustKnow>
            Cross‑product test: 
            {" "}
            <Math tex="\frac{a}{b}=\frac{c}{d}\iff a\cdot d=b\cdot c" ariaLabel="a over b equals c over d if and only if a d equals b c" />
            .
          </MustKnow>
        </section>

        <hr className="my-8 border-gray-700" />

        <MCQExample
          number={100}
          prompt={
            <>
              If
              {" "}
              <Math tex="\frac{p}{5}=\frac{7}{q}" ariaLabel="p over 5 equals 7 over q" />
              {" "}
              for nonzero whole numbers p and q, which statement must be true?
              <br />
              I. p = 7
              <br />
              II. q = 5
              <br />
              III. p × q = 35
            </>
          }
          options={["I only", "I and II", "III only", "II and III", "I, II, and III"]}
          correct="III only"
          solution={
            <>
              <p>
                From
                {" "}
                <Math tex="\frac{p}{5}=\frac{7}{q}" ariaLabel="p over 5 equals 7 over q" />
                , cross‑multiply:
                {" "}
                <Math tex="p\cdot q=5\cdot 7=35" ariaLabel="p q equals thirty five" />
                . That guarantees III. However, p and q need not equal 7 and 5, respectively
                (for example, p = 1 and q = 35). So I and II are not required.
              </p>
            </>
          }
        />

        <MCQExample
          number={101}
          prompt={
            <>
              Suppose
              {" "}
              <Math tex="\frac{a}{b}=\frac{13}{39}" ariaLabel="a over b equals thirteen over thirty nine" />
              , and
              {" "}
              <Math tex="\frac{c}{d}=\frac{a}{b}" ariaLabel="c over d equals a over b" />
              , and
              {" "}
              <Math tex="\frac{e}{f}=\frac{c}{d}" ariaLabel="e over f equals c over d" />
              . Which of the following equals
              {" "}
              <Math tex="\frac{e}{f}" ariaLabel="e over f" />
              ?
              <br />
              I.
              {" "}
              <Math tex="\frac{1}{3}" ariaLabel="one third" />
              {" "}
              II.
              {" "}
              <Math tex="\frac{15}{45}" ariaLabel="fifteen over forty five" />
              {" "}
              III.
              {" "}
              <Math tex="\frac{30}{120}" ariaLabel="thirty over one twenty" />
            </>
          }
          options={["I only", "I and II", "III only", "II and III", "I, II, and III"]}
          correct="I and II"
          solution={
            <>
              <p>
                Reduce
                {" "}
                <Math tex="\frac{13}{39}" ariaLabel="thirteen over thirty nine" />
                {" "}
                to
                {" "}
                <Math tex="\frac{1}{3}" ariaLabel="one third" />
                . Since
                {" "}
                <Math tex="\frac{e}{f}" ariaLabel="e over f" />
                equals
                {" "}
                <Math tex="\frac{a}{b}" ariaLabel="a over b" />
                , it must be
                {" "}
                <Math tex="\frac{1}{3}" ariaLabel="one third" />
                . Also,
                {" "}
                <Math tex="\frac{15}{45}" ariaLabel="fifteen over forty five" />
                {" "}
                reduces to
                {" "}
                <Math tex="\frac{1}{3}" ariaLabel="one third" />
                , so I and II are correct. But
                {" "}
                <Math tex="\frac{30}{120}=\frac{1}{4}" ariaLabel="thirty over one twenty equals one fourth" />
                , not
                {" "}
                <Math tex="\frac{1}{3}" ariaLabel="one third" />
                .
              </p>
            </>
          }
        />

        <MCQExample
          number={102}
          prompt={
            <>
              A collection had 120 marbles. If 24 were recovered, what fraction of the collection was recovered?
            </>
          }
          options={[
            <span key="o1"><Math tex="\frac{1}{12}" ariaLabel="one twelfth" /></span> as unknown as string,
            <span key="o2"><Math tex="\frac{1}{6}" ariaLabel="one sixth" /></span>,
            <span key="o3"><Math tex="\frac{1}{5}" ariaLabel="one fifth" /></span>,
            <span key="o4"><Math tex="\frac{2}{3}" ariaLabel="two thirds" /></span>,
            <span key="o5"><Math tex="\frac{3}{4}" ariaLabel="three fourths" /></span>,
          ]
            .map((n) => (typeof n === "string" ? n : (n as any))) as string[]}
          correct={<span><Math tex="\frac{1}{5}" ariaLabel="one fifth" /></span> as unknown as string}
          solution={
            <>
              <p>
                Part over whole:
                {" "}
                <Math tex="\frac{24}{120}" ariaLabel="twenty four over one hundred twenty" />
                {" "}
                reduces by 24 to
                {" "}
                <Math tex="\frac{1}{5}" ariaLabel="one fifth" />
                .
              </p>
            </>
          }
        />

        <MCQExample
          number={103}
          prompt={
            <>
              Which of the following are equivalent to
              {" "}
              <Math tex="\frac{3}{4}" ariaLabel="three fourths" />
              ?
              <br />
              I.
              {" "}
              <Math tex="\frac{24}{32}" ariaLabel="twenty four over thirty two" />
              {" "}
              II.
              {" "}
              <Math tex="\frac{21}{30}" ariaLabel="twenty one over thirty" />
              {" "}
              III.
              {" "}
              <Math tex="\frac{45}{60}" ariaLabel="forty five over sixty" />
            </>
          }
          options={["I only", "III only", "I and III", "II and III", "I, II, and III"]}
          correct="I and III"
          solution={
            <>
              <p>
                Reduce each choice:
                {" "}
                <Math tex="\frac{24}{32}=\frac{3}{4}" ariaLabel="twenty four over thirty two equals three fourths" />
                {" "}
                (divide by 8);
                {" "}
                <Math tex="\frac{21}{30}=\frac{7}{10}" ariaLabel="twenty one over thirty equals seven tenths" />
                {" "}
                (not
                {" "}
                <Math tex="\frac{3}{4}" ariaLabel="three fourths" />
                );
                {" "}
                <Math tex="\frac{45}{60}=\frac{3}{4}" ariaLabel="forty five over sixty equals three fourths" />
                {" "}
                (divide by 15). Therefore I and III.
              </p>
            </>
          }
        />

        <hr className="my-8 border-gray-700" />

        <MustKnow>
          Takeaways:
          {" "}
          1) Reduce by common factors to find lowest terms.
          {" "}
          2) Scale numerator and denominator equally to make new equivalents.
          {" "}
          3) Use the cross‑product test
          {" "}
          <Math tex="a\cdot d=b\cdot c" ariaLabel="a d equals b c" />
          {" "}
          to confirm equivalence fast.
        </MustKnow>
      </article>
    </main>
  );
}