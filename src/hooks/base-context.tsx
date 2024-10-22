import { create } from "zustand";

interface AppStateProps {
	appState: string;
	l_sidebar: boolean;
	r_sidebar: boolean;
	switchAppState: (newAppState: string) => void;
	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
}

export const useStore = create<AppStateProps>((set) => ({
	appState: "null", // Initial state
	l_sidebar: true,
	r_sidebar: false,

	switchAppState: (newAppState: string) =>
		set(() => ({
			appState: newAppState,
		})),

	toggle_l_sidebar: () =>
		set((state) => ({
			l_sidebar: !state.l_sidebar,
		})),

	toggle_r_sidebar: () =>
		set((state) => ({
			r_sidebar: !state.r_sidebar,
		})),
}));
