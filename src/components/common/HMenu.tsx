import { useSidebarStateStore } from "@/hooks/base-context";
import IconButtons from "./IconButtons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useLocation } from "react-router-dom";
import { MobileMenuItems } from "@/components/mobile_v_comps/MobileMenuItems";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { useEffect, useState } from "react";
import { friends } from "@/data/dms";
import { Friends } from "@/types";

interface Props {
	dmId: string | undefined;
}

const HMenu = ({ dmId }: Props) => {
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

	const [friendInfo, setFriendInfo] = useState<Friends>();

	useEffect(() => {
		const friend = friends.find((friend) => friend.id === Number(dmId));
		setFriendInfo(friend);
	}, [dmId, friendInfo]);

	return (
		<header className="flex justify-between items-center gap-3 h-full max-h-[50px] px-2 md:px-3 lg:px-4 bg-onyx w-full sticky top-0 shrink-0 bg-background py-2">
			<div className="flex items-center gap-2">
				<IconButtons
					src="sidebar"
					alt="Sidebar"
					action={toggle_l_sidebar}
				/>

				<div className="flex items-center justify-start gap-2 md:gap-3 bg-transparent shadow-none w-fit">
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src={friendInfo?.profileImg}
							className="size-7  rounded-full"
						/>
						<AvatarFallback className="flex items-center justify-center">
							<img
								src="/icons/discord.svg"
								className="size-[35px]  rounded-full"
							/>
						</AvatarFallback>
						<div
							className={`absolute right-1 bottom-0.5 bg-emerald rounded-full size-2 lg:size-3 border-[2px] border-solid border-onyx`}
						></div>
					</Avatar>
					{/* Acceptable name or nickname should be less than 30 characters */}
					<p className="font-bold text-[#FFFFFF99] text-[14px] max-w-[100px] sm:max-w-[200px] lg:max-w-[300px] truncate">
						{/* Big time forward ever backward never */}
						{friendInfo?.user}
					</p>
				</div>
			</div>

			<div className="items-center gap-3 hidden lg:flex w-full justify-end">
				{location.pathname.includes("@channel") ? (
					<>
						{/* <IconButtons
							src="disable_notification"
							alt="Notification"
							sizes="size-7"
						/>
						<IconButtons src="threads" alt="Threads" sizes="size-7" />
						<IconButtons src="pin" alt="Pinned" sizes="size-7" /> */}
						<IconButtons
							src="search"
							alt="Search"
							sizes="size-5"
							action={() => {
								openSearchBar();
								console.log("hello");
							}}
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
						{/* <IconButtons src="call" alt="Call" sizes="size-7" />
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
						<IconButtons src="pin" alt="Pinned" sizes="size-7" /> */}
						<IconButtons
							src="search"
							alt="Search"
							sizes="size-5"
							action={() => {
								openSearchBar();
								console.log("hello");
							}}
						/>
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
			<div className="lg:hidden flex items-center">
				<MobileMenuItems />
			</div>
		</header>
	);
};

export default HMenu;