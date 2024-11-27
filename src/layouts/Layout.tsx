import { LSidebar, RSidebar } from "@/components/sidebar/Sidebars";
import { SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<>
			<LSidebar />

			<SidebarInset className="w-full">
				<div className="flex h-full overflow-hidden bg-charcoal">
					<Outlet />
				</div>
			</SidebarInset>

			<RSidebar />
		</>
	);
};

export default Main;
