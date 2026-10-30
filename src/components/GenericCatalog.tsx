type GenericCatalogProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
};

export function GenericCatalog<T>({ items, getKey, getLabel, onSelect }: GenericCatalogProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>
          {getLabel(item)}{" "}
          <button type="button" onClick={() => onSelect(item)}>
            Agregar
          </button>
        </li>
      ))}
    </ul>
  );
}
