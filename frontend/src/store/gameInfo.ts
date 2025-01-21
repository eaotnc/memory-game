import { create } from "zustand";

const cards = [
  { id: 2, imageUrl: "https://picsum.photos/id/238/200/300" },
  { id: 8, imageUrl: "https://picsum.photos/id/244/200/300" },
  { id: 1, imageUrl: "https://picsum.photos/id/237/200/300" },
  { id: 2, imageUrl: "https://picsum.photos/id/238/200/300" },
  { id: 3, imageUrl: "https://picsum.photos/id/239/200/300" },
  { id: 3, imageUrl: "https://picsum.photos/id/239/200/300" },
  { id: 1, imageUrl: "https://picsum.photos/id/237/200/300" },
  { id: 4, imageUrl: "https://picsum.photos/id/240/200/300" },
  { id: 5, imageUrl: "https://picsum.photos/id/241/200/300" },
  { id: 4, imageUrl: "https://picsum.photos/id/240/200/300" },
  { id: 6, imageUrl: "https://picsum.photos/id/242/200/300" },
  { id: 6, imageUrl: "https://picsum.photos/id/242/200/300" },
  { id: 7, imageUrl: "https://picsum.photos/id/243/200/300" },
  { id: 5, imageUrl: "https://picsum.photos/id/241/200/300" },
  { id: 8, imageUrl: "https://picsum.photos/id/244/200/300" },
  { id: 7, imageUrl: "https://picsum.photos/id/243/200/300" },
];

interface CardType {
  id: number;
  imageUrl: string;
}

interface FaceUpCardType {
  index: number;
  id: number;
}

interface PairedCardType {
  index: number;
  id: number;
}

interface HandleGameLogicReducerType {
  state: GameInfoState;
  index: number;
  id: number;
}

const handleGameLogicReducer = ({
  state,
  index,
  id,
}: HandleGameLogicReducerType) => {
  const { faceUpCards } = state;
  switch (faceUpCards.length) {
    case 0:
      return {
        faceUpCards: [...faceUpCards, { index, id }],
      };
    case 1:
      if (faceUpCards[0].id === id) {
        return {
          faceUpCards: [],
          pairedCards: [...state.pairedCards, ...faceUpCards, { index, id }],
        };
      }
      return {
        faceUpCards: [...faceUpCards, { index, id }],
      };
    case 2:
      return {
        faceUpCards: [{ index, id }],
      };
    default:
      return { faceUpCards: state.faceUpCards };
  }
};

interface GameInfoState {
  cards: CardType[];
  totalClicks: number;
  faceUpCards: FaceUpCardType[];
  pairedCards: PairedCardType[];
  addTotalClick: () => void;
  clearTotalClick: () => void;
  handleGameLogic: (key: number, id: number) => void;
  setRestart: () => void;
}

const useGameInfo = create<GameInfoState>((set) => ({
  cards: cards,
  totalClicks: 0,
  faceUpCards: [],
  pairedCards: [],

  addTotalClick: () =>
    set((state) => ({
      totalClicks: state.totalClicks + 1,
    })),

  clearTotalClick: () =>
    set(() => ({
      totalClicks: 0,
    })),

  handleGameLogic: (index: number, id: number) => {
    set((state) => handleGameLogicReducer({ state, index, id }));
  },

  setRestart: () => {
    set(() => ({
      totalClicks: 0,
      faceUpCards: [],
      pairedCards: [],
    }));
  },
}));

export default useGameInfo;
