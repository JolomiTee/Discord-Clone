import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import { useClerkRequest } from "@/hooks/use-query";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { formatDate } from "@/lib/utils";
import { Friends } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import Wumpus from "../Wumpus";

const MessagesLayout = () => {
	// Logged-in user details
	const client = useHMenuSelectedClient((state) => state.client) as Friends;
	const { user } = useUser();

	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"recent-chat",
	]);

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	const messages = useDirectMessagesState((state) => state.messages);
	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);

	const { form, formSchema } = useSendMessageFormSchema();

	function onSubmit(data: z.infer<typeof formSchema>) {
		if (messages.length >= 1) {
			// socket logic and mongoose push
			updateMessages({
				message: data.message,
				msg_id: uuidv4(),
				time: formatDate(new Date(Date.now())),
				sender_info: currentUser,
			});
		} else {
			mutate(
				{
					url: `recent-chat/${client._id}`,
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
						updateMessages({
							message: data.message,
							msg_id: uuidv4(),
							time: formatDate(new Date(Date.now())),
							sender_info: currentUser,
						});
					},
				}
			);
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

				<div className="h-full flex flex-col relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{messages.length > 0 ? (
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

				<FormProvider {...form}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="">
							<Keyboard
								currentUser={currentUser}
								currentDmClientId={client._id}
							/>
						</form>
					</Form>
				</FormProvider>
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
