import { writeFileSync } from "fs";
import { resolve } from "path";

// Base site URL
const BASE_URL = "https://wwww.epsso.com.br";

// Static routes (add all you want indexed)
const routes = [
  "/",
  "/sobre-a-epsso",
  "/servicos/seguranca-do-trabalho",
  "/servicos/medicina-do-trabalho",
  "/servicos/ergonomia-e-fisioterapia",
  "/servicos/gestao-de-terceirizados",
  "/servicos/gestao-de-informacoes",
  "/servicos/assessoria-juridica",
  "/cursos-e-treinamentos",
  "/blog",
  "/fale-conosco",
  "/trabalhe-conosco",
];

// Generate XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Write to public/sitemap.xml
const filePath = resolve("public", "sitemap.xml");
writeFileSync(filePath, sitemap, "utf8");
