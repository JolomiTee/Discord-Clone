import HMenu from "@/components/common/HMenu";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { CurrentChannels } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { formatDate } from "@/lib/utils";
import Keyboard from "@/components/common/messages/Keyboard";
import MessagesDisplayVariant from "@/components/common/messages/MessagesDisplayVariant";

const ChannelsLayout = () => {
	const { user } = useUser();

	const client = useHMenuSelectedClient(
		(state) => state.client
	) as CurrentChannels;

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	const { form, formSchema } = useSendMessageFormSchema();
	const messages = useDirectMessagesState((state) => state.messages);
	const updateMessages = useDirectMessagesState(
		(state) => state.updateMessages
	);

	function onSubmit(data: z.infer<typeof formSchema>) {
		// updateMessages({
		// 	message: data.message,
		// 	msg_id: uuidv4(),
		// 	time: formatDate(new Date(Date.now())),
		// 	sender_info: currentUser,
		// });
	}

	return (
		<MainContainer>
			<>
				<HMenu name={client.name} channelType={client.channelType} />

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

export default ChannelsLayout;
