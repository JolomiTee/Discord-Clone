import HMenu from "@/components/HMenu";
import { useStore } from "@/hooks/base-context";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
	const appState = useStore((state) => state.appState);
	const location = useLocation();
	return (
		<section
			className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
				(appState === "messages" && location.pathname === "/messages") ||
				(appState === "server" && location.pathname === "/channels")
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
