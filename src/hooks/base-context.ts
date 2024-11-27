import {
	AppNotificationStateProps,
	AppSidebarStateProps,
	CollapsibleSidebarState,
} from "@/types";
import { create } from "zustand";

export const useSidebarStateStore = create<AppSidebarStateProps>()((set) => ({
	c_sidebar_state: false,
	l_sidebar_state: true,
	r_sidebar_state: false,
	r_sidebar_display_context: null,

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

	switchRightSidebarContext: (newAppState) =>
		set(() => ({
			r_sidebar_display_context: newAppState,
		})),
}));

export const useCollapsibleSidebarStore = create<CollapsibleSidebarState>()((set) => ({
	collapsible_sidebar_display_context: "menu",

	switchCollapsibleSidebarContext: (newAppState) =>
		set(() => ({
			collapsible_sidebar_display_context: newAppState,
		})),
}));

export const useAppNotificationState = create<AppNotificationStateProps>()(
	(set) => ({
		selectedTab: "For You",

		toggle_selected_tab: (newAppState) =>
			set(() => ({
				selectedTab: newAppState,
			})),
	})
);
