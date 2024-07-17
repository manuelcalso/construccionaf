// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Obras", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Multiservicios",
    links: [
      { name: "Obras", url: "/blog" },
      { name: "Productos", url: "/products" },
      { name: "Servicios", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Nosotros", url: "#" },
      { name: "Empleos", url: "/contact" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/arquitecturafotovoltaica",
  x: "https://twitter.com/",
  github: "https://https://github.com/manuelcalso",
  linkedIn: "https://linkedin.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};