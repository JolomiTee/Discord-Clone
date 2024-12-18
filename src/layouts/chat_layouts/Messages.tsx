import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { Friends } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import Wumpus from "../Wumpus";
import { formatDate } from "@/lib/utils";

const MessagesLayout = () => {
	// Logged-in user details
	const client = useHMenuSelectedClient((state) => state.client) as Friends;
	const { user } = useUser();

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
		updateMessages({
			message: data.message,
			msg_id: uuidv4(),
			time: formatDate(new Date(Date.now())),
			sender_info: currentUser,
		});
	}

	return (
		<MainContainer>
			<>
				{/* Display friend info at the top */}
				<HMenu
					name={client.username}
					profile_image={client.profile_image_url}
				/>

				<div className="h-full flex flex-col relative overflow-auto scrollbar-hidden">
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
							<Keyboard currentUser={currentUser} />
						</form>
					</Form>
				</FormProvider>
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
