import Image from "next/image";

interface HeroSectionProps {
  ownerName: string;
  businessName: string;
  description: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  ownerName,
  businessName,
  description,
  quote,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="text-center py-12 bg-beige space-y-6 px-4">
      {/* Above-fold hero with beige bg */}
      <h1 className="text-5xl font-bold" style={{ color: "#f54d80" }}>
        {businessName}
      </h1>
      <p className="italic text-accent text-xl">&quot;{quote}&quot;</p>

      {/* Responsive image container */}
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow-xl"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority // For above-fold loading
        />
      </div>
    </section>
  );
}
