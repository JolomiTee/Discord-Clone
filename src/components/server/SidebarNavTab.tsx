import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import { NavLink } from "react-router-dom";

interface SidebarNavLinkProps {
	to: string;
	icon: string;
	label: string;
}

export default function SidebarNavLink({
	to,
	icon,
	label,
}: SidebarNavLinkProps) {
	const selected_tab = useCollapsibleSidebarStore(
		(state) => state.selectedTab
	);
	const toggle_selected_tab = useCollapsibleSidebarStore(
		(state) => state.toggle_selected_tab
	);
	const toggle_selected_server = useCollapsibleSidebarStore(
		(state) => state.toggle_selected_server
	);
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);
	const switchLeftSidebarContext = useSidebarStateStore(
		(state) => state.switchLeftSidebarContext
	);
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const switchCollapsibleSidebarContext = useCollapsibleSidebarStore(
		(state) => state.switchCollapsibleSidebarContext
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

		if (label.toLowerCase() === "search") {
			if (!c_sidebar_state) {
				toggle_c_sidebar();
			}
			switchCollapsibleSidebarContext("search");
		} else {
			toggle_selected_tab(label.toLowerCase());
			toggle_selected_server(null);
		}

		switchLeftSidebarContext(label.toLowerCase());
	};

	return (
		<SidebarMenuItem className="group/item group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-1.5 md:w-2 rounded-full transition-all duration-100 ${
					selected_tab === label.toLocaleLowerCase()
						? "h-10 bg-discord-blue"
						: "h-0 group-hover/item:h-5 bg-white opacity-0 group-hover/item:opacity-100"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>
			<NavLink to={to} onClick={handleClick}>
				<SidebarMenuButton
					tooltip={label}
					className="w-full gap-3 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-1.5"
				>
					<Avatar className="size-[50px] flex justify-center items-center">
						<AvatarImage
							src={`/icons/${icon}.svg`}
							alt={`${label} icon`}
							className="w-[30px]"
						/>
					</Avatar>
					<span>{label}</span>
				</SidebarMenuButton>
			</NavLink>
		</SidebarMenuItem>
	);
}
