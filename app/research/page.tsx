import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResearchScope from "@/components/ResearchScope";
import Objectives from "@/components/Objectives";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Project scope & objectives"
        description="The research gap we identified, the problem we address, our proposed solution, and the objectives of each component."
      />
      <ResearchScope showHeading={false} />
      <Objectives />
    </>
  );
}
