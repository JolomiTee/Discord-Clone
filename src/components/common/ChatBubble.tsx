import { getRandomColor } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
interface props {
	profileImg: string;
	user: string;
	time: string;
	message: string;
}

const ChatBubble = ({ user, time, message, profileImg }: props) => {
	return (
		<div className="flex items-start justify-start gap-3 bg-transparent shadow-none">
			<div className="relative">
				<Avatar className="flex items-center justify-center">
					<AvatarImage
						src={profileImg}
						className="w-[50px] h-[50px] rounded-full"
					/>
					<AvatarFallback
						style={{ backgroundColor: getRandomColor() }}
						className="flex items-center justify-center w-[50px] h-[50px] "
					>
						<img
							src="/icons/discord.svg"
							className="w-[30px] h-[30px] rounded-full m-auto"
						/>
					</AvatarFallback>
				</Avatar>
			</div>
			<div>
				<div className="flex items-baseline gap-4">
					<span className="font-bold text-[#FFFFFFE5]">{user}</span>
					<span className="font-bold text-[#FFFFFF80] text-xs">
						{time}
					</span>
				</div>
				<p className="text-sm text-[#FFFFFFCC]">{message}</p>
			</div>
		</div>
	);
};

export default ChatBubble;
