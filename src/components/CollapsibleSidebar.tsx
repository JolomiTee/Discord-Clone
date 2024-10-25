"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { serverList } from "@/data";
import IconButtons from "./IconButtons";

export default function CollapsibleSidebar({ open }: { open: boolean }) {
	return (
		<SidebarProvider className="w-fit z-20 text-[#B5BFE7]" open={open}>
			<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
				<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
					<SidebarGroup className="p-0">
						<SidebarMenu className="gap-0">
							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Search"
									className="gap-8 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden  p-0 ps-3"
								>
									<Avatar className="size-[50px] flex justify-center items-center ">
										<AvatarImage
											src="/icons/search.svg"
											className="w-[30px]"
										/>
									</Avatar>
									<span>Search</span>
								</SidebarMenuButton>
							</SidebarMenuItem>

							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Messahes"
									className="gap-8 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden  p-0 ps-3"
								>
									<Avatar className="size-[50px] flex justify-center items-center ">
										<AvatarImage
											src="/icons/messages.svg"
											className="w-[30px]"
										/>
									</Avatar>
									<span>Messages</span>
								</SidebarMenuButton>
							</SidebarMenuItem>

							<Separator className="group-data-[collapsible=icon]:w-[70%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 w-[52px] my-2 ms-3" />

							<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
								<SidebarMenuButton
									tooltip="Servers"
									className="gap-8 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden  p-0 ps-3"
								>
									<Avatar className="size-[50px] flex justify-center items-center ">
										<AvatarImage
											src="/icons/servers.svg"
											className="w-[30px]"
										/>
									</Avatar>
									<span>Servers</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarHeader>

				<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll pt-2">
					<SidebarGroup className="p-0">
						<SidebarMenu className="gap-y-3">
							{serverList.map((item) => (
								<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
									<SidebarMenuButton
										tooltip={item.title}
										className="gap-8 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-3"
									>
										<Avatar className="size-[50px]">
											<AvatarImage src={item.serverIcon} />
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

				<SidebarFooter className="bg-onyx p-0 pb-5">
					<SidebarMenu>
						<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center ">
							<SidebarMenuButton
								tooltip="Inbox"
								className="gap-8 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden  p-0 ps-3"
							>
								<Avatar className="size-[50px] flex justify-center items-center ">
									<AvatarImage
										src="/icons/inbox.svg"
										className="w-[40px]"
									/>
								</Avatar>
								<span>Inbox</span>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center">
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[60px] group-data-[collapsible=icon]:[&>div:last-child]:hidden group-data-[collapsible=icon]:overflow-visible py-0 px-3 shrink-0 gap-0"
							>
								<Avatar className="relative group-data-[collapsible=icon]:rounded-full size-[60px] group-data-[collapsible=icon]:size-[55px] flex items-center justify-center bg-charcoal rounded-[15px] p-[10px] group-data-[collapsible=icon]:p-1.5 overflow-visible rounded-r-none">
									<div className="absolute right-0.5 group-data-[collapsible=icon]:-right-1 top-1 bg-crimson rounded-full size-[14px] border-[3px] border-solid border-onyx"></div>
									<div className="absolute right-0.5 group-data-[collapsible=icon]:-right-1 bottom-1 bg-emerald rounded-full size-[14px] border-[3px] border-solid border-onyx"></div>
									<AvatarImage
										src="/beluga.png"
										className="rounded-full"
									/>
									<AvatarFallback className="bg-discord-blue">
										<img
											src="/icons/discord.svg"
											className="size-[30px] "
										/>
									</AvatarFallback>
								</Avatar>

								<div className="flex justify-center items-center bg-charcoal rounded-[15px] rounded-l-none p-2 h-full w-full">
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold text-white">
											InflexibleTow9
										</span>
										<span className="truncate text-sm font-semibold">
											Online
										</span>
									</div>

									<div className="flex justify-center items-center gap-1">
										<IconButtons
											src="servers"
											alt="Servers"
											sizes="size-[16px]"
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
