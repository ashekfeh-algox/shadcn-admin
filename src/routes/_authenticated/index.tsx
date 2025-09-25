import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: () => {
    return <div>Home Page</div>;
  },
});
