import FriendCard from "@/components/common/sidebar_buttons/FriendCard";
import { Skeleton } from "@/components/ui/skeleton";
import useClerkQuery from "@/hooks/use-query";
import { Friends } from "@/types";
import { Plus } from "lucide-react";

const FriendsList = () => {
	const { data, isLoading, error } = useClerkQuery(
		"http://localhost:6464/api/user"
	);

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
			) : data.length > 0 ? (
				data.map((friends: Friends) => {
					const {
						profileImg,
						user,
						online,
						hasMessage,
						messageCount,
						id,
						slug,
						pinned,
					} = friends;
					return (
						<FriendCard
							key={id}
							slug={slug}
							dmId={id}
							user={user}
							profileImg={profileImg}
							online={online}
							hasMessage={hasMessage}
							messageCount={messageCount}
							pinned={pinned}
						/>
					);
				})
			) : (
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
