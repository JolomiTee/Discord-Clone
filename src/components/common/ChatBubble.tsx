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
		<div className="flex items-start justify-start gap-2 md:gap-3 bg-transparent shadow-none">
			<Avatar className="flex items-center justify-center size-[35px] md:size-[40px]">
				<AvatarImage
					src={profileImg}
					className="size-[40px] lg:size-[50px] rounded-full"
				/>
				<AvatarFallback
					style={{ backgroundColor: getRandomColor() }}
					className="flex items-center justify-center size-[40px] lg:size-[50px]"
				>
					<img
						src="/icons/discord.svg"
						className="size-[30px] rounded-full m-auto"
					/>
				</AvatarFallback>
			</Avatar>
			<div>
				<div className="flex items-baseline gap-4">
					<span className="font-bold text-[#FFFFFFE5] text-[13px] md:text-[14px]">
						{user}
					</span>
					<span className="font-bold text-[#FFFFFF80] text-[11px] md:text-xs">
						{time}
					</span>
				</div>
				<p className="text-[13px] md:text-[14px] text-[#FFFFFFCC]">
					{message}
				</p>
			</div>
		</div>
	);
};

export default ChatBubble;
