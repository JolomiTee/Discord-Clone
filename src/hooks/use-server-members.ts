import { SelectedServerMembers } from "@/types";
import { create } from "zustand";

export const useSelectedServerMembersStore = create<SelectedServerMembers>(
	(set) => ({
		members: [],
		setServerMembers: (newAppState) =>
			set(() => ({
				members: newAppState,
			})),
	})
);
