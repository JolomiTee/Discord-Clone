import LoadingServers from "@/components/common/skeletons/LoadingServers";
import CreateServer from "@/components/forms/CreateServer";
import MobileSearchModal from "@/components/mobile_v_comps/MobileSearchModal";
import { Button } from "@/components/ui/button";
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
import { useSidebarStateStore } from "@/hooks/base-context";
import useClerkQuery from "@/hooks/use-query";
import { Servers } from "@/types";
import {
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import SidebarNavLink from "../../common/sidebar_buttons/SidebarNavTab";
import SidebarServerIcon from "../../common/sidebar_buttons/SidebarServerIcon";
import ProfileHolder from "../../server/ProfileHolder";

const CollapsibleVariant = () => {
	const { isMobile } = useSidebar();
	const { isLoading, data, error } =
		useClerkQuery<Servers[]>("joined-servers");

	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);
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

				<div className="px-0.5 md:mb-4">
					<Button
						className="md:flex justify-center w-full h-[22px] bg-charcoal rounded-[8px] hidden"
						onClick={toggle_c_sidebar}
						title={c_sidebar_state ? "Hide sidebar" : "Expand sidebar"}
					>
						{c_sidebar_state ? (
							<DoubleArrowLeftIcon
								strokeWidth={3}
								className="text-sm font-bold"
							/>
						) : (
							<DoubleArrowRightIcon
								strokeWidth={3}
								className="text-sm font-bold"
							/>
						)}
						<span className={c_sidebar_state ? "block" : "hidden"}>
							Hide sidebar
						</span>
					</Button>
				</div>
			</SidebarHeader>

			<SidebarContent className="bg-onyx scrollbar-hidden group-data-[collapsible=icon]:overflow-scroll">
				<SidebarGroup className="p-0">
					<SidebarMenu className="gap-y-3">
						{isLoading ? (
							<LoadingServers />
						) : error ? (
							<div className="text-center">
								<img
									className="rounded-full size-[50px] object-cover cursor-not-allowed mx-auto"
									title="Couldn't get servers"
									src="/error_fetching_servers.jpeg"
								/>
							</div>
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
							<div className="text-center">
								<img
									className="rounded-full size-[50px] object-cover cursor-not-allowed mx-auto"
									title="No Servers found"
									src="/no_servers_found.png"
								/>
							</div>
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
