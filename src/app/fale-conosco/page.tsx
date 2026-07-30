import type { Metadata } from "next";
import RedirectToWhatsapp from "./RedirectToWhatsapp";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FaleConosco() {
  return <RedirectToWhatsapp />;
}
