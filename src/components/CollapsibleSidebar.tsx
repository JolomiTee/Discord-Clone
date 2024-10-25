"use client";

import {
	AudioWaveform,
	BadgeCheck,
	Bell,
	BookOpen,
	Bot,
	ChevronRight,
	ChevronsUpDown,
	Command,
	CreditCard,
	Folder,
	Forward,
	Frame,
	GalleryVerticalEnd,
	LogOut,
	Map,
	MoreHorizontal,
	PieChart,
	Plus,
	Settings2,
	Sparkles,
	SquareTerminal,
	Trash2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import IconButtons from "./IconButtons";
// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveform,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: Command,
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};

export default function CollapsibleSidebar({ open }: { open: boolean }) {
	return (
		<SidebarProvider className="w-fit z-20 text-[#B5BFE7]" open={open}>
			<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
				<SidebarHeader id="sidebar_header" className="bg-onyx pb-0">
					<SidebarGroup className="p-0">
						<SidebarMenu>
							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Search"
									className="gap-10 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden"
								>
									<img
										src="/icons/search.svg"
										className="size-[30px] group-data-[collapsible=icon]:mx-auto"
									/>
									<span>Search</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>

						<SidebarMenu>
							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Messages"
									className="gap-10 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden"
								>
									<img
										src="/icons/messages.svg"
										className="size-[30px] group-data-[collapsible=icon]:mx-auto"
									/>
									<span>Messages</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>

						<Separator className="group-data-[collapsible=icon]:w-[70%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 w-[55px] my-2" />

						<SidebarMenu>
							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Servers"
									className="gap-10 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden"
								>
									<img
										src="/icons/servers.svg"
										className="size-[30px] group-data-[collapsible=icon]:mx-auto"
									/>
									<span>Servers</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarHeader>

				<SidebarContent className="bg-onyx scrollbar-hidden pt-2">
					<SidebarGroup className="p-0">
						<SidebarMenu className="gap-y-3">
							{data.navMain.map((item) => (
								<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
									<SidebarMenuButton
										tooltip="Servers"
										className="gap-8 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-3"
									>
										<Avatar className="size-[50px]">
											<AvatarImage src="/beuga.png" />
											<AvatarFallback className="bg-discord-blue">
												<img
													src="/icons/discord.svg"
													className="size-[30px] "
												/>
											</AvatarFallback>
										</Avatar>
										<span>{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>

				<SidebarFooter className="bg-onyx">
					<Separator className="group-data-[collapsible=icon]:w-[70%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 w-[55px] my-2" />

					<SidebarMenu>
						<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
							<SidebarMenuButton
								tooltip="Inbox"
								className="h-[60px] gap-10 group-data-[collapsible=icon]:ps-1.5 items-center text-base"
							>
								<img src="/icons/inbox.svg" className="size-[35px]" />
								<span>Inbox</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>

					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div className="relative rounded-full size-[50px] flex items-center justify-center">
									<div className="absolute -right-1 top-0 bg-crimson rounded-full size-4 border-[3px] border-solid border-onyx"></div>
									<div className="absolute -right-1 bottom-0 bg-emerald rounded-full size-4 border-[3px] border-solid border-onyx"></div>
									<Avatar className="">
										<AvatarImage
											src="/beluga.png"
											className="size-[40px] mx-auto my-auto object-cover"
										/>
										<AvatarFallback className="bg-transparent">
											<img
												src="/icons/discord.svg"
												className="size-[35px] mx-auto my-auto"
											/>
										</AvatarFallback>
									</Avatar>
								</div>

								<div className="flex justify-center items-center">
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">
											InflexibleTow9
										</span>
										<span className="truncate text-xs">online</span>
									</div>

									<div className="flex justify-center items-center gap-2">
										<IconButtons
											src="servers"
											alt="Servers"
											sizes="size-[20px]"
										/>
										<IconButtons
											src="servers"
											alt="Servers"
											sizes="size-[20px]"
										/>
										<IconButtons
											src="servers"
											alt="Servers"
											sizes="size-[20px]"
										/>
										<IconButtons
											src="servers"
											alt="Servers"
											sizes="size-[20px]"
										/>
									</div>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	);
}
