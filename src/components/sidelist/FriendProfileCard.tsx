import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	Pin,
	FileDown,
	MessageCircleWarning,
	Archive,
	Ellipsis,
} from "lucide-react";
import IconButtons from "../IconButtons";

interface props {
	profileImg: string;
	user: string;
	online: boolean;
	hasMessage: boolean;
	messageCount?: number;
	pinned: boolean;
}
const FriendProfileCard = ({
	profileImg,
	user,
	online,
	hasMessage,
	pinned,
}: props) => {
	return (
		<Button className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none">
			<div className="relative">
				<Avatar className="flex items-center justify-center">
					<AvatarImage
						src={profileImg}
						className="w-[35px] h-[35px]  rounded-full"
					/>
					<AvatarFallback className="flex items-center justify-center">
						<img
							src="/icons/discord.svg"
							className="w-[35px] h-[35px]  rounded-full"
						/>
					</AvatarFallback>
				</Avatar>
				<div
					className={`absolute -right-1 bottom-0 ${
						online ? "bg-emerald" : "bg-gray"
					} rounded-full w-4 h-4 border-[3px] border-solid border-onyx`}
				></div>
			</div>
			<span className={`${hasMessage ? "font-bold" : "font-normal"}`}>
				{user}
			</span>

			<div className="flex items-center justify-start gap-3 ms-auto me-0 ">
				{pinned && <IconButtons src="pin" alt="Pinned" />}

				<DropdownMenu>
					<DropdownMenuTrigger>
						<Ellipsis />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="rounded-[8px]">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Archive /> Archive
						</DropdownMenuItem>
						<DropdownMenuItem>
							<FileDown />
							Export{" "}
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Pin /> Pin
						</DropdownMenuItem>
						<DropdownMenuItem>
							<MessageCircleWarning /> Report
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</Button>
	);
};

export default FriendProfileCard;
