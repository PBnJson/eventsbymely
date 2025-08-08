// Site configuration for the event planning website template
// This file contains all business-specific data to make the template reusable

export const siteConfig = {
  // Business Information
  business: {
    name: "Events by Mely",
    tagline: "Balloon Arches & Decor Company",
    owner: {
      name: "Mely Soto",
      title: "Owner & Lead Designer",
      bio: "I specialize in creating stunning balloon designs, decor, and installations for any event.",
      quote: "Every event deserves quality decor!",
    },
    contact: {
      email: "hello@eventsbymely.com",
      phone: "(555) 123-4567",
      address: {
        street: "123 Main Street",
        city: "Dallas",
        state: "TX",
        zip: "75201",
        area: "DFW", // For geo-targeting
      },
    },
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "9:00 AM - 6:00 PM",
    },
  },

  // Website Settings
  site: {
    url: "https://eventsbymely.com", // Update this to your domain
    // logo: "/images/logo.png", // Add your logo to public/images/
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.png",
    logo: "/images/logo.svg",
  },

  // Navigation Links
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Grab & Go", href: "/grab-and-go" },
      { label: "Custom Installation", href: "/custom-install" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // Social Media Links
  social: {
    instagram: "https://www.instagram.com/eventsbymely",
    facebook: "https://www.facebook.com/eventsbymely",
    twitter: "https://twitter.com/eventsbymely",
    pinterest: "https://pinterest.com/eventsbymely",
    tiktok: "https://www.tiktok.com/@eventsbymely",
    youtube: "https://www.youtube.com/@eventsbymely",
    linkedin: "https://www.linkedin.com/in/eventsbymely",
    x: "https://x.com/eventsbymely",
    snapchat: "https://www.snapchat.com/eventsbymely",
  },

  // SEO Configuration
  seo: {
    defaultTitle: "Events by Mely | Luxury Balloon Arches & Decor",
    titleTemplate: "%s | Events by Mely",
    description:
      "Professional balloon arches, custom installations, and grab-and-go decor for events. Serving Dallas-Fort Worth since 2023.",
    keywords: [
      "balloon arch",
      "balloon arches",
      "balloon decor",
      "event planning",
      "party decorations",
      "DFW events",
      "Dallas balloon artist",
      "Fort Worth party decor",
      "custom balloon installations",
      "grab and go balloons",
      "balloon decor company",
      "balloon decor company dfw",
      "balloon decor company dallas",
      "balloon decor company fort worth",
      "balloon decor company texas",
      "balloon decor company texas",
      "luxury balloon arches",
      "luxury decor",
      "luxury decor company",
      "luxury decor company dfw",
      "luxury decor company dallas",
      "luxury decor company fort worth",
      "luxury decor company texas",
      "luxury decor company texas",
    ],
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      siteName: "Events by Mely",
    },
    twitter: {
      handle: "@eventsbymely",
      cardType: "summary_large_image" as const,
    },
  },

  // Services Configuration
  services: {
    grabAndGo: {
      title: "Grab & Go",
      description: "Quick and easy balloon arrangements ready for pickup",
      features: [
        "Pre-designed arrangements",
        "Same-day pickup available",
        "Perfect for last-minute celebrations",
        "Budget-friendly options",
      ],
      priceRange: "$25 - $150",
    },
    customInstallation: {
      title: "Custom Installation",
      description:
        "Bespoke balloon designs professionally installed at your venue",
      features: [
        "Personalized design consultation",
        "Professional installation & breakdown",
        "Indoor & outdoor options",
        "Corporate events welcome",
      ],
      priceRange: "Starting at $250",
    },
  },

  // Event Types (for custom installation page)
  eventTypes: [
    "Weddings",
    "Birthday Parties",
    "Baby Showers",
    "Corporate Events",
    "Grand Openings",
    "Graduation Parties",
    "Anniversary Celebrations",
    "Holiday Parties",
    "Baby Showers",
    "Gender Reveals",
    "Sports Events",
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        "The balloon arch was absolutely stunning! It made our wedding reception magical.",
      author: "Sarah Johnson",
      role: "Bride",
      rating: 5,
    },
    {
      quote:
        "Professional, creative, and so easy to work with. Highly recommend!",
      author: "Michael Chen",
      role: "Corporate Event Planner",
      rating: 5,
    },
    {
      quote:
        "My daughter's birthday party was a hit thanks to the amazing balloon decorations!",
      author: "Emily Rodriguez",
      role: "Happy Parent",
      rating: 5,
    },
  ],

  // Gallery Images
  gallery: {
    featured: [
      {
        src: "/images/fullSpaceBallonDecor.png",
        alt: "Full space balloon decoration for grand opening",
        category: "Corporate",
      },
      {
        src: "/images/MermaidTheme.png",
        alt: "Mermaid themed balloon arch for birthday party",
        category: "Birthday",
      },
      {
        src: "/images/MarbleTealAndGold.png",
        alt: "Elegant marble teal and gold balloon installation",
        category: "Wedding",
      },
    ],
  },

  // Form Configuration
  forms: {
    contact: {
      fields: [
        { name: "name", label: "Your Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: false },
        {
          name: "eventDate",
          label: "Event Date",
          type: "date",
          required: false,
        },
        {
          name: "eventType",
          label: "Event Type",
          type: "select",
          options: ["Wedding", "Birthday", "Corporate", "Other"],
          required: false,
        },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
      submitLabel: "Send Message",
    },
    quote: {
      fields: [
        { name: "name", label: "Your Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: true },
        {
          name: "eventDate",
          label: "Event Date",
          type: "date",
          required: true,
        },
        {
          name: "eventType",
          label: "Event Type",
          type: "select",
          options: ["Wedding", "Birthday", "Corporate", "Other"],
          required: true,
        },
        {
          name: "venue",
          label: "Venue/Location",
          type: "text",
          required: true,
        },
        {
          name: "budget",
          label: "Estimated Budget",
          type: "select",
          options: ["Under $250", "$250-$500", "$500-$1000", "Over $1000"],
          required: false,
        },
        {
          name: "details",
          label: "Event Details & Vision",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Request Quote",
    },
  },

  // Footer Configuration
  footer: {
    copyright: `© ${new Date().getFullYear()} Balloon Arch Events. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  // Theme Colors (matches your Tailwind config)
  theme: {
    colors: {
      primary: "#f54d80", // Testing red, should be #f54d80
      secondary: "#8fd4bf", // Green
      accent: "#d6c304", // Yellow
      beige: "#f5f5dc", // Light beige
    },
  },
};

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
export type NavigationItem = (typeof siteConfig.navigation.main)[0];
export type Testimonial = (typeof siteConfig.testimonials)[0];
export type GalleryImage = (typeof siteConfig.gallery.featured)[0];
export type FormField = (typeof siteConfig.forms.contact.fields)[0];
