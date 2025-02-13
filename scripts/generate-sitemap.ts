import fs from "fs";
import path from "path";
import { languages, routes } from "~/i18n/ui";
import glob from "fast-glob";
import matter from "gray-matter";

type LanguageCode = keyof typeof languages;
type RoutesType = Record<string, string>;

const availableLanguages: LanguageCode[] = Object.keys(languages) as LanguageCode[];

function getLastModified(routeKey: string): string {
  let latestDate: Date | null = null;

  for (const lang of availableLanguages) {
    const routeMap: RoutesType = routes[lang] || {};
    if (routeMap[routeKey]) {
      let filePath = path.resolve(`src/pages/${routeMap[routeKey]}.astro`);
      try {
        if (!fs.existsSync(filePath)) {
          filePath = path.resolve(`src/pages/${routeMap[routeKey]}.mdx`);
        }

        if (!fs.existsSync(filePath)) {
          filePath = path.resolve(`src/pages/${routeMap[routeKey]}/index.astro`);
        }

        if (!fs.existsSync(filePath)) {
          filePath = path.resolve(`src/pages/${routeMap[routeKey]}/index.mdx`);
        }

        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          if (!latestDate || stats.mtime > latestDate) {
            latestDate = stats.mtime;
          }
        }
      } catch (error) {
        console.warn(`Could not get modification date for ${filePath}`);
      }
    }
  }

  if (!latestDate) {
    console.log(`File not found route: ${routeKey}`);
  }

  return latestDate ? latestDate.toISOString() : new Date().toISOString();
}

async function getBlogPosts(): Promise<Array<{ slug: string; lang: string; publishDate: string }>> {
  const postFiles = await glob("src/data/post/**/*.{md,mdx}");

  return postFiles.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    const slug = path.basename(filePath, path.extname(filePath));
    
    const pathParts = filePath.split('/');
    const lang = availableLanguages.includes(pathParts[3] as LanguageCode) 
      ? (pathParts[3] as LanguageCode) 
      : null;

      const publishDate = data.publishDate ? new Date(data.publishDate).toISOString() : new Date().toISOString();

    return lang ? { slug, lang, publishDate } : null;
  }).filter((post) => post !== null);
}

async function generateSitemap(): Promise<void> {
  const siteUrl = 'https://www.gilsys.com';
  let sitemapEntries = "";

  const excludedRoutes = new Set(["privacy-policy", "cookie-policy", "terms"]);

  const routeKeys = new Set(
    availableLanguages.flatMap((lang) => 
      Object.keys(routes[lang] || {}).filter((route) => !excludedRoutes.has(route))
    )
  );

  const posts = await getBlogPosts();

  const latestPostDate = (posts.length > 0 
  ? new Date(Math.max(...posts.map(post => new Date(post.publishDate).getTime()))) 
  : new Date()).toISOString();

  for (const key of routeKeys) {
    let urlSet = "";
    let primaryUrl: string | null = null;

    for (const lang of availableLanguages) {
      const routeMap: RoutesType = routes[lang] || {};
      if (routeMap[key]) {
        const langCode = languages[lang]?.code || lang;
        const langUrl = `${siteUrl}${routeMap[key]}`;

        if (!primaryUrl) {
          primaryUrl = langUrl;
        }

        urlSet += `
          <xhtml:link 
            rel="alternate" 
            hreflang="${langCode}" 
            href="${langUrl}" />`;
      }
    }

    if (!primaryUrl) {
      continue;
    }

    sitemapEntries += `
      <url>
        <loc>${primaryUrl}</loc>
        ${urlSet}
        <lastmod>${key === 'blog' ? latestPostDate : getLastModified(key)}</lastmod>
      </url>`;
  }

  for (const post of posts) {
    const postUrl = siteUrl + `/%lang%/blog/%slug%`.replace('%slug%', post.slug).replace('%lang%', post.lang);

    sitemapEntries += `
      <url>
        <loc>${postUrl}</loc>
        <lastmod>${post.publishDate}</lastmod>
      </url>`;
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${sitemapEntries}
  </urlset>`;

  const outputFile = "/dist/sitemap.xml";
  const outputPath = path.resolve("." + outputFile);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, sitemapXml);

  console.log(`Sitemap generated in ${outputFile}`);
}

generateSitemap().catch((err) => console.error("Sitemap error:", err));
