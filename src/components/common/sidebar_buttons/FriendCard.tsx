import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getRandomColor } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { useHMenuSelectedClient } from "@/hooks/use-dms";
import { Friends } from "@/types";
import {
	LucideMessageSquareDot,
	MessageSquarePlus,
	UserRoundPlus,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import FriendAction from "@/components/dialogs/FriendAction";

interface Props extends Friends {
	slug: string;
	action: Dispatch<SetStateAction<string>>;
	friendReqCard?: boolean;
}

const FriendCard = ({
	chatId,
	friendReqCard,
	profile_image_url,
	_id,
	username,
	firstName,
	lastName,
	email_address,
	isFriend,
	slug,
	action,
}: Props) => {
	const updateHMenuSelectedClient = useHMenuSelectedClient(
		(state) => state.updateHMenuSelectedClient
	);

	return (
		<div
			id={slug}
			className="p-0 ms-0 text-white flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
		>
			<div className="relative">
				<Avatar className="flex items-center justify-center">
					<AvatarImage
						src={profile_image_url}
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
				{/* <div
						className={`absolute -right-0 bottom-0 ${
							online ? "bg-emerald" : "bg-gray"
						} rounded-full size-3 border-[2px] border-solid border-charcoal`}
					></div> */}
			</div>
			{/* <span className={hasMessage ? "font-bold" : "font-normal"}> */}
			{username}
			{/* </span> */}

			<div className="flex items-center justify-start gap-3 ms-auto me-0 ">
				{friendReqCard ? (
					<div className="flex gap-3">
						<Button
							title="Send friend request"
							className="rounded-[10px] bg-discord-blue "
						>
							<UserRoundPlus strokeWidth={2.5} /> Send Request
						</Button>
						<Button
							title="Send a message"
							className="rounded-[10px] bg-discord-blue "
						>
							<MessageSquarePlus strokeWidth={2.5} />
						</Button>
					</div>
				) : (
					<div className="flex items-center gap-3">
						<Link
							type="button"
							title="Send a message"
							to={`@me/dm/${username}`}
							onClick={() => {
								updateHMenuSelectedClient({
									_id,
									username,
									firstName,
									lastName,
									email_address,
									profile_image_url,
									isFriend,
									chatId,
								});

								// conditionally take action
								action("messages");
							}}
						>
							<LucideMessageSquareDot />
						</Link>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									size={"icon"}
									className="bg-transparent shadow-none rounded-full"
								>
									<img
										src={`/icons/more_h.svg`}
										alt="more"
										className="size-5"
									/>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-onyx w-40 text-sidebar-primary-foreground rounded-[8px] flex flex-col gap-1">
								<DropdownMenuItem asChild>
									<FriendAction
										trigger="remove"
										friendId={_id}
										username={username}
									/>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<FriendAction
										trigger="block"
										friendId={_id}
										username={username}
									/>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				)}
			</div>
		</div>
	);
};

export default FriendCard;
