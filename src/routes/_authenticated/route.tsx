import { createFileRoute } from "@tanstack/react-router";
import { AuthenticatedLayout } from "@/layout/layouts/authenticated";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});
