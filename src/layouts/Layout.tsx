import HMenu from "@/components/HMenu";
import { LSidebar, RSidebar } from "@/components/Sidebars";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			<LSidebar />

			<div className="bg-charcoal w-full h-screen font-open-sans overflow-hidden flex flex-col">
				{(location.pathname.includes("@me/dm") ||
					location.pathname.includes("/@channels")) && <HMenu />}
				<div className="flex-grow flex overflow-hidden ">
					<div className="flex-grow flex overflow-hidden">
						<div className="flex-grow overflow-auto scrollbar-hidden">
							<Outlet />
						</div>
						<RSidebar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;