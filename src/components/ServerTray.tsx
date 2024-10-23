import { serverList } from "@/data";
import { useStore } from "@/hooks/base-context";
import { useState } from "react";
import IconButtons from "./IconButtons";
import ProfileHolder from "./server_tray/ProfileHolder";
import SidebarServerIcon from "./server_tray/SidebarServerIcon";
import { Separator } from "./ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from "./ui/sidebar";

const ServerTray = () => {
	const [clickedServer, setClickedServer] = useState("");
	const switchLeftSidebarContext = useStore(
		(state) => state.switchLeftSidebarContext
	);

	const handleServerClick = (server: string) => {
		setClickedServer(server);
		switchLeftSidebarContext("server");
	};
	return (
		<Sidebar collapsible="icon" className="z-20">
			<SidebarHeader className="bg-onyx">
				<SidebarMenu className="gap-3">
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
								<img
									src="/icons/search.svg"
									alt="Search"
									className="w-[25px] h-[25px]"
								/>
							</div>

							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">Search</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
								<img
									src="/icons/messages.svg"
									alt="Menu"
									className="w-[40px] h-[40px]"
								/>
							</div>

							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">Messages</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
								<img
									src="/icons/servers.svg"
									alt="Servers"
									className="w-[35px] h-[35px]"
								/>
							</div>

							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">Servers</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<Separator className="rounded-full bg-charcoal h-1 mx-auto" />
			<SidebarTrigger className="-ml-1" />

			<SidebarContent className="bg-onyx flex flex-col gap-y-[10px]  overflow-y-auto max-h-full scrollbar-hidden">
				<SidebarMenu className="gap-3">
					{serverList.map((server, index) => {
						const { name, serverImage, hasNotification } = server;

						return (
							<SidebarMenuItem key={index}>
								<SidebarMenuButton
									size="lg"
									className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
								>
									<div className="flex aspect-square items-center justify-center rounded-full ">
										<SidebarServerIcon
											name={name}
											serverImage={serverImage}
											hasNotification={hasNotification}
											isClicked={clickedServer === name}
											onClick={() => {
												handleServerClick(name);
											}}
										/>
									</div>

									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">
											{name}
										</span>
									</div>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarContent>

			<SidebarFooter className="bg-onyx flex flex-col items-center gap-y-[15px] mt-auto mb-0">
				<Separator className="rounded-full bg-charcoal h-1 mx-auto" />
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
								<img
									src="/icons/mail.svg"
									alt="Mail"
									className="w-[35px] h-[35px]"
								/>
							</div>

							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">Archives</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
								<ProfileHolder />
							</div>

							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									InflexibleTow9
								</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default ServerTray;
