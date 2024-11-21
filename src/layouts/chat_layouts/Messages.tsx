import ChatBubble from "@/components/common/ChatBubble";
import MainContainer from "@/layouts/MainContainer";
import { Badge } from "@/components/ui/badge";
import { chatConversation } from "@/data";
import Keyboard from "@/components/common/Keyboard";

const MessagesLayout = () => {
	return (
		<MainContainer>
			<>
				<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10 text-[11px] md:text-xs">
					September 26, 2024
				</Badge>

				{chatConversation.map((msg, i) => {
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
				<Keyboard />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
