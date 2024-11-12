import CollapsibleSidebar from "@/components/sidebar/CollapsibleSidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<div className="w-full flex overflow-hidden max-h-dvh font-open-sans">
			<CollapsibleSidebar />
			<Outlet />
		</div>
	);
}

export default AppLayout;
