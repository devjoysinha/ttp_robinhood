import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "5.1 Introduction to Table Analysis | GMAT Data Insights",
  description:
    "Learn how GMAT Table Analysis works: sortable tables, what to read in the prompt, which column to sort, and how to evaluate True/False statements efficiently. Includes one fully worked example.",
};

type Student = {
  id: string;
  hoursReading: number;
  hoursPracticing: number;
  questionsSolved: number;
};

const students: Student[] = [
  { id: "A", hoursReading: 41, hoursPracticing: 18, questionsSolved: 210 },
  { id: "B", hoursReading: 27, hoursPracticing: 23, questionsSolved: 191 },
  { id: "C", hoursReading: 19, hoursPracticing: 14, questionsSolved: 79 },
  { id: "D", hoursReading: 32, hoursPracticing: 19, questionsSolved: 165 },
  { id: "E", hoursReading: 14, hoursPracticing: 17, questionsSolved: 134 },
  { id: "F", hoursReading: 27, hoursPracticing: 15, questionsSolved: 87 },
  { id: "G", hoursReading: 22, hoursPracticing: 25, questionsSolved: 285 },
  { id: "H", hoursReading: 16, hoursPracticing: 17, questionsSolved: 136 },
  { id: "I", hoursReading: 12, hoursPracticing: 14, questionsSolved: 98 },
  { id: "K", hoursReading: 24, hoursPracticing: 29, questionsSolved: 254 },
  { id: "L", hoursReading: 10, hoursPracticing: 13, questionsSolved: 82 },
  { id: "M", hoursReading: 15, hoursPracticing: 20, questionsSolved: 143 },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In Table Analysis problems, you’re given a data table whose columns can
          be sorted. Your job is to evaluate several statements—usually marked
          True or False—based only on what the prompt and the table establish.
        </p>

        <MustKnow>
          Table Analysis frequently targets quantitative ideas (counts,
          averages, comparisons), although brief explanatory text often
          accompanies the table. Read that text—it can contain definitions,
          constraints, or totals you need.
        </MustKnow>

        <p>
          The size and content of the table can vary widely. Some tables are
          small and simple; others are larger and busier. Either way, sorting by
          the right column lets you surface the needed rows quickly.
        </p>

        <MustKnow>
          Choose the correct sort. If you’re checking a condition about the
          “largest,” “smallest,” or “top k,” sorting by the relevant metric is
          usually the fastest route.
        </MustKnow>

        <p>
          When a detail isn’t obviously in the table, scan any accompanying
          description again. Sometimes the text supplies totals, time spans, or
          definitions that the grid itself does not. You can also draw simple
          inferences from the given numbers when appropriate.
        </p>

        <MustKnow>
          Use only what’s provided or directly implied. If the statement
          requires information that the table and text don’t give (for example,
          weekday vs. weekend breakdown when only totals are shown), you cannot
          verify it as True.
        </MustKnow>

        <p>
          Occasionally, a Table Analysis item feels like Data Sufficiency: you
          may be asked whether the information is enough to support a claim.
          Treat it the same way—test whether the claim must hold given the
          available data.
        </p>

        <section aria-labelledby="example-1-title" className="space-y-4">
          <div className="pt-2">
            <h3 id="example-1-title" className="text-xl font-semibold text-white">
              Example 1
            </h3>
          </div>

          <p>
            A class of 12 students had one week to study for a final. For each
            student, the table lists total hours reading, total hours practicing
            problems, and total practice questions solved.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Hours reading, hours practicing, and questions solved for each student
              </caption>
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Student
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Hours Reading
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Hours Practicing
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Questions Solved
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {students.map((s) => (
                  <tr key={s.id} className="bg-gray-900/30">
                    <th scope="row" className="px-4 py-2 font-medium text-gray-100">
                      {s.id}
                    </th>
                    <td className="px-4 py-2">{s.hoursReading}</td>
                    <td className="px-4 py-2">{s.hoursPracticing}</td>
                    <td className="px-4 py-2">{s.questionsSolved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div aria-labelledby="statements-title" className="space-y-3">
            <h4 id="statements-title" className="text-lg font-semibold text-gray-200">
              For each statement, select True if it can be confirmed using the given information; otherwise select False.
            </h4>

            <ol className="list-decimal space-y-4 pl-5">
              <li>
                At least half of the students spent more than 24 hours reading.
                <div className="mt-1 text-sm text-gray-400">
                  Answer: False
                </div>
              </li>
              <li>
                Some students solved more questions on weekdays than on weekends.
                <div className="mt-1 text-sm text-gray-400">
                  Answer: False
                </div>
              </li>
              <li>
                The student with the fewest questions solved did not spend the least time practicing.
                <div className="mt-1 text-sm text-gray-400">
                  Answer: True
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/40 p-4">
            <p className="font-semibold text-gray-200">Solution (paraphrased):</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                There are 12 students, so half is <InlineMath math="\tfrac{12}{2}=6" />. Count students with hours reading greater than 24:
                B (27), F (27), D (32), A (41). That’s 4, which is fewer than 6, so the first statement is False.
              </li>
              <li>
                The table gives total questions solved but doesn’t split them by weekday vs. weekend. Without that breakdown (or any text
                implying it), we cannot verify the claim. Mark False.
              </li>
              <li>
                Fewest questions solved is student C with 79. Least practice time is 13 hours (student L). These are different students,
                so the statement is True.
              </li>
            </ul>

            <div className="mt-3 text-sm text-gray-400">
              Final pattern: False / False / True
            </div>
          </div>
        </section>

        <MustKnow>
          Sorting is a tool, not a requirement. If a quick scan or a small count answers the statement, do that. Otherwise, sort by the
          most relevant column to speed up comparisons.
        </MustKnow>
      </article>
    </main>
  );
}