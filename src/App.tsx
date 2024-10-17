import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Sidelist from "./components/Sidelist";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import ChatBubble from "./components/ChatBubble";
import { chatConversation } from "./data";

function App() {
	const [context, setContext] = useState("messages");
	return (
		<div className="flex w-screen h-screen">
			<Sidebar />
			<Sidelist />

			<section
				className={`bg-charcoal w-full h-full font-open-sans overflow-hidden ${
					context === "messages" ? "" : "flex items-center justify-center"
				}`}
			>
				{context === "messages" ? (
					<>
						<header className="flex justify-between items-center gap-3 h-[55px] px-4 bg-onyx w-full">
							<div className="flex items-center gap-3">
								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/sidebar.svg"
										alt="Sidebar"
										className="w-7 h-7"
									/>
								</Button>

								<div className="flex items-center justify-start gap-3 bg-transparent shadow-none">
									<div className="relative">
										<Avatar className="flex items-center justify-center">
											<AvatarImage
												src={"/silly.png"}
												className="w-8 h-8  rounded-full"
											/>
											<AvatarFallback className="flex items-center justify-center">
												<img
													src="src/assets/icons/discord.svg"
													className="w-[35px] h-[35px]  rounded-full"
												/>
											</AvatarFallback>
										</Avatar>
										<div
											className={`absolute -right-1 bottom-0
													bg-emerald
												rounded-full w-4 h-4 border-[3px] border-solid border-onyx`}
										></div>
									</div>
									<span className="font-bold text-[#FFFFFF99]">
										Shepard
									</span>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/call.svg"
										alt="Sidebar"
										className="w-10 h-10"
									/>
								</Button>

								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/video_call.svg"
										alt="Sidebar"
										className="w-10 h-10"
									/>
								</Button>

								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/disable_notification.svg"
										alt="Sidebar"
										className="w-10 h-10"
									/>
								</Button>

								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/pin.svg"
										alt="Sidebar"
										className="w-10 h-10"
									/>
								</Button>

								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/search.svg"
										alt="Sidebar"
										className="w-7 h-7"
									/>
								</Button>

								<Button className="bg-transparent" size={"icon"}>
									<img
										src="/src/assets/icons/sidebar.svg"
										alt="Sidebar"
										className="w-7 h-7"
									/>
								</Button>
							</div>
						</header>

						<main className="p-6 relative flex flex-col gap-[30px] justify-between overflow-y-auto max-h-full w-full scrollbar-hidden pb-[200px]">
							{/* Badge with sticky positioning */}
							<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
								September 26, 2024
							</Badge>

							{/* Chat bubbles that scroll under the badge */}
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
