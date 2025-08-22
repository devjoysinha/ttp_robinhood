import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "1.9 Essential Words to Understand | Critical Reasoning",
  description:
    "A concise glossary of quantifiers and scope words used in GMAT Critical Reasoning. Learn the exact meanings of terms such as some, many, most, majority, solely, exclusively, uniquely, and always—with clear examples.",
};

function Math({
  children,
  display = false,
  ariaLabel,
  className = "",
}: {
  children: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });

  if (display) {
    return (
      <div
        role="math"
        aria-label={ariaLabel ?? children}
        className={`my-2 overflow-x-auto ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      role="math"
      aria-label={ariaLabel ?? children}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.9 Essential Words to Understand
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Critical Reasoning, tiny words carry big weight. Test writers use
          quantifiers and scope words with precision, so you should interpret
          them precisely as well. The short glossary below clarifies how these
          terms are used on exam problems.
        </p>

        <MustKnow>
          Read quantifiers literally: “some” means at least one (possibly all);
          “many” does not guarantee a majority; “most” means more than half; and
          words like “solely” and “exclusively” mean “only.” Treat “always” as a
          universal claim that allows no exceptions.
        </MustKnow>

        <section aria-labelledby="glossary-heading" className="space-y-4">
          <h3 id="glossary-heading" className="text-xl font-semibold text-white">
            Quick Glossary with Examples
          </h3>

          <dl className="space-y-5">
            <div>
              <dt className="font-semibold text-white">A few</dt>
              <dd>
                A small number—at least two—but not many. It indicates a small
                count, often less than “several.”
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Several</dt>
              <dd>Three or more, but typically not a large amount.</dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Some</dt>
              <dd>
                At least one, and possibly all. If a statement says “some
                employees are managers,” it guarantees the existence of at least
                one manager. In logic terms:{" "}
                <Math ariaLabel="there exists at least one" className="text-gray-200">
                  {String.raw`\exists`}
                </Math>{" "}
                manager.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Many</dt>
              <dd>
                A large number. It does not necessarily mean a majority. “Many
                customers” could still be fewer than half.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Most</dt>
              <dd>
                More than half. Formally:{" "}
                <Math ariaLabel="greater than fifty percent" className="text-gray-200">
                  {String.raw`\gt 50\%`}
                </Math>
                .
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">A majority</dt>
              <dd>
                More than half—the same threshold as “most.” That is,{" "}
                <Math ariaLabel="greater than fifty percent" className="text-gray-200">
                  {String.raw`\gt 50\%`}
                </Math>
                .
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">A minority</dt>
              <dd>
                Less than half:{" "}
                <Math ariaLabel="less than fifty percent" className="text-gray-200">
                  {String.raw`\lt 50\%`}
                </Math>
                .
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Solely</dt>
              <dd>
                Only. “Alex is solely responsible” means no one else shares the
                responsibility.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Exclusively</dt>
              <dd>
                Only. “This card is exclusively for members” means non‑members
                are not included.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Uniquely</dt>
              <dd>
                In a way that makes something the only one with a particular
                property. “The lab uniquely detects this compound” means no
                other lab can detect it in that way.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">At least one</dt>
              <dd>
                One or more. “At least one device failed” confirms a failure
                exists:{" "}
                <Math ariaLabel="there exists at least one" className="text-gray-200">
                  {String.raw`\exists \, \text{a failure}`}
                </Math>
                .
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-white">Always</dt>
              <dd>
                In every case; no exceptions. “Always” is a universal claim:{" "}
                <Math ariaLabel="for all cases" className="text-gray-200">
                  {String.raw`\forall`}
                </Math>{" "}
                cases.
              </dd>
            </div>
          </dl>
        </section>

        <MCQExample
          number={1}
          prompt="If a statement says, “Some of the marbles are red,” which conclusion must be true?"
          options={[
            "At least one marble is red.",
            "Exactly one marble is red.",
            "More than half of the marbles are red.",
            "All of the marbles are red.",
            "None of the marbles are blue.",
          ]}
          correct="At least one marble is red."
          solution={
            <>
              <p>
                “Some” guarantees existence of at least one instance. It does
                not specify how many beyond one and could even include all.
              </p>
              <p>
                Therefore, the only conclusion that must be true is that there
                exists at least one red marble.
              </p>
            </>
          }
        />

        <p>
          Commit these meanings to memory. When you see these words in prompts,
          arguments, or answer choices, interpret them precisely. That precision
          will help you avoid traps and select the logically sound answer.
        </p>
      </article>
    </main>
  );
}