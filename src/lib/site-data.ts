export const siteInfo = {
  name: "Potencial Entulho",
  url: "https://potencialentulho.com",
  description:
    "Locação de caçambas estacionárias para obras, reformas e demolições em Salvador e Região Metropolitana. Entrega rápida e destinação ambientalmente correta.",
  address: "Cabula — Salvador, Bahia",
  addressLocality: "Salvador",
  addressRegion: "BA",
  addressCountry: "BR",
  phone: "(71) 99726-6286",
  phoneE164: "+5571997266286",
  whatsappNumber: "5571997266286",
  email: "potencialentulho@gmail.com",
  hours: "Seg–Sáb: 07h às 18h",
  areaServed: ["Salvador", "Lauro de Freitas", "Camaçari", "Região Metropolitana de Salvador"],
  ogImage: "https://potencialentulho.com/caçamba-estacionaria.png",
};

const whatsappDefaultMessage =
  "Olá! Vim através do site e gostaria de um orçamento de aluguel de caçambas estacionárias para entulho.";

export const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMessage)}`;
