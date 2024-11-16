import IconButtons from "@/components/common/IconButtons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import { useSidebarStateStore } from "@/hooks/base-context";
import React from "react";
import MobileNotificationModal from "../mobile_v_comps/MobileNotificationModal";
import MobileSearchModal from "../mobile_v_comps/MobileSearchModal";

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

	const [openDialog, setOpenDialog] = React.useState<string | null>(null);

	const handleOpenDialog = (dialogName: string) => {
		setOpenDialog(dialogName);
	};

	const handleCloseDialog = () => {
		setOpenDialog(null);
	};
	return (
		<>
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
					<DropdownMenuItem onSelect={() => handleOpenDialog("search")}>
						<IconButtons src="search" alt="Search" sizes="size-5" />
						Search
					</DropdownMenuItem>
					<DropdownMenuItem
						onSelect={() => handleOpenDialog("notifications")}
					>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="size-5"
						/>
						Notifications
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

			<MobileSearchModal
				type="nonce"
				open={openDialog === "search"}
				onOpenChange={handleCloseDialog}
			/>
			<MobileNotificationModal
				open={openDialog === "notifications"}
				onOpenChange={handleCloseDialog}
			/>
		</>
	);
}
