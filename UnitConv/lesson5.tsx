import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Load KaTeX components on the client (avoids SSR pitfalls)
const BlockMath = dynamic(() => import("react-katex").then(m => m.BlockMath), { ssr: false });
const InlineMath = dynamic(() => import("react-katex").then(m => m.InlineMath), { ssr: false });

export const metadata: Metadata = {
  title: "8.5 Unit Conversions with Squared and Cubed Units | GMAT Quant",
  description:
    "Learn how to convert area and volume units by squaring or cubing the entire conversion factor. Includes key geometry formulas, pitfalls to avoid, and four worked examples.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">8. Unit Conversions</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          8.5 Converting Squared and Cubed Units (Area and Volume)
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Up to now, we’ve been converting linear measurements (first power), such as inches to feet,
          dollars to cents, or meters to kilometers. When the units represent area or volume, the
          conversion is a bit different: the conversion factor must be raised to the second power for
          area and to the third power for volume.
        </p>

        <MustKnow>
          On the GMAT, you can still be responsible for basic 2D/3D measurements, especially when
          converting units. Know the essentials:
          <div className="mt-3 space-y-1">
            <BlockMath math={"\\text{Area of rectangle} = \\text{length} \\times \\text{width}"} />
            <BlockMath math={"\\text{Area of square} = s^2"} />
            <BlockMath math={"\\text{Volume of box} = \\text{length} \\times \\text{width} \\times \\text{height}"} />
            <BlockMath math={"\\text{Volume of cube} = e^3"} />
            <BlockMath math={"\\text{Surface area of box} = 2(lw)+2(lh)+2(wh)"} />
            <BlockMath math={"\\text{Surface area of cube} = 6e^2"} />
          </div>
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Converting squared units (area)</h3>
        <p>
          Suppose we want to write <InlineMath math={"81\\,\\text{in}^2"} /> in square feet. A very common mistake
          is to cancel a single “inch” with <InlineMath math={"\\tfrac{1\\,\\text{ft}}{12\\,\\text{in}}"} />, which
          mixes squared and linear units:
        </p>
        <div className="rounded-md bg-gray-900/40 p-4">
          <p className="mb-2 font-semibold text-gray-200">Pitfall (don’t do this):</p>
          <BlockMath math={"81\\,\\text{in}^2 \\times \\frac{1\\,\\text{ft}}{12\\,\\text{in}}"} />
          <p className="mt-2">
            Linear inches can’t cancel square inches. To convert area, the entire conversion must be squared.
          </p>
        </div>

        <p className="mt-2">Do it correctly by squaring both sides of the linear conversion first:</p>
        <div className="space-y-2 rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"1\\,\\text{ft} = 12\\,\\text{in}"} />
          <BlockMath math={"(1\\,\\text{ft})^2 = (12\\,\\text{in})^2"} />
          <BlockMath math={"1\\,\\text{ft}^2 = 144\\,\\text{in}^2"} />
          <BlockMath math={"81\\,\\text{in}^2 \\times \\frac{1\\,\\text{ft}^2}{144\\,\\text{in}^2} = \\frac{81}{144}\\,\\text{ft}^2 = \\frac{9}{16}\\,\\text{ft}^2"} />
        </div>

        <MustKnow>
          For area conversions, square both sides of the original linear relationship before converting. Then the squared units will cancel cleanly.
        </MustKnow>

        <h3 className="text-xl font-semibold text-white">Converting cubed units (volume)</h3>
        <p>
          For volume, cube the conversion. Example with kilometers and meters:
        </p>
        <div className="space-y-2 rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"1\\,\\text{km} = 1000\\,\\text{m}"} />
          <BlockMath math={"(1\\,\\text{km})^3 = (1000\\,\\text{m})^3"} />
          <BlockMath math={"1\\,\\text{km}^3 = 1{,}000{,}000{,}000\\,\\text{m}^3"} />
        </div>
        <p>
          Now convert <InlineMath math={"300\\,\\text{m}^3"} /> to cubic kilometers:
        </p>
        <div className="rounded-md bg-gray-900/40 p-4">
          <BlockMath math={"300\\,\\text{m}^3 \\times \\frac{1\\,\\text{km}^3}{1{,}000{,}000{,}000\\,\\text{m}^3} = 0.0000003\\,\\text{km}^3"} />
        </div>

        <MustKnow>
          For volume conversions, cube both sides of the original linear relationship before converting. Then the cubic units will cancel cleanly.
        </MustKnow>

        <MCQExample
          number={12}
          prompt="A rectangular parking lot measures 30 meters by 40 meters. What is the area in square kilometers? (Use 1 km = 1000 m.)"
          options={["12", "1.2", "0.12", "0.012", "0.0012"]}
          correct="0.0012"
          solution={
            <>
              <p>
                First find area in square meters: <InlineMath math={"30\\times 40=1200\\,\\text{m}^2"} />.
              </p>
              <p>
                Since <InlineMath math={"1\\,\\text{km}^2 = (1000\\,\\text{m})^2 = 1{,}000{,}000\\,\\text{m}^2"} />, convert:
              </p>
              <BlockMath math={"1200\\,\\text{m}^2 \\times \\frac{1\\,\\text{km}^2}{1{,}000{,}000\\,\\text{m}^2} = 0.0012\\,\\text{km}^2"} />
            </>
          }
        />

        <MCQExample
          number={13}
          prompt="A rectangular tank has dimensions 5 m × 8 m × 10 m. What is its volume in cubic kilometers? (Use 1 km = 1000 m.)"
          options={["0.4", "0.04", "0.004", "0.0004", "0.0000004"]}
          correct="0.0000004"
          solution={
            <>
              <p>
                Volume in cubic meters: <InlineMath math={"5\\times 8\\times 10=400\\,\\text{m}^3"} />.
              </p>
              <p>
                Since <InlineMath math={"1\\,\\text{km}^3=1{,}000{,}000{,}000\\,\\text{m}^3"} />, we get:
              </p>
              <BlockMath math={"400\\,\\text{m}^3 \\times \\frac{1\\,\\text{km}^3}{1{,}000{,}000{,}000\\,\\text{m}^3} = 0.0000004\\,\\text{km}^3"} />
            </>
          }
        />

        <MCQExample
          number={14}
          prompt="A rectangular card is n inches by m inches. What is the area in square feet? (Use 12 inches = 1 foot.)"
          options={["nm/144", "nm/12", "nm/6", "12mn", "144nm"]}
          correct="nm/144"
          solution={
            <>
              <p>
                Area in square inches is <InlineMath math={"nm\\,\\text{in}^2"} />. Since{" "}
                <InlineMath math={"(1\\,\\text{ft})^2=(12\\,\\text{in})^2"} />, we have{" "}
                <InlineMath math={"1\\,\\text{ft}^2=144\\,\\text{in}^2"} />.
              </p>
              <BlockMath math={"nm\\,\\text{in}^2 \\times \\frac{1\\,\\text{ft}^2}{144\\,\\text{in}^2} = \\frac{nm}{144}\\,\\text{ft}^2"} />
            </>
          }
        />

        <MCQExample
          number={15}
          prompt="If 1 liter equals 1,000,000 cubic millimeters and 10 millimeters = 1 centimeter, then 0.005 liters is how many cubic centimeters?"
          options={["0.000005", "0.005", "5", "5,000", "5,000,000"]}
          correct="5"
          solution={
            <>
              <p>
                Convert liters to <InlineMath math={"\\text{mm}^3"} /> first:
              </p>
              <BlockMath math={"0.005\\,\\text{L} \\times \\frac{1{,}000{,}000\\,\\text{mm}^3}{1\\,\\text{L}} = 5000\\,\\text{mm}^3"} />
              <p className="mt-2">
                Since <InlineMath math={"10\\,\\text{mm}=1\\,\\text{cm}"} />, cubing gives{" "}
                <InlineMath math={"1000\\,\\text{mm}^3=1\\,\\text{cm}^3"} />.
              </p>
              <BlockMath math={"5000\\,\\text{mm}^3 \\times \\frac{1\\,\\text{cm}^3}{1000\\,\\text{mm}^3} = 5\\,\\text{cm}^3"} />
            </>
          }
        />

        <p className="pt-2">
          Big picture: convert the factor, then apply it at the correct power. Square for area, cube for
          volume—this aligns the units so they cancel properly.
        </p>
      </article>
    </main>
  );
}