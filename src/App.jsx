import "./App.css";
import { useGetProductsQuery } from "./features/product/productSlice2";
import CardProduct from "./components/card/card-product";
import SkeletonCardProduct from "./components/card/skeleton-card-product";
import SEOComponent from "./components/SEO/SEOComponent.jsx";

function App() {
  const { data, isLoading } = useGetProductsQuery();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  // SEO structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ODINN",
    "description": "ODINN is the most popular and powerful e-commerce website which serve Khmer products",
    "url": window.location.origin,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${window.location.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Additional structured data for organization
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ODINN",
    "description": "Cambodia's leading e-commerce platform for Khmer products",
    "url": window.location.origin,
    "logo": "https://opengraph.b-cdn.net/production/images/16a52f19-59a6-4e9f-bd50-d5018ae93d06.png?token=hVcEpgJOcZll7a0RsYhbgY8_Hy5f70K9t5rFTKUWcdU&height=675&width=1200&expires=33291051276",
    "sameAs": [
      "https://github.com/soengyanut/implement-SEO"
    ]
  };

  return (
    <>
      {/* SEO Implementation */}
      <SEOComponent
        title="ODINN - Cambodia's Premier E-commerce Platform"
        description="Discover authentic Khmer products on ODINN. Shop traditional crafts, local goods, and cultural items from Cambodia's finest artisans and merchants."
        keywords="ODINN, Cambodia ecommerce, Khmer products, traditional crafts, local shopping, Cambodian marketplace, authentic products, cultural items"
        type="website"
        structuredData={[structuredData, organizationData]}
        additionalMetaTags={[
          { name: "geo.region", content: "KH" },
          { name: "geo.country", content: "Cambodia" },
          { name: "language", content: "English, Khmer" },
          { name: "rating", content: "General" },
          { name: "coverage", content: "Worldwide" },
          { name: "distribution", content: "Global" }
        ]}
        additionalLinks={[
          { rel: "preconnect", href: "https://fonts.googleapis.com" },
          { rel: "dns-prefetch", href: "//cdn.jsdelivr.net" }
        ]}
      />

      <main className="max-w-screen-xl mx-auto">
       
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Welcome to ODINN
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Discover authentic Khmer products and support local artisans. 
            Shop traditional crafts, cultural items, and unique goods from Cambodia's finest merchants.
          </p>
        </header>

        {/* Products Section */}
        <section className="grid grid-cols-4 gap-5">
          <h2 className="col-span-4 text-2xl font-semibold text-gray-800 mb-4">
            Featured Products
          </h2>
          
          {isLoading &&
            array.map((index) => <SkeletonCardProduct key={index} />)}
          
          {/* Product section with enhanced SEO */}
          {!isLoading &&
            data?.content.map((p, index) => (
              <article key={index} itemScope itemType="https://schema.org/Product">
                <meta itemProp="name" content={p.name} />
                <meta itemProp="image" content={p.thumbnail} />
                <meta itemProp="description" content={`${p.name} - Available on ODINN`} />
                
                <CardProduct
                  thumbnail={p.thumbnail}
                  title={p.name}
                  id={p.uuid}
                />
              </article>
            ))}
        </section>

        {/* Additional SEO Content */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose ODINN?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Authentic Khmer Products
              </h3>
              <p className="text-gray-600">
                Discover genuine traditional crafts and cultural items made by local artisans
              </p>
            </article>
            <article className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Support Local Communities
              </h3>
              <p className="text-gray-600">
                Every purchase helps support Cambodian craftspeople and their families
              </p>
            </article>
            <article className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Safe shopping experience with trusted payment methods and reliable delivery
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;