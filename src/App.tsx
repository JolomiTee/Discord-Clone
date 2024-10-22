import { SidebarProvider } from "@/components/ui/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServerTray from "./components/ServerTray";
import { LSidebar, RSidebar } from "./components/Sidebars";
import { useStore } from "./hooks/base-context";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";

function App() {
	const l_sidebar_state = useStore((state) => state.l_sidebar);
	const r_sidebar_state = useStore((state) => state.r_sidebar);

	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			{/* The server icons tray */}
			<BrowserRouter>
				<ServerTray />

				<SidebarProvider className="w-fit" open={l_sidebar_state}>
					<LSidebar />
				</SidebarProvider>

				<Routes>
					<Route element={<Main />}>
						<Route index element={<Wumpus />} />
						<Route path="messages" element={<MessagesLayout />} />
						<Route path="channels" element={<ChannelsLayout />} />

						{/* <Route path="messages/:userId" element={<RoomInfo />} /> */}
					</Route>
				</Routes>

				<SidebarProvider className="w-fit" open={r_sidebar_state}>
					<RSidebar />
				</SidebarProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
