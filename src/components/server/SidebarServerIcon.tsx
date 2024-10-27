import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
	useCollapsibleIconStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import { Link } from "react-router-dom";

interface props {
	title: string;
	serverIcon: string;
	hasNotification: boolean;
	i: number;
}
const SidebarServerIcon = ({
	title,
	serverIcon,
	hasNotification,
	i,
}: props) => {
	const selectedServer = useCollapsibleIconStore(
		(state) => state.selectedServer
	);
	const toggle_selected_server = useCollapsibleIconStore(
		(state) => state.toggle_selected_server
	);
	const toggle_selected_tab = useCollapsibleIconStore(
		(state) => state.toggle_selected_tab
	);
	const switchLeftSidebarContext = useSidebarStateStore(
		(state) => state.switchLeftSidebarContext
	);

	const handleClick = () => {
		toggle_selected_tab(null);
		toggle_selected_server(i);
		switchLeftSidebarContext("server");
	};
	return (
		<SidebarMenuItem
			key={title}
			className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center "
		>
			<div
				className={`absolute top-1/2 -translate-y-1/2 -left-[1px] w-2 rounded-full transition-all duration-100 ${
					selectedServer === i
						? "h-10 bg-discord-blue"
						: hasNotification
						? "h-2 bg-white dark:bg-white"
						: "group-hover:h-5 group-hover:bg-white"
				}`}
				style={{
					clipPath: "inset(0 0 0 50%)",
				}}
			/>

			<Link to={`/@server/${String(i)}`} onClick={handleClick}>
				<SidebarMenuButton
					tooltip={title}
					className="gap-3 text-base h-fit group-data-[collapsible=icon]:[&>span:last-child]:hidden p-0 ps-3"
				>
					<Avatar
						className={`size-[50px] ${
							selectedServer === i
								? "rounded-[12px]"
								: "group-hover:rounded-[12px]"
						}`}
					>
						<AvatarImage src={serverIcon} />
						<AvatarFallback
							className={
								selectedServer === i
									? "bg-discord-blue rounded-[15px]"
									: "bg-graphite group-hover:rounded-[12px]"
							}
						>
							<img src="/icons/discord.svg" className="size-[30px] " />
						</AvatarFallback>
					</Avatar>
					<span>{title}</span>
				</SidebarMenuButton>
			</Link>
		</SidebarMenuItem>
	);
};

export default SidebarServerIcon;
