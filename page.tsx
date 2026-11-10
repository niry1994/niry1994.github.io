import type { Metadata } from "next";

import { Storefront } from "@/components/storefront/storefront";

export const metadata: Metadata = {
  title: "Boutique de démonstration — Atelier",
  description:
    "Découvrez une boutique exemple et testez un parcours de commande sans paiement réel.",
};

export default function BoutiquePage() {
  return <Storefront />;
}
