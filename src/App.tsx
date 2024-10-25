import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CollapsibleSidebar from "./components/CollapsibleSidebar";
import { LSidebar } from "./components/Sidebars";
import { useStore } from "./hooks/base-context";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";
import Servers from "./pages/Servers";

function App() {
	const location = useLocation();
	const l_sidebar_state = useStore((state) => state.l_sidebar_state);
	const c_sidebar_state = useStore((state) => state.c_sidebar_state);
	const toggle_l_sidebar = useStore((state) => state.toggle_l_sidebar);

	useEffect(() => {
		const shouldCloseLeftSidebar = location.pathname === "/servers";

		if (shouldCloseLeftSidebar && l_sidebar_state) {
			toggle_l_sidebar(); // Open sidebar if it's not already open
		} else if (!shouldCloseLeftSidebar && !l_sidebar_state) {
			toggle_l_sidebar(); // Close sidebar if it's open
		}
	}, []);

	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			{/* <ServerTray /> */}

			<CollapsibleSidebar open={c_sidebar_state} />

			<Routes>
				<Route element={<Main />}>
					<Route index element={<Wumpus />} />
					<Route path="/messages" element={<MessagesLayout />} />
					<Route path="/channels" element={<ChannelsLayout />} />

					{/* <Route path="messages/:userId" element={<RoomInfo />} /> */}
				</Route>

				<Route path="/servers" element={<Servers />} />
			</Routes>
		</div>
	);
}

export default App;
