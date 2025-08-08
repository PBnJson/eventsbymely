import Image from "next/image";

interface PhotoFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rotate?: boolean;
}

export function PhotoFrame({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  rotate = true,
}: PhotoFrameProps) {
  return (
    <div className={`inline-block ${className}`}>
      <div
        className={`
          relative bg-white p-2 shadow-xl 
          transition-all duration-300 
          hover:scale-105 hover:rotate-0
          ${rotate ? "rotate-[2deg]" : "-rotate-[1deg]"}
        `}
        style={{
          boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
        />
        {/* Inner white border */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ border: "8px solid white" }}
        />
      </div>
    </div>
  );
}
