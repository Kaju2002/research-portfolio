import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Methodology from "@/components/Methodology";

export const metadata: Metadata = {
  title: "Methodology",
};

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Methodology"
        title="How we built the system"
        description="The overall architecture and the four methodologies behind each research component."
      />
      <Methodology />
    </>
  );
}
