import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { useSidebarStateStore } from "@/hooks/base-context";
import usePersistAppState from "@/hooks/use-persist-app-state";
import { Link } from "react-router-dom";

interface props {
	name: string;
	profile_image_url: string;
	hasNotification: boolean;
	serverId: string;
}
const SidebarServerIcon = ({
	name,
	profile_image_url,
	hasNotification,
	serverId,
}: props) => {
	const selectedServer = usePersistAppState((state) => state.selectedServer);
	const toggle_selected_server = usePersistAppState(
		(state) => state.toggle_selected_server
	);
	const toggle_selected_tab = usePersistAppState(
		(state) => state.toggle_selected_tab
	);
	const switchLeftSidebarContext = usePersistAppState(
		(state) => state.switchLeftSidebarContext
	);
	const toggle_l_sidebar = useSidebarStateStore(
		(state) => state.toggle_l_sidebar
	);
	const l_sidebar_state = useSidebarStateStore(
		(state) => state.l_sidebar_state
	);

	const { isMobile } = useSidebar();

	const handleClick = () => {
		// if on large screen and the sidebar collapse button has beem clicked, the clicking of the server navs or icons has to toggle the sidebar open:
		if (isMobile || !l_sidebar_state) {
			toggle_l_sidebar();
		}

		toggle_selected_tab(null);
		toggle_selected_server(serverId);
		switchLeftSidebarContext("server");
	};
	return (
		<SidebarMenuItem className="group/item group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-0.5 w-1.5 md:w-2 rounded-full transition-all duration-100 ${
					selectedServer === serverId
						? "h-10 bg-discord-blue"
						: hasNotification
						? "h-2 bg-white group-hover/item:h-5 group-hover/item:bg-white"
						: "group-hover/item:h-5 group-hover/item:bg-white"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>

			<SidebarMenuButton
				asChild
				isActive={selectedServer === serverId}
				tooltip={name}
				className="gap-3 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 group-data-[collapsible=icon]:ps-0 px-2 md:ps-3 data-[active=true]:text-white data-[active=true]:font-bold"
			>
				<Link to={`@server/${String(serverId)}`} onClick={handleClick}>
					<Avatar
						className={`size-[45px] group-data-[collapsible=icon]:md:size-[50px] ${
							selectedServer === serverId
								? "rounded-[12px]"
								: "group-hover/item:rounded-[12px]"
						}`}
					>
						<AvatarImage src={profile_image_url} alt={name} />
						<AvatarFallback
							className={
								selectedServer === serverId
									? "bg-discord-blue rounded-[15px]"
									: "bg-graphite group-hover/item:rounded-[12px]"
							}
						>
							<img
								src="/icons/discord.svg"
								className="size-[30px]"
								alt={name}
							/>
						</AvatarFallback>
					</Avatar>
					<span className="text-[15px]">{name}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export default SidebarServerIcon;
