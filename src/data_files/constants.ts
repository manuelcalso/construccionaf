import ogImageSrc from "@images/construccionafpage.png";

export const SITE = {
  title: "Arquitectura Fotovoltaica | Construccion Multiservicios",
  tagline: "Construcción y Automatización Residencial",
  description: "Empresa constructora 100% mexicana, fundada en 1988, especializada en construcción y automatización residencial. Ofrecemos proyectos innovadores que ahorran energía y capital, cumpliendo con todos los estándares de calidad y vanguardia en diseño arquitectónico multiservicios.",
  description_short: "Empresa mexicana de construcción y automatización residencial, ofreciendo proyectos innovadores y eficientes.",
  url: "#",  // Actualiza esto con el URL real de tu empresa
  author: "Juan Calleros",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} | Construcción Multiservicios Residencial`,
  description: "Empresa constructora 100% mexicana, fundada en 1988. Especializada en construcción y automatización residencial, ofrece proyectos innovadores que ahorran energía y capital, cumpliendo con los más altos estándares de calidad y vanguardia en diseño arquitectónico multiservicios. Empieza tu proxima construccion!",
  image: ogImageSrc,  
};

