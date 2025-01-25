// An array of links for navigation barrr
const navBarLinks = [
  { name: "Inicio", url: "/" },
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
  facebook: "https://juancalleros.com/",
  x: "https://juancalleros.com/",
  github: "https://juancalleros.com/",
  linkedIn: "https://juancalleros.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};