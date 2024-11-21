import { Friends } from "@/types";

export const friends: Friends[] = [
	{
		profileImg: "/ghost.png",
		user: "Ghost",
		online: true,
		hasMessage: true,
		messageCount: 2,
		pinned: true,
		slug: "ghost",
		id: 1001,
	},
	{
		profileImg: "/beluga.png",
		user: "Beluga",
		online: true,
		hasMessage: true,
		messageCount: 2,
		pinned: false,
		slug: "beluga",
		id: 1002,
	},
	{
		profileImg: "/silly.png",
		user: "Joloo",
		online: true,
		hasMessage: true,
		messageCount: 5,
		pinned: false,
		slug: "joloo",
		id: 1003,
	},
	{
		profileImg: "/juxtopposed.png",
		user: "Juxtopposed",
		online: true,
		hasMessage: false,
		messageCount: 0,
		pinned: false,
		slug: "juxtopposed",
		id: 1004,
	},
	{
		profileImg: "/jojo.png",
		user: "Jojo",
		online: false,
		hasMessage: false,
		messageCount: 0,
		pinned: false,
		slug: "jojo",
		id: 1005,
	},
	{
		profileImg: "/shepard.png",
		user: "Shepard",
		online: true,
		hasMessage: true,
		messageCount: 5,
		pinned: false,
		slug: "shepard",
		id: 1006,
	},
];

export const conversations = [
	{
		conversationId: "convo-1001-1002", // Unique identifier for this conversation
		participants: [1001, 1002], // User IDs of participants
		lastMessage: [
			{
				userId: 1002,
				time: "15:45",
				message: "*Falls to the ground*", // Most recent message
			},
			{
				userId: 1002,
				time: "15:45",
				message: "*Falls to the ground*", // Most recent message
			},
		],
		unreadMessageCount: 2, // Unread message count for the current user
		pinned: true, // Whether the conversation is pinned
		isFriend: true, // Whether the participants are friends
		messages: [
			{
				messageId: "msg-1", // Unique message ID
				senderId: 1001, // User ID of the sender
				time: "15:34",
				message: "Shepard, we've secured the intel. Moving to extraction.",
			},
			{
				messageId: "msg-2",
				senderId: 1002,
				time: "15:35",
				message:
					"Roger that, Ghost. Head to the extraction point. We’re on our way.",
			},
			{
				messageId: "msg-3",
				senderId: 1001,
				time: "15:36",
				message: "Copy that. See you soon.",
			},
			{
				messageId: "msg-4",
				senderId: 1002,
				time: "15:37",
				message: "You did good, Ghost. Real good.",
			},
			{
				messageId: "msg-5",
				senderId: 1001,
				time: "15:38",
				message: "Thanks, General. We couldn't have done it without you.",
			},
			{
				messageId: "msg-6",
				senderId: 1002,
				time: "15:39",
				message: "But there’s one last thing you need to do for me.",
			},
			{
				messageId: "msg-7",
				senderId: 1001,
				time: "15:39",
				message: "What's that?",
			},
			{
				messageId: "msg-8",
				senderId: 1002,
				time: "15:40",
				message: "Sorry, Ghost... but this is the end of the line for you.",
			},
			{
				messageId: "msg-9",
				senderId: 1001,
				time: "15:41",
				message: "Shepard, what are you doing?!",
			},
			{
				messageId: "msg-10",
				senderId: 1002,
				time: "15:42",
				message: "It’s nothing personal. This is bigger than you or me.",
			},
			{
				messageId: "msg-11",
				senderId: 1001,
				time: "15:43",
				message: "You son of a—",
			},
			{
				messageId: "msg-12",
				senderId: 1002,
				time: "15:44",
				message: "*Gunshots*",
			},
			{
				messageId: "msg-13",
				senderId: 1001,
				time: "15:45",
				message: "*Falls to the ground*",
			},
		],
	},
];
