import { create } from "zustand";

interface ScrollState {
    hasHitTop: boolean;
    setHasHitTop: (value: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
    hasHitTop: false,
    setHasHitTop: (value: boolean) => set({ hasHitTop: value })
}));