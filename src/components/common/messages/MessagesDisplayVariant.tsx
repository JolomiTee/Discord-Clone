import Wumpus from "@/layouts/Wumpus";
import { CurrentChannels, Friends, Message } from "@/types";
import { useCallback, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

interface Props {
	client: Friends | CurrentChannels;
	messages: Message[];
}

const MessagesDisplayVariant = ({ messages }: Props) => {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	// Recipients Info
	return (
		<div className="h-full flex flex-col relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
			{messages.length > 0 ? (
				messages.map((msg) => (
					<ChatBubble
						key={msg.msg_id + 1}
						messageId={msg.msg_id}
						time={msg.time}
						message={msg.message}
						user={msg.sender_info} // Pass logged-in user data
					/>
				))
			) : (
				<Wumpus />
			)}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default MessagesDisplayVariant;
