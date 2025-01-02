import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRandomColor } from "@/lib/utils";
import { Message } from "@/types";
import { format } from "date-fns";

import { useParams } from "react-router-dom";

const ChatBubble = ({ createdAt, message, sender_info }: Message) => {
	const { username } = useParams();

	const isUserMessage = username !== sender_info?.username; // Check if the sender_info is the user

	return (
		<div
			className={`flex items-start p-2 relative  ${
				isUserMessage ? "flex-row-reverse py-1" : "justify-start py-3"
			} gap-2`}
		>
			<Avatar className="hidden md:flex items-center justify-center size-[35px] md:size-[40px]">
				<AvatarImage
					src={sender_info?.profile_image_url}
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
						{!isUserMessage && sender_info?.username}
					</span>
				</div>

				<p className="text-[13px] md:text-[14px] text-white">{message}</p>
				<div className="flex font-bold text-[#FFFFFF80] text-[11px] md:text-xs">
					<time className="ms-auto me-0">
						{format(new Date(createdAt), "MMM d, yyyy h:mm a")}
					</time>
				</div>
			</div>
		</div>
	);
};

export default ChatBubble;
