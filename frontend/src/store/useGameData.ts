import axios from "axios";
import { create } from "zustand";

interface CardType {
  id: number;
  imageURL: string;
}

interface State {
  loading: boolean;
  success: boolean;
  error: boolean;
  cards: CardType[] | null;
  errorData: string | null;
  fetchCards: () => Promise<void>;
}

const initialState: Omit<State, "fetchCards"> = {
  loading: false,
  success: false,
  error: false,
  cards: null,
  errorData: null,
};

export const useGameData = create<State>((set) => ({
  ...initialState,

  fetchCards: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("http://localhost:3000/api/cards");
      console.log("🚀 ~ res:", res);
      set({ ...initialState, success: true, cards: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
