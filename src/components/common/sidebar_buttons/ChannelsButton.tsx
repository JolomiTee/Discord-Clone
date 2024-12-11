import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Channels } from "@/types";
import { Link } from "react-router-dom";

interface ChannelListProps {
	value: string;
	section: string;
	serverId: string | undefined;
	channel: Channels[] | undefined;
}

interface ChannelsButtonProps {
	serverId: string | undefined;
	channelId: string;
	name: string;
	type: string;
	slug: string;
}

const ChannelList = ({
	value,
	section,
	channel,
	serverId,
}: ChannelListProps) => {
	return (
		<AccordionItem value={value} className="border-none">
			<AccordionTrigger className="pt-0">{section}</AccordionTrigger>
			<AccordionContent className="px-0 flex flex-col gap-3">
				{channel?.map((channels) => {
					const { _id, name, channelType } = channels;
					return (
						<ChannelsButton
							key={_id}
							serverId={serverId}
							channelId={_id}
							name={name}
							slug={name}
							type={channelType}
						/>
					);
				})}
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
}: ChannelsButtonProps) => {
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
			>
				<img
					src={`/icons/${type}-channel.svg`}
					alt={slug}
					width={22}
					height={22}
				/>
				{name}
			</Link>
		</SidebarMenuButton>
	);
};

export default ChannelList;
