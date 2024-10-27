import { create } from "zustand";
interface AppStateProps {
	c_sidebar_state: boolean;
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;
	l_sidebar_display_context: string;
	r_sidebar_display_context: string;
	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
	toggle_c_sidebar: () => void;
	switchLeftSidebarContext: (newAppState: string) => void;
	switchRightSidebarContext: (newAppState: string) => void;
}

// ! Tracking - removed the persistence

export const useSidebarStateStore = create<AppStateProps>()((set) => ({
	c_sidebar_state: false,
	l_sidebar_state: true,
	r_sidebar_state: false,
	l_sidebar_display_context: "null", // Initial state
	r_sidebar_display_context: "null", // Initial state

	toggle_c_sidebar: () =>
		set((state) => ({
			c_sidebar_state: !state.c_sidebar_state,
		})),
	toggle_l_sidebar: () =>
		set((state) => ({
			l_sidebar_state: !state.l_sidebar_state,
		})),
	toggle_r_sidebar: () =>
		set((state) => ({
			r_sidebar_state: !state.r_sidebar_state,
		})),

	switchLeftSidebarContext: (newAppState) =>
		set(() => ({
			l_sidebar_display_context: newAppState,
		})),
	switchRightSidebarContext: (newAppState) =>
		set(() => ({
			r_sidebar_display_context: newAppState,
		})),
}));

interface CollapsibleSidebarState {
	selectedTab: string | null;
	selectedServer: number | null;
	toggle_selected_tab: (newAppState: string) => void;
	toggle_selected_server: (newAppState: string) => void;
}

export const useCollapsibleIconStore = create<CollapsibleSidebarState>()((set) => ({
	selectedTab: "servers",
	selectedServer: null,

	toggle_selected_tab: (selected_tab) =>
		set(() => ({
			selectedTab: selected_tab,
		})),
	toggle_selected_server: (selected_server) =>
		set(() => ({
			selectedTab: selected_server,
		})),
}));