import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Note: add `import "katex/dist/katex.min.css";` in your root layout to style KaTeX output.

export const metadata: Metadata = {
  title: "10.10.2 Faster/Slower Relative Rates | Work Problems",
  description:
    "Model workers whose times differ by a fixed amount. Learn to translate 'x minutes faster/slower' into rates and solve a classic GMAT work problem with full reasoning.",
};

function MathInline({
  tex,
  display = false,
  ariaLabel,
  className = "",
}: {
  tex: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "warn",
    trust: false,
    output: "html",
  });
  const Tag = display ? ("div" as const) : ("span" as const);
  return (
    <Tag
      className={`katex-wrapper ${className}`}
      role="math"
      aria-label={ariaLabel ?? tex.replace(/\\[a-zA-Z]+/g, "").trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.10.2 One worker is faster or slower than another
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When one person consistently takes a fixed number of minutes longer (or
          shorter) than another to finish the same task, model their times first.
          If we let one person’s solo time be t minutes, then the other person’s
          solo time is simply t plus or minus a constant. From there, convert each
          time into a rate.
        </p>

        <div className="rounded-md border border-gray-700 bg-gray-900/40 p-4">
          <p className="mb-2 font-semibold text-gray-200">Example setup</p>
          <p className="mb-2">
            Suppose Desirae needs t minutes to complete a job. If Christine takes
            10 minutes longer than Desirae, then Christine’s time is t + 10
            minutes.
          </p>
          <div className="space-y-1">
            <MathInline
              tex={`\\text{Desirae's rate }=\\frac{1}{t}\\;\\text{ job/min}`}
              ariaLabel="Desirae's rate equals 1 over t jobs per minute"
            />
            <MathInline
              tex={`\\text{Christine's rate }=\\frac{1}{t+10}\\;\\text{ job/min}`}
              ariaLabel="Christine's rate equals 1 over t plus 10 jobs per minute"
            />
          </div>
        </div>

        <MustKnow>
          If object A takes x minutes more than object B to finish a job and B’s
          time is t minutes, then A’s time is t + x minutes. Their rates are:
          <MathInline
            className="mt-2 block"
            tex={`\\text{A's rate }=\\frac{1}{t+x}\\;\\text{ job/min},\\quad \\text{B's rate }=\\frac{1}{t}\\;\\text{ job/min}`}
            ariaLabel="A's rate equals 1 over t plus x, B's rate equals 1 over t, both in jobs per minute"
            display
          />
        </MustKnow>

        <section aria-labelledby="ps-title" className="mt-8 space-y-4">
          <h3 id="ps-title" className="text-xl font-semibold text-white">
            Practice: Problem Solving
          </h3>

          <MCQExample
            number={20}
            prompt="Working together, a father and his son can clear the driveway in 24 minutes. The son's solo time is 20 minutes more than the father's solo time. How many minutes does the father need working alone?"
            options={["12 minutes", "40 minutes", "72 minutes", "96 minutes", "120 minutes"]}
            correct="40 minutes"
            solution={
              <>
                <p>
                  Let t be the father’s solo time (in minutes). Then the son’s solo
                  time is t + 20. Convert times to rates:
                </p>
                <div className="space-y-1">
                  <MathInline
                    tex={`\\text{Father: }\\;\\frac{1}{t}\\;\\text{ job/min} \\qquad \\text{Son: }\\;\\frac{1}{t+20}\\;\\text{ job/min}`}
                    display
                    ariaLabel="Father one over t, Son one over t plus twenty jobs per minute"
                  />
                </div>
                <p className="mt-2">Together, their combined rate equals one driveway per 24 minutes:</p>
                <MathInline
                  tex={`\\frac{1}{t}+\\frac{1}{t+20}=\\frac{1}{24}`}
                  display
                  ariaLabel="One over t plus one over t plus twenty equals one over twenty four"
                />
                <p>Clear denominators and solve:</p>
                <MathInline
                  tex={`24\\left(\\frac{1}{t}+\\frac{1}{t+20}\\right)=1\\;\\;\\Rightarrow\\;\\; \\frac{24}{t}+\\frac{24}{t+20}=1`}
                  display
                  ariaLabel="Multiply both sides by 24 to get 24 over t plus 24 over t plus 20 equals 1"
                />
                <MathInline
                  tex={`t(t+20)\\left(\\frac{24}{t}+\\frac{24}{t+20}\\right)=t(t+20)`}
                  display
                  ariaLabel="Multiply both sides by t times t plus 20"
                />
                <MathInline
                  tex={`24(t+20)+24t=t^2+20t`}
                  display
                  ariaLabel="Twenty four times t plus twenty plus twenty four t equals t squared plus twenty t"
                />
                <MathInline
                  tex={`t^2-28t-480=0\\quad \\Rightarrow\\quad (t-40)(t+12)=0`}
                  display
                  ariaLabel="t squared minus 28 t minus 480 equals zero; factors to t minus 40 times t plus 12 equals zero"
                />
                <p>
                  The only positive solution is t = 40, so the father needs 40 minutes
                  alone.
                </p>
              </>
            }
          />
        </section>

        <MustKnow>
          Stuck on a quadratic from a work equation? Scan answer choices. Here,
          40 and 12 differ by 28 and multiply to 480, hinting at the factorization
          (t − 40)(t + 12).
        </MustKnow>

        <p className="pt-2">
          Takeaway: model time differences first, then convert to rates. Once in
          rate form, combine rates linearly for “working together” and solve the
          resulting equation.
        </p>
      </article>
    </main>
  );
}