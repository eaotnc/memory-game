import axios from "axios";
import { create } from "zustand";

interface CardType {
  id: number;
  imageURL: string;
}
interface ScoreType {
  id: string;
  name: string;
  clicks: number;
  timesInSeconds: number;
  isCurrentPlayer: boolean;
}
interface SubmitUserScoreType {
  name: string;
  clicks: number;
  timesInSeconds: number;
}

interface KeptUserScoreType {
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
  keptUserScore: (data: KeptUserScoreType) => void;
}

const sortScores = (scores: ScoreType[]) =>
  scores
    .sort((a: ScoreType, b: ScoreType) => a.clicks - b.clicks)
    .sort((a: ScoreType, b: ScoreType) => a.timesInSeconds - b.timesInSeconds);

const initialState: Omit<
  State,
  "fetchCards" | "fetchScores" | "submitUserScore" | "keptUserScore"
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
      const scoreSorted = sortScores(res.data).map((score: ScoreType) => ({
        ...score,
        isCurrentPlayer: false,
      }));
      set({ success: true, loading: false, scores: scoreSorted });
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

  keptUserScore: ({ clicks, timesInSeconds }: KeptUserScoreType) => {
    set((state) => ({
      scores: sortScores([
        ...state.scores!,
        {
          id: "player",
          name: "Your",
          clicks,
          timesInSeconds,
          isCurrentPlayer: true,
        },
      ]),
    }));
  },
}));
