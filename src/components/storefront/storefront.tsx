"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const products = [
  {
    id: "bougie",
    name: "Bougie des sous-bois",
    category: "Maison",
    description: "Cire végétale, notes de cèdre et de pin.",
    price: 2400,
    emoji: "🕯️",
    color: "product-card-sage",
  },
  {
    id: "tasse",
    name: "Tasse en grès",
    category: "Art de la table",
    description: "Façonnée à la main, chaque pièce est unique.",
    price: 3200,
    emoji: "☕",
    color: "product-card-clay",
  },
  {
    id: "savon",
    name: "Savon au calendula",
    category: "Soin",
    description: "Une formule douce, fabriquée en petite série.",
    price: 900,
    emoji: "🧼",
    color: "product-card-cream",
  },
  {
    id: "vase",
    name: "Vase ligne douce",
    category: "Maison",
    description: "Une silhouette épurée pour vos fleurs préférées.",
    price: 3800,
    emoji: "🏺",
    color: "product-card-blue",
  },
  {
    id: "carnet",
    name: "Carnet du quotidien",
    category: "Papeterie",
    description: "Papier recyclé, couverture couleur sauge.",
    price: 1400,
    emoji: "📔",
    color: "product-card-pink",
  },
  {
    id: "infusion",
    name: "Infusion du soir",
    category: "Épicerie",
    description: "Verveine et mélisse issues de cultures bio.",
    price: 1200,
    emoji: "🍵",
    color: "product-card-yellow",
  },
];

type Cart = Record<string, number>;

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);

export function Storefront() {
  const [cart, setCart] = useState<Cart>({});
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const cartItems = products.filter((product) => cart[product.id]);
  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const total = cartItems.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0,
  );

  function updateQuantity(productId: string, change: number) {
    setConfirmation(null);
    setCart((currentCart) => {
      const quantity = (currentCart[productId] ?? 0) + change;
      if (quantity <= 0) {
        const remainingItems = { ...currentCart };
        delete remainingItems[productId];
        return remainingItems;
      }
      return { ...currentCart, [productId]: quantity };
    });
  }

  function placeDemoOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    if (typeof firstName !== "string" || !firstName.trim() || itemCount === 0) {
      return;
    }

    setConfirmation(`Merci ${firstName.trim()} ! Votre commande de démonstration est confirmée.`);
    setCart({});
    event.currentTarget.reset();
  }

  return (
    <main className="storefront-shell min-h-screen px-5 pb-20 pt-5 sm:px-8 sm:pt-7">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-white/80 px-5 py-3 shadow-sm">
        <Link
          aria-label="Atelier, accueil"
          className="text-lg font-semibold tracking-[-0.05em] text-ink"
          href="/"
        >
          atelier
        </Link>
        <span className="rounded-full bg-forest/10 px-3 py-1.5 text-xs font-semibold text-forest">
          Boutique de démonstration
        </span>
        <a
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-forest"
          href="#panier"
        >
          Panier <span aria-label={`${itemCount} article(s)`}>({itemCount})</span>
        </a>
      </header>

      <section className="mx-auto max-w-7xl pb-8 pt-14 sm:pb-12 sm:pt-20">
        <p className="eyebrow mb-5">Des créations choisies avec soin</p>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
              Les petits plaisirs
              <br className="hidden sm:block" /> du quotidien.
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-muted">
              Une sélection d’objets faits pour durer, présentée dans une boutique
              exemple Atelier.
            </p>
          </div>
          <p className="max-w-xs rounded-2xl border border-forest/10 bg-white/70 px-4 py-3 text-sm leading-6 text-muted">
            Parcours de démonstration : aucun paiement ni envoi de commande n’est
            effectué.
          </p>
        </div>
      </section>

      {confirmation && (
        <div
          className="mx-auto mb-8 flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-forest/20 bg-white px-5 py-4 text-forest"
          role="status"
        >
          <p className="font-medium">{confirmation}</p>
          <button
            className="text-sm font-semibold underline underline-offset-4"
            onClick={() => setConfirmation(null)}
            type="button"
          >
            Fermer
          </button>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <section aria-labelledby="catalogue-title">
          <div className="mb-5 flex items-center justify-between">
            <h2
              className="text-xl font-semibold tracking-tight text-ink"
              id="catalogue-title"
            >
              Le catalogue
            </h2>
            <p className="text-sm text-muted">{products.length} créations</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                className="overflow-hidden rounded-3xl border border-ink/10 bg-white"
                key={product.id}
              >
                <div
                  aria-hidden="true"
                  className={`product-card-art ${product.color}`}
                >
                  <span>{product.emoji}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                    {product.category}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-ink">{product.name}</h3>
                    <span className="shrink-0 text-sm font-semibold text-ink">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {product.description}
                  </p>
                  <button
                    className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-forest px-4 text-sm font-semibold text-white transition-colors hover:bg-[#163d2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                    onClick={() => updateQuantity(product.id, 1)}
                    type="button"
                  >
                    {cart[product.id] ? "Ajouter un autre" : "Ajouter au panier"}
                    <span aria-hidden="true">+</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside
          aria-labelledby="cart-title"
          className="rounded-3xl border border-ink/10 bg-white p-5 sm:p-6 lg:sticky lg:top-6"
          id="panier"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-ink" id="cart-title">
              Votre panier
            </h2>
            <span className="rounded-full bg-paper px-3 py-1 text-sm font-medium text-muted">
              {itemCount}
            </span>
          </div>
          {cartItems.length === 0 ? (
            <p className="mt-5 rounded-2xl bg-paper px-4 py-5 text-sm leading-6 text-muted">
              Votre panier est vide. Ajoutez une création pour commencer.
            </p>
          ) : (
            <>
              <ul className="mt-5 divide-y divide-ink/10">
                {cartItems.map((product) => (
                  <li className="py-4 first:pt-0" key={product.id}>
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="font-medium text-ink">{product.name}</p>
                        <p className="mt-1 text-sm text-muted">
                          {formatPrice(product.price * cart[product.id])}
                        </p>
                      </div>
                      <div
                        aria-label={`Quantité de ${product.name}`}
                        className="flex h-9 items-center gap-3 rounded-full border border-ink/10 px-2"
                      >
                        <button
                          aria-label={`Retirer un ${product.name}`}
                          className="grid size-6 place-items-center text-ink hover:text-forest"
                          onClick={() => updateQuantity(product.id, -1)}
                          type="button"
                        >
                          −
                        </button>
                        <span className="min-w-3 text-center text-sm">
                          {cart[product.id]}
                        </span>
                        <button
                          aria-label={`Ajouter un ${product.name}`}
                          className="grid size-6 place-items-center text-ink hover:text-forest"
                          onClick={() => updateQuantity(product.id, 1)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t border-ink/10 py-4 font-semibold text-ink">
                <span>Total démo</span>
                <span>{formatPrice(total)}</span>
              </div>
              <form className="space-y-4" onSubmit={placeDemoOrder}>
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-ink"
                    htmlFor="firstName"
                  >
                    Votre prénom
                  </label>
                  <input
                    autoComplete="given-name"
                    className="min-h-11 w-full rounded-xl border border-ink/15 px-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15"
                    id="firstName"
                    name="firstName"
                    placeholder="Camille"
                    required
                  />
                </div>
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium text-ink"
                    htmlFor="email"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    autoComplete="email"
                    className="min-h-11 w-full rounded-xl border border-ink/15 px-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.fr"
                    required
                    type="email"
                  />
                </div>
                <button
                  className="min-h-12 w-full rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                  type="submit"
                >
                  Tester la commande démo
                </button>
                <p className="text-xs leading-5 text-muted">
                  Aucune donnée n’est enregistrée ou envoyée. Ce bouton ne
                  déclenche ni paiement ni commande réelle.
                </p>
              </form>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
