import { getRandomColor } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
interface ChatBubbleProps {
	messageId: string;
	time: string;
	message: string;
	user: {
		userId: string | undefined;
		username: string | null | undefined;
		userProfileImage: string | undefined;
	};
}

const ChatBubble = ({ time, message, user }: ChatBubbleProps) => {
	const { userId } = useAuth();

	const isUserMessage = userId === user.userId; // Check if the sender is the user

	return (
		<div
			className={`flex items-start ${
				isUserMessage ? "flex-row-reverse" : "justify-start"
			} gap-2 md:gap-3`}
		>
			{/* Avatar */}
			<Avatar className="flex items-center justify-center size-[35px] md:size-[40px] lg:size-[45px]">
				<AvatarImage
					src={isUserMessage ? user.userProfileImage : ""}
					className="size-[40px] lg:size-[45px] rounded-full"
				/>
				<AvatarFallback
					style={{ backgroundColor: getRandomColor() }}
					className="flex items-center justify-center size-[40px] lg:size-[50px]"
				>
					{/* Fallback */}
					<img
						src="/icons/discord.svg"
						className="size-[30px] rounded-full m-auto"
					/>
				</AvatarFallback>
			</Avatar>

			<div className="max-w-[60%]">
				<div
					className={`flex items-baseline gap-4 ${
						isUserMessage ? "justify-end" : "justify-start"
					}`}
				>
					<span className="font-bold text-[#FFFFFFE5] text-[13px] md:text-[14px]">
						{isUserMessage ? user.username : "Someone Else"}
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
