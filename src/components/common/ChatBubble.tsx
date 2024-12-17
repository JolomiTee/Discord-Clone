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
			className={`flex items-start p-2   ${
				isUserMessage ? "flex-row-reverse py-1" : "justify-start py-3"
			} gap-2 md:gap-3`}
		>
			{/* Avatar */}
			{!isUserMessage && (
				<Avatar className="flex items-center justify-center size-[35px] md:size-[40px] lg:size-[45px]">
					<AvatarImage
						src={user.userProfileImage}
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
			)}

			<div className="max-w-[90%] sm:max-w-[80%] flex flex-col gap-1 border px-3 py-3 rounded-[10px]">
				<div
					className={`flex items-baseline gap-4 ${
						isUserMessage ? "justify-end" : "justify-start"
					}`}
				>
					<span className="font-bold text-[#FFFFFFE5] text-[13px] md:text-[15px]">
						{!isUserMessage && user.username}
					</span>
				</div>

				<p className="text-[13px] md:text-[14px] text-white">{message}</p>
				<div className="flex font-bold text-[#FFFFFF80] text-[11px] md:text-xs">
					<time className="ms-auto me-0">{time}</time>
				</div>
			</div>
		</div>
	);
};

export default ChatBubble;
