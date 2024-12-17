import DMCard from "@/components/common/sidebar_buttons/DMCard";
import LoadingFriendList from "@/components/common/skeletons/LoadingFriendList";
import { messageList } from "@/data";
import useClerkQuery from "@/hooks/use-query";
import { Friends } from "@/types";
import { Plus } from "lucide-react";

const MessageList = () => {
	const { data, isLoading, error } = useClerkQuery<Friends[]>("recent-chat");

	return (
		<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
			{/* {data.map((message) => {
				const {
					profileImg,
					user,
					online,
					hasMessage,
					messageCount,
					id,
					slug,
				} = message;
				return (
					<DMCard
						key={id}
						dmId={id}
						slug={slug}
						user={user}
						profileImg={profileImg}
						online={online}
						hasMessage={hasMessage}
						messageCount={messageCount}
					/>
				);
			})} */}
			{isLoading ? (
				<LoadingFriendList />
			) : error ? (
				<div className="text-center">
					Wumpus couldnt find your recent chats
				</div>
			) : data.data.length > 0 ? (
				data.data.map((dms: Friends) => {
					const {
						_id,
						username,
						// firstName,
						// lastName,
						// email_address,
						profile_image_url,
					} = dms;

					return (
						<DMCard
							key={_id}
							dmId={_id}
							username={username}
							profileImg={profile_image_url}
							// online={online}
							// hasMessage={hasMessage}
							// messageCount={messageCount}
						/>
					);
				})
			) : (
				<div className="text-center">
					No recent conversations <br />
					<p className="text-xs flex gap-1 justify-center pt-1">
						Start a conversation with your friends
					</p>
				</div>
			)}
		</div>
	);
};

export default MessageList;
