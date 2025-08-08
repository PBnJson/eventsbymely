import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import MobileNavWrapper from "./MobileNavWrapper";

interface HeaderProps {
  logoSrc?: string;
  businessName?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

export function Header({
  logoSrc = siteConfig.site.logo,
  businessName = siteConfig.business.name,
  navLinks = siteConfig.navigation.main,
}: HeaderProps = {}) {
  return (
    <header className="bg-[#f54d80] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        <Link
          href="/"
          className="flex items-center text-xl md:text-2xl font-bold font-heading"
        >
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={`${businessName} logo`}
              width={80}
              height={80}
              className="p-1 mr-2"
            />
          )}
          <span className="uppercase tracking-wide">{businessName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-center uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavWrapper />
      </div>
    </header>
  );
}
