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
const MessagesLayout = () => {
	// Logged-in user details
	const { user } = useUser();

	const client = useHMenuSelectedClient((state) => state.client) as Friends;

	const currentUser = {
		userId: user?.id,
		username: user?.username,
		userProfileImage: user?.imageUrl,
	};

	const messages = useDirectMessagesState((state) => state.messages);

	return (
		<MainContainer>
			<>
				{/* Display friend info at the top */}
				<HMenu
					name={client.username}
					profile_image={client.profile_image_url}
				/>

				<div className="h-full flex flex-col gap-[30px] relative overflow-auto scrollbar-hidden pb-5 p-3 md:p-4 lg:p-5">
					{/* Example badge */}
					<Badge className="mx-auto bg-charcoal rounded-[8px] px-3 py-2 sticky top-0 z-10 text-[11px] md:text-xs">
						September 26, 2024
					</Badge>

					{/* Render Chat Bubbles */}
					{messages && messages.length > 0 ? (
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

				<Keyboard currentUser={currentUser} />
			</>
		</MainContainer>
	);
};

export default MessagesLayout;
