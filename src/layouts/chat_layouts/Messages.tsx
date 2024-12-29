import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/messages/Keyboard";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import { useClerkRequest } from "@/hooks/use-query";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { formatDate } from "@/lib/utils";
import { Friends, Message } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useMemo } from "react";
import { FormProvider } from "react-hook-form";
import io from "socket.io-client";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import MessagesDisplayVariant from "../../components/common/messages/MessagesDisplayVariant";

// const MessagesLayout = () => {

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
	const { mutate: updateRecentChat, isLoading: isMutationLoading } =
		useClerkRequest("POST", ["direct-messages"]);

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
			updateRecentChat(
				{
					url: `direct-messages/${client._id}`,
					body: data,
				},
				{
					onSuccess: () => {
						toast(
							<div>
								{isMutationLoading ? (
									<Loader className="animate-spin" />
								) : (
									`${client.username} added to message list`
								)}
							</div>
						);
						// updateMessages({
						// 	message: data.message,
						// 	msg_id: uuidv4(),
						// 	time: formatDate(new Date(Date.now())),
						// 	sender_info: currentUser,
						// });
					},
				}
			);
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

