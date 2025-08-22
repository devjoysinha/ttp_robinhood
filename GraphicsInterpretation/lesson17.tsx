import type { Metadata } from "next";
import Image from "next/image";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

// 2. Graphics Interpretation — 2.16 Clustered Column Chart
export const metadata: Metadata = {
  title: "2.16 Clustered Column Chart | Graphics Interpretation",
  description:
    "Understand clustered column charts: what they show, how to read them quickly, and how to answer typical test prompts. Includes multi‑part practice with clear, step‑by‑step solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.16 Clustered Column Chart
        </h2>
      </header>

      <article className="space-y-8 text-gray-300">
        <section className="space-y-4">
          <p>
            A clustered column chart places two or more categories side‑by‑side
            for each group on the x‑axis. Because the bars for a given group are
            “clustered,” it’s easy to compare categories within the same group
            and to scan across groups to see how the gap between categories
            changes over time or across conditions.
          </p>

          <MustKnow>
            - Use a clustered column chart when you want to compare multiple
            categories within the same group.
            - The “clustered” part means bars sit next to each other for each
            x‑axis group, making within‑group comparisons fast and clear.
          </MustKnow>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example: Seats by Party</h3>
          <p className="text-sm text-gray-400">
            Illustrative clustered chart comparing two parties’ House seats over
            several election years.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/710/content_Example_68.png"
              alt="Clustered columns comparing seats held by two parties across years"
              width={900}
              height={634}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
          <p>
            With clusters, you can quickly read a single year (for instance,
            there were about 200 seats for Democrats and roughly 235 for
            Republicans in 2012) and also sweep horizontally to see how the gap
            evolves over time.
          </p>
        </section>

        {/* Example 22 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 22</h3>
          <p className="text-sm text-gray-400">
            Number of concerts given by Paul (blue), Marty (orange), and Jason (gray),
            from 2010 to 2014.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/526/content_Example_22.png"
              alt="Clustered columns showing concerts per year for three artists"
              width={700}
              height={512}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={221}
            prompt="If Jason had performed x more concerts in 2012, the ratio (Jason:Paul) in 2012 would match 2010’s ratio. How many extra concerts x are needed?"
            options={["5", "6", "7", "8", "9"]}
            correct="6"
            solution={
              <>
                <p>
                  In 2010, Paul = 18 and Jason = 27, so the ratio is 27/18 = 3/2.
                  In 2012, Paul = 24 and Jason = 30. We want (30 + x)/24 = 3/2.
                </p>
                <p>
                  Cross‑multiply: 2(30 + x) = 3·24 ⇒ 60 + 2x = 72 ⇒ x = 6.
                </p>
              </>
            }
          />

          <MCQExample
            number={222}
            prompt="What is the median of Marty’s five yearly concert counts?"
            options={["21", "24", "27", "28.5", "30"]}
            correct="24"
            solution={
              <>
                <p>
                  Marty’s five values are 24, 18, 15, 27, 24. Sort them:
                  15, 18, 24, 24, 27. With an odd count (5), the median is the
                  middle entry, which is 24.
                </p>
              </>
            }
          />
        </section>

        {/* Example 23 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 23</h3>
          <p className="text-sm text-gray-400">
            Survey counts for respondents in four age ranges who spent more than $50 on
            each activity last month.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1792/content_1.png"
              alt="Clustered columns by age range for spending on activities"
              width={800}
              height={480}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={231}
            prompt="The median age of respondents who spent more than $50 going to a movie theater is:"
            options={[
              "between 18 and 30",
              "between 31 and 40",
              "between 41 and 50",
              "over 50",
            ]}
            correct="between 31 and 40"
            solution={
              <>
                <p>
                  Movie cluster counts (by age): 18–30 = 40, 31–40 = 25, 41–50 = 20, 50+ = 10.
                  Total = 95, so the median is the 48th value. The first 40 are 18–30;
                  the next 25 (positions 41–65) are 31–40. Thus the median age falls in 31–40.
                </p>
              </>
            }
          />

          <MCQExample
            number={232}
            prompt="Compare medians: people who spent more than $50 on a sporting event vs. a massage. The sporting‑event median age:"
            options={[
              "is greater than",
              "is less than",
              "is equal to",
              "cannot be conclusively compared to",
            ]}
            correct="is less than"
            solution={
              <>
                <p>
                  Sporting event totals: 20, 45, 35, 25 → 125 total → median is 63rd,
                  which lies in 31–40. Massage totals: 10, 25, 35, 45 → 115 total →
                  median is 58th, which lies in 41–50. Therefore, the sporting‑event
                  median is less than the massage median.
                </p>
              </>
            }
          />
        </section>

        {/* Example 24 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 24</h3>
          <p className="text-sm text-gray-400">
            Monthly rents for four apartment types across four neighborhoods.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1793/content_2.png"
              alt="Clustered columns for rent by apartment type and neighborhood"
              width={900}
              height={480}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={241}
            prompt="Across the four apartment types, which type has the smallest standard deviation in monthly rent?"
            options={["studio", "one bedroom", "two bedrooms", "three bedrooms"]}
            correct="studio"
            solution={
              <>
                <p>
                  Eyeball the variation by color across neighborhoods. The studio bars are
                  closely bunched, whereas other types vary more. Thus, studios have the
                  smallest spread (lowest standard deviation).
                </p>
              </>
            }
          />

          <MCQExample
            number={242}
            prompt="Among the neighborhoods, which one shows the greatest spread in monthly rent (largest standard deviation across types)?"
            options={["Neighborhood A", "Neighborhood B", "Neighborhood C", "Neighborhood D"]}
            correct="Neighborhood D"
            solution={
              <>
                <p>
                  Look within each neighborhood’s cluster. The bars vary the most in
                  Neighborhood D, so its rent values have the greatest spread.
                </p>
              </>
            }
          />
        </section>

        {/* Example 25 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 25</h3>
          <p className="text-sm text-gray-400">
            Votes for three political parties across five elections.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/774/content_Example_23.png"
              alt="Clustered columns showing votes for three parties over five elections"
              width={700}
              height={425}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={251}
            prompt="Pick a random year among the five. The probability that the New Alliance Party received more than 1.7 million votes is:"
            options={["greater than 1/2", "less than 1/2", "equal to 1/2"]}
            correct="less than 1/2"
            solution={
              <>
                <p>
                  Orange bars (New Alliance): 2.0, 1.8, 1.6, 1.3, 1.5 (millions). More than
                  1.7 occurs in 2 of 5 years, i.e., 2/5, which is less than 1/2.
                </p>
              </>
            }
          />

          <MCQExample
            number={252}
            prompt="The percent increase for the National Action Party from 2006 to 2010 equals what fraction of the percent decrease for the Civic Democratic Party from 2018 to 2022?"
            options={["equal to", "half of", "one-third of", "one-fourth of"]}
            correct="half of"
            solution={
              <>
                <p>
                  National Action: 1.2M → 1.5M is a 25% increase. Civic Democratic:
                  1.8M → 0.9M is a 50% decrease. So 25% is half of 50%.
                </p>
              </>
            }
          />
        </section>

        {/* Example 26 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 26</h3>
          <p className="text-sm text-gray-400">
            Frequencies by age category for a list of notable men and women.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/529/content_Example_24.png"
              alt="Clustered bars by age groups for men vs. women"
              width={700}
              height={358}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={261}
            prompt="Which age band has the largest men-to-women ratio?"
            options={["30–34", "40–44", "50–54", "55–59", "65–69"]}
            correct="30–34"
            solution={
              <>
                <p>
                  Three bands have more men than women: 30–34, 55–59, 65–69.
                  Ratios (men/women): 8/2 = 4, 9/5 = 1.8, 2/1 = 2. The largest is 4
                  in the 30–34 group.
                </p>
              </>
            }
          />

          <MCQExample
            number={262}
            prompt="The age band containing the median men’s age is ____ the age band containing the median women’s age."
            options={["greater than", "less than", "the same as"]}
            correct="the same as"
            solution={
              <>
                <p>
                  Totals are 50 for men and 50 for women. The median is the average
                  of the 25th and 26th values in each list. By cumulative counts,
                  both medians fall in 45–49, so the bands are the same.
                </p>
              </>
            }
          />
        </section>

        {/* Example 27 */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Example 27</h3>
          <p className="text-sm text-gray-400">
            Hotel “relative” ratings are computed by the formula (C − A) / A,
            where C is a hotel’s average out of 100, and A is the all‑hotel
            average out of 100 for that year; results are rounded to the nearest tenth.
          </p>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1795/content_4.png"
              alt="Histogram‑like clustered counts for hotel rating buckets across years"
              width={700}
              height={356}
              className="h-auto w-full"
              unoptimized
            />
          </div>

          <MCQExample
            number={271}
            prompt="Based on the graph alone, the claim that the all‑hotel average (A) was highest in 2020 is:"
            options={["supported", "refuted", "neither supported nor refuted"]}
            correct="neither supported nor refuted"
            solution={
              <>
                <p>
                  A hotel’s displayed rating depends on the ratio (C − A)/A. Many
                  (C, A) pairs can yield the same rating bucket. Knowing only how
                  many hotels landed in each bucket does not pin down A. So the
                  graph neither supports nor refutes the claim about A in 2020.
                </p>
              </>
            }
          />

          <MCQExample
            number={272}
            prompt="The graph implies Country X had more hotels in 2020 than in 2010:"
            options={["supports", "refutes", "neither supports nor refutes"]}
            correct="refutes"
            solution={
              <>
                <p>
                  Each bar height is a count of hotels at a given rating in that
                  year. Summing the 2010 bars yields a larger total than summing
                  the 2020 bars, so the statement “more hotels in 2020 than 2010”
                  is refuted by the data shown.
                </p>
              </>
            }
          />
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Takeaway</h3>
          <p>
            Clustered column charts excel at quick, within‑group comparisons and
            at scanning across groups to see how category gaps change. Always note
            the axis labels, the legend, and the units, and when needed,
            compute medians or ratios using counts rather than eyeballing alone.
          </p>
        </section>
      </article>
    </main>
  );
}