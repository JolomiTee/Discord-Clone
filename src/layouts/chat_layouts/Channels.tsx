import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Badge } from "@/components/ui/badge";
import { textChannelConversation } from "@/data/channels";
import { conversations, friends } from "@/data/dms";
import { serverList } from "@/data/servers";
import MainContainer from "@/layouts/MainContainer";
import {
	Channels,
	CurrentChannels,
	Messages,
	textChannelConversations,
} from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChannelsLayout = () => {
	// Fetch channelId from route parameters
	const { channelId } = useParams();

	// State for the current channel and its messages
	const [currentChannelMessages, setCurrentChannelMessages] =
		useState<textChannelConversations>();

	const [currentChannel, setcurrentChannel] = useState<CurrentChannels>();

	// Effect to fetch and set channel data when channelId changes
	useEffect(() => {
		// Find the current channel using channelId
		// const channel = serverList
		// 	.flatMap((server) => [
		// 		...server.channels.textChannels,
		// 		...server.channels.voiceChannels,
		// 	])
		// 	.find((ch) => ch.id === channelId);

		const channel = textChannelConversation.find(
			(_chan) => _chan.channelId === channelId
		);

		const currChannel = serverList
			.flatMap((server) => [
				...server.channels.textChannels,
				...server.channels.voiceChannels,
			])
			.find((ch) => ch.id === channelId);

		setCurrentChannelMessages(channel);
		setcurrentChannel({
			name: currChannel?.name,
			channelType: currChannel?.type,
		});

		// Find the conversation associated with this channel
		// const conversation = conversations.find(
		// 	(convo) => convo.conversationId === `convo-${channelId}`
		// );

		// Set the messages for this conversation
		// setChannelMessages(conversation?.messages || []);
	}, [channelId]);

	// const channel = serverList
	// 	.flatMap((server) => [
	// 		...server.channels.textChannels,
	// 		...server.channels.voiceChannels,
	// 	])
	// 	.find((ch) => ch.id === channelId);
	// console.log(channel);
	return (
		<MainContainer>
			<>
				{/* Header Menu: Dynamic channel name and type */}
				<HMenu
					name={currentChannel?.name || "Unknown Channel"}
					channelType={currentChannel?.channelType}
				/>

				{/* Messages Container */}
				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{/* Date Badge */}
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
						October 10, 2024
					</Badge>

					{/* Render Chat Bubbles */}
					{currentChannelMessages?.messages.map((msg) => {
						const { messageId, time, message, senderId } = msg;

						return (
							<ChatBubble
								key={messageId}
								messageId={messageId}
								senderId={senderId}
								time={time}
								message={message}
								friend={
									friends.find((friend) => friend.id === senderId) ||
									null
								}
								user={{
									userId: "1000",
									username: "GrassMaster333",
									userProfileImage: "",
								}}
							/>
						);
					})}
				</div>

				{/* Input for new messages */}
				<Keyboard />
			</>
		</MainContainer>
	);
};


export default ChannelsLayout;
