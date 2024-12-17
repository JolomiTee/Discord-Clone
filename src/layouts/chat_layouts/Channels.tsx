import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import MainContainer from "@/layouts/MainContainer";
import { useUser } from "@clerk/clerk-react";
import Wumpus from "../Wumpus";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import { CurrentChannels } from "@/types";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { FormProvider } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import ChatBubble from "@/components/common/ChatBubble";

const ChannelsLayout = () => {
	const { user } = useUser();
	console.log("userid: ", user?.id);

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

	function onSubmit(data: z.infer<typeof formSchema>) {
		toast(
			<div>
				Message sent
				<span>{data.message}</span>
			</div>
		);
	}

	return (
		<MainContainer>
			<>
				<HMenu name={client.name} channelType={client.channelType} />

				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
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

export default ChannelsLayout;
