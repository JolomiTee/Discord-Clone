import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

interface Props {
	serverId: string | undefined;
	channelId: string;
	channel: {
		name: string;
		type: string;
	};
}

const ServerChannelButton = ({ serverId, channelId, channel }: Props) => {
	const location = useLocation();
	return (
		<SidebarMenuButton
			isActive={location.pathname.includes(String(channelId))}
			asChild
		>
			<Link
				key={channelId}
				to={`@server/${String(serverId)}/@channel/${String(channelId)}`}
				className="flex justify-start items-center gap-2"
			>
				<img
					src={`/icons/${channel.type}.svg`}
					alt={channel.name}
					width={26}
					height={26}
				/>
				{channel.name}
			</Link>
		</SidebarMenuButton>
	);
};

export default ServerChannelButton;
