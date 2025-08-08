import Image from "next/image";
import Link from "next/link";

export default function CustomInstallation() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-accent/10 p-8 rounded-lg mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Custom Installation
          </h1>
          <p className="text-lg mt-4">
            Transform your venue with our bespoke balloon installations
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personalized design consultation</li>
              <li>Professional installation and breakdown</li>
              <li>Indoor and outdoor setups</li>
              <li>Corporate events, weddings, and celebrations</li>
            </ul>
          </section>

          <Image
            src="https://placehold.co/600x400/d6c304/ffffff/Custom+Balloon+Setup"
            alt="Custom balloon installation"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-md"
          />

          <section>
            <h2 className="text-2xl font-semibold text-accent">Get Started</h2>
            <p className="mb-4">Contact us for a custom quote today!</p>
            <a
              href="/contact"
              className="inline-block bg-accent text-white px-4 py-2 rounded hover:bg-primary transition"
            >
              Request Quote
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
