import { HeroSection } from "@/components/HeroSection";
import { siteConfig } from "@/config/siteConfig";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        ownerName={siteConfig.business.owner.name}
        businessName={siteConfig.business.name}
        description={siteConfig.business.owner.bio}
        quote={siteConfig.business.owner.quote}
        imageSrc="/images/fullSpaceBallonDecor.png"
        imageAlt="Beautiful balloon decoration showcase"
      />

      {/* TODO: Add more sections here */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                {siteConfig.services.grabAndGo.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {siteConfig.services.grabAndGo.description}
              </p>
              <p className="text-accent font-semibold">
                {siteConfig.services.grabAndGo.priceRange}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                {siteConfig.services.customInstallation.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {siteConfig.services.customInstallation.description}
              </p>
              <p className="text-accent font-semibold">
                {siteConfig.services.customInstallation.priceRange}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-beige p-6 rounded-lg">
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
