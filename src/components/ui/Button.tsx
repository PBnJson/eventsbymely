import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function Button({
  href,
  onClick,
  children,
  className = "",
  variant = "secondary",
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary hover:bg-secondary",
    secondary: "bg-secondary hover:bg-primary",
    accent: "bg-accent hover:bg-primary",
  };

  const baseClass = `px-4 py-2 rounded text-white transition ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
