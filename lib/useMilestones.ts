"use client";

import { useSyncExternalStore } from "react";
import { resolveMilestones } from "@/data/research";

const subscribe = () => () => {};

const getToday = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Colombo" });

// The server render uses the build date; the browser then switches to the real date.
const getBuildDate = () => process.env.BUILD_DATE ?? "";

export function useMilestones() {
  const today = useSyncExternalStore(subscribe, getToday, getBuildDate);
  return resolveMilestones(today);
}
