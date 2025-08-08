import { HeroSection } from "@/components/HeroSection";
import { PhotoFrame } from "../components/PhotoFrame";
import { siteConfig } from "@/config/siteConfig";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        ownerName={siteConfig.business.owner.name}
        businessName={siteConfig.business.name}
        description={siteConfig.business.owner.bio}
        quote={siteConfig.business.owner.quote}
        imageSrc="/images/hero.jpg"
        imageAlt="Professional balloon arch installation showcase"
      />

      {/* Services Section with better styling */}
      <section className="py-16 px-4 bg-[#f5f5dc]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#f54d80" }}
          >
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "#8fd4bf" }}
                >
                  {siteConfig.services.grabAndGo.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {siteConfig.services.grabAndGo.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {siteConfig.services.grabAndGo.features.map(
                    (feature, index) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
                <p className="text-xl font-bold" style={{ color: "#d6c304" }}>
                  {siteConfig.services.grabAndGo.priceRange}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "#8fd4bf" }}
                >
                  {siteConfig.services.customInstallation.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {siteConfig.services.customInstallation.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {siteConfig.services.customInstallation.features.map(
                    (feature, index) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
                <p className="text-xl font-bold" style={{ color: "#d6c304" }}>
                  {siteConfig.services.customInstallation.priceRange}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#f54d80" }}
          >
            Recent Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.gallery.featured.map((image, index) => (
              <PhotoFrame
                key={index}
                src={image.src}
                alt={image.alt}
                rotate={index % 2 === 0}
                className="mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with better styling */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffd4e3" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#f54d80" }}
          >
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{"⭐".repeat(testimonial.rating)}</div>
                <p className="italic text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
