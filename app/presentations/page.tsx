import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Downloads from "@/components/Downloads";
import SystemDemo from "@/components/SystemDemo";

export const metadata: Metadata = {
  title: "Presentations",
};

export default function PresentationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Presentations"
        title="Presentation slides"
        description="The system demo, slides from our past presentations, and space for the upcoming ones."
      />
      <Downloads category="Presentation" intro={<SystemDemo />} />
    </>
  );
}
