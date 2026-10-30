import { type DigitalResource, type Material } from "./types";

export const materials: Material[] = [
  { id: "m-01", name: "Linterna", quantity: 2 },
  { id: "m-02", name: "Cinta metrica", quantity: 1 },
  { id: "m-03", name: "Botiquin", quantity: 1 },
];

export const digitalResources: DigitalResource[] = [
  { code: "r-01", title: "Guia de seguridad", format: "pdf" },
  { code: "r-02", title: "Mapa de ruta", format: "link" },
];
