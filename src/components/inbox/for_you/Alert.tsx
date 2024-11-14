import { AlertCircle, Bell, Key, Shield, UserPlus } from "lucide-react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../../components/ui/alert";
import { Notification } from "@/types";
import { Button } from "@/components/ui/button";

export function AlertForYou({ notification }: { notification: Notification }) {
	const getIcon = () => {
		switch (notification.type) {
			case "auth":
				return <Shield className="h-4 w-4 stroke-white" />;
			case "role":
				return <Key className="h-4 w-4 stroke-white" />;
			case "welcome":
				return <Bell className="h-4 w-4 stroke-white" />;
			case "invite":
				return <UserPlus className="h-4 w-4  stroke-white" />;
			default:
				return <AlertCircle className="h-4 w-4 stroke-white" />;
		}
	};
	return (
		<Alert className="rounded-[10px] bg-charcoal text-white ">
			{getIcon()}
			<AlertTitle className="font-semibold">
				{notification.title || "Notification"}
			</AlertTitle>
			<AlertDescription className="flex flex-col sm:gap-3 text-xs md:text-sm">
				<span className="w-full">{notification.message}</span>
				<div className="flex justify-end mt-2 w-full">
					<Button className="w-fit px-2 py-1.5 text-xs rounded-[8px] h-fit">
						Mark as read
					</Button>
				</div>
			</AlertDescription>
		</Alert>
	);
}
