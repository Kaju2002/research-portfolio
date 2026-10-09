import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DomainNav from "@/components/DomainNav";
import LiteratureSurvey from "@/components/LiteratureSurvey";
import ResearchScope from "@/components/ResearchScope";
import Objectives from "@/components/Objectives";
import Methodology from "@/components/Methodology";
import Technologies from "@/components/Technologies";

export const metadata: Metadata = {
  title: "Domain",
};

export default function DomainPage() {
  return (
    <>
      <PageHeader
        eyebrow="Domain"
        title="Research domain"
        description="The literature survey, research gap, research problem, objectives, methodology and technologies behind the project."
      />
      <DomainNav />
      <LiteratureSurvey />
      <ResearchScope />
      <Objectives />
      <Methodology />
      <Technologies />
    </>
  );
}
