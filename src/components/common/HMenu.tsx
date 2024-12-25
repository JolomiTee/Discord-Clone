import { MobileMenuItems } from "@/components/mobile_v_comps/MobileMenuItems";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useOpenSearchBar } from "@/hooks/use-open-sidebar";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import IconButtons from "./IconButtons";

interface Props {
	name: string | undefined;
	channelType?: string | undefined;
	profile_image?: string | undefined;
}

const HMenu = ({ name, channelType, profile_image }: Props) => {
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
		<header className="flex justify-between items-center gap-3 h-full max-h-[50px] px-2 md:px-3 lg:px-4 bg-onyx w-full sticky top-0 shrink-0 py-2">
			<div className="flex items-center gap-2">
				<IconButtons
					src="sidebar"
					alt="Sidebar"
					action={toggle_l_sidebar}
				/>

				<div className="flex items-center justify-start gap-3 md:gap-3 bg-transparent shadow-none w-fit">
					{channelType ? (
						<Avatar className="flex items-center justify-center">
							<AvatarImage
								src={`/icons/${channelType}-channel.svg`}
								className="size-7  rounded-full"
							/>
						</Avatar>
					) : profile_image ? (
						<div className="relative">
							<Avatar className="relative size-[35px]">
								<AvatarImage
									src={profile_image}
									className="w-full h-full object-cover rounded-full"
								/>
								<AvatarFallback className="flex items-center justify-center">
									<img
										src="/icons/discord.svg"
										className="size-[35px]  rounded-full"
									/>
								</AvatarFallback>
							</Avatar>
							<div className="absolute -right-1 -bottom-0 bg-emerald rounded-full size-2 border-black"></div>
						</div>
					) : null}
					<p className="font-bold text-[#FFFFFF99] text-[14px] max-w-[100px] sm:max-w-[200px] lg:max-w-[300px] truncate">
						{name}
					</p>
				</div>
			</div>

			<div className="items-center gap-3 hidden lg:flex w-full justify-end">
				{location.pathname.includes("@channel") ? (
					<>
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
				) : (
					<>
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
