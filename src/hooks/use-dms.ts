import { sessionStorageProvider } from "@/lib/utils";
import {
	DirectMessagesStateProps,
	HMenuSelectedClient,
	Message,
} from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDirectMessagesState = create<DirectMessagesStateProps>()(
	(set) => ({
		messages: [],

		updateMessages: (newMessage: Message | Message[]) =>
			set((state) => {
				const newMessages = Array.isArray(newMessage)
					? newMessage
					: [newMessage];
				const uniqueMessages = [...state.messages, ...newMessages].reduce(
					(acc, msg) => {
						if (!acc.some((m) => m._id === msg._id)) acc.push(msg);
						return acc;
					},
					[] as Message[] // Ensure the accumulator is explicitly typed
				);
				return { messages: uniqueMessages };
			}),
	})
);

export const useHMenuSelectedClient = create<HMenuSelectedClient>()(
	persist(
		(set) => ({
			client: {
				_id: "",
				chatId: "",
				username: "",
				email_address: "",
				profile_image_url: "",
				firstName: "",
				lastName: "",
				isFriend: false,
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
