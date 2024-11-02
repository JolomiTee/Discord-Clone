import {
	useCollapsibleSidebarStore,
	useSidebarStateStore,
} from "./base-context";

export const useOpenSearchBar = () => {
	const c_sidebar_state = useSidebarStateStore(
		(state) => state.c_sidebar_state
	);
	const toggle_c_sidebar = useSidebarStateStore(
		(state) => state.toggle_c_sidebar
	);
	const switchCollapsibleSidebarContext = useCollapsibleSidebarStore(
		(state) => state.switchCollapsibleSidebarContext
	);

	return () => {
		if (!c_sidebar_state) toggle_c_sidebar();
		switchCollapsibleSidebarContext("search");
	};
};
