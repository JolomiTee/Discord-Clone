import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "../components/ui/sidebar";

import { Command } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { MenuItems } from "../components/menu/MenuItems";
import { useSidebarStateStore } from "@/hooks/base-context";
import IconButtons from "@/components/common/IconButtons";

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const Sandbox = () => {
	const l_sidebar_state = useSidebarStateStore(
		(state) => state.l_sidebar_state
	);
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);

	const toggle_l_sidebar = useSidebarStateStore(
		(state) => state.toggle_l_sidebar
	);
	const toggle_r_sidebar = useSidebarStateStore(
		(state) => state.toggle_r_sidebar
	);
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);

	const switchRightSidebarContext = useSidebarStateStore(
		(state) => state.switchRightSidebarContext
	);

	// Function to get a cookie value by name
	function getCookie(name: string) {
		const cookieValue = document.cookie
			.split("; ")
			.find((row) => row.startsWith(`${name}:state=`))
			?.split("=")[1];

		return cookieValue;
	}

	// Function to set a cookie
	function setCookie(name: string, value: string) {
		document.cookie = `${name}:state=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}

	// Function to toggle the "collapsible-sidebar:state" cookie
	function toggleSidebarState(name: string) {
		const cookieName = name;
		const sidebarState = getCookie(cookieName);

		if (sidebarState === "false") {
			setCookie(cookieName, "true"); // Set to "true" if it's "false"
			console.log(`${cookieName} state updated to true.`);
		} else {
			setCookie(cookieName, "false"); // Set to "false" otherwise
			console.log(`${cookieName}  state updated to false.`);
		}
	}

	return (
		<div className="w-full flex overflow-hidden max-h-dvh">
			{/* sidebar 1 */}
			<Collapsible />

			{/* sidebar 2 */}
			<Channels l_sidebar_state={l_sidebar_state} />

			<div className="w-full">
				<header className="sticky top-0 flex shrink-0 items-center justify-end gap-2 border-b bg-background p-4">
					{/* Toggle the Collapsible */}
					<IconButtons
						src="sidebar"
						alt="Sidebar"
						action={toggle_l_sidebar}
					/>
					<Separator orientation="vertical" className="mr-2 h-4" />
					{/* toggle the Channels */}
					<button>Ch</button>
					{/* toggle the Right */}
					<Separator orientation="vertical" className="mr-2 h-4" />
					<IconButtons
						src="sidebar"
						alt="Sidebar"
						action={() => {
							if (r_sidebar_display_context !== "channel_info") {
								// Open the sidebar only if the context isn't "channel_info"
								if (!r_sidebar_state) {
									toggle_r_sidebar(); // Open the sidebar if it's closed
								}
								switchRightSidebarContext("channel_info"); // Set the context to "channel_info"
							} else {
								toggle_r_sidebar(); // Close the sidebar if it's already showing "channel_info"
							}
						}}
					/>
					<MenuItems />

					{/* toggles all sidebars */}
					<Separator orientation="vertical" className="mr-2 h-4" />
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
					<Right r_sidebar_state={r_sidebar_state} />
				</div>
			</div>
		</div>
	);
};

export default Sandbox;

interface LProps {
	l_sidebar_state: boolean;
}
interface Rprops {
	r_sidebar_state: boolean;
}

const Collapsible = () => {
	return (
		<SidebarProvider
			name="collapsible-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<Sidebar collapsible="icon" className="border-r bg-blue-600 z-50">
				<SidebarHeader>
					<SidebarTrigger className="-ml-1" />
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
		</SidebarProvider>
	);
};

const Channels = ({ l_sidebar_state }: LProps) => {
	return (
		<SidebarProvider
			open={l_sidebar_state}
			name="left-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<Sidebar collapsible="icon" className="border-r bg-red-400">
				<SidebarHeader>
					<SidebarTrigger className="-ml-1" />
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
		</SidebarProvider>
	);
};

const Right = ({ r_sidebar_state }: Rprops) => {
	return (
		<SidebarProvider
			open={r_sidebar_state}
			name="right-sidebar"
			className="w-fit overflow-hidden max-h-dvh"
		>
			<Sidebar
				collapsible="icon"
				side="right"
				className="border-l bg-green-400 h-full overflow-scroll scrollbar-hidden"
			>
				<SidebarHeader>
					<SidebarTrigger className="-ml-1" />
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
		</SidebarProvider>
	);
};
