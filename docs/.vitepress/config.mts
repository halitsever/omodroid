import { defineConfig } from "vitepress";

const site = "https://halitsever.github.io/omodroid/";
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

export default defineConfig({
  base: "/omodroid/",
  lang: "en",
  title: "Omodroid",
  titleTemplate: ":title | Omodroid",
  description,
  cleanUrls: true,
  appearance: "force-dark",
  sitemap: { hostname: site },

  head: [
    /** Cloudflare Web Analytics, one token for every page on halitsever.github.io. */
    ["script", { defer: "", src: "https://static.cloudflareinsights.com/beacon.min.js", "data-cf-beacon": '{"token": "dd7e54d3f48841c187d72d9dbb92a6b6"}' }],
    ["link", { rel: "icon", href: "/omodroid/favicon.png", sizes: "32x32", type: "image/png" }],
    ["link", { rel: "icon", href: "/omodroid/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#1f2937" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Omodroid" }],
    ["meta", { property: "og:image", content: `${site}og.png` }],
    ["meta", { property: "og:image:width", content: "1280" }],
    ["meta", { property: "og:image:height", content: "640" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["script", { type: "application/ld+json" }, JSON.stringify(jsonLd)],
  ],

  transformPageData(pageData) {
    const isHome = pageData.frontmatter.layout === "home";
    const title = pageData.frontmatter.title ?? pageData.title;
    const url = site + pageData.relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { property: "og:title", content: isHome ? homeTitle : `${title} | Omodroid` }],
      ["meta", { property: "og:description", content: pageData.frontmatter.description ?? description }],
    );
  },

  transformHtml(html) {
    // The site is dark only and has no icon font, so these tags do nothing.
    return html.replace(/<link[^>]*vp-icons\.css[^>]*>\s*/g, "").replace(/<script id="check-(?:dark-mode|mac-os)">[\s\S]*?<\/script>\s*/g, "");
  },
});
