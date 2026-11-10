const metrics = [
  { label: "Ventes du mois", value: "2 840 €" },
  { label: "Commandes", value: "38" },
  { label: "Visiteurs", value: "1 206" },
];

const chartHeights = ["35%", "48%", "40%", "67%", "54%", "76%", "60%", "92%", "70%", "83%", "65%", "100%"];

export function StorePreview() {
  return (
    <div
      aria-label="Aperçu illustratif du tableau de bord marchand"
      className="store-window"
    >
      <div className="store-toolbar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>atelier — maquette · données d’exemple</p>
      </div>
      <div className="store-content">
        <aside aria-hidden="true" className="store-rail">
          <span />
          <span />
          <span />
          <span />
          <span />
        </aside>
        <div className="store-dashboard">
          <div className="store-welcome">
            <div>
              <p>Bonjour, Camille</p>
              <h2>Vue d’ensemble</h2>
            </div>
            <span className="store-add">+ Ajouter un produit</span>
          </div>
          <div className="store-metrics">
            {metrics.map((metric) => (
              <div className="store-metric" key={metric.label}>
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
          <div
            aria-label="Graphique décoratif des ventes du mois"
            className="store-chart"
          >
            {chartHeights.map((height, index) => (
              <span
                key={`${height}-${index}`}
                style={{ height }}
              />
            ))}
          </div>
          <div className="store-orders">
            <strong>Commandes récentes</strong>
            <span>Voir tout →</span>
          </div>
          <div className="store-orders">
            <span>#AT-1048 · Bougie artisanale</span>
            <strong>34,00 €</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
