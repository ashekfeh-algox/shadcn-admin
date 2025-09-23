import { Cities } from "@/features/cities";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/cities/")({
  component: Cities,
});
