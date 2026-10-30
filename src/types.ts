export type Material = {
  id: string;
  name: string;
  quantity: number;
};

export type DigitalResource = {
  code: string;
  title: string;
  format: "pdf" | "link";
};

export type KitItem =
  | { source: "material"; key: string; name: string; item: Material }
  | { source: "digital"; key: string; name: string; item: DigitalResource };

export type KitStatus = "pending" | "reviewed";

export type KitState = {
  items: KitItem[];
  status: KitStatus;
  message: string | null;
};

export type KitAction =
  | { type: "add"; item: KitItem }
  | { type: "remove"; key: string }
  | { type: "markReviewed" }
  | { type: "reset" };
