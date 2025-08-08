import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

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
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold font-heading"
        >
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={`${businessName} logo`}
              width={40}
              height={40}
              className="rounded"
            />
          )}
          {businessName}
        </Link>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
