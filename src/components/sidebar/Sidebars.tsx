import { useSidebarStateStore } from "@/hooks/base-context";

import MessagesDisplayVariant from "./L/MessagesDisplayVariant";
import ServerDisplayVariant from "./L/ServerDisplayVariant";

import { SidebarProvider } from "@/components/ui/sidebar";
import RSidebarContexts from "./R/RSidebarContexts";

export const LSidebar = () => {
	const l_sidebar_display_context = useSidebarStateStore(
		(state) => state.l_sidebar_display_context
	);

	return (
		<SidebarProvider
			name="left-sidebar"
			className="text-[#B5BFE7] max-h-dvh max-w-fit"
		>
			{l_sidebar_display_context === "server" ? (
				<ServerDisplayVariant />
			) : (
				<MessagesDisplayVariant />
			)}
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

