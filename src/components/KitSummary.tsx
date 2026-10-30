import { type KitItem, type KitStatus } from "../types";

type KitSummaryProps = {
  items: KitItem[];
  status: KitStatus;
  message: string | null;
  onRemove: (key: string) => void;
  onMarkReviewed: () => void;
  onReset: () => void;
};

export function KitSummary({ items, status, message, onRemove, onMarkReviewed, onReset }: KitSummaryProps) {
  return (
    <section>
      <h2>Resumen del maletin</h2>
      {items.length === 0 ? (
        <p>Maletin vacio</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              {item.name}{" "}
              <button type="button" onClick={() => onRemove(item.key)}>
                Retirar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: {items.length}</p>
      <p>Estado: {status === "reviewed" ? "Revisado" : "Pendiente de revision"}</p>
      {message && <p>{message}</p>}
      <button type="button" onClick={onMarkReviewed}>
        Marcar como revisado
      </button>
      <button type="button" onClick={onReset}>
        Reiniciar maletin
      </button>
    </section>
  );
}
