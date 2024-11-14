export interface NotificationType {
	date: number;
	type: string;
	title: string;
	text?: string;
	roleInvolved?: string;
	newRole?: string;
	isUpgrade?: boolean;
	server?: number;
	channel?: number;
}[]