import CollapsibleSidebar from "@/components/sidebar/CollapsibleSidebar";
import { Outlet } from "react-router-dom";

import { SignedIn } from "@clerk/clerk-react";

function AppLayout() {
	return (
		// <SignedIn>
		<div className="w-full flex overflow-hidden max-h-dvh font-open-sans">
			<CollapsibleSidebar />
			<Outlet />
		</div>
		// </SignedIn>
	);
}

export default AppLayout;
