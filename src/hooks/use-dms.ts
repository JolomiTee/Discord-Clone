import { sessionStorageProvider } from "@/lib/utils";
import { DirectMessagesStateProps, HMenuSelectedClient } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDirectMessagesState = create<DirectMessagesStateProps>()(
	(set) => ({
		messages: [],

		updateMessages: (newMessage) =>
			set((state) => ({
				messages: [...state.messages, newMessage],
			})),
	})
);

export const useHMenuSelectedClient = create<HMenuSelectedClient>()(
	persist(
		(set) => ({
			client: {
				_id: "",
				username: "",
				email_address: "",
				profile_image_url: "",
				firstName: "",
				lastName: "",
			},
			updateHMenuSelectedClient: (newClient) =>
				set(() => ({
					client: newClient,
				})),
		}),
		{
			name: "hmenu-selected-client",
			storage: sessionStorageProvider,
		}
	)
);
