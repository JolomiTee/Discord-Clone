import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import { useClerkRequest } from "@/hooks/use-query";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { formatDate } from "@/lib/utils";
import { Friends, SenderInfo } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { io } from "socket.io-client";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Keyboard } from "./Keyboard";

const KeyboardController = () => {
	const socket = useMemo(() => io("http://localhost:6464"), []);
	const { user } = useUser();

	const client = useHMenuSelectedClient((state) => state.client) as Friends;

	const { form, formSchema } = useSendMessageFormSchema();
	const { mutate: updateRecentChat, isLoading: isMutationLoading } =
		useClerkRequest("POST", ["direct-messages"]);

	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);

	const currentUser: SenderInfo | null = useMemo(() => {
		// Return null if essential fields are missing
		if (!user?.username || !user?.imageUrl) {
			return null;
		}

		return {
			username: user.username || "", // Provide default empty string if null
			profile_image_url: user.imageUrl,
		};
	}, [user]);

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log("Submitting message");
		const messageData = {
			sender_info: currentUser,
			message: data.message,
			_id: uuidv4(),
			time: formatDate(new Date(Date.now())),
		};

		try {
			socket.emit("send_message", messageData);
			console.log("Optimistically updating UI");
			updateMessages(messageData);
			updateRecentChat(
				{
					url: `direct-messages/${client.username}/${client._id}`,
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
		<FormProvider {...form}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="">
					<Keyboard />
				</form>
			</Form>
		</FormProvider>
	);
};

export default KeyboardController;
