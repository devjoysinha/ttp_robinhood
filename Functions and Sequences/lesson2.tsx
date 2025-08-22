import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "19.3 The Domain of a Function | Functions and Sequences",
  description:
    "A clear guide to domains: what inputs are allowed, common restrictions (zero denominators and even roots of negatives), and four practice questions with full reasoning.",
};

function Math({
  children,
  block = false,
}: {
  children: string;
  block?: boolean;
}) {
  const html = katex.renderToString(children, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
  });
  return (
    <span
      aria-label="math"
      className={block ? "my-2 block" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* KaTeX CSS (lightweight CDN include) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css"
        crossOrigin="anonymous"
      />

      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.3 The Domain of a Function
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Think of a function as a machine: you feed in an input{" "}
          <Math>x</Math>, and the machine returns an output{" "}
          <Math>f(x)</Math>. The domain of a function is the collection of
          inputs the machine can accept without breaking. For many functions,
          that’s every real number; for others, certain inputs are off‑limits.
        </p>

        <MustKnow>
          The domain of a function is the set of all permissible inputs. When
          the domain isn’t explicitly stated, assume all real numbers except
          those that make the expression invalid.
        </MustKnow>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Specified domains</h3>
          <p>
            Sometimes a function comes with a built‑in restriction. For example,
            if
            {" "}
            <Math>g(x)=5x-2 \text{ for } 5\le x\le 20</Math>, then the domain is{" "}
            <Math>[5,\,20]</Math>. Likewise, if{" "}
            <Math>h(x)=3x^2+5x \text{ for } -7\le x\le 0</Math>, the domain is{" "}
            <Math>[-7,\,0]</Math>.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Default rule when the domain isn’t given
          </h3>
          <p>
            If no domain is provided, we allow all real inputs that keep the
            output real. Two patterns regularly cause trouble:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Division by zero (denominators cannot be zero).</li>
            <li>Even roots of negative numbers (e.g., square roots) aren’t real.</li>
          </ul>

          <MustKnow>
            If the domain is not stated, it includes all real numbers except
            those that cause a zero denominator or a negative radicand for an
            even‑indexed root.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick checks</h3>
          <p>
            For a polynomial like <Math>j(x)=x^2</Math>, every real input works,
            so the domain is all real numbers. In contrast, for a rational
            function like <Math>k(x)=\dfrac{10}{x+3}</Math>,{" "}
            <Math>x=-3</Math> is forbidden because the denominator would be
            zero. For a radical like <Math>m(x)=\sqrt{x}</Math>, we require{" "}
            <Math>x\ge 0</Math> to keep the output real.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt={
            <>
              What is the domain of{" "}
              <Math>f(x)=\dfrac{x^3}{x^2-1}</Math>?
            </>
          }
          options={[
            "All real numbers",
            "All real numbers except 1",
            "All real numbers except -1",
            "All real numbers except 1 and -1",
            "All real numbers except 0",
          ]}
          correct="All real numbers except 1 and -1"
          solution={
            <>
              <p>
                The only restriction comes from the denominator{" "}
                <Math>x^2-1</Math>. Set it equal to zero:
                <Math block>{`x^2-1=0 \\ x^2=1 \\ x=\\pm 1`}</Math>
                So <Math>x=1</Math> and <Math>x=-1</Math> are excluded. All
                other real numbers are allowed.
              </p>
            </>
          }
        />

        <MCQExample
          number={2}
          prompt={
            <>
              Which value is in the domain of{" "}
              <Math>p(x)=\sqrt[4]{\,x-5\,}</Math>?
            </>
          }
          options={["-10", "-5", "0", "3", "5"]}
          correct="5"
          solution={
            <>
              <p>
                The index is even, so we need{" "}
                <Math>x-5\ge 0 \Rightarrow x\ge 5</Math>. Among the choices,
                only <Math>5</Math> satisfies this.
              </p>
            </>
          }
        />

        <MCQExample
          number={3}
          prompt={
            <>
              What is the domain of{" "}
              <Math>
                g(x)=\sqrt{-2x-7}+\dfrac{x^2}{3x+15}
              </Math>
              ?
            </>
          }
          options={[
            "All real numbers",
            "All real numbers such that x ≠ -5",
            "All real numbers such that x ≤ -3.5",
            "All real numbers such that x ≤ -5 and x ≠ -3.5",
            "All real numbers such that x ≤ -3.5 and x ≠ -5",
          ]}
          correct="All real numbers such that x ≤ -3.5 and x ≠ -5"
          solution={
            <>
              <p>
                For the square root, require the radicand nonnegative:
                <Math block>{`-2x-7\\;\\ge\\;0 \\quad\\Rightarrow\\quad x\\;\\le\\; -\\tfrac{7}{2}=-3.5`}</Math>
                For the fraction, the denominator can’t be zero:
                <Math block>{`3x+15\\neq 0 \\quad\\Rightarrow\\quad x\\neq -5`}</Math>
                Combine both: <Math>x\le -3.5</Math> and <Math>x\ne -5</Math>.
              </p>
            </>
          }
        />

        <MCQExample
          number={4}
          prompt={
            <>
              What is the domain of{" "}
              <Math>
                h(x)=\sqrt{\,\sqrt{6-2x}-\sqrt{8+2x}\,}
              </Math>
              ?
            </>
          }
          options={[
            "x ≤ 3",
            "-0.5 ≤ x ≤ 3",
            "-4 ≤ x ≤ -0.5",
            "-0.5 ≤ x",
            "-4 ≤ x ≤ 3",
          ]}
          correct="-4 ≤ x ≤ -0.5"
          solution={
            <>
              <p>
                First ensure each inner radical is defined:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  <Math>6-2x\ge 0 \Rightarrow x\le 3</Math>
                </li>
                <li>
                  <Math>8+2x\ge 0 \Rightarrow x\ge -4</Math>
                </li>
              </ul>
              <p>
                Next, the outer square root needs{" "}
                <Math>\sqrt{6-2x}-\sqrt{8+2x}\ge 0</Math>. Since square roots
                are nonnegative, this inequality is equivalent to
                <Math>\sqrt{6-2x}\ge \sqrt{8+2x}</Math>, which (for nonnegative
                radicands) is the same as
                <Math>6-2x\ge 8+2x</Math>. Solving:
                <Math block>{`6\\ge 8+4x \\quad\\Rightarrow\\quad -2\\ge 4x \\quad\\Rightarrow\\quad x\\le -\\tfrac{1}{2}`}</Math>
              </p>
              <p>
                Combine all three:{" "}
                <Math>-4\le x \le -\tfrac{1}{2}</Math>.
              </p>
            </>
          }
        />

        <MustKnow>
          Checklist for domains:
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Never allow denominators to be zero.</li>
            <li>Even‑indexed roots require nonnegative radicands.</li>
            <li>
              When multiple conditions apply, intersect them (satisfy them all).
            </li>
          </ul>
        </MustKnow>
      </article>
    </main>
  );
}