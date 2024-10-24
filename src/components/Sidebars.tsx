import { useStore } from "@/hooks/base-context";

import MessagesDisplayVariant from "./sidebar/L/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidebar/L/ServerDisplayVariant";
import ChInfoDisplayVariant from "./sidebar/R/ChannelInfo";
import Members from "./sidebar/R/Members";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarProvider,
} from "@/components/ui/sidebar";
import FooterCard from "./sidebar/R/Members/FooterCard";
import MemberList from "./sidebar/R/Members/MemberList";

export const LSidebar = ({ open }: { open: boolean }) => {
	const l_sidebar_display_context = useStore(
		(state) => state.l_sidebar_display_context
	);

	return (
		<SidebarProvider open={open} className="w-fit">
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

export const RSidebar = ({ open }: { open: boolean }) => {
	const r_sidebar_display_context = useStore(
		(state) => state.r_sidebar_display_context
	);
	return (
		<SidebarProvider open={open} className="w-fit">
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
