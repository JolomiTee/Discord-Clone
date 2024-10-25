import HMenu from "@/components/HMenu";
import { RSidebar } from "@/components/Sidebars";
import { useStore } from "@/hooks/base-context";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	const r_sidebar_state = useStore((state) => state.r_sidebar_state);

	const r_sidebar_display_context = useStore(
		(state) => state.r_sidebar_display_context
	);
	return (
		<div className="bg-charcoal w-full h-screen font-open-sans overflow-hidden flex flex-col">
			{(location.pathname === "/messages" ||
				location.pathname === "/channels") && <HMenu />}
			<div className="flex-grow flex overflow-hidden ">
				{r_sidebar_display_context ? (
					<div className="flex-grow flex overflow-hidden">
						<div className="flex-grow overflow-auto scrollbar-hidden">
							<Outlet />
						</div>
						<RSidebar open={r_sidebar_state} />
					</div>
				) : (
					<div className="flex-grow flex items-center justify-center">
						<Outlet />
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;