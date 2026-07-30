"use client";

import { useEffect } from "react";
import { whatsappLink } from "@/lib/site-data";

export default function RedirectToWhatsapp() {
  useEffect(() => {
    window.location.replace(whatsappLink);
  }, []);

  return (
    <p style={{ padding: "2rem", textAlign: "center" }}>
      Redirecionando para o WhatsApp... Se não for redirecionado,{" "}
      <a href={whatsappLink}>clique aqui</a>.
    </p>
  );
}
