import { Button } from "@/components/ui/button";
import { ForYouNotification } from "@/types";
import { AlertCircle, Bell, Key, Shield, UserPlus } from "lucide-react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../../components/ui/alert";

export function AlertForYou({
	notification,
}: {
	notification: ForYouNotification;
}) {
	const getIcon = () => {
		switch (notification.type) {
			case "authorization":
				return <Shield className="size-6 stroke-discord-blue" />;
			case "authentication":
				return <Key className="size-6 stroke-soft-blue" />;
			case "welcome":
				return <Bell className="size-6 stroke-green-300" />;
			case "invite":
				return <UserPlus className="size-6  stroke-yellow-300" />;
			default:
				return <AlertCircle className="size-6 stroke-red-300" />;
		}
	};
	return (
		<Alert className="rounded-[10px] bg-charcoal text-white ">
			{getIcon()}
			<AlertTitle className="font-bold">
				{notification.title || "Notification"}
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
