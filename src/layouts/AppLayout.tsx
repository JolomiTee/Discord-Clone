import CollapsibleSidebar from "@/components/sidebar/CollapsibleSidebar";
import { Outlet, useNavigate } from "react-router-dom";

import { SignedIn, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

function AppLayout() {
	const navigate = useNavigate();
	const { isLoaded, isSignedIn } = useAuth();

	useEffect(() => {
		if (isLoaded && !isSignedIn) {
			navigate("/sign-in");
		}
	}, [isLoaded, isSignedIn, navigate]);

	return (
		<SignedIn>
			<div className="w-full flex overflow-hidden max-h-dvh font-open-sans">
				<CollapsibleSidebar />
				<Outlet />
			</div>
		</SignedIn>
	);
}

export default AppLayout;
