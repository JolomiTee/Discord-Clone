import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getRandomColor } from "@/lib/utils";

interface props {
	profileImg: string;
	user: string;
	id: number;
	online: boolean;
	hasMessage: boolean;
	messageCount?: number;
	action?: () => void;
}
const ChannelSearch = ({
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
		</Link>
	);
};

export default ChannelSearch;
