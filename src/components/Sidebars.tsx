import { useStore } from "@/hooks/base-context";
import MessagesDisplayVariant from "./sidebar/L/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidebar/L/ServerDisplayVariant";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import ChInfoDisplayVariant from "./sidebar/R/ChInfoDisplayVariant";
import MembersDisplayVariant from "./sidebar/R/MembersDisplayVariant";

export const LSidebar = () => {
	const l_sidebar_display_context = useStore(
		(state) => state.l_sidebar_display_context
	);

	return (
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
	);
};

export const RSidebar = () => {
	const r_sidebar_display_context = useStore(
		(state) => state.r_sidebar_display_context
	);
	return (
		<Sidebar id="rsidebar" side="right">
			<SidebarContent id="sidebar-content">
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					{r_sidebar_display_context === "server" ? (
						<ChInfoDisplayVariant />
					) : (
						<MembersDisplayVariant />
					)}
				</section>
			</SidebarContent>
		</Sidebar>
	);
};
