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
interface SubmitUserScoreType {
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
  submitUserScore: (data: SubmitUserScoreType) => Promise<void>;
}

const initialState: Omit<
  State,
  "fetchCards" | "fetchScores" | "submitUserScore"
> = {
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
      const sortedScores = res.data
        .sort((a: ScoreType, b: ScoreType) => a.clicks - b.clicks)
        .sort(
          (a: ScoreType, b: ScoreType) => a.timesInSeconds - b.timesInSeconds
        );
      set({ success: true, loading: false, scores: sortedScores });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, loading: false, errorData: err.message });
    }
  },

  submitUserScore: async ({
    name,
    clicks,
    timesInSeconds,
  }: SubmitUserScoreType) => {
    set({ loading: true });
    try {
      await axios.post("http://localhost:3000/api/scores", {
        name,
        clicks,
        timesInSeconds,
      });
      set({ success: true, loading: false });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ error: true, loading: false, errorData: err.message });
    }
  },
}));
