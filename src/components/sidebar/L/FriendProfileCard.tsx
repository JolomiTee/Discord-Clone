import { getRandomColor } from "@/lib/utils";
import IconButtons from "../../common/IconButtons";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Link } from "react-router-dom";

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
const FriendProfileCard = ({
	profileImg,
	id,
	user,
	online,
	hasMessage,
	pinned,
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
					className={`absolute -right-1 bottom-0 ${
						online ? "bg-emerald" : "bg-gray"
					} rounded-full size-4 border-[3px] border-solid border-onyx`}
				></div>
			</div>
			<span
				className={hasMessage ? "font-bold text-sm" : "font-normal text-sm"}
			>
				{user}
			</span>

			<div className="flex items-center justify-start gap-3 ms-auto me-0 ">
				{pinned && <IconButtons src="pin" alt="Pinned" />}
			</div>
		</Link>
	);
};

export default FriendProfileCard;
