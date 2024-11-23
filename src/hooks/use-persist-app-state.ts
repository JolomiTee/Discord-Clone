import { AppPersistableStates } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePersistAppState = create<AppPersistableStates>()(
	persist(
		(set) => ({
			selectedTab: "messages",
			selectedServer: null,
			l_sidebar_display_context: null,

			switchLeftSidebarContext: (newAppState) => {
				set({ l_sidebar_display_context: newAppState });
			},

			toggle_selected_tab: (selected_tab) => {
				set(() => ({
					selectedTab: selected_tab,
				}));
			},
			toggle_selected_server: (selected_server) => {
				set(() => ({
					selectedServer: selected_server,
				}));
			},
		}),
		{
			name: "app-persisted-states", // Key name in localStorage
		}
	)
);

export default usePersistAppState;
