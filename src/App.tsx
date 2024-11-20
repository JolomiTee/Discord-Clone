import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";
import Help from "./pages/Help";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import Servers from "./pages/Servers";
import Home from "./pages/home/Home";
import Login from "./pages/home/Login";
import Signup from "./pages/home/Signup";
import TnC from "./pages/home/TnC";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/tnc" element={<TnC />} />

			<Route path="/user" element={<AppLayout />}>
				<Route element={<Main />}>
					<Route index element={<Navigate to="@me" replace />} />

					<Route path="@me">
						<Route index element={<Wumpus />} />
						<Route path="dm/:dmId" element={<MessagesLayout />} />
					</Route>

					<Route path="@server">
						<Route index element={<Servers />} />

						<Route path=":serverId">
							<Route index element={<Wumpus />} />
							<Route path="@channel">
								<Route path=":channelId" element={<ChannelsLayout />} />
							</Route>
						</Route>
					</Route>
				</Route>

				<Route path="inbox" element={<Inbox />} />
				<Route path="help" element={<Help />} />
				<Route path="profile/:id" element={<Profile />} />
			</Route>
		</Routes>
	);
}

export default App;
