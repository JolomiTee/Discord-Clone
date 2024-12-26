import HMenu from "@/components/common/HMenu";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import useClerkQuery, { useClerkRequest } from "@/hooks/use-query";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { formatDate } from "@/lib/utils";
import { Friends, Message } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import Wumpus from "../Wumpus";
import { useCallback, useEffect, useMemo, useRef } from "react";
import io, { Socket } from "socket.io-client";
import MessagesDisplayVariant from "../../components/common/messages/MessagesDisplayVariant";
import Keyboard from "@/components/common/messages/Keyboard";

// const MessagesLayout = () => {
// 	// const socket = io("http://localhost:3000");
// 	// // Logged-in user details
// 	// const client = useHMenuSelectedClient((state) => state.client) as Friends;
// 	// const { user } = useUser();

// 	// const { mutate: updateRecentChat, isLoading: isMutationLoading } = useClerkRequest("POST", [
// 	// 	"recent-chat",
// 	// ]);

// 	// const {
// 	// 	data,
// 	// 	isLoading: isMessagesLoading,
// 	// 	error,
// 	// } = useClerkQuery<Message[]>(`messages/${client._id}`);

// 	// const messages = useDirectMessagesState((state) => state.messages);
// 	// const updateMessages = useDirectMessagesState(
// 	// 	(state) => state.updateMessages
// 	// );

// 	// useEffect(() => {
// 	// 	const socket = io(process.env.SOCKET_SERVER_URL);

// 	// Join a specific room for the current client
// 	// 	socket.emit("join_room", client._id);

// 	// Listen for new messages
// 	// 	socket.on("receive_message", (newMessage) => {
// 	// mutation logic
// 	// 	});

// 	// 	return () => {
// 	// 		socket.disconnect(); // Clean up the connection
// 	// 	};
// 	// }, [client._id]);

// 	// const currentUser = {
// 	// 	userId: user?.id,
// 	// 	username: user?.username,
// 	// 	userProfileImage: user?.imageUrl,
// 	// };

// 	// const { form, formSchema } = useSendMessageFormSchema();

// 	// function onSubmit(data: z.infer<typeof formSchema>) {
// 	// 	if (messages.length >= 1) {
// 	// 		// socket logic and mongoose push
// 	// 		updateMessages({
// 	// 			message: data.message,
// 	// 			msg_id: uuidv4(),
// 	// 			time: formatDate(new Date(Date.now())),
// 	// 			sender_info: currentUser,
// 	// 		});
// 	// 	} else {
// 	// 		mutate(
// 	// 			{
// 	// 				url: `recent-chat/${client._id}`,
// 	// 			},
// 	// 			{
// 	// 				onSuccess: () => {
// 	// 					toast(
// 	// 						<div>
// 	// 							{isMutationLoading ? (
// 	// 								<Loader className="animate-spin" />
// 	// 							) : (
// 	// 								`${client.username} added to message list`
// 	// 							)}
// 	// 						</div>
// 	// 					);
// 	// 					// updateMessages({
// 	// 					// 	message: data.message,
// 	// 					// 	msg_id: uuidv4(),
// 	// 					// 	time: formatDate(new Date(Date.now())),
// 	// 					// 	sender_info: currentUser,
// 	// 					// });
// 	// 				},
// 	// 			}
// 	// 		);
// 	// 	}
// 	// }

// 	// useEffect(() => {
// 	// 	const { data, isLoading, error } = useClerkQuery<Message>(`messages/${client._id}`);

// 	// 	if (!data) return;

// 	// 		updateMessages(data.data);

// 	// 	// Listen for new messages
// 	// 	socket.on("receive_message", (message) => {
// 	// 		if (
// 	// 			(message.sender === currentUser.userId &&
// 	// 				message.receiver === chatPartner) ||
// 	// 			(message.sender === chatPartner && message.receiver === currentUser.userId)
// 	// 		) {
// 	// 			setMessages((prev) => [...prev, message]);
// 	// 		}
// 	// 	});

// 	// 	return () => socket.off("receive_message");
// 	// }, [currentUser, chatPartner]);

// 	// const sendMessage = () => {
// 	// 	const messageData = {
// 	// 		sender: currentUser,
// 	// 		receiver: chatPartner,
// 	// 		message: newMessage,
// 	// 	};

// 	// 	socket.emit("send_message", messageData);
// 	// 	setMessages((prev) => [...prev, messageData]);
// 	// 	setNewMessage("");
// 	// };

// 	// ? ********************************************************************
// 	// General States

// 	const messages = useDirectMessagesState((state) => state.messages);
// 	const updateMessages = useDirectMessagesState(
// 		(state) => state.updateMessages
// 	);

// 	const messagesEndRef = useRef<HTMLDivElement>(null);

// 	const scrollToBottom = () => {
// 		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// 	};

// 	useEffect(() => {
// 		scrollToBottom();
// 	}, [messages]);

// 	// Recipients Info
// 	const client = useHMenuSelectedClient((state) => state.client) as Friends;
// 	const { user } = useUser();
// 	const currentUser = {
// 		userId: user?.id,
// 		username: user?.username,
// 		userProfileImage: user?.imageUrl,
// 	};

// 	// Forms
// 	const { form, formSchema } = useSendMessageFormSchema();

// 	// Functions
// 	function onSubmit(data: z.infer<typeof formSchema>) {
// 		 const messageData = {
// 				sender: currentUser.userId,
// 				receiver: client._id,
// 				message: data.message,
// 			};

// 			socket.emit("send_message", messageData);
// 			updateMessages((prev) => [...prev, messageData]);
// 	}

// 	// Socket Logic
// 	useEffect(() => {
// 		socket.emit("join_room", client._id);

// 		// Listen for new messages
// 		socket.on("receive_message", (message: Message) => {
// 			if (
// 				(message.sender_info.userId === currentUser.userId &&
// 					message.sender_info.userId === client._id) ||
// 				(message.sender_info.userId === client._id &&
// 					message.sender_info.userId === currentUser.userId)
// 			) {
// 				updateMessages((prev) => [...prev, message]);
// 			}
// 		});

// 		return () => socket.off("receive_message");
// 	}, [client._id, currentUser.userId]);

// 	return (
// 		<MainContainer>
// 			<>
// 				{/* Display friend info at the top */}
// 				<HMenu
// 					name={client.username}
// 					profile_image={client.profile_image_url}
// 				/>

// 				<div className="h-full flex flex-col relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
// 					{messages.length > 0 ? (
// 						messages.map((msg) => {
// 							return (
// 								<ChatBubble
// 									key={msg.msg_id}
// 									messageId={msg.msg_id}
// 									time={msg.time}
// 									message={msg.message}
// 									user={msg.sender_info} // Pass logged-in user data
// 								/>
// 							);
// 						})
// 					) : (
// 						<Wumpus />
// 					)}
// 					<div ref={messagesEndRef} />
// 				</div>

// 				<FormProvider {...form}>
// 					<Form {...form}>
// 						<form onSubmit={form.handleSubmit(onSubmit)} className="">
// 							<Keyboard
// 								currentUser={currentUser}
// 								currentDmClientId={client._id}
// 							/>
// 						</form>
// 					</Form>
// 				</FormProvider>
// 			</>
// 		</MainContainer>
// 	);
// };

const MessagesLayout = () => {
	const socket = useMemo(() => io("http://localhost:6464"), []);
	const { user } = useUser();
	const { form, formSchema } = useSendMessageFormSchema();

	const client = useHMenuSelectedClient((state) => state.client) as Friends;
	const messages = useDirectMessagesState((state) => state.messages);
	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);
	const currentUser = useMemo(
		() => ({
			userId: user?.id,
			username: user?.username,
			userProfileImage: user?.imageUrl,
		}),
		[user]
	);

	// ******************************

	// ******************************

	useEffect(() => {
		console.log("Setting up message listener");
		const handleReceiveMessage = (data: Message) => {
			console.log("Received message:", data);
			updateMessages(data);
		};

		socket.on("recieve_message", handleReceiveMessage);

		return () => {
			console.log("Cleaning up message listener");
			socket.off("recieve_message", handleReceiveMessage);
		};
	}, [updateMessages]);

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log("Submitting message");
		const messageData = {
			sender_info: currentUser,
			reciever_info: client,
			message: data.message,
			msg_id: uuidv4(),
			time: formatDate(new Date(Date.now())),
		};

		try {
			socket.emit("send_message", messageData);
			console.log("Optimistically updating UI");
			updateMessages(messageData);
		} catch (error) {
			console.error("Failed to send message:", error);
		}
	}

	return (
		<MainContainer>
			<>
				{/* Display friend info at the top */}
				<HMenu
					name={client.username}
					profile_image={client.profile_image_url}
				/>

				<MessagesDisplayVariant client={client} messages={messages} />

				<FormProvider {...form}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="">
							<Keyboard />
						</form>
					</Form>
				</FormProvider>
			</>
		</MainContainer>
	);
};

export default MessagesLayout;

// // General States
// const socketRef = useRef<Socket | null>(null);
// // Socket Initialization
// useEffect(() => {
// 	socketRef.current = io("http://localhost:6464");

// 	return () => {
// 		socketRef.current?.disconnect();
// 	};
// }, []);

// // Socket Logic
// useEffect(() => {
// 	socketRef.current?.emit("join_room", client.username);

// 	socketRef.current?.on("join_room", (room: string) => {
// 		console.log(`Joined room: ${room}`);
// 	});

// 	const handleReceiveMessage = (message: Message) => {
// 		if (
// 			(message.sender_info.username === currentUser.username &&
// 				message.reciever_info.username === client.username) ||
// 			(message.sender_info.username === client.username &&
// 				message.reciever_info.username === currentUser.username)
// 		) {
// 			updateMessages({
// 				sender_info: message.sender_info,
// 				reciever_info: message.reciever_info,
// 				message: message.message,
// 				msg_id: message.msg_id,
// 				time: message.time,
// 			});
// 		}
// 	};

// 	socketRef.current?.on("receive_message", handleReceiveMessage);

// 	return () => {
// 		socketRef.current?.off("receive_message", handleReceiveMessage);
// 	};
// }, [client._id, currentUser.userId]);

// // Functions
// function onSubmit(data: z.infer<typeof formSchema>) {
// 	const messageData = {
// 		sender_info: currentUser,
// 		reciever_info: client,
// 		message: data.message,
// 		msg_id: uuidv4(),
// 		time: formatDate(new Date(Date.now())),
// 	};

// 	try {
// 		socketRef.current?.emit("send_message", messageData);
// 		updateMessages(messageData); // Optimistic UI update
// 	} catch (error) {
// 		console.error("Failed to send message:", error);
// 	}
// }
