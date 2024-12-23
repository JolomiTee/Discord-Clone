import { Button } from "@/components/ui/button";
import { useSidebarStateStore } from "@/hooks/base-context";
import { Users } from "lucide-react";

const ViewMembers = () => {
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
	return (
		<Button
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
			title="View Members"
			className="h-full w-fit rounded bg-transparent justify-start px-2 shadow-none"
		>
			<Users />
		</Button>
	);
};

export default ViewMembers;
