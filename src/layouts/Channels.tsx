import ChatBubble from "@/components/common/ChatBubble";
import MainContainer from "@/components/common/MainContainer";
import { Badge } from "@/components/ui/badge";
import { textChannelConversation } from "@/data";

const ChannelsLayout = () => {
	return (
		<MainContainer>
			<>
				<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10">
					October 10, 2024
				</Badge>

				{textChannelConversation.map((msg, i) => {
					const { user, time, message, profileImg } = msg;

					return (
						<ChatBubble
							key={i}
							profileImg={profileImg}
							user={user}
							time={time}
							message={message}
						/>
					);
				})}
			</>
		</MainContainer>
	);
};

export default ChannelsLayout;
