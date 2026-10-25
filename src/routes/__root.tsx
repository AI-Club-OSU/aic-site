import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import styles from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "AI Club @ OSU" },
      {
        name: "description",
        content:
          "The Artificial Intelligence Club at Oregon State University. Explore AI through student projects, workshops, and industry connections. All experience levels welcome.",
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { rel: "icon", href: "/assets/ai_logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
  component: () => (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
  notFoundComponent: () => (
    <section className="max-w-site mx-auto px-7 py-20">
      <h1 className="font-display text-3xl font-bold mb-4">Page not found</h1>
      <Link to="/" className="text-brick underline">
        Return home
      </Link>
    </section>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-paper text-ink font-body leading-relaxed">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
