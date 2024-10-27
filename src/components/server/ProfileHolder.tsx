import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSidebarStateStore } from "@/hooks/base-context";
import { MenuIcon } from "lucide-react";

const ProfileHolder = () => {
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);

	return (
		<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center">
			<SidebarMenuButton
				size="lg"
				className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[60px] group-data-[collapsible=icon]:[&>div:last-child]:hidden group-data-[collapsible=icon]:overflow-visible py-0 px-3 shrink-0 gap-0"
				onClick={toggle_c_sidebar}
			>
				<Avatar className="relative group-data-[collapsible=icon]:rounded-full size-[60px] group-data-[collapsible=icon]:size-[55px] flex items-center justify-center bg-charcoal rounded-[15px] p-[10px] group-data-[collapsible=icon]:p-1.5 overflow-visible rounded-r-none">
					<div className="absolute right-0.5 group-data-[collapsible=icon]:-right-1 top-1 bg-crimson rounded-full size-[14px] border-[3px] border-solid border-onyx"></div>
					<div className="absolute right-0.5 group-data-[collapsible=icon]:-right-1 bottom-1 bg-emerald rounded-full size-[14px] border-[3px] border-solid border-onyx"></div>
					<AvatarImage src="/beluga.png" className="rounded-full" />
					<AvatarFallback className="bg-discord-blue">
						<img src="/icons/discord.svg" className="size-[30px] " />
					</AvatarFallback>
				</Avatar>

				<div className="flex justify-center items-center bg-charcoal rounded-[15px] rounded-l-none p-2 pe-4 h-full w-full">
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold text-white">
							GrassMaster333
						</span>
						<span className="truncate text-sm font-semibold">Online</span>
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<MenuIcon />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="rounded-[15px] bg-charcoal p-2">
							<ToggleGroup type="multiple" className="gap-3">
								<ToggleGroupItem
									value="a"
									className="rounded-[10px] size-10 p-0"
								>
									<img src="/icons/mute_true.svg" className="size-8" />
								</ToggleGroupItem>
								<ToggleGroupItem
									value="b"
									className="rounded-[10px]  size-10 p-0"
								>
									<img
										src="/icons/deafen_false.svg"
										className="size-8"
									/>
								</ToggleGroupItem>
								<ToggleGroupItem
									value="c"
									className="rounded-[10px]  size-10 p-0"
								>
									<img src="/icons/settings.svg" className="size-6" />
								</ToggleGroupItem>
								<ToggleGroupItem
									value="c"
									className="rounded-[10px] size-10 p-0"
								>
									<img src="/icons/pin.svg" className="size-8" />
								</ToggleGroupItem>
							</ToggleGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export default ProfileHolder;
