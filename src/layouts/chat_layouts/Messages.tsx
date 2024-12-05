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
import { useUser } from "@clerk/clerk-react";
import { useDirectMessagesState } from "@/hooks/use-dms";
const MessagesLayout = () => {
	// Logged-in user details
	const { user } = useUser();

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	const [chatConversations, setChatConversations] =
		useState<Conversation | null>(null);
	const [friendInfo, setFriendInfo] = useState<Friends | null>(null);

	// Retrieve the DM ID from the route parameters
	const { dmId } = useParams();

	useEffect(() => {
		// Find the conversation matching the user and DM
		const chats = conversations.find(
			(convo) =>
				convo.conversationId === `convo-${currentUser.userId}-${dmId}`
		);

		// Find the friend information based on dmId
		const friend = friends.find((friend) => friend.id === dmId);

		setChatConversations(chats || null);
		setFriendInfo(friend || null);
	}, [dmId]);

	console.log(chatConversations);

	const messages = useDirectMessagesState((state) => state.messages);

	return (
		<MainContainer>
			<>
				{/* Display friend info at the top */}
				<HMenu
					name={friendInfo?.user}
					profile_image={friendInfo?.profileImg}
				/>

				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{/* Example badge */}
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10 text-[11px] md:text-xs">
						September 26, 2024
					</Badge>

					{/* Render Chat Bubbles */}
					{messages && messages.length > 0 ? (
						messages.map((msg) => {
							return (
								<ChatBubble
									key={msg.msg_id}
									messageId={msg.msg_id}
									time={msg.time}
									message={msg.message}
									user={msg.sender_info} // Pass logged-in user data
								/>
							);
						})
					) : (
						<Wumpus />
					)}
				</div>

				<Keyboard currentUser={currentUser} />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
