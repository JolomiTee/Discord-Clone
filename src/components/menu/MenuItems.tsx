import IconButtons from "@/components/common/IconButtons";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuItems() {
	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size={"icon"}>
						<img src="/icons/more_h.svg" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56 bg-onyx text-sidebar-primary-foreground">
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
					<DropdownMenuItem>
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
						<DropdownMenuItem>
							<IconButtons
								src="members"
								alt="Members"
								sizes="size-8"
								// action={() => {
								// 	if (r_sidebar_display_context !== "members") {
								// 		// Open the sidebar only if the context isn't "members"
								// 		if (!r_sidebar_state) {
								// 			toggle_r_sidebar(); // Open the sidebar if it's closed
								// 		}
								// 		switchRightSidebarContext("members"); // Set the context to "members"
								// 	} else {
								// 		toggle_r_sidebar(); // Close the sidebar if it's already showing "members"
								// 	}
								// }}
							/>
							Members
						</DropdownMenuItem>
						<DropdownMenuItem>
							<IconButtons
								src="sidebar"
								alt="Sidebar"
								// action={() => {
								// 	if (r_sidebar_display_context !== "channel_info") {
								// 		// Open the sidebar only if the context isn't "channel_info"
								// 		if (!r_sidebar_state) {
								// 			toggle_r_sidebar(); // Open the sidebar if it's closed
								// 		}
								// 		switchRightSidebarContext("channel_info"); // Set the context to "channel_info"
								// 	} else {
								// 		toggle_r_sidebar(); // Close the sidebar if it's already showing "channel_info"
								// 	}
								// }}
							/>
							Channel Info
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. Are you sure you want to
						permanently delete this file from our servers?
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button type="submit">Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
