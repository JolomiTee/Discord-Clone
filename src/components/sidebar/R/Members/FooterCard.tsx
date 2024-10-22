import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const FooterCard = () => {
	const online = true;
	return (
		<div className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none bg-gradient-to-l from-charcoal via-gray-200 to-gray-200 w-full py-3">
			<div className="relative">
				<Avatar className="flex items-center justify-center w-[40px] h-[40px]">
					<AvatarImage
						src={""}
						className="w-[20px] h-[20px] rounded-full"
					/>
					<AvatarFallback className="flex items-center justify-center bg-discord-blue rounded-full  w-[40px] h-[40px]">
						<img
							src="/icons/discord.svg"
							className="w-[25px] h-[25px] rounded-full"
						/>
					</AvatarFallback>
				</Avatar>
				<div
					className={`absolute -right-1 bottom-0 ${
						online ? "bg-emerald" : "bg-gray"
					} rounded-full w-4 h-4 border-[3px] border-solid border-onyx`}
				></div>
			</div>
			<span className={"font-bold text-sm"}>Juxtopposed</span>
		</div>
	);
};

export default FooterCard;
