import { Conversation, Friends } from "@/types";

export const friends: Friends[] = [
	{
		profileImg: "/ghost.png",
		user: "Ghost",
		online: true,
		hasMessage: true,
		messageCount: 2,
		pinned: true,
		slug: "ghost",
		id: "1001",
	},
	{
		profileImg: "/silly.png",
		user: "Silly",
		online: true,
		hasMessage: true,
		messageCount: 5,
		pinned: false,
		slug: "silly",
		id: "1002",
	},
	{
		profileImg: "/juxtopposed.png",
		user: "Juxtopposed",
		online: true,
		hasMessage: false,
		messageCount: 0,
		pinned: false,
		slug: "juxtopposed",
		id: "1003",
	},
	{
		profileImg: "/jojo.png",
		user: "Jojo",
		online: false,
		hasMessage: false,
		messageCount: 0,
		pinned: false,
		slug: "jojo",
		id: "1004",
	},
	{
		profileImg: "/shepard.png",
		user: "Shepard",
		online: true,
		hasMessage: true,
		messageCount: 5,
		pinned: false,
		slug: "shepard",
		id: "1005",
	},
];

export const conversations: Conversation[] = [
	{
		conversationId: "convo-user_2pRD2D2BrOoiWXsgiLCtYrAughl-1001", // Unique identifier for this conversation
		participants: ["user_2pRD2D2BrOoiWXsgiLCtYrAughl", "1001"], // User IDs of participants
		lastMessage: [
			{
				userId: 1001,
				time: "15:45",
				message: "*Falls to the ground*", // Most recent message
			},
			{
				userId: 1001,
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
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl", // User ID of the sender
				time: "15:34",
				message: "Shepard, we've secured the intel. Moving to extraction.",
			},
			{
				messageId: "msg-2",
				senderId: "1001",
				time: "15:35",
				message:
					"Roger that, Ghost. Head to the extraction point. We’re on our way.",
			},
			{
				messageId: "msg-3",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:36",
				message: "Copy that. See you soon.",
			},
			{
				messageId: "msg-4",
				senderId: "1001",
				time: "15:37",
				message: "You did good, Ghost. Real good.",
			},
			{
				messageId: "msg-5",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:38",
				message: "Thanks, General. We couldn't have done it without you.",
			},
			{
				messageId: "msg-6",
				senderId: "1001",
				time: "15:39",
				message: "But there’s one last thing you need to do for me.",
			},
			{
				messageId: "msg-7",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:39",
				message: "What's that?",
			},
			{
				messageId: "msg-8",
				senderId: "1001",
				time: "15:40",
				message: "Sorry, Ghost... but this is the end of the line for you.",
			},
			{
				messageId: "msg-9",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:41",
				message: "Shepard, what are you doing?!",
			},
			{
				messageId: "msg-10",
				senderId: "1001",
				time: "15:42",
				message: "It’s nothing personal. This is bigger than you or me.",
			},
			{
				messageId: "msg-11",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:43",
				message: "You son of a—",
			},
			{
				messageId: "msg-12",
				senderId: "1001",
				time: "15:44",
				message: "*Gunshots*",
			},
			{
				messageId: "msg-13",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "15:45",
				message: "*Falls to the ground*",
			},
		],
	},
	{
		conversationId: "convo-user_2pRD2D2BrOoiWXsgiLCtYrAughl-1002",
		participants: ["user_2pRD2D2BrOoiWXsgiLCtYrAughl", "1002"],
		lastMessage: [
			{
				userId: 1002,
				time: "14:00",
				message: "Did you check out the new update?",
			},
		],
		unreadMessageCount: 1,
		pinned: false,
		isFriend: true,
		messages: [
			{
				messageId: "msg-1",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "13:45",
				message: "Hey Joloo, how’s everything going?",
			},
			{
				messageId: "msg-2",
				senderId: "1002",
				time: "14:00",
				message: "Did you check out the new update?",
			},
		],
	},
	{
		conversationId: "convo-user_2pRD2D2BrOoiWXsgiLCtYrAughl-1003",
		participants: ["user_2pRD2D2BrOoiWXsgiLCtYrAughl", "1003"],
		lastMessage: [
			{
				userId: 1003,
				time: "12:30",
				message: "Don't forget the meeting at 3 PM.",
			},
		],
		unreadMessageCount: 3,
		pinned: false,
		isFriend: true,
		messages: [
			{
				messageId: "msg-1",
				senderId: "1003",
				time: "12:00",
				message: "Can you review the document I sent over?",
			},
			{
				messageId: "msg-2",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "12:15",
				message: "Sure, I’ll take a look now.",
			},
			{
				messageId: "msg-3",
				senderId: "1003",
				time: "12:30",
				message: "Don't forget the meeting at 3 PM.",
			},
		],
	},
	{
		conversationId: "convo-user_2pRD2D2BrOoiWXsgiLCtYrAughl-1004",
		participants: ["user_2pRD2D2BrOoiWXsgiLCtYrAughl", "1004"],
		lastMessage: [
			{
				userId: 1004,
				time: "16:20",
				message: "Catch you later!",
			},
		],
		unreadMessageCount: 0,
		pinned: false,
		isFriend: true,
		messages: [
			{
				messageId: "msg-1",
				senderId: "1004",
				time: "15:45",
				message: "Hey Jojo, what’s up?",
			},
			{
				messageId: "msg-2",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "16:00",
				message: "Not much, just wrapping up some work.",
			},
			{
				messageId: "msg-3",
				senderId: "1004",
				time: "16:20",
				message: "Catch you later!",
			},
		],
	},
	{
		conversationId: "convo-user_2pRD2D2BrOoiWXsgiLCtYrAughl-1005",
		participants: ["user_2pRD2D2BrOoiWXsgiLCtYrAughl", "1005"],
		lastMessage: [
			{
				userId: 1005,
				time: "17:10",
				message: "We need to discuss the next mission soon.",
			},
		],
		unreadMessageCount: 4,
		pinned: false,
		isFriend: true,
		messages: [
			{
				messageId: "msg-1",
				senderId: "1005",
				time: "16:50",
				message:
					"Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?Shepard, are you available for a quick call?",
			},
			{
				messageId: "msg-2",
				senderId: "user_2pRD2D2BrOoiWXsgiLCtYrAughl",
				time: "17:00",
				message: "Sure, what’s up?",
			},
			{
				messageId: "msg-3",
				senderId: "1005",
				time: "17:10",
				message: "We need to discuss the next mission soon.",
			},
		],
	},
];
