import HMenu from "@/components/common/HMenu";
import { LSidebar, RSidebar } from "@/components/sidebar/Sidebars";
import { SidebarInset } from "@/components/ui/sidebar";
import { Outlet, useLocation, useParams } from "react-router-dom";

const Main = () => {
	const location = useLocation();
	const { dmId } = useParams();
	return (
		<>
			<LSidebar />

			<SidebarInset className="w-full">
				{(location.pathname.includes("@me/dm") ||
					location.pathname.includes("/@channel")) && (
					<HMenu dmId={dmId} />
				)}

				<div className="flex h-full overflow-hidden bg-charcoal">
					<Outlet />
				</div>
			</SidebarInset>
			<RSidebar />
		</>
	);
};

export default Main;
