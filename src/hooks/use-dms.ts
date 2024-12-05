import { DirectMessagesStateProps, Message } from "@/types";
import { create } from "zustand";

// Create the Zustand store
export const useDirectMessagesState = create<DirectMessagesStateProps>()(
	(set) => ({
		messages: [], // Initialize as an empty array of Message objects

		updateMessages: (newMessage: Message) =>
			set((state) => ({
				messages: [...state.messages, newMessage], // Append the new message object to the array
			})),
	})
);
