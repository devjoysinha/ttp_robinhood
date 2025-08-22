import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "11.10 Multipart Ratios and the LCM | Ratios",
  description:
    "Learn how to combine two two‑term ratios into a three‑term ratio by matching the shared term using the LCM. Includes one multiple‑choice example and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          11. Ratios
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          11.10 Building Three‑Part Ratios with the LCM
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Often you’re given two separate two‑term ratios that share one
          quantity. If you align that shared quantity to the same ratio value in
          both, you can merge them into a single three‑part ratio that compares
          all three items at once.
        </p>

        <section aria-label="Direct merge when shared value already matches" className="space-y-3">
          <p>Quick case: the shared value already matches.</p>
          <p className="pl-4">
            Suppose a hospital meeting has doctors d, nurses n, and administrators a with{" "}
            <InlineMath math={"d:n = 2:7"} /> and{" "}
            <InlineMath math={"n:a = 7:3"} />.
          </p>
          <p className="pl-4">
            Here the shared term n is already 7 in both, so we can combine directly:{" "}
            <InlineMath math={"d:n:a = 2:7:3"} />. From this,{" "}
            <InlineMath math={"d:a = 2:3"} />.
          </p>
        </section>

        <section aria-label="Aligning shared value using the LCM" className="space-y-3">
          <p>More commonly, the shared value doesn’t match and we must align it.</p>
          <p className="pl-4">
            Suppose a box holds white w, black b, and green g chips with{" "}
            <InlineMath math={"w:g = 1:4"} /> and{" "}
            <InlineMath math={"g:b = 3:5"} />. The shared term g is 4 in the first
            ratio and 3 in the second, so we scale to the least common multiple.
          </p>
          <ul className="pl-6 list-disc">
            <li>
              LCM of 4 and 3 is 12.
            </li>
            <li>
              Scale <InlineMath math={"w:g = 1:4"} /> by 3 →{" "}
              <InlineMath math={"w:g = 3:12"} />.
            </li>
            <li>
              Scale <InlineMath math={"g:b = 3:5"} /> by 4 →{" "}
              <InlineMath math={"g:b = 12:20"} />.
            </li>
          </ul>
          <p className="pl-4">
            Now g matches, so combine: <InlineMath math={"w:g:b = 3:12:20"} />. Thus{" "}
            <InlineMath math={"w:b = 3:20"} />.
          </p>
        </section>

        <MustKnow>
          To combine two ratios that share a variable, first make the shared
          variable’s ratio value the same in both ratios (use the LCM). Then
          stitch the ratios into one three‑part ratio. If the shared value
          already matches, you can merge immediately.
        </MustKnow>

        <section aria-label="Mini worked example" className="space-y-3">
          <p>Mini‑example:</p>
          <p className="pl-4">
            A garden store has tomatoes x, basil y, and cucumbers z. If{" "}
            <InlineMath math={"x:y = 12:7"} /> and{" "}
            <InlineMath math={"x:z = 30:11"} />, what is{" "}
            <InlineMath math={"x:y:z"} />?
          </p>
          <ul className="pl-6 list-disc">
            <li>
              Shared term is x with values 12 and 30. LCM(12, 30) = 60.
            </li>
            <li>
              Scale <InlineMath math={"x:y = 12:7"} /> by 5 →{" "}
              <InlineMath math={"60:35"} />.
            </li>
            <li>
              Scale <InlineMath math={"x:z = 30:11"} /> by 2 →{" "}
              <InlineMath math={"60:22"} />.
            </li>
          </ul>
          <p className="pl-4">
            Therefore, <InlineMath math={"x:y:z = 60:35:22"} />.
          </p>
        </section>

        <MCQExample
          number={12}
          prompt="In a tackle box of red (R), blue (B), and green (G) worms, R:B = 5:6 and R:G = 4:3. If the total number of worms is a two‑digit integer, what is the maximum possible number of blue worms?"
          options={["12", "24", "48", "60", "72"]}
          correct="24"
          solution={
            <>
              <p>
                Align the shared term R. LCM(5, 4) = 20.
              </p>
              <ul className="pl-6 list-disc">
                <li>
                  Scale <InlineMath math={"R:B = 5:6"} /> by 4 →{" "}
                  <InlineMath math={"20:24"} />.
                </li>
                <li>
                  Scale <InlineMath math={"R:G = 4:3"} /> by 5 →{" "}
                  <InlineMath math={"20:15"} />.
                </li>
              </ul>
              <p>
                So <InlineMath math={"R:B:G = 20:24:15"} />. Let the ratio
                multiplier be <InlineMath math={"x"} />: R = 20x, B = 24x, G = 15x,
                total = <InlineMath math={"(20+24+15)x = 59x"} />.
              </p>
              <p>
                To keep the total two‑digit, <InlineMath math={"x = 1"} /> is the only
                option (x = 2 gives 118). Hence,{" "}
                <InlineMath math={"B = 24"} />.
              </p>
            </>
          }
        />

        <ExampleCard
          number={13}
          title="Walton High: Is the science team larger than 16?"
          statements={[
            "Students can join only one team at the school.",
            "1) The ratio of science to math team members is 3:4.",
            "2) The ratio of science to chess team members is 5:2.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                Let <InlineMath math={"s"} /> be the science team size. We must
                determine whether <InlineMath math={"s > 16"} />.
              </p>
              <p>
                Statement (1): <InlineMath math={"s:m = 3:4"} /> only tells us
                <InlineMath math={"s"} /> is a multiple of 3. Could be 3, 30, etc.
                Not sufficient.
              </p>
              <p>
                Statement (2): <InlineMath math={"s:c = 5:2"} /> only tells us
                <InlineMath math={"s"} /> is a multiple of 5. Could be 5, 50, etc.
                Not sufficient.
              </p>
              <p>
                Together: shared <InlineMath math={"s"} /> has values 3 and 5; LCM = 15.
              </p>
              <ul className="pl-6 list-disc">
                <li>
                  Scale to get <InlineMath math={"s:m = 15:20"} /> and{" "}
                  <InlineMath math={"s:c = 15:6"} />.
                </li>
                <li>
                  So <InlineMath math={"s"} /> is a multiple of 15: 15, 30, 45, …
                </li>
              </ul>
              <p>
                We cannot decide if <InlineMath math={"s > 16"} /> (could be 15 or 30).
                Not sufficient. Answer: E.
              </p>
            </>
          }
        />

        <ExampleCard
          number={14}
          title="Nationalities: Are Ukrainians more than 24?"
          statements={[
            "A group has Italians (I), Egyptians (E), and Ukrainians (U), and I:E = 15:8. Also I > 100.",
            "1) E:U = 12:5.",
            "2) I + E > 200.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                From the stem, <InlineMath math={"I:E = 15:8"} /> and{" "}
                <InlineMath math={"I > 100"} />. Question: Is{" "}
                <InlineMath math={"U > 24"} />?
              </p>
              <p>
                Statement (1): Combine with the stem via shared E. LCM(8, 12) = 24.
              </p>
              <ul className="pl-6 list-disc">
                <li>
                  Scale <InlineMath math={"I:E = 15:8"} /> by 3 →{" "}
                  <InlineMath math={"45:24"} />.
                </li>
                <li>
                  Scale <InlineMath math={"E:U = 12:5"} /> by 2 →{" "}
                  <InlineMath math={"24:10"} />.
                </li>
              </ul>
              <p>
                So <InlineMath math={"I:E:U = 45:24:10"} />. Let multiplier{" "}
                <InlineMath math={"x"} />. Then{" "}
                <InlineMath math={"I = 45x > 100 \\Rightarrow x \\ge 3"} /> (integer).
                Hence <InlineMath math={"U = 10x \\ge 30 > 24"} /> always. Sufficient.
              </p>
              <p>
                Statement (2): Gives only a total on I + E with no link to U. Not
                sufficient.
              </p>
              <p>Thus (1) alone suffices; (2) alone does not. Answer: A.</p>
            </>
          }
        />

        <MCQExample
          number={15}
          prompt="A kitchen has plums (p), apples (a), and grapes (g). The ratios are p:a = 5:3 and a:g = 5:6. If there are fewer than 30 grapes, how many plums are there?"
          options={["3", "5", "10", "15", "25"]}
          correct="25"
          solution={
            <>
              <p>
                Shared term is a with values 3 and 5; LCM(3, 5) = 15.
              </p>
              <ul className="pl-6 list-disc">
                <li>
                  Scale <InlineMath math={"p:a = 5:3"} /> by 5 →{" "}
                  <InlineMath math={"25:15"} />.
                </li>
                <li>
                  Scale <InlineMath math={"a:g = 5:6"} /> by 3 →{" "}
                  <InlineMath math={"15:18"} />.
                </li>
              </ul>
              <p>
                Therefore <InlineMath math={"p:a:g = 25:15:18"} />. Let multiplier{" "}
                <InlineMath math={"x"} />. Then{" "}
                <InlineMath math={"g = 18x < 30 \\Rightarrow x = 1"} /> (since x = 2
                gives 36). So{" "}
                <InlineMath math={"p = 25x = 25"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: to merge two ratios that share one variable, equalize that
          shared variable using the LCM and then combine. The resulting
          three‑part ratio lets you read off any pairwise comparison immediately.
        </p>
      </article>
    </main>
  );
}