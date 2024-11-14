import { Button } from "@/components/ui/button";
import { MessageNotification } from "@/types";
import { AlertCircle, Hash, MessagesSquare } from "lucide-react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../../components/ui/alert";

export function AlertUnread({
	notification,
}: {
	notification: MessageNotification;
}) {
	const getIcon = () => {
		switch (notification.type) {
			case "dm":
				return <MessagesSquare className="size-6 stroke-discord-blue" />;
			case "channel_message":
				return <Hash className="size-6 stroke-white" />;
			default:
				return <AlertCircle className="size-6 stroke-red-300" />;
		}
	};
	return (
		<Alert className="rounded-[10px] bg-charcoal text-white ">
			{getIcon()}
			<AlertTitle className="font-semibold">
				{notification.title || "Notification"} {notification.channelId}
			</AlertTitle>
			<AlertDescription className="flex flex-col md:flex-row sm:gap-3 text-[13px] md:text-sm pt-1 md:w-full items-start">
				<span className="w-full">{notification.message}</span>
				<div className="flex justify-end mt-2 w-full md:w-fit">
					<Button className="w-fit px-2 py-1.5 text-xs rounded-[8px] h-fit">
						Mark as read
					</Button>
				</div>
			</AlertDescription>
		</Alert>
	);
}
