import HMenu from "@/components/HMenu";
import { useStore } from "@/hooks/base-context";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const r_sidebar_display_context = useStore(
		(state) => state.r_sidebar_display_context
	);
	const location = useLocation();
	return (
		<section
			className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
				(r_sidebar_display_context === "messages" &&
					location.pathname === "/messages") ||
				(r_sidebar_display_context === "server" &&
					location.pathname === "/channels")
					? "flex flex-col h-full"
					: "flex flex-col items-center justify-center text-center"
			}`}
		>
			{location.pathname === "/messages" ||
			location.pathname === "/channels" ? (
				<HMenu />
			) : null}
			<Outlet />
		</section>
	);
};

export default Main;
