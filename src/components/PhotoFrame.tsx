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
    <div className={`relative inline-block ${className}`}>
      <div
        className={`
          relative bg-white p-2 
          shadow-xl 
          ${rotate ? "transform rotate-1 hover:rotate-0" : ""} 
          transition-transform duration-300
        `}
        style={{
          boxShadow:
            "0 4px 6px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.06)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
        {/* Inner white border */}
        <div className="absolute inset-0 border-8 border-white pointer-events-none" />
      </div>
    </div>
  );
}
