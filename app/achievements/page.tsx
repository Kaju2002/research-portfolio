import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Recognition & milestones"
        description="Awards, publications and other recognition earned by the project."
      />
      <Achievements />
    </>
  );
}
