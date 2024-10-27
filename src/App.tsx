import { Route, Routes } from "react-router-dom";
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
			<CollapsibleSidebar open={c_sidebar_state} />

			<Routes>
				<Route element={<Main />}>
					<Route path="@me">
						<Route index element={<Wumpus />} />
						<Route path="dm/:id" element={<MessagesLayout />} />
					</Route>

					<Route path="@channels">
						<Route path="channel:id" element={<ChannelsLayout />} />
					</Route>
				</Route>

				<Route path="/servers" element={<Servers />} />
			</Routes>
		</div>
	);
}

export default App;

{
	/* <Route path="messages/:userId" element={<RoomInfo />} /> */
}
