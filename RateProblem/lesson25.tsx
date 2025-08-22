import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

// Server-safe KaTeX helper (CSS for KaTeX should be included globally in your app)
function K({
  math,
  block = false,
  ariaLabel,
  className,
}: {
  math: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(math, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      role="img"
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.19 Fuel Efficiency — Another Rate | Rate Problems",
  description:
    "Fuel efficiency problems are rate problems in disguise. Learn how mpg equals distance divided by fuel, apply rate × volume = distance, and work through three GMAT‑style examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.19 Fuel Efficiency — Another Rate
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <section aria-labelledby="intro">
          <h3 id="intro" className="sr-only">
            Fuel efficiency as a rate
          </h3>
          <p>
            A rate compares two different units. Fuel efficiency is just a
            specific rate: miles per gallon. In symbols, mpg is
            <span className="inline-block px-1 align-middle">
              <K ariaLabel="miles per gallon" math="\\tfrac{\\text{miles}}{\\text{gallon}}" />
            </span>
            .
            That is, fuel efficiency measures how far a vehicle travels for each
            gallon of fuel it uses.
          </p>
        </section>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Two core identities for fuel problems:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="shrink-0 text-gray-400">Fuel efficiency =</span>
                <K
                  ariaLabel="distance divided by volume"
                  math="\\tfrac{\\text{distance}}{\\text{volume of fuel}}"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="shrink-0 text-gray-400">So,</span>
                <K
                  ariaLabel="rate times volume equals distance"
                  math="\\text{rate}\\times\\text{volume} = \\text{distance}"
                />
              </div>
            </div>
          </div>
        </MustKnow>

        <section aria-labelledby="mini">
          <h3 id="mini" className="sr-only">
            Quick warm‑up example
          </h3>
          <p className="font-semibold">Quick warm‑up</p>
          <p>
            A truck travels 340 miles using 20 gallons of fuel. Its fuel
            efficiency is:
          </p>
          <div className="rounded-md bg-gray-800/40 p-4">
            <K
              block
              ariaLabel="efficiency equals 340 miles over 20 gallons equals 17 miles per gallon"
              math="\\text{efficiency}=\\tfrac{340\\ \\text{miles}}{20\\ \\text{gallons}}=17\\ \\tfrac{\\text{miles}}{\\text{gallon}}"
            />
          </div>
          <p>
            Interpreting 17 mpg: the truck goes 17 miles for every gallon it
            burns.
          </p>
        </section>

        <MustKnow>
          When you view fuel efficiency as
          <span className="inline-block px-1 align-middle">
            <K math="\\tfrac{\\text{distance}}{\\text{volume}}" ariaLabel="distance over volume" />
          </span>
          , you can switch among distance, rate, and volume with the familiar
          relationships:
          <span className="inline-block px-1 align-middle">
            <K math="\\text{rate}\\times\\text{volume}=\\text{distance}" ariaLabel="rate times volume equals distance" />
          </span>
          and
          <span className="inline-block px-1 align-middle">
            <K math="\\text{volume}=\\tfrac{\\text{distance}}{\\text{rate}}" ariaLabel="volume equals distance over rate" />
          </span>
          .
        </MustKnow>

        <section aria-labelledby="split-trip">
          <h3 id="split-trip" className="sr-only">
            Split‑trip computation
          </h3>
          <p className="font-semibold">Split‑trip example</p>
          <p>
            A car gets 20 mpg in the city and 30 mpg on the highway. It burns
            1.5 gallons in the city and 3.5 gallons on the highway. What is the
            total distance?
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              City distance:
              <span className="inline-block px-1 align-middle">
                <K
                  math="20\\ \\tfrac{\\text{miles}}{\\text{gallon}}\\times1.5\\ \\text{gallons}=30\\ \\text{miles}"
                  ariaLabel="20 miles per gallon times 1.5 gallons equals 30 miles"
                />
              </span>
            </li>
            <li>
              Highway distance:
              <span className="inline-block px-1 align-middle">
                <K
                  math="30\\ \\tfrac{\\text{miles}}{\\text{gallon}}\\times3.5\\ \\text{gallons}=105\\ \\text{miles}"
                  ariaLabel="30 miles per gallon times 3.5 gallons equals 105 miles"
                />
              </span>
            </li>
          </ul>
          <p>
            Total distance =
            <span className="inline-block px-1 align-middle">
              <K math="30+105=135\\ \\text{miles}" ariaLabel="30 plus 105 equals 135 miles" />
            </span>
            .
          </p>
        </section>

        <section aria-labelledby="ex32">
          <h3 id="ex32" className="sr-only">
            Example 32 — equal fuel, different mpg
          </h3>
          <MCQExample
            number={32}
            prompt="A family owns two gasoline cars: one gets 10 mpg, the other 20 mpg. On a certain day, both cars consumed the same amount of fuel, and together they covered 300 miles. How many miles did the car driven the least distance travel?"
            options={["100 miles", "150 miles", "200 miles", "250 miles", "300 miles"]}
            correct="100 miles"
            solution={
              <>
                <p>
                  Let each car use g gallons. Distances are
                  <span className="inline-block px-1 align-middle">
                    <K math="10g" ariaLabel="10 g" />
                  </span>
                  and
                  <span className="inline-block px-1 align-middle">
                    <K math="20g" ariaLabel="20 g" />
                  </span>
                  miles, so
                  <span className="inline-block px-1 align-middle">
                    <K math="10g+20g=300\\Rightarrow 30g=300\\Rightarrow g=10" ariaLabel="10g plus 20g equals 300 implies g equals 10" />
                  </span>
                  .
                </p>
                <p>
                  The 10‑mpg car (the one with the smaller distance) traveled
                  <span className="inline-block px-1 align-middle">
                    <K math="10g=10\\times10=100" ariaLabel="10 times 10 equals 100" />
                  </span>
                  miles.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex33">
          <h3 id="ex33" className="sr-only">
            Example 33 — average fuel efficiency for a trip
          </h3>
          <MCQExample
            number={33}
            prompt="On a 400‑mile trip, a motorcycle averaged 45 mpg for the first 150 miles and 60 mpg for the remaining miles. What was the average fuel efficiency (mpg) for the entire trip?"
            options={["51 1/3 mpg", "51 1/2 mpg", "52 2/3 mpg", "53 1/3 mpg", "54 1/3 mpg"]}
            correct="53 1/3 mpg"
            solution={
              <>
                <p>
                  Average mpg is total distance divided by total gallons.
                  Compute gallons for each leg:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    First 150 miles:
                    <span className="inline-block px-1 align-middle">
                      <K
                        math="\\tfrac{150}{45}=\\tfrac{10}{3}\\ \\text{gallons}"
                        ariaLabel="150 over 45 equals 10 over 3 gallons"
                      />
                    </span>
                  </li>
                  <li>
                    Remaining
                    <span className="inline-block px-1 align-middle">
                      <K math="400-150=250" ariaLabel="400 minus 150 equals 250" />
                    </span>
                    miles:
                    <span className="inline-block px-1 align-middle">
                      <K
                        math="\\tfrac{250}{60}=\\tfrac{25}{6}\\ \\text{gallons}"
                        ariaLabel="250 over 60 equals 25 over 6 gallons"
                      />
                    </span>
                  </li>
                </ul>
                <p>
                  Total gallons:
                  <span className="inline-block px-1 align-middle">
                    <K
                      math="\\tfrac{10}{3}+\\tfrac{25}{6}=\\tfrac{45}{6}=\\tfrac{15}{2}"
                      ariaLabel="ten thirds plus twenty-five sixths equals forty-five sixths equals fifteen halves"
                    />
                  </span>
                </p>
                <p>
                  Average mpg:
                  <span className="inline-block px-1 align-middle">
                    <K
                      math="\\tfrac{400}{15/2}=400\\cdot\\tfrac{2}{15}=\\tfrac{800}{15}=\\tfrac{160}{3}=53\\tfrac{1}{3}"
                      ariaLabel="400 divided by fifteen halves equals 53 and one third"
                    />
                  </span>
                  mpg.
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="ex34">
          <h3 id="ex34" className="sr-only">
            Example 34 — split city/highway with total gallons
          </h3>
          <MCQExample
            number={34}
            prompt="A car gets 20 mpg in the city and 30 mpg on the highway. In one day it traveled 500 miles in total and used 20 gallons of fuel. How many miles were driven on the highway?"
            options={["150 miles", "200 miles", "300 miles", "350 miles", "400 miles"]}
            correct="300 miles"
            solution={
              <>
                <p>
                  Let
                  <span className="inline-block px-1 align-middle">
                    <K math="g" ariaLabel="g" />
                  </span>
                  be the city gallons, so highway gallons are
                  <span className="inline-block px-1 align-middle">
                    <K math="20-g" ariaLabel="20 minus g" />
                  </span>
                  .
                </p>
                <p>
                  Total distance:
                  <span className="inline-block px-1 align-middle">
                    <K
                      math="20g+30(20-g)=500"
                      ariaLabel="20 g plus 30 times 20 minus g equals 500"
                    />
                  </span>
                  , giving
                  <span className="inline-block px-1 align-middle">
                    <K
                      math="20g+600-30g=500\\Rightarrow -10g=-100\\Rightarrow g=10"
                      ariaLabel="solve for g equals 10"
                    />
                  </span>
                  .
                </p>
                <p>
                  Highway miles:
                  <span className="inline-block px-1 align-middle">
                    <K
                      math="30(20-g)=30(10)=300"
                      ariaLabel="30 times 10 equals 300"
                    />
                  </span>
                  .
                </p>
              </>
            }
          />
        </section>

        <section aria-labelledby="wrap">
          <h3 id="wrap" className="sr-only">
            Key takeaway
          </h3>
          <p>
            Big picture: fuel problems are standard rate problems with “volume
            of fuel” playing the role of “time.” Lean on
            <span className="inline-block px-1 align-middle">
              <K math="\\text{rate}\\times\\text{volume}=\\text{distance}" ariaLabel="rate times volume equals distance" />
            </span>
            and the definition
            <span className="inline-block px-1 align-middle">
              <K math="\\tfrac{\\text{distance}}{\\text{volume}}" ariaLabel="distance over volume" />
            </span>
            to move confidently among all three quantities.
          </p>
        </section>
      </article>
    </main>
  );
}