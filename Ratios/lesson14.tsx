import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import TeX, { BlockMath } from "@matejmazur/react-katex";

export const metadata: Metadata = {
  title: "11.14 Proportions | Ratios",
  description:
    "Understand proportions as equality of two ratios and how to solve for unknowns using cross‑multiplication. Includes two practice problems with full, step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.14 Proportions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A proportion is simply an equality between two ratios. For instance,{" "}
          <TeX math="\dfrac{a}{b}=\dfrac{c}{d}" /> means the two fractions are
          equal. From this equality, the cross‑products must match:{" "}
          <TeX math="ad=bc" />. This fact lets us find a missing term in one
          ratio by relating it to the other.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">Core idea</p>
            <p>
              If <TeX math="\dfrac{a}{b}=\dfrac{c}{d}" />, then{" "}
              <TeX math="ad=bc" />. Use cross‑multiplication to solve for the
              unknown. You can also set up a proportion whenever two situations
              share the same underlying ratio (e.g., same unit rate, same
              percent, or a like‑for‑like sample).
            </p>
          </div>
        </MustKnow>

        <section aria-labelledby="ex-22">
          <MCQExample
            number={22}
            prompt="Density is mass divided by volume. A metal sample with mass 1,200 grams has density 100 units. For a similar piece with the same volume and mass 3,600 grams, what is the density?"
            options={["300 units", "400 units", "1,800 units", "3,000 units", "3,600 units"]}
            correct="300 units"
            solution={
              <>
                <p className="mb-2">
                  Density formula: <TeX math="d=\dfrac{m}{V}" />. For both
                  samples the volume is the same, so the ratios{" "}
                  <TeX math="\dfrac{m}{d}" /> must be equal:
                </p>
                <BlockMath math="\dfrac{1200}{100}=\dfrac{3600}{z}" />
                <BlockMath math="1200z=100\times 3600" />
                <BlockMath math="z=\dfrac{100\times 3600}{1200}=300" />
                <p>Thus, the new density is 300 units.</p>
              </>
            }
          />
        </section>

        <p>
          Proportions also power many sampling and “like‑percentage” problems.
          If a sample is representative of a whole, the part‑to‑whole ratio in
          the sample matches the part‑to‑whole ratio in the population.
        </p>

        <section aria-labelledby="ex-23">
          <MCQExample
            number={23}
            prompt="A researcher marks 5 × 10^6 gas molecules inside a balloon containing an unknown total number of molecules. The next day, a random sample of 5 × 10^6 molecules is drawn, and 1,000 are marked. Assuming the sample proportion matches the balloon’s overall proportion, how many molecules were in the balloon initially?"
            options={[
              "2.5 × 10^4",
              "2.5 × 10^7",
              "2.5 × 10^10",
              "2.5 × 10^12",
              "2.5 × 10^16",
            ]}
            correct="2.5 × 10^10"
            solution={
              <>
                <p className="mb-2">
                  Let <TeX math="N" /> be the total molecules in the balloon.
                  The fraction marked in the balloon is{" "}
                  <TeX math="\dfrac{5\times 10^6}{N}" />. In the sample, the
                  marked fraction is <TeX math="\dfrac{1000}{5\times 10^6}" />.
                  Set these equal:
                </p>
                <BlockMath math="\dfrac{5\times 10^6}{N}=\dfrac{1000}{5\times 10^6}" />
                <BlockMath math="(5\times 10^6)(5\times 10^6)=1000\,N" />
                <BlockMath math="25\times 10^{12}=10^3\,N" />
                <BlockMath math="N=\dfrac{25\times 10^{12}}{10^3}=25\times 10^9=2.5\times 10^{10}" />
                <p>So the initial count was 2.5 × 10^10 molecules.</p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: when two contexts share the same ratio or percentage, set up
          a proportion and cross‑multiply to isolate the unknown.
        </p>
      </article>
    </main>
  );
}