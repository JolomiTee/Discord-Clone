import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getRandomColor } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { MessageSquarePlus, UserRoundPlus } from "lucide-react";
import { useHMenuSelectedClient } from "@/hooks/use-dms";
import { Friends } from "@/types";

interface Props extends Friends {
	slug: string;
	friendReqCard?: boolean;
}

const FriendCard = ({
	friendReqCard,
	profile_image_url,
	_id,
	username,
	firstName,
	lastName,
	email_address,
	isFriend,
	slug,
}: Props) => {
	const updateHMenuSelectedClient = useHMenuSelectedClient(
		(state) => state.updateHMenuSelectedClient
	);

	return (
		<SidebarMenuButton id={slug} className="p-0 ms-0 text-white " asChild>
			<Link
				to={`@me/dm/${String(_id)}`}
				className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
				onClick={() => {
					updateHMenuSelectedClient({
						_id,
						username,
						firstName,
						lastName,
						email_address,
						profile_image_url,
						isFriend,
					});
				}}
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
							<DropdownMenuContent className="bg-onyx w-40 text-sidebar-primary-foreground rounded-[8px]">
								<DropdownMenuItem>Unfriend</DropdownMenuItem>
								<DropdownMenuItem>Block</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</Link>
		</SidebarMenuButton>
	);
};

export default FriendCard;
