import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.16 Objects in a Line | Word Problems",
  description:
    "A structured approach to line-up problems: single named object and two named objects. Learn core formulas, translate words to equations, and practice with MCQ and Data Sufficiency examples. KaTeX-rendered steps included.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.16 Objects in a Line
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Line-up problems ask you to reason about positions of people or items
          relative to the front/back (or top/bottom) of an ordered list. You’ll
          typically translate position facts into small equations, then solve
          for the quantity the question requests.
        </p>

        <p className="font-semibold text-gray-200">Two recurring setups:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>One named object in the line</li>
          <li>Two named objects in the line</li>
        </ul>

        <section aria-labelledby="one-named">
          <h3
            id="one-named"
            className="mt-8 text-xl font-bold text-white md:text-2xl"
          >
            One named object in the line
          </h3>

          <p>
            When a single named person/item is referenced, it’s convenient to
            define:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <InlineMath math="x" /> = number of objects behind the named
              object
            </li>
            <li>
              <InlineMath math="y" /> = number of objects in front of the named
              object
            </li>
          </ul>

          <MustKnow>
            <div className="space-y-2">
              <p className="font-semibold">Key relationship (one named object)</p>
              <p>
                Total count includes everyone in front, everyone behind, and the
                named object itself:
              </p>
              <BlockMath math="T = x + y + 1" />
              <p className="sr-only">
                T equals x plus y plus 1. T is the total number of objects.
              </p>
            </div>
          </MustKnow>

          <div className="space-y-2">
            <p className="font-semibold text-gray-200">Mini‑example</p>
            <p>
              A person has 10 people ahead and 8 people behind. Using{" "}
              <InlineMath math="T = x + y + 1" /> with <InlineMath math="y=10" /> and{" "}
              <InlineMath math="x=8" />:
            </p>
            <BlockMath math="T = 8 + 10 + 1 = 19" />
            <p>So, 19 people are in line in total.</p>
          </div>

          <MCQExample
            number={72}
            prompt="Lindsey is in a line. She counts three times as many people ahead of her as behind her. Which of the following could be the total number of people in the line?"
            options={["35", "36", "37", "38", "39"]}
            correct="37"
            solution={
              <>
                <p>
                  Let <InlineMath math="x" /> be the number behind Lindsey and{" "}
                  <InlineMath math="y" /> be the number ahead. Given “three times
                  as many ahead as behind,” we have{" "}
                  <InlineMath math="y = 3x" />.
                </p>
                <p>
                  Total is <InlineMath math="T = x + y + 1 = x + 3x + 1 = 4x + 1" />.
                  Thus T is one more than a multiple of 4. Among the choices,
                  only 37 satisfies this pattern.
                </p>
              </>
            }
          />

          <MCQExample
            number={73}
            prompt="A vertical stack of games includes a specific title, Block Wars. The total number of games equals four times the number above Block Wars minus 2. The number above Block Wars is 23 fewer than the number below it. How many games are below Block Wars?"
            options={["13", "27", "36", "39", "50"]}
            correct="36"
            solution={
              <>
                <p>
                  Let <InlineMath math="x" /> be the number below and{" "}
                  <InlineMath math="y" /> be the number above. The total equals{" "}
                  <InlineMath math="x + y + 1" />, and we’re told:
                </p>
                <BlockMath math="x + y + 1 = 4y - 2" />
                <p className="sr-only">
                  x plus y plus 1 equals 4y minus 2.
                </p>
                <p>Rearrange: x + 1 = 3y - 2 → x = 3y - 3.</p>
                <p>
                  Also “above is 23 fewer than below” gives{" "}
                  <InlineMath math="y = x - 23" />. Substitute into{" "}
                  <InlineMath math="x = 3y - 3" />:
                </p>
                <BlockMath math="x = 3(x - 23) - 3 = 3x - 69 - 3 = 3x - 72" />
                <p>So 2x = 72 → x = 36.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="two-named">
          <h3
            id="two-named"
            className="mt-10 text-xl font-bold text-white md:text-2xl"
          >
            Two named objects in the line
          </h3>

          <p>
            With two named people/items where one is ahead of the other, use
            three segments:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <InlineMath math="x" /> = number behind the one who is farther back
            </li>
            <li>
              <InlineMath math="y" /> = number between the two named objects
            </li>
            <li>
              <InlineMath math="z" /> = number ahead of the one who is farther front
            </li>
          </ul>

          <MustKnow>
            <div className="space-y-2">
              <p className="font-semibold">Key relationship (two named objects)</p>
              <p>
                The total equals all three segments plus the two named objects:
              </p>
              <BlockMath math="T = x + y + z + 2" />
              <p className="sr-only">
                T equals x plus y plus z plus 2. T is the total number of
                objects.
              </p>
            </div>
          </MustKnow>

          <div className="space-y-2">
            <p className="font-semibold text-gray-200">Mini‑example</p>
            <p>
              Cho is in front of Anh. Anh is 23rd from the front (so 22 ahead of
              Anh). Cho is 28th from the back (so 27 behind Cho). There are 15
              people between them.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Ahead of Anh are everyone ahead of Cho plus the{" "}
                <InlineMath math="y" /> in between plus Cho:{" "}
                <InlineMath math="y + z + 1 = 22" /> →{" "}
                <InlineMath math="y + z = 21" />.
              </li>
              <li>
                Behind Cho are Anh (<InlineMath math="+1" />), the{" "}
                <InlineMath math="y" /> between them, and the{" "}
                <InlineMath math="x" /> behind Anh:{" "}
                <InlineMath math="x + y + 1 = 27" /> →{" "}
                <InlineMath math="x + y = 26" />.
              </li>
              <li>
                Given <InlineMath math="y = 15" />, we get{" "}
                <InlineMath math="x = 11" /> and <InlineMath math="z = 6" />.
              </li>
            </ul>
            <p>
              Total: <InlineMath math="T = x + y + z + 2 = 11 + 15 + 6 + 2 = 34" />.
            </p>
          </div>

          <MCQExample
            number={74}
            prompt="In a line of 66 people, Yu is behind Gil. The number of people behind Gil plus the number ahead of Yu equals 85. How many people are between Yu and Gil?"
            options={["19", "24", "26", "28", "30"]}
            correct="19"
            solution={
              <>
                <p>
                  Let <InlineMath math="x, y, z" /> follow the usual two‑person
                  diagram with Yu behind Gil. From the 66 total,{" "}
                  <InlineMath math="x + y + z + 2 = 66" /> so{" "}
                  <InlineMath math="x + y + z = 64" />.
                </p>
                <p>
                  “Behind Gil” is <InlineMath math="x + 1 + y" /> (Yu is back, so Gil
                  has the between segment plus Yu and everyone behind Yu). “Ahead
                  of Yu” is <InlineMath math="y + 1 + z" />. Their sum is 85:
                </p>
                <BlockMath math="(x + 1 + y) + (y + 1 + z) = 85 \;\;\Rightarrow\;\; x + 2y + z + 2 = 85 \;\;\Rightarrow\;\; x + 2y + z = 83" />
                <p>
                  Subtract <InlineMath math="x + y + z = 64" /> from{" "}
                  <InlineMath math="x + 2y + z = 83" /> to obtain{" "}
                  <InlineMath math="y = 19" />.
                </p>
              </>
            }
          />

          <ExampleCard
            number={75}
            title="If Helmut and Gretta are standing in a line of T people, what is T?"
            statements={[
              "1) There are 5 people between Helmut and Gretta.",
              "2) There are 18 people behind Helmut and 11 people ahead of Gretta.",
            ]}
            correctLetter="E"
            solution={
              <>
                <p>
                  We don’t know who is in front, so analyze both orders. Let{" "}
                  <InlineMath math="x, y, z" /> be the standard segments and{" "}
                  <InlineMath math="T = x + y + z + 2" />.
                </p>
                <p>
                  Statement (1): <InlineMath math="y = 5" /> only. That’s
                  insufficient to fix <InlineMath math="T" />.
                </p>
                <p>
                  Statement (2): Consider both orders. In one order, you obtain{" "}
                  <InlineMath math="x + y = 17" /> and <InlineMath math="y + z = 10" />.
                  In the other order, <InlineMath math="x = 18" /> and{" "}
                  <InlineMath math="z = 11" />. Either way, <InlineMath math="T" /> is
                  not determined.
                </p>
                <p>
                  Together: With <InlineMath math="y = 5" />, case A yields{" "}
                  <InlineMath math="T = 24" /> while case B yields{" "}
                  <InlineMath math="T = 36" />. Different totals → not sufficient.
                </p>
                <p>Answer: E.</p>
              </>
            }
          />

          <MCQExample
            number={76}
            prompt="Two people, Adam and Ben, are in a line. Adam is 10th from the front, Ben is 15th from the back, and there are 5 people between them. Which totals are possible?"
            options={[
              "I only",
              "II only",
              "III only",
              "I and II",
              "I and III",
            ]}
            correct="I and III"
            solution={
              <>
                <p>
                  Let’s test both possible orders because the problem doesn’t
                  say who is ahead.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    Case 1 (Adam ahead): If Adam is 10th from the front,{" "}
                    <InlineMath math="z = 9" />. If Ben is 15th from the back,{" "}
                    <InlineMath math="x = 14" />. With 5 between{" "}
                    <InlineMath math="(y=5)" />, total is{" "}
                    <InlineMath math="T = x + y + z + 2 = 14 + 5 + 9 + 2 = 30" />.
                  </li>
                  <li>
                    Case 2 (Ben ahead): “Adam 10th from the front” gives{" "}
                    <InlineMath math="y + z + 1 = 9 \Rightarrow y + z = 8" />; “Ben
                    15th from the back” gives{" "}
                    <InlineMath math="x + y + 1 = 14 \Rightarrow x + y = 13" />;
                    with <InlineMath math="y = 5" />, we get <InlineMath math="z=3" />{" "}
                    and <InlineMath math="x=8" />, so{" "}
                    <InlineMath math="T = 8 + 5 + 3 + 2 = 18" />.
                  </li>
                </ul>
                <p>
                  The possible totals are 30 and 18, which correspond to I and
                  III. So, the correct choice is “I and III.”
                </p>
              </>
            }
          />
        </section>

        <p className="mt-8">
          Big picture: write small equations for “ahead,” “behind,” and
          “between,” then use <InlineMath math="T = x + y + 1" /> (one named
          object) or <InlineMath math="T = x + y + z + 2" /> (two named objects)
          to finish. Always consider both orders when the problem doesn’t
          specify who is in front.
        </p>
      </article>
    </main>
  );
}