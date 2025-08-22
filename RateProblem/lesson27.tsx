import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import katex from "katex";

export const metadata: Metadata = {
  title: "9.20.1 DS Rate Questions with Inequalities | Quant",
  description:
    "A practical guide to handling inequalities in rate-time-distance Data Sufficiency problems. Learn the +/− shorthand, key fraction rules, and work through three DS examples with full reasoning.",
};

// Simple KaTeX renderer (SSR-safe). Ensure `katex/dist/katex.min.css` is loaded globally.
function Eq({
  children,
  display = false,
  ariaLabel,
}: {
  children: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel ?? "equation"}
      className={display ? "my-2 block" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.20.1 DS Rate Questions When a Given Measurement Is an Inequality
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In some Data Sufficiency rate questions, the prompt and/or statements
          give information using inequalities rather than exact values. You can
          still follow your usual rate-time-distance approach—just track the
          “greater than” or “less than” nature of each quantity as you rewrite
          the problem.
        </p>

        <p>
          We’ll use a compact notation to keep the logic tidy:
          <br />
          • <strong>a^+</strong> means “a number strictly bigger than a.”
          <br />
          • <strong>a^-</strong> means “a number strictly smaller than a.”
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Core relationships (a, b &gt; 0):</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                If the numerator increases, the fraction increases:
                {" "}
                <Eq ariaLabel="(a plus) over b is greater than a over b">
                  {"\\dfrac{a^{+}}{b} > \\dfrac{a}{b}"}
                </Eq>
              </li>
              <li>
                If the denominator increases, the fraction decreases:
                {" "}
                <Eq ariaLabel="a over (b plus) is less than a over b">
                  {"\\dfrac{a}{b^{+}} < \\dfrac{a}{b}"}
                </Eq>
              </li>
              <li>
                If the numerator decreases, the fraction decreases:
                {" "}
                <Eq ariaLabel="(a minus) over b is less than a over b">
                  {"\\dfrac{a^{-}}{b} < \\dfrac{a}{b}"}
                </Eq>
              </li>
              <li>
                If the denominator decreases, the fraction increases:
                {" "}
                <Eq ariaLabel="a over (b minus) is greater than a over b">
                  {"\\dfrac{a}{b^{-}} > \\dfrac{a}{b}"}
                </Eq>
              </li>
            </ul>
          </div>
        </MustKnow>

        <section aria-labelledby="mini-examples" className="space-y-4">
          <h3 id="mini-examples" className="text-lg font-semibold text-white">
            Quick warm‑ups
          </h3>

          <p>
            Suppose someone runs more than 12 miles in 2 hours. Average speed is
            rate = distance / time, so
            {" "}
            <Eq ariaLabel="rate equals distance over time">
              {"\\text{rate} = \\dfrac{\\text{distance}}{\\text{time}}"}
            </Eq>
            . Replacing distance by 12^+ miles gives
            {" "}
            <Eq ariaLabel="rate equals (12 plus) miles over 2 hours">
              {"\\text{rate} = \\dfrac{12^{+}\\ \\text{miles}}{2\\ \\text{hours}} = 6^{+}\\ \\tfrac{\\text{miles}}{\\text{hour}}"}
            </Eq>
            . So the speed must be strictly greater than 6 mph.
          </p>

          <p>
            If someone covers 20 miles in less than 4 hours, then
            {" "}
            <Eq ariaLabel="rate equals distance over time">
              {"\\text{rate} = \\dfrac{20\\ \\text{miles}}{4^{-}\\ \\text{hours}} = 5^{+}\\ \\tfrac{\\text{miles}}{\\text{hour}}"}
            </Eq>
            . Dividing by a smaller‑than‑4 number makes the quotient larger,
            so the average speed exceeds 5 mph.
          </p>
        </section>

        <section aria-labelledby="more-rules" className="space-y-3">
          <h3 id="more-rules" className="text-lg font-semibold text-white">
            Applying the shorthand to fractions
          </h3>
          <p>With a, b &gt; 0, these comparisons are handy in DS:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <Eq ariaLabel="(24 plus) over 8 is greater than 24 over 8 equals 3">
                {"\\dfrac{24^{+}}{8} > \\dfrac{24}{8} = 3"}
              </Eq>
              , so
              {" "}
              <Eq ariaLabel="(24 plus) over 8 equals 3 plus">
                {"\\dfrac{24^{+}}{8} = 3^{+}"}
              </Eq>
              .
            </li>
            <li>
              <Eq ariaLabel="30 over (6 plus) is less than 30 over 6 equals 5">
                {"\\dfrac{30}{6^{+}} < \\dfrac{30}{6} = 5"}
              </Eq>
              , so
              {" "}
              <Eq ariaLabel="30 over (6 plus) equals 5 minus">
                {"\\dfrac{30}{6^{+}} = 5^{-}"}
              </Eq>
              .
            </li>
            <li>
              <Eq ariaLabel="14 over (2 minus) is greater than 14 over 2 equals 7">
                {"\\dfrac{14}{2^{-}} > \\dfrac{14}{2} = 7"}
              </Eq>
              , so
              {" "}
              <Eq ariaLabel="14 over (2 minus) equals 7 plus">
                {"\\dfrac{14}{2^{-}} = 7^{+}"}
              </Eq>
              .
            </li>
          </ul>
        </section>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-lg font-semibold text-white">
            Guided DS example
          </h3>

          <ExampleCard
            number={38}
            title="Cycling time with a lower bound on speed"
            statements={[
              "Juanita’s average cycling speed is greater than 12 miles per hour. Will her travel time from A‑town to B‑ville be less than 4 hours?",
              "1) The distance from A‑town to B‑ville is less than 45 miles.",
              "2) The distance from A‑town to B‑ville is greater than 40 miles.",
            ]}
            correctLetter="A"
            solution={
              <>
                <p>
                  Question target: Is time &lt; 4? Using
                  {" "}
                  <Eq ariaLabel="time equals distance over rate">
                    {"\\text{time} = \\dfrac{\\text{distance}}{\\text{rate}}"}
                  </Eq>
                  , with rate = 12^+ mph, we ask whether
                  {" "}
                  <Eq ariaLabel="distance over (12 plus) is less than 4">
                    {"\\dfrac{\\text{distance}}{12^{+}} < 4"}
                  </Eq>
                  . Multiply both sides by 12^+ to isolate distance: is
                  {" "}
                  <Eq ariaLabel="distance is less than (48 plus) miles">
                    {"\\text{distance} < 48^{+}\\ \\text{miles}"}
                  </Eq>
                  ? The right side is “some number strictly bigger than 48.”
                </p>
                <p>
                  Statement (1): distance &lt; 45. Since 45 is certainly less
                  than any 48^+ choice, the inequality must be true. Sufficient.
                </p>
                <p>
                  Statement (2): distance &gt; 40. The distance could be 41
                  (YES) or 400 (NO, not less than a 48^+ amount). Insufficient.
                </p>
                <p>Answer: A.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="practice" className="space-y-6">
          <h3 id="practice" className="text-lg font-semibold text-white">
            Practice DS
          </h3>

          <ExampleCard
            number={39}
            title="Was David’s speed above 100 m/min?"
            statements={[
              "If David spent less than 4 hours jogging from his home to Urbanville, was his average speed greater than 100 meters per minute?",
              "1) The distance from David’s home to Urbanville is more than 100 meters.",
              "2) The distance from David’s home to Urbanville is more than 24,000 meters.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  Rephrase: Is
                  {" "}
                  <Eq ariaLabel="distance over time greater than 100">
                    {"\\dfrac{\\text{distance}}{\\text{time}} > 100"}
                  </Eq>
                  ? Given time = 4^- hours, convert to minutes:
                  {" "}
                  <Eq ariaLabel="4 minus hours equals 240 minus minutes">
                    {"4^{-}\\ \\text{hours} = 240^{-}\\ \\text{minutes}"}
                  </Eq>
                  . Multiply 100 m/min by 240^- min to compare distances:
                  is
                  {" "}
                  <Eq ariaLabel="distance greater than 24,000 minus meters">
                    {"\\text{distance} > 24{,}000^{-}\\ \\text{meters}"}
                  </Eq>
                  ? That’s “distance &gt; some number just below 24,000.”
                </p>
                <p>
                  (1) distance &gt; 100. The cutoff “just below 24,000” could be
                  25 (YES) or 500 (NO) relative to possible distances; not
                  decisive. Insufficient.
                </p>
                <p>
                  (2) distance &gt; 24,000. This always beats the “just below
                  24,000” threshold. Sufficient.
                </p>
                <p>Answer: B.</p>
              </>
            }
          />

          <ExampleCard
            number={40}
            title="Flight time under 5 hours?"
            statements={[
              "If Sigrid flew from her hometown to Cairo, which is more than 1,000 miles away, did the trip take less than 5 hours?",
              "1) The plane’s average speed was less than 600 miles per hour.",
              "2) The plane’s average speed was less than 400 miles per hour.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  We want to know if
                  {" "}
                  <Eq ariaLabel="time less than 5">
                    {"\\text{time} < 5"}
                  </Eq>
                  . Since
                  {" "}
                  <Eq ariaLabel="time equals distance over rate">
                    {"\\text{time} = \\dfrac{\\text{distance}}{\\text{rate}}"}
                  </Eq>
                  {" "}
                  and distance = 1,000^+ miles,
                  {" "}
                  <Eq ariaLabel="rate greater than (1000 plus) over 5 equals 200 plus">
                    {"\\text{rate} > \\dfrac{1{,}000^{+}}{5} = 200^{+}\\ \\tfrac{\\text{miles}}{\\text{hour}}"}
                  </Eq>
                  .
                </p>
                <p>
                  (1) rate &lt; 600 mph. This alone doesn’t guarantee rate
                  &gt; 200^+; it could be 500 (YES) or 200 (NO). Insufficient.
                </p>
                <p>
                  (2) rate &lt; 400 mph. Same issue: could be 350 (YES) or 100
                  (NO). Insufficient.
                </p>
                <p>
                  Together: still only “rate &lt; 400,” which remains
                  insufficient for the 200^+ threshold. Answer: E.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: carry the inequality tags through your algebra. When
          numerators go up, fractions go up; when denominators go up, fractions
          go down. Combine that with
          {" "}
          <Eq ariaLabel="rate equals distance over time">
            {"\\text{rate} = \\dfrac{\\text{distance}}{\\text{time}}"}
          </Eq>
          {" "}
          and clear, unit‑consistent comparisons to decide sufficiency quickly.
        </p>
      </article>
    </main>
  );
}