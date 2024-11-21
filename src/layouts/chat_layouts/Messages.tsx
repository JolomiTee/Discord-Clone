import ChatBubble from "@/components/common/ChatBubble";
import MainContainer from "@/layouts/MainContainer";
import { Badge } from "@/components/ui/badge";
import Keyboard from "@/components/common/Keyboard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { conversations, friends } from "@/data/dms";
import { Conversation, Friends } from "@/types";

const MessagesLayout = () => {
	const [chatConversations, setChatConversations] = useState<Conversation>();
	const [friendInfo, setFriendInfo] = useState<Friends>();
	const { dmId } = useParams();

	useEffect(() => {
		const chats = conversations.find(
			(convo) => convo.conversationId === `convo-${1000}-${dmId}`
		);
		const friend = friends.find((friend) => friend.id === Number(dmId));
		setChatConversations(chats);
		setFriendInfo(friend);
	}, [dmId, conversations, friendInfo]);

	return (
		<MainContainer>
			<>
				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 ">
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10 text-[11px] md:text-xs">
						September 26, 2024
					</Badge>

					{chatConversations?.messages.map((msg) => {
						const { messageId, time, message, senderId } = msg;

						return (
							<ChatBubble
								key={messageId}
								friend={friendInfo}
								messageId={messageId}
								senderId={senderId}
								time={time}
								message={message}
							/>
						);
					})}
				</div>
				<Keyboard />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
