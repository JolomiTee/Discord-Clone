import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

interface ChannelListProps {
	value: string;
	section: string;
	serverId: string | undefined;
	channel: {
		id: number;
		slug: string;
		name: string;
		type: string;
	}[];
}

interface ChannelsButtonProps {
	serverId: string | undefined;
	channelId: number;
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
			<AccordionContent className="px-3 flex flex-col gap-3">
				{channel.map((channels) => {
					const { id, name, type, slug } = channels;
					return (
						<ChannelsButton
							key={id}
							serverId={serverId}
							channelId={id}
							name={name}
							slug={slug}
							type={type}
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
			id={`${slug}-${channelId}`}
			className="data-[active=true]:text-white data-[active=true]:font-bold data-[active=true]:bg-charcoal rounded-[15px] transition-all duration-500 p-0"
			isActive={location.pathname.includes(String(channelId))}
			asChild
		>
			<Link
				to={`@server/${String(serverId)}/@channel/${String(channelId)}`}
				className="flex justify-start items-center gap-2 text-base"
			>
				<img src={`/icons/${type}.svg`} alt={slug} width={22} height={22} />
				{name}
			</Link>
		</SidebarMenuButton>
	);
};

export default ChannelList;
