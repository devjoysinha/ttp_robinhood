import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "1.4 The Structure of an Argument | Critical Reasoning",
  description:
    "Learn the four building blocks of arguments used in GMAT Critical Reasoning: conclusion, evidence, assumptions, and background information, with clear definitions and guidance.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Critical Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.4 The Structure of an Argument
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Most GMAT Critical Reasoning problems revolve around arguments. Here,
          “argument” doesn’t mean a quarrel—it means a reasoned claim supported
          by statements designed to justify it.
        </p>

        <MustKnow>
          An argument is a connected set of statements intended to justify a
          position. Understanding how those statements fit together is essential
          to analyzing, strengthening, weakening, or evaluating the claim.
        </MustKnow>

        <p>
          To work efficiently on Critical Reasoning, it helps to recognize the
          common pieces that show up again and again. You’ll encounter four core
          parts:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-gray-300">
          <li>
            Conclusion — the main point the author wants you to accept. Think of
            it as the destination the reasoning is trying to reach.
          </li>
          <li>
            Evidence (Premises) — the stated facts or reasons offered to support
            the conclusion. These are the stepping-stones the author provides.
          </li>
          <li>
            Assumptions — the unstated ideas that must be true for the evidence
            to connect to the conclusion. They fill the gaps between the stated
            reasons and the claim.
          </li>
          <li>
            Background information — context that helps you interpret the
            argument. It may be useful, but it is not itself the proof.
          </li>
        </ul>

        <p>
          We’ll start by examining how to spot the conclusion, since identifying
          the main claim makes the rest of the structure much easier to unpack.
        </p>
      </article>
    </main>
  );
}