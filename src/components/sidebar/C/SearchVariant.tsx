import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
} from "@/components/ui/sidebar";
import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import { ChevronDown, Search, SidebarClose } from "lucide-react";
import ChatBubble from "../../common/ChatBubble";
import ServerSearch from "../../search/ServerSearch";
import SidebarServerIcon from "../../common/sidebar_buttons/SidebarServerIcon";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const SearchVariant = () => {
	const selectedTab = useCollapsibleSidebarStore((state) => state.selectedTab);
	const toggle_selected_tab = useCollapsibleSidebarStore(
		(state) => state.toggle_selected_tab
	);
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const switchCollapsibleSidebarContext = useCollapsibleSidebarStore(
		(state) => state.switchCollapsibleSidebarContext
	);
	return (
		<Sidebar id="sidebar" collapsible="icon" className="bg-transparent">
			<SidebarHeader id="sidebar_header" className="bg-onyx p-0 pt-2">
				<SidebarGroup className="py-0 flex flex-row items-center gap-1 relative">
					<Search
						className="absolute left-4 top-1/2 -translate-y-1/2"
						width={20}
					/>
					<Input
						type="search"
						defaultValue={"grass"}
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

			<SidebarContent className="bg-onyx scrollbar-hidden">
				<SidebarGroup className="px-0">
					<SidebarGroupLabel className="text-white text-[14px] mb-2 px-4">
						Servers
					</SidebarGroupLabel>
					<SidebarMenu className="gap-3 px-0  text-white">
						<SidebarServerIcon
							title="Planters of Grass"
							serverIcon="/servers/midjourney.png"
							hasNotification={true}
							i={1}
						/>
						<SidebarServerIcon
							title="Harvesters of Grass"
							serverIcon="/servers/apex-legends.png"
							hasNotification={true}
							i={2}
						/>
					</SidebarMenu>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel className="text-white text-[14px] mb-2">
						Channels
					</SidebarGroupLabel>
					<SidebarMenu className="gap-3 text-white">
						<ServerSearch />
					</SidebarMenu>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel className="text-white text-[14px] mb-2">
						Chats
					</SidebarGroupLabel>
					<SidebarMenu className="gap-3">
						<ChatBubble
							profileImg="/touchgrasshq.png"
							time="10:33am"
							message="no??? to go out and enjoy the sun and touch grass"
							user="grass enjoyer"
						/>
						<ChatBubble
							profileImg="/touchgrasshq.png"
							time="10:33am"
							message="nuh uh grass is for losers you can't trick me"
							user="NOT a grass enjoyer"
						/>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default SearchVariant;
