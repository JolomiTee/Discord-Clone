import { AppPersistableStates } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Custom storage implementation for sessionStorage
const sessionStorageProvider = {
	getItem: (name: string) => {
		const storedValue = sessionStorage.getItem(name);
		return storedValue ? JSON.parse(storedValue) : undefined;
	},
	setItem: (name: string, value: any) => {
		sessionStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name: string) => {
		sessionStorage.removeItem(name);
	},
};

export const usePersistAppState = create<AppPersistableStates>()(
	persist(
		(set) => ({
			selectedTab: "messages",
			selectedServer: null,
			l_sidebar_display_context: "messages", // Default to "messages"

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
			name: "app-persisted-states", // Key name in sessionStorage
			storage: sessionStorageProvider, // Use sessionStorage
		}
	)
);

export default usePersistAppState;
