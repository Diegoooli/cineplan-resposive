import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: NotFound,
});

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 px-6">
      <h1 className="max-w-2xl text-center text-2xl font-semibold text-white">
        Ta louca querida? ta fazendo o que aqui? se manca!
      </h1>
    </div>
  );
}
