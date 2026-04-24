import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  locale?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
};

const SITE_URL = "https://cenk.dev";
const DEFAULT_IMAGE = "https://cenk.dev/ck-og.svg";
const TWITTER_HANDLE = "@vcenkkarakuz";

const upsertMeta = (
  selector: string,
  attributes: Record<string, string>,
  content?: string
) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });

  if (typeof content === "string") {
    element.setAttribute("content", content);
  }
};

const upsertLink = (rel: string, href: string, attrs?: Record<string, string>) => {
  const selector = attrs?.hreflang
    ? `link[rel="${rel}"][hreflang="${attrs.hreflang}"]`
    : `link[rel="${rel}"]`;
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => link?.setAttribute(key, value));
  }
};

const SEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  schema,
  locale = "en_CA",
  geoRegion = "CA-BC",
  geoPlacename = "Vancouver",
  geoPosition = "49.2827;-123.1207",
}: SEOProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;

    // Core
    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, keywords ?? "");
    upsertMeta('meta[name="author"]', { name: "author" }, "Cenk Karakuz");
    upsertMeta(
      'meta[name="robots"]',
      { name: "robots" },
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"
    );
    upsertMeta(
      'meta[name="googlebot"]',
      { name: "googlebot" },
      noindex ? "noindex, nofollow" : "index, follow"
    );

    // Geo (Vancouver, BC, Canada by default)
    upsertMeta('meta[name="geo.region"]', { name: "geo.region" }, geoRegion);
    upsertMeta('meta[name="geo.placename"]', { name: "geo.placename" }, geoPlacename);
    upsertMeta('meta[name="geo.position"]', { name: "geo.position" }, geoPosition);
    upsertMeta('meta[name="ICBM"]', { name: "ICBM" }, geoPosition.replace(";", ", "));

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, type);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, url);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width" }, "1200");
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height" }, "630");
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, title);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "Cenk Karakuz");
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, locale);

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:site"]', { name: "twitter:site" }, TWITTER_HANDLE);
    upsertMeta('meta[name="twitter:creator"]', { name: "twitter:creator" }, TWITTER_HANDLE);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }, title);

    // Theme color
    upsertMeta('meta[name="theme-color"]', { name: "theme-color" }, "#0a0a0a");

    // Canonical + hreflang
    upsertLink("canonical", url);
    upsertLink("alternate", url, { hreflang: "en-ca" });
    upsertLink("alternate", url, { hreflang: "x-default" });

    // JSON-LD schema
    const existingSchema = document.getElementById("seo-json-ld");
    if (existingSchema) existingSchema.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = "seo-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaNode = document.getElementById("seo-json-ld");
      if (schemaNode) schemaNode.remove();
    };
  }, [title, description, path, keywords, image, type, noindex, schema, locale, geoRegion, geoPlacename, geoPosition]);

  return null;
};

export default SEO;
