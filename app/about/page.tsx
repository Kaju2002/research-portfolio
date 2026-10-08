import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="The people behind the research"
        description="Meet our supervisors and the team of researchers working on this project."
      />
      <Team />
    </>
  );
}
