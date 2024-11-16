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

interface props {
	profileImg: string;
	user: string;
	id: number;
	online: boolean;
	hasMessage: boolean;
	messageCount?: number;
	pinned: boolean;
	action?: () => void;
}
const FriendCard = ({
	profileImg,
	id,
	user,
	online,
	hasMessage,
	action,
}: props) => {
	return (
		<Link
			to={`@me/dm/${String(id)}`}
			className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
			onClick={action}
		>
			<div className="relative">
				<Avatar className="flex items-center justify-center">
					<AvatarImage
						src={profileImg}
						className="size-[35px]  rounded-full"
					/>
					<AvatarFallback
						className="flex items-center justify-center"
						style={{ backgroundColor: getRandomColor() }}
					>
						<img
							src="/icons/discord.svg"
							className="size-[35px] rounded-full"
						/>
					</AvatarFallback>
				</Avatar>
				<div
					className={`absolute -right-0 bottom-0 ${
						online ? "bg-emerald" : "bg-gray"
					} rounded-full size-3 border-[2px] border-carbon`}
				></div>
			</div>
			<span
				className={hasMessage ? "font-bold text-sm" : "font-normal text-sm"}
			>
				{user}
			</span>

			<div className="flex items-center justify-start gap-3 ms-auto me-0 ">
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
			</div>
			{/* <DropdownMenu>
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
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Keyboard shortcuts
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								Invite users
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Email</DropdownMenuItem>
									<DropdownMenuItem>Message</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>More...</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							New Team
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>GitHub</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuItem disabled>API</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu> */}
		</Link>
	);
};

export default FriendCard;
