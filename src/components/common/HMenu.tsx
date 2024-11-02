import { useSidebarStateStore } from "@/hooks/base-context";
import IconButtons from "./IconButtons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useLocation } from "react-router-dom";

const HMenu = () => {
	const location = useLocation();
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);

	const switchRightSidebarContext = useSidebarStateStore(
		(state) => state.switchRightSidebarContext
	);

	const toggle_l_sidebar = useSidebarStateStore(
		(state) => state.toggle_l_sidebar
	);
	const toggle_r_sidebar = useSidebarStateStore(
		(state) => state.toggle_r_sidebar
	);

	return (
		<header className="flex justify-between items-center gap-3 h-full max-h-[50px] px-4 bg-onyx w-full flex-shrink-0">
			<div className="flex items-center gap-3">
				<IconButtons
					src="sidebar"
					alt="Sidebar"
					action={toggle_l_sidebar}
				/>

				<div className="flex items-center justify-start gap-3 bg-transparent shadow-none">
					<div className="relative">
						<Avatar className="flex items-center justify-center">
							<AvatarImage
								src={"/silly.png"}
								className="size-8  rounded-full"
							/>
							<AvatarFallback className="flex items-center justify-center">
								<img
									src="/icons/discord.svg"
									className="size-[35px]  rounded-full"
								/>
							</AvatarFallback>
						</Avatar>
						<div
							className={`absolute -right-1 bottom-0 bg-emerald rounded-full size-4 border-[3px] border-solid border-onyx`}
						></div>
					</div>
					<span className="font-bold text-[#FFFFFF99]">Shepard</span>
				</div>
			</div>

			<div className="flex items-center gap-3">
				{location.pathname.includes("@channel") ? (
					<>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="size-7"
						/>
						<IconButtons src="threads" alt="Threads" sizes="size-7" />
						<IconButtons src="pin" alt="Pinned" sizes="size-7" />
						<IconButtons src="search" alt="Search" sizes="size-5" />
						<IconButtons
							src="members"
							alt="Members"
							sizes="size-8"
							action={() => {
								if (r_sidebar_display_context !== "members") {
									// Open the sidebar only if the context isn't "members"
									if (!r_sidebar_state) {
										toggle_r_sidebar(); // Open the sidebar if it's closed
									}
									switchRightSidebarContext("members"); // Set the context to "members"
								} else {
									toggle_r_sidebar(); // Close the sidebar if it's already showing "members"
								}
							}}
						/>
					</>
				) : (
					<>
						<IconButtons src="call" alt="Call" sizes="size-7" />
						<IconButtons
							src="video_call"
							alt="Video Call"
							sizes="size-7"
						/>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="size-7"
						/>
						<IconButtons src="pin" alt="Pinned" sizes="size-7" />
						<IconButtons src="search" alt="Search" sizes="size-5" />
					</>
				)}

				<IconButtons
					src="sidebar"
					alt="Sidebar"
					action={() => {
						if (r_sidebar_display_context !== "channel_info") {
							// Open the sidebar only if the context isn't "channel_info"
							if (!r_sidebar_state) {
								toggle_r_sidebar(); // Open the sidebar if it's closed
							}
							switchRightSidebarContext("channel_info"); // Set the context to "channel_info"
						} else {
							toggle_r_sidebar(); // Close the sidebar if it's already showing "channel_info"
						}
					}}
				/>
			</div>
		</header>
	);
};

export default HMenu;
