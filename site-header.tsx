import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="px-5 pt-5 sm:px-8 sm:pt-7" id="top">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-white/75 px-4 py-3 shadow-sm shadow-ink/[0.03] backdrop-blur sm:px-6">
        <Link
          aria-label="Atelier, accueil"
          className="flex items-center gap-2.5"
          href="#top"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-forest text-white">
            <svg
              aria-hidden="true"
              fill="none"
              height="19"
              viewBox="0 0 20 20"
              width="19"
            >
              <path
                d="M3 15.5 10 3l7 12.5H3Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M6.3 12h7.4M8 9h4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-[-0.05em] text-ink">
            atelier
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
        >
          <Link className="transition-colors hover:text-ink" href="#avantages">
            La plateforme
          </Link>
          <Link className="transition-colors hover:text-ink" href="#apercu">
            Aperçu
          </Link>
        </nav>

        <Link
          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-forest"
          href="/boutique"
        >
          Boutique démo <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
