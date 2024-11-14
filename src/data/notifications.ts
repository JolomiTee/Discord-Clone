import { ForYouNotification, MessageNotification } from "@/types";

export const for_you_notification: ForYouNotification[] = [
	{
		id: "1",
		type: "welcome",
		title: "Welcome to Rediscord!",
		message: "We're excited to have you. Start by joining your first server.",
		timestamp: new Date(),
		read: false,
	},
	{
		id: "2",
		type: "authentication",
		title: "Please verify your mail",
		message: "Hi GrassMaster333, you havent verified your mail, click here to verify",
		timestamp: new Date(),
		read: false,
	},
	{
		id: "3",
		type: "error",
		title: "Mail verification error",
		message: "GrassMaster333, your mail couldn't be verified",
		timestamp: new Date(),
		read: false,
	}
];



export const unreads: MessageNotification[] = [
	{
		id: "1",
		type: "dm",
		channelId: "Beluga",
		title: "New messages from",
		message: "Where are you?",
		timestamp: new Date(),
		read: false,
	},
	{
		id: "2",
		type: "channel_message",
		serverId: "1",
		channelId: "#general-text",
		title: "New messages from #general-text channel",
		message: "Where are you?",
		timestamp: new Date(),
		read: false,
	},
	{
		id: "3",
		type: "dm",
		channelId: "Shepard",
		title: "New message from",
		message: "It’s nothing personal. This is bigger than you or me.",
		timestamp: new Date(),
		read: false,
	}
];