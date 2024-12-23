import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	useSidebar,
} from "@/components/ui/sidebar";
import { useSidebarStateStore } from "@/hooks/base-context";
import { useEffect } from "react";
import ChInfoDisplayVariant from "./ChannelInfo";
import Members from "./Members";
import FooterCard from "./Members/FooterCard";

const RSidebarContexts = () => {
	const r_sidebar_display_context = useSidebarStateStore(
		(state) => state.r_sidebar_display_context
	);
	const r_sidebar_state = useSidebarStateStore(
		(state) => state.r_sidebar_state
	);

	const setRSidebarState = useSidebarStateStore(
		(state) => state.setRSidebarState
	);
	const { open, toggleSidebar, isMobile } = useSidebar();

	useEffect(() => {
		if ((r_sidebar_state && !open) || (!r_sidebar_state && open)) {
			toggleSidebar();
		}

		if (isMobile) {
			setRSidebarState(false);
		}
	}, [r_sidebar_state, open]);
	return (
		<Sidebar side="right" className="border-none">
			<SidebarContent className="bg-carbon relative text-white scrollbar-hidden">
				{r_sidebar_display_context === "channel_info" ? (
					<ChInfoDisplayVariant />
				) : r_sidebar_display_context === "members" ? (
					<Members />
				) : null}
			</SidebarContent>

			<SidebarFooter className="border-t-2 border-t-white/[8%] border-dashed bg-carbon relative text-white p-3 pe-0">
				{r_sidebar_display_context === "members" && (
					<>
						{/* <MemberList /> */}
						<FooterCard />
					</>
				)}
			</SidebarFooter>
		</Sidebar>
	);
};

export default RSidebarContexts;
