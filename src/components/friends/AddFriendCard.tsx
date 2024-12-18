import { getRandomColor } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { CheckCheck, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface props {
	profileImg: string;
	user: string;
	userId: string;
	online: boolean;
	hasMessage: boolean;
	messageCount?: number;
	pinned: boolean;
	slug: string;
	action?: () => void;
	isFriend: boolean;
}
const AddFriendCard = ({
	profileImg,
	userId,
	user,
	online,
	hasMessage,
	action,
	isFriend,
	slug,
}: props) => {
	return (
		<SidebarMenuButton className="p-0 ms-0 text-white " asChild>
			<Link
				to={`@me/dm/${String(userId)}`}
				className="flex flex-wrap h-full gap-3 bg-transparent shadow-none"
				onClick={action}
			>
				<div className="relative">
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src={profileImg}
							alt={slug}
							className="size-[40px]  rounded-full"
						/>
						<AvatarFallback
							className="flex items-center justify-center"
							style={{ backgroundColor: getRandomColor() }}
						>
							<img
								src="/icons/discord.svg"
								alt={slug}
								className="size-[35px] rounded-full"
							/>
						</AvatarFallback>
					</Avatar>
					<div
						className={`absolute -right-0 bottom-0 ${
							online ? "bg-emerald" : "bg-gray"
						} rounded-full size-3 border-[2px] border-solid border-charcoal`}
					></div>
				</div>
				<span className={hasMessage ? "font-bold" : "font-normal"}>
					{user}
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
						{/* <Button
								title="Send friend request"
								className="rounded-[10px] bg-discord-blue "
							>
								<Send width={30} height={30} strokeWidth={2.5} />{" "}
								<span className="hidden sm:block">Send Request</span>
							</Button> */}
						<Button
							title="Send friend request"
							className="rounded-[10px] bg-discord-blue "
						>
							<UserRoundPlus width={30} height={30} strokeWidth={2.5} />{" "}
							<span className="hidden sm:block">Add</span>
						</Button>
					</div>
				)}
			</Link>
		</SidebarMenuButton>
	);
};

export default AddFriendCard;
