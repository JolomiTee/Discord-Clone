import { useStore } from "@/hooks/base-context";
import MessagesDisplayVariant from "./sidebar/L/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidebar/L/ServerDisplayVariant";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

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
	const appState = useStore((state) => state.appState);
	return (
		<Sidebar id="rsidebar" side="right">
			<SidebarContent id="sidebar-content">
				<SidebarGroup id="sidebar-group">
					<SidebarGroupContent id="sidebar-group-content">
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
