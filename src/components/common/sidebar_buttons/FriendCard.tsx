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
		<SidebarMenuButton className="p-0 ms-0 text-white " asChild>
			<Link
				to={`@me/dm/${String(id)}`}
				className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none"
				onClick={action}
			>
				<div className="relative">
					<Avatar className="flex items-center justify-center">
						<AvatarImage
							src={profileImg}
							className="size-[40px]  rounded-full"
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
						} rounded-full size-3 border-[2px] border-solid border-charcoal`}
					></div>
				</div>
				<span className={hasMessage ? "font-bold" : "font-normal"}>
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
			</Link>
		</SidebarMenuButton>
	);
};

export default FriendCard;