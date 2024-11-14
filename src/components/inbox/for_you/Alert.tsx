import {
	AlertCircle,
	Bell,
	CheckIcon,
	Key,
	Shield,
	UserPlus,
} from "lucide-react";
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
			<AlertDescription className="text-xs md:text-sm">
				{notification.message}
				<div className="flex w-full justify-end mt-2">
					<Button className="w-fit px-2 py-1.5 text-xs rounded-[10px] h-fit">
						Mark as read
					</Button>
				</div>
			</AlertDescription>
		</Alert>
	);
}
