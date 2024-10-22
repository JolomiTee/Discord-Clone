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
	appState: "messages", // Initial state
	l_sidebar: true,
	r_sidebar: false,

	// Switch the main app state
	switchAppState: (newAppState: string) =>
		set(() => ({
			appState: newAppState,
		})),

	// Toggle left sidebar visibility
	toggle_l_sidebar: () =>
		set((state) => ({
			l_sidebar: !state.l_sidebar, // Toggle based on current state
		})),

	// Toggle right sidebar visibility
	toggle_r_sidebar: () =>
		set((state) => ({
			r_sidebar: !state.r_sidebar, // Toggle based on current state
		})),
}));
