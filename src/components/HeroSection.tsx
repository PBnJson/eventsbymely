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
    <section className="text-center py-12 bg-beige space-y-6">
      {" "}
      {/* Above-fold hero with beige bg */}
      <h1 className="text-5xl font-bold" style={{ color: "#f54d80" }}>
        {businessName}
      </h1>
      <p className="text-2xl text-secondary">Balloon Arches & Decor Co.</p>{" "}
      {/* Adapted subheading */}
      <p className="max-w-2xl mx-auto text-lg text-secondary">
        Hi! I&apos;m {ownerName}, the owner and lead designer. {description}
      </p>
      <p className="italic text-accent text-xl">&quot;{quote}&quot;</p>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={600}
        className="mx-auto rounded-lg shadow-xl"
        priority // For above-fold loading
      />
    </section>
  );
}
