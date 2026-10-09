import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="The people behind the research"
        description="Meet our supervisors, the team of researchers working on this project, and our achievements."
      />
      <Team />
      <Achievements />
    </>
  );
}
