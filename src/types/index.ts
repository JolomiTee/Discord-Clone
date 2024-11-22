// *============================= COMMON PROPERTIES ============================//
interface BaseNotification {
	id: string;
	title: string;
	message: string;
	timestamp: Date;
	read: boolean;
}

// High-level notifications
export interface ForYouNotification extends BaseNotification {
	type:
		| "authentication"
		| "invite"
		| "authorization"
		| "welcome"
		| "server_action"
		| "channel_action"
		| "error";
	actionUrl?: string; // For redirect links
}

// *============================= DMS, SERVERS AND CHANNELS ============================//
export interface MessageNotification extends BaseNotification {
	type: "dm" | "channel_message";
	serverId?: string; // id of the server that will be fetched
	channelId?: string; // Channel or DM ID
}

export interface Friends {
	profileImg: string;
	user: string;
	online: boolean;
	hasMessage: boolean;
	messageCount: number;
	pinned: boolean;
	slug: string;
	id: string;
}

interface LastMessage {
	userId: number;
	time: string;
	message: string;
}

export interface Messages {
	messageId: string;
	senderId: string;
	time: string;
	message: string;
}
export interface Conversation {
	conversationId: string;
	participants: number[];
	lastMessage: LastMessage[];
	unreadMessageCount: number;
	pinned: boolean;
	isFriend: boolean;
	messages: Messages[];
}

export interface Channels {
	type: string;
	name: string;
	slug: string;
	id: string;
}

export interface textChannelConversations {
	user: string;
	profileImg: string;
	messageId: string;
	time: string;
	message: string;
	senderId: string;
}
export interface Servers {
	id: string;
	slug: string;
	name: string;
	server_img: string;
	online: number;
	members: number;
	lastSeen: string;
	link: string;
	muted: boolean;
	channels: {
		textChannels: Channels[];
		voiceChannels: Channels[];
	};
}
[];

// *============================= HOOKS ============================//

export interface AppPersistableStates {
	l_sidebar_display_context: string | null;

	selectedTab: string | null;
	selectedServer: number | null;

	switchLeftSidebarContext: (newAppState: string | null) => void;

	toggle_selected_tab: (newAppState: string | null) => void;
	toggle_selected_server: (newAppState: number | null) => void;
}
export interface AppSidebarStateProps {
	c_sidebar_state: boolean;
	l_sidebar_state: boolean;
	r_sidebar_state: boolean;
	r_sidebar_display_context: string | null;

	toggle_l_sidebar: () => void;
	toggle_r_sidebar: () => void;
	toggle_c_sidebar: () => void;

	setLSidebarState: (newAppState: boolean) => void;
	setRSidebarState: (newAppState: boolean) => void;
	switchRightSidebarContext: (newAppState: string) => void;
}

export interface CollapsibleSidebarState {
	collapsible_sidebar_display_context: string;

	switchCollapsibleSidebarContext: (newAppState: string) => void;
}

export interface AppNotificationStateProps {
	selectedTab: string;
	toggle_selected_tab: (newAppState: string) => void;
}
