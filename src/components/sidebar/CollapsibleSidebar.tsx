import { SidebarProvider } from "@/components/ui/sidebar";
import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "@/hooks/base-context";
import CollapsibleVariant from "./C/CollapsibleVariant";
import SearchVariant from "./C/SearchVariant";

export default function CollapsibleSidebar() {
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);
	const collapsible_sidebar_display_context = useCollapsibleSidebarStore(
		(state) => state.collapsible_sidebar_display_context
	);
	return (
		<SidebarProvider
			name="collapsible-sidebar"
			className="text-[#B5BFE7] overflow-hidden max-h-dvh max-w-fit z-20"
			open={c_sidebar_state}
		>
			{collapsible_sidebar_display_context === "search" ? (
				<SearchVariant />
			) : (
				<CollapsibleVariant />
			)}
		</SidebarProvider>
	);
}
