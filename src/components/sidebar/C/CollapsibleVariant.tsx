import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";
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
import SidebarNavLink from "../../common/sidebar_buttons/SidebarNavTab";
import SidebarServerIcon from "../../common/sidebar_buttons/SidebarServerIcon";
import ProfileHolder from "../../server/ProfileHolder";
import useClerkQuery from "@/hooks/use-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Servers } from "@/types";
import CreateServer from "@/components/forms/CreateServer";

const CollapsibleVariant = () => {
	const { isMobile } = useSidebar();
	const { isLoading, data, error } =
		useClerkQuery<Servers[]>("joined-servers");
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

						<SidebarNavLink to="@server" icon="servers" label="Servers" />
					</SidebarMenu>
				</SidebarGroup>
			</SidebarHeader>

			<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll pt-2">
				<SidebarGroup className="p-0">
					<SidebarMenu className="gap-y-3">
						{isLoading ? (
							<>
								<Skeleton className="size-[45px] md:size-[50px] rounded-full mb-3 bg-discord-blue/20 mx-auto" />
							</>
						) : error ? (
							<div className="text-center">NF</div>
						) : data.data.length > 0 ? (
							data.data.map((server: Servers) => {
								const { _id, name, profile_image_url } = server;
								return (
									<SidebarServerIcon
										key={_id}
										serverId={_id}
										name={name}
										profile_image_url={profile_image_url}
										hasNotification={true}
									/>
								);
							})
						) : (
							<div className="text-center">NS</div>
						)}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="bg-onyx p-0 pt-3 pb-5">
				<SidebarMenu>
					<CreateServer />
					<Separator className="lg:group-data-[collapsible=icon]:w-[80%] group-data-[collapsible=icon]:mx-auto rounded-full bg-charcoal h-1 md:w-[45px] mt-2 md:ms-3" />

					<SidebarNavLink to="inbox" icon="inbox" label="Inbox" />
					<ProfileHolder />
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default CollapsibleVariant;
