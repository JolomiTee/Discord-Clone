import { Navigate, Route, Routes } from "react-router-dom";
import CollapsibleSidebar from "./components/sidebar/CollapsibleSidebar";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";
import Help from "./pages/Help";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import Servers from "./pages/Servers";

function App() {
	return (
		<div className="w-full flex overflow-hidden max-h-dvh font-open-sans">
			<CollapsibleSidebar />

			<Routes>
				<Route element={<Main />}>
					<Route index element={<Navigate to="@me" replace />} />

					<Route path="@me">
						<Route index element={<Wumpus />} />
						<Route path="dm/:id" element={<MessagesLayout />} />
					</Route>

					<Route path="@server/:id">
						<Route index element={<Wumpus />} />
						<Route path="@channel/:id" element={<ChannelsLayout />} />
					</Route>
				</Route>

				<Route path="/servers" element={<Servers />} />
				<Route path="/inbox" element={<Inbox />} />
				<Route path="/help" element={<Help />} />
				<Route path="/profile/:id" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
