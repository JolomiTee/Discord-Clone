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
import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import { ChevronDown, Search, SidebarClose } from "lucide-react";
import ChatBubble from "../common/ChatBubble";
import ProfileHolder from "../server/ProfileHolder";
import SidebarNavLink from "../server/SidebarNavTab";
import SidebarServerIcon from "../server/SidebarServerIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
					<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
						<SidebarGroup className="py-0 flex flex-row items-center gap-1 relative">
							<Search
								className="absolute left-4 top-1/2 -translate-y-1/2"
								width={20}
							/>
							<Input
								type="search"
								placeholder="Search Discord"
								className="bg-black rounded-[11px] ring-0 border-0 w-full ps-10"
							/>
							<Button
								onClick={() => {
									toggle_c_sidebar();
									toggle_selected_tab(selectedTab);
									switchCollapsibleSidebarContext("menu");
								}}
								className="w-fit h-fit rounded-full p-2 shadow-none bg-black"
							>
								<SidebarClose />
							</Button>
						</SidebarGroup>

						<SidebarGroup className="gap-2 flex-row flex-wrap">
							<Button className="w-fit h-fit text-sm rounded-full px-2 py-1">
								#general-chat <ChevronDown />
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-2 py-1">
								New
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-2 py-1">
								Old
							</Button>
							<Button className="w-fit h-fit text-sm rounded-full px-2 py-1">
								Relevant
							</Button>
						</SidebarGroup>
					</SidebarHeader>

					<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll">
						<SidebarGroup className="gap-3">
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
							<ChatBubble
								profileImg="/touchgrasshq.png"
								time="10:33am"
								message="no??? to go out and enjoy the sun and touch grass"
								user="grass enjoyer"
							/>
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
