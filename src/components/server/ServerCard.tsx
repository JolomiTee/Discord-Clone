import { Card, CardContent, CardTitle } from "@/components/ui/card";
import usePersistAppState from "@/hooks/use-persist-app-state";
import { formatNumber } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Servers } from "@/types";

// type ServerWithoutChannels = Omit<Servers, "channels">;

const ServerCard = ({
	name,
	_id: serverId,
	members,
	profile_image_url,
}: Servers) => {
	const toggle_selected_server = usePersistAppState(
		(state) => state.toggle_selected_server
	);
	const toggle_selected_tab = usePersistAppState(
		(state) => state.toggle_selected_tab
	);
	const switchLeftSidebarContext = usePersistAppState(
		(state) => state.switchLeftSidebarContext
	);
	const onclick = () => {
		toggle_selected_tab(null);
		toggle_selected_server(serverId);
		switchLeftSidebarContext("server");
	};
	return (
		<Link to={String(serverId)} onClick={onclick}>
			<Card className="flex items-start gap-2 bg-transparent border-0 shadow-none">
				<Avatar className="rounded-[8px] size-12">
					<AvatarImage
						src={profile_image_url}
						alt={name}
						className="mx-auto my-auto object-cover"
					/>
					<AvatarFallback className="bg-discord-blue rounded-[8px]">
						<img
							src="/icons/discord.svg"
							className="w-[35px] h-[35px] mx-auto my-auto"
							alt={name}
						/>
					</AvatarFallback>
				</Avatar>

				<CardContent className="grid gap-2 text-white/[60%] text-sm p-0">
					<CardTitle className="text-white">{name}</CardTitle>
					<div className="flex flex-wrap items-start gap-1 sm:gap-3 text-xs sm:text-sm">
						{/* <div className="flex items-center gap-2">
							<div className="bg-emerald size-2 rounded-full shrink-0" />
							{formatNumber(2)} online
						</div> */}
						<div className="flex items-center gap-2">
							<div className="bg-[#898989] size-2 rounded-full shrink-0" />
							{members?.length} member
						</div>
					</div>
					<p className="text-xs sm:text-sm leading-none">
						Last seen: {"yesterday"}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ServerCard;
