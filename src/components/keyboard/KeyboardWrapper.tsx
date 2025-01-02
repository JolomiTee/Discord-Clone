import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import { useClerkRequest } from "@/hooks/use-query";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { Friends } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { io } from "socket.io-client";
import { toast } from "sonner";
import { z } from "zod";
import { Keyboard } from "./Keyboard";
import { v4 as uuidv4 } from "uuid";
const KeyboardController = () => {
	const socket = useMemo(() => {
		return io(
			import.meta.env.REACT_APP_SOCKET_URL || "http://localhost:6464"
		);
	}, []);
	const { user } = useUser();

	const client = useHMenuSelectedClient((state) => state.client) as Friends;

	const { form, formSchema } = useSendMessageFormSchema();
	const { mutate: updateRecentChat, isLoading: isMutationLoading } =
		useClerkRequest("POST", ["direct-messages"]);

	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log("Submitting message");
		const messageData = {
			sender_info: {
				_id: user?.id,
				email_address: user?.emailAddresses[0]?.emailAddress,
				username: user?.username ?? "Unknown User",
				profile_image_url: user?.imageUrl,
			},
			messageId: uuidv4(),
			message: data.message,
			createdAt: new Date(Date.now()),
		};

		try {
			socket.emit("send_message", messageData);

			updateMessages(messageData);

			// form.reset();
			updateRecentChat(
				{
					url: `direct-messages/${client.username}/${client._id}`,
					body: messageData,
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
