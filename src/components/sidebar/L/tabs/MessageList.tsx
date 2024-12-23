import DMCard from "@/components/common/sidebar_buttons/DMCard";
import LoadingFriendList from "@/components/common/skeletons/LoadingFriendList";
import useClerkQuery from "@/hooks/use-query";
import { Friends } from "@/types";

const MessageList = () => {
	const { data, isLoading, error } = useClerkQuery<Friends[]>("recent-chat");
	console.log(data?.data);

	if (!data) {
		return;
	}

	if (isLoading) {
		<LoadingFriendList />;
	}

	if (error) {
		<div className="text-center">Wumpus couldnt find your recent chats</div>;
	}

	return (
		<div className="grid overflow-y-auto max-h-full scrollbar-hidden">
			{data.data.length > 0 ? (
				data.data.map((dms: Friends) => {
					const {
						_id,
						username,
						firstName,
						lastName,
						email_address,
						profile_image_url,
						isFriend,
					} = dms;

					return (
						<DMCard
							key={_id}
							slug={username}
							_id={_id}
							username={username}
							profile_image_url={profile_image_url}
							firstName={firstName}
							lastName={lastName}
							email_address={email_address}
							isFriend={isFriend}
						/>
					);
				})
			) : (
				<div className="text-center pt-5">
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
