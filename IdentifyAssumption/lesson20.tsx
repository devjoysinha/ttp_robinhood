import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "2.11.4 Assumption Trap: Conclusion Supported by the Passage | Critical Reasoning",
  description:
    "Learn to avoid a common trap in Identify the Assumption questions: choices that restate a conclusion supported by the passage instead of a required assumption. Includes two practice problems with full reasoning.",
};

// Simple SSR KaTeX renderer (no client JS required)
function TeX({
  expr,
  ariaLabel,
  display = false,
}: {
  expr: string;
  ariaLabel?: string;
  display?: boolean;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? expr}
      className={display ? "block my-2" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.11.4 Assumption Incorrect Choice Type 4:
          a “Conclusion Supported by the Passage”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A frequent trap in Identify the Assumption questions is an option that
          simply states a conclusion that already follows from the passage. Such
          a statement may sound perfectly reasonable, but it isn’t a hidden
          premise the argument needs. Your job is to find what must be true for
          the author’s reasoning to hold, not a point that’s merely implied by
          the given facts.
        </p>

        <MustKnow>
          On Assumption questions, do not choose a response that just restates a
          claim the passage already supports. The correct answer must be a
          necessary, unstated premise that the argument relies on.
        </MustKnow>

        <section aria-labelledby="mini-example" className="space-y-3">
          <h3 id="mini-example" className="text-base font-semibold text-gray-200">
            Quick Illustration
          </h3>
          <p className="rounded-md border border-gray-700/50 bg-gray-900/40 p-4">
            Suppose a senator argues: “The housing crash stemmed from lenders
            issuing loans that didn’t align with borrowers’ incomes. To prevent
            a repeat, we need new lending regulations.” A tempting wrong choice
            would be, “If borrowers had managed debts better, the crisis would
            not have happened.” That statement may follow from the story, but
            the conclusion does not depend on it. A needed assumption is closer
            to: “Absent regulation, lenders will again make loans that don’t fit
            borrowers’ incomes.” Without that assumption, the senator’s policy
            recommendation loses its support.
          </p>
        </section>

        <section aria-labelledby="example-33" className="space-y-4">
          <h3 id="example-33" className="text-base font-semibold text-gray-200">
            Example 33
          </h3>

          <p>
            In Verdana, more than half of the population is classified as obese{" "}
            (<TeX expr={`P(\\text{obese}) > 0.5`} ariaLabel="Probability obese is greater than 0.5" />
            ). Officials say the main driver is too little daily exercise and
            that many residents aren’t fully aware of how good exercise is for
            health. The city will launch an education campaign about the
            benefits of exercising every day. Therefore, the obesity rate in
            Verdana will decline once the campaign starts.
          </p>
          <p>Which statement must be true for the conclusion to follow?</p>

          <MCQExample
            number={33}
            prompt="In Verdana, officials plan an education campaign about daily exercise and conclude obesity will fall. What must be true?"
            options={[
              "A large share of Verdana’s residents are 40 years old or younger.",
              "Obesity is widespread among Verdana’s citizens.",
              "Local physicians agree that regular daily exercise is essential for well-being.",
              "Residents of Verdana are willing to adopt a daily exercise routine.",
              "Public health officials believe citizens would benefit from daily exercise.",
            ]}
            correct="Residents of Verdana are willing to adopt a daily exercise routine."
            solution={
              <>
                <p>
                  The argument presents a plan (education campaign) and predicts
                  a result (lower obesity). Plan-based conclusions typically
                  assume there is no “spoiler” that blocks the plan. If
                  residents are unwilling to exercise, the campaign won’t reduce
                  obesity. So the assumption needed is that people will be
                  willing to exercise daily.
                </p>
                <p>
                  Why the others fail:
                </p>
                <ul className="ml-5 list-disc">
                  <li>
                    “A large share are 40 or younger” introduces an age detail
                    that the logic doesn’t require.
                  </li>
                  <li>
                    “Obesity is widespread” is merely a conclusion already
                    supported by the premise that more than half are obese.
                    That’s the trap type here.
                  </li>
                  <li>
                    “Doctors agree exercise is vital” only reiterates or
                    amplifies facts; it’s not required for the plan to work.
                  </li>
                  <li>
                    “Officials believe exercise would help” also follows from
                    the setup and isn’t a required hidden premise.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <section aria-labelledby="example-34" className="space-y-4">
          <h3 id="example-34" className="text-base font-semibold text-gray-200">
            Example 34
          </h3>

          <p>
            To curb smoking, the government both banned cigarette advertising
            and required shocking health images on cigarette packs. Because both
            measures started at the same time, surveys asked citizens about the
            images. Since smokers and non‑smokers found the pictures repellent,
            the conclusion was drawn that the images at least partly caused the
            observed reduction in smoking.
          </p>
          <p>Which assumption does this conclusion require?</p>

          <MCQExample
            number={34}
            prompt="Surveys show people find the graphic pack photos repellent, so the photos at least partly caused the smoking decline. What assumption is required?"
            options={[
              "Shops sell sleeves that can cover up the photographs on cigarette packs.",
              "When two new policies begin at the same time, it can be hard to tell which policy produced the results.",
              "Smokers and non‑smokers react similarly to information about smoking’s harms.",
              "Pro‑smoking advertising does not meaningfully influence whether people decide to smoke.",
              "Smokers do not respond to an external attempt to change their behavior by smoking more.",
            ]}
            correct="Smokers do not respond to an external attempt to change their behavior by smoking more."
            solution={
              <>
                <p>
                  The key gap: Do repellent images actually reduce smoking, or
                  could they backfire? If smokers’ psychology exhibited
                  “reactance” (i.e., external pressure makes them smoke more),
                  then the conclusion that the photos helped would collapse. The
                  required assumption is that no such boomerang effect occurs.
                </p>
                <p>
                  Why the others fail:
                </p>
                <ul className="ml-5 list-disc">
                  <li>
                    Sleeves that hide photos would weaken, not support, the
                    conclusion.
                  </li>
                  <li>
                    “It can be hard to tell which policy worked” is a general
                    observation, not a needed premise linking the surveys to the
                    effect.
                  </li>
                  <li>
                    Similar feelings about harm is another conclusion that may
                    follow from the survey but isn’t required for causation.
                  </li>
                  <li>
                    Even if ads matter, the photos could still have contributed;
                    the conclusion only claims a partial cause.
                  </li>
                </ul>
              </>
            }
          />
        </section>

        <p>
          Bottom line: when evaluating assumptions, chase what must be true for
          the reasoning to go through. If a choice merely restates a conclusion
          the passage already supports, it’s attractive—but not the assumption
          you’re after.
        </p>
      </article>
    </main>
  );
}