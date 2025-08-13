import { Helmet } from "react-helmet-async";

const SEOComponent = ({
  title = "ODINN",
  description = "ODINN is the most popular and powerful e-commerce website which serve Khmer products",
  keywords = "ODINN, ecommerce, Khmer products, Cambodia shopping, online store",
  author = "ODINN Team",
  image = "https://opengraph.b-cdn.net/production/images/16a52f19-59a6-4e9f-bd50-d5018ae93d06.png?token=hVcEpgJOcZll7a0RsYhbgY8_Hy5f70K9t5rFTKUWcdU&height=675&width=1200&expires=33291051276",
  url = window.location.href,
  type = "website",
  siteName = "ODINN",
  twitterHandle = "@ODINN_Cambodia",
  lang = "en",
  canonicalUrl,
  robots = "index, follow",
  structuredData,
  additionalMetaTags = [],
  additionalLinks = []
}) => {
  const fullTitle = title === "ODINN" ? title : `${title} | ${siteName}`;
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  const fullImageUrl = image;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="github.com" />
      <meta property="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Dynamic Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Dynamic Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} {...link} />
      ))}
    </Helmet>
  );
};

export default SEOComponent;