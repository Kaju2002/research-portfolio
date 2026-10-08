import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Milestones",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Milestones"
        title="Project timeline"
        description="Key milestones of the research project, from initialization to final submission."
      />
      <Timeline />
    </>
  );
}
