import IconButtons from "@/components/common/IconButtons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { MobileIcon } from "@radix-ui/react-icons";
import { CalendarIcon, MoreHorizontal } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useSidebarStateStore } from "@/hooks/base-context";

export function MenuItems() {
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);

	const switchRightSidebarContext = useSidebarStateStore(
		(state) => state.switchRightSidebarContext
	);

	const toggle_r_sidebar = useSidebarStateStore(
		(state) => state.toggle_r_sidebar
	);
	const openSearchBar = useOpenSearchBar();
	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<MoreHorizontal className="text-white" size={25} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56 bg-onyx text-sidebar-primary-foreground rounded-[15px] border-none shadow-lg">
					<DropdownMenuLabel>Menu</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<IconButtons src="threads" alt="Threads" sizes="size-7" />
						Threads
					</DropdownMenuItem>
					<DropdownMenuItem>
						<IconButtons src="pin" alt="Pinned" sizes="size-7" />
						Pin
					</DropdownMenuItem>
					<DropdownMenuItem onClick={openSearchBar}>
						<IconButtons src="search" alt="Search" sizes="size-5" />
						Search
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<DialogTrigger className="w-full">
							<IconButtons
								src="disable_notification"
								alt="Notification"
								sizes="size-5"
							/>
							Notifications
						</DialogTrigger>
					</DropdownMenuItem>
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<IconButtons src="call" alt="Call" sizes="size-7" />
							Voice Call
						</DropdownMenuItem>
						<DropdownMenuItem>
							<IconButtons
								src="video_call"
								alt="Video Call"
								sizes="size-7"
							/>
							Video Call
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuGroup>
						<DropdownMenuItem
							onClick={() => {
								if (r_sidebar_display_context !== "members") {
									if (!r_sidebar_state) {
										toggle_r_sidebar();
									}
									switchRightSidebarContext("members");
								} else {
									toggle_r_sidebar();
								}
							}}
						>
							<IconButtons src="members" alt="Members" sizes="size-8" />
							Members
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								if (r_sidebar_display_context !== "channel_info") {
									if (!r_sidebar_state) {
										toggle_r_sidebar();
									}
									switchRightSidebarContext("channel_info");
								} else {
									toggle_r_sidebar();
								}
							}}
						>
							<IconButtons src="sidebar" alt="Sidebar" />
							Channel Info
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>

			<DialogContent className="max-w-[300px] gap-0 p-6 bg-gray-800 text-white bg-charcoal rounded-[15px]">
				<div className="space-y-4">
					{/* Radio Options */}
					<RadioGroup defaultValue="all" className="gap-3 mt-4">
						<Label
							htmlFor="all"
							className="flex items-center justify-between w-full h-5 hover:cursor-pointer"
						>
							All channels
							<RadioGroupItem
								value="all"
								id="all"
								className="border-white border-2"
							/>
						</Label>
						<Label
							htmlFor="@mentions"
							className="flex items-center justify-between w-full h-5 hover:cursor-pointer"
						>
							Only @mentions
							<RadioGroupItem
								value="@mentions"
								id="@mentions"
								className="border-white border-2"
							/>
						</Label>
						<Label
							htmlFor="none"
							className="flex items-center justify-between w-full h-5 hover:cursor-pointer"
						>
							None
							<RadioGroupItem
								value="none"
								id="none"
								className="border-white border-2"
							/>
						</Label>
					</RadioGroup>

					{/* Badge Options */}
					<ToggleGroup
						type="multiple"
						variant="outline"
						className="gap-3 h-[60px]"
					>
						<ToggleGroupItem
							value="everyone/here"
							aria-label="Toggle bold"
							className="w-full py-1 grid justify-start h-full gap-0 rounded-[8px] bg-gradient-to-r from-discord-blue/30 via-gray-500 to-transparent border-[3px] border-white/40"
						>
							<span className="bg-gradient-to-r from-discord-blue/70 via-gray-500 to-transparent rounded-[5px] p-0.5 px-1">
								@everyone
							</span>
							<span className="bg-gradient-to-r from-discord-blue/70 via-gray-500 to-transparent rounded-[5px] p-0.5 px-1 text-start">
								@here
							</span>
						</ToggleGroupItem>
						<ToggleGroupItem
							value="roles"
							aria-label="Toggle italic"
							className="w-full py-1 grid justify-start h-full gap-0 rounded-[8px] bg-gradient-to-r from-crimson/30 via-gray-500 to-transparent"
						>
							<span className="bg-gradient-to-r from-crimson/70 via-gray-500 to-transparent rounded-[5px] p-0.5 px-1">
								@roles
							</span>
						</ToggleGroupItem>
					</ToggleGroup>

					<ToggleGroup
						type="multiple"
						variant="outline"
						className="h-[50px] gap-3"
					>
						<ToggleGroupItem
							value="events"
							aria-label="Toggle bold"
							className="flex items-center space-x-2 text-gray-300 w-full h-full  rounded-[8px]"
						>
							<CalendarIcon className="h-5 w-5" />
							<span>Events</span>
						</ToggleGroupItem>
						<ToggleGroupItem
							value="mobile"
							aria-label="Toggle italic"
							className="flex items-center space-x-2 text-gray-300 w-full h-full rounded-[8px]"
						>
							<MobileIcon className="h-5 w-5" />
							<span>Mobile</span>
						</ToggleGroupItem>
					</ToggleGroup>

					<Separator />
				</div>
				<Link
					to="/settings"
					className="w-full h-[50px] text-gray-400 text-sm flex items-center justify-center space-x-1"
				>
					<span>All Notification Settings</span>
					<img src="/icons/popout.svg" className="size-6" />
				</Link>
			</DialogContent>
		</Dialog>
	);
}
