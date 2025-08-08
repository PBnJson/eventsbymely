import { siteConfig } from "@/config/siteConfig";

interface FooterProps {
  socialLinks?: typeof siteConfig.social;
  copyright?: string;
  footerLinks?: typeof siteConfig.footer.links;
}

export function Footer({
  socialLinks = siteConfig.social,
  copyright = siteConfig.footer.copyright,
  footerLinks = siteConfig.footer.links,
}: FooterProps = {}) {
  const socialPlatforms = [
    { name: "Instagram", url: socialLinks.instagram },
    { name: "Facebook", url: socialLinks.facebook },
    { name: "Twitter", url: socialLinks.twitter },
    { name: "Pinterest", url: socialLinks.pinterest },
  ].filter((platform) => platform.url); // Only show platforms with URLs

  return (
    <footer className="bg-secondary text-gray-800 p-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <p>{copyright}</p>
          <div className="flex gap-4">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label={`Visit our ${platform.name} page`}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
        {footerLinks.length > 0 && (
          <div className="border-t border-gray-300 pt-4 text-center">
            <div className="flex justify-center gap-4 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
