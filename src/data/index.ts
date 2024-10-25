export const serverList = [
	{
		title: "MidJourney",
		serverIcon: "/servers/midjourney.png",
		hasNotification: true
	},
	{
		title: "Roblox",
		serverIcon: "/servers/roblox.png",
		hasNotification: false

	},
	{
		title: "One Piece",
		serverIcon: "/servers/onepiece.png",
		hasNotification: true

	},
	{
		title: "LinusTechTips",
		serverIcon: "/servers/linustechtips.png",
		hasNotification: false

	},
	{
		title: "Apex Legends",
		serverIcon: "/servers/apex legends.png",
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

export const textChannelConversation = [
  {
    user: "grass enjoyer",
    time: "10:30 am",
		message: "what an amazing day!",
	 profileImg: ""
  },
  {
    user: "NOT a grass enjoyer",
    time: "10:32 am",
    message: "TO SIT HOME AND PLAY GAMES I KNOW RIGHT",
	 profileImg: ""
  },
  {
    user: "grass enjoyer",
    time: "10:33 am",
    message: "no??? to go out and enjoy the sun and touch grass",
	 profileImg: ""
  },
  {
    user: "NOT a grass enjoyer",
    time: "10:32 am",
    message: "hell no",
	 profileImg: ""
  },
  {
    user: "sun enthusiast",
    time: "10:32 am",
    message: "hey @NOT a grass enjoyer you should actually try that dude. you've been online for a long time now.",
	 profileImg: ""
  },
  {
    user: "NOT a grass enjoyer",
    time: "10:32 am",
    message: "nuh uh grass is for losers you can't trick me",
	 profileImg: ""
  },
  {
    user: "grass enjoyer",
    time: "10:33 am",
    message: "well, i'll be on my way then. will update you guys with some pictures later :)",
	 profileImg: ""
  },
  {
    user: "sun enthusiast",
    time: "10:32 am",
    message: "have fun!",
	 profileImg: ""
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

export const membersList = [
	{
		group: "admins",
		count: 2,
		members: [
			{
				id: 1,
				profile: "",
				name: "grass master 1"
			},
			{
				id: 2,
				profile: "",
				name: "grass master 2"
			}
		]
	},
	{
		group: "mods",
		count: 3,
		members: [
			{
				id: 1,
				profile: "",
				name: "grass mod 1"
			},
			{
				id: 2,
				profile: "",
				name: "grass mod 2"
			},
			{
				id: 3,
				profile: "",
				name: "grass mod 3"
			}
		]
	},
	{
		group: "guides",
		count: 4,
		members: [
			{
				id: 1,
				profile: "",
				name: "grass guide 1"
			},
			{
				id: 2,
				profile: "",
				name: "grass guide 2"
			},
			{
				id: 3,
				profile: "",
				name: "grass guide 3"
			},
			{
				id: 4,
				profile: "",
				name: "grass guide 4"
			}
		]
	},
]

export const membersList2 = [
			{
				id: 1,
				profile: "",
				name: "grass man 1"
			},
			{
				id: 2,
				profile: "",
				name: "grass man 2"
			},
			{
				id: 3,
				profile: "",
				name: "grass man 3"
			},
			{
				id: 4,
				profile: "",
				name: "grass man 4"
			}
]


export const discordServers = [
  {
    name: "Midjourney",
    online: 175432,
    members: 1843921,
    lastSeen: "7:15 am, August 14, 2023",
    link: "https://discord.com/invite/midjourney",
    muted: false,
    server_img: "/servers/midjourney.png"
  },
  {
    name: "HELLDIVERS II",
    online: 145678,
    members: 1543920,
    lastSeen: "9:42 pm, June 28, 2024",
    link: "https://discord.com/invite/helldivers2",
    muted: false,
    server_img: "/servers/helldivers.png"
  },
  {
    name: "Minecraft",
    online: 193476,
    members: 1987654,
    lastSeen: "2:37 am, December 5, 2022",
    link: "https://discord.com/invite/minecraft",
    muted: false,
    server_img: "/servers/minecraft.png"
  },
  {
    name: "Fortnite",
    online: 189204,
    members: 1754321,
    lastSeen: "11:13 pm, February 20, 2023",
    link: "https://discord.com/invite/fortnite",
    muted: false,
    server_img: "/servers/fortnite.png"
  },
  {
    name: "Roblox",
    online: 168943,
    members: 1520831,
    lastSeen: "4:23 pm, October 3, 2024",
    link: "https://discord.com/invite/roblox",
    muted: false,
    server_img: "/servers/roblox.png"
  },
  {
    name: "Terraria",
    online: 149876,
    members: 1402834,
    lastSeen: "8:09 am, May 15, 2022",
    link: "https://discord.com/invite/terraria",
    muted: false,
    server_img: "/servers/terraria.png"
  },
  {
    name: "Linkin Park",
    online: 132867,
    members: 1674029,
    lastSeen: "6:45 pm, January 18, 2024",
    link: "https://discord.com/invite/linkinpark",
    muted: false,
    server_img: "/servers/linkinpark.png"
  },
  {
    name: "Memeology",
    online: 147892,
    members: 1934827,
    lastSeen: "3:16 am, April 7, 2023",
    link: "https://discord.com/invite/memeology",
    muted: false,
    server_img: "/servers/memeology.png"
  },
  {
    name: "One Piece",
    online: 154321,
    members: 1750293,
    lastSeen: "1:30 pm, July 10, 2024",
    link: "https://discord.com/invite/onepiece",
    muted: false,
    server_img: "/servers/onepiece.png"
  },
  {
    name: "BeluGANG",
    online: 110872,
    members: 1384957,
    lastSeen: "10:41 am, September 19, 2023",
    link: "https://discord.com/invite/belugang",
    muted: false,
    server_img: "/servers/belugang.png"
  },
  {
    name: "Jojo’s Bizarre Adventure",
    online: 178923,
    members: 1984301,
    lastSeen: "5:18 pm, November 30, 2022",
    link: "https://discord.com/invite/jojosbizarreadventure",
    muted: false,
    server_img: "/servers/jojo.png"
  },
  {
    name: "OperaGX",
    online: 134591,
    members: 1739201,
    lastSeen: "9:25 am, March 2, 2024",
    link: "https://discord.com/invite/operagx",
    muted: false,
    server_img: "/servers/operagx.png"
  },
  {
    name: "LinusTechTips",
    online: 182745,
    members: 1934872,
    lastSeen: "11:59 pm, May 24, 2023",
    link: "https://discord.com/invite/linustech",
    muted: false,
    server_img: "/servers/linustechtips.png"
  },
  {
    name: "PCMasterRace",
    online: 141234,
    members: 1429387,
    lastSeen: "6:03 pm, December 12, 2023",
    link: "https://discord.com/invite/pcmasterrace",
    muted: false,
    server_img: "/servers/pcmasterrace.png"
  },
  {
    name: "RAZER",
    online: 136578,
    members: 1764382,
    lastSeen: "7:33 am, July 22, 2024",
    link: "https://discord.com/invite/razer",
    muted: false,
    server_img: "/servers/razer.png"
  },
  {
    name: "DESTINY 2",
    online: 120984,
    members: 1647389,
    lastSeen: "8:26 pm, September 1, 2022",
    link: "https://discord.com/invite/destiny2",
    muted: false,
    server_img: "/servers/destiny.png"
  },
  {
    name: "Apex Legends",
    online: 158902,
    members: 1904872,
    lastSeen: "9:11 am, October 17, 2024",
    link: "https://discord.com/invite/apexlegends",
    muted: false,
    server_img: "/servers/apexlegends.png"
  },
  {
    name: "VALORANT",
    online: 165493,
    members: 1728934,
    lastSeen: "10:22 pm, January 9, 2023",
    link: "https://discord.com/invite/valorant",
    muted: false,
    server_img: "/servers/valorant.png"
  },
  {
    name: "Lofi Girl",
    online: 143682,
    members: 1624831,
    lastSeen: "4:18 am, August 23, 2024",
    link: "https://discord.com/invite/lofigirl",
    muted: false,
    server_img: "/servers/lofigirl.png"
  },
  {
    name: "Rythm",
    online: 191237,
    members: 1847239,
    lastSeen: "12:01 pm, November 14, 2022",
    link: "https://discord.com/invite/rythm",
    muted: false,
    server_img: "/servers/rythm.png"
  }
];

