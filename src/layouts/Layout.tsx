import HMenu from "@/components/menu/HMenu";
import { LSidebar, RSidebar } from "@/components/sidebar/Sidebars";
import { SidebarInset } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	return (
		<>
			<LSidebar />

			<SidebarInset className="w-full">
				{(location.pathname.includes("@me/dm") ||
					location.pathname.includes("/@channel")) && <HMenu />}

				<div className="flex overflow-hidden bg-charcoal">
					<Outlet />
				</div>
			</SidebarInset>
			<RSidebar />
		</>
	);
};

export default Main;
