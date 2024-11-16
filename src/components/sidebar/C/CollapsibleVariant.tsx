import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	useSidebar,
} from "@/components/ui/sidebar";
import { serverList } from "@/data";
import ProfileHolder from "../../server/ProfileHolder";
import SidebarNavLink from "../../server/SidebarNavTab";
import SidebarServerIcon from "../../server/SidebarServerIcon";
import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";

const CollapsibleVariant = () => {
	const { isMobile } = useSidebar();
	return (
		<Sidebar
			collapsible={!isMobile ? "icon" : "none"}
			className={`bg-transparent border-none ${isMobile ? "w-[60px]" : ""}`}
		>
			<SidebarHeader className="bg-onyx p-0 pt-1">
				<SidebarGroup className="p-0">
					<SidebarMenu className="gap-0">
						{isMobile ? (
							<MobileSearchModal type="sidebar" />
						) : (
							<SidebarNavLink to="#" icon="search" label="Search" />
						)}

						<SidebarNavLink to="@me" icon="messages" label="Messages" />

						<Separator className="lg:group-data-[collapsible=icon]:w-[80%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 md:w-[45px] my-2 md:ms-3" />

						<SidebarNavLink to="servers" icon="servers" label="Servers" />
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
									key={i}
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
					<SidebarNavLink to="inbox" icon="inbox" label="Inbox" />

					<ProfileHolder />
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default CollapsibleVariant;
