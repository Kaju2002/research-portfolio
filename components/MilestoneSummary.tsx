"use client";

import { useMilestones } from "@/lib/useMilestones";

export function MilestoneFact() {
  const milestones = useMilestones();
  const completed = milestones.filter((m) => m.status === "completed").length;
  return `${completed} of ${milestones.length} completed`;
}

export function MilestoneNext() {
  const next = useMilestones().find((m) => m.status !== "completed");
  return next ? `Next: ${next.title}, ${next.date}` : "All milestones completed.";
}
