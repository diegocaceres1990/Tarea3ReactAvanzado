import { type KitAction, type KitState } from "./types";

export const initialKitState: KitState = { items: [], status: "pending", message: null };

function assertNever(value: never): never {
  throw new Error(`Accion no contemplada: ${String(value)}`);
}

export function kitReducer(state: KitState, action: KitAction): KitState {
  switch (action.type) {
    case "add":
      if (state.items.some((item) => item.key === action.item.key)) {
        return { ...state, message: null };
      }
      return { ...state, items: [...state.items, action.item], message: null };
    case "remove": {
      const items = state.items.filter((item) => item.key !== action.key);
      return { ...state, items, status: items.length === 0 ? "pending" : state.status, message: null };
    }
    case "markReviewed":
      if (state.items.length === 0) {
        return { ...state, message: "Agregue al menos un elemento antes de revisar." };
      }
      return { ...state, status: "reviewed", message: null };
    case "reset":
      return { items: [], status: "pending", message: null };
    default:
      return assertNever(action);
  }
}
