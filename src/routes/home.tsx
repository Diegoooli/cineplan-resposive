import { createFileRoute } from "@tanstack/react-router";
import AppLayout from "../components/AppLayout";
import HomeApp from "../pages/homeApp";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Nossas Listas — Cineminha" },
      { name: "description", content: "Veja e organize as listas de filmes do casal." },
      { property: "og:title", content: "Nossas Listas — Cineminha" },
      { property: "og:description", content: "Veja e organize as listas de filmes do casal." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <AppLayout>
      <HomeApp />
    </AppLayout>
  );
}
