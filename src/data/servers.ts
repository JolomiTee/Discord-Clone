import { Servers } from "@/types";

export const serverList: Servers[] = [
	{
		id: 9999,
		slug: "touchgrass-hq",
		name: "TouchGrass HQ",
		server_img: "/touchgrasshq.png",
		online: 175432,
		members: 1843921,
		lastSeen: "7:15 am, August 14, 2023",
		link: "https://discord.com/invite/midjourney",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "general-text",
					slug: "general-text",
					id: 1234,
				},
				{
					type: "text_channel",
					name: "grass update",
					slug: "grass-update",
					id: 5678,
				},
				{
					type: "text_channel",
					name: "grass discussions",
					slug: "grass-discussions",
					id: 9101,
				},
				{
					type: "text_channel",
					name: "grass pictures",
					slug: "grass-pictures",
					id: 1121,
				},
				{
					type: "text_channel",
					name: "grass faq",
					slug: "grass-faq",
					id: 3141,
				},
				{ type: "forum", name: "forum", slug: "forum", id: 5161 },
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "just chilling",
					slug: "just-chilling",
					id: 1718,
				},
				{
					type: "voice_channel",
					name: "grass-only",
					slug: "grass-only",
					id: 1920,
				},
				{
					type: "voice_channel",
					name: "grass talk",
					slug: "grass-talk",
					id: 2122,
				},
				{
					type: "stage",
					name: "relaxing music stage",
					slug: "relaxing-music-stage",
					id: 2324,
				},
			],
		},
	},
	{
		id: 1001,
		slug: "midjourney",
		name: "Midjourney",
		server_img: "/servers/midjourney.png",
		online: 175432,
		members: 1843921,
		lastSeen: "7:15 am, August 14, 2023",
		link: "https://discord.com/invite/midjourney",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "general",
					slug: "general",
					id: 1011,
				},
				{
					type: "text_channel",
					name: "announcements",
					slug: "announcements",
					id: 1012,
				},
				{
					type: "text_channel",
					name: "art-sharing",
					slug: "art-sharing",
					id: 1013,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "community-chat",
					slug: "community-chat",
					id: 2011,
				},
				{
					type: "stage",
					name: "artist-stage",
					slug: "artist-stage",
					id: 2012,
				},
			],
		},
	},
	{
		id: 1002,
		slug: "helldivers-ii",
		name: "HELLDIVERS II",
		server_img: "/servers/helldivers.png",
		online: 145678,
		members: 1543920,
		lastSeen: "9:42 pm, June 28, 2024",
		link: "https://discord.com/invite/helldivers2",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "missions",
					slug: "missions",
					id: 1021,
				},
				{
					type: "text_channel",
					name: "team-chat",
					slug: "team-chat",
					id: 1022,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "strategy-room",
					slug: "strategy-room",
					id: 2021,
				},
				{
					type: "stage",
					name: "war-briefing",
					slug: "war-briefing",
					id: 2022,
				},
			],
		},
	},
	{
		id: 1003,
		slug: "minecraft",
		name: "Minecraft",
		server_img: "/servers/minecraft.png",
		online: 193476,
		members: 1987654,
		lastSeen: "2:37 am, December 5, 2022",
		link: "https://discord.com/invite/minecraft",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "server-rules",
					slug: "server-rules",
					id: 1031,
				},
				{
					type: "text_channel",
					name: "mods-chat",
					slug: "mods-chat",
					id: 1032,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "survival-mode",
					slug: "survival-mode",
					id: 2031,
				},
				{
					type: "voice_channel",
					name: "creative-mode",
					slug: "creative-mode",
					id: 2032,
				},
			],
		},
	},
	{
		id: 1009,
		slug: "one-piece",
		name: "One Piece",
		server_img: "/servers/onepiece.png",
		online: 154321,
		members: 1750293,
		lastSeen: "1:30 pm, July 10, 2024",
		link: "https://discord.com/invite/onepiece",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "crew-chat",
					slug: "crew-chat",
					id: 1091,
				},
				{
					type: "text_channel",
					name: "bounty-updates",
					slug: "bounty-updates",
					id: 1092,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "pirate-talk",
					slug: "pirate-talk",
					id: 2091,
				},
				{
					type: "stage",
					name: "story-stage",
					slug: "story-stage",
					id: 2092,
				},
			],
		},
	},
	{
		id: 1010,
		slug: "belugang",
		name: "BeluGANG",
		server_img: "/servers/belugang.png",
		online: 110872,
		members: 1384957,
		lastSeen: "10:41 am, September 19, 2023",
		link: "https://discord.com/invite/belugang",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "beluga-memes",
					slug: "beluga-memes",
					id: 1101,
				},
				{
					type: "text_channel",
					name: "fan-club",
					slug: "fan-club",
					id: 1102,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "meme-talk",
					slug: "meme-talk",
					id: 2101,
				},
				{
					type: "stage",
					name: "events-stage",
					slug: "events-stage",
					id: 2102,
				},
			],
		},
	},
	{
		id: 1013,
		slug: "linustechtips",
		name: "LinusTechTips",
		server_img: "/servers/linustechtips.png",
		online: 182745,
		members: 1934872,
		lastSeen: "11:59 pm, May 24, 2023",
		link: "https://discord.com/invite/linustech",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "tech-chat",
					slug: "tech-chat",
					id: 1131,
				},
				{
					type: "text_channel",
					name: "hardware-discussions",
					slug: "hardware-discussions",
					id: 1132,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "pc-build-help",
					slug: "pc-build-help",
					id: 2131,
				},
				{
					type: "stage",
					name: "tech-events",
					slug: "tech-events",
					id: 2132,
				},
			],
		},
	},
	{
		id: 1017,
		slug: "apex-legends",
		name: "Apex Legends",
		server_img: "/servers/apexlegends.png",
		online: 158902,
		members: 1904872,
		lastSeen: "9:11 am, October 17, 2024",
		link: "https://discord.com/invite/apexlegends",
		muted: false,
		channels: {
			textChannels: [
				{
					type: "text_channel",
					name: "team-strategy",
					slug: "team-strategy",
					id: 1171,
				},
				{
					type: "text_channel",
					name: "patch-notes",
					slug: "patch-notes",
					id: 1172,
				},
			],
			voiceChannels: [
				{
					type: "voice_channel",
					name: "battle-discussions",
					slug: "battle-discussions",
					id: 2171,
				},
				{
					type: "stage",
					name: "legend-stories",
					slug: "legend-stories",
					id: 2172,
				},
			],
		},
	},
];
