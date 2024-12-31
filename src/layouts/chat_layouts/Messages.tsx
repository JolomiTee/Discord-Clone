import HMenu from "@/components/common/HMenu";
import LoadingChats from "@/components/common/skeletons/LoadingChats";
import Keyboard from "@/components/keyboard/KeyboardWrapper";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import useClerkQuery from "@/hooks/use-query";
import MainContainer from "@/layouts/MainContainer";
import { Friends, Message } from "@/types";
import { useCallback, useEffect, useMemo, useRef } from "react";
import io from "socket.io-client";
import MessagesDisplayVariant from "../../components/common/messages/MessagesDisplayVariant";
import Wumpus from "../Wumpus";

const MessagesLayout = () => {
	const socket = useMemo(() => io("http://localhost:6464"), []);
	const client = useHMenuSelectedClient((state) => state.client) as Friends;
	const messages = useDirectMessagesState((state) => state.messages);
	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const { data, isLoading, error } = useClerkQuery<Message[]>(
		`direct-messages/${client.chatId}`
	);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		if (data?.data) updateMessages(data.data);
	}, [data]);

	useEffect(() => {
		console.log("Setting up message listener");
		const handleReceiveMessage = (data: Message) => {
			console.table(data);
			updateMessages(data);
		};

		socket.on("recieve_message", handleReceiveMessage);

		return () => {
			console.log("Cleaning up message listener");
			socket.off("recieve_message", handleReceiveMessage);
		};
	}, [socket, updateMessages]);

	console.log(messages);

	return (
		<MainContainer>
			<>
				<HMenu
					name={client.username}
					profile_image={client.profile_image_url}
				/>

				{isLoading ? (
					<LoadingChats />
				) : error ? (
					<div>Error loading messages.</div>
				) : data.data?.length < 1 ? (
					<Wumpus />
				) : (
					<MessagesDisplayVariant messages={messages} />
				)}

				<Keyboard />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
