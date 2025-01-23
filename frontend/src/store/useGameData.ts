import axios from "axios";
import { create } from "zustand";

interface CardType {
  id: number;
  imageURL: string;
}
interface ScoreType {
  id: number;
  name: string;
  clicks: number;
  timesInSeconds: number;
}

interface State {
  loading: boolean;
  success: boolean;
  error: boolean;
  cards: CardType[] | null;
  scores: ScoreType[] | null;
  errorData: string | null;
  fetchCards: () => Promise<void>;
  fetchScores: () => Promise<void>;
}

const initialState: Omit<State, "fetchCards" | "fetchScores"> = {
  cards: null,
  scores: null,
  loading: false,
  success: false,
  error: false,
  errorData: null,
};

export const useGameData = create<State>((set) => ({
  ...initialState,

  fetchCards: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:3000/api/cards");
      set({ success: true, loading: false, cards: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, loading: false, errorData: err.message });
    }
  },

  fetchScores: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:3000/api/scores");
      console.log("🚀 ~ res:", res);
      set({ success: true, loading: false, scores: res.data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, loading: false, errorData: err.message });
    }
  },
}));
