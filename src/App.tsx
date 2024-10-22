import { SidebarProvider } from "@/components/ui/sidebar";
import ChatBubble from "./components/common/ChatBubble";
import HMenu from "./components/HMenu";
import Keyboard from "./components/Keyboard";
import ServerTray from "./components/ServerTray";
import { LSidebar, RSidebar } from "./components/Sidebars";
import { Badge } from "./components/ui/badge";
import { chatConversation, textChannelConversation } from "./data";
import { useStore } from "./hooks/base-context";

function App() {
	const appState = useStore((state) => state.appState);
	const l_sidebar_state = useStore((state) => state.l_sidebar);
	const r_sidebar_state = useStore((state) => state.r_sidebar);

	return (
		<div className="flex relative w-screen h-screen overflow-hidden bg-charcoal">
			{/* The server icons tray */}
			<ServerTray />

			<SidebarProvider className="w-fit" open={l_sidebar_state}>
				<LSidebar />
			</SidebarProvider>

			<section
				className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
					appState === "messages" || appState === "server"
						? "flex flex-col h-full"
						: "flex flex-col items-center justify-center text-center"
				}`}
			>
				{appState === "messages" ? (
					<>
						<HMenu />
						{/* sidebar trigger */}
						<main className="p-6 relative flex flex-col gap-[30px] justify-between overflow-y-auto w-full scrollbar-hidden pb-[50px] my-1.5 rounded">
							<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
								September 26, 2024
							</Badge>

							{chatConversation.map((msg, i) => {
								const { user, time, message, profileImg } = msg;

								return (
									<ChatBubble
										key={i}
										profileImg={profileImg}
										user={user}
										time={time}
										message={message}
									/>
								);
							})}
						</main>

						<Keyboard />
					</>
				) : appState === "server" ? (
					<>
						<HMenu />
						<main className="p-6 relative flex flex-col gap-[30px] justify-between overflow-y-auto w-full scrollbar-hidden pb-[50px] my-1.5 rounded">
							<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
								October 10, 2024
							</Badge>

							{textChannelConversation.map((msg, i) => {
								const { user, time, message, profileImg } = msg;

								return (
									<ChatBubble
										key={i}
										profileImg={profileImg}
										user={user}
										time={time}
										message={message}
									/>
								);
							})}
						</main>

						<Keyboard />
					</>
				) : (
					<>
						<img
							src="/wumpus.png"
							alt="Wumpus"
							className="max-w-[500px] mx-auto"
						/>
						<p className="text-center text-[16px] text-white font-semibold">
							Wumpus is waiting for you to pick a chat.
						</p>
					</>
				)}
			</section>

			<SidebarProvider className="w-fit" open={r_sidebar_state}>
				<RSidebar />
			</SidebarProvider>
		</div>
	);
}

export default App;
