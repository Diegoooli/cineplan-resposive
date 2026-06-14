import { createFileRoute } from "@tanstack/react-router";
import SignIn from "../pages/signin";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Criar conta — Cineminha" },
      { name: "description", content: "Crie sua conta no Cineminha e conecte com o seu par." },
      { property: "og:title", content: "Criar conta — Cineminha" },
      { property: "og:description", content: "Crie sua conta no Cineminha e conecte com o seu par." },
    ],
  }),
  component: SignIn,
});
