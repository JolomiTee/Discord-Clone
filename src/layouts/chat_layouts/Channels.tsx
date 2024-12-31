import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/keyboard/KeyboardWrapper";
import MessagesDisplayVariant from "@/components/common/messages/MessagesDisplayVariant";
import { Form } from "@/components/ui/form";
import {
	useDirectMessagesState,
	useHMenuSelectedClient,
} from "@/hooks/use-dms";
import MainContainer from "@/layouts/MainContainer";
import { useSendMessageFormSchema } from "@/lib/formSchemas/sendMessageSchema";
import { CurrentChannels } from "@/types";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

const ChannelsLayout = () => {
	const client = useHMenuSelectedClient(
		(state) => state.client
	) as CurrentChannels;

	const { form, formSchema } = useSendMessageFormSchema();
	const messages = useDirectMessagesState((state) => state.messages);

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log(data);
	}

	return (
		<MainContainer>
			<>
				<HMenu name={client.name} channelType={client.channelType} />

				<MessagesDisplayVariant messages={messages} />

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
