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
			className={`flex items-start p-2 relative  ${
				isUserMessage ? "flex-row-reverse py-1" : "justify-start py-3"
			} gap-2`}
		>
			<Avatar className="hidden md:flex items-center justify-center size-[35px] md:size-[40px]">
				<AvatarImage
					src={user.userProfileImage}
					className="size-[40px] rounded-full"
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
			<div
				className={`flex flex-col gap-1 relative  bg-blue-500 text-white p-3 rounded-2xl max-w-[95%] sm:max-w-[80%] md:max-w-[70%] text-xs sm:text-sm before:content-[''] before:absolute before:top-0  before:border-[10px] before:border-t-transparent before:border-b-transparent before:border-r-transparent before:border-l-blue-500 before:rotate-90 ${
					isUserMessage
						? "rounded-tr-none before:right-[-10px]"
						: "rounded-tl-none before:left-[-10px]"
				}`}
			>
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
