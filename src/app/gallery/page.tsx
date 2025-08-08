import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-primary/10 p-8 rounded-lg mb-8">
          <h1 className="text-3xl font-bold text-primary">Gallery</h1>
          <p className="text-lg mt-2">Browse our stunning balloon creations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://placehold.co/400x300/f54d80/ffffff/Balloon+Arch+1"
            alt="Pink balloon arch"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-full"
          />
          <Image
            src="https://placehold.co/400x300/8fd4bf/ffffff/Balloon+Arch+2"
            alt="Green balloon arch"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-full"
          />
          <Image
            src="https://placehold.co/400x300/d6c304/ffffff/Balloon+Arch+3"
            alt="Yellow balloon arch"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-full"
          />
          <Image
            src="https://placehold.co/400x300/f54d80/ffffff/Balloon+Arch+4"
            alt="Pink balloon arch variation"
            width={400}
            height={300}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
}
