import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const FooterCard = () => {
	const online = true;
	return (
		<div className="flex items-center justify-start h-[55px] gap-3 bg-transparent shadow-none bg-gradient-to-l from-charcoal via-gray-200 to-gray-200 w-full py-3">
			<div className="relative">
				<Avatar className="flex items-center justify-center size-[40px]">
					<AvatarImage src={""} className="size-[20px] rounded-full" />
					<AvatarFallback className="flex items-center justify-center bg-discord-blue rounded-full size-[40px]">
						<img
							src="/icons/discord.svg"
							className="size-[25px] rounded-full"
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
