import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Badge } from "@/components/ui/badge";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import MainContainer from "@/layouts/MainContainer";
import { Friends } from "@/types";
import { useUser } from "@clerk/clerk-react";
import Wumpus from "../Wumpus";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { toast } from "sonner";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormProvider } from "react-hook-form";

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

	const { form, formSchema } = useSendMessageFormSchema();

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
				{/* Display friend info at the top */}
				<HMenu
					name={client.username}
					profile_image={client.profile_image_url}
				/>

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

export default MessagesLayout;
