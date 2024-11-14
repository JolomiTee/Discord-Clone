import { create } from "zustand";
interface AppSidebarStateProps {
	c_sidebar_state: boolean;
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;

	l_sidebar_display_context: string;
	r_sidebar_display_context: string;

	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
	toggle_c_sidebar: () => void;

	setLSidebarState: (newAppState: boolean) => void;
	setRSidebarState: (newAppState: boolean) => void;

	switchLeftSidebarContext: (newAppState: string) => void;
	switchRightSidebarContext: (newAppState: string) => void;
}

export const useSidebarStateStore = create<AppSidebarStateProps>()((set) => ({
	c_sidebar_state: false,
	l_sidebar_state: true,
	r_sidebar_state: false,
	l_sidebar_display_context: "null",
	r_sidebar_display_context: "null",

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

	setLSidebarState: (newAppState) =>
		set(() => ({
			l_sidebar_state: newAppState,
		})),
	setRSidebarState: (newAppState) =>
		set(() => ({
			r_sidebar_state: newAppState,
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

	collapsible_sidebar_display_context: string;
	toggle_selected_tab: (newAppState: string | null) => void;
	toggle_selected_server: (newAppState: number | null) => void;

	switchCollapsibleSidebarContext: (newAppState: string) => void;
}

export const useCollapsibleSidebarStore = create<CollapsibleSidebarState>()(
	(set) => ({
		selectedTab: "messages",
		selectedServer: null,
		collapsible_sidebar_display_context: "menu",

		toggle_selected_tab: (selected_tab) =>
			set(() => ({
				selectedTab: selected_tab,
			})),
		toggle_selected_server: (selected_server) =>
			set(() => ({
				selectedServer: selected_server,
			})),

		switchCollapsibleSidebarContext: (newAppState) =>
			set(() => ({
				collapsible_sidebar_display_context: newAppState,
			})),
	})
);

interface AppNotificationStateProps {
	selectedTab: string;
	toggle_selected_tab: (newAppState: string) => void;
}

export const useAppNotificationState = create<AppNotificationStateProps>()(
	(set) => ({
		selectedTab: "For You",

		toggle_selected_tab: (newAppState) =>
			set(() => ({
				selectedTab: newAppState,
			})),
	})
);