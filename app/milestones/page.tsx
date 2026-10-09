import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Milestones",
};

export default function MilestonesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Milestones"
        title="Project timeline & assessments"
        description="Every milestone and assessment of the research project, with dates and the marks allocated to each."
      />
      <Timeline />
    </>
  );
}
