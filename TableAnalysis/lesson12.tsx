import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { Fragment } from "react";

// Client-side KaTeX renderer
// If your app already exposes a Math component, replace this with that.
"use client";
import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

function MathInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    katex.render(expr, ref.current, {
      throwOnError: false,
      displayMode: false,
      strict: "ignore",
    });
  }, [expr]);
  return <span ref={ref} aria-label={ariaLabel ?? expr} role="math" />;
}

// Utility helpers
function range(nums: number[]) {
  if (!nums.length) return { min: NaN, max: NaN, diff: NaN };
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return { min, max, diff: max - min };
}

function cls(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

function Chip({
  intent,
  children,
  className,
}: {
  intent: "yes" | "no";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cls(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        intent === "yes" ? "bg-green-500/10 text-green-300 ring-1 ring-green-500/30" : "bg-red-500/10 text-red-300 ring-1 ring-red-500/30",
        className
      )}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}

export const metadata: Metadata = {
  title: "5.12 Ranges in Table Analysis | Data Insights",
  description:
    "Learn how to compute ranges in table-analysis problems: identify min and max, handle filters by criteria, and compare ranges across groups. Includes two worked Yes/No examples with full reasoning.",
};

type HouseRow = { house: string; state: string; size: number; heating: number };
type ParkRow = { park: string; zone: "Eastern" | "Central" | "Mountain" | "Pacific"; area: number; visitors: number };
type StudentRow = {
  code: string;
  college: "Business" | "Architecture" | "Engineering" | "Natural Science" | "Social Science";
  major: string;
  gpa: number;
  sat: number;
};

const houses: HouseRow[] = [
  { house: "A", state: "Texas", size: 150, heating: 100 },
  { house: "B", state: "New York", size: 90, heating: 80 },
  { house: "C", state: "New York", size: 178, heating: 150 },
  { house: "D", state: "Texas", size: 70, heating: 40 },
  { house: "E", state: "New York", size: 76, heating: 60 },
  { house: "F", state: "California", size: 52, heating: 40 },
  { house: "G", state: "Texas", size: 81, heating: 30 },
  { house: "H", state: "New York", size: 129, heating: 120 },
  { house: "I", state: "California", size: 143, heating: 140 },
];

const parks: ParkRow[] = [
  { park: "Acadia", zone: "Eastern", area: 199, visitors: 4_070_000 },
  { park: "Arches", zone: "Mountain", area: 310, visitors: 1_806_000 },
  { park: "Biscayne", zone: "Eastern", area: 700, visitors: 705_000 },
  { park: "Black Canyon", zone: "Mountain", area: 125, visitors: 308_000 },
  { park: "Congaree", zone: "Eastern", area: 108, visitors: 215_000 },
  { park: "Crater Lake", zone: "Pacific", area: 741, visitors: 647_000 },
  { park: "Lassen", zone: "Pacific", area: 431, visitors: 360_000 },
  { park: "Mammoth Cave", zone: "Central", area: 218, visitors: 515_000 },
  { park: "Mesa Verde", zone: "Mountain", area: 212, visitors: 548_000 },
  { park: "Redwood", zone: "Pacific", area: 562, visitors: 436_000 },
  { park: "Voyageurs", zone: "Central", area: 883, visitors: 243_000 },
];

const students: StudentRow[] = [
  { code: "AA", college: "Business", major: "Accounting", gpa: 86, sat: 83 },
  { code: "BB", college: "Business", major: "Economics", gpa: 73, sat: 91 },
  { code: "CC", college: "Business", major: "Marketing", gpa: 91, sat: 69 },
  { code: "DD", college: "Architecture", major: "Architecture", gpa: 82, sat: 64 },
  { code: "EE", college: "Architecture", major: "Architecture", gpa: 63, sat: 81 },
  { code: "FF", college: "Architecture", major: "Interior Design", gpa: 74, sat: 77 },
  { code: "GG", college: "Engineering", major: "Mechanical Engineering", gpa: 95, sat: 93 },
  { code: "HH", college: "Engineering", major: "Civil Engineering", gpa: 99, sat: 89 },
  { code: "II", college: "Engineering", major: "Electrical Engineering", gpa: 89, sat: 82 },
  { code: "JJ", college: "Natural Science", major: "Chemistry", gpa: 68, sat: 79 },
  { code: "KK", college: "Natural Science", major: "Biochemistry", gpa: 87, sat: 87 },
  { code: "LL", college: "Natural Science", major: "Zoology", gpa: 65, sat: 73 },
  { code: "MM", college: "Social Science", major: "Psychology", gpa: 79, sat: 86 },
  { code: "NN", college: "Social Science", major: "Sociology", gpa: 85, sat: 68 },
  { code: "OO", college: "Social Science", major: "Linguistics", gpa: 72, sat: 84 },
];

function ColumnTable<T extends object>({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: { key: keyof T; header: string }[];
  rows: T[];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-800/50">
      <table className="min-w-full divide-y divide-gray-800/60">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-gray-900/40">
          <tr>
            {columns.map((c) => (
              <th
                key={String(c.key)}
                scope="col"
                className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-300"
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-gray-900/20">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-3 py-2 text-gray-200 text-sm">
                  {String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeader({ chapter, title }: { chapter: string; title: string }) {
  return (
    <header className="mb-8">
      <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">{chapter}</h1>
      <h2 className="mt-1 text-lg font-semibold text-gray-200">{title}</h2>
    </header>
  );
}

export default function Page() {
  // Pre-computations for examples
  const heatingRange = range(houses.map((h) => h.heating));
  const nySizes = houses.filter((h) => h.state === "New York").map((h) => h.size);
  const nySizeRange = range(nySizes);

  const easternAreas = range(parks.filter((p) => p.zone === "Eastern").map((p) => p.area));
  const pacificAreas = range(parks.filter((p) => p.zone === "Pacific").map((p) => p.area));
  const mountainVisitors = range(parks.filter((p) => p.zone === "Mountain").map((p) => p.visitors));
  const centralVisitors = range(parks.filter((p) => p.zone === "Central").map((p) => p.visitors));

  const gpaRange = range(students.map((s) => s.gpa));
  const satRange = range(students.map((s) => s.sat));
  const businessGpaRange = range(students.filter((s) => s.college === "Business").map((s) => s.gpa));
  const nsGpaRange = range(students.filter((s) => s.college === "Natural Science").map((s) => s.gpa));
  const eng = students.filter((s) => s.college === "Engineering");
  const engGpaAvg = eng.reduce((a, s) => a + s.gpa, 0) / eng.length;
  const engSatAvg = eng.reduce((a, s) => a + s.sat, 0) / eng.length;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <SectionHeader chapter="5. Table Analysis" title="5.12 Ranges in Table Analysis" />

      <article className="space-y-6 text-gray-300">
        <p>
          In table-analysis problems, a range tells you how spread out a set of values is. You get it by
          subtracting the smallest value in the set from the largest one.
        </p>

        <MustKnow>
          <div className="text-gray-200">
            The range of a set is controlled only by its extremes:
            <span className="ms-2">
              <MathInline expr="\,\text{Range}=\max-\min" ariaLabel="Range equals max minus min" />
            </span>
          </div>
        </MustKnow>

        <p>
          Often, you’ll be asked for the range of a particular column. In that case, scan the column (or sort if
          the interface allows), pick out the minimum and maximum, and subtract.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-white">Example: Heating Costs</h3>
        <p>Consider the table below.</p>

        <ColumnTable<HouseRow>
          caption="Houses with state, size, and heating cost"
          columns={[
            { key: "house", header: "House" },
            { key: "state", header: "State" },
            { key: "size", header: "Size (m^2)" },
            { key: "heating", header: "Heating ($/month)" },
          ]}
          rows={houses}
        />

        <p>
          The least and greatest heating costs are {heatingRange.min} and {heatingRange.max}, so the range is{" "}
          <MathInline expr={`${heatingRange.max} - ${heatingRange.min} = ${heatingRange.diff}`} ariaLabel="max minus min equals difference" />.
        </p>

        <MustKnow>
          To find a column’s range, identify the smallest and largest entries in that column and subtract the
          smaller from the larger.
        </MustKnow>

        <h3 className="mt-8 text-xl font-semibold text-white">Filtering by a Criterion</h3>
        <p>
          Sometimes the question narrows the set. For instance, suppose we want the range of sizes for the houses
          located in New York.
        </p>
        <p>
          Restrict to New York rows, read off the size values, and compute the difference between the largest and
          smallest:
          <span className="ms-2">
            <MathInline expr={`${nySizeRange.max} - ${nySizeRange.min} = ${nySizeRange.diff}`} />
          </span>
          .
        </p>

        <MustKnow>
          When a condition is specified (such as a state or category), filter the table to that group first, then
          take the group’s minimum and maximum to get the range.
        </MustKnow>

        <h3 className="mt-10 text-xl font-semibold text-white">Worked Yes/No Examples</h3>

        <section aria-labelledby="ex11" className="space-y-4">
          <h4 id="ex11" className="text-lg font-semibold text-white">
            Example 11: National Parks
          </h4>

          <ColumnTable<ParkRow>
            caption="National parks with time zone, area, and annual visitors"
            columns={[
              { key: "park", header: "Park" },
              { key: "zone", header: "Time Zone" },
              { key: "area", header: "Area (km^2)" },
              { key: "visitors", header: "Annual Visitors" },
            ]}
            rows={parks}
          />

          <ol className="space-y-3">
            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">
                  The range of areas for Eastern time zone parks is greater than the range for Pacific parks.
                </p>
                <Chip intent="yes">Yes</Chip>
              </div>
              <p className="text-gray-400">
                Eastern areas have min {easternAreas.min} and max {easternAreas.max} (
                <MathInline expr={`${easternAreas.max}-${easternAreas.min}=${easternAreas.diff}`} />
                ). Pacific areas have min {pacificAreas.min} and max {pacificAreas.max} (
                <MathInline expr={`${pacificAreas.max}-${pacificAreas.min}=${pacificAreas.diff}`} />
                ). Since {easternAreas.diff} &gt; {pacificAreas.diff}, the statement is true.
              </p>
            </li>

            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">
                  The range in annual visitors for Mountain parks is greater than that for Central parks.
                </p>
                <Chip intent="yes">Yes</Chip>
              </div>
              <p className="text-gray-400">
                Mountain visitors: min {mountainVisitors.min}, max {mountainVisitors.max} (
                <MathInline expr={`${mountainVisitors.max}-${mountainVisitors.min}=${mountainVisitors.diff}`} />
                ). Central visitors: min {centralVisitors.min}, max {centralVisitors.max} (
                <MathInline expr={`${centralVisitors.max}-${centralVisitors.min}=${centralVisitors.diff}`} />
                ). Because {mountainVisitors.diff} &gt; {centralVisitors.diff}, the claim holds.
              </p>
            </li>

            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">
                  The park with the median number of annual visitors is located in the Mountain time zone.
                </p>
                <Chip intent="no">No</Chip>
              </div>
              <p className="text-gray-400">
                There are 11 parks, so the median is the 6th value when visitor counts are sorted. That park is
                Mammoth Cave, which is in the Central time zone, not Mountain.
              </p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="ex12" className="space-y-4">
          <h4 id="ex12" className="text-lg font-semibold text-white">
            Example 12: Incoming Students
          </h4>

          <ColumnTable<StudentRow>
            caption="Students with college, major, GPA percentile, and SAT percentile"
            columns={[
              { key: "code", header: "Student" },
              { key: "college", header: "College" },
              { key: "major", header: "Major" },
              { key: "gpa", header: "GPA Percentile" },
              { key: "sat", header: "SAT Percentile" },
            ]}
            rows={students}
          />

          <ol className="space-y-3">
            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">The overall GPA percentile range is greater than the SAT percentile range.</p>
                <Chip intent="yes">Yes</Chip>
              </div>
              <p className="text-gray-400">
                GPA range: min {gpaRange.min}, max {gpaRange.max} (
                <MathInline expr={`${gpaRange.max}-${gpaRange.min}=${gpaRange.diff}`} />
                ). SAT range: min {satRange.min}, max {satRange.max} (
                <MathInline expr={`${satRange.max}-${satRange.min}=${satRange.diff}`} />
                ). Since {gpaRange.diff} &gt; {satRange.diff}, the statement is correct.
              </p>
            </li>

            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">
                  The range of GPA percentiles for Business students is larger than that for Natural Science
                  students.
                </p>
                <Chip intent="no">No</Chip>
              </div>
              <p className="text-gray-400">
                Business GPA range:{" "}
                <MathInline
                  expr={`${businessGpaRange.max}-${businessGpaRange.min}=${businessGpaRange.diff}`}
                />
                . Natural Science GPA range:{" "}
                <MathInline expr={`${nsGpaRange.max}-${nsGpaRange.min}=${nsGpaRange.diff}`} />. Because{" "}
                {businessGpaRange.diff} &lt; {nsGpaRange.diff}, the claim is false.
              </p>
            </li>

            <li>
              <div className="flex items-start justify-between gap-3">
                <p className="flex-1">
                  Among Engineering students, the mean GPA percentile exceeds the mean SAT percentile.
                </p>
                <Chip intent="yes">Yes</Chip>
              </div>
              <p className="text-gray-400">
                Each Engineering student has GPA percentile greater than SAT percentile, so the average GPA
                percentile must also be greater than the average SAT percentile (
                <MathInline expr={`${engGpaAvg.toFixed(1)}>${engSatAvg.toFixed(1)}`} ariaLabel="engineering average GPA greater than SAT" />
                ).
              </p>
            </li>
          </ol>
        </section>

        <p>
          Big picture: to get a range, focus on the endpoints. Whether you’re looking at a full column or a
          filtered group, the answer is always the largest value minus the smallest value.
        </p>
      </article>
    </main>
  );
}