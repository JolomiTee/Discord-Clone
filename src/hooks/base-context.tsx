import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppStateProps {
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;
	pageIsServer: boolean;
	l_sidebar_display_context: string;
	r_sidebar_display_context: string;
	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
	toggle_page_is_server: () => void;
	switchLeftSidebarContext: (newAppState: string) => void;
	switchRightSidebarContext: (newAppState: string) => void;
}

export const useStore = create<AppStateProps>()(
	persist(
		(set) => ({
			l_sidebar_state: true,
			r_sidebar_state: false,
			pageIsServer: false,
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

			toggle_page_is_server: () =>
				set((state) => ({
					pageIsServer: !state.pageIsServer,
				})),

			switchLeftSidebarContext: (newAppState: string) =>
				set(() => ({
					l_sidebar_display_context: newAppState,
				})),
			switchRightSidebarContext: (newAppState: string) =>
				set(() => ({
					r_sidebar_display_context: newAppState,
				})),
		}),
		{
			name: "app-state-storage", // Unique name for the storage
		}
	)
);
