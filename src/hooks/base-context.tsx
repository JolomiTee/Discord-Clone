import { create } from "zustand";

interface AppStateProps {
	appState: string;
	switchAppState: (newAppState: string) => void;
}

export const useStore = create<AppStateProps>((set) => ({
	appState: "null", // Initial state
	switchAppState: (newAppState: string) =>
		set(() => ({
			appState: newAppState,
		})),
}));
