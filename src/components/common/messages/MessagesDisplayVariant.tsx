import Wumpus from "@/layouts/Wumpus";
import { Message } from "@/types";
import { useCallback, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

interface Props {
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

	// Validate messages
	if (!Array.isArray(messages) || messages.length === 0) {
		return <Wumpus />;
	}

	return (
		<div className="h-full flex flex-col relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
			{messages.map((msg) => (
				<ChatBubble
					key={msg._id}
					messageId={msg._id}
					time={msg.createdAt}
					message={msg.message}
					sender={msg.sender_info}
				/>
			))}
			<div ref={messagesEndRef} />
		</div>
	);
};


export default MessagesDisplayVariant;
