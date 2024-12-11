import ChatBubble from "@/components/common/ChatBubble";
import HMenu from "@/components/common/HMenu";
import Keyboard from "@/components/common/Keyboard";
import { Badge } from "@/components/ui/badge";
import { textChannelConversation } from "@/data/channels";
import { serverList } from "@/data/servers";
import MainContainer from "@/layouts/MainContainer";
import { CurrentChannels, textChannelConversations } from "@/types";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wumpus from "../Wumpus";

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
			.flatMap((server) => [...server.channels])
			.find((ch) => ch._id === channelId);

		setCurrentChannelMessages(channel);
		setcurrentChannel({
			name: currChannel?.name,
			channelType: currChannel?.channelType,
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
							const { messageId, time, message } = msg;

							return (
								<ChatBubble
									key={messageId}
									messageId={messageId}
									time={time}
									message={message}
									user={currentUser}
								/>
							);
						})
					) : (
						<Wumpus />
					)}
				</div>

				<Keyboard currentUser={currentUser} />
			</>
		</MainContainer>
	);
};

export default ChannelsLayout;
