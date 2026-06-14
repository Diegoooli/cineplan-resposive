import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cineminha — Filmes são melhores com você" },
      { name: "description", content: "Crie listas de filmes para assistir junto com o seu par." },
      { property: "og:title", content: "Cineminha — Filmes são melhores com você" },
      { property: "og:description", content: "Crie listas de filmes para assistir junto com o seu par." },
    ],
  }),
  component: Home,
});
