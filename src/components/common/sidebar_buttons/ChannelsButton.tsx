import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

interface Props {
	serverId: string | undefined;
	channelId: number;
	name: string;
	type: string;
	slug: string;
}
const ChannelsButton = ({ serverId, channelId, name, type, slug }: Props) => {
	return (
		<SidebarMenuButton
			id={`${slug}-${channelId}`}
			className="data-[active=true]:text-white data-[active=true]:font-bold data-[active=true]:bg-charcoal rounded-[15px] transition-all duration-500"
			isActive={location.pathname.includes(String(channelId))}
			asChild
		>
			<Link
				to={`@server/${String(serverId)}/@channel/${String(channelId)}`}
				className="flex justify-start items-center gap-2"
			>
				<img src={`/icons/${type}.svg`} alt={slug} width={26} height={26} />
				{name}
			</Link>
		</SidebarMenuButton>
	);
};

export default ChannelsButton;
