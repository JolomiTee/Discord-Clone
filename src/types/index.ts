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
	_id: string;
	username: string;
	email_address: string;
	profile_image_url: string;
	firstName: string;
	lastName: string;

	// online: boolean;
	// hasMessage: boolean;
	// messageCount: number;
	// pinned: boolean;
}

interface LastMessage {
	userId: number;
	time: string;
	message: string;
}

// Define the currentUser interface
export interface CurrentUser {
	userId: string | undefined;
	username: string | null | undefined;
	userProfileImage: string | undefined;
}

// Define the message structure
export interface Message {
	msg_id: string;
	time: string;
	message: string;
	sender_info: CurrentUser;
}

// Define the Zustand store's state and actions
export interface DirectMessagesStateProps {
	messages: Message[]; // Array of Message objects
	updateMessages: (newMessage: Message) => void; // Accept a new Message object
}
export interface HMenuSelectedClient {
	client: Friends | CurrentChannels; // Array of Message objects
	updateHMenuSelectedClient: (newClient: Friends | CurrentChannels) => void; // Accept a new client object
}
export interface Conversation {
	conversationId: string;
	participants: string[];
	lastMessage: LastMessage[];
	unreadMessageCount: number;
	pinned: boolean;
	isFriend: boolean;
	messages: Message[];
}

export interface Channels {
	type: string;
	name: string;
	slug: string;
	_id: string;
}

export interface CurrentChannels {
	name: string | undefined;
	channelType?: string | undefined;
	profile_image?: string | undefined;
}

export interface textChannelConversations {
	channelId: string;
	messages: {
		user: string;
		profileImg: string;
		messageId: string;
		time: string;
		message: string;
		senderId: string;
	}[];
}
export interface Servers {
	_id: string;
	name: string;
	ownedby: string;
	description: string;
	banner_image_url: string;
	profile_image_url: string;
	members: string[];
	channels: {
		textChannels: Channels[];
		voiceChannels: Channels[];
	};
};

// *============================= HOOKS ============================//

export interface AppPersistableStates {
	l_sidebar_display_context: string | null;

	selectedTab: string | null;
	selectedServer: string | null;

	switchLeftSidebarContext: (newAppState: string | null) => void;

	toggle_selected_tab: (newAppState: string | null) => void;
	toggle_selected_server: (newAppState: string | null) => void;
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
