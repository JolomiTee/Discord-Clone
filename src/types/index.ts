export interface Notification {
  id: string; // Unique identifier for the notification
  type: 'auth' | 'alert' | 'welcome' | 'message' | 'error' | 'invite' | 'role'; // Notification type
  title?: string; // Optional title for the notification
  message: string; // Main notification message
  timestamp: Date; // Time of notification creation
  read: boolean; // Whether the user has viewed this notification
  actionUrl?: string; // URL for redirection, if relevant
  icon?: string; // Optional icon URL or name based on type
}
