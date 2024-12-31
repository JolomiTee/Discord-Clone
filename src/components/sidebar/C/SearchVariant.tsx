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
import usePersistAppState from "@/hooks/use-persist-app-state";
import { ChevronDown, Search, SidebarClose } from "lucide-react";
import SidebarServerIcon from "../../common/sidebar_buttons/SidebarServerIcon";
import ServerSearch from "../../search/ServerSearch";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import ChatBubble from "@/components/common/messages/ChatBubble";

const SearchVariant = () => {
	const selectedTab = usePersistAppState((state) => state.selectedTab);
	const toggle_selected_tab = usePersistAppState(
		(state) => state.toggle_selected_tab
	);
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const switchCollapsibleSidebarContext = useCollapsibleSidebarStore(
		(state) => state.switchCollapsibleSidebarContext
	);

	const user = {
		_id: "676dc93aaa8e51a7ef258c01",
		username: "joloo",
		email_address: "jolomitee@gmail.com",
		profile_image_url:
			"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycWxycFg3MlZhRUhFQThtRURtdkxqSm5CRTMifQ",
		firstName: "Jolomi Taiwo",
		lastName: "Emmanuel",
	};

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
							name="Planters of Grass"
							profile_image_url="/servers/midjourney.png"
							hasNotification={true}
							serverId={"1"}
						/>
						<SidebarServerIcon
							name="Harvesters of Grass"
							profile_image_url="/servers/apex-legends.png"
							hasNotification={true}
							serverId={"2"}
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
							key="1234"
							messageId={"12345r"}
							time={"15:45"}
							message={"Into the Grasslands"}
							sender={user}
						/>
						<ChatBubble
							key="1234"
							messageId={"3467"}
							time={"19:15"}
							message={"A land of Grass and Weed"}
							sender={user}
						/>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default SearchVariant;
