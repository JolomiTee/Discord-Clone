import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	useSidebar,
} from "../components/ui/sidebar";

import { Command } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { MenuItems } from "../components/menu/MenuItems";
import { Button } from "@/components/ui/button";
import { useSandStateStore } from "./sandstate";
import { useEffect } from "react";
import IconButtons from "@/components/common/IconButtons";

const Sandbox = () => {
	const toggle_l_sidebar = useSandStateStore(
		(state) => state.toggle_l_sidebar
	);
	const toggle_r_sidebar = useSandStateStore(
		(state) => state.toggle_r_sidebar
	);
	return (
		<div className="w-full flex overflow-hidden max-h-dvh">
			{/* sidebar 1 */}
			<Collapsible />

			{/* sidebar 2 */}
			<Channels />

			<SidebarInset className="w-full">
				<header className="sticky top-0 flex shrink-0 items-center justify-end gap-2 border-b bg-background px-3 py-2">
					{/* Toggle the Collapsible */}
					<IconButtons
						src="sidebar"
						alt="sidebar"
						action={() => toggle_l_sidebar()}
					/>
					<Separator orientation="vertical" className="mr-2 h-4" />
					<button>Ch</button>
					<Separator orientation="vertical" className="mr-2 h-4" />
					<MenuItems />

					{/* toggles all sidebars */}
					<Separator orientation="vertical" className="mr-2 h-4" />
					<IconButtons
						src="sidebar"
						alt="sidebar"
						action={() => toggle_r_sidebar()}
					/>
				</header>

				<div className="flex overflow-hidden">
					<div className="flex flex-1 flex-col gap-4 p-4 overflow-scroll scrollbar-hidden">
						{Array.from({ length: 20 }).map((_, index) => (
							<div
								key={index}
								className="aspect-video h-12 w-full bg-purple-400 rounded-lg bg-muted/50"
							/>
						))}
					</div>

					{/* sidebar 3 */}
					<Right />
				</div>
			</SidebarInset>
		</div>
	);
};

export default Sandbox;

const Collapsible = () => {
	return (
		<SidebarProvider
			name="collapsible-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<ColSidebar />
		</SidebarProvider>
	);
};

const Channels = () => {
	return (
		<SidebarProvider
			name="left-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<ChanSidebar />
		</SidebarProvider>
	);
};

const Right = () => {
	return (
		<SidebarProvider
			name="right-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<RightSidebar />
		</SidebarProvider>
	);
};

const ColSidebar = () => {
	const toggle_l_sidebar = useSandStateStore(
		(state) => state.toggle_l_sidebar
	);
	const { isMobile, toggleSidebar } = useSidebar();
	return (
		<>
			{!isMobile ? (
				<Sidebar collapsible="icon" className="border-r bg-blue-600 z-50">
					<SidebarHeader>
						{/* <SidebarTrigger className="-ml-1" /> */}
						<Button onClick={() => toggleSidebar()}>Toggle</Button>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									size="lg"
									asChild
									className="md:h-8 md:p-0"
								>
									<a href="#">
										<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
											<Command className="size-4" />
										</div>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-semibold">
												Acme Inc
											</span>
											<span className="truncate text-xs">
												Collapsible Sidebar
											</span>
										</div>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarContent className="scrollbar-hidden p-4 ">
						{Array.from({ length: 20 }).map((_, index) => (
							<div
								key={index}
								className="aspect-video h-12 w-full bg-red-400 rounded-lg bg-muted/50"
							/>
						))}
					</SidebarContent>
				</Sidebar>
			) : (
				<Sidebar
					collapsible="none"
					className={`border-r w-[60px]
					}`}
				>
					<SidebarHeader>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									size="lg"
									asChild
									className="md:h-8 md:p-0"
								>
									<a href="#">
										<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
											<Command className="size-4" />
										</div>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-semibold">
												Acme Inc
											</span>
											<span className="truncate text-xs">
												Collapsible Sidebar
											</span>
										</div>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarContent className="scrollbar-hidden p-4 ">
						{Array.from({ length: 20 }).map((_, index) => (
							<div
								onClick={() => toggle_l_sidebar()}
								key={index}
								className="aspect-video h-12 w-full bg-red-400 rounded-lg bg-muted/50"
							/>
						))}
					</SidebarContent>
				</Sidebar>
			)}
		</>
	);
};

const ChanSidebar = () => {
	const l_sidebar_state = useSandStateStore((state) => state.l_sidebar_state);
	const { toggleSidebar } = useSidebar();

	useEffect(() => {
		toggleSidebar();
		console.log(l_sidebar_state);
	}, [l_sidebar_state]);

	return (
		<Sidebar collapsible="offcanvas" className="border-r bg-red-400">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
							className="md:h-8 md:p-0"
						>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										Acme Inc
									</span>
									<span className="truncate text-xs">
										Channels Sidebar
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="scrollbar-hidden p-4 ">
				{Array.from({ length: 20 }).map((_, index) => (
					<div
						key={index}
						className="aspect-video h-12 w-full bg-orange-400 rounded-lg bg-muted/50"
					/>
				))}
			</SidebarContent>
		</Sidebar>
	);
};

const RightSidebar = () => {
	const r_sidebar_state = useSandStateStore((state) => state.r_sidebar_state);
	const { toggleSidebar } = useSidebar();

	useEffect(() => {
		toggleSidebar();
		console.log(r_sidebar_state);
	}, [r_sidebar_state]);

	return (
		<Sidebar
			collapsible="offcanvas"
			side="right"
			className="border-l bg-green-400 h-full overflow-scroll scrollbar-hidden"
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
							className="md:h-8 md:p-0"
						>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										Acme Inc
									</span>
									<span className="truncate text-xs">
										Right Sidebar
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent className="scrollbar-hidden p-4 ">
				{Array.from({ length: 20 }).map((_, index) => (
					<div
						key={index}
						className="aspect-video h-12 w-full bg-yellow-400 rounded-lg bg-muted/50"
					/>
				))}
			</SidebarContent>
		</Sidebar>
	);
};