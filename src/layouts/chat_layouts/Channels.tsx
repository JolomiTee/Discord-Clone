import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Badge } from "@/components/ui/badge";
import { textChannelConversation } from "@/data/channels";
import { friends } from "@/data/dms";
import { serverList } from "@/data/servers";
import MainContainer from "@/layouts/MainContainer";
import { CurrentChannels, textChannelConversations } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wumpus from "../Wumpus";
import { useUser } from "@clerk/clerk-react";

const ChannelsLayout = () => {
	const { channelId } = useParams();
	const { user } = useUser();
	console.log("userid: ", user?.id);

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	const [currentChannelMessages, setCurrentChannelMessages] =
		useState<textChannelConversations>();

	const [currentChannel, setcurrentChannel] = useState<CurrentChannels>();

	// Effect to fetch and set channel data when channelId changes
	useEffect(() => {
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
	}, [channelId]);

	return (
		<MainContainer>
			<>
				<HMenu
					name={currentChannel?.name || "Unknown Channel"}
					channelType={currentChannel?.channelType}
				/>

				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
						October 10, 2024
					</Badge>

					{/* Render Chat Bubbles */}
					{currentChannelMessages &&
					currentChannelMessages.messages.length > 0 ? (
						currentChannelMessages?.messages.map((msg) => {
							const { messageId, time, message, senderId } = msg;

							return (
								<ChatBubble
									key={messageId}
									messageId={messageId}
									senderId={senderId}
									time={time}
									message={message}
									friend={
										friends.find(
											(friend) => friend.id === senderId
										) || null
									}
									user={currentUser}
								/>
							);
						})
					) : (
						<Wumpus />
					)}
				</div>

				<Keyboard />
			</>
		</MainContainer>
	);
};

export default ChannelsLayout;
