import ChatBubble from "@/components/common/ChatBubble";
import MainContainer from "@/layouts/MainContainer";
import { Badge } from "@/components/ui/badge";
import Keyboard from "@/components/common/Keyboard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { conversations, friends } from "@/data/dms";
import { Conversation, Friends } from "@/types";
import HMenu from "@/components/common/HMenu";
import Wumpus from "../Wumpus";

const MessagesLayout = () => {
	// Logged-in user details
	const user = {
		userId: "1000",
		username: "GrassMaster333",
		userProfileImage: "/beluga.png",
	};

	const [chatConversations, setChatConversations] =
		useState<Conversation | null>(null);
	const [friendInfo, setFriendInfo] = useState<Friends | null>(null);

	// Retrieve the DM ID from the route parameters
	const { dmId } = useParams();

	useEffect(() => {
		// Find the conversation matching the user and DM
		const chats = conversations.find(
			(convo) => convo.conversationId === `convo-${user.userId}-${dmId}`
		);

		// Find the friend information based on dmId
		const friend = friends.find((friend) => friend.id === dmId);

		setChatConversations(chats || null);
		setFriendInfo(friend || null);
	}, [dmId]);

	return (
		<MainContainer>
			<>
				{/* Display friend info at the top */}
				<HMenu
					name={friendInfo?.user}
					profile_image={friendInfo?.profileImg}
				/>

				{/* Messages */}
				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{/* Example badge */}
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10 text-[11px] md:text-xs">
						September 26, 2024
					</Badge>

					{/* Render Chat Bubbles */}
					{chatConversations && chatConversations?.messages.length > 0 ? (
						chatConversations?.messages.map((msg) => {
							const { messageId, senderId, time, message } = msg;

							return (
								<ChatBubble
									key={messageId}
									messageId={messageId}
									senderId={senderId}
									time={time}
									message={message}
									friend={friendInfo} // Pass friend data
									user={user} // Pass logged-in user data
								/>
							);
						})
					) : (
						<Wumpus />
					)}
				</div>

				{/* Input field for new messages */}
				<Keyboard />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;