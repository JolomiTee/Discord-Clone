import { useStore } from "@/hooks/base-context";
import MessagesDisplayVariant from "./sidelist/MessagesDisplayVariant";
import ServerDisplayVariant from "./sidelist/ServerDisplayVariant";

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

const Sidelist = () => {
	const appState = useStore((state) => state.appState);
	return (
		// <section className="lg:min-w-[20%] lg:max-w-[20%] bg-carbon relative text-[#FFFFFF99]">
		// 	{appState === "server" ? (
		// 		<ServerDisplayVariant />
		// 	) : (
		// 		<MessagesDisplayVariant />
		// 	)}
		// </section>
		<Sidebar id="sidebar">
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

export default Sidelist;
