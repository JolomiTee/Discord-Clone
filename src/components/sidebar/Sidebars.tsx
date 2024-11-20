import { useSidebarStateStore } from "@/hooks/base-context";

import MessagesDisplayVariant from "./L/MessagesDisplayVariant";
import ServerDisplayVariant from "./L/ServerDisplayVariant";

import { SidebarProvider } from "@/components/ui/sidebar";
import RSidebarContexts from "./R/RSidebarContexts";
import { useParams } from "react-router-dom";
import usePersistAppState from "@/hooks/use-persist-app-state";

export const LSidebar = () => {
	const l_sidebar_display_context = usePersistAppState(
		(state) => state.l_sidebar_display_context
	);

	const { serverId } = useParams();

	return (
		<SidebarProvider
			name="left-sidebar"
			className="text-[#B5BFE7] max-h-dvh max-w-fit"
		>
			{(location.pathname.includes("@me") ||
				location.pathname.includes(`/@server/${serverId}`)) &&
				(l_sidebar_display_context === "server" ? (
					<ServerDisplayVariant serverId={serverId} />
				) : (
					<MessagesDisplayVariant />
				))}
		</SidebarProvider>
	);
};

export const RSidebar = () => {
	return (
		<SidebarProvider
			name="right-sidebar"
			defaultOpen={false}
			className="text-[#B5BFE7] max-h-dvh max-w-fit"
		>
			<RSidebarContexts />
		</SidebarProvider>
	);
};

