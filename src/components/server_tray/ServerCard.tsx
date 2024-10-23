import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatNumber } from "@/lib/utils";
interface DiscordServerProps {
	name: string;
	online: number;
	members: number;
	lastSeen: string;
	link?: string;
	muted?: boolean;
	server_img: string;
}
const ServerCard = ({
	name,
	online,
	members,
	lastSeen,
	server_img,
}: DiscordServerProps) => {
	return (
		<Card className="flex items-start gap-4 bg-transparent border-0 shadow-none">
			<Avatar className="rounded-[8px] size-12">
				<AvatarImage
					src={server_img}
					className="mx-auto my-auto object-cover"
				/>
				<AvatarFallback className="bg-discord-blue rounded-[8px]">
					<img
						src="/icons/discord.svg"
						className="w-[35px] h-[35px] mx-auto my-auto"
					/>
				</AvatarFallback>
			</Avatar>

			<CardContent className="grid gap-2 text-white/[60%] p-0">
				<CardTitle className="text-white">{name}</CardTitle>
				<div className="flex items-center gap-3 text-sm">
					<div className="flex items-center gap-2">
						<div className="bg-emerald size-3 rounded-full" />
						{formatNumber(online)} online
					</div>
					<div className="flex items-center gap-2">
						<div className="bg-[#898989] size-3 rounded-full" />
						{formatNumber(members)} members
					</div>
				</div>
				<p className="text-sm">Last seen: {lastSeen}</p>
			</CardContent>
		</Card>
	);
};

export default ServerCard;
