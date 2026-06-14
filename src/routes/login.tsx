import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/login";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — Cineminha" },
      { name: "description", content: "Entre na sua conta do Cineminha e continue de onde parou." },
      { property: "og:title", content: "Entrar — Cineminha" },
      { property: "og:description", content: "Entre na sua conta do Cineminha e continue de onde parou." },
    ],
  }),
  component: Login,
});
