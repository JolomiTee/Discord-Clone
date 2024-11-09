import { useSidebarStateStore } from "@/hooks/base-context";

import MessagesDisplayVariant from "./L/MessagesDisplayVariant";
import ServerDisplayVariant from "./L/ServerDisplayVariant";
import ChInfoDisplayVariant from "./R/ChannelInfo";
import Members from "./R/Members";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarProvider,
	useSidebar,
} from "@/components/ui/sidebar";
import { useEffect } from "react";
import FooterCard from "./R/Members/FooterCard";
import MemberList from "./R/Members/MemberList";

export const LSidebar = () => {
	const l_sidebar_display_context = useSidebarStateStore(
		(state) => state.l_sidebar_display_context
	);

	return (
		<SidebarProvider
			name="left-sidebar"
			className="text-[#B5BFE7] overflow-hidden max-h-dvh max-w-fit"
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
			className="text-[#B5BFE7] overflow-hidden max-h-dvh max-w-fit"
		>
			<RSidebarContexts />
		</SidebarProvider>
	);
};

const RSidebarContexts = () => {
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);

	const { open, toggleSidebar } = useSidebar();
	useEffect(() => {
		// Only toggle if the desired state doesn't match the current open state
		if (r_sidebar_state && !open) {
			toggleSidebar();
		} else if (!r_sidebar_state && open) {
			toggleSidebar();
		}
	}, [r_sidebar_state, open]);

	return (
		<Sidebar side="right" className=" border-none">
			<SidebarContent
				id="sidebar-content"
				className="bg-carbon relative text-white"
			>
				<section className="bg-carbon relative text-white  overflow-y-auto max-h-full scrollbar-hidden">
					{r_sidebar_display_context === "channel_info" ? (
						<ChInfoDisplayVariant />
					) : r_sidebar_display_context === "members" ? (
						<Members />
					) : null}
				</section>
			</SidebarContent>

			{r_sidebar_display_context === "members" && (
				<SidebarFooter className="border-t-2 border-t-white/[8%] border-dashed bg-carbon relative text-white p-3 pe-0 ">
					<MemberList />
					<FooterCard />
				</SidebarFooter>
			)}
		</Sidebar>
	);
};
