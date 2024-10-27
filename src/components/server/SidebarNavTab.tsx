import { NavLink } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import {
	useCollapsibleIconStore,
	useSidebarStateStore,
} from "@/hooks/base-context";

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
	const selected_tab = useCollapsibleIconStore((state) => state.selectedTab);
	const toggle_selected_tab = useCollapsibleIconStore(
		(state) => state.toggle_selected_tab
	);
	const toggle_selected_server = useCollapsibleIconStore(
		(state) => state.toggle_selected_server
	);
	const switchLeftSidebarContext = useSidebarStateStore(
		(state) => state.switchLeftSidebarContext
	);

	const handleClick = () => {
		toggle_selected_tab(label.toLowerCase());
		toggle_selected_server(null);
		switchLeftSidebarContext("messages");
	};
	return (
		<SidebarMenuItem className="group relative group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-2 rounded-full transition-all duration-100 ${
					selected_tab === label.toLocaleLowerCase()
						? "h-10 bg-discord-blue"
						: "h-0 group-hover:h-5 bg-white opacity-0 group-hover:opacity-100"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>
			<NavLink to={to} onClick={handleClick}>
				<SidebarMenuButton
					tooltip={label}
					className="w-full gap-3 group-data-[collapsible=icon]:ps-0 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-3"
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
