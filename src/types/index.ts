// Common properties
interface BaseNotification {
	id: string;
	title: string
  message: string;
  timestamp: Date;
  read: boolean;
}

// High-level notifications
export interface ForYouNotification extends BaseNotification {
  type: 'authentication' | 'invite' | 'authorization' | 'welcome' | 'server_action' | 'channel_action' | 'error';
  actionUrl?: string; // For redirect links
}

// Mentions and unread messages
export interface MessageNotification extends BaseNotification {
  type: 'dm' | 'channel_message';
  serverId?: string; // id of the server that will be fetched
  channelId?: string; // Channel or DM ID
}
