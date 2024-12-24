import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useHMenuSelectedClient } from "@/hooks/use-dms";
import { Channels } from "@/types";
import { Link } from "react-router-dom";

import ChannelCrudActions from "@/components/dialogs/ChannelCrudActions";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteChannel from "./DeleteChannel";
import { useUser } from "@clerk/clerk-react";

interface ChannelListProps {
	value: string;
	section: string;
	serverId: string | undefined;
	channel: Channels[] | undefined;
	serverOwner: boolean;
}

interface ChannelsButtonProps {
	serverId: string | undefined;
	channelId: string;
	name: string;
	type: string;
	slug: string;
	serverOwner: boolean;
}

const ChannelList = ({
	value,
	section,
	channel,
	serverId,
	serverOwner,
}: ChannelListProps) => {
	return (
		<AccordionItem value={value} className="border-none">
			<AccordionTrigger className="pt-0">{section}</AccordionTrigger>
			<AccordionContent className="px-0 flex flex-col gap-3">
				{channel && channel.length === 0 ? (
					<span className="ps-5">No {section.toLowerCase()}</span>
				) : (
					channel?.map((channels) => {
						const { _id, name, channelType } = channels;
						return (
							<ChannelsButton
								serverOwner={serverOwner}
								key={_id}
								serverId={serverId}
								channelId={_id}
								name={name}
								slug={name}
								type={channelType}
							/>
						);
					})
				)}
			</AccordionContent>
		</AccordionItem>
	);
};

const ChannelsButton = ({
	serverId,
	channelId,
	name,
	type,
	slug,
	serverOwner,
}: ChannelsButtonProps) => {
	const updateHMenuSelectedClient = useHMenuSelectedClient(
		(state) => state.updateHMenuSelectedClient
	);
	return (
		<SidebarMenuButton
			id={`${slug}-${String(channelId)}`}
			className="data-[active=true]:text-white data-[active=true]:font-bold data-[active=true]:bg-charcoal rounded-[15px] transition-all duration-500 p-0 px-3"
			isActive={location.pathname.includes(String(channelId))}
			asChild
		>
			<Link
				to={`@server/${String(serverId)}/@channel/${String(channelId)}`}
				className="flex justify-start items-center gap-2 text-base"
				onClick={() => {
					updateHMenuSelectedClient({
						_id: channelId,
						name,
						channelType: type,
					});
				}}
			>
				<img
					src={`/icons/${type}-channel.svg`}
					alt={slug}
					width={22}
					height={22}
				/>
				<span className="truncate w-full text-nowrap">{name}</span>

				{serverOwner && (
					<Dialog>
						<DropdownMenu modal={false}>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="size-7 rounded-full p-0 ms-auto me-0"
								>
									<span className="sr-only">Open menu</span>
									<MoreHorizontal size={7} />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<ChannelCrudActions
									serverId={serverId}
									trigger={"edit"}
									channelId={channelId}
								/>
								<DeleteChannel />
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Dialog content */}
					</Dialog>
				)}
			</Link>
		</SidebarMenuButton>
	);
};

export default ChannelList;
