import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Sidelist from "./components/Sidelist";
import { Badge } from "./components/ui/badge";
import ChatBubble from "./components/common/ChatBubble";
import { chatConversation } from "./data";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

function App() {
	const [context, setContext] = useState("");

	useEffect(() => {
		setContext("messages")
	}, [])

	return (
		<div className="flex w-screen h-screen">
			<Sidebar />
			<Sidelist />

			<section
				className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
					context === "messages"
						? "flex flex-col h-full"
						: "flex items-center justify-center"
				}`}
			>
				{context === "messages" ? (
					<>
						<Header />

						<main className="p-6 relative flex flex-col gap-[30px] justify-between overflow-y-auto max-h-full w-full scrollbar-hidden pb-[50px]">
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
				) : (
					<div>
						<img
							src="/wumpus.png"
							alt="Wumpus"
							className="max-w-[500px]"
						/>
						<p className="text-center text-[16px] text-white font-semibold">
							Wumpus is waiting for you to pick a chat.
						</p>
					</div>
				)}
			</section>
		</div>
	);
}

export default App;
