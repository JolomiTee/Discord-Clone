export const serverList = [
	{
		name: "MidJourney",
		serverImage: "/midjourney.png",
		hasNotification: true
	},
	{
		name: "Roblox",
		serverImage: "/roblox.png",
		hasNotification: false

	},
	{
		name: "One Piece",
		serverImage: "/onepiece.png",
		hasNotification: true

	},
	{
		name: "LinusTechTips",
		serverImage: "/linustechtips.png",
		hasNotification: false

	},
	{
		name: "Apex Legends",
		serverImage: "/apelegends.png",
		hasNotification: false

	},
];

export const messageList = [
	{profileImg: "/ghost.png", user: "Ghost", online: true, hasMessage: true, messageCount: 2, pinned: true},
	{ profileImg: "/beluga.png", user: "Beluga", online: true, hasMessage: true, messageCount: 2, pinned: false},
	{profileImg: "/silly.png", user: "Joloo", online: true, hasMessage: true, messageCount: 5, pinned: false },
	{profileImg: "/juxtopposed.png", user: "Juxtopposed", online: true, hasMessage: false, messageCount: 0, pinned: false},
	{profileImg: "/jojo.png", user: "Jojo", online: false, hasMessage: false, messageCount: 0, pinned: false},
	{profileImg: "/silly.png", user: "Shepard", online: true, hasMessage: true, messageCount: 5, pinned: false},
]

export const chatConversation = [
  {
    user: "Ghost",
    time: "15:34",
    message: "Shepard, we've secured the intel. Moving to extraction.",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:35",
    message: "Roger that, Ghost. Head to the extraction point. We’re on our way.",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:36",
    message: "Copy that. See you soon.",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:37",
    message: "You did good, Ghost. Real good.",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:38",
    message: "Thanks, General. We couldn't have done it without you.",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:39",
    message: "But there’s one last thing you need to do for me.",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:39",
    message: "What's that?",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:40",
    message: "Sorry, Ghost... but this is the end of the line for you.",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:41",
    message: "Shepard, what are you doing?!",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:42",
    message: "It’s nothing personal. This is bigger than you or me.",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:43",
    message: "You son of a—",
    profileImg: "/ghost.png"
  },
  {
    user: "Shepard",
    time: "15:44",
    message: "*Gunshots*",
    profileImg: "/silly.png"
  },
  {
    user: "Ghost",
    time: "15:45",
    message: "*Falls to the ground*",
    profileImg: "/ghost.png"
  }
];

export const textChannels = [
	{
		type: "text_channel",
		name: "general-text",
		link: "#"
	},
	{
		type: "text_channel",
		name: "grass update",
		link: "#"
	},
	{
		type: "text_channel",
		name: "grass discussions",
		link: "#"
	},
	{
		type: "text_channel",
		name: "grass pictures",
		link: "#"
	},
	{
		type: "text_channel",
		name: "grass faq",
		link: "#"
	},
	{
		type: "forum",
		name: "forum",
		link: "#"
	}
]
export const voiceChannels = [
	{
		type: "voice_channel",
		name: "just chilling",
		link: "#"
	},
	{
		type: "voice_channel",
		name: "grass-only",
		link: "#"
	},
	{
		type: "voice_channel",
		name: "grass talk",
		link: "#"
	},
	{
		type: "stage",
		name: "relaxing music stage",
		link: "#"
	}
]