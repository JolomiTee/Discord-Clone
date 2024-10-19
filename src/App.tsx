import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Sidelist from "./components/Sidelist";
import { Badge } from "./components/ui/badge";
import ChatBubble from "./components/common/ChatBubble";
import { chatConversation, textChannelConversation } from "./data";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

function App() {
	const [context, setContext] = useState("");

	useEffect(() => {
		setContext("text_channel");
	}, []);

	return (
		<div className="flex w-screen h-screen">
			<Sidebar />
			<Sidelist />

			<section
				className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
					context === "messages" || "text_channel"
						? "flex flex-col h-full"
						: "flex items-center justify-center"
				}`}
			>
				<Header />
				{context === "messages" ? (
					<>
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
				) : context === "text_channel" ? (
					<>
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
					<div className="text-center">
						<img
							src="/wumpus.png"
							alt="Wumpus"
							className="max-w-[500px] mx-auto"
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
