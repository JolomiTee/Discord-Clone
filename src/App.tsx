import { Link, Navigate, Route, Routes } from "react-router-dom";
import CollapsibleSidebar from "./components/sidebar/CollapsibleSidebar";
import ChannelsLayout from "./layouts/Channels";
import Main from "./layouts/Layout";
import MessagesLayout from "./layouts/Messages";
import Wumpus from "./layouts/Wumpus";
import Servers from "./pages/Servers";
import Inbox from "./pages/Inbox";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import Help from "./pages/Help";

function App() {
	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			<Link
				to={"help"}
				className="absolute z-[100] bottom-2 right-2 rounded-full size-8 bg-onyx flex justify-center items-center text-white"
			>
				<QuestionMarkIcon />
			</Link>

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
			</Routes>
		</div>
	);
}

export default App;
