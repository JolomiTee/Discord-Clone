import FriendCard from "@/components/common/sidebar_buttons/FriendCard";
import { Skeleton } from "@/components/ui/skeleton";
import useClerkQuery from "@/hooks/use-query";
import { Friends } from "@/types";
import { Plus } from "lucide-react";

const FriendsList = () => {
	const { data, isLoading, error } = useClerkQuery(
		"http://localhost:6464/api/user/friends"
	);

	console.log(data);

	return (
		<div className=" grid overflow-y-auto max-h-full scrollbar-hidden">
			{isLoading ? (
				<>
					<Skeleton className="h-10 w-full mb-3" />
				</>
			) : error ? (
				<div className="text-center">
					Wumpus was unable to find your friends
				</div>
			) : data.friends.length > 0 ? (
				data.map((friends: Friends) => {
					const {
						_id,
						username,
						firstName,
						lastName,
						email_address,
						profile_image_url,
					} = friends;
					return (
						<FriendCard
							key={_id}
							slug={username}
							dmId={_id}
							user={username}
							profileImg={profile_image_url}
							// online={online}
							// hasMessage={hasMessage}
							// messageCount={messageCount}
							// pinned={pinned}
						/>
					);
				})
			) : (
				// data.friends.map((friend: any) => {
				// 	const { username } = friend;

				// 	return <div>{username}</div>;
				// })
				<div className="text-center">
					No friends here, just Wumpus <br />
					<p className="text-xs flex gap-1 justify-center pt-1">
						Add some by clicking the{" "}
						<Plus className="inline-flex text-discord-blue" size={15} />{" "}
						icon
					</p>
				</div>
			)}
		</div>
	);
};

export default FriendsList;
