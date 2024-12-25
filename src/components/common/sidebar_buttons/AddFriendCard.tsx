import { getRandomColor } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useClerkRequest } from "@/hooks/use-query";
import { Friends } from "@/types";
import { CheckCheck, Loader, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { toast } from "sonner";

const AddFriendCard = ({
	profile_image_url,
	_id,
	username,
	isFriend,
}: Omit<Friends, "firstName" | "lastName" | "email_address">) => {
	console.log(_id);

	const { mutate, isLoading: isMutationLoading } = useClerkRequest("POST", [
		"added-friends",
	]);

	const handleAddFriend = () => {
		mutate(
			{
				url: `friends/${_id}`,
			},
			{
				onSuccess: () => {
					toast(`${username} is now a friend`);
				},
			}
		);
	};

	return (
		<SidebarMenuButton className="p-0 ms-0 text-white " asChild>
			<Link
				to={`@me/dm/${String(_id)}`}
				className="flex flex-wrap h-full gap-3 bg-transparent shadow-none"
				onClick={handleAddFriend}
			>
				<div className="relative">
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src={profile_image_url}
							alt={username}
							className="size-[40px]  rounded-full"
						/>
						<AvatarFallback
							className="flex items-center justify-center"
							style={{ backgroundColor: getRandomColor() }}
						>
							<img
								src="/icons/discord.svg"
								alt={username}
								className="size-[35px] rounded-full"
							/>
						</AvatarFallback>
					</Avatar>
				</div>
				<span className={isFriend ? "font-bold" : "font-normal"}>
					{username}
				</span>

				{isFriend ? (
					<div className="flex me-0 ms-auto ">
						<div className="flex gap-3">
							<Button
								disabled
								title="Already Friends"
								className="rounded-[10px] bg-discord-blue "
							>
								<CheckCheck width={30} height={30} strokeWidth={2.5} />{" "}
								<span className="hidden sm:block">Already friends</span>
							</Button>
						</div>
					</div>
				) : (
					<div className="flex items-center gap-3 me-0 ms-auto ">
						<Button
							disabled={isMutationLoading}
							title="Send friend request"
							className="rounded-[10px] bg-discord-blue "
							onClick={handleAddFriend}
						>
							{isMutationLoading ? (
								<>
									<Loader size={4} className="size-4 animate-spin" />
									Adding Friend
								</>
							) : (
								<>
									<UserRoundPlus
										width={30}
										height={30}
										strokeWidth={2.5}
									/>{" "}
									<span className="hidden sm:block">Add</span>
								</>
							)}
						</Button>
					</div>
				)}
			</Link>
		</SidebarMenuButton>
	);
};

export default AddFriendCard;
