import { create } from "zustand";

interface AppStateProps {
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;

	l_sidebar_display_context: string;
	r_sidebar_display_context: string;

	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;

	switchLeftSidebarContext: (newAppState: string) => void;
	switchRightSidebarContext: (newAppState: string) => void;
}

export const useStore = create<AppStateProps>((set) => ({
	l_sidebar_state: true,
	r_sidebar_state: false,

	l_sidebar_display_context: "null", // Initial state
	r_sidebar_display_context: "null", // Initial state

	toggle_l_sidebar: () =>
		set((state) => ({
			l_sidebar_state: !state.l_sidebar_state,
		})),
	toggle_r_sidebar: () =>
		set((state) => ({
			r_sidebar_state: !state.r_sidebar_state,
		})),

	switchLeftSidebarContext: (newAppState: string) =>
		set(() => ({
			l_sidebar_display_context: newAppState,
		})),
	switchRightSidebarContext: (newAppState: string) =>
		set(() => ({
			r_sidebar_display_context: newAppState,
		})),
}));
