import { useStore } from "@/hooks/base-context";
import MessagesDisplayVariant from "./sidebar/L/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidebar/L/ServerDisplayVariant";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export const LSidebar = () => {
	const appState = useStore((state) => state.appState);

	return (
		<Sidebar id="lsidebar">
			<SidebarContent id="sidebar-content">
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					{appState === "server" ? (
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
	return (
		<Sidebar id="rsidebar" side="right">
			<SidebarContent id="sidebar-content">
				<section className="bg-carbon relative text-[#FFFFFF99] h-full">
					<ServerDisplayVariant />
				</section>
			</SidebarContent>
		</Sidebar>
	);
};
