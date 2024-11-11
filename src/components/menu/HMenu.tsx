import { useSidebarStateStore } from "@/hooks/base-context";
import IconButtons from "../common/IconButtons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useLocation } from "react-router-dom";
import { MenuItems } from "@/components/menu/MenuItems";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";

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
	const openSearchBar = useOpenSearchBar();
	return (
		<header className="flex justify-between items-center gap-3 h-full max-h-[50px] px-4 bg-onyx w-full sticky top-0 shrink-0 bg-background py-2">
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

			<div className="items-center gap-3 hidden md:flex">
				{location.pathname.includes("@channel") ? (
					<>
						<IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="size-7"
						/>
						<IconButtons src="threads" alt="Threads" sizes="size-7" />
						<IconButtons src="pin" alt="Pinned" sizes="size-7" />
						<IconButtons
							src="search"
							alt="Search"
							sizes="size-5"
							action={openSearchBar}
						/>
						<IconButtons
							src="members"
							alt="Members"
							sizes="size-8"
							action={() => {
								if (r_sidebar_display_context !== "members") {
									if (!r_sidebar_state) {
										toggle_r_sidebar();
									}
									switchRightSidebarContext("members");
								} else {
									toggle_r_sidebar();
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
							if (!r_sidebar_state) {
								toggle_r_sidebar();
							}
							switchRightSidebarContext("channel_info");
						} else {
							toggle_r_sidebar();
						}
					}}
				/>
			</div>
			<div className="md:hidden flex items-center">
				<MenuItems />
			</div>
		</header>
	);
};

export default HMenu;
