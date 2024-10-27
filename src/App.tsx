import { Navigate, Route, Routes } from "react-router-dom";
import CollapsibleSidebar from "./components/CollapsibleSidebar";
import { useStore } from "./hooks/base-context";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";
import Servers from "./pages/Servers";

function App() {
	const c_sidebar_state = useStore((state) => state.c_sidebar_state);

	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			{/* <ServerTray /> */}

			<CollapsibleSidebar open={c_sidebar_state} />

			<Routes>
				<Route element={<Main />}>
					<Route index element={<Navigate to="@me" />} />
					<Route path="@me" element={<Wumpus />}>
						<Route path=":id" element={<MessagesLayout />} />{" "}
						{/* No leading slash */}
					</Route>
					<Route path="@channels" element={<ChannelsLayout />} />

					{/* <Route path="messages/:userId" element={<RoomInfo />} /> */}
				</Route>

				<Route path="/servers" element={<Servers />} />
			</Routes>
		</div>
	);
}

export default App;
