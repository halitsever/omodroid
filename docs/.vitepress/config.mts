import { defineConfig } from "vitepress";

const site = "https://projects.halit.org/omodroid/";
const repo = "https://github.com/halitsever/omodroid";
const homeTitle = "Omodroid: planned Android launcher for Omoda 5 head unit";
const description = "Omodroid is a planned open source Android car launcher and overlay for the Omoda 5 (2023) head unit. Early stage: no code and nothing to download yet.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "@id": `${site}#source`,
  name: "Omodroid",
  description,
  url: site,
  codeRepository: repo,
  license: "https://opensource.org/licenses/MIT",
  author: { "@type": "Person", name: "Halit Sever", url: "https://github.com/halitsever" },
};

const author = { "@type": "Person", name: "Halit Sever", url: "https://github.com/halitsever" };

/** The English and Turkish launcher pages are the only translated pair. */
const pairs: Record<string, { en: string; tr: string }> = {
  "omoda-5-launcher.md": { en: "omoda-5-launcher", tr: "tr/omoda-5-launcher" },
  "tr/omoda-5-launcher.md": { en: "omoda-5-launcher", tr: "tr/omoda-5-launcher" },
};

/** BlogPosting and breadcrumbs for posts, FAQPage for any page that shows its FAQ. */
function pageJsonLd(fm: Record<string, any>, url: string) {
  const graph: object[] = [];
  if (fm.date) {
    graph.push(
      {
        "@type": "BlogPosting",
        headline: fm.headline ?? fm.title,
        description: fm.description,
        url,
        mainEntityOfPage: url,
        datePublished: fm.date,
        dateModified: fm.date,
        inLanguage: fm.lang ?? "en",
        image: `${site}og.png`,
        keywords: fm.keyword,
        author,
        publisher: author,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Omodroid", item: site },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site}blog/` },
          { "@type": "ListItem", position: 3, name: fm.headline ?? fm.title, item: url },
        ],
      },
    );
  }
  if (fm.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: fm.faq.map((f: { q: string; a: string }) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>|`/g, "") },
      })),
    });
  }
  return graph.length ? { "@context": "https://schema.org", "@graph": graph } : null;
}

export default defineConfig({
  /** keeps the page hash map out of every page's HTML, which Semrush reads as a low text-to-HTML ratio */
  metaChunk: true,
  base: "/omodroid/",
  lang: "en",
  title: "Omodroid",
  titleTemplate: ":title | Omodroid",
  description,
  cleanUrls: true,
  appearance: "force-dark",
  sitemap: { hostname: site },

  head: [
    /** Cloudflare Web Analytics, one token for every page on projects.halit.org. */
    ["script", { defer: "", src: "https://static.cloudflareinsights.com/beacon.min.js", "data-cf-beacon": '{"token": "dd7e54d3f48841c187d72d9dbb92a6b6"}' }],
    ["link", { rel: "icon", href: "/omodroid/favicon.png", sizes: "32x32", type: "image/png" }],
    ["link", { rel: "icon", href: "/omodroid/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#1f2937" }],
    ["meta", { property: "og:site_name", content: "Omodroid" }],
    ["meta", { property: "og:image", content: `${site}og.png` }],
    ["meta", { property: "og:image:width", content: "1280" }],
    ["meta", { property: "og:image:height", content: "640" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["script", { type: "application/ld+json" }, JSON.stringify(jsonLd)],
  ],

  transformPageData(pageData) {
    const fm = pageData.frontmatter;
    const isHome = fm.layout === "home";
    const title = fm.title ?? pageData.title;
    const url = site + pageData.relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
    fm.head ??= [];
    fm.head.push(
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { property: "og:type", content: fm.date ? "article" : "website" }],
      ["meta", { property: "og:title", content: isHome ? homeTitle : fm.titleTemplate === false ? title : `${title} | Omodroid` }],
      ["meta", { property: "og:description", content: fm.description ?? description }],
      ["meta", { property: "og:locale", content: fm.lang === "tr" ? "tr_TR" : "en_US" }],
    );
    const pair = pairs[pageData.relativePath];
    if (pair) {
      fm.head.push(
        ["link", { rel: "alternate", hreflang: "en", href: site + pair.en }],
        ["link", { rel: "alternate", hreflang: "tr", href: site + pair.tr }],
        ["link", { rel: "alternate", hreflang: "x-default", href: site + pair.en }],
      );
    }
    const ld = pageJsonLd(fm, url);
    if (ld) fm.head.push(["script", { type: "application/ld+json" }, JSON.stringify(ld)]);
  },

  transformHtml(html, _id, { pageData }) {
    if (pageData.frontmatter.lang === "tr") html = html.replace('<html lang="en"', '<html lang="tr"');
    // The site is dark only and has no icon font, so these tags do nothing.
    return html.replace(/<link[^>]*vp-icons\.css[^>]*>\s*/g, "").replace(/<script id="check-(?:dark-mode|mac-os)">[\s\S]*?<\/script>\s*/g, "");
  },
});
