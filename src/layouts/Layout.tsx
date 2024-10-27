import HMenu from "@/components/HMenu";
import { LSidebar, RSidebar } from "@/components/Sidebars";
import { useStore } from "@/hooks/base-context";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	const r_sidebar_state = useStore((state) => state.r_sidebar_state);
	const l_sidebar_state = useStore((state) => state.l_sidebar_state);

	const r_sidebar_display_context = useStore(
		(state) => state.r_sidebar_display_context
	);
	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			{/* // ! Tracking - l_sidebar_ showing by default */}
			{/* {(location.pathname === "/messages" ||
				location.pathname === "/channels") && (
				)} */}
			<LSidebar />

			<div className="bg-charcoal w-full h-screen font-open-sans overflow-hidden flex flex-col">
				{(location.pathname === "/messages" ||
					location.pathname === "/channels") && <HMenu />}
				<div className="flex-grow flex overflow-hidden ">
					{r_sidebar_display_context ? (
						<div className="flex-grow flex overflow-hidden">
							<div className="flex-grow overflow-auto scrollbar-hidden">
								<Outlet />
							</div>
							<RSidebar />
						</div>
					) : (
						<div className="flex-grow flex items-center justify-center">
							<Outlet />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Main;