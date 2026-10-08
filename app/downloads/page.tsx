import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Downloads from "@/components/Downloads";

export const metadata: Metadata = {
  title: "Downloads",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Documents & presentations"
        description="Download the proposal, presentations, thesis report and research paper."
      />
      <Downloads />
    </>
  );
}
