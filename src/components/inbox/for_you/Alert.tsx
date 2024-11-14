import { MessageSquare } from "lucide-react";

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../../components/ui/alert";

export function AlertForYou() {
	return (
		<Alert className="rounded-[15px] bg-charcoal text-white">
			<MessageSquare className="h-4 w-4 stroke-white" />
			<AlertTitle className="font-semibold">Heads up!</AlertTitle>
			<AlertDescription>
				Rediscord will support notifications soon... even in real time!
			</AlertDescription>
		</Alert>
	);
}
