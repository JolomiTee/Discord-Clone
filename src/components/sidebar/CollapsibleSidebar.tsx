import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { serverList } from "@/data";
import ProfileHolder from "../server/ProfileHolder";
import SidebarNavLink from "../server/SidebarNavTab";
import SidebarServerIcon from "../server/SidebarServerIcon";
import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import { Button } from "../ui/button";
import { SidebarClose } from "lucide-react";

export default function CollapsibleSidebar() {
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);
	const selectedTab = useCollapsibleSidebarStore((state) => state.selectedTab);
	const toggle_selected_tab = useCollapsibleSidebarStore(
		(state) => state.toggle_selected_tab
	);
	const collapsible_sidebar_display_context = useCollapsibleSidebarStore(
		(state) => state.collapsible_sidebar_display_context
	);
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const switchCollapsibleSidebarContext = useCollapsibleSidebarStore(
		(state) => state.switchCollapsibleSidebarContext
	);
	return (
		<SidebarProvider
			className="w-fit z-20 text-[#B5BFE7]"
			open={c_sidebar_state}
		>
			{collapsible_sidebar_display_context === "search" ? (
				<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
					<Button
						onClick={() => {
							toggle_c_sidebar();
							toggle_selected_tab(selectedTab);
							switchCollapsibleSidebarContext("menu");
						}}
					>
						<SidebarClose />
					</Button>
					<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
						<SidebarGroup className="p-0"></SidebarGroup>
					</SidebarHeader>

					<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll pt-2">
						<SidebarGroup className="p-0">
							<SidebarMenu className="gap-y-3 h-10 bg-blue-500"></SidebarMenu>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>
			) : (
				<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
					<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
						<SidebarGroup className="p-0">
							<SidebarMenu className="gap-0">
								<SidebarNavLink to="#" icon="search" label="Search" />

								<SidebarNavLink
									to="/@me"
									icon="messages"
									label="Messages"
								/>

								<Separator className="group-data-[collapsible=icon]:w-[70%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 w-[52px] my-2 ms-3" />

								<SidebarNavLink
									to="/servers"
									icon="servers"
									label="Servers"
								/>
							</SidebarMenu>
						</SidebarGroup>
					</SidebarHeader>

					<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll pt-2">
						<SidebarGroup className="p-0">
							<SidebarMenu className="gap-y-3">
								{serverList.map((item, i) => {
									const { title, serverIcon, hasNotification } = item;
									return (
										<SidebarServerIcon
											title={title}
											serverIcon={serverIcon}
											hasNotification={hasNotification}
											i={i}
										/>
									);
								})}
							</SidebarMenu>
						</SidebarGroup>
					</SidebarContent>

					<SidebarFooter className="bg-onyx p-0 pb-5">
						<SidebarMenu>
							<SidebarNavLink to="/inbox" icon="inbox" label="Inbox" />

							<ProfileHolder />
						</SidebarMenu>
					</SidebarFooter>
				</Sidebar>
			)}
		</SidebarProvider>
	);
}
