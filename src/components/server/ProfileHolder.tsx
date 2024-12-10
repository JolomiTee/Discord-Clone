import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent } from "@/components/ui/popover";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UserButton } from "@clerk/clerk-react";
import { ExternalLink, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileHolder = () => {

	const { isMobile } = useSidebar();

	return (
		<>
			{isMobile ? (
				<MobileProfileHolder />
			) : (
				<SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center">
					<SidebarMenuButton
						size="lg"
						className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[60px] group-data-[collapsible=icon]:[&>div:last-child]:hidden group-data-[collapsible=icon]:overflow-visible py-0 px-2 shrink-0 gap-0 group-data-[collapsible=icon]:-ms-1"
					>
						<div className="relative flex justify-center">
							<div className="absolute right-2 group-data-[collapsible=icon]:-right-0.5 bottom-0.5 bg-emerald rounded-full size-[14px] border-[2px] border-charcoal z-20"></div>
							<UserButton
								appearance={{
									elements: {
										userButtonAvatarBox:
											"size-[50px] flex justify-center items-center bg-charcoal",
										userButtonAvatarImage: "size-[40px] rounded-full",
									},
								}}
							/>
						</div>

						<div className="flex justify-center items-center bg-charcoal rounded-[15px] rounded-l-none p-2 pe-4 h-full w-full">
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold text-white">
									<Link to={"profile/12345"}>GrassMaster333</Link>
								</span>
								<span className="truncate text-sm font-semibold">
									Online
								</span>
							</div>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<MenuIcon />
								</DropdownMenuTrigger>
								<DropdownMenuContent className="rounded-[15px] bg-charcoal p-2">
									<ToggleGroup type="multiple" className="gap-3">
										<ToggleGroupItem
											value="a"
											disabled
											className="rounded-[10px] size-10 p-0"
										>
											<img
												src="/icons/mute_true.svg"
												className="size-8"
											/>
										</ToggleGroupItem>
										<ToggleGroupItem
											value="b"
											disabled
											className="rounded-[10px]  size-10 p-0"
										>
											<img
												src="/icons/deafen_false.svg"
												className="size-8"
											/>
										</ToggleGroupItem>
										<Link
											to="profile/12345"
											className="rounded-[10px] px-3"
										>
											<img
												src="/icons/settings.svg"
												className="size-6"
											/>
										</Link>
									</ToggleGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</SidebarMenuButton>
				</SidebarMenuItem>
			)}
		</>
	);
};

export default ProfileHolder;

const MobileProfileHolder = () => {
	return (
		<Popover>
			{/* <PopoverTrigger asChild> */}
			<div className="relative flex justify-center">
				<div className="absolute right-2 group-data-[collapsible=icon]:-right-0.5 bottom-0.5 bg-emerald rounded-full size-[14px] border-[2px] border-charcoal z-20"></div>
				<UserButton
					appearance={{
						elements: {
							userButtonAvatarBox:
								"size-[50px] flex justify-center items-center bg-charcoal",
							userButtonAvatarImage: "size-[45px] rounded-full",
						},
					}}
				/>
			</div>
			{/* </PopoverTrigger> */}
			<PopoverContent className="w-80 bg-onyx rounded-[15px] text-[#B5BFE7] ">
				<div className="flex gap-4">
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold text-white">
							<Link to={"profile/12345"}>
								GrassMaster333{" "}
								<ExternalLink className="inline-flex size-4" />
							</Link>
						</span>
						<span className="truncate text-sm font-semibold">Online</span>
					</div>

					<ToggleGroup type="multiple" className="gap-3">
						<ToggleGroupItem
							disabled
							value="a"
							className="rounded-[10px] size-7 p-0"
						>
							<img src="/icons/mute_true.svg" className="size-7" />
						</ToggleGroupItem>
						<ToggleGroupItem
							disabled
							value="b"
							className="rounded-[10px]  size-7 p-0"
						>
							<img src="/icons/deafen_false.svg" className="size-7" />
						</ToggleGroupItem>
						<Link to="profile/12345" className="rounded-[10px] p-0">
							<img src="/icons/settings.svg" className="size-6" />
						</Link>
					</ToggleGroup>
				</div>
			</PopoverContent>
		</Popover>
	);
};
