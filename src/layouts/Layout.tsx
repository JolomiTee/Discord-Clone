import HMenu from "@/components/HMenu";
import { LSidebar, RSidebar } from "@/components/sidebar/Sidebars";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	return (
		<div className="bg-charcoal w-full h-screen font-open-sans overflow-hidden flex relative">
			<LSidebar />

			<div className="w-full">
				{(location.pathname.includes("@me/dm") ||
					location.pathname.includes("/@channel")) && <HMenu />}
				<div className=" ">
					<Outlet />
				</div>
			</div>

			<RSidebar />
		</div>
	);
};

export default Main;