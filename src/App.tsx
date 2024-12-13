import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChannelsLayout from "./layouts/chat_layouts/Channels";
import MessagesLayout from "./layouts/chat_layouts/Messages";
import Main from "./layouts/Layout";
import Wumpus from "./layouts/Wumpus";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Help from "./pages/Help";
import Home from "./pages/home/Home";
import TnC from "./pages/home/TnC";
import Inbox from "./pages/Inbox";
import Servers from "./pages/Servers";
import Error404 from "./pages/Error404";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Error404 />} />

			<Route path="/sign-in/*" element={<Login />} />
			<Route path="/sign-up/*" element={<Signup />} />

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
			</Route>
		</Routes>
	);
}

export default App;
