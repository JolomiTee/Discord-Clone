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
} from "@/components/ui/sidebar";
import FooterCard from "./R/Members/FooterCard";
import MemberList from "./R/Members/MemberList";

export const LSidebar = () => {
	const l_sidebar_display_context = useSidebarStateStore(
		(state) => state.l_sidebar_display_context
	);
	const l_sidebar_state = useSidebarStateStore(
		(state) => state.l_sidebar_state
	);
	console.log(l_sidebar_state);

	return (
		<SidebarProvider open={l_sidebar_state} className="w-fit">
			<Sidebar id="lsidebar">
				<SidebarContent id="sidebar-content">
					<section className="bg-carbon relative text-[#FFFFFF99] h-full">
						{l_sidebar_display_context === "server" ? (
							<ServerDisplayVariant />
						) : (
							<MessagesDisplayVariant />
						)}
					</section>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
};

export const RSidebar = () => {
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);

	return (
		<SidebarProvider open={r_sidebar_state} className="w-fit">
			<Sidebar id="rsidebar" side="right">
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
		</SidebarProvider>
	);
};