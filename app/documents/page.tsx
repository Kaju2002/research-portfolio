import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Downloads from "@/components/Downloads";

export const metadata: Metadata = {
  title: "Documents",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title="Project documents"
        description="Every document produced during the research project, from the Topic Assessment Form to the final thesis, including those still in progress."
      />
      <Downloads category="Document" />
    </>
  );
}
